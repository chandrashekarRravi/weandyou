'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BlogPost } from '@/lib/blog-data';

export function BlogIndexContent({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <div className="pt-24">
        <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      </div>

      <section className="pt-12 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
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
            className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight"
          >
            No-Fluff Digital <span className="text-brand-primary">Marketing Guides</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-white/60 font-sans font-semibold max-w-2xl leading-relaxed"
          >
            Written by people who actually do this work. Real numbers, real timelines — for Indian businesses making digital decisions.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="glass rounded-[2rem] p-8 flex flex-col sm:flex-row sm:items-start gap-6 group hover:border-brand-primary/40 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">{post.category}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-xs text-white/30 font-sans font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-display font-bold mb-2 group-hover:text-brand-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-sm text-white/50 font-sans font-semibold leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="shrink-0 flex items-center text-white/30 group-hover:text-brand-primary transition-colors self-center">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
