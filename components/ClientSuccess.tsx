'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const clients = [
  { name: 'Googli Goli soda', service: 'Brand Designs & Strategy' },
  { name: 'Roopa Travels', service: 'Website Development' },
  { name: 'Mayur Frieghts', service: 'Website Development' },
  { name: 'MILGAN FOODS & BEVERAGES', service: 'Digital Marketing' },
  { name: 'GANDHARVA ABROAD STUDIES', service: 'Social Media & Performance Ads' },
  { name: 'MADHU JEWELLERY', service: 'Brand Identity' },
  { name: 'SAMYAM TEXTILES', service: 'E-Commerce Solutions' },
];

export const ClientSuccess = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-4">Our Track Record</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Client <span className="text-brand-primary">Success Stories.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-sans font-semibold">
            We partner with ambitious brands across India to elevate their digital presence, build robust websites, and execute high-performing marketing campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex text-brand-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{client.name}</h3>
                <p className="text-sm font-sans font-semibold text-white/50 uppercase tracking-wider">{client.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
