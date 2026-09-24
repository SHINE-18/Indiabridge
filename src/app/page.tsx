import React from 'react';
import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'India Manufacturing Entry & Execution',
  description:
    'Indiabridge partners with global manufacturers to establish, build, and scale industrial plants across India with hands-on execution.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <main className="relative bg-white overflow-x-clip">
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
