/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  transpilePackages: ['framer-motion'],
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Use modern JavaScript output
  swcMinify: true,
}

module.exports = nextConfig
