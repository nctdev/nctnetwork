// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://nctnetwork.co.uk',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },    // Add more routes as needed
  ]
}