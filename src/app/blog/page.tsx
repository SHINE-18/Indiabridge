'use client';

import React from 'react';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { usePageTransition } from '@/components/layout/PageTransitionProvider';

interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  readTime: string;
  date: string;
  paragraphs: string[];
}

const blogArticles: BlogArticle[] = [
  {
    id: '01',
    slug: 'why-india-manufacturing-projects-fail',
    title: 'Why India Manufacturing Projects Fail After the Factory Is Finished',
    category: 'Industrial',
    image: '/images/blog-01-factory-failure.jpg',
    readTime: '6 min read',
    date: 'September 2026',
    excerpt:
      'Civil construction and machine installation represent only the visible half of factory readiness. The critical failure occurs during operational ramp-up.',
    paragraphs: [
      'In international manufacturing entries, project milestones are overwhelmingly indexed to physical milestones: land acquisition, slab casting, structural roof erection, and machine installation. When the handover ribbon is cut, boards frequently assume execution risk has dropped to zero.',
      'In reality, the most volatile period of any India industrial project begins the morning after handover. Vendor qualification bottlenecks, micro-voltage stability, local quality compliance discrepancies, and supervisory capability gaps routinely delay target cycle times by 6 to 18 months.',
      'Indiabridge prevents this by enforcing operational readiness workstreams twelve months before civil completion—embedding local operating cadence, supply chain validation, and plant leadership on the ground from day one.',
    ],
  },
  {
    id: '02',
    slug: 'china-plus-one-decision-not-strategy',
    title: 'China+1 Is a Decision, Not a Strategy',
    category: 'Industrial',
    image: '/images/blog-02-china-plus-one.jpg',
    readTime: '5 min read',
    date: 'August 2026',
    excerpt:
      'Moving supply chain volume away from East Asia is an intent. Translating that intent into an executable industrial asset requires local capital discipline.',
    paragraphs: [
      'Corporate boardrooms around the world have universally endorsed the mandate for supply chain diversification. However, treating "China+1" as a high-level procurement shift rather than a complete industrial re-engineering program leads to severe margin erosion.',
      'India offers immense scale, strong engineering talent, and favorable state incentive packages, but navigating local vendor ecosystems requires proprietary operational knowledge. You cannot simply replicate an existing plant layout and assume the component supply base will auto-assemble around it.',
      'Winning organizations treat Indian operations as an independent manufacturing center of excellence, structuring dedicated local governance and disciplined supplier tier-development.',
    ],
  },
  {
    id: '03',
    slug: 'commissioning-is-not-success',
    title: 'Commissioning Is Not Success: The Gap Before Stable Operations',
    category: 'Industrial',
    image: '/images/blog-03-commissioning.jpg',
    readTime: '7 min read',
    date: 'August 2026',
    excerpt:
      'Running a dry-cycle batch under OEM supervision is vastly different from achieving 85% OEE across two continuous operating shifts.',
    paragraphs: [
      'EPC contractors and machinery OEMs define commissioning as running standard test parts without catastrophic equipment stoppage. Once test parameters are logged, vendor warranties start ticking, leaving the operator to deal with real-world production turbulence.',
      'The gap between technical commissioning and commercial production stability is where millions of dollars in working capital are burned. Raw material variations, tooling wear, shift-to-shift operator discipline, and maintenance protocols determine whether a plant yields profit or cash bleed.',
      'Indiabridge bridges this exact gap by remaining engaged through full ramp-up and stabilization, holding joint accountability until plant operations perform reliably and predictably.',
    ],
  },
  {
    id: '04',
    slug: 'everyone-advises-no-one-owns',
    title: 'Everyone Advises. No One Owns. The Real Risk in India Projects',
    category: 'Industrial',
    image: '/images/about-gallery-inspection.jpg',
    readTime: '6 min read',
    date: 'July 2026',
    excerpt:
      'Conventional consulting firms leave behind multi-hundred-page strategy decks. When concrete is poured and schedules slip, the advisors are nowhere to be found.',
    paragraphs: [
      'International manufacturers entering India are rarely short on advice. Strategy firms, real estate brokers, legal counsels, and tax specialists provide extensive theoretical guidance. Yet, when regulatory approvals stall or contractor claims mount, accountability disappears.',
      'Execution risk is not solved through PowerPoint slides; it is resolved through daily ground presence, contract enforcement, technical dispute mitigation, and alignment of local stakeholders.',
      'Our fundamental premise is simple: we do not offer detached recommendations. We take ownership alongside leadership teams from location selection through production scale.',
    ],
  },
  {
    id: '05',
    slug: 'india-punishes-assumptions',
    title: 'India Punishes Assumptions: A Board-Level Framework for Manufacturing Entry',
    category: 'Industrial',
    image: '/images/about-gallery-construction.jpg',
    readTime: '8 min read',
    date: 'July 2026',
    excerpt:
      'A structured executive guide for boards, private equity sponsors, and operating partners evaluating factory greenfield or brownfield execution in India.',
    paragraphs: [
      'Entering India requires shedding assumptions formed in Western or East Asian manufacturing environments. Power tariffs, water access, interstate transport corridors, and labor customs vary radically across Indian states.',
      'A successful board framework starts with disciplined site selection driven by supply chain gravity rather than headline incentives. It requires realistic statutory permitting timelines and tight capital expenditure oversight.',
      'By establishing institutional governance mechanisms early, leadership teams build resilient operations capable of compound long-term manufacturing advantages.',
    ],
  },
];

