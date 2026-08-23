import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  BLOG_CATEGORIES,
  getCategoryBySlug,
  getPostsByCategory,
} from '@/lib/blog-data';
import { CategoryPageContent } from '@/components/CategoryPageContent';

const BASE_URL = 'https://weandyoumarketing.com';

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map(cat => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  const title = `${category.label} Insights | WE&YOU Marketing Blog`;
  const description = `${category.description} Practical insights and strategies from WE&YOU Marketing for Indian businesses.`;
  const url = `${BASE_URL}/blog/category/${category.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'WE & YOU Marketing',
      images: [
        { url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: `${category.label} — WE&YOU Marketing Blog` },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
      site: '@weandyou',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(slug);

  // BreadcrumbList + ItemList JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: category.label, item: `${BASE_URL}/blog/category/${category.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CategoryPageContent category={category} posts={posts} />
    </>
  );
}
