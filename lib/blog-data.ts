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
  {
    slug: 'how-much-does-website-development-cost-in-india',
    title: 'How Much Does Website Development Cost in India? (2026)',
    excerpt: 'Real price ranges for business websites, e-commerce platforms, and custom web applications in India — no vague "it depends" answers.',
    category: 'Website & Technology',
    categorySlug: 'website-technology',
    tags: ['website development', 'cost', 'India', 'pricing'],
    author: WE_AND_YOU_AUTHOR,
    publishedAt: '2026-07-01',
    readingTime: '6 min read',
    relatedServicePath: '/solutions/website-development',
    relatedArticles: ['how-long-does-seo-take-to-rank-a-website'],
    seoTitle: 'Website Development Cost in India 2026 | WE&YOU',
    seoDescription: 'Honest breakdown of website development costs in India for 2026. Business sites, e-commerce, custom web apps — real price ranges, no vague answers.',
    // Legacy
    date: '2026-07-01',
    metaTitle: 'Website Development Cost in India 2026 | WE&YOU',
    metaDescription: 'Honest breakdown of website development costs in India for 2026. Business sites, e-commerce, custom web apps — real price ranges, no vague answers.',
    readTime: '6 min read',
    sections: [
      { type: 'p', text: 'The most common question we get from Indian business owners: "How much does a website cost?" The honest answer has ranges — but those ranges have logic, and we\'ll walk you through exactly what drives them.' },
      { type: 'h2', text: 'Basic Business Website: ₹20,000 – ₹60,000', id: 'basic-website' },
      { type: 'p', text: 'This covers a 4–6 page informational site — Home, About, Services, Contact. Built on a CMS like WordPress, it\'s maintainable by a non-developer. Good for small local businesses, professionals, and service providers who need an online presence.' },
      { type: 'list', items: ['4–6 pages with custom design', 'Mobile responsive', 'Contact form + Google Maps', 'Basic on-page SEO', 'Delivered in 2–4 weeks'] },
      { type: 'h2', text: 'Professional Business Website: ₹60,000 – ₹2,00,000', id: 'professional-website' },
      { type: 'p', text: 'This is the right range for most growing businesses. Expect a fully custom design (no templates), lead capture forms, blog/news section, integrated booking or enquiry systems, and proper technical SEO setup. This is what actually generates business.' },
      { type: 'list', items: ['8–15 pages, custom designed', 'Advanced lead capture flows', 'Blog/news CMS', 'Performance optimisation', 'Technical SEO foundation', 'Delivered in 4–6 weeks'] },
      { type: 'h2', text: 'E-Commerce Website: ₹1,00,000 – ₹5,00,000', id: 'ecommerce-website' },
      { type: 'p', text: 'Product listing, cart, Indian payment gateway integration (Razorpay, PayU, Cashfree), order management, and inventory — these add complexity and cost. A simple Shopify store sits at the lower end. A fully custom e-commerce platform with warehouse integration sits at the higher end.' },
      { type: 'h2', text: 'Custom Web Application or Software: ₹3,00,000+', id: 'custom-web-app' },
      { type: 'p', text: 'Booking platforms, customer portals, ERP integrations, marketplace software, SaaS tools — these are scoped individually. Expect ₹3L–₹15L+ depending on feature complexity, number of user roles, and backend integrations required.' },
      { type: 'h2', text: 'What Actually Drives Website Cost in India', id: 'cost-drivers' },
      { type: 'list', items: ['Custom design vs template: custom adds 30–50% but pays off in brand credibility', 'Number of pages and content sections', 'Backend complexity: e-commerce, booking systems, APIs', 'SEO requirements: technical setup, schema, structured data', 'Ongoing maintenance: post-launch support and updates'] },
      { type: 'h2', text: 'What to Avoid', id: 'what-to-avoid' },
      { type: 'p', text: 'Be cautious of ₹5,000–₹15,000 website offers. These are almost always template-based, poorly optimised, and will need to be rebuilt within 12–18 months. A website is a business asset — treat it like one.' },
      { type: 'cta', text: 'Need a website that actually generates leads for your business?', href: '/start', label: 'Get a Free Quote' },
    ],
  },
  {
    slug: 'how-long-does-seo-take-to-rank-a-website',
    title: 'How Long Does SEO Take to Rank a Website? Honest Answer.',
    excerpt: 'The real SEO timeline for Indian businesses — when to expect rankings, what affects speed, and what "progress" actually looks like month by month.',
    category: 'SEO',
    categorySlug: 'seo',
    tags: ['SEO', 'rankings', 'India', 'timeline'],
    author: WE_AND_YOU_AUTHOR,
    publishedAt: '2026-07-08',
    readingTime: '7 min read',
    relatedServicePath: '/solutions/seo-optimization',
    relatedArticles: ['seo-vs-google-ads-which-gives-better-roi'],
    seoTitle: 'How Long Does SEO Take in India? | WE&YOU Marketing',
    seoDescription: 'Honest SEO timeline for Indian businesses. When to expect keyword rankings, what affects the timeline, and how to track real progress — not vanity metrics.',
    date: '2026-07-08',
    metaTitle: 'How Long Does SEO Take in India? | WE&YOU Marketing',
    metaDescription: 'Honest SEO timeline for Indian businesses. When to expect keyword rankings, what affects the timeline, and how to track real progress — not vanity metrics.',
    readTime: '7 min read',
    sections: [
      { type: 'p', text: 'Every SEO agency in India will tell you "results take time." That\'s true — but it\'s also often used to avoid accountability. Here\'s an honest, specific breakdown of what to expect and when.' },
      { type: 'h2', text: 'Month 1–2: Foundation, Not Rankings', id: 'month-1-2' },
      { type: 'p', text: 'The first two months are technical work: site audit, fixing crawl errors, implementing structured data, improving page speed, keyword mapping, and on-page optimisation. Rankings won\'t visibly move yet. What you should see: Google re-crawling your pages more frequently, fewer technical errors in Search Console, and baseline keyword position data established.' },
      { type: 'h2', text: 'Month 3–4: First Movements', id: 'month-3-4' },
      { type: 'p', text: 'This is when you start seeing ranking movements — particularly for lower-competition, long-tail keywords. A local Bangalore business might start appearing in positions 15–40 for specific service queries. Traffic may not increase dramatically yet, but keyword movement is measurable proof the strategy is working.' },
      { type: 'h2', text: 'Month 5–6: Meaningful Traffic Growth', id: 'month-5-6' },
      { type: 'p', text: 'By month 5–6 with consistent content and link building, most businesses start ranking on page 2–3 for their primary keywords and page 1 for secondary/local terms. Organic traffic typically increases 30–80% from the baseline. Leads from organic search become visible.' },
      { type: 'h2', text: 'Month 7–12: Compounding Returns', id: 'month-7-12' },
      { type: 'p', text: 'SEO compounds over time. The content published in month 3 is now indexed, linked to, and ranking. The technical fixes from month 1 are fully crawled. New content adds to a growing foundation. This is where competitive keyword rankings become achievable — particularly in categories like "digital marketing agency Bangalore" or "SEO company India."' },
      { type: 'h2', text: 'What Affects How Fast Your Site Ranks', id: 'ranking-factors' },
      { type: 'list', items: ['Domain age and existing authority: older domains with history rank faster', 'Competition level: "SEO agency Bangalore" is harder than "SEO agency Hubli"', 'Content quality and publishing frequency: more useful content = faster compounding', 'Technical site health: a broken site slows everything down', 'Backlinks: credible sites linking to yours signals authority to Google'] },
      { type: 'h2', text: 'How to Know Your SEO Agency Is Actually Working', id: 'measuring-seo' },
      { type: 'p', text: 'Ask for keyword position tracking reports — not just traffic. Rankings move before traffic does. If your agency can\'t show you specific keywords moving from position 45 to position 18 to position 7, they\'re not doing the work.' },
      { type: 'cta', text: 'Want monthly SEO ranking reports that actually show progress?', href: '/solutions/seo-optimization', label: 'See How We Do SEO' },
    ],
  },
  {
    slug: 'seo-vs-google-ads-which-gives-better-roi',
    title: 'SEO vs Google Ads: Which Gives Better ROI for Indian Businesses?',
    excerpt: 'An honest cost and ROI comparison between SEO and Google Ads for Indian businesses — including when to use each, and when to use both.',
    category: 'SEO',
    categorySlug: 'seo',
    tags: ['SEO', 'Google Ads', 'ROI', 'India', 'paid advertising'],
    author: WE_AND_YOU_AUTHOR,
    publishedAt: '2026-07-15',
    readingTime: '8 min read',
    relatedServicePath: '/solutions/seo-optimization',
    relatedArticles: ['how-long-does-seo-take-to-rank-a-website', 'how-much-does-website-development-cost-in-india'],
    seoTitle: 'SEO vs Google Ads ROI India 2026 | WE&YOU Marketing',
    seoDescription: 'SEO vs Google Ads — which gives better ROI for Indian businesses? Honest cost comparison, timelines, and when to use each. No generic answers.',
    date: '2026-07-15',
    metaTitle: 'SEO vs Google Ads ROI India 2026 | WE&YOU Marketing',
    metaDescription: 'SEO vs Google Ads — which gives better ROI for Indian businesses? Honest cost comparison, timelines, and when to use each. No generic answers.',
    readTime: '8 min read',
    sections: [
      { type: 'p', text: 'Indian business owners ask this question constantly. The real answer is: it depends on your timeline, budget, and business type — but the logic isn\'t complicated once you understand what each channel actually does.' },
      { type: 'h2', text: 'Google Ads: Immediate Traffic, Ongoing Cost', id: 'google-ads' },
      { type: 'p', text: 'Google Ads puts you at the top of search results immediately. Day 1 of a campaign, your ad appears for your target keywords. The trade-off: the moment you stop paying, you disappear. For businesses that need leads now — product launches, seasonal campaigns, new markets — Google Ads is the right tool.' },
      { type: 'list', items: ['Results: within 1–7 days', 'Average CPC in India: ₹15–₹80 for most business keywords', 'Cost per lead: ₹300–₹2,000 depending on industry', 'Stops working: the day you stop paying', 'Best for: immediate lead generation, product launches, competitive auctions'] },
      { type: 'h2', text: 'SEO: Slower Start, Compounding Returns', id: 'seo-returns' },
      { type: 'p', text: 'SEO takes 3–6 months to show meaningful results, but the returns compound. A page that ranks #1 on Google generates traffic for years without ongoing cost-per-click. The monthly SEO retainer replaces an ongoing ad spend — and typically delivers a lower cost per lead over 12+ months.' },
      { type: 'list', items: ['Results: 3–6 months for meaningful movement', 'Monthly retainer: ₹15,000–₹50,000 depending on scope', 'Cost per lead at maturity: often ₹100–₹500 for well-ranked pages', 'Continues working: even if you pause (though it decays without maintenance)', 'Best for: long-term growth, content-heavy businesses, local service search'] },
      { type: 'h2', text: 'Which Has Better ROI?', id: 'roi-comparison' },
      { type: 'p', text: 'Over 12 months, SEO typically delivers a lower cost per lead than Google Ads — but only after the ramp-up period. Over 3 months, Google Ads wins because SEO hasn\'t compounded yet. The honest answer: they solve different problems and aren\'t really in competition.' },
      { type: 'h2', text: 'When to Use Both Together', id: 'combined-strategy' },
      { type: 'p', text: 'The most effective strategy for most Indian businesses: run Google Ads for immediate lead generation while SEO builds in the background. As organic rankings improve over 6–12 months, reduce ad spend on the keywords you\'re now ranking for organically — reinvesting that budget into new keyword targets or higher-funnel brand campaigns.' },
      { type: 'h2', text: 'Industries Where Google Ads Wins', id: 'google-ads-wins' },
      { type: 'list', items: ['Real estate: high-value leads, searchers with strong purchase intent', 'Healthcare: patients actively searching for specific treatments', 'E-commerce: product search with purchase intent', 'Short-term campaigns: seasonal, event-based, promotional'] },
      { type: 'h2', text: 'Industries Where SEO Wins', id: 'seo-wins' },
      { type: 'list', items: ['Professional services: lawyers, accountants, consultants', 'Local service businesses: plumbers, electricians, restaurants', 'Content-led businesses: education, B2B SaaS, agencies', 'Any business where customers research before buying'] },
      { type: 'cta', text: 'Not sure which channel is right for your business?', href: '/start', label: 'Book a Free Consultation' },
    ],
  },
  {
    slug: 'cost-of-developing-a-mobile-app-in-india',
    title: 'Mobile App Development Cost in India (2026 Guide)',
    excerpt: 'Specific cost ranges for mobile app development in India — what drives price up, what keeps it down, and how to scope a project without surprises.',
    category: 'Website & Technology',
    categorySlug: 'website-technology',
    tags: ['app development', 'mobile app', 'cost', 'India', 'React Native', 'Flutter'],
    author: WE_AND_YOU_AUTHOR,
    publishedAt: '2026-07-20',
    readingTime: '7 min read',
    relatedServicePath: '/solutions/app-development',
    relatedArticles: ['how-much-does-website-development-cost-in-india'],
    seoTitle: 'Mobile App Development Cost India 2026 | WE&YOU',
    seoDescription: 'Real app development cost ranges in India for 2026. Simple apps to complex platforms — what drives price, what to expect, and how to avoid getting overcharged.',
    date: '2026-07-20',
    metaTitle: 'Mobile App Development Cost India 2026 | WE&YOU',
    metaDescription: 'Real app development cost ranges in India for 2026. Simple apps to complex platforms — what drives price, what to expect, and how to avoid getting overcharged.',
    readTime: '7 min read',
    sections: [
      { type: 'p', text: 'Mobile app development quotes in India vary wildly — from ₹50,000 to ₹50,00,000 for apps that might seem similar on the surface. Here\'s what actually drives that gap, and what you should realistically budget for different types of apps.' },
      { type: 'h2', text: 'Simple App (MVP / Informational): ₹1,50,000 – ₹3,00,000', id: 'simple-app' },
      { type: 'p', text: 'A simple app with 4–6 screens, basic user authentication, and no complex backend. Think: a digital menu app, a basic booking form, or a catalogue app. Built cross-platform (React Native or Flutter), one submission to each app store.' },
      { type: 'list', items: ['4–6 screens', 'User login / registration', 'Basic backend (read/write to database)', 'iOS + Android from one codebase', 'Timeline: 8–12 weeks'] },
      { type: 'h2', text: 'Standard Business App: ₹3,00,000 – ₹8,00,000', id: 'standard-app' },
      { type: 'p', text: 'A fully functional customer-facing or internal business app. Multiple user roles, push notifications, payment integration, real-time data, and a proper admin dashboard. This is the right category for most serious Indian business applications.' },
      { type: 'list', items: ['10–20 screens with complex flows', 'Multiple user roles (customer, admin, staff)', 'Payment gateway integration (Razorpay, etc.)', 'Push notifications', 'Real-time updates', 'Admin dashboard (web-based)', 'Timeline: 14–20 weeks'] },
      { type: 'h2', text: 'Complex Platform or Marketplace: ₹8,00,000 – ₹25,00,000', id: 'complex-app' },
      { type: 'p', text: 'Multi-sided marketplaces (like a service booking platform), social apps, apps with AI/ML features, or apps requiring deep third-party integrations fall here. Each additional integration adds development and testing time significantly.' },
      { type: 'h2', text: 'What Drives App Development Cost Up', id: 'cost-drivers' },
      { type: 'list', items: ['Native vs cross-platform: native (separate iOS + Android codebases) costs 1.5x–2x more', 'Number of API integrations: payment, maps, SMS, auth providers', 'Real-time features: chat, live tracking, live updates require WebSockets', 'Admin dashboards: often 30–40% of total project cost', 'App store fees: ₹7,200/year (Apple) + ₹1,700 one-time (Google)'] },
      { type: 'h2', text: 'How to Scope Your App Without Wasting Money', id: 'mvp-approach' },
      { type: 'p', text: 'Build an MVP (Minimum Viable Product) first. Identify the 3–5 features that are absolutely essential for launch. Get those right, get user feedback, then invest in expanding. This approach consistently delivers better apps at lower total cost than trying to build everything at once.' },
      { type: 'h2', text: 'What to Ask Any App Development Agency', id: 'questions-to-ask' },
      { type: 'list', items: ['Do you use native or cross-platform development, and why?', 'What does the admin dashboard look like, and is it included?', 'How do you handle app store submission and rejections?', 'What\'s your post-launch maintenance model?', 'Can I see examples of apps you\'ve shipped?'] },
      { type: 'cta', text: 'Have an app idea? Get a free scope and estimate from our team.', href: '/start', label: 'Get a Free Estimate' },
    ],
  },
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
