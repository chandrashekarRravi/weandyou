import type { Metadata } from 'next';
import { solutions } from '@/lib/solutions-data';
import { SolutionsIndexContent } from '@/components/SolutionsIndexContent';

const BASE_URL = 'https://weandyoumarketing.com';

export const metadata: Metadata = {
  title: 'Our Solutions | WE&YOU Marketing — Digital Services India',
  description: 'Explore WE&YOU Marketing\'s full range of digital services — Social Media, SEO, Google Ads, Website Development, App Development, and more for businesses across India.',
  alternates: { canonical: `${BASE_URL}/solutions` },
};

export default function SolutionsPage() {
  return <SolutionsIndexContent solutions={solutions} />;
}
