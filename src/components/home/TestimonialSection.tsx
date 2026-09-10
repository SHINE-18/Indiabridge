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
    <section className="py-20 md:py-32 bg-surface-primary" id="testimonials">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start reveal-on-scroll">
          {/* Left Column */}
          <div className="flex flex-col">
            <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-ink-secondary mb-6">
              <span className="indicator-dot"></span> Testimonials
            </div>
            <div className="text-base sm:text-lg text-ink-secondary leading-relaxed mb-8 max-w-sm">
              Here’s what clients say about our work. True impressions, built from real projects, real partnerships,
              and results.
            </div>
            <div className="flex items-center gap-3">
              <button
                className="w-12 h-12 rounded-full border border-borderLine-subtle bg-white text-ink-primary hover:border-ink-primary flex items-center justify-center text-lg transition-all shadow-subtle cursor-pointer"
                aria-label="Previous Testimonial"
                onClick={prevSlide}
              >
                ←
              </button>
              <button
                className="w-12 h-12 rounded-full border border-borderLine-subtle bg-white text-ink-primary hover:border-ink-primary flex items-center justify-center text-lg transition-all shadow-subtle cursor-pointer"
                aria-label="Next Testimonial"
                onClick={nextSlide}
              >
                →
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
                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-normal leading-relaxed text-ink-primary mb-8 tracking-tight">
                    {t.quote}
                  </blockquote>

                  <div className="flex items-center gap-4 pt-6 border-t border-borderLine-subtle">
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
