'use client';

import React, { useState } from 'react';
import { TESTIMONIALS } from '@/lib/data';

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-white overflow-hidden border-b border-black/25" id="testimonials">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* ================= BACKGROUND VERTICAL HAIRLINE DIVIDERS (Full Height Touching Top & Bottom Seams) ================= */}
        <div aria-hidden="true" className="absolute inset-0 px-4 sm:px-6 md:px-8 pointer-events-none z-0">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-3">
            <div className="border-r-0 md:border-r border-black/5 h-full" />
            <div className="border-r-0 md:border-r border-black/5 h-full" />
            <div className="h-full" />
          </div>
        </div>

        {/* ================= CONTENT CONTAINER (Relative, z-10 over the vertical lines) ================= */}
        <div className="relative z-10 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start reveal-on-scroll">
          {/* Left Column - Fixed spacing and self-start so buttons NEVER jump or shift position */}
          <div className="flex flex-col items-start self-start">
            <div className="inline-flex items-center gap-2.5 text-[15px] sm:text-[16px] text-ink-primary font-normal mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f9452c] shrink-0 inline-block" />
              <span>Testimonials</span>
            </div>
            <div className="text-[17px] sm:text-[19px] md:text-[20px] text-ink-secondary leading-[1.45] max-w-sm font-normal mb-10 sm:mb-14">
              Here’s what clients say about our work. True impressions, built from real projects, real partnerships,
              and results.
            </div>

            {/* Dark Sharp Square Arrow Controls - Rock-Solid Position & Shifted Down */}
            <div className="flex items-center gap-2 mt-6 sm:mt-10 md:mt-16">
              <button
                className="w-[60px] h-[60px] rounded-sm bg-[#111112] hover:bg-black text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer select-none"
                aria-label="Previous Testimonial"
                onClick={prevSlide}
              >
                <svg
                  className="w-7 h-7 stroke-[2.5]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="w-[60px] h-[60px] rounded-sm bg-[#111112] hover:bg-black text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer select-none"
                aria-label="Next Testimonial"
                onClick={nextSlide}
              >
                <svg
                  className="w-7 h-7 stroke-[2.5]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-3xl border border-borderLine-subtle p-8 sm:p-12 md:p-14 shadow-card">
            {TESTIMONIALS.map((t, idx) => {
              const isActive = idx === currentIndex;
              if (!isActive) return null;
              return (
                <div key={t.id} className="transition-opacity duration-300">
                  <div className="text-5xl font-serif text-accent leading-none mb-4 select-none">“</div>
                  <blockquote className="text-2xl sm:text-3xl md:text-[34px] font-normal leading-relaxed text-ink-primary mb-8 tracking-tight">
                    {t.quote}
                  </blockquote>

                  <div className="flex items-center gap-4 pt-6 border-t border-black/25">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-subtle shrink-0">
                      <img src={t.avatar} alt={t.author} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-base font-medium text-ink-primary">{t.author}</div>
                      <div className="text-sm text-ink-muted">
                        {t.role}
                        {t.company ? `, ${t.company}` : ''}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
