'use client';

import React from 'react';
import { Achievement } from '@/types';

export const SocialProof = () => {
  const achievements: Achievement[] = [
    { label: 'Brands Helped', value: '50', suffix: '+' },
    { label: 'Campaigns Delivered', value: '100', suffix: '+' },
    { label: 'Audience Reach', value: '10', suffix: 'M+' },
    { label: 'Client Satisfaction', value: '95', suffix: '%' },
  ];

  return (
    <section className="py-14 bg-brand-primary text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {achievements.map((a, i) => (
            <div key={i}>
              <div className="text-5xl md:text-7xl font-display font-bold mb-2">
                {a.value}{a.suffix}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-60">
                {a.label}
              </div>
            </div>
          ))}
        </div> */}

        <div className="mt-6 max-w-4xl mx-auto">
          <div className="text-center italic text-2xl md:text-3xl font-display font-medium leading-relaxed">
            &ldquo;WE&You transformed our digital presence in 3 months. Our lead flow tripled.&rdquo;
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src="/CREW.png"
              alt="WE&YOU Team"
              className="w-16 h-16 rounded-full object-cover bg-brand-dark/10 p-1"
            />
            <div className="text-left">
              {/* <div className="font-bold"></div> */}
              <div className="text-lg opacity-100">#Incredible13</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
