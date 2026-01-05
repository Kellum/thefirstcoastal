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
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.thefirstcoastal.com',
          },
        ],
        destination: 'https://thefirstcoastal.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
