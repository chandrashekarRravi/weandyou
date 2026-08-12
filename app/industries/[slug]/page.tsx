import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getIndustryBySlug, industries, generateIndustryFAQSchema } from '@/lib/industries-data';
import { IndustryPageContent } from '@/components/IndustryPageContent';

const BASE_URL = 'https://weandyoumarketing.com';

export async function generateStaticParams() {
  return industries.map(i => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `${BASE_URL}/industries/${industry.slug}` },
    openGraph: { title: industry.metaTitle, description: industry.metaDescription, url: `${BASE_URL}/industries/${industry.slug}` },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateIndustryFAQSchema(industry.faqs)) }} />
      <IndustryPageContent industry={industry} />
    </>
  );
}
