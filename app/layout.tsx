import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToHash } from '@/components/ScrollToHash';
import './globals.css';

const BASE_URL = 'https://weandyoumarketing.com';

export const viewport: Viewport = {
  themeColor: '#6A3DE8',
};

export const metadata: Metadata = {
  title: 'WE & YOU Marketing | Best Digital Marketing Agency in Bangalore, India',
  description:
    'WE & YOU Marketing is a ROI-driven digital marketing agency in Bangalore, India. We offer Social Media Marketing, Google & Meta Ads, SEO, Website & App Development, Branding, and Content Production to help Indian businesses grow online.',
  keywords: [
    'digital marketing agency Bangalore',
    'social media marketing India',
    'SEO agency Karnataka',
    'Google Ads agency India',
    'Meta Ads agency Bangalore',
    'website development agency India',
    'app development agency Bangalore',
    'software development India',
    'branding agency Karnataka',
    'performance marketing India',
    'lead generation agency India',
    'content marketing agency Bangalore',
    'influencer marketing India',
    'best digital marketing agency India',
    'affordable digital marketing India',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/16x16.svg', type: 'image/svg+xml', sizes: '16x16' },
      { url: '/favicon-32x32.svg', type: 'image/svg+xml', sizes: '32x32' },
      { url: '/48x48.svg', type: 'image/svg+xml', sizes: '48x48' },
      { url: '/favicon-192x192.svg', type: 'image/svg+xml', sizes: '192x192' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'WE & YOU Marketing | Best Digital Marketing Agency in Bangalore, India',
    description:
      'ROI-driven digital marketing agency in India. Social Media, SEO, Google Ads, Website & App Development, Branding, and Content for growing businesses.',
    url: `${BASE_URL}/`,
    siteName: 'WE & YOU Marketing',
    images: [{ url: `${BASE_URL}/og-image-1200x630.svg`, width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WE & YOU Marketing | Best Digital Marketing Agency in Bangalore, India',
    description:
      'ROI-driven digital marketing agency in India. Social Media, SEO, Google Ads, Website & App Development, Branding, and Content for growing businesses.',
    images: [`${BASE_URL}/og-image-1200x630.svg`],
    site: '@weandyou',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'WE & YOU Marketing',
      url: BASE_URL,
      logo: `${BASE_URL}/WE&YOU-LOGO.png`,
      description:
        'WE & YOU Marketing is a full-service digital marketing and technology agency in India, helping brands grow through Social Media, SEO, Paid Ads, Website Development, App Development, Software Solutions, Branding, and Content Production.',
      email: 'weandyoumarketing@gmail.com',
      telephone: '+916364893295',
      foundingDate: '2020',
      areaServed: [
        'Bangalore', 'Mangalore', 'Mysore', 'Hubli', 'Dharwad', 'Belgaum',
        'Shimoga', 'Udupi', 'Tumkur', 'Hassan', 'Davanagere', 'Bidar',
        'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad',
        'Kolkata', 'Jaipur', 'Surat', 'Lucknow', 'India',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+916364893295',
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Kannada', 'Hindi'],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.facebook.com/weandyoumarketing',
        'https://www.instagram.com/weandyou.marketing',
        'https://www.linkedin.com/company/weandyoumarketing',
        'https://x.com/weyoumarketing',
        'https://www.threads.com/@weandyou.marketing',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#localbusiness`,
      name: 'WE & YOU Marketing',
      url: BASE_URL,
      image: `${BASE_URL}/og-image-1200x630.svg`,
      logo: `${BASE_URL}/WE&YOU-LOGO.png`,
      description:
        'Full-service digital marketing, website development, app development, and software agency in Bangalore, Karnataka, India.',
      telephone: '+916364893295',
      email: 'weandyoumarketing@gmail.com',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9716',
        longitude: '77.5946',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing & Technology Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing', description: 'Full social media management across Instagram, Facebook, LinkedIn, and YouTube.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google & Meta Paid Advertising', description: 'ROI-driven Google Ads and Meta Ads campaigns with conversion tracking and weekly optimization.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization', description: 'Technical SEO, on-page optimization, and content strategy to rank higher on Google.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development', description: 'Fast, responsive, SEO-optimized business websites and e-commerce platforms.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'App Development', description: 'Custom iOS and Android mobile application development for businesses.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software Development', description: 'Custom software solutions and business automation tools built for Indian enterprises.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding & Creative Content', description: 'Brand identity, photography, video production, and creative content for social media.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Influencer Marketing', description: 'End-to-end influencer marketing campaigns connecting brands with creators across India.' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: `${BASE_URL}/`,
      name: 'WE & YOU Marketing',
      publisher: { '@id': `${BASE_URL}/#organization` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which is the best digital marketing agency in Bangalore?',
          acceptedAnswer: { '@type': 'Answer', text: 'WE & YOU Marketing is one of the top digital marketing agencies in Bangalore, Karnataka. We offer Social Media Marketing, Google Ads, Meta Ads, SEO, Website Development, App Development, and Branding — all under one roof with measurable ROI for Indian businesses.' },
        },
        {
          '@type': 'Question',
          name: 'How much does digital marketing cost in India?',
          acceptedAnswer: { '@type': 'Answer', text: 'Digital marketing pricing in India varies by scope. At WE & YOU Marketing, packages start affordably for small businesses and scale for enterprises. Contact us at weandyoumarketing@gmail.com or call +91 6364893295 for a custom quote.' },
        },
        {
          '@type': 'Question',
          name: 'Do you provide website and app development services?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. WE & YOU Marketing provides full website development, mobile app development (iOS & Android), and custom software development for businesses across India. Our tech solutions are built for performance, SEO, and lead conversion.' },
        },
        {
          '@type': 'Question',
          name: 'How long does SEO take to show results?',
          acceptedAnswer: { '@type': 'Answer', text: 'SEO typically takes 3 to 6 months to show significant organic ranking improvements. WE & YOU Marketing provides monthly SEO reporting so you can track keyword rankings, traffic growth, and lead generation progress from day one.' },
        },
        {
          '@type': 'Question',
          name: 'Do you run Google Ads and Meta Ads campaigns?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manage end-to-end Google Ads and Meta Ads (Facebook & Instagram) campaigns with precise audience targeting, A/B testing, and conversion tracking to maximize your return on ad spend (ROAS).' },
        },
        {
          '@type': 'Question',
          name: 'Do you serve businesses outside Bangalore and Karnataka?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. WE & YOU Marketing serves clients across all major cities in India including Mumbai, Delhi, Hyderabad, Chennai, Pune, and all cities across Karnataka. We work remotely and deliver results for businesses nationwide.' },
        },
        {
          '@type': 'Question',
          name: 'Can you help a small business or startup?',
          acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We specialize in helping startups and small businesses in India build a strong digital presence with strategies that fit their budget and growth stage — from social media setup to full digital marketing campaigns.' },
        },
        {
          '@type': 'Question',
          name: 'What industries do you work with?',
          acceptedAnswer: { '@type': 'Answer', text: 'WE & YOU Marketing works with businesses across travel, food & beverage, education, jewellery, textiles, logistics, real estate, healthcare, and more — both B2B and B2C brands across India.' },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PWS2ZLPC');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PWS2ZLPC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div className="selection:bg-brand-primary selection:text-black">
          <Navbar />
          <ScrollToHash />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
