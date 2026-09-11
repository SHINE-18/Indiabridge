'use client';

import React from 'react';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { usePageTransition } from '@/components/layout/PageTransitionProvider';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'strong-policy-incentive',
    title: 'Strong policy & incentive',
    category: 'Commercial',
    location: 'Manchester, UK',
    image: '/images/project-01-hero-setas.jpg',
  },
  {
    id: 'northbridge-townhouse',
    title: 'Northbridge Townhouse',
    category: 'Residential',
    location: 'Leeds, UK',
    image: '/images/project-02-northbridge-townhouse.jpg',
  },
  {
    id: 'willowbank-penthouse',
    title: 'Willowbank Penthouse',
    category: 'Residential',
    location: 'Bradford, UK',
    image: '/images/project-03-willowbank-penthouse.jpg',
  },
  {
    id: 'seaside-cliff-residence',
    title: 'Seaside Cliff Residence',
    category: 'Residential',
    location: 'Amsterdam, NL',
    image: '/images/project-04-seaside-cliff-residence.jpg',
  },
  {
    id: 'the-grove-workspace',
    title: 'The Grove Workspace',
    category: 'Commercial',
    location: 'London, UK',
    image: '/images/project-05-grove-workspace.jpg',
  },
];

export default function ProjectsPage() {
  const { navigateTo } = usePageTransition();

  const handleProjectClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };
  return (
    <>
      <main className="relative bg-white overflow-x-clip text-[#101012]">
        {/* ========================================================= */}
        {/* OPENING HERO + PROJECT SHOWCASE ON WHITE CANVAS           */}
        {/* ========================================================= */}
        <section className="relative bg-white pt-32 sm:pt-40 md:pt-48 pb-24 sm:pb-36 overflow-hidden">
          {/* Three Extremely Thin Vertical Grid Lines Running Continuously Down the Page */}
          <div className="pointer-events-none absolute inset-0 z-[2] flex justify-center" aria-hidden="true">
            <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-3 h-full">
              <div className="border-r border-black/[0.08] h-full" />
              <div className="border-r border-black/[0.08] h-full" />
              <div className="h-full" />
            </div>
          </div>

          {/* Faint Architectural Line Drawing / Blueprint Illustration Behind Content */}
          <div className="pointer-events-none absolute inset-0 z-[1] flex items-start justify-center overflow-hidden" aria-hidden="true">
            <div className="relative w-full max-w-[1240px] h-full flex items-start justify-start pt-16 sm:pt-24">
              <img
                src="/images/wireframe-building-sketch.png"
                alt=""
                className="w-[640px] sm:w-[820px] md:w-[960px] lg:w-[1080px] max-w-none opacity-[0.08] object-contain select-none -translate-x-[6%] sm:-translate-x-[10%] pointer-events-none"
              />
            </div>
          </div>

          {/* Main Content Container */}
          <div className="relative z-[3] w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
            {/* 1. Header Typography Block */}
            <div className="flex flex-col items-center justify-center text-center pb-16 sm:pb-24 md:pb-32">
              {/* Red Circular Indicator + "Recent" */}
              <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#111112]/75 mb-5 sm:mb-7 select-none animate-hero-headline">
                <span className="indicator-dot" />
                <span>Recent</span>
              </div>

              {/* Main Headline */}
              <h1
                className="text-black font-semibold text-center tracking-[-0.04em] sm:tracking-[-0.045em] leading-[1.04] sm:leading-[1.02] text-[clamp(2.5rem,6.8vw,88px)] max-w-4xl mb-6 sm:mb-8 animate-hero-headline select-none [backface-visibility:hidden]"
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontFeatureSettings: "'cv05' on, 'cv11' on",
                }}
              >
                Architecture shaped<br />
                with intention
              </h1>

              {/* Supporting Text */}
              <p className="text-[#55555e] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl mx-auto animate-hero-pitch">
                We create contemporary architecture<br className="hidden sm:inline" />
                rooted in precision, proportion & clarity.
              </p>
            </div>

            {/* 2. Project Cards Grid (2 Columns, Rounded Images, Exact Badges) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-18 lg:gap-y-24">
              {PROJECTS.map((project, idx) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  onClick={(e) => handleProjectClick(e, `/projects/${project.id}`)}
                  className={`group flex flex-col cursor-pointer reveal-on-scroll ${
                    // Center the last single item if odd count
                    idx === PROJECTS.length - 1 && PROJECTS.length % 2 !== 0
                      ? 'md:col-span-1'
                      : ''
                  }`}
                >
                  {/* Rounded Image Frame */}
                  <div className="relative aspect-[16/11] rounded-2xl sm:rounded-[1.35rem] overflow-hidden bg-[#f0f0f2] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>

                  {/* Project Title */}
                  <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-medium tracking-tight text-black mt-4 sm:mt-5 mb-2.5 sm:mb-3 group-hover:text-black/75 transition-colors">
                    {project.title}
                  </h2>

                  {/* Pill Badges */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-black/15 text-xs sm:text-[13px] text-black/65 font-normal select-none">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-black/15 text-xs sm:text-[13px] text-black/65 font-normal select-none">
                      {project.location}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* INFORMATION AND CONTACT AREA (FOOTER)                     */}
      {/* ========================================================= */}
      <Footer />
    </>
  );
}
