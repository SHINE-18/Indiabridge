'use client';

import React from 'react';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { usePageTransition } from '@/components/layout/PageTransitionProvider';

export interface ProjectDetail {
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

export interface ProjectSummary {
  slug: string;
  title: string;
  category: string;
  location: string;
  image: string;
}

interface ProjectDetailClientProps {
  project: ProjectDetail;
  relatedProjects: ProjectSummary[];
}

export default function ProjectDetailClient({ project, relatedProjects }: ProjectDetailClientProps) {
  const { navigateTo } = usePageTransition();

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
              width={1920}
              height={1080}
              loading="eager"
              decoding="async"
              fetchPriority="high"
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

          {/* Thin Vertical Architectural Grid Lines Over Hero */}
          <div className="pointer-events-none absolute inset-0 z-[2] flex justify-center" aria-hidden="true">
            <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-4 h-full">
              <div className="border-r border-white/10 h-full" />
              <div className="border-r border-white/10 h-full" />
              <div className="border-r border-white/10 h-full" />
              <div className="h-full" />
            </div>
          </div>

          {/* Top Spacer for Navbar Clearance */}
          <div className="relative z-[3] w-full pt-28 sm:pt-32" />

          {/* Bottom Hero Content: Category Pill + Project Title */}
          <div className="relative z-[3] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pb-10 sm:pb-14 md:pb-16 flex flex-col items-start gap-3 sm:gap-4">
            {/* Minimalist Top Indicator */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-mono uppercase tracking-[0.18em] text-white">
                  Case Study
                </span>
                <span className="w-px h-3 bg-white/30" />
                <span className="text-xs font-mono tracking-wider text-white/90">
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
          {/* Main Info Container */}
          <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pt-20 sm:pt-28 pb-16 sm:pb-24">
            {/* Two-Column Project Meta & Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 pb-16 sm:pb-24">
              {/* Left Column: Metadata Specs Table */}
              <div className="flex flex-col space-y-6 sm:space-y-7 border-t border-black/[0.08] pt-8">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717a] mb-1">
                    Client
                  </div>
                  <div className="text-base sm:text-lg font-medium text-[#111112]">
                    {project.client}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717a] mb-1">
                    Completed
                  </div>
                  <div className="text-base sm:text-lg font-medium text-[#111112]">
                    {project.completed}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717a] mb-1">
                    Location
                  </div>
                  <div className="text-base sm:text-lg font-medium text-[#111112]">
                    {project.location}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717a] mb-1">
                    Execution Team
                  </div>
                  <div className="text-sm sm:text-base font-normal text-[#55555e] leading-relaxed">
                    {project.contributors}
                  </div>
                </div>
              </div>

              {/* Right Column: Project Overview Body Copy */}
              <div className="flex flex-col space-y-6 sm:space-y-7 border-t border-black/[0.08] pt-8">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717a]">
                  Project Overview
                </div>
                {project.overviewParagraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-base sm:text-lg md:text-[19px] text-[#55555e] leading-[1.65]"
                  >
                    {para}
                  </p>
                ))}
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
                      alt={`${project.title} — visual ${idx + 1}`}
                      width={600}
                      height={450}
                      loading="lazy"
                      decoding="async"
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
              {/* Centered Heading — Unique per project */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#111112] text-center mb-12 sm:mb-16 reveal-on-scroll">
                Related Projects — {project.title}
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
                        width={600}
                        height={412}
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
