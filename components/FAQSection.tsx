'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQ } from '@/types';

export const FAQSection = () => {
  const faqs: FAQ[] = [
    {
      question: 'Do you work with startups?',
      answer: 'Yes, we help startups build strong digital presence and marketing strategies.'
    },
    {
      question: 'Do you provide website development?',
      answer: 'Yes, we design and develop modern business websites and apps.'
    },
    {
      question: 'How long does a marketing campaign take?',
      answer: 'Campaign timelines depend on goals, strategy, and platform.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we provide continuous marketing, optimization, and technical support.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-brand-dark text-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight"
          >
            Frequently Asked <span className="text-brand-primary">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg max-w-lg mx-auto font-sans font-semibold"
          >
            Everything you need to know about working with us. These are common questions from our clients.
          </motion.p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="group">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full p-6 flex items-center gap-6 text-left transition-all duration-500 rounded-[2.5rem] border ${openIndex === i
                  ? 'bg-white/10 border-brand-primary/30 shadow-[0_20px_50px_rgba(209,224,19,0.05)]'
                  : 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10'
                  }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${openIndex === i ? 'bg-brand-primary text-black rotate-180' : 'bg-white/5 text-white/40'
                  }`}>
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
                <span className={`text-lg font-sans font-semibold transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-white/70'}`}>
                  {faq.question}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 px-6 pb-2">
                      <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 p-8 rounded-[2.5rem] font-sans font-semibold rounded-tl-none text-white/60 leading-relaxed border border-white/5"
                      >
                        {faq.answer}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
