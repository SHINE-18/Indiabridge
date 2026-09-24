import React from 'react';
import Link from 'next/link';
import { siteFacts } from '@/lib/constants';

export function SolutionSection() {
  return (
    <section className="py-[130px] bg-[#111112] text-white border-y border-white/10 relative overflow-hidden" id="solution">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Content Container */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 md:gap-16 items-start reveal-on-scroll">
            <div>
              <div className="inline-flex items-center text-[20px] font-sans uppercase tracking-[0.05em] text-white/75 pl-5">
                <span className="indicator-dot"></span> THE SOLUTION
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.375rem] font-medium tracking-tight text-white leading-[1.12] pl-28 mb-14">
                We don’t advise India entry.<br />
                We execute it.
              </h2>
              <p className="text-[18px] sm:text-[20px] text-white/70 leading-relaxed max-w-3xl pl-28 mb-10">
                Indiabridge Capital Partners is a specialized India-entry and industrial execution firm for global
                manufacturers. We operate at the intersection of strategy, engineering, and operations, acting as a single
                accountable partner from boardroom intent to stable production. Where others stop at recommendations, we
                stay until outcomes are delivered.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pl-28">
                {siteFacts.features.showProjects ? (
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-[15px] sm:text-[16px] font-medium hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
                  >
                    <span>Explore Case Studies</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-[15px] sm:text-[16px] font-medium hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
                  >
                    <span>Initiate a Mandate</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                )}
                <Link
                  href="/values"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/25 text-white text-[15px] sm:text-[16px] font-normal hover:border-white/50 hover:bg-white/5 transition-all duration-300"
                >
                  <span>Our Execution Values</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/25 text-white text-[15px] sm:text-[16px] font-normal hover:border-white/50 hover:bg-white/5 transition-all duration-300"
                >
                  <span>About Our Firm</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
