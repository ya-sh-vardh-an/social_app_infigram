const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@pqina/pintura', '@pqina/react-pintura'],
  // experimental: {
  //   serverActions: true,
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true }}],
    })

    return config;
  },
  images: {
    // domains: ['cloud.appwrite.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io',
        port: '',
        pathname: '/v1/avatars/**',
      },
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io',
        port: '',
        pathname: '/v1/storage/**',
      }
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

// Error: Invalid src prop (https://cloud.appwrite.io/v1/storage/buckets/6543d59816568e51bb80/files/654e4e635e014bb24046/preview?width=2000&height=2000&gravity=top&quality=100&project=653b9945a1328787254f) on `next/image`, hostname "cloud.appwrite.io" is not configured under images in your `next.config.js`
// See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host

module.exports = nextConfig
