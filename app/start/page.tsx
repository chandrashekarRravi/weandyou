import type { Metadata } from 'next';
import { StartProject } from '@/components/StartProject';

export const metadata: Metadata = {
  title: 'Start Your Project | WE & YOU Marketing — Digital Marketing Agency India',
  description:
    'Ready to grow your brand online? Start your project with WE & YOU Marketing. Get a free consultation for Digital Marketing, SEO, Website Development, App Development, and Software Solutions across India.',
  alternates: {
    canonical: 'https://weandyoumarketing.com/start',
  },
  openGraph: {
    title: 'Start Your Project | WE & YOU Marketing',
    description: 'Get a free digital marketing consultation. We help Indian businesses grow with Social Media, SEO, Ads, Website & App Development.',
    url: 'https://weandyoumarketing.com/start',
  },
};

export default function StartPage() {
  return <StartProject />;
}
