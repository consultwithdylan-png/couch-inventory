export async function onRequest(context) {
  const url = 'https://script.google.com/macros/s/AKfycbxr5eb42WjOQDXRn_RN9x8i4ErVFlIjS0TWOENL91zbX0Js4fp45pNA96Ef9nHkKMCf/exec?view=reviews';
  const resp = await fetch(url, { redirect: 'follow' });
  const text = await resp.text();
  return new Response(text, {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'access-control-allow-origin': '*',
      'cache-control': 'public, max-age=3600'
    }
  });
}
