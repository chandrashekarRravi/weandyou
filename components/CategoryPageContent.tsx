'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  ArrowRight, ArrowLeft, BookOpen, Sparkles,
  TrendingUp, Search, Share2, Palette, Monitor, BarChart3, MapPin,
} from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BlogPost, BlogCategory, formatDate } from '@/lib/blog-data';

// ─── Category icon map ────────────────────────────────────────────────────────

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Share2: <Share2 className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Monitor: <Monitor className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
};

// ─── Coming Soon state ────────────────────────────────────────────────────────

function CategoryComingSoon({ category }: { category: BlogCategory }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center py-20 px-6"
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
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-3 rounded-[2rem] border border-brand-primary/10"
        />
      </motion.div>

      <h2 className="text-2xl font-display font-bold mb-3">Insights coming soon.</h2>
      <p className="text-white/50 font-sans font-semibold text-sm max-w-sm leading-relaxed mb-8">
        We&apos;re currently preparing practical{' '}
        <strong className="text-white/70">{category.label}</strong> insights for Indian businesses.
        Check back soon.
      </p>

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Browse all insights
      </Link>
    </motion.div>
  );
}

// ─── Article card ─────────────────────────────────────────────────────────────

function ArticleCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group glass rounded-[2rem] overflow-hidden flex flex-col hover:border-brand-primary/30 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary"
        aria-label={`Read: ${post.title}`}
      >
        {/* Gradient hero */}
        <div className="relative h-40 bg-gradient-to-br from-brand-primary/15 via-brand-dark to-[#135DA2]/20 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-white/10 group-hover:text-white/20 transition-colors duration-300" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3 text-xs text-white/30 font-sans font-semibold">
            <time dateTime={post.publishedAt ?? post.date}>
              {formatDate(post.publishedAt ?? post.date ?? '')}
            </time>
            <span className="text-white/15">·</span>
            <span>{post.readingTime ?? post.readTime}</span>
          </div>

          <h3 className="text-lg font-display font-bold mb-2 leading-tight group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-white/50 font-sans font-semibold leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-white/30 group-hover:text-brand-primary transition-colors duration-300">
            Read article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface CategoryPageContentProps {
  category: BlogCategory;
  posts: BlogPost[];
}

export function CategoryPageContent({ category, posts }: CategoryPageContentProps) {
  const hasPosts = posts.length > 0;
  const iconNode = category.icon ? CATEGORY_ICONS[category.icon] : <BookOpen className="w-6 h-6" />;

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      {/* Breadcrumb */}
      <div className="pt-24">
        <Breadcrumb crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: category.label },
        ]} />
      </div>

      {/* Category hero */}
      <section className="pt-10 pb-14 px-6 relative overflow-hidden">
        {/* Grid bg */}
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
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors font-sans font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> All Insights
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
              {iconNode}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">Category</div>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                {category.label}
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-white/60 font-sans font-semibold max-w-xl leading-relaxed"
          >
            {category.description}
          </motion.p>

          {hasPosts && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-3 text-sm text-white/30 font-sans font-semibold"
            >
              {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </motion.p>
          )}
        </div>
      </section>

      {/* Articles or coming soon */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {hasPosts ? (
            <div className="grid sm:grid-cols-2 gap-5">
              {posts.map((post, i) => (
                <ArticleCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          ) : (
            <CategoryComingSoon category={category} />
          )}
        </div>
      </section>

      {/* Related service CTA */}
      {category.relatedServicePath && (
        <section className="px-6 pb-32">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-[2rem] p-8 md:p-10 border-brand-primary/10 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">
                  Explore this service
                </div>
                <h2 className="text-xl font-display font-bold mb-2 leading-tight">
                  Need help with {category.label}?
                </h2>
                <p className="text-sm text-white/50 font-sans font-semibold leading-relaxed">
                  Our team at WE &amp; YOU Marketing specialises in this area. Let&apos;s talk about your goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href={category.relatedServicePath}
                  className="inline-flex items-center justify-center gap-2 glass px-5 py-2.5 rounded-full text-sm font-bold hover:border-white/30 transition-all group"
                >
                  See the service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/start"
                  className="inline-flex items-center justify-center gap-2 bg-brand-primary text-black px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform group"
                >
                  Start a project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
