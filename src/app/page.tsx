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

import { siteFacts } from '@/lib/constants';
import { FAQ_ITEMS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Indiabridge Capital Partners | India Manufacturing Entry & Execution',
  description:
    'Indiabridge partners with global manufacturers to establish, build, and scale industrial plants across India with hands-on execution.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Indiabridge Capital Partners | India Manufacturing Entry & Execution',
    description:
      'Indiabridge partners with global manufacturers to establish, build, and scale industrial plants across India with hands-on execution.',
    url: siteFacts.urls.siteUrl,
    type: 'website',
    locale: 'en_IN',
    siteName: siteFacts.brand.name,
    images: [
      {
        url: siteFacts.urls.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteFacts.brand.name} — Industrial Entry & Execution Platform`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indiabridge Capital Partners | India Manufacturing Entry & Execution',
    description:
      'Indiabridge partners with global manufacturers to establish, build, and scale industrial plants across India with hands-on execution.',
    images: [siteFacts.urls.ogImage],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
