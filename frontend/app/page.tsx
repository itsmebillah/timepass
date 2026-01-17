import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <PricingSection />
      <Testimonials />
      <CTASection />
    </div>
  );
}
