'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { IndustryData } from '@/lib/industries-data';
import { SolutionFAQ } from '@/components/SolutionFAQ';

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function IndustryPageContent({ industry }: { industry: IndustryData }) {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <div className="pt-24">
        <Breadcrumb crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: industry.industry },
        ]} />
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 hero-glow opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4"
          >
            {industry.industry}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 tracking-tight"
          >
            {industry.heroHeadline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 font-sans font-semibold max-w-2xl mb-10 leading-relaxed"
          >
            {industry.heroTagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/start" className="inline-flex items-center gap-2 bg-brand-primary text-black px-8 py-3 rounded-full text-sm font-bold font-sans hover:scale-105 transition-transform group">
              Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...inView()} className="text-3xl md:text-4xl font-display font-bold mb-4">
            Why {industry.industry} Businesses Need Different Marketing
          </motion.h2>
          <motion.p {...inView(0.05)} className="text-white/40 font-sans font-semibold mb-12">
            The specific challenges your market faces — and why generic strategies don&apos;t work.
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-5">
            {industry.painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-[2rem] p-7 hover:border-brand-primary/20 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <div className="font-display font-bold">{point.title}</div>
                </div>
                <p className="text-sm text-white/50 font-sans font-semibold leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...inView()} className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our Services for {industry.industry}
          </motion.h2>
          <motion.p {...inView(0.05)} className="text-white/40 font-sans font-semibold mb-12">
            WE&YOU&apos;s solutions mapped to what {industry.industry.toLowerCase()} businesses actually need.
          </motion.p>
          <div className="space-y-4">
            {industry.services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link href={service.href} className="glass rounded-[1.75rem] p-6 flex items-start justify-between gap-6 group hover:border-brand-primary/40 transition-all">
                  <div>
                    <div className="font-display font-bold mb-1.5 group-hover:text-brand-primary transition-colors">{service.name}</div>
                    <p className="text-sm text-white/50 font-sans font-semibold leading-relaxed">{service.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-brand-primary group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Proof */}
      {industry.clientProof.length > 0 && (
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <motion.h2 {...inView()} className="text-3xl md:text-4xl font-display font-bold mb-12">
              Brands We&apos;ve Worked With
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {industry.clientProof.map((proof, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="glass rounded-[2rem] p-8 border-brand-primary/10"
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">Client</div>
                  <div className="font-display font-bold text-lg mb-3">{proof.client}</div>
                  <p className="text-sm text-white/60 font-sans font-semibold leading-relaxed">{proof.result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...inView()} className="text-3xl md:text-4xl font-display font-bold mb-12">Common Questions</motion.h2>
          <SolutionFAQ faqs={industry.faqs.map(f => ({ q: f.q, a: f.a }))} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 {...inView()} className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to grow your <span className="text-brand-primary">{industry.industry}</span> business online?
          </motion.h2>
          <motion.p {...inView(0.1)} className="text-white/40 font-sans font-semibold mb-10">
            Free consultation. Honest advice. Response within 24 hours.
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Link href="/start" className="inline-flex items-center gap-2 bg-brand-primary text-black px-10 py-4 rounded-full text-sm font-bold font-sans hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(209,224,19,0.15)] group">
              Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
