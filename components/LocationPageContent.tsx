'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';
import { LocationData } from '@/lib/locations-data';
import { solutions } from '@/lib/solutions-data';
import { SolutionFAQ } from '@/components/SolutionFAQ';

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function LocationPageContent({ location }: { location: LocationData }) {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <div className="pt-24">
        <Breadcrumb crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
          { label: location.city },
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
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary mb-4"
          >
            <MapPin className="w-3.5 h-3.5" /> {location.city}, {location.state}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 tracking-tight"
          >
            {location.heroHeadline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 font-sans font-semibold max-w-2xl mb-10 leading-relaxed"
          >
            {location.heroTagline}
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

      {/* City Context */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.h2 {...inView()} className="text-3xl font-display font-bold mb-6">
            Digital Marketing in {location.city}
          </motion.h2>
          <motion.p {...inView(0.1)} className="text-white/60 font-sans font-semibold leading-relaxed text-lg max-w-3xl">
            {location.cityContext}
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...inView()} className="text-3xl md:text-4xl font-display font-bold mb-4">
            Services for {location.city} Businesses
          </motion.h2>
          <motion.p {...inView(0.05)} className="text-white/40 font-sans font-semibold mb-12">
            All services available to {location.city} clients — managed by our Bangalore team.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/solutions/${service.slug}`} className="glass rounded-[1.75rem] p-6 group hover:border-brand-primary/40 transition-all flex flex-col h-full">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-2">{service.category}</div>
                  <div className="font-display font-bold group-hover:text-brand-primary transition-colors mb-1">{service.title}</div>
                  <div className="flex items-center gap-1 text-xs text-white/30 mt-3 group-hover:text-brand-primary transition-colors mt-auto">
                    Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...inView()} className="text-3xl font-display font-bold mb-12">
            Questions from {location.city} Businesses
          </motion.h2>
          <SolutionFAQ faqs={location.faqs.map(f => ({ q: f.q, a: f.a }))} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 {...inView()} className="text-3xl md:text-4xl font-display font-bold mb-4">
            Grow your <span className="text-brand-primary">{location.city}</span> business online.
          </motion.h2>
          <motion.p {...inView(0.1)} className="text-white/40 font-sans font-semibold mb-10">
            Free consultation. No obligation. Response within 24 hours.
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
