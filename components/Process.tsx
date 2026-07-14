'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ProcessStep } from '@/types';

export const Process = () => {
  const steps: ProcessStep[] = [
    { number: '01', title: 'Discovery & Strategy', description: 'Understanding your brand, audience, and market opportunities.' },
    { number: '02', title: 'Creative Planning', description: 'Developing content, visuals, and storytelling aligned with your brand.' },
    { number: '03', title: 'Campaign Execution', description: 'Launching campaigns across social media, ads, and digital platforms.' },
    { number: '04', title: 'Optimization & Growth', description: 'Tracking performance and continuously improving campaigns for better results.' },
  ];

  return (
    <section id="process" className="py-24 bg-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center">Our <span className="text-brand-primary">Process.</span></h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block" />

          <div className="grid lg:grid-cols-4 gap-12 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="w-16 h-16 bg-brand-dark border border-brand-primary rounded-2xl flex items-center justify-center text-2xl font-display font-bold text-brand-primary mb-8 relative z-10 lg:mx-auto">
                  {step.number}
                </div>
                <div className="lg:text-center">
                  <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                  <p className="text-white/60 font-sans font-semibold leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
