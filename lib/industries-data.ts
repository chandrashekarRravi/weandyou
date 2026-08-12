const BASE_URL = 'https://weandyoumarketing.com';

export interface IndustryFAQ {
  q: string;
  a: string;
}

export interface IndustryData {
  slug: string;
  industry: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroTagline: string;
  painPoints: { title: string; description: string }[];
  services: { name: string; description: string; href: string }[];
  clientProof: { client: string; result: string }[];
  faqs: IndustryFAQ[];
}

export const industries: IndustryData[] = [
  {
    slug: 'education',
    industry: 'Education',
    metaTitle: 'Education Digital Marketing Agency India | WE&YOU',
    metaDescription: 'Digital marketing for schools, colleges, and ed-tech businesses in India. Student lead generation, admissions marketing, and SEO for education institutions — WE&YOU Marketing.',
    heroHeadline: 'Fill Your Admissions Pipeline. Not Just Your Instagram Feed.',
    heroTagline: 'We help educational institutions and ed-tech businesses in India attract the right students, build parent trust, and convert enquiries into confirmed admissions — through digital marketing that understands how education decisions actually get made.',
    painPoints: [
      { title: 'Admissions Are Seasonal — Your Marketing Can\'t Be', description: 'Most institutions only push hard during admission season and go quiet the rest of the year. By the time you advertise, students have already shortlisted. You need year-round visibility.' },
      { title: 'Parents and Students Require Different Messages', description: 'Parents want credibility, placement records, and fee transparency. Students want campus life, peers, and outcomes. One message to both audiences gets ignored by both.' },
      { title: 'Local Search Is Underused', description: 'Parents search "best PU college Bangalore" or "abroad education consultants near me" — and find your competitors who invested in local SEO. Most institutions haven\'t claimed this territory.' },
      { title: 'Brand Trust Drives Admissions More Than Ads', description: 'Paid ads generate enquiries but not necessarily enrolments. Content, testimonials, alumni stories, and organic search credibility are what actually move families to choose you.' },
    ],
    services: [
      { name: 'SEO for Education Institutions', description: 'Rank for "best college in Bangalore", "abroad study consultants India", and every term your prospective students and parents are searching.', href: '/solutions/seo-optimization' },
      { name: 'Google & Meta Ads for Admissions', description: 'Targeted campaigns reaching parents and students by location, age, and interest — with landing pages built to capture enquiries, not just clicks.', href: '/solutions/paid-advertising' },
      { name: 'Social Media Management', description: 'Campus life, student achievements, faculty highlights, and parent-facing content — all planned, created, and posted by our team.', href: '/solutions/social-media-management' },
      { name: 'Content & Creative Production', description: 'Testimonial videos, virtual campus tours, explainer reels, and admission guide content that builds trust before a student visits.', href: '/solutions/content-production' },
      { name: 'Website Development', description: 'Fast, mobile-first institution websites with online enquiry forms, fee information, and SEO architecture built for admissions search intent.', href: '/solutions/website-development' },
    ],
    clientProof: [
      { client: 'Gandharva Abroad Studies', result: 'Consistent social media presence and targeted digital campaigns that built brand recognition in the abroad education space across Karnataka.' },
      { client: 'MB PU Science College', result: 'Professional digital presence and local search visibility connecting the institution with students and parents in their target geography.' },
    ],
    faqs: [
      { q: 'How do you generate student leads for educational institutions?', a: 'We use a combination of Google Search Ads (targeting high-intent queries like "best PU college Bangalore"), Meta Ads targeting parents by location and demographics, SEO for long-tail admission queries, and landing pages built specifically to capture and qualify student enquiries.' },
      { q: 'How can an ed-tech or coaching institute benefit from digital marketing?', a: 'Ed-tech businesses benefit most from SEO (course-specific keywords), YouTube and Instagram content marketing (demo classes, faculty introductions), and Google Ads targeting students actively comparing options. We build funnels that move a student from discovery to enrollment.' },
      { q: 'What results can we expect from education digital marketing?', a: 'Most education clients see a 40–80% increase in digital enquiries within 3–6 months. Specific results depend on your current visibility, competition, and geographic target. We set measurable targets from month one.' },
      { q: 'Do you work with both schools and higher education institutions?', a: 'Yes. We work with PU colleges, professional colleges, abroad education consultants, coaching institutes, and ed-tech businesses. Each has different admission cycles and audience psychology — we adapt the strategy accordingly.' },
    ],
  },
  {
    slug: 'ecommerce',
    industry: 'E-Commerce & Retail',
    metaTitle: 'E-Commerce Digital Marketing Agency India | WE&YOU',
    metaDescription: 'Digital marketing for e-commerce and retail businesses in India. Product photography, Meta Ads, SEO, and social media management to drive online sales — WE&YOU Marketing.',
    heroHeadline: 'More Sales. Less Cart Abandonment. Actual Revenue Growth.',
    heroTagline: 'We help Indian e-commerce and retail brands drive consistent online sales through product photography, Meta Ads, SEO, and social media — built specifically for how Indian shoppers discover and buy online.',
    painPoints: [
      { title: 'Customers Can\'t Buy What They Can\'t Find', description: 'Your products exist. Your potential customers are searching. But if your product pages don\'t rank on Google and your ads don\'t reach the right audience, you\'re invisible to buyers who are ready to purchase.' },
      { title: 'Poor Product Visuals Kill Conversions', description: 'Indian online shoppers are image-driven. A product photographed on a white background with bad lighting will lose to a competitor\'s lifestyle shot every time — regardless of price.' },
      { title: 'Seasonal Sales Need Year-Round Setup', description: 'Diwali, wedding season, year-end sales — brands that win these windows have built their audience, pixel data, and SEO foundations months in advance. Waiting until two weeks before is too late.' },
      { title: 'Meta Ads Require Constant Creative Refresh', description: 'Facebook and Instagram audiences get ad fatigue quickly. A creative that worked in January will be ignored by March. E-commerce brands need a steady pipeline of fresh creative — most don\'t have it.' },
    ],
    services: [
      { name: 'Product Photography & Video', description: 'Lifestyle and catalogue photography, product reels, and ad creatives built to drive clicks and conversions — not just look good.', href: '/solutions/photo-video-production' },
      { name: 'Meta Ads for E-Commerce', description: 'Facebook and Instagram campaigns with product catalogues, dynamic retargeting, and creative rotation that keeps your ROAS consistent month on month.', href: '/solutions/paid-advertising' },
      { name: 'SEO for Product Pages', description: 'Optimised product titles, descriptions, and category pages that rank for the specific queries your customers are typing into Google.', href: '/solutions/seo-optimization' },
      { name: 'Instagram & Facebook Management', description: 'Product launches, styling content, customer stories, and seasonal campaigns — managed by our team so your feed always looks like a brand worth buying from.', href: '/solutions/social-media-management' },
      { name: 'E-Commerce Website Development', description: 'Fast, mobile-optimised online stores with Indian payment gateways, easy product management, and checkout flows built to reduce abandonment.', href: '/solutions/website-development' },
    ],
    clientProof: [
      { client: 'Madhu Jewellery', result: 'Premium product photography and brand content that elevated the perception of the brand online — matching the quality of their in-store experience digitally.' },
      { client: 'Samyam Textiles', result: 'Consistent visual content and social media presence that built brand recognition in the fashion and textiles space, driving both online and offline enquiries.' },
    ],
    faqs: [
      { q: 'What digital marketing channels work best for e-commerce brands in India?', a: 'Instagram and Facebook (Meta Ads) are the highest-ROI channels for most Indian e-commerce brands — particularly with product catalogue ads and retargeting. Google Shopping Ads and SEO are critical for high-intent purchase search. The combination of all three typically outperforms any single channel.' },
      { q: 'How do you reduce cart abandonment for Indian online stores?', a: 'Cart abandonment is typically a checkout experience and retargeting problem. We address it through: Meta retargeting ads showing abandoned products, email/WhatsApp follow-up sequences, checkout page speed optimisation, and UX improvements that reduce friction at the payment step.' },
      { q: 'How important is product photography for e-commerce sales?', a: 'Extremely. Studies consistently show product images are the #1 factor in online purchase decisions. Lifestyle photography that shows products in context converts significantly better than plain white-background shots — particularly on Instagram and in Meta Ads.' },
      { q: 'Can you help us with seasonal campaign planning (Diwali, wedding season)?', a: 'Yes. We work on seasonal campaigns 6–8 weeks in advance — building creatives, audience segments, and ad structures before the season hits. Brands that plan ahead consistently outperform those who start campaigns 1–2 weeks before the sale.' },
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries.find(i => i.slug === slug);
}

export function generateIndustryFAQSchema(faqs: IndustryFAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}
