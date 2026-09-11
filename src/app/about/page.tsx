'use client';

import React from 'react';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';

const processSteps = [
  {
    step: '01',
    title: 'Discovery and Strategy Alignment',
    text: 'We work with boards and leadership teams to define India entry objectives, risk tolerance, governance expectations, and success metrics before execution begins.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Concept and Feasibility Development',
    text: 'We translate intent into executable plans through feasibility studies, location selection, incentive analysis, and operating model design grounded in Indian realities.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Industrial Design and Execution',
    text: 'We oversee factory design, engineering coordination, PMC and EPC governance, and execution control to ensure cost, schedule, and quality discipline.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Delivery, Stabilization, and Support',
    text: 'We remain engaged through ramp-up and stabilization, embedding leadership, systems, and processes until operations perform reliably and predictably.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="relative bg-white overflow-x-clip text-[#101012]">
        {/* ========================================================= */}
        {/* 1. OPENING HERO SECTION: INDUSTRIAL WORKER PHOTOGRAPH     */}
        {/* ========================================================= */}
        <section className="sticky top-0 left-0 w-full h-screen h-[100dvh] flex flex-col justify-between bg-[#0b1419] z-[1] overflow-hidden animate-hero-curtain">
          {/* Background Image: Worker in Yellow Hard Hat & Vest looking upward */}
          <div className="absolute inset-0 z-[1] overflow-hidden">
            <img
              src="/images/about-hero-worker.jpg"
              alt="Indiabridge Industrial Operations and Factory Execution"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Darkened Overlay for Maximum Typography Readability */}
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

          {/* Top spacer with Supporting Line (Upper-Right) */}
          <div className="relative z-[3] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pt-28 sm:pt-32 flex justify-end">
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/80 select-none text-right">
              Global Industrial Entry and Execution Advisors
            </div>
          </div>

          {/* Lower Section: Scroll Cue (Lower-Left) + Oversized Headline (Bottom) */}
          <div className="relative z-[3] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pb-8 sm:pb-12 md:pb-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            {/* Small Downward Arrow Scroll Cue (Lower-Left) */}
            <button
              type="button"
              onClick={() => {
                const target = document.getElementById('about-intro');
                target?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors cursor-pointer select-none text-xs font-mono uppercase tracking-[0.2em] pb-2 sm:pb-4 group"
              aria-label="Scroll to about introduction"
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
              className="text-white font-medium tracking-[-0.04em] sm:tracking-[-0.045em] leading-[0.92] text-left sm:text-right text-[clamp(3.5rem,9vw,136px)] select-none [backface-visibility:hidden] animate-hero-headline"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontFeatureSettings: "'cv05' on, 'cv11' on",
              }}
            >
              About IndiaBridge®
            </h1>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. ABOUT INTRODUCTION & INDUSTRIAL IMAGE GALLERY          */}
        {/* ========================================================= */}
        <div id="about-intro" className="content-curtain relative z-10 bg-[#fafafa]">
          {/* A. ABOUT INTRODUCTION */}
          <section className="relative pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 overflow-hidden">
            {/* Faint Architectural Blueprint Drawing Watermark on the Left */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-start justify-start overflow-hidden" aria-hidden="true">
              <img
                src="/images/wireframe-building-sketch.png"
                alt=""
                className="w-[680px] sm:w-[860px] lg:w-[1040px] max-w-none opacity-[0.05] object-contain select-none -translate-x-[14%] pt-10 pointer-events-none"
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

            {/* Main Content: Two-Column Layout */}
            <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
                {/* Narrow Left Column: Section Label */}
                <div className="reveal-on-scroll">
                  <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#111112]/80 select-none">
                    <span className="indicator-dot" />
                    <span>About Us</span>
                  </div>
                </div>

                {/* Wider Right Column: Headline & Body Copy */}
                <div className="flex flex-col reveal-on-scroll">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111112] leading-[1.1] mb-8 max-w-2xl">
                    A specialized firm built to<br className="hidden sm:inline" /> execute manufacturing in India
                  </h2>

                  <div className="space-y-6 text-base sm:text-lg text-[#55555e] leading-relaxed max-w-2xl">
                    <p>
                      Indiabridge Capital Partners is a global industrial advisory and execution firm focused on helping manufacturers establish, build, and scale operations in India.
                    </p>
                    <p>
                      We work with boards, operators, and investors who understand that India is not a low-cost experiment, but a long-term manufacturing platform that demands disciplined planning and hands-on execution.
                    </p>
                    <p>
                      Our role is to bridge global intent with on-the-ground reality, staying accountable from strategy through stable operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* B. INDUSTRIAL IMAGE GALLERY (3-IMAGE SPACIOUS GRID) */}
          <section className="relative pb-24 sm:pb-36 overflow-hidden">
            {/* Continuous Vertical Guide Lines */}
            <div className="pointer-events-none absolute inset-0 z-[1] flex justify-center" aria-hidden="true">
              <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-3 h-full">
                <div className="border-r border-black/[0.05] h-full" />
                <div className="border-r border-black/[0.05] h-full" />
                <div className="h-full" />
              </div>
            </div>

            <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-end reveal-on-scroll">
                {/* 1. Large factory interior with steel roofing & production lines */}
                <div className="flex flex-col group">
                  <div className="relative w-full aspect-[4/5] sm:h-[480px] rounded-xl overflow-hidden bg-black/5 border border-black/[0.08] shadow-sm">
                    <img
                      src="/images/about-gallery-factory.jpg"
                      alt="Automated production lines and steel roofing inside precision manufacturing plant"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717a] mt-3 block">
                    01 / Advanced Assembly Infrastructure
                  </span>
                </div>

                {/* 2. Vertical industrial plant / construction scene with cranes (taller) */}
                <div className="flex flex-col group md:-translate-y-4">
                  <div className="relative w-full aspect-[3/4] sm:h-[530px] rounded-xl overflow-hidden bg-black/5 border border-black/[0.08] shadow-sm">
                    <img
                      src="/images/about-gallery-construction.jpg"
                      alt="Industrial manufacturing plant construction with structural steel frameworks and cranes"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717a] mt-3 block">
                    02 / Structural Execution & PMC
                  </span>
                </div>

                {/* 3. Workers wearing helmets inspecting machinery */}
                <div className="flex flex-col group">
                  <div className="relative w-full aspect-[4/5] sm:h-[480px] rounded-xl overflow-hidden bg-black/5 border border-black/[0.08] shadow-sm">
                    <img
                      src="/images/about-gallery-inspection.jpg"
                      alt="Industrial engineers inspecting automated robotic equipment and production tooling"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717a] mt-3 block">
                    03 / Operational Quality Control
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ======================================================= */}
          {/* C. PROCESS SECTION                                      */}
          {/* ======================================================= */}
          <section className="relative py-24 sm:py-36 bg-[#f4f4f6] border-t border-black/[0.06] overflow-hidden">
            {/* Continuous Vertical Guide Lines */}
            <div className="pointer-events-none absolute inset-0 z-[1] flex justify-center" aria-hidden="true">
              <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-3 h-full">
                <div className="border-r border-black/[0.05] h-full" />
                <div className="border-r border-black/[0.05] h-full" />
                <div className="h-full" />
              </div>
            </div>

            <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
              {/* Process Header (Two-Column Layout) */}
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
                {/* Left Column: Section Label */}
                <div className="reveal-on-scroll">
                  <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#111112]/80 select-none">
                    <span className="indicator-dot" />
                    <span>Our process</span>
                  </div>
                </div>

                {/* Right Column: Large Heading */}
                <div className="reveal-on-scroll">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111112] leading-[1.1] max-w-2xl">
                    Our approach spans the full journey. Strategy, execution, and operational ownership
                  </h2>
                </div>
              </div>

              {/* Four Evenly Spaced White Process Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll">
                {processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="bg-white rounded-2xl border border-black/[0.08] p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-black/25 transition-all duration-300"
                  >
                    <div>
                      {/* Icon + Step Number */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#f6f6f8] text-[#111112] flex items-center justify-center border border-black/[0.06]">
                          {step.icon}
                        </div>
                        <span className="text-xs font-mono text-[#71717a] font-medium">
                          {step.step}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold tracking-tight text-[#111112] leading-snug mb-3">
                        {step.title}
                      </h3>

                      {/* Text */}
                      <p className="text-sm text-[#55555e] leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Compact Black-and-White CTA Button Aligned Lower-Right */}
              <div className="flex justify-end pt-12 sm:pt-16 reveal-on-scroll">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111112] hover:bg-black text-white text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md group select-none"
                >
                  <span>Work with us</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">↳</span>
                </Link>
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
