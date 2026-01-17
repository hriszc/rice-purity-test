type HelmetEntry = { toString: () => string };

interface HelmetContext {
  helmet?: {
    title: HelmetEntry;
    meta: HelmetEntry;
    link: HelmetEntry;
    script: HelmetEntry;
  };
}

const stripSeoTags = (html: string) =>
  html
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta[^>]+name=["']description["'][^>]*>/gi, '')
    .replace(/<meta[^>]+name=["']title["'][^>]*>/gi, '')
    .replace(/<meta[^>]+name=["']keywords["'][^>]*>/gi, '')
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, '')
    .replace(/<meta[^>]+property=["']og:[^"']+["'][^>]*>/gi, '')
    .replace(/<meta[^>]+name=["']twitter:[^"']+["'][^>]*>/gi, '');

export const onRequest = async (context: {
  request: Request;
  env: { ASSETS: { fetch: (request: Request) => Promise<Response> } };
}) => {
  const { request, env } = context;
  const url = new URL(request.url);

  const isAssetRequest = url.pathname.includes('.') || url.pathname.startsWith('/assets/');
  if (isAssetRequest) {
    return env.ASSETS.fetch(request);
  }

  const templateResponse = await env.ASSETS.fetch(
    new Request(new URL('/index.html', request.url), request)
  );

  if (!templateResponse.ok) {
    return templateResponse;
  }

  const template = await templateResponse.text();
  const { render } = await import('../dist/server/entry-server.js');

  const helmetContext: HelmetContext = {};
  const appHtml = render(`${url.pathname}${url.search}`, helmetContext);
  const { helmet } = helmetContext;

  let html = template.replace(
    /<div id="root">[\s\S]*?<\/div>/i,
    `<div id="root">${appHtml}</div>`
  );

  if (helmet) {
    html = stripSeoTags(html);
    const headTags = `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}${helmet.script.toString()}`;
    html = html.replace('</head>', `${headTags}</head>`);
  }

  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
};
