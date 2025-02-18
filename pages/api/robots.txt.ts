import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain')
  res.write(`User-agent: *
Allow: /
Allow: /sitemap.xml
Allow: /_next/static/
Disallow: /api/
Disallow: /private/
Disallow: /admin/
Disallow: /_next/image*

Sitemap: https://nctnetwork.co.uk/sitemap.xml`)
  res.end()
} 