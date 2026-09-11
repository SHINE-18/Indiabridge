'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Footer } from '@/components/layout/Footer';
import { usePageTransition } from '@/components/layout/PageTransitionProvider';

interface ArticleData {
  slug: string;
  title: string;
  date: string;
  category: string;
  heroImage: string;
  leadParagraph: string;
  bodyParagraphs: string[];
}

const articlesDatabase: Record<string, ArticleData> = {
  'why-india-manufacturing-projects-fail': {
    slug: 'why-india-manufacturing-projects-fail',
    title: 'Why India Manufacturing Projects Fail After the Factory Is Finished',
    date: 'September 10, 2026',
    category: 'Industrial',
    heroImage: '/images/blog-03-commissioning.jpg',
    leadParagraph:
      'For global manufacturers, building a factory in India is rarely the hardest part. Making it perform consistently is.',
    bodyParagraphs: [
      'Most India manufacturing projects do not fail at strategy or construction. They fail after commissioning, when execution ownership fades and operational reality takes over. This post-commissioning phase is where factory execution risk is highest and where long-term underperformance begins.',
      'Commissioning is often treated as completion. In reality, it marks the start of operational stabilization. Plants go live before leadership is fully in place, systems are integrated, or teams are aligned to production targets. KPIs remain unclear, quality issues surface, and cost assumptions begin to erode.',
      'A common failure point is accountability. EPC and PMC responsibilities end once the factory is built, but no single owner remains accountable for outcomes. ERP, quality, maintenance, and supply chain systems operate in silos, while boards receive optimistic reports that mask structural issues.',
      'India amplifies execution gaps. Labor complexity, supplier maturity, regulatory interfaces, and infrastructure variability turn small missteps into persistent problems. This is not an India problem. It is an execution problem.',
      'Successful manufacturers treat stabilization as a distinct phase. Interim leadership, KPI-driven ramp-up, system integration, and operational ownership are non-negotiable.',
      'The real question is not whether the factory is built, but who owns performance after commissioning.',
    ],
  },
  'china-plus-one-decision-not-strategy': {
    slug: 'china-plus-one-decision-not-strategy',
    title: 'China+1 Is a Decision, Not a Strategy',
    date: 'August 28, 2026',
    category: 'Industrial',
    heroImage: '/images/blog-02-china-plus-one.jpg',
    leadParagraph:
      'Corporate boardrooms around the world have universally endorsed the mandate for supply chain diversification. But a boardroom mandate is not a factory floor reality.',
    bodyParagraphs: [
      'Treating "China+1" as a high-level procurement realignment rather than a complex industrial execution initiative leads to severe capital and scheduling penalties.',
      'India offers unmatched scale, deep technical engineering talent, and aggressive federal PLI support, but navigating state-level operating nuances requires ground presence and local contract governance.',
      'Winning organizations treat Indian facilities as independent centers of manufacturing excellence rather than subordinate satellite operations.',
      'Operational success requires building local supplier tiers, securing stable power infrastructure, and designing quality governance that operates autonomously.',
    ],
  },
  'commissioning-is-not-success': {
    slug: 'commissioning-is-not-success',
    title: 'Commissioning Is Not Success: The Gap Before Stable Operations',
    date: 'August 14, 2026',
    category: 'Industrial',
    heroImage: '/images/blog-01-factory-failure.jpg',
    leadParagraph:
      'Running a dry-cycle batch under equipment vendor supervision is vastly different from sustaining 85% OEE across two continuous operating shifts.',
    bodyParagraphs: [
      'EPC contractors and machinery OEMs define commissioning as running standard test parts without catastrophic failure. Once sign-off forms are completed, vendor teams depart, leaving plant operators to face live industrial turbulence alone.',
      'The gap between technical commissioning and commercial production stability is where millions in working capital disappear through scrap rates, cycle time delays, and tooling wear.',
      'Indiabridge bridges this exact gap by remaining accountable on the ground through ramp-up and operational stabilization until targeted unit economics are secured.',
    ],
  },
  'everyone-advises-no-one-owns': {
    slug: 'everyone-advises-no-one-owns',
    title: 'Everyone Advises. No One Owns. The Real Risk in India Projects',
    date: 'July 29, 2026',
    category: 'Industrial',
    heroImage: '/images/about-gallery-inspection.jpg',
    leadParagraph:
      'International manufacturers entering India are rarely short on advice. Strategy firms, brokers, and advisors provide endless decks—yet accountability remains absent.',
    bodyParagraphs: [
      'When contractors fail to mobilize or statutory permits hit administrative bottlenecks, theoretical advice offers zero protection to capital.',
      'Execution risk is resolved on the ground through daily site coordination, direct vendor negotiations, and uncompromising quality discipline.',
      'Indiabridge exists to eliminate this advisory void by providing hands-on ownership and operational leadership until facilities yield reliable output.',
    ],
  },
  'india-punishes-assumptions': {
    slug: 'india-punishes-assumptions',
    title: 'India Punishes Assumptions: A Board-Level Framework for Manufacturing Entry',
    date: 'July 12, 2026',
    category: 'Industrial',
    heroImage: '/images/about-gallery-construction.jpg',
    leadParagraph:
      'Entering India requires unlearning assumptions formed in Western or East Asian manufacturing environments.',
    bodyParagraphs: [
      'Power tariffs, water access, supply chain proximity, and labor dynamics vary dramatically across state borders in India.',
      'A successful board framework prioritizes ground reality over headline subsidies, demanding realistic permitting timelines and tight Capex controls.',
      'By establishing institutional execution governance before capital is deployed, international leadership teams build durable manufacturing advantages in India.',
    ],
  },
};

