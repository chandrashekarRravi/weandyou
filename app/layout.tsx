import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToHash } from '@/components/ScrollToHash';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#6A3DE8',
};

export const metadata: Metadata = {
  title: 'WE & YOU Marketing | Digital Marketing Agency in India',
  description:
    'Helping brands become Visible, Valuable, and Viral through Digital Marketing, Branding, Content Creation, Social Media Marketing, SEO, Performance Marketing, and Website Development.',
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
    title: 'WE & YOU Marketing | Digital Marketing Agency in India',
    description:
      'Helping brands become Visible, Valuable, and Viral through Digital Marketing, Branding, Content Creation, Social Media Marketing, SEO, Performance Marketing, and Website Development.',
    url: 'https://weandyoumarketing.com/',
    siteName: 'WE & YOU Marketing',
    images: [
      {
        url: 'https://weandyoumarketing.com/og-image-1200x630.svg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://weandyoumarketing.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WE & YOU Marketing | Digital Marketing Agency in India',
    description:
      'Helping brands become Visible, Valuable, and Viral through Digital Marketing, Branding, Content Creation, Social Media Marketing, SEO, Performance Marketing, and Website Development.',
    images: ['https://weandyoumarketing.com/og-image-1200x630.svg'],
    site: '@weandyou',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="https://weandyoumarketing.com/png.png" as="image" />
        <link rel="preload" href="https://weandyoumarketing.com/favicon.ico" as="image" />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PWS2ZLPC');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://weandyoumarketing.com/#organization",
                  "name": "WE & YOU Marketing",
                  "url": "https://weandyoumarketing.com",
                  "logo": "https://weandyoumarketing.com/png.png",
                  "description": "Helping brands become Visible, Valuable, and Viral through Digital Marketing, Branding, Content Creation, Social Media Marketing, SEO, Performance Marketing, and Website Development.",
                  "email": "weandyoumarketing@gmail.com",
                  "telephone": "+91 6364944289",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN"
                  },
                  "sameAs": [
                    "https://www.facebook.com/weandyoumarketing",
                    "https://www.instagram.com/weandyou.marketing?igsh=MXJ2YW9nYzJ0ZWE4NA%3D%3D&utm_source=qr",
                    "https://www.linkedin.com/company/weandyoumarketing",
                    "https://x.com/weyoumarketing?s=21",
                    "https://www.threads.com/@weandyou.marketing?igshid=NTc4MTIwNjQ2YQ=="
                  ],
                  "foundingDate": "2020",
                  "areaServed": "IN"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://weandyoumarketing.com/#website",
                  "url": "https://weandyoumarketing.com/",
                  "name": "WE & YOU Marketing",
                  "publisher": {
                    "@id": "https://weandyoumarketing.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://weandyoumarketing.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "MarketingAgency",
                  "@id": "https://weandyoumarketing.com/#localbusiness",
                  "name": "WE & YOU Marketing",
                  "url": "https://weandyoumarketing.com",
                  "logo": "https://weandyoumarketing.com/WE&YOU-LOGO.png",
                  "image": "https://weandyoumarketing.com/og-image-1200x630.svg",
                  "description": "Helping brands become Visible, Valuable, and Viral through Digital Marketing, Branding, Content Creation, Social Media Marketing, SEO, Performance Marketing, and Website Development.",
                  "telephone": "+91-0000000000",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "20.593684",
                    "longitude": "78.96288"
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  },
                  "priceRange": "$$"
                }
              ]
            })
          }}
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
