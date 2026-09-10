import React from 'react';
import Link from 'next/link';

export function EngagementSection() {
  return (
    <section className="py-20 md:py-32 bg-surface-primary" id="engagement">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 md:gap-16 items-start mb-14 reveal-on-scroll">
          <div>
            <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-ink-secondary">
              <span className="indicator-dot"></span> ENGAGEMENT MODELS
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-medium tracking-tight text-ink-primary leading-[1.12] mb-6">
              Built for boards. Flexible for reality.
            </h2>
            <ul className="space-y-3.5 text-base sm:text-lg text-ink-primary font-normal list-none">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                Phase-based consulting (strategy → feasibility → execution)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                End-to-end program management
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                Build–Operate–Transfer mandates
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                Interim / fractional India leadership
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                JV, M&A and brownfield advisory
              </li>
            </ul>
            <p className="text-base sm:text-lg text-ink-secondary mt-6 max-w-xl">
              Each engagement is aligned to your governance, risk appetite, and investment horizon.
            </p>
          </div>
        </div>

        {/* Wide Panoramic Banner with Floating More About Us Button */}
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] sm:aspect-[2.4/1] w-full bg-surface-subtle shadow-card reveal-on-scroll">
          <img
            src="/images/engagement-boardroom-banner.webp"
            alt="Senior Boardroom Leadership in Session"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <Link
            href="/about"
            className="absolute bottom-6 right-6 md:bottom-10 md:right-10 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-ink-primary font-medium text-sm md:text-base shadow-elevated hover:bg-surface-subtle hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <span>More about us</span>
            <span className="text-lg leading-none">↳</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
