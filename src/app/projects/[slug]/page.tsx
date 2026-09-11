'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Footer } from '@/components/layout/Footer';
import { usePageTransition } from '@/components/layout/PageTransitionProvider';

interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  date: string;
  client: string;
  completed: string;
  location: string;
  contributors: string;
  previewImage: string;
  overviewParagraphs: string[];
  gallery: {
    url: string;
    caption: string;
    aspect?: string;
  }[];
}

const PROJECTS_DATABASE: Record<string, ProjectDetail> = {
  'strong-policy-incentive': {
    slug: 'strong-policy-incentive',
    title: 'Strong policy & incentive',
    category: 'Commercial',
    date: 'Dec 1, 2025',
    client: 'Ridgeway Council',
    completed: 'December 2025',
    location: 'Manchester, UK',
    contributors: 'Manor Torres, Julian Park, Aisha Rahman, Noah Lee',
    previewImage: '/images/project-01-hero-setas.jpg',
    overviewParagraphs: [
      'A contemporary pavilion designed as a multifunctional public venue for exhibitions, community gatherings, and seasonal events. Its sculptural form is expressed through layered volumes and filtered daylight, creating a calm and adaptable interior.',
      'The structure is engineered for flexibility, enabling seamless transitions between uses while maintaining strong visual identity and a sense of civic presence within the surrounding landscape.',
    ],
    gallery: [
      {
        url: '/images/project-01-gallery-01.jpg',
        caption: '01 / Translucent Louver Facade',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-02.jpg',
        caption: '02 / Stepped Cantilevered Villa',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-03.jpg',
        caption: '03 / White Pavilion with Terracotta Frame',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-04.jpg',
        caption: '04 / Cantilevered Canopy Underside',
        aspect: 'aspect-[4/3]',
      },
    ],
  },
  'northbridge-townhouse': {
    slug: 'northbridge-townhouse',
    title: 'Northbridge Townhouse',
    category: 'Residential',
    date: 'November 2025',
    client: 'Northbridge Estates Ltd',
    completed: 'November 2025',
    location: 'Leeds, UK',
    contributors: 'Julian Park, Noah Lee',
    previewImage: '/images/project-02-northbridge-townhouse.jpg',
    overviewParagraphs: [
      'A refined urban residence emphasizing proportional harmony, tactile natural finishes, and deliberate connections between private interior living areas and secluded exterior gardens.',
      'The design incorporates sustainable envelope detailing, thermal massing, and understated acoustic separation tailored to contemporary living.',
    ],
    gallery: [
      {
        url: '/images/project-02-northbridge-townhouse.jpg',
        caption: '01 / Urban Street Elevation',
        aspect: 'aspect-[16/11]',
      },
      {
        url: '/images/project-03-willowbank-penthouse.jpg',
        caption: '02 / Interior Volume & Daylight Filtration',
        aspect: 'aspect-[16/11]',
      },
    ],
  },
  'willowbank-penthouse': {
    slug: 'willowbank-penthouse',
    title: 'Willowbank Penthouse',
    category: 'Residential',
    date: 'October 2025',
    client: 'Willowbank Developments',
    completed: 'October 2025',
    location: 'Bradford, UK',
    contributors: 'Manor Torres, Aisha Rahman',
    previewImage: '/images/project-03-willowbank-penthouse.jpg',
    overviewParagraphs: [
      'A high-altitude residence perched atop Bradford, conceived as an expansive sanctuary overlooking the valley. The open-plan layout balances monumental structural elements with warm tactile woodwork.',
      'Floor-to-ceiling panoramic fenestration maximizes natural light and framing of seasonal light changes.',
    ],
    gallery: [
      {
        url: '/images/project-03-willowbank-penthouse.jpg',
        caption: '01 / Living Hall & Panoramic Glazing',
        aspect: 'aspect-[16/11]',
      },
      {
        url: '/images/hero-curved-facade.jpg',
        caption: '02 / Terrace Transition & Louvered Screen',
        aspect: 'aspect-[16/11]',
      },
    ],
  },
  'seaside-cliff-residence': {
    slug: 'seaside-cliff-residence',
    title: 'Seaside Cliff Residence',
    category: 'Residential',
    date: 'September 2025',
    client: 'Private Client Commission',
    completed: 'September 2025',
    location: 'Amsterdam, NL',
    contributors: 'Aisha Rahman, Julian Park',
    previewImage: '/images/project-04-seaside-cliff-residence.jpg',
    overviewParagraphs: [
      'Anchored into coastal cliffs, this home is sculpted to resist wind dynamics while capturing undisturbed oceanic vistas.',
      'Cast-in-place architectural concrete and marine-grade anodized aluminum elements offer durability and timeless minimalism.',
    ],
    gallery: [
      {
        url: '/images/project-04-seaside-cliff-residence.jpg',
        caption: '01 / Coastal Cantilever & Horizon Perspective',
        aspect: 'aspect-[16/11]',
      },
      {
        url: '/images/project-01-policy-incentive.jpg',
        caption: '02 / Courtyard Geometry & Stone Flooring',
        aspect: 'aspect-[16/11]',
      },
    ],
  },
  'the-grove-workspace': {
    slug: 'the-grove-workspace',
    title: 'The Grove Workspace',
    category: 'Commercial',
    date: 'August 2025',
    client: 'Grove Investment Trust',
    completed: 'August 2025',
    location: 'London, UK',
    contributors: 'Manor Torres, Noah Lee',
    previewImage: '/images/project-05-grove-workspace.jpg',
    overviewParagraphs: [
      'A state-of-the-art creative workplace structured around collaborative atriums, exposed mass timber structural frames, and advanced daylight harvesting.',
      'Flexible floorplates adapt effortlessly to evolving team constellations while promoting physical wellness and cognitive focus.',
    ],
    gallery: [
      {
        url: '/images/project-05-grove-workspace.jpg',
        caption: '01 / Primary Mass Timber Atrium',
        aspect: 'aspect-[16/11]',
      },
      {
        url: '/images/about-gallery-factory.jpg',
        caption: '02 / Open Studio Space & Acoustic Trusses',
        aspect: 'aspect-[16/11]',
      },
    ],
  },
};

