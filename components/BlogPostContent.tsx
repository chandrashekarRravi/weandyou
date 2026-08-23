'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  ArrowRight, ArrowLeft, Clock, Calendar, Twitter, Linkedin,
  Link2, Check, ChevronRight, BookOpen, List, User,
} from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  BlogPost, BlogSection, getRelatedPosts, getTOC, formatDate,
} from '@/lib/blog-data';

// ─── Section renderer ─────────────────────────────────────────────────────────

function RenderSection({ section, index }: { section: BlogSection; index: number }) {
  switch (section.type) {
    case 'h2':
      return (
        <motion.h2
          id={section.id ?? `section-${index}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="scroll-mt-24 text-2xl font-display font-bold mt-12 mb-4 text-white"
        >
          {section.text}
        </motion.h2>
      );

    case 'h3':
      return (
        <h3 className="text-lg font-display font-bold mt-8 mb-3 text-white/90">
          {section.text}
        </h3>
      );

    case 'p':
      return (
        <p className="text-white/65 font-sans font-semibold leading-relaxed mb-4">
          {section.text}
        </p>
      );

    case 'list':
      return (
        <ul className="space-y-2.5 mb-6" role="list">
          {section.items.map((item, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: j * 0.06 }}
              className="flex items-start gap-3 text-white/65 font-sans font-semibold"
            >
              <span className="text-brand-primary mt-1.5 shrink-0" aria-hidden>▸</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      );

    case 'ordered-list':
      return (
        <ol className="space-y-2.5 mb-6 list-none" role="list">
          {section.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-white/65 font-sans font-semibold">
              <span className="text-brand-primary font-bold shrink-0 tabular-nums w-5 text-right">
                {j + 1}.
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );

    case 'quote':
      return (
        <blockquote className="my-8 pl-6 border-l-2 border-brand-primary">
          <p className="text-white/70 font-sans font-semibold italic leading-relaxed text-lg">
            &ldquo;{section.text}&rdquo;
          </p>
          {section.attribution && (
            <cite className="block mt-2 text-xs text-white/30 font-sans font-semibold not-italic">
              — {section.attribution}
            </cite>
          )}
        </blockquote>
      );

    case 'image':
      return (
        <figure className="my-8 rounded-2xl overflow-hidden border border-white/10">
          {/* Gradient placeholder — swap src with real image when available */}
          <div className="relative aspect-video bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-white/10" />
          </div>
          {section.caption && (
            <figcaption className="px-4 py-2 text-xs text-white/30 font-sans font-semibold text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'cta':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-10 glass rounded-[2rem] p-8 border-brand-primary/20"
        >
          <p className="font-display font-bold text-lg mb-4">{section.text}</p>
          <Link
            href={section.href}
            className="inline-flex items-center gap-2 bg-brand-primary text-black px-6 py-2.5 rounded-full text-sm font-bold font-sans hover:scale-105 transition-transform group"
          >
            {section.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      );

    default:
      return null;
  }
}

// ─── Table of Contents ────────────────────────────────────────────────────────

function TableOfContents({ toc }: { toc: Array<{ id: string; text: string }> }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const headings = toc.map(t => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    headings.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [toc]);

  if (!toc.length) return null;

  return (
    <nav aria-label="Table of contents" className="hidden lg:block">
      <div className="sticky top-28 glass rounded-2xl p-5 text-sm">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">
          <List className="w-3.5 h-3.5" /> Contents
        </div>
        <ol className="space-y-2.5" role="list">
          {toc.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-xs font-sans font-semibold leading-snug transition-colors duration-200 hover:text-white ${
                  activeId === item.id ? 'text-brand-primary' : 'text-white/40'
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

// ─── Social Share ─────────────────────────────────────────────────────────────

function SocialShare({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://weandyoumarketing.com/blog/${slug}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: open in new tab
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-bold uppercase tracking-widest text-white/30">Share</span>
      <div className="flex gap-2">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=weyoumarketing`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X (Twitter)"
          className="w-8 h-8 glass rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
        >
          <Twitter className="w-3.5 h-3.5" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="w-8 h-8 glass rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>
        <button
          onClick={copyLink}
          aria-label="Copy link"
          className="w-8 h-8 glass rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-brand-primary" /> : <Link2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}

// ─── Related Articles ─────────────────────────────────────────────────────────

function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;

  return (
    <section aria-labelledby="related-heading" className="mt-16 pt-12 border-t border-white/5">
      <h2 id="related-heading" className="text-xl font-display font-bold mb-6">
        Related articles
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group glass rounded-2xl p-5 flex gap-4 hover:border-brand-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-1">
                  {post.category}
                </div>
                <h3 className="text-sm font-display font-bold leading-snug group-hover:text-brand-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-1.5 mt-1 text-xs text-white/30 font-sans font-semibold">
                  <Clock className="w-3 h-3" /> {post.readingTime ?? post.readTime}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all duration-300 self-center shrink-0" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Author Bio ───────────────────────────────────────────────────────────────

function AuthorBio({ author }: { author: BlogPost['author'] }) {
  return (
    <section aria-labelledby="author-heading" className="mt-12 pt-10 border-t border-white/5">
      <div className="flex items-start gap-5">
        <div
          className="w-14 h-14 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0"
          aria-hidden
        >
          <User className="w-6 h-6 text-brand-primary" />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">Written by</div>
          <h2 id="author-heading" className="text-base font-display font-bold mb-0.5">
            {author.name}
          </h2>
          <p className="text-xs text-white/40 font-sans font-semibold mb-3">{author.title}</p>
          <p className="text-sm text-white/55 font-sans font-semibold leading-relaxed">{author.bio}</p>
        </div>
      </div>
    </section>
  );
}

// ─── Mobile TOC (Accordion) ───────────────────────────────────────────────────

function MobileTOC({ toc }: { toc: Array<{ id: string; text: string }> }) {
  const [open, setOpen] = useState(false);
  if (!toc.length) return null;

  return (
    <div className="lg:hidden mb-8 glass rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-5 py-4 text-sm font-bold"
      >
        <span className="flex items-center gap-2 text-brand-primary">
          <List className="w-4 h-4" /> Contents
        </span>
        <ChevronRight className={`w-4 h-4 text-white/30 transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && (
        <ol className="px-5 pb-4 space-y-3 border-t border-white/5">
          {toc.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-start gap-2 text-xs font-sans font-semibold text-white/50 hover:text-white transition-colors"
              >
                <span className="text-brand-primary font-bold shrink-0">{i + 1}.</span>
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

// ─── Main BlogPostContent ─────────────────────────────────────────────────────

export function BlogPostContent({ post }: { post: BlogPost }) {
  const toc = getTOC(post.sections);
  const relatedPosts = getRelatedPosts(post);

  const publishedDate = post.publishedAt ?? post.date ?? '';
  const updatedDate = post.updatedAt;

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      {/* Breadcrumb */}
      <div className="pt-24">
        <Breadcrumb crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.category, href: `/blog/category/${post.categorySlug}` },
          { label: post.title },
        ]} />
      </div>

      {/* Featured image / hero gradient */}
      <div className="relative overflow-hidden h-56 md:h-72 mx-6 mt-6 rounded-[2rem] bg-gradient-to-br from-brand-primary/15 via-brand-dark to-[#135DA2]/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-white/5" />
        </div>
        {/* Category badge */}
        <div className="absolute top-6 left-6">
          <Link
            href={`/blog/category/${post.categorySlug}`}
            className="text-[10px] font-bold uppercase tracking-widest text-black bg-brand-primary px-3 py-1 rounded-full hover:bg-white transition-colors"
          >
            {post.category}
          </Link>
        </div>
      </div>

      {/* Article layout */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-32">
        <div className="grid lg:grid-cols-[1fr_240px] gap-12 items-start">

          {/* Main content column */}
          <main>
            {/* Article header */}
            <header className="mb-8">
              {/* Meta row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4"
              >
                <span className="flex items-center gap-1.5 text-xs text-white/30 font-sans font-semibold">
                  <Clock className="w-3.5 h-3.5" /> {post.readingTime ?? post.readTime}
                </span>
                <span className="text-white/15" aria-hidden>·</span>
                <span className="flex items-center gap-1.5 text-xs text-white/30 font-sans font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={publishedDate}>{formatDate(publishedDate)}</time>
                </span>
                {updatedDate && (
                  <>
                    <span className="text-white/15" aria-hidden>·</span>
                    <span className="text-xs text-white/20 font-sans font-semibold">
                      Updated <time dateTime={updatedDate}>{formatDate(updatedDate)}</time>
                    </span>
                  </>
                )}
              </motion.div>

              {/* H1 — one per page */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-5xl font-display font-bold leading-tight tracking-tight"
              >
                {post.title}
              </motion.h1>

              {/* Social share — top */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 pt-6 border-t border-white/5"
              >
                <SocialShare title={post.title} slug={post.slug} />
              </motion.div>
            </header>

            {/* Mobile TOC */}
            <MobileTOC toc={toc} />

            {/* Article body */}
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              aria-label={post.title}
            >
              {post.sections.map((section, i) => (
                <RenderSection key={i} section={section} index={i} />
              ))}
            </motion.article>

            {/* Social share — bottom */}
            <div className="mt-10 pt-8 border-t border-white/5">
              <SocialShare title={post.title} slug={post.slug} />
            </div>

            {/* Author bio */}
            <AuthorBio author={post.author} />

            {/* Related articles */}
            <RelatedArticles posts={relatedPosts} />

            {/* Prev/Next nav */}
            <nav
              aria-label="Article navigation"
              className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between gap-4 flex-wrap"
            >
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors font-sans font-semibold"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Insights
              </Link>
              {post.relatedServicePath && (
                <Link
                  href={post.relatedServicePath}
                  className="inline-flex items-center gap-2 bg-brand-primary text-black px-6 py-2.5 rounded-full text-sm font-bold font-sans hover:scale-105 transition-transform group"
                >
                  Explore this service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </nav>
          </main>

          {/* Sidebar — desktop TOC */}
          <aside aria-label="Article navigation sidebar">
            <TableOfContents toc={toc} />
          </aside>
        </div>
      </div>
    </div>
  );
}
