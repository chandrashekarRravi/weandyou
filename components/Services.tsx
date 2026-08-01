'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import Link from 'next/link';
import {
  Layers, BarChart3, Camera, MessageSquare, Globe, Code, User, Zap, ArrowRight
} from 'lucide-react';
import { Service } from '@/types';

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [layout, setLayout] = useState({ itemWidth: 200, gap: 30 });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w <= 600) {
        setLayout({ itemWidth: Math.max(260, Math.min(320, w - 40)), gap: 16 });
      } else {
        setLayout({ itemWidth: Math.min(360, w - 60), gap: 30 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services: Service[] = [
    { id: 'social-media-management', category: 'Digital Marketing', title: 'Social Media Management', description: 'We build and manage your brand\'s full social media presence across Instagram, Facebook, LinkedIn, and YouTube. From content calendars and reel production to community engagement and analytics, we craft strategies that grow your following and turn followers into paying customers.', icon: 'layers' },
    { id: 'paid-advertising', category: 'Paid Ads & SEO', title: 'Paid Advertising', description: 'Stop wasting ad spend. Our certified team builds ROI-first Google Ads and Meta Ads campaigns with precise audience targeting, conversion tracking, and weekly optimization. We manage every rupee to maximize leads, sales, and measurable growth for your business.', icon: 'bar-chart' },
    { id: 'photo-video-production', category: 'Creative Content Studio', title: 'Photo & Video Production', description: 'First impressions happen in milliseconds. Our in-house creative team produces high-quality brand photography, product shoots, and short-form video content including reels and ad creatives that stop the scroll, communicate your value, and build lasting brand credibility.', icon: 'camera' },
    { id: 'content-production', category: 'Creative Content Studio', title: 'Creative Content Production', description: 'Great content is the engine of every successful brand. We produce scroll-stopping graphics, advertising scripts, reel concepts, carousels, and social media campaigns crafted around your brand voice to consistently attract and engage your ideal audience.', icon: 'message' },
    { id: 'website-development', category: 'Website & App Development', title: 'Website Development', description: 'Your website is your most powerful sales tool. We design and develop fast, responsive, SEO-optimized business websites, e-commerce platforms, and custom web software — built to convert visitors into customers and set your brand apart.', icon: 'globe' },
    { id: 'app-development', category: 'Website & App Development', title: 'App Development', description: 'Turn your business idea into a mobile product. We build custom iOS and Android applications and bespoke software solutions with scalable architecture, intuitive UX, and seamless backend integration — plus ongoing maintenance included.', icon: 'code' },
    { id: 'influencer-marketing', category: 'Influence & Reach', title: 'Influencer Marketing', description: 'Reach new audiences through trusted voices. We identify and connect you with the right creators — nano, micro, and macro — who genuinely align with your brand. Our team handles end-to-end campaign management, content briefing, and performance reporting.', icon: 'user' },
    { id: 'seo-optimization', category: 'Paid Ads & SEO', title: 'SEO Optimization', description: 'Rank higher, attract better traffic, and grow organically. We conduct thorough SEO audits, keyword research, and on-page optimization across your entire site. Combined with technical SEO and content strategy, we help your business get found by the right people at the right time.', icon: 'bar-chart' },
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'layers': return <Layers className="w-8 h-8" />;
      case 'bar-chart': return <BarChart3 className="w-8 h-8" />;
      case 'camera': return <Camera className="w-8 h-8" />;
      case 'message': return <MessageSquare className="w-8 h-8" />;
      case 'globe': return <Globe className="w-8 h-8" />;
      case 'code': return <Code className="w-8 h-8" />;
      case 'user': return <User className="w-8 h-8" />;
      default: return <Zap className="w-8 h-8" />;
    }
  };

  const totalDistance = (services.length - 1) * (layout.itemWidth + layout.gap);
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);
  // Apply spring for smooth scrolling
  const x = useSpring(rawX, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div id="services" style={{ height: 'auto', overflowX: 'clip' }}>
      <div ref={containerRef} className="h-[500vh] relative">
        <div className="sticky top-0 h-[100vh] w-full flex flex-col justify-center overflow-visible pt-16 md:pt-0">

          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 md:mb-6">Our <span className="text-brand-primary">Solutions.</span></h2>
            <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto px-6 font-sans font-semibold">Tailored digital services designed to scale your impact and build your legacy.</p>
          </div>

          <div
            className="mx-auto flex justify-start overflow-visible"
            style={{ width: layout.itemWidth }}
          >
            <motion.div
              className="flex will-change-transform"
              style={{ x, gap: layout.gap }}
            >
              {services.map((service, i) => (
                <div
                  key={service.id}
                  className="shrink-0 relative glass rounded-3xl overflow-hidden group hover:border-brand-primary/50 transition-all duration-500"
                  style={{ width: layout.itemWidth, height: 'min(400px, 65vh)' }}
                >
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  <div className="p-5 md:p-6 h-full flex flex-col overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 md:p-5 text-white/5 group-hover:text-brand-primary/10 transition-colors">
                      {getIcon(service.icon)}
                    </div>
                    <div className="text-brand-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform origin-left">
                      {getIcon(service.icon)}
                    </div>
                    <div className="text-[10px] md:text-xs font-bold text-brand-primary uppercase tracking-widest mb-1">{service.category}</div>
                    <h3 className="text-lg md:text-xl font-display font-bold mb-2 md:mb-3">{service.title}</h3>
                    <p className="text-xs md:text-sm text-white/60 font-sans font-semibold leading-relaxed line-clamp-3 md:line-clamp-4">{service.description}</p>

                    <Link href={`/solutions/${service.id}`} className="mt-auto pt-3 md:pt-4 border-t border-white/5 font-sans font-semibold flex items-center gap-2 text-xs md:text-sm font-bold group-hover:text-brand-primary transition-colors cursor-pointer w-max">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
