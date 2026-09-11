import React from 'react';
import Link from 'next/link';

export function EngagementSection() {
  return (
    <section className="relative bg-white border-b border-black/25 overflow-hidden" id="engagement">
      {/* Clamped container for text content */}
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-[40px] relative pt-[60px] pb-[100px]">
        {/* Content Container */}
        <div className="relative z-10">
          {/* Header Split */}
          <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-8 md:gap-16 ">
            <div>
              <div className="inline-flex items-center text-[18px] sm:text-[20px] font-mono uppercase tracking-[0.16em] text-ink-secondary">
                <span className="indicator-dot"></span> ENGAGEMENT MODELS
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-medium tracking-tight text-ink-primary leading-[1.12] mb-6">
                Built for boards. Flexible for reality.
              </h2>
              <ul className="space-y-0.5 sm:space-y-1 text-[17px] sm:text-[19px] md:text-[20px] font-outfit text-[#52525b] font-normal list-none leading-snug">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52525b] shrink-0" />
                  Phase-based consulting (strategy → feasibility → execution)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52525b] shrink-0" />
                  End-to-end program management
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52525b] shrink-0" />
                  Build–Operate–Transfer mandates
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52525b] shrink-0" />
                  Interim / fractional India leadership
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52525b] shrink-0" />
                  JV, M&A and brownfield advisory
                </li>
              </ul>
              <p className="font-outfit text-[17px] sm:text-[19px] md:text-[20px] text-[#52525b] mt-4 sm:mt-5 max-w-xl leading-snug">
                Each engagement is aligned to your governance, risk appetite, and investment horizon.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FULL SCREEN-WIDTH IMAGE BANNER (Edge-to-edge, unconstrained by container clamp) ================= */}
      <div className="relative w-full overflow-hidden reveal-on-scroll">
        <div className="w-full h-[320px] sm:h-[400px] md:h-[460px] lg:h-[600px] bg-surface-subtle">
          <img
            src="/images/engagementmodal.webp"
            alt="Senior Boardroom Leadership in Session"
            loading="lazy"
            className="w-full h-full object-cover object-[center_45%]"
          />
        </div>

        {/* Floating More About Us Button */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 relative">
            <Link
              href="/about"
              className="absolute bottom-6 right-6 md:bottom-10 md:right-8 pointer-events-auto inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-ink-primary font-medium text-sm md:text-base shadow-elevated hover:bg-surface-subtle hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <span>More about us</span>
              <span className="text-lg leading-none">↳</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
