'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import {
  ArrowRight, Clock, Search, X, TrendingUp, SearchIcon,
  Share2, Palette, Monitor, BarChart3, MapPin, Mail, ChevronRight,
  BookOpen, Sparkles,
} from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BlogPost, BlogCategory, BLOG_CATEGORIES, formatDate } from '@/lib/blog-data';

// ─── Category icon map ────────────────────────────────────────────────────────

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'TrendingUp': <TrendingUp className="w-4 h-4" />,
  'Search': <SearchIcon className="w-4 h-4" />,
  'Share2': <Share2 className="w-4 h-4" />,
  'Palette': <Palette className="w-4 h-4" />,
  'Monitor': <Monitor className="w-4 h-4" />,
  'BarChart3': <BarChart3 className="w-4 h-4" />,
  'MapPin': <MapPin className="w-4 h-4" />,
};

// ─── Shimmer Skeleton Card ────────────────────────────────────────────────────

function SkeletonCard({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-[2rem] overflow-hidden"
    >
      {/* Image placeholder */}
      <div className="relative h-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02]" />
        <div className="shimmer absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-white/10" />
        </div>
      </div>
      {/* Content placeholder */}
      <div className="p-6 space-y-3">
        {/* Category + read time */}
        <div className="flex items-center gap-3">
          <div className="shimmer h-3 w-20 rounded-full bg-white/5" />
          <div className="shimmer h-3 w-16 rounded-full bg-white/5" />
        </div>
        {/* Title */}
        <div className="space-y-2">
          <div className="shimmer h-4 w-full rounded-full bg-white/5" />
          <div className="shimmer h-4 w-4/5 rounded-full bg-white/5" />
        </div>
        {/* Excerpt */}
        <div className="space-y-2 pt-1">
          <div className="shimmer h-3 w-full rounded-full bg-white/[0.04]" />
          <div className="shimmer h-3 w-11/12 rounded-full bg-white/[0.04]" />
          <div className="shimmer h-3 w-3/4 rounded-full bg-white/[0.04]" />
        </div>
        {/* Author row */}
        <div className="flex items-center gap-2 pt-2">
          <div className="shimmer w-6 h-6 rounded-full bg-white/5" />
          <div className="shimmer h-3 w-28 rounded-full bg-white/5" />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Article Card ─────────────────────────────────────────────────────────────

function ArticleCard({ post, index }: { post: BlogPost; index: number }) {
  const GRADIENT_PALETTES = [
    'from-brand-primary/20 via-brand-dark to-brand-dark',
    'from-[#135DA2]/30 via-brand-dark to-brand-dark',
    'from-[#D1E013]/15 via-brand-dark to-brand-dark',
    'from-white/10 via-brand-dark to-brand-dark',
  ];
  const gradient = GRADIENT_PALETTES[index % GRADIENT_PALETTES.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group glass rounded-[2rem] overflow-hidden flex flex-col hover:border-brand-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary"
        aria-label={`Read: ${post.title}`}
      >
        {/* Featured image / gradient placeholder */}
        <div className={`relative h-44 bg-gradient-to-br ${gradient} overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-white/10 group-hover:text-white/20 transition-colors duration-300" />
          </div>
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <Link
              href={`/blog/category/${post.categorySlug}`}
              onClick={e => e.stopPropagation()}
              className="text-[10px] font-bold uppercase tracking-widest text-black bg-brand-primary px-3 py-1 rounded-full hover:bg-white transition-colors"
            >
              {post.category}
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Meta row */}
          <div className="flex items-center gap-3 mb-3 text-xs text-white/30 font-sans font-semibold">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readingTime ?? post.readTime}
            </span>
            <span className="text-white/15">·</span>
            <time dateTime={post.publishedAt ?? post.date}>
              {formatDate(post.publishedAt ?? post.date ?? '')}
            </time>
          </div>

          {/* Title */}
          <h2 className="text-lg font-display font-bold mb-2 leading-tight group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-white/50 font-sans font-semibold leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          {/* Read more */}
          <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-white/30 group-hover:text-brand-primary transition-colors duration-300">
            Read article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// ─── Coming Soon State ────────────────────────────────────────────────────────

function ComingSoonState({ filtered = false }: { filtered?: boolean }) {
  return (
    <div className="col-span-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center py-16 px-6"
      >
        {/* Animated icon */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative mb-8"
        >
          <div className="w-20 h-20 rounded-[1.5rem] bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
            <Sparkles className="w-9 h-9 text-brand-primary" />
          </div>
          {/* Orbiting dot */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-3 rounded-[2rem] border border-brand-primary/10"
          />
        </motion.div>

        <h3 className="text-2xl font-display font-bold mb-3">
          {filtered ? 'No insights in this category yet.' : 'Something useful is coming.'}
        </h3>
        <p className="text-white/50 font-sans font-semibold text-sm max-w-md leading-relaxed">
          {filtered
            ? 'We\'re preparing practical insights for this category. Check back soon, or browse our other articles.'
            : 'We\'re working on practical marketing insights, strategies, and ideas for businesses ready to grow online.'}
        </p>

        {filtered && (
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-white transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" /> Browse all insights
          </Link>
        )}
      </motion.div>
    </div>
  );
}

// ─── Newsletter CTA ───────────────────────────────────────────────────────────

function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="px-6 pb-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-[2rem] p-8 md:p-12 border-brand-primary/10"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">Newsletter</div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 leading-tight">
                Stay ahead of what&apos;s next.
              </h2>
              <p className="text-white/50 font-sans font-semibold text-sm leading-relaxed">
                Get practical marketing insights and ideas delivered when new articles are published.
              </p>
            </div>

            <div className="md:w-96">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl px-6 py-4"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <p className="text-sm font-sans font-semibold text-white/80">
                    You&apos;re on the list. We&apos;ll let you know when new insights drop.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2" aria-label="Newsletter signup">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="email"
                      id="newsletter-email-blog"
                      name="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      aria-label="Email address for newsletter"
                      className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-primary/50 transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-brand-primary text-black px-5 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main BlogIndexContent ────────────────────────────────────────────────────

interface BlogIndexContentProps {
  posts: BlogPost[];
  categories?: BlogCategory[];
  activeCategorySlug?: string;
}

export function BlogIndexContent({
  posts,
  categories = BLOG_CATEGORIES,
  activeCategorySlug,
}: BlogIndexContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(activeCategorySlug ?? 'all');

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchCat = selectedCategory === 'all' || post.categorySlug === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch = !q || (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        (post.tags ?? []).some(t => t.toLowerCase().includes(q))
      );
      return matchCat && matchSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const isFiltered = selectedCategory !== 'all' || searchQuery.trim().length > 0;
  const showSkeletons = posts.length === 0;

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      {/* Breadcrumb */}
      <div className="pt-24">
        <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      </div>

      {/* Hero */}
      <section className="pt-10 pb-16 px-6 relative overflow-hidden">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(209,224,19,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(209,224,19,0.07) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 40% at 50% 80%, rgba(17,61,103,1) 40%, transparent 100%)',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4"
          >
            Insights
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-display font-bold mb-5 tracking-tight leading-[1.1]"
          >
            Insights to Help Your{' '}
            <span className="text-brand-primary">Business Grow</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-white/60 font-sans font-semibold max-w-2xl leading-relaxed"
          >
            Practical insights, strategies, and ideas from WeAndYou Marketing to help businesses build a stronger digital presence.
          </motion.p>
        </div>
      </section>

      {/* Search + Category Nav */}
      <section className="pb-10 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="search"
              id="blog-search"
              name="q"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search insights…"
              aria-label="Search blog articles"
              className="w-full glass rounded-full pl-12 pr-12 py-3.5 text-sm font-sans focus:outline-none focus:border-brand-primary/50 transition-colors placeholder:text-white/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </motion.div>

          {/* Category pills — horizontally scrollable on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1"
            role="navigation"
            aria-label="Filter by category"
          >
            {/* All pill */}
            <button
              onClick={() => setSelectedCategory('all')}
              aria-pressed={selectedCategory === 'all'}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-brand-primary text-black'
                  : 'glass text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              All
            </button>

            {categories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                aria-pressed={selectedCategory === cat.slug}
                className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  selectedCategory === cat.slug
                    ? 'bg-brand-primary text-black'
                    : 'glass text-white/60 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.icon && CATEGORY_ICONS[cat.icon]}
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles grid / skeletons / empty state */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {showSkeletons ? (
              /* No articles at all → show coming soon + skeletons */
              <motion.div
                key="skeletons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-col items-center text-center py-12 px-6 mb-10">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative mb-8"
                  >
                    <div className="w-20 h-20 rounded-[1.5rem] bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
                      <Sparkles className="w-9 h-9 text-brand-primary" />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                      className="absolute -inset-3 rounded-[2rem] border border-brand-primary/10"
                    />
                  </motion.div>
                  <h2 className="text-2xl font-display font-bold mb-3">Our first insights are coming soon.</h2>
                  <p className="text-white/50 font-sans font-semibold text-sm max-w-md leading-relaxed">
                    We&apos;re preparing practical marketing insights, strategies, and ideas to help businesses grow online. Check back soon.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <SkeletonCard delay={0.1} />
                  <SkeletonCard delay={0.18} />
                  <SkeletonCard delay={0.26} />
                </div>
              </motion.div>
            ) : filteredPosts.length === 0 ? (
              /* Articles exist but filter returns nothing */
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ComingSoonState filtered />
              </motion.div>
            ) : (
              /* Show real articles */
              <motion.div
                key="articles"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5"
              >
                {filteredPosts.map((post, i) => (
                  <ArticleCard key={post.slug} post={post} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Categories section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">Browse by Topic</div>
            <h2 className="text-2xl font-display font-bold">Explore categories</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/blog/category/${cat.slug}`}
                  className="group glass rounded-2xl p-5 flex items-start gap-4 hover:border-brand-primary/30 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0 text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all duration-300">
                    {cat.icon ? CATEGORY_ICONS[cat.icon] : <BookOpen className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-display font-bold group-hover:text-brand-primary transition-colors duration-300 flex items-center gap-1">
                      {cat.label}
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                    <p className="text-xs text-white/40 font-sans font-semibold mt-0.5 leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <NewsletterCTA />
    </div>
  );
}
