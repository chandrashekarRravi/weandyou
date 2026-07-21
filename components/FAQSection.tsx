'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Which is the best digital marketing agency in Bangalore?',
    answer: 'WE & YOU Marketing is one of the leading digital marketing agencies in Bangalore, Karnataka. We offer Social Media Marketing, Google & Meta Ads, SEO, Website Development, App Development, Software Solutions, and Branding — all delivering measurable ROI for Indian businesses.',
  },
  {
    question: 'How much does digital marketing cost in India?',
    answer: 'Our packages are designed to be affordable for small businesses and scalable for enterprises. Pricing depends on services, scope, and goals. Contact us at weandyoumarketing@gmail.com or call +91 6364893295 for a free custom quote.',
  },
  {
    question: 'Do you provide website, app, and software development?',
    answer: 'Yes. We build fast, SEO-ready business websites, e-commerce platforms, custom iOS & Android mobile apps, and full software solutions for businesses across India from startups to established enterprises.',
  },
  {
    question: 'How long does SEO take to show results?',
    answer: 'SEO typically shows measurable improvements in 3–6 months. We provide monthly ranking and traffic reports from day one so you always know exactly how your organic growth is progressing.',
  },
  {
    question: 'Do you run Google Ads and Meta Ads campaigns?',
    answer: 'Yes. We manage end-to-end Google Ads and Meta Ads (Facebook & Instagram) with precise targeting, A/B testing, and conversion tracking to maximize your ROAS and reduce cost per lead.',
  },
  {
    question: 'Do you serve businesses outside Bangalore and Karnataka?',
    answer: 'Yes. We work with clients across all major Indian cities — Mumbai, Delhi, Hyderabad, Chennai, Pune, and every city in Karnataka. We operate fully remote and deliver results nationally.',
  },
  {
    question: 'Can you help a small business or startup?',
    answer: 'Absolutely. We specialize in helping startups and small businesses build a strong digital presence with strategies tailored to their budget and growth stage from social media setup to full-scale digital campaigns.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work with travel, food & beverage, education, jewellery, textiles, logistics, real estate, healthcare, technology, and more — both B2B and B2C brands across India.',
  },
];

export const FAQSection = () => {
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
            Everything you need to know about working with us.
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
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${openIndex === i ? 'bg-brand-primary text-black rotate-180' : 'bg-white/5 text-white/40'}`}>
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
