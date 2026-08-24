import { MetadataRoute } from 'next';

const BASE_URL = 'https://weandyoumarketing.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block query-string variants that are not canonical pages
        disallow: [
          '/*?s=',    // WordPress-style search params (causes "Alternative page with proper canonical" in GSC)
          '/*?*s=',   // Catch all variants of the s= parameter
          '/api/',    // API routes should never be indexed
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
