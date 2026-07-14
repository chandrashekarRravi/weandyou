'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const NotFoundContent = () => {
  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-0 flex flex-col overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col relative px-6">

        {/* Top Half: Giant Outlined 404 + Descending bars */}
        <div className="relative h-[45vh] lg:h-[55vh] flex items-end justify-center w-full">
          {/* Giant Outlined 404s layered */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden z-0">
            {/* Background Wireframe 404 */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[45%] text-[50vw] sm:text-[60vw] md:text-[45vw] font-display font-medium leading-none text-transparent tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>404</div>

            {/* Foreground Wireframe 404 (Slightly Offset) */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[52%] -translate-y-[52%] text-[50vw] sm:text-[60vw] md:text-[45vw] font-display font-medium leading-none text-transparent tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>404</div>
          </div>

          {/* Descending Bars */}
          <div className="relative z-10 w-full h-full flex items-end justify-between px-2 sm:px-4 gap-1 sm:gap-2 md:gap-4 opacity-60">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={{
                  hidden: { height: "0%" },
                  visible: (i) => ({
                    height: `${95 - (i * 11)}%`,
                    transition: { duration: 1.5, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }
                  }),
                  hover: {
                    height: "100%",
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }
                }}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="w-full border-t border-r border-l border-white/30 bg-white/[0.02] rounded-t-md cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Bottom Half: "Not Found!" and Button */}
        <div className="relative flex-grow flex flex-col border-t border-white/20 min-h-[35vh] mb-20 md:mb-24">
          {/* Dot Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="relative z-10 w-full flex-grow flex flex-col md:flex-row items-center justify-center md:items-center md:justify-between py-16 md:py-20 px-4 md:px-0 gap-10">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium tracking-tight leading-[1.0] text-center md:text-left text-white">
              Not<br className="block md:hidden" /> Found!
            </h1>

            <Link href="/" className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 md:px-12 md:py-6 rounded-full text-lg md:text-xl font-bold font-sans hover:bg-brand-primary hover:scale-[1.02] transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-12" />
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
