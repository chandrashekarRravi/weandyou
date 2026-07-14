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
    {
      id: '1',
      category: 'Digital Marketing',
      title: 'Social Media Management',
      description: 'Strategic campaigns designed to increase brand visibility. Includes Instagram portfolio management, content planning, and brand storytelling through reels.',
      icon: 'layers'
    },
    {
      id: '2',
      category: 'Paid Ads & SEO',
      title: 'Paid Advertising',
      description: 'Data-driven Google and Meta Ads designed to increase traffic and generate leads through precise audience targeting and campaign optimization.',
      icon: 'bar-chart'
    },
    {
      id: '3',
      category: 'Creative Content Studio',
      title: 'Photo & Video Production',
      description: 'High-quality visual content including brand video shoots, short-form reel production, and product photography that builds credibility.',
      icon: 'camera'
    },
    {
      id: '4',
      category: 'Creative Content Studio',
      title: 'Creative Content Production',
      description: 'Powerful visuals and storytelling that strengthen brand identity. Includes advertising scripts, reel concepts, and social media campaigns.',
      icon: 'message'
    },
    {
      id: '5',
      category: 'Website & App Development',
      title: 'Website Development',
      description: 'Modern digital platforms including business websites, e-commerce platforms, and responsive designs that help businesses scale online.',
      icon: 'globe'
    },
    {
      id: '6',
      category: 'Website & App Development',
      title: 'App Development',
      description: 'Custom mobile apps built with secure scalable architecture, performance optimization, and ongoing maintenance.',
      icon: 'code'
    },
    {
      id: '7',
      category: 'Influence & Reach',
      title: 'Influencer Marketing',
      description: 'Collaborate with the right creators to expand reach and build trust. Includes campaign strategy and performance tracking.',
      icon: 'user'
    },
    {
      id: '8',
      category: 'Paid Ads & SEO',
      title: 'SEO Optimization',
      description: 'Website SEO audits, keyword research, and on-page optimization to improve search rankings and organic visibility.',
      icon: 'bar-chart'
    }
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