const ALL_PROJECTS_SUMMARY = [
  {
    slug: 'strong-policy-incentive',
    title: 'Strong policy & incentive',
    category: 'Commercial',
    location: 'Manchester, UK',
    image: '/images/project-01-hero-setas.jpg',
  },
  {
    slug: 'northbridge-townhouse',
    title: 'Northbridge Townhouse',
    category: 'Residential',
    location: 'Leeds, UK',
    image: '/images/project-02-northbridge-townhouse.jpg',
  },
  {
    slug: 'willowbank-penthouse',
    title: 'Willowbank Penthouse',
    category: 'Residential',
    location: 'Bradford, UK',
    image: '/images/project-03-willowbank-penthouse.jpg',
  },
  {
    slug: 'seaside-cliff-residence',
    title: 'Seaside Cliff Residence',
    category: 'Residential',
    location: 'Amsterdam, NL',
    image: '/images/project-04-seaside-cliff-residence.jpg',
  },
  {
    slug: 'the-grove-workspace',
    title: 'The Grove Workspace',
    category: 'Commercial',
    location: 'London, UK',
    image: '/images/project-05-grove-workspace.jpg',
  },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const slugParam = typeof params?.slug === 'string' ? params.slug : '';
  const { navigateTo } = usePageTransition();

  // Dynamic CMS binding with fallback to 'strong-policy-incentive'
  const project = PROJECTS_DATABASE[slugParam] || PROJECTS_DATABASE['strong-policy-incentive'];

  // Two related projects excluding current project
  const relatedProjects = ALL_PROJECTS_SUMMARY.filter((p) => p.slug !== project.slug).slice(0, 2);

  const handleRelatedClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <>
      <main className="relative bg-white overflow-x-clip text-[#101012]">
        {/* ========================================================= */}
        {/* 1. PROJECT HERO: FULL-WIDTH ~90VH WITH CMS PREVIEW IMAGE  */}
        {/* ========================================================= */}
        <section className="sticky top-0 left-0 w-full min-h-[85vh] h-[90vh] flex flex-col justify-between bg-[#0b1419] z-[1] overflow-hidden animate-hero-curtain">
          {/* Background Image: CMS Project Preview Image */}
          <div className="absolute inset-0 z-[1] overflow-hidden">
            <img
              src={project.previewImage}
              alt={project.title}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            {/* Dark Layered Gradient: Upper/Middle Darker, Image Visible at Bottom */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/35"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/45 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Thin Vertical Architectural Grid Lines Over Hero (3 lines dividing into 4 columns) */}
          <div className="pointer-events-none absolute inset-0 z-[2] flex justify-center" aria-hidden="true">
            <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-4 h-full">
              <div className="border-r border-white/10 h-full" />
              <div className="border-r border-white/10 h-full" />
              <div className="border-r border-white/10 h-full" />
              <div className="h-full" />
            </div>
          </div>

          {/* Top spacer for navbar clearance */}
          <div className="relative z-[3] w-full pt-28 sm:pt-32" />

          {/* Project Information Aligned Bottom-Left */}
          <div className="relative z-[3] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pb-8 sm:pb-12 md:pb-14">
            {/* Metadata Row: Date in Col 1, Category in Col 2 (separated naturally by grid line 1) */}
            <div className="grid grid-cols-4 gap-0 items-baseline mb-2 sm:mb-3 select-none animate-hero-pitch">
              <div>
                <span className="text-base sm:text-lg md:text-[19px] text-white/90 font-normal tracking-normal">
                  {project.date}
                </span>
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-base sm:text-lg md:text-[19px] text-white/90 font-normal tracking-normal">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Oversized White Headline */}
            <h1
              className="text-white font-semibold tracking-[-0.035em] leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-[74px] xl:text-[80px] max-w-5xl select-none [backface-visibility:hidden] animate-hero-headline"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontFeatureSettings: "'cv05' on, 'cv11' on",
              }}
            >
              {project.title}
            </h1>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. PROJECT INFORMATION & GALLERY SECTION (OFF-WHITE)      */}
        {/* ========================================================= */}
        <div className="content-curtain relative z-10 bg-[#fafafa]">
          {/* Continuous Thin Vertical Architectural Guide Lines (3 lines dividing into 4 columns) */}
          <div className="pointer-events-none absolute inset-0 z-[1] flex justify-center" aria-hidden="true">
            <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-4 h-full">
              <div className="border-r border-black/[0.05] h-full" />
              <div className="border-r border-black/[0.05] h-full" />
              <div className="border-r border-black/[0.05] h-full" />
              <div className="h-full" />
            </div>
          </div>

          <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-36">
            {/* Two-Column Project Information Layout using 4-Column Architectural Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start mb-16 sm:mb-24">
              {/* -------------------------------------------------- */}
              {/* LEFT COLUMN: Section Label "Details" & Data Rows   */}
              {/* -------------------------------------------------- */}
              <div className="lg:pr-8 flex flex-col reveal-on-scroll">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#71717a] mb-6 sm:mb-8 block select-none">
                  Details
                </span>

                <div className="space-y-6 text-left">
                  {/* Client */}
                  <div className="border-b border-black/[0.08] pb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#71717a] block mb-1">
                      Client
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#111112]">
                      {project.client}
                    </span>
                  </div>

                  {/* Completed */}
                  <div className="border-b border-black/[0.08] pb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#71717a] block mb-1">
                      Completed
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#111112]">
                      {project.completed}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="border-b border-black/[0.08] pb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#71717a] block mb-1">
                      Location
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#111112]">
                      {project.location}
                    </span>
                  </div>

                  {/* Contributors */}
                  <div className="pt-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#71717a] block mb-1">
                      Contributors
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#111112] leading-relaxed block">
                      {project.contributors}
                    </span>
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------- */}
              {/* RIGHT COLUMN: Section Label "Overview" & Body Text */}
              {/* -------------------------------------------------- */}
              <div className="lg:col-span-3 lg:pl-8 flex flex-col reveal-on-scroll">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#71717a] mb-6 sm:mb-8 block select-none">
                  Overview
                </span>

                <div className="space-y-6 text-base sm:text-lg md:text-[19px] text-[#55555e] leading-[1.75] max-w-2xl font-normal">
                  {project.overviewParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* ======================================================= */}
            {/* 3. PROJECT GALLERY: TWO-COLUMN IMAGE GRID               */}
            {/* ======================================================= */}
            <div className="pt-4 sm:pt-8 border-t border-black/[0.08]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4.5 reveal-on-scroll">
                {project.gallery.map((imgItem, idx) => (
                  <div
                    key={idx}
                    className="relative w-full aspect-[4/3] rounded-none sm:rounded-[2px] overflow-hidden bg-[#e5e5e7] group cursor-pointer"
                  >
                    <img
                      src={imgItem.url}
                      alt={`Project architecture visual ${idx + 1}`}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ======================================================= */}
          {/* 4. MORE PROJECTS SECTION (2 RELATED PROJECT CARDS)      */}
          {/* ======================================================= */}
          <section className="relative z-[2] w-full border-t border-black/[0.08] pt-20 sm:pt-28 pb-28 sm:pb-36 bg-[#fafafa]">
            <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
              {/* Centered Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#111112] text-center mb-12 sm:mb-16 reveal-on-scroll">
                More projects
              </h2>

              {/* Two Related Projects (2-Column Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {relatedProjects.map((relProject) => (
                  <Link
                    key={relProject.slug}
                    href={`/projects/${relProject.slug}`}
                    onClick={(e) => handleRelatedClick(e, `/projects/${relProject.slug}`)}
                    className="group flex flex-col cursor-pointer reveal-on-scroll"
                  >
                    {/* Rounded Preview Image with Hover Scale */}
                    <div className="relative aspect-[16/11] rounded-2xl sm:rounded-[1.35rem] overflow-hidden bg-[#f0f0f2] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-black/[0.06]">
                      <img
                        src={relProject.image}
                        alt={relProject.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-[28px] md:text-[32px] font-medium tracking-tight text-black mt-4 sm:mt-5 mb-2.5 sm:mb-3 group-hover:text-black/75 transition-colors">
                      {relProject.title}
                    </h3>

                    {/* Pill Badges */}
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-black/15 text-xs sm:text-[13px] text-black/65 font-normal select-none">
                        {relProject.category}
                      </span>
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-black/15 text-xs sm:text-[13px] text-black/65 font-normal select-none">
                        {relProject.location}
                      </span>
                    </div>
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
