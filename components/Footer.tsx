'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, AtSign } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-white/5 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-5xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Let&apos;s Build Your <br />
              <span className="text-brand-primary">Brand Together</span>
            </h2>
            <p className="text-white/60 mb-8 font-sans font-semibold text-lg">Ready to grow your business online? Connect with WE&You today.</p>
            <Link
              href="/start"
              className="bg-brand-primary text-black px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform inline-block"
            >
              Start Your Project
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 font-sans font-semibold gap-12">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Contact</h4>
              <div className="space-y-4 text-sm">
                <a href="mailto:info@weandyoumarketing.com" className="block hover:text-brand-primary transition-colors">info@weandyoumarketing.com</a>
                <a href="tel:+916364893295" className="block hover:text-brand-primary transition-colors">+91 6364893295</a>

                {/* <p className="text-white/60">www.weandyoumarketing.com</p> */}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase font-sans font-semibold tracking-widest text-white/40 mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, link: 'https://www.instagram.com/weandyou.marketing?igsh=MXJ2YW9nYzJ0ZWE4NA%3D%3D&utm_source=qr' },
                  { Icon: AtSign, link: 'https://www.threads.com/@weandyou.marketing?igshid=NTc4MTIwNjQ2YQ==' },
                  { Icon: Twitter, link: 'https://x.com/weyoumarketing?s=21' }
                ].map(({ Icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="mt-4 text-white/60 font-sans font-semibold text-sm">#Incredible13</div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/" className="flex items-center -ml-2 -my-8 md:-ml-4 md:-my-12">
            <Image
              src="/WE&YOU-LOGO.png"
              alt="WE&YOU Marketing Logo"
              width={220}
              height={45}
              className="w-[160px] md:w-[220px] h-auto object-contain max-w-none"
            />
          </Link>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="text-sm text-white/40 font-sans font-semibold">Get digital growth tips in your inbox.</div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-full px-6 py-2 text-sm focus:outline-none focus:border-brand-primary transition-colors"
              />
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-primary transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs font-sans font-semibold text-white/20">
          © {new Date().getFullYear()} WE&You Marketing
        </div>
      </div>
    </footer>
  );
};
