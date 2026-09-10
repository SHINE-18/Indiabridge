'use client';

import React from 'react';

export function HeroFullscreen() {
  return (
    <section className="sticky top-0 left-0 w-full h-screen h-[100dvh] flex flex-col justify-between bg-[#0b1419] z-[1] overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <img
          src="/images/hero-curved-facade.jpg"
          alt="Indiabridge Capital Partners Architecture"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Subtle Vertical Swiss Grid Guide Lines (4 equal columns matching screenshot) */}
      <div className="pointer-events-none absolute inset-0 z-[2] flex justify-center" aria-hidden="true">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-4 h-full">
          <div className="border-r border-white/[0.12] h-full" />
          <div className="border-r border-white/[0.12] h-full" />
          <div className="border-r border-white/[0.12] h-full" />
          <div className="h-full" />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-[3] flex flex-col justify-between h-full flex-1 w-full max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Top Headline - Centered in open sky with exact responsive scaling */}
        <div className="pt-28 sm:pt-32 md:pt-36 lg:pt-40 w-full flex justify-center">
          <h1
            className="text-white font-medium text-center uppercase whitespace-nowrap select-none text-[clamp(1.15rem,4.85vw,5.2rem)] tracking-[-0.04em] leading-none [backface-visibility:hidden]"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontFeatureSettings: "'cv05' on, 'cv11' on",
            }}
          >
            INDIABRIDGE CAPITAL PARTNERS
          </h1>
        </div>

        {/* Bottom Hero Pitch Content - Positioned on Bottom Right */}
        <div className="pb-10 sm:pb-14 md:pb-16 flex justify-end w-full">
          <div className="max-w-lg lg:max-w-xl text-left">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[46px] font-medium tracking-tight text-white leading-[1.08] mb-4 sm:mb-5">
              Your manufacturing<br />
              base in India —<br />
              designed, delivered,<br />
              and de-risked.
            </h2>
            <p className="text-white/85 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-relaxed max-w-md">
              We help global manufacturers enter India with confidence,
              build world-class industrial operations, and scale
              sustainably — without execution risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
