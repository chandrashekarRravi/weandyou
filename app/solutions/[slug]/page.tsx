import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSolutionBySlug, solutions, generateServiceSchema, generateServiceFAQSchema } from '@/lib/solutions-data';
import { SolutionPageContent } from '@/components/SolutionPageContent';

const BASE_URL = 'https://weandyoumarketing.com';

export async function generateStaticParams() {
  return solutions.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getSolutionBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${BASE_URL}/solutions/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${BASE_URL}/solutions/${service.slug}`,
    },
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getSolutionBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceFAQSchema(service.faqs)) }} />
      <SolutionPageContent service={service} />
    </>
  );
}