export default function BlogPage() {
  const { navigateTo } = usePageTransition();

  const handleArticleClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    navigateTo(`/blog/${slug}`);
  };

  return (
    <>
      <main className="relative bg-white overflow-x-clip text-[#101012]">
        {/* ========================================================= */}
        {/* EDITORIAL BLOG CANVAS & ARCHITECTURAL GRID SYSTEM         */}
        {/* ========================================================= */}
        <div className="relative min-h-screen bg-[#fafafa]">
          {/* Faint Architectural Blueprint Drawing Watermark on Left */}
          <div className="pointer-events-none absolute inset-0 z-0 flex items-start justify-start overflow-hidden" aria-hidden="true">
            <img
              src="/images/wireframe-building-sketch.png"
              alt=""
              className="w-[680px] sm:w-[860px] lg:w-[1040px] max-w-none opacity-[0.05] object-contain select-none -translate-x-[14%] pt-16 pointer-events-none"
            />
          </div>

          {/* Continuous Thin Vertical Architectural Guide Lines */}
          <div className="pointer-events-none absolute inset-0 z-[1] flex justify-center" aria-hidden="true">
            <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-3 h-full">
              <div className="border-r border-black/[0.05] h-full" />
              <div className="border-r border-black/[0.05] h-full" />
              <div className="h-full" />
            </div>
          </div>

          <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
            {/* ======================================================= */}
            {/* 1. BLOG INTRODUCTION (CENTERED WITH GENEROUS WHITESPACE) */}
            {/* ======================================================= */}
            <div className="pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-24 text-center max-w-4xl mx-auto flex flex-col items-center">
              {/* Red Circular Marker + "Articles" Label */}
              <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#111112]/80 mb-6 select-none animate-hero-headline">
                <span className="indicator-dot" />
                <span>Articles</span>
              </div>

              {/* Oversized Black Headline */}
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-[-0.035em] text-[#111112] leading-[1.08] mb-6 max-w-3xl select-none animate-hero-headline"
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontFeatureSettings: "'cv05' on, 'cv11' on",
                }}
              >
                Insights from real-<br className="hidden sm:inline" />
                world India execution
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg md:text-[19px] text-[#55555e] leading-[1.65] max-w-2xl mx-auto animate-hero-pitch">
                Perspectives on India manufacturing, industrial execution, and operational risk, written for boards, investors, and global leadership teams navigating India entry and scale.
              </p>
            </div>

            {/* ======================================================= */}
            {/* 2. ARTICLE COLLECTION GRID (3 COLUMNS, 5 CARDS)         */}
            {/* ======================================================= */}
            <div className="pb-28 sm:pb-36">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {blogArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    onClick={(e) => handleArticleClick(e, article.slug)}
                    className="group flex flex-col cursor-pointer reveal-on-scroll"
                  >
                    {/* Large Rounded-Corner Image with Clipped Hover Behavior */}
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/5 border border-black/[0.08] shadow-sm">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
                      />

                      {/* Dark Category Tag along the Lower Edge */}
                      <div className="absolute bottom-3.5 left-3.5 z-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#111112]/90 backdrop-blur-md text-white text-[11px] font-mono uppercase tracking-wider select-none shadow-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Bold Black Article Title */}
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#111112] leading-[1.25] group-hover:text-[#55555e] transition-colors mt-5">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-[#66666e] leading-relaxed line-clamp-2 mt-2.5">
                      {article.excerpt}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center gap-3 mt-4 text-xs font-mono text-[#71717a]">
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
