/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.scdn.co', 'mosaic.scdn.co'],
  },
  // Explicitly disable static export to ensure server-side rendering
  output: undefined, // This ensures we don't export static files
  trailingSlash: false,
  // Ensure we're running in server mode
  experimental: {
    // No experimental features that might cause static export
  },
  // Force dynamic rendering
  generateStaticParams: false,
}

module.exports = nextConfig