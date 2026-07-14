'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const RotatingBadge = () => {
  return (
    <div className="absolute top-24 right-4 md:top-32 md:right-16 lg:right-40 z-30 group flex items-center justify-center p-4">
      <div className="relative w-40 h-40 md:w-40 md:h-40 cursor-pointer flex items-center justify-center">
        {/* Rotating Text SVG */}
        <div
          className="absolute inset-0 w-full h-full text-white/50 group-hover:text-brand-primary transition-colors duration-500 animate-[spin_12s_linear_infinite]"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
            <text className=" text-[11px] font-bold font-sans tracking-[0.24em]" fill="currentColor">
              <textPath href="#circlePath" startOffset="0%">
                Incredible13 • Incredible13 • Incredible13 • Incredible13 •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Hover Image Reveal */}
        <div className="absolute inset-0 m-auto w-[65%] h-[65%] rounded-full overflow-hidden scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-center shadow-2xl">
          <img
            src="/CREW.png"
            alt="Portfolio Reveal"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Center dot (disappears on hover) */}
        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary group-hover:scale-0 transition-transform duration-500" />
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-[120vh] flex flex-col items-center pt-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="grid-perspective">
          <div className="grid-lines" />
        </div>
        <div className="hero-glow" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
      </div>

      <RotatingBadge />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-10 mt-20">
            Making Your Brand <br />
            <span className="text-brand-primary">Visible, Valuable, and Viral</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 font-sans font-semibold leading-relaxed">
            WE&You helps businesses grow by building strong digital visibility. We combine digital marketing, creative storytelling, and modern technology to help brands reach the right audience, increase awareness, and drive measurable online growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/start"
              className="bg-brand-primary text-black px-8 py-3 rounded-full text-sm font-bold font-sans font-semibold hover:scale-105 transition-transform flex items-center gap-2 group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#services" className="bg-white/5 border border-white/10 hover:border-brand-primary/50 backdrop-blur-xl px-8 py-3 rounded-full text-sm font-medium font-sans font-semibold transition-all">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Dashboard Preview Element */}

    </section>
  );
};
