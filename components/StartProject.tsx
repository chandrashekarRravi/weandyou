'use client';

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  MessageSquare, User, Layers, Code, Rocket,
  ArrowRight, CheckCircle2
} from 'lucide-react';

export const StartProject = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Share Your Idea',
      desc: 'Explain your project vision and goals to us.'
    },
    {
      icon: <User className="w-6 h-6" />,
      title: 'Free Consultation',
      desc: 'Our team analyzes your specific requirements.'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Project Planning',
      desc: 'We define scope, timeline, and growth strategy.'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Development',
      desc: 'We build your solution with regular progress updates.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Launch & Support',
      desc: 'Seamless deployment and ongoing technical support.'
    },
  ];

  const trustElements = [
    'No obligation consultation',
    'Transparent pricing',
    'Fast response within 24 hours',
    'Dedicated expert team'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    // Cal.com Embed Implementation using namespace pattern
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      // Initialize namespace "discoverycall"
      C[L] = C[L] || function () { (C[L].q = C[L].q || []).push(arguments); };
      C[L].q = C[L].q || [];
      C[L].ns = C[L].ns || {};
      C[L].ns["discoverycall"] = C[L].ns["discoverycall"] || function () {
        p(C[L].ns["discoverycall"], arguments);
      };
      C[L].ns["discoverycall"].q = C[L].ns["discoverycall"].q || [];

      // Load the script only once
      if (!d.getElementById("cal-embed-script")) {
        let b = d.createElement("script");
        b.id = "cal-embed-script";
        b.src = A;
        b.async = true;
        d.head.appendChild(b);
      }

      C[L]("init", "discoverycall", { origin: "https://cal.com" });
      C[L]("ui", "discoverycall", {
        styles: { branding: { brandColor: "#D1E013" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })(window, "https://app.cal.com/embed/embed.js", "Cal");
  }, []);


  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-display font-bold mb-6"
          >
            Start Your Project With <span className="text-brand-primary">WE&You</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl font-sans font-semibold max-w-2xl mx-auto"
          >
            Turn your idea into a powerful digital solution. Our team guides you from concept to launch.
          </motion.p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 transition-all group relative"
            >
              <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-black transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-display font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-white/40 font-sans font-semibold leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* CTA & Trust */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-center"
          >
            <div className="space-y-12 mb-16">
              <div className="flex flex-col items-center gap-6">
                <h2 className="text-3xl font-display font-bold">Ready to take the next step?</h2>
                <button
                  data-cal-link="weandyoumarketing/joinus"
                  data-cal-namespace="discoverycall"
                  data-cal-config='{"layout":"month_view"}'
                  className="bg-brand-primary font-display font-medium text-black px-12 py-6 rounded-full text-2xl font-bold hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(209,224,19,0.2)] flex items-center gap-3 group"
                >
                  Book Free Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex flex-wrap  justify-center gap-8 md:gap-12">
                {trustElements.map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/60">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                    <span className="text-sm font-sans font-semibold uppercase tracking-wider">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 rounded-[3rem] bg-brand-primary/5 border border-brand-primary/10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-3xl mx-auto">
              <div className="text-left">
                <div className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-1">Quick Contact</div>
                <div className="text-2xl font-display font-bold">Chat with an expert</div>
                <p className="text-white/40 text-sm mt-2 font-sans font-semibold">Get answers to your questions instantly.</p>
              </div>
              <button className="w-20 h-20 bg-brand-primary text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg group">
                <MessageSquare className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