const relatedArticles = [
  {
    slug: 'china-plus-one-decision-not-strategy',
    title: 'China+1 Is a Decision, Not a Strategy',
    category: 'Industrial',
    image: '/images/blog-02-china-plus-one.jpg',
  },
  {
    slug: 'commissioning-is-not-success',
    title: 'Commissioning Is Not Success: The Gap Before Stable Operations',
    category: 'Industrial',
    image: '/images/blog-01-factory-failure.jpg',
  },
  {
    slug: 'everyone-advises-no-one-owns',
    title: 'Everyone Advises. No One Owns. The Real Risk in India Projects',
    category: 'Industrial',
    image: '/images/about-gallery-inspection.jpg',
  },
];

export default function ArticleDetailPage() {
  const params = useParams();
  const slugParam = typeof params?.slug === 'string' ? params.slug : '';
  const { navigateTo } = usePageTransition();

  // Fallback to default article if slug is not matched
  const article = articlesDatabase[slugParam] || articlesDatabase['why-india-manufacturing-projects-fail'];

  const handleRelatedClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <>
      <main className="relative bg-white overflow-x-clip text-[#101012]">
        {/* ========================================================= */}
        {/* 1. ARTICLE HERO: CINEMATIC TECHNICAL STILL-LIFE           */}
        {/* ========================================================= */}
        <section className="sticky top-0 left-0 w-full min-h-[85vh] h-[88vh] lg:h-[90vh] flex flex-col justify-between bg-[#0b1419] z-[1] overflow-hidden animate-hero-curtain">
          {/* Background Image: Mechanical Bearings, Caliper over Technical Drawings */}
          <div className="absolute inset-0 z-[1] overflow-hidden">
            <img
              src={article.heroImage}
              alt={article.title}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            {/* Soft Darkened Overlay for High Typography Readability */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black/95 via-black/60 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-black/25"
              aria-hidden="true"
            />
          </div>

          {/* Thin Vertical Architectural Grid Lines Across the Hero */}
          <div className="pointer-events-none absolute inset-0 z-[2] flex justify-center" aria-hidden="true">
            <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-3 h-full">
              <div className="border-r border-white/10 h-full" />
              <div className="border-r border-white/10 h-full" />
              <div className="h-full" />
            </div>
          </div>

          {/* Top spacer for navbar clearance */}
          <div className="relative z-[3] w-full pt-28 sm:pt-32" />

          {/* Lower Section: Metadata & Large Article Title Near Lower-Left */}
          <div className="relative z-[3] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pb-12 sm:pb-16 md:pb-20">
            {/* Metadata (Date + Vertical Divider + Category) */}
            <div className="flex items-center gap-3.5 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-white/85 mb-5 sm:mb-6 select-none animate-hero-pitch">
              <span>{article.date}</span>
              <span className="w-px h-3.5 bg-white/40" aria-hidden="true" />
              <span>{article.category}</span>
            </div>

            {/* Large Article Title */}
            <h1
              className="text-white font-semibold tracking-[-0.035em] leading-[1.08] text-3xl sm:text-4xl md:text-5xl lg:text-[62px] max-w-4xl select-none [backface-visibility:hidden] animate-hero-headline"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontFeatureSettings: "'cv05' on, 'cv11' on",
              }}
            >
              {article.title}
            </h1>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. ARTICLE CONTENT: CENTERED READING COLUMN (700-760PX)   */}
        {/* ========================================================= */}
        <div className="content-curtain relative z-10 bg-[#fafafa]">
          {/* Continuous Thin Vertical Architectural Guide Lines */}
          <div className="pointer-events-none absolute inset-0 z-[1] flex justify-center" aria-hidden="true">
            <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-3 h-full">
              <div className="border-r border-black/[0.05] h-full" />
              <div className="border-r border-black/[0.05] h-full" />
              <div className="h-full" />
            </div>
          </div>

          <article className="relative z-[2] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pt-20 sm:pt-28 md:pt-36 pb-20 sm:pb-28">
            {/* Narrow Centered Column (700-760px) */}
            <div className="max-w-[740px] mx-auto">
              {/* Lead Paragraph */}
              <p className="text-xl sm:text-2xl md:text-[24px] font-medium tracking-tight text-[#111112] leading-[1.45] mb-8 sm:mb-10 reveal-on-scroll">
                {article.leadParagraph}
              </p>

              {/* Body Copy Paragraphs */}
              <div className="space-y-7 sm:space-y-8 text-base sm:text-lg md:text-[19px] text-[#44444c] leading-[1.8] font-normal reveal-on-scroll">
                {article.bodyParagraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>
          </article>

          {/* ======================================================= */}
          {/* 3. MORE ARTICLES SECTION                                */}
          {/* ======================================================= */}
          <section className="relative z-[2] w-full border-t border-black/[0.08] pt-20 sm:pt-28 pb-28 sm:pb-36 bg-[#fafafa]">
            <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
              {/* Centered Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#111112] text-center mb-12 sm:mb-16 reveal-on-scroll">
                More articles
              </h2>

              {/* Three Related Article Cards (3-Column Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                {relatedArticles.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    onClick={(e) => handleRelatedClick(e, `/blog/${item.slug}`)}
                    className="group flex flex-col cursor-pointer reveal-on-scroll"
                  >
                    {/* Rounded Technical Image with Hover Zoom */}
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/5 border border-black/[0.08] shadow-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
                      />

                      {/* Dark Category Tag along the Lower Edge */}
                      <div className="absolute bottom-3.5 left-3.5 z-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#111112]/90 backdrop-blur-md text-white text-[11px] font-mono uppercase tracking-wider select-none shadow-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Bold Black Article Title */}
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#111112] leading-[1.3] group-hover:text-[#55555e] transition-colors mt-5">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
