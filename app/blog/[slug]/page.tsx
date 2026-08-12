import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, blogPosts, generateArticleSchema } from '@/lib/blog-data';
import { BlogPostContent } from '@/components/BlogPostContent';

const BASE_URL = 'https://weandyoumarketing.com';

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: { title: post.metaTitle, description: post.metaDescription, url: `${BASE_URL}/blog/${post.slug}`, type: 'article', publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(post)) }} />
      <BlogPostContent post={post} />
    </>
  );
}
