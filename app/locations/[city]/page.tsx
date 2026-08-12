import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationBySlug, locations, generateLocalBusinessSchema } from '@/lib/locations-data';
import { LocationPageContent } from '@/components/LocationPageContent';

const BASE_URL = 'https://weandyoumarketing.com';

export async function generateStaticParams() {
  return locations.map(l => ({ city: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `${BASE_URL}/locations/${location.slug}` },
    openGraph: { title: location.metaTitle, description: location.metaDescription, url: `${BASE_URL}/locations/${location.slug}` },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema(location)) }} />
      <LocationPageContent location={location} />
    </>
  );
}
