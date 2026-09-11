import React from 'react';
import { WHY_INDIA_PHOTOS } from '@/lib/data';

export function WhyIndiaSection() {
  return (
    <section className="relative bg-white border-b border-black/25 overflow-hidden" id="why-india">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* ================= BACKGROUND VERTICAL HAIRLINE DIVIDERS (Full Height Connecting from Top to the Bottom Horizontal Line) ================= */}
        <div aria-hidden="true" className="absolute inset-0 px-4 sm:px-6 md:px-8 pointer-events-none z-0">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-3">
            <div className="border-r-0 md:border-r border-black/10 h-full" />
            <div className="border-r-0 md:border-r border-black/10 h-full" />
            <div className="h-full" />
          </div>
        </div>

        {/* ================= CONTENT CONTAINER (Relative, z-10 over the vertical lines) ================= */}
        <div className="relative z-10 flex flex-col pt-16 md:pt-24 pb-16 md:pb-24">
          {/* ================= TOP ROW: 3-COLUMN HEADER SECTION ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 reveal-on-scroll">
            {/* Column 1 (Left): Eyebrow */}
            <div className="px-4 sm:px-6 md:px-8 pt-4 pb-10 sm:pb-14 border-b md:border-b-0 border-black/25 flex flex-col justify-start">
              <div className="inline-flex items-center gap-2.5 text-[14px] sm:text-[15px] text-ink-primary font-normal">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f9452c] shrink-0 inline-block" />
                <span className="uppercase tracking-[0.14em] text-[12px] sm:text-[20px] font-medium text-ink-secondary">
                  WHY INDIA / WHY NOW
                </span>
              </div>
            </div>

            {/* Column 2 (Center): Prominent "Why India. Why Now." */}
            <div className="px-4 sm:px-6 md:px-8 pt-4 pb-10 sm:pb-14 border-b md:border-b-0 border-black/25 flex flex-col justify-start">
              <h2 className="text-6xl sm:text-7xl md:text-[80px] lg:text-[90px] xl:text-[88px] font-medium tracking-tight text-ink-primary leading-[0.94]">
                Why India.<br />
                Why Now.
              </h2>
            </div>

            {/* Column 3 (Right): Subtitle Text */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-10 pt-4 pb-10 sm:pb-14 flex flex-col justify-start">
              <p className="text-[16px] sm:text-[18px] md:text-[18px] text-ink-secondary leading-snug font-normal whitespace-nowrap pt-1 sm:pt-2">
               Global manufacturing is being re-written.
              </p>
            </div>
          </div>

          {/* ================= MIDDLE ROW: SUPPLY CHAIN DESCRIPTION (BELOW THE LINE) ================= */}
          <div className="px-2 sm:px-2 md:px-2 pt-8 md:pt-12 pb-4 max-w-3xl reveal-on-scroll">
            <div className="text-[20px] sm:text-[23px] md:text-[26px] text-black font-medium leading-[1.2] font-inter space-y-1 tracking-tight">
              <p>Supply chains are de-risking.</p>
              <p>China+1 and friend-shoring are board-level mandates.</p>
              <p>Engineering talent, cost efficiency, and scale matter more than ever.</p>
            </div>
          </div>

          {/* ================= BOTTOM SECTION: 2 IMAGES PER ROW (2 ROWS TOTAL) ================= */}
          {/* Sits above the continuous vertical lines which run behind to the last end */}
          <div className="pt-6 md:pt-8 reveal-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {WHY_INDIA_PHOTOS.map((item, idx) => (
                <div key={item.id || idx} className="group flex flex-col gap-3">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9.5] rounded-sm overflow-hidden bg-surface-subtle shadow-sm border border-black/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>
                  {item.title && (
                    <div className="pt-2">
                      <div className="text-2xl sm:text-[28px] md:text-[32px] font-medium text-ink-primary tracking-tight leading-snug">
                        {item.title}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


