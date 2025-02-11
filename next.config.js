/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  distDir: '.next',
  // Add routes that should be treated as static
  experimental: {
    staticPageGenerationTimeout: 300
  }
}

module.exports = nextConfig 