'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SolutionData } from '@/lib/solutions-data';
import { SolutionFAQ } from '@/components/SolutionFAQ';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function SolutionPageContent({ service }: { service: SolutionData }) {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <div className="pt-24">
        <Breadcrumb crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: service.title },
        ]} />
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 hero-glow opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...fadeUp(0)} className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">
            {service.category}
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 tracking-tight">
            {service.heroHeadline}
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-lg text-white/60 font-sans font-semibold max-w-2xl mb-10 leading-relaxed">
            {service.heroTagline}
          </motion.p>
          <motion.div {...fadeUp(0.3)}>
            <Link
              href="/start"
              className="inline-flex items-center gap-2 bg-brand-primary text-black px-8 py-3 rounded-full text-sm font-bold font-sans hover:scale-105 transition-transform group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...inView()} className="text-3xl md:text-4xl font-display font-bold mb-4">What&apos;s Included</motion.h2>
          <motion.p {...inView(0.05)} className="text-white/40 font-sans font-semibold mb-12">
            Concrete deliverables — no vague promises.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-[2rem] p-6 hover:border-brand-primary/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display font-bold mb-1">{item.title}</div>
                    <p className="text-sm text-white/50 font-sans font-semibold leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...inView()} className="text-3xl md:text-4xl font-display font-bold mb-4">How We Work</motion.h2>
          <motion.p {...inView(0.05)} className="text-white/40 font-sans font-semibold mb-12">
            No black boxes. Here&apos;s exactly what happens after you start.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-[2rem] p-6 hover:border-brand-primary/30 transition-colors"
              >
                <div className="text-5xl font-display font-bold text-brand-primary/20 mb-4">{step.step}</div>
                <div className="font-display font-bold mb-2">{step.title}</div>
                <p className="text-sm text-white/50 font-sans font-semibold leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Proof */}
      {service.clientProof && (
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              {...inView()}
              className="glass rounded-[2.5rem] p-10 border-brand-primary/10"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">Client Proof</div>
              <div className="text-xl font-display font-bold mb-3">{service.clientProof.client}</div>
              <p className="text-white/60 font-sans font-semibold leading-relaxed">{service.clientProof.result}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...inView()} className="text-3xl md:text-4xl font-display font-bold mb-4">Common Questions</motion.h2>
          <motion.p {...inView(0.05)} className="text-white/40 font-sans font-semibold mb-12">
            Straight answers to what buyers actually ask.
          </motion.p>
          <SolutionFAQ faqs={service.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 {...inView()} className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to get started with <span className="text-brand-primary">{service.title}?</span>
          </motion.h2>
          <motion.p {...inView(0.1)} className="text-white/40 font-sans font-semibold mb-10">
            Free consultation. No obligation. Response within 24 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/start"
              className="inline-flex items-center gap-2 bg-brand-primary text-black px-10 py-4 rounded-full text-sm font-bold font-sans hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(209,224,19,0.15)] group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
