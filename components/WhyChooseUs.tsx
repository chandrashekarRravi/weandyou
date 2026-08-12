'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Layers, Settings, BarChart3, User } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    { icon: <Layers />, title: 'Creative + Strategy', desc: 'We combine creativity with proven marketing strategies for real business results.' },
    { icon: <Settings />, title: 'End-to-End Solutions', desc: 'From content production to website development and marketing campaigns.' },
    { icon: <BarChart3 />, title: 'Data-Driven Marketing', desc: 'All decisions are based on analytics and audience insights.' },
    { icon: <User />, title: 'Experienced Team', desc: 'Designers, marketers, and developers working together for impactful campaigns.' },
  ];

  return (
    <section id="why-choose-us" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-6xl font-display font-bold mb-6">Why Choose <span className="text-brand-primary">WE&You.</span></h2>
          <p className="text-white/60 font-sans font-semibold max-w-2xl mx-auto">We combine creativity with proven marketing strategies to deliver real business results.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 glass rounded-3xl text-center group"
            >
              <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:text-black transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-base md:text-xl font-display font-bold mb-4">{f.title}</h3>
              <p className="text-sm text-white/60 font-sans font-semibold leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
