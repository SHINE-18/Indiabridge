'use client';

import React from 'react';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { usePageTransition } from '@/components/layout/PageTransitionProvider';

export interface ArticleData {
  slug: string;
  title: string;
  date: string;
  category: string;
  heroImage: string;
  leadParagraph: string;
  bodyParagraphs: string[];
}

export interface RelatedArticle {
  slug: string;
  title: string;
  category: string;
  image: string;
}

interface BlogDetailClientProps {
  article: ArticleData;
  relatedArticles: RelatedArticle[];
}

export default function BlogDetailClient({ article, relatedArticles }: BlogDetailClientProps) {
  const { navigateTo } = usePageTransition();

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
              width={1920}
              height={1080}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Gradient Overlays for Readability */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black/90 via-black/55 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-black/25"
              aria-hidden="true"
            />
          </div>

          {/* Thin Vertical Architectural Guide Lines */}
          <div className="pointer-events-none absolute inset-0 z-[2] flex justify-center" aria-hidden="true">
            <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-3 h-full">
              <div className="border-r border-white/10 h-full" />
              <div className="border-r border-white/10 h-full" />
              <div className="h-full" />
            </div>
          </div>

          {/* Top spacer for navbar clearance */}
          <div className="relative z-[3] w-full pt-28 sm:pt-36" />

          {/* Article Header Information (Bottom of Hero) */}
          <div className="relative z-[3] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pb-12 sm:pb-16 md:pb-20 flex flex-col items-start gap-4 sm:gap-6">
            {/* Minimalist Date and Category Tag */}
            <div className="inline-flex items-center gap-3 text-xs sm:text-[13px] font-mono uppercase tracking-[0.18em] text-white/85 select-none animate-hero-headline">
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
          <article className="relative z-[2] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pt-20 sm:pt-28 md:pt-36 pb-20 sm:pb-28">
            <div className="max-w-[760px] mx-auto">
              {/* Lead Paragraph with Larger Styling */}
              <p className="text-xl sm:text-2xl md:text-[26px] font-medium text-[#111112] leading-[1.45] tracking-tight mb-12 sm:mb-16 border-b border-black/[0.08] pb-10 sm:pb-12 reveal-on-scroll">
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
              {/* Centered Heading — Unique per perspective */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#111112] text-center mb-12 sm:mb-16 reveal-on-scroll">
                Further Perspectives & Analysis
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
                        width={600}
                        height={375}
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
