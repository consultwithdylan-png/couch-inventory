export async function onRequest(context) {
  const url = 'https://couch-drops.consultwithdylan.workers.dev/public/reviews';
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
