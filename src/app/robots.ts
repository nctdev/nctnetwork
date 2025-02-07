import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/sitemap.xml', '/_next/static/'],
        disallow: ['/api/', '/private/', '/admin/', '/_next/image*'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/*.js', '/*.css'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/*.js', '/*.css'],
      },
    ],
    // Optionally add a crawl delay (in seconds)
    crawlDelay: 1,
    // Path to your sitemap
    sitemap: 'https://nctnetwork.co.uk/sitemap.xml',
    // Host directive is optional but recommended
    host: 'https://nctnetwork.co.uk',
  }
}