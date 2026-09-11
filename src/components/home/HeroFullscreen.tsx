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
        {/* Dark Gradient Overlay around bottom */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Subtle Vertical Swiss Grid Guide Lines (hidden on mobile, 2 cols on tablet, 4 cols on desktop) */}
      <div className="pointer-events-none absolute inset-0 z-[2] flex justify-center" aria-hidden="true">
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-2 md:grid-cols-4 h-full">
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full hidden md:block" />
          <div className="border-r border-white/5 h-full hidden md:block" />
          <div className="h-full" />
        </div>
      </div>

      {/* Main Container: Split into 2 clear flex rows (Top and Bottom) for rock-solid stability */}
      <div className="relative z-[3] flex flex-col justify-between h-full flex-1 w-full max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Top Headline - Centered in open sky with exact responsive scaling */}
        <div className="pt-20 sm:pt-24 md:pt-32 lg:pt-36 w-full flex justify-center">
          <h1
            className="text-white font-medium text-center uppercase whitespace-nowrap select-none text-[clamp(1.15rem,5.1vw,90px)] tracking-[-0.035em] sm:tracking-[-0.04em] leading-none [backface-visibility:hidden]"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontFeatureSettings: "'cv05' on, 'cv11' on",
            }}
          >
            INDIABRIDGE CAPITAL PARTNERS
          </h1>
        </div>

        {/* Bottom Hero Pitch Content - Positioned on Bottom Right */}
        <div className="pb-8 sm:pb-12 md:pb-16 flex justify-start md:justify-end w-full">
          <div className="max-w-md sm:max-w-lg lg:max-w-xl text-left">
            <h2 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[46px] font-medium tracking-tight text-white leading-[1.1] sm:leading-[1.08] mb-3 sm:mb-4 md:mb-5">
              Your manufacturing<br />
              base in India<br />
              designed, delivered,<br />
              and de-risked.
            </h2>
            <p className="text-white/85 text-xs sm:text-sm md:text-[15px] lg:text-[16px] leading-relaxed max-w-sm sm:max-w-md">
              We help global manufacturers enter India with confidence,
              build world-class industrial operations, and scale
              sustainably without execution risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
