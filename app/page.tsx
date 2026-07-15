import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Mission } from '@/components/Mission';
import { Process } from '@/components/Process';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Services } from '@/components/Services';
import { SocialProof } from '@/components/SocialProof';
import { ClientSuccess } from '@/components/ClientSuccess';
import { FAQSection } from '@/components/FAQSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <Process />
      <WhyChooseUs />
      <Services />
      <SocialProof />

      <FAQSection />
    </>
  );
}
