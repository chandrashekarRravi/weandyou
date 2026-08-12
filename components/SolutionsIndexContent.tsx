'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SolutionData } from '@/lib/solutions-data';

export function SolutionsIndexContent({ solutions }: { solutions: SolutionData[] }) {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <div className="pt-24">
        <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Solutions' }]} />
      </div>

      <section className="pt-12 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4"
          >
            What We Do
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight"
          >
            Digital Solutions That <span className="text-brand-primary">Move the Needle</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-white/60 font-sans font-semibold max-w-2xl leading-relaxed"
          >
            Eight focused services — each built to deliver a specific, measurable outcome.
          </motion.p>
        </div>
      </section>

      <section className="py-8 pb-32 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/solutions/${service.slug}`}
                className="glass rounded-[2rem] p-8 group hover:border-brand-primary/40 transition-all duration-300 flex flex-col h-full"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-3">{service.category}</div>
                <h2 className="text-xl font-display font-bold mb-3 group-hover:text-brand-primary transition-colors">{service.title}</h2>
                <p className="text-sm text-white/50 font-sans font-semibold leading-relaxed line-clamp-3 flex-1">{service.heroTagline}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold font-sans text-white/40 group-hover:text-brand-primary transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
