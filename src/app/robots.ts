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
    sitemap: 'https://nctnetwork.co.uk/sitemap.xml',
    host: 'https://nctnetwork.co.uk',
  }
}