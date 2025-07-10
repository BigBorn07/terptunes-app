/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.scdn.co', 'mosaic.scdn.co'],
  },
  experimental: {
    // Remove deprecated appDir option - it's now default in Next.js 14
  },
}

module.exports = nextConfig