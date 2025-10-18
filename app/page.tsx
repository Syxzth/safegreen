import TopbarCountdown from '@/components/TopbarCountdown';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ResultsCarousel from '@/components/ResultsCarousel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <TopbarCountdown />
      <main className="pt-[88px] md:pt-24">
        <Hero />
        <TestimonialCarousel />
        <CTASection />
        <ResultsCarousel />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
