import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
