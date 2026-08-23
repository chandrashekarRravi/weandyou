import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getBlogPostBySlug,
  blogPosts,
  generateArticleSchema,
} from '@/lib/blog-data';
import { BlogPostContent } from '@/components/BlogPostContent';

const BASE_URL = 'https://weandyoumarketing.com';

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const title = post.seoTitle ?? post.metaTitle ?? post.title;
  const description = post.seoDescription ?? post.metaDescription ?? post.excerpt;
  const canonicalUrl = `${BASE_URL}/blog/${post.slug}`;
  const ogImage = post.ogImage ?? post.featuredImage ?? `${BASE_URL}/og-image.png`;
  const publishedAt = post.publishedAt ?? post.date;
  const updatedAt = post.updatedAt ?? publishedAt;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'WE & YOU Marketing',
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      locale: 'en_IN',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      authors: [post.author.name],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      site: '@weandyou',
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = generateArticleSchema(post);

  // BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.category,
        item: `${BASE_URL}/blog/category/${post.categorySlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: `${BASE_URL}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPostContent post={post} />
    </>
  );
}
