import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 768, 1024, 1280, 1920],
    imageSizes: [32, 64, 128, 200, 256],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.weandyoumarketing.com' }],
        destination: 'https://weandyoumarketing.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
