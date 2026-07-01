// Simple health check for Vercel serverless functions
export default function handler(req, res) {
  console.log('[ping] invoked', { method: req.method, url: req.url, host: req.headers?.host });
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  return res.status(200).json({ ok: true, time: new Date().toISOString() });
}
