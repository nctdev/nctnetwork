import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'], // Add any private paths you want to block
    },
    sitemap: 'https://nctnetwork.co.uk/sitemap.xml'
  }
}