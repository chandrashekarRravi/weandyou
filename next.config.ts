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
      // www → non-www (both HTTP and HTTPS variants)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.weandyoumarketing.com' }],
        destination: 'https://weandyoumarketing.com/:path*',
        permanent: true,
      },
      // HTTP non-www → HTTPS non-www (explicit, no relying on Vercel auto-redirect)
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://weandyoumarketing.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
