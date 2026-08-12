const BASE_URL = 'https://weandyoumarketing.com';

export interface LocationFAQ {
  q: string;
  a: string;
}

export interface LocationData {
  city: string;
  slug: string;
  state: string;
  hasPhysicalPresence: boolean;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroTagline: string;
  cityContext: string;
  faqs: LocationFAQ[];
}

export const locations: LocationData[] = [
  {
    city: 'Bangalore',
    slug: 'bangalore',
    state: 'Karnataka',
    hasPhysicalPresence: true,
    metaTitle: 'Digital Marketing Agency Bangalore | WE&YOU Marketing',
    metaDescription: 'WE&YOU Marketing is a Bangalore-based digital marketing agency. Social Media, SEO, Google Ads, Website & App Development for businesses across Bangalore and Karnataka.',
    heroHeadline: 'Bangalore\'s Digital Marketing Agency for Businesses That Want to Grow',
    heroTagline: 'We\'re based in Bangalore and we work with businesses across the city — from Koramangala startups to Rajajinagar manufacturers. Social Media, SEO, Google Ads, Website Development, and App Development — all in-house.',
    cityContext: 'Bangalore is India\'s most competitive digital market. Whether you\'re a tech startup in HSR Layout, a restaurant in Indiranagar, a school in Yelahanka, or a manufacturer in Peenya — your customers are online and your competitors are already advertising. We help Bangalore businesses get found, get noticed, and get customers through targeted digital strategies that fit the city\'s unique market dynamics.',
    faqs: [
      { q: 'Which is the best digital marketing agency in Bangalore?', a: 'WE&YOU Marketing is a full-service digital marketing agency headquartered in Bangalore, Karnataka. We offer Social Media Marketing, Google & Meta Ads, SEO, Website Development, App Development, and Creative Production for businesses across Bangalore and India.' },
      { q: 'How much do digital marketing services cost in Bangalore?', a: 'Our packages are designed to be accessible for small businesses and scalable for larger brands. Social media management starts at a monthly retainer, SEO from ₹15,000/month, and Google Ads management from ₹8,000/month + ad spend. Contact us for a customised quote.' },
      { q: 'Do you work with Bangalore startups?', a: 'Yes. We work with early-stage startups through to growth-stage companies. Our approach scales with your budget — starting with the highest-impact channels first and expanding as you grow.' },
      { q: 'Can you help with local SEO for my Bangalore business?', a: 'Yes. Local SEO — Google Business Profile optimisation, local keyword targeting, and location-specific landing pages — is a core part of what we do for Bangalore businesses targeting specific areas like Koramangala, Whitefield, Electronic City, or Jayanagar.' },
    ],
  },
  {
    city: 'Mangalore',
    slug: 'mangalore',
    state: 'Karnataka',
    hasPhysicalPresence: false,
    metaTitle: 'Digital Marketing Agency Mangalore | WE&YOU Marketing',
    metaDescription: 'Digital marketing services for Mangalore businesses. Social Media, SEO, Google Ads, and Website Development — remote-first from Bangalore, serving businesses across the Coastal Karnataka region.',
    heroHeadline: 'Digital Marketing for Mangalore Businesses Ready to Grow Online',
    heroTagline: 'We serve Mangalore and Coastal Karnataka businesses remotely from our Bangalore base — with the same strategies, quality, and accountability as our in-city clients. Social Media, SEO, Google Ads, and Website Development.',
    cityContext: 'Mangalore is a fast-growing commercial hub with strong business presence in education, healthcare, hospitality, seafood, and trading sectors. Digital adoption is accelerating, and the businesses investing in online presence now are building a lead that will be difficult for competitors to close. We serve Mangalore businesses remotely with no drop in quality or communication.',
    faqs: [
      { q: 'Do you have an office in Mangalore?', a: 'We\'re based in Bangalore but serve Mangalore businesses remotely. All strategy, content, and campaign management is handled by our Bangalore team. Meetings are conducted via video call, and there\'s no compromise in service quality or communication.' },
      { q: 'What digital marketing services do you provide for Mangalore businesses?', a: 'We provide the full range: Social Media Marketing, Google & Meta Ads, SEO, Website Development, App Development, Content Production, and Influencer Marketing — all tailored for your specific Mangalore market.' },
      { q: 'Can you do local SEO for Mangalore?', a: 'Yes. We optimise your Google Business Profile for Mangalore-specific searches, build local landing pages, and target keywords like "digital marketing agency Mangalore", "web development Mangalore", and service-specific local terms your customers are searching.' },
      { q: 'Which industries in Mangalore do you work with?', a: 'We work with businesses across education, hospitality, healthcare, retail, seafood and food processing, real estate, and professional services in Mangalore and the surrounding Dakshina Kannada region.' },
    ],
  },
  {
    city: 'Hubli',
    slug: 'hubli',
    state: 'Karnataka',
    hasPhysicalPresence: false,
    metaTitle: 'Digital Marketing Agency Hubli | WE&YOU Marketing',
    metaDescription: 'Digital marketing for Hubli-Dharwad businesses. Social Media, SEO, Google Ads, Website & App Development — from Bangalore, serving North Karnataka businesses across all industries.',
    heroHeadline: 'Digital Marketing for Hubli-Dharwad Businesses',
    heroTagline: 'We help Hubli and North Karnataka businesses grow online — with Social Media, SEO, Google Ads, and Website Development. Managed remotely from Bangalore with full accountability and regular reporting.',
    cityContext: 'Hubli-Dharwad is one of Karnataka\'s major commercial and industrial centres — with strong industries in textiles, agriculture, manufacturing, education, and retail. As digital penetration grows in North Karnataka, businesses that establish their online presence now will capture organic traffic and local search rankings that compound over time. We serve Hubli businesses with the same rigour as our Bangalore clients.',
    faqs: [
      { q: 'Do you serve Hubli businesses without a local office?', a: 'Yes. We operate as a remote-first agency for clients outside Bangalore. Our Bangalore team handles all services — strategy, content, ads, development — with weekly updates and monthly reporting. Distance hasn\'t been a barrier for any of our outstation clients.' },
      { q: 'What services do you offer for Hubli businesses?', a: 'Social Media Management, Google Ads, Meta Ads, SEO, Website Development, App Development, Content Production, and Influencer Marketing — all available for Hubli and North Karnataka businesses.' },
      { q: 'Can you rank my Hubli business on Google for local searches?', a: 'Yes. We optimise for local Hubli searches — targeting keywords like "digital marketing Hubli", "web development Hubli-Dharwad", and your specific service + city combinations. Local SEO in Tier-2 cities like Hubli is typically less competitive than Bangalore, meaning faster results.' },
      { q: 'Do you understand the North Karnataka market?', a: 'We work with businesses across Karnataka and understand regional market dynamics, language preferences (Kannada and Urdu in some segments), and the specific industries dominant in the Hubli-Dharwad region. Strategy is always contextualised for your actual market.' },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find(l => l.slug === slug);
}

export function generateLocalBusinessSchema(location: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'WE & YOU Marketing',
    description: location.metaDescription,
    url: `${BASE_URL}/locations/${location.slug}`,
    telephone: '+916364893295',
    areaServed: location.city,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.hasPhysicalPresence ? location.city : 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
  };
}
