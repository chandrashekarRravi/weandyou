import type { Metadata } from 'next';
import { blogPosts, BLOG_CATEGORIES, generateBlogListSchema } from '@/lib/blog-data';
import { BlogIndexContent } from '@/components/BlogIndexContent';

const BASE_URL = 'https://weandyoumarketing.com';

export const metadata: Metadata = {
  title: 'Marketing Insights Blog | WE&YOU Marketing — Digital Marketing Tips for Indian Businesses',
  description:
    'Practical digital marketing insights, strategies, and ideas from WE&YOU Marketing. SEO, social media, website development, branding — real advice for Indian businesses ready to grow online.',
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'Marketing Insights Blog | WE&YOU Marketing',
    description:
      'Practical digital marketing insights, strategies, and ideas from WE&YOU Marketing. Real advice for Indian businesses ready to grow online.',
    url: `${BASE_URL}/blog`,
    siteName: 'WE & YOU Marketing',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'WE&YOU Marketing Blog' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Insights Blog | WE&YOU Marketing',
    description: 'Practical digital marketing insights, strategies, and ideas for Indian businesses.',
    images: [`${BASE_URL}/og-image.png`],
    site: '@weandyou',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBlogListSchema()) }}
      />
      <BlogIndexContent posts={blogPosts} categories={BLOG_CATEGORIES} />
    </>
  );
}
