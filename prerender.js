// prerender.js
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react'; // Import React for JSX transform/createElement

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function prerender() {
  const distPath = path.resolve(__dirname, 'dist');
  const indexPath = path.resolve(distPath, 'index.html');
  const tempSsrAppPath = path.resolve(__dirname, './temp-ssr-app.js');

  // 1. Load the built client-side HTML
  let html = await fs.readFile(indexPath, 'utf-8');

  const esbuild = await import('esbuild');

  // Build the React App for Node.js environment
  const serverBuildResult = await esbuild.build({
    entryPoints: [path.resolve(__dirname, 'src/App.tsx')],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: tempSsrAppPath,
    external: ['react-dom/server', 'react-dom'],
    jsx: 'transform',
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      'global': 'globalThis'
    },
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    logLevel: 'info',
    target: 'es2020', // Ensure output is compatible with Node.js runtime
  });

  if (serverBuildResult.errors.length > 0) {
    console.error('esbuild failed during server build:', serverBuildResult.errors);
    process.exit(1);
  }

  // Dynamically import the server-rendered component
  // Important: Node.js's dynamic import has caching. Append a query param to avoid cache issues in dev.
  const { default: App } = await import(`${tempSsrAppPath}?t=${Date.now()}`);
  const ReactDOMServer = await import('react-dom/server');

  // 3. Render the App to a string
  const appHtml = ReactDOMServer.renderToString(React.createElement(App)); // Use React.createElement for clarity

  // 4. Inject the rendered app HTML into the index.html
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // 5. Write the modified HTML back
  await fs.writeFile(indexPath, html);

  // Clean up the temporary SSR build file
  await fs.unlink(tempSsrAppPath);

  console.log('Prerendering complete!');
}

prerender().catch(console.error);
