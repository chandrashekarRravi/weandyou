import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToHash } from '@/components/ScrollToHash';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in India | WE & YOU Marketing',
  description:
    'We help businesses get noticed online through social media marketing, branding, content creation, and website development. Grow your brand with WE & YOU Marketing.',
  icons: {
    icon: '/png.png',
  },
  openGraph: {
    title: 'Digital Marketing Agency in India | WE & YOU Marketing',
    description:
      'We help businesses get noticed online through social media marketing, branding, content creation, and website development. Grow your brand with WE & YOU Marketing.',
    url: 'https://weandyoumarketing.com/',
    type: 'website',
    images: [
      {
        url: 'https://weandyoumarketing.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://weandyoumarketing.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in India | WE & YOU Marketing',
    description:
      'We help businesses get noticed online through social media marketing, branding, content creation, and website development. Grow your brand with WE & YOU Marketing.',
    images: ['https://weandyoumarketing.com/og-image.png'],
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
              "@type": "Organization",
              "name": "WE & YOU Marketing",
              "url": "https://weandyoumarketing.com",
              "logo": "https://weandyoumarketing.com/WE&YOU-LOGO.png"
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
