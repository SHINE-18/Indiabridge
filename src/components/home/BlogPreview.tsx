import React from 'react';
import Link from 'next/link';

export function BlogPreview() {
  return (
    <section className="pb-20 md:pb-32 bg-white" id="blog">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
        {/* 3-Column Grid with Full-Height Connecting Vertical Hairline Dividers & Bottom Border */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black/10 reveal-on-scroll">
          {/* ================= ROW 1: HEADER SECTION ================= */}

          {/* Column 1 Header: Eyebrow */}
          <div className="px-1.5 sm:px-2 md:px-2.5 lg:px-3 pt-12 md:pt-20 lg:pt-24 pb-4 md:pb-16 border-b-0 md:border-r border-black/10 flex flex-col justify-start">
            <div className="inline-flex items-center gap-2.5 text-[15px] sm:text-[16px] text-ink-primary font-normal pt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f9452c] shrink-0 inline-block" />
              <span>Blog posts</span>
            </div>
          </div>

          {/* Column 2 Header: Large Headline "Blog articles" */}
          <div className="px-1.5 sm:px-2 md:px-2.5 lg:px-3 pt-12 md:pt-20 lg:pt-24 pb-6 md:pb-16 border-b-0 md:border-r border-black/10 flex flex-col justify-start">
            <h2 className="text-5xl sm:text-6xl md:text-[68px] lg:text-[76px] xl:text-[84px] font-medium tracking-tight text-ink-primary leading-[0.96]">
              Blog<br />
              articles
            </h2>
          </div>

          {/* Column 3 Header: Description & "All articles" Button */}
          <div className="px-1.5 sm:px-2 md:px-2.5 lg:px-3 pt-12 md:pt-20 lg:pt-24 pb-10 md:pb-16 border-b md:border-b-0 border-black/10 flex flex-col justify-start">
            <p className="text-ink-secondary text-[16px] sm:text-[17px] leading-relaxed max-w-sm mb-6 sm:mb-8 pt-1">
              We share insights on design, planning, and our process.
            </p>
            <div>
              <Link
                href="/blog"
                className="relative overflow-hidden inline-flex items-center gap-3 p-1.5 pr-5 rounded-full bg-[#f4f4f5] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97] group cursor-pointer w-fit shadow-sm"
              >
                {/* Orange Fill Bar that swipes/expands across the entire pill from the left */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#f9452c] rounded-full scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                />

                {/* Circular Arrow Badge */}
                <span className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f9452c] group-hover:bg-white text-white group-hover:text-[#f9452c] flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 shadow-sm">
                  <span className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                    {/* Primary arrow slides out right */}
                    <svg
                      className="w-4 h-4 absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-5 group-hover:opacity-0"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                    {/* Secondary arrow slides in from left */}
                    <svg
                      className="w-4 h-4 absolute inset-0 -translate-x-5 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </span>

                {/* Rolling Text Reel (Transitions to crisp white on hover) */}
                <span className="relative z-10 overflow-hidden inline-flex flex-col h-[20px] text-[15px] font-medium text-ink-primary group-hover:text-white leading-[20px] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {/* Primary text rolls up and out */}
                  <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                    All articles
                  </span>
                  {/* Duplicate text rolls up into view from below */}
                  <span className="absolute top-0 left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0">
                    All articles
                  </span>
                </span>
              </Link>
            </div>
          </div>

          {/* ================= ROW 2: CARDS SECTION ================= */}

          {/* Column 1 Card: Factory finished */}
          <div className="px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-8 md:pt-0 md:pb-14 lg:pb-16 border-b md:border-b-0 md:border-r border-black/10">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-surface-subtle shadow-card">
                <img
                  src="/images/marquee-precision-assembly.webp"
                  alt="Why India Manufacturing Projects Fail After the Factory Is Finished"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[18px] sm:text-[19px] md:text-[20px] font-medium text-ink-primary leading-snug tracking-tight pt-1">
                Why India Manufacturing Projects Fail After the Factory Is Finished
              </h3>
            </div>
          </div>

          {/* Column 2 Card: China+1 Strategy */}
          <div className="px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-8 md:pt-0 md:pb-14 lg:pb-16 border-b md:border-b-0 md:border-r border-black/10">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-surface-subtle shadow-card">
                <img
                  src="/images/service-01-market-entry.webp"
                  alt="China+1 Is a Decision, Not a Strategy"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[18px] sm:text-[19px] md:text-[20px] font-medium text-ink-primary leading-snug tracking-tight pt-1">
                China+1 Is a Decision, Not a Strategy
              </h3>
            </div>
          </div>

          {/* Column 3 Card: Commissioning */}
          <div className="px-1.5 sm:px-2 md:px-2.5 lg:px-3 pt-8 md:pt-0 md:pb-14 lg:pb-16">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-surface-subtle shadow-card">
                <img
                  src="/images/marquee-industrial-logistics.webp"
                  alt="Commissioning Is Not Success: The Gap Before Stable Operations"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[18px] sm:text-[19px] md:text-[20px] font-medium text-ink-primary leading-snug tracking-tight pt-1">
                Commissioning Is Not Success: The Gap Before Stable Operations
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
