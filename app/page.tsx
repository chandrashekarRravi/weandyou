import type { Metadata } from 'next';
import React, { Suspense, lazy } from 'react';
import { Hero } from '@/components/Hero';

const BASE_URL = 'https://weandyoumarketing.com';

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
};

// Below-the-fold components — code-split to reduce initial JS bundle
const About = lazy(() => import('@/components/About').then(m => ({ default: m.About })));
const Mission = lazy(() => import('@/components/Mission').then(m => ({ default: m.Mission })));
const Process = lazy(() => import('@/components/Process').then(m => ({ default: m.Process })));
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const Services = lazy(() => import('@/components/Services').then(m => ({ default: m.Services })));
const SocialProof = lazy(() => import('@/components/SocialProof').then(m => ({ default: m.SocialProof })));
const ClientSuccess = lazy(() => import('@/components/ClientSuccess').then(m => ({ default: m.ClientSuccess })));
const FAQSection = lazy(() => import('@/components/FAQSection').then(m => ({ default: m.FAQSection })));

// Minimal fallback that matches section height to prevent CLS
const SectionFallback = () => <div className="h-24" aria-hidden="true" />;

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}><About /></Suspense>
      <Suspense fallback={<SectionFallback />}><Mission /></Suspense>
      <Suspense fallback={<SectionFallback />}><Process /></Suspense>
      <Suspense fallback={<SectionFallback />}><WhyChooseUs /></Suspense>
      <Suspense fallback={<SectionFallback />}><Services /></Suspense>
      <Suspense fallback={<SectionFallback />}><SocialProof /></Suspense>
      {/* <Suspense fallback={<SectionFallback />}><ClientSuccess /></Suspense> */}
      <Suspense fallback={<SectionFallback />}><FAQSection /></Suspense>
    </>
  );
}

