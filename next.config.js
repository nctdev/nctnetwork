/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  distDir: '.next',
  // Explicitly define routes that should be generated
  async generateStaticParams() {
    return [
      { path: '/' },
      { path: '/latest-projects' }
    ]
  }
}

module.exports = nextConfig 