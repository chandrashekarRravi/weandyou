'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { ServiceFAQ } from '@/lib/solutions-data';

export function SolutionFAQ({ faqs }: { faqs: ServiceFAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className={`w-full p-6 flex items-center gap-5 text-left transition-all duration-300 rounded-[2rem] border ${
              open === i
                ? 'bg-white/10 border-brand-primary/30'
                : 'bg-white/5 hover:bg-white/8 border-white/5 hover:border-white/10'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
              open === i ? 'bg-brand-primary text-black' : 'bg-white/5 text-white/40'
            }`}>
              {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </div>
            <span className={`font-sans font-semibold transition-colors ${open === i ? 'text-white' : 'text-white/70'}`}>
              {faq.q}
            </span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className="px-6 pt-3 pb-2">
                  <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.08 }}
                    className="text-white/60 font-sans font-semibold leading-relaxed bg-white/5 rounded-[1.5rem] rounded-tl-none p-6 border border-white/5"
                  >
                    {faq.a}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
