const BASE_URL = 'https://weandyoumarketing.com';

// ─── Category Model ──────────────────────────────────────────────────────────

export interface BlogCategory {
  slug: string;
  label: string;
  description: string;
  /** URL of the related service page — used for cross-linking */
  relatedServicePath?: string;
  /** Icon name hint for UI (lucide-react icon name string) */
  icon?: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: 'digital-marketing',
    label: 'Digital Marketing',
    description: 'Strategy, channels, and fundamentals for growing your business online.',
    relatedServicePath: '/solutions/social-media-marketing',
    icon: 'TrendingUp',
  },
  {
    slug: 'seo',
    label: 'SEO',
    description: 'Practical search engine optimisation advice for Indian businesses.',
    relatedServicePath: '/solutions/seo-optimization',
    icon: 'Search',
  },
  {
    slug: 'social-media',
    label: 'Social Media',
    description: 'Content, strategy, and growth across Instagram, LinkedIn, and beyond.',
    relatedServicePath: '/solutions/social-media-marketing',
    icon: 'Share2',
  },
  {
    slug: 'branding',
    label: 'Branding',
    description: 'Identity, positioning, and creative direction for memorable brands.',
    relatedServicePath: '/solutions/branding',
    icon: 'Palette',
  },
  {
    slug: 'website-technology',
    label: 'Website & Technology',
    description: 'Website development, performance, and technical decisions explained.',
    relatedServicePath: '/solutions/website-development',
    icon: 'Monitor',
  },
  {
    slug: 'business-growth',
    label: 'Business Growth',
    description: 'Go-to-market, lead generation, and scaling strategies for founders.',
    relatedServicePath: '/start',
    icon: 'BarChart3',
  },
  {
    slug: 'local-business',
    label: 'Local Business Marketing',
    description: 'Hyperlocal marketing tactics for businesses serving specific cities and regions.',
    relatedServicePath: '/solutions/seo-optimization',
    icon: 'MapPin',
  },
];

// Map display category name → category slug (for existing articles)
const CATEGORY_LABEL_TO_SLUG: Record<string, string> = {
  'Website Development': 'website-technology',
  'App Development': 'website-technology',
  'SEO': 'seo',
  'Digital Marketing': 'digital-marketing',
  'Social Media': 'social-media',
  'Branding': 'branding',
  'Business Growth': 'business-growth',
  'Local Business Marketing': 'local-business',
};

// ─── Article Content Blocks ───────────────────────────────────────────────────

export type BlogSection =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string; id?: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'ordered-list'; items: string[] }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'cta'; text: string; href: string; label: string };

// ─── Author Model ─────────────────────────────────────────────────────────────

export interface BlogAuthor {
  name: string;
  title: string;
  bio: string;
  /** Relative or absolute URL to author avatar */
  avatar?: string;
}

export const WE_AND_YOU_AUTHOR: BlogAuthor = {
  name: 'WE & YOU Marketing',
  title: 'Digital Marketing Agency, Bangalore',
  bio: 'WE & YOU Marketing is a full-service digital marketing and technology agency based in Bangalore, India. We help businesses grow online through SEO, paid ads, social media, website development, and branding.',
};

// ─── Blog Post Model ──────────────────────────────────────────────────────────

export interface BlogPost {
  // Core
  slug: string;
  title: string;
  excerpt: string;

  // Taxonomy
  category: string;          // Display label e.g. "SEO"
  categorySlug: string;      // URL slug e.g. "seo"
  tags?: string[];

  // Authorship & Dates
  author: BlogAuthor;
  publishedAt: string;       // ISO date string  e.g. "2026-07-01"
  updatedAt?: string;        // ISO date string (optional)

  // Presentation
  featuredImage?: string;    // URL or path — undefined = gradient placeholder
  readingTime: string;       // e.g. "6 min read"

  // Content
  sections: BlogSection[];

  // SEO
  seoTitle: string;
  seoDescription: string;
  canonicalUrl?: string;     // absolute URL — defaults to BASE_URL/blog/slug
  ogImage?: string;          // defaults to featuredImage or site OG image

  // Relationships
  relatedArticles?: string[]; // slugs of related posts
  relatedServicePath?: string; // internal link to a solutions page

  // Legacy aliases (for backward compat with old components)
  /** @deprecated use publishedAt */
  date?: string;
  /** @deprecated use seoTitle */
  metaTitle?: string;
  /** @deprecated use seoDescription */
  metaDescription?: string;
  /** @deprecated use readingTime */
  readTime?: string;
}

// ─── Articles ─────────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [

];

// ─── Helper Functions ─────────────────────────────────────────────────────────

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(p => p.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find(c => c.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  if (!post.relatedArticles?.length) return [];
  return post.relatedArticles
    .map(slug => getBlogPostBySlug(slug))
    .filter((p): p is BlogPost => !!p);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Auto-generate table of contents from H2 sections */
export function getTOC(sections: BlogSection[]): Array<{ id: string; text: string }> {
  return sections
    .filter((s): s is Extract<BlogSection, { type: 'h2' }> => s.type === 'h2')
    .map((s, i) => ({
      id: s.id ?? `section-${i}`,
      text: s.text,
    }));
}

// ─── JSON-LD Schema Generators ────────────────────────────────────────────────

export function generateArticleSchema(post: BlogPost) {
  const canonicalUrl = post.canonicalUrl ?? `${BASE_URL}/blog/${post.slug}`;
  const ogImage = post.ogImage ?? post.featuredImage ?? `${BASE_URL}/og-image.png`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seoTitle ?? post.metaTitle ?? post.title,
    description: post.seoDescription ?? post.metaDescription,
    image: ogImage,
    datePublished: post.publishedAt ?? post.date,
    dateModified: post.updatedAt ?? post.publishedAt ?? post.date,
    author: {
      '@type': 'Organization',
      name: post.author.name,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'WE & YOU Marketing',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/WE&YOU-LOGO.png` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    url: canonicalUrl,
    keywords: post.tags?.join(', '),
    articleSection: post.category,
    inLanguage: 'en-IN',
  };
}

export function generateBlogListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'WE & YOU Marketing Insights',
    description: 'Practical digital marketing insights, strategies, and ideas for businesses ready to grow online.',
    url: `${BASE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'WE & YOU Marketing',
      url: BASE_URL,
    },
  };
}
