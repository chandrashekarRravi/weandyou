'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Rocket, Briefcase, ShoppingCart, MapPin, User, Settings,
} from 'lucide-react';

export const About = () => {
  const industries = [
    { icon: <Rocket className="w-6 h-6" />, label: "Startups" },
    { icon: <Briefcase className="w-6 h-6" />, label: "Small & Medium Businesses" },
    { icon: <ShoppingCart className="w-6 h-6" />, label: "E-commerce Brands" },
    { icon: <MapPin className="w-6 h-6" />, label: "Local Businesses" },
    { icon: <User className="w-6 h-6" />, label: "Personal Brands" },
    { icon: <Settings className="w-6 h-6" />, label: "Service-Based Companies" },
  ];

  return (
    <section id="about" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-display font-bold text-brand-primary">50+</div>
              <div className="text-sm text-white/60 uppercase tracking-widest">Brands Helped</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-4">Who We Are</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Helping Businesses Build a <span className="text-brand-primary">Strong Presence.</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 font-sans font-semibold leading-relaxed">
              WE&You is a creative digital agency focused on helping businesses build a strong presence in the online world. By combining marketing strategy, innovative technology, and creative storytelling, we help brands connect with their audience and stand out in the competitive digital landscape.
            </p>

            <h3 className="text-xl font-display font-bold mb-6 uppercase tracking-wider text-white/40">Industries We Work With</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {industries.map((ind, i) => (
                <div key={i} className="flex items-center gap-3 p-4 glass rounded-xl hover:border-brand-primary/50 transition-colors group">
                  <div className="text-brand-primary group-hover:scale-110 transition-transform">{ind.icon}</div>
                  <span className="text-sm font-sans font-semibold">{ind.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
