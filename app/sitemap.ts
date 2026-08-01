import { MetadataRoute } from 'next';
import { solutions } from '@/lib/solutions-data';
import { blogPosts } from '@/lib/blog-data';
import { industries } from '@/lib/industries-data';
import { locations } from '@/lib/locations-data';

const BASE_URL = 'https://weandyoumarketing.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const solutionUrls = solutions.map(s => ({
    url: `${BASE_URL}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogUrls = blogPosts.map(p => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const industryUrls = industries.map(i => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const locationUrls = locations.map(l => ({
    url: `${BASE_URL}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/start`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/solutions`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    ...solutionUrls,
    ...blogUrls,
    ...industryUrls,
    ...locationUrls,
  ];
}
