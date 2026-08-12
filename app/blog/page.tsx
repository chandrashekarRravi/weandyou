import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { BlogIndexContent } from '@/components/BlogIndexContent';

const BASE_URL = 'https://weandyoumarketing.com';

export const metadata: Metadata = {
  title: 'Blog | WE&YOU Marketing — Digital Marketing Insights India',
  description: 'Practical digital marketing guides for Indian businesses. Real pricing, honest timelines, and no-fluff advice on SEO, Google Ads, website development, and app costs.',
  alternates: { canonical: `${BASE_URL}/blog` },
};

export default function BlogPage() {
  return <BlogIndexContent posts={blogPosts} />;
}
