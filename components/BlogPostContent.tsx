'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BlogPost, BlogSection } from '@/lib/blog-data';

function renderSection(section: BlogSection, i: number) {
  switch (section.type) {
    case 'h2':
      return (
        <motion.h2
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-display font-bold mt-12 mb-4 text-white"
        >
          {section.text}
        </motion.h2>
      );
    case 'p':
      return <p key={i} className="text-white/65 font-sans font-semibold leading-relaxed mb-4">{section.text}</p>;
    case 'list':
      return (
        <ul key={i} className="space-y-2 mb-6">
          {section.items.map((item, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: j * 0.06 }}
              className="flex items-start gap-3 text-white/65 font-sans font-semibold"
            >
              <span className="text-brand-primary mt-1.5 shrink-0">▸</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      );
    case 'cta':
      return (
        <motion.div
          key={i}
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
  }
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <div className="pt-24">
        <Breadcrumb crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]} />
      </div>

      <article className="max-w-3xl mx-auto px-6 pt-12 pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">{post.category}</span>
          <span className="text-white/20">·</span>
          <span className="text-xs text-white/30 font-sans font-semibold flex items-center gap-1">
            <Clock className="w-3 h-3" /> {post.readTime}
          </span>
          <span className="text-white/20">·</span>
          <time className="text-xs text-white/30 font-sans font-semibold" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-display font-bold leading-tight mb-10 tracking-tight"
        >
          {post.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {post.sections.map((section, i) => renderSection(section, i))}
        </motion.div>

        <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors font-sans font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 bg-brand-primary text-black px-6 py-2.5 rounded-full text-sm font-bold font-sans hover:scale-105 transition-transform group"
          >
            Talk to Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </article>
    </div>
  );
}
