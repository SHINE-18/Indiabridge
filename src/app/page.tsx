import React from 'react';
import { HeroFullscreen } from '@/components/home/HeroFullscreen';
import { ProblemSection } from '@/components/home/ProblemSection';
import { SolutionSection } from '@/components/home/SolutionSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { AdvantageSection } from '@/components/home/AdvantageSection';
import { EngagementSection } from '@/components/home/EngagementSection';
import { WhyIndiaSection } from '@/components/home/WhyIndiaSection';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { FAQSection } from '@/components/home/FAQSection';
import { BlogPreview } from '@/components/home/BlogPreview';
import { ReachOutSection } from '@/components/home/ReachOutSection';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <main className="relative bg-[#060a0e] overflow-x-clip">
        {/* SECTION 1: HERO */}
        <HeroFullscreen />

        {/* CONTENT CURTAIN: Rises up like a curtain overlaying the landing hero from downside */}
        <div className="content-curtain" id="contentCurtain">
          <ProblemSection />
          <SolutionSection />
          <ServicesSection />
          <AdvantageSection />
          <EngagementSection />
          <WhyIndiaSection />
          <TestimonialSection />
          <FAQSection />
          <BlogPreview />
          <ReachOutSection />
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
