'use client';

import React from 'react';
import { Footer } from '@/components/layout/Footer';

const coreValues = [
  {
    number: '1',
    heading: '1. Built on the Ground',
    paragraphs: [
      'We make decisions based on real operating conditions, not assumptions.',
      'This grounded approach reduces risk, improves safety, and ensures solutions that work sustainably where they are deployed.',
    ],
  },
  {
    number: '2',
    heading: '2. Built to Own the Outcome',
    paragraphs: [
      'We take full accountability for results, not just recommendations.',
      'Clear ownership strengthens governance, protects stakeholder interests, and drives consistent performance.',
    ],
  },
  {
    number: '3',
    heading: '3. Built on Integrity and Capital Discipline',
    paragraphs: [
      'We manage capital with transparency, discipline, and long-term value in mind.',
      'Every decision is guided by ethical conduct, fiduciary responsibility, and respect for investor trust.',
    ],
  },
  {
    number: '4',
    heading: '4. Built to Bridge Strategy and Execution',
    paragraphs: [
      'We align board-level strategy with operational execution.',
      'This reduces governance gaps, improves oversight, and ensures commitments translate into measurable outcomes.',
    ],
  },
  {
    number: '5',
    heading: '5. Built to Create Enduring Value',
    paragraphs: [
      'We prioritize durable performance over short-term gains.',
      'Our focus on resilience, efficiency, and responsible leadership supports sustainable value creation for all stakeholders.',
    ],
  },
  {
    number: '6',
    heading: '6. Built on Transparency and Trust',
    paragraphs: [
      'We operate with openness, ethical clarity, and consistent communication.',
      'Transparency builds trust, strengthens governance, and enables informed decision-making at every stage.',
    ],
  },
];

export default function ValuesPage() {
  return (
    <>
      <main className="relative bg-white overflow-x-clip text-[#101012]">
        {/* ========================================================= */}
        {/* 1. OPENING HERO SECTION: INDUSTRIAL WORKER PHOTOGRAPH     */}
        {/* ========================================================= */}
        <section className="sticky top-0 left-0 w-full h-screen h-[100dvh] flex flex-col justify-between bg-[#0b1419] z-[1] overflow-hidden animate-hero-curtain">
          {/* Background Image: Industrial Worker in Factory Environment */}
          <div className="absolute inset-0 z-[1] overflow-hidden">
            <img
              src="/images/values.webp"
              alt="Indiabridge Industrial Operations and Core Values"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Dark Overlay for Maximum Typography Readability */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-black/90 via-black/55 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-black/25"
              aria-hidden="true"
            />
          </div>

          {/* Thin Vertical Architectural Grid Lines Over Image */}
          <div className="pointer-events-none absolute inset-0 z-[2] flex justify-center" aria-hidden="true">
            <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-3 h-full">
              <div className="border-r border-white/10 h-full" />
              <div className="border-r border-white/10 h-full" />
              <div className="h-full" />
            </div>
          </div>

          {/* Top spacer for navbar clearance */}
          <div className="relative z-[3] w-full pt-24" />

          {/* Lower Section: Scroll Cue (Lower-Left) + Oversized Headline (Bottom) */}
          <div className="relative z-[3] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pb-8 sm:pb-12 md:pb-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            {/* Small Downward Arrow Scroll Cue (Lower-Left) */}
            <button
              type="button"
              onClick={() => {
                const target = document.getElementById('values-content');
                target?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors cursor-pointer select-none text-xs font-mono uppercase tracking-[0.2em] pb-2 sm:pb-4 group"
              aria-label="Scroll to core values"
            >
              <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white/40 flex items-center justify-center transition-colors">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-bounce"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </div>
              <span className="opacity-80 group-hover:opacity-100 transition-opacity">Scroll</span>
            </button>

            {/* Oversized Headline Near Bottom */}
            <h1
              className="text-white font-medium tracking-[-0.04em] sm:tracking-[-0.045em] leading-[0.92] text-left sm:text-right text-[clamp(3.2rem,8.5vw,132px)] select-none [backface-visibility:hidden] animate-hero-headline"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontFeatureSettings: "'cv05' on, 'cv11' on",
              }}
            >
              Our Core Values
            </h1>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. CORE VALUES SECTION: OFF-WHITE EDITORIAL ARCHITECTURE  */}
        {/* ========================================================= */}
        <div id="values-content" className="content-curtain relative z-10 bg-[#fafafa]">
          <section className="relative py-24 sm:py-32 md:py-44 overflow-hidden">
            {/* Faint Architectural Blueprint Drawing Watermark on the Left */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-start justify-start overflow-hidden" aria-hidden="true">
              <img
                src="/images/wireframe-building-sketch.png"
                alt=""
                className="w-[680px] sm:w-[860px] lg:w-[1040px] max-w-none opacity-[0.05] object-contain select-none -translate-x-[14%] pt-12 pointer-events-none"
              />
            </div>

            {/* Three Continuous Thin Vertical Guide Lines */}
            <div className="pointer-events-none absolute inset-0 z-[1] flex justify-center" aria-hidden="true">
              <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-3 h-full">
                <div className="border-r border-black/[0.05] h-full" />
                <div className="border-r border-black/[0.05] h-full" />
                <div className="h-full" />
              </div>
            </div>

            {/* Main Content: Two-Column Desktop Layout */}
            <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
                {/* -------------------------------------------------- */}
                {/* NARROW LEFT COLUMN: Section Label with Red Marker */}
                {/* -------------------------------------------------- */}
                <div className="lg:sticky lg:top-32 self-start reveal-on-scroll">
                  <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#111112]/80 select-none">
                    <span className="indicator-dot" />
                    <span>Our Core Values</span>
                  </div>
                </div>

                {/* -------------------------------------------------- */}
                {/* WIDER RIGHT COLUMN: Six Vertically Stacked Blocks */}
                {/* -------------------------------------------------- */}
                <div className="flex flex-col space-y-20 sm:space-y-28 md:space-y-36">
                  {coreValues.map((val) => (
                    <div
                      key={val.number}
                      className="flex flex-col items-start reveal-on-scroll pb-16 sm:pb-20 border-b border-black/[0.07] last:border-b-0 last:pb-0"
                    >
                      {/* Very Large Black Heading */}
                      <h2 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] font-semibold tracking-[-0.035em] text-[#111112] leading-[1.08] mb-6 max-w-2xl">
                        {val.heading}
                      </h2>

                      {/* Medium-gray supporting body text with comfortable line-height */}
                      <div className="space-y-4 text-base sm:text-lg md:text-[19px] text-[#55555e] leading-[1.65] max-w-2xl">
                        {val.paragraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
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
