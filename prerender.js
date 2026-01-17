// prerender.js
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const ROUTES = [
  { path: '/', output: 'index.html' },
  { path: '/rice-purity-test-score-meanings', output: 'rice-purity-test-score-meanings/index.html' },
  { path: '/what-is-french-kissing', output: 'what-is-french-kissing/index.html' },
  { path: '/rice-test', output: 'rice-test/index.html' },
  { path: '/about', output: 'about/index.html' }
];

async function prerender() {
  const distPath = path.resolve(__dirname, 'dist/client');
  const templatePath = path.resolve(distPath, 'index.html'); // The base template from Vite build
  const tempSsrAppPath = path.resolve(__dirname, './temp-ssr-app.cjs'); // Use .cjs extension
  
  // Read the template once
  const templateHtml = await fs.readFile(templatePath, 'utf-8');
  const normalizedTemplateHtml = templateHtml.replace(
    /<div id="root">[\s\S]*?<\/div>(?=\s*<\/body>)/i,
    '<div id="root"></div>'
  );

  const stripSeoTags = (html) =>
    html
      .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
      .replace(/<meta[^>]+name=["']description["'][^>]*>/gi, '')
      .replace(/<meta[^>]+name=["']title["'][^>]*>/gi, '')
      .replace(/<meta[^>]+name=["']keywords["'][^>]*>/gi, '')
      .replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, '')
      .replace(/<meta[^>]+property=["']og:[^"']+["'][^>]*>/gi, '')
      .replace(/<meta[^>]+name=["']twitter:[^"']+["'][^>]*>/gi, '');

  const esbuild = await import('esbuild');

  try {
    // Build the React App for Node.js environment using entry-server.tsx
    // Output CommonJS to avoid ESM compatibility issues with bundled CJS dependencies
    const serverBuildResult = await esbuild.build({
      entryPoints: [path.resolve(__dirname, 'src/entry-server.tsx')],
      bundle: true,
      platform: 'node',
      format: 'cjs', // CommonJS format
      outfile: tempSsrAppPath,
      jsx: 'automatic',
      define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        'global': 'globalThis'
      },
      logLevel: 'info',
      target: 'node16', // Target Node environment
    });

    if (serverBuildResult.errors.length > 0) {
      throw new Error(`esbuild failed: ${JSON.stringify(serverBuildResult.errors)}`);
    }

    // Import the CommonJS bundle
    // We use a query parameter to bust cache if needed, though mostly relevant for watch mode
    const { render } = require(tempSsrAppPath);

    // Render each route
    for (const route of ROUTES) {
      console.log(`Prerendering ${route.path}...`);
      
      const helmetContext = {}; // Reset context for each route
      
      // Call the exported render function
      const appHtml = render(route.path, helmetContext);

      const { helmet } = helmetContext;

      let html = normalizedTemplateHtml;
      
      // Inject App HTML
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
      
      // Inject SEO Meta
      if (helmet) {
        // Clean up any existing SEO tags from the template to avoid duplicates or stale data
        html = stripSeoTags(html);

        const headTags = `
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          ${helmet.script.toString()}
        `;
        html = html.replace('</head>', `${headTags}</head>`);
      }

      // Determine output path
      const outputPath = path.resolve(distPath, route.output);
      const outputDir = path.dirname(outputPath);

      await fs.mkdir(outputDir, { recursive: true });
      await fs.writeFile(outputPath, html);
      console.log(`Generated ${route.output}`);
    }

    console.log('Prerendering complete!');
  } catch (error) {
    console.error('Prerendering failed:', error);
    process.exit(1);
  } finally {
    // Clean up temporary files
    await fs.unlink(tempSsrAppPath).catch(() => {});
  }
}

prerender().catch(console.error);
