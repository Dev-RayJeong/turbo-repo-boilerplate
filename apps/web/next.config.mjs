/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@workspace/ui'],
  compress: true,
  compiler: {
    removeConsole: true,
  },
  experimental: {
    optimizePackageImports: ['lodash-es', 'date-fns', 'react-icons/*'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
}

export default nextConfig
