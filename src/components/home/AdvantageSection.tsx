import React from 'react';

export function AdvantageSection() {
  return (
    <section className="py-20 md:py-32 bg-surface-primary" id="advantage">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 md:gap-16 items-start mb-12 reveal-on-scroll">
          <div>
            <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-ink-secondary">
              <span className="indicator-dot"></span> OUR ADVANTAGE
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-medium tracking-tight text-ink-primary leading-[1.12] mb-5">
              Execution is our unfair advantage.
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-xl">
              Most advisory firms stop at strategy.<br />
              Most EPCs stop at construction.<br /><br />
              <strong className="text-ink-primary font-semibold">
                Indiabridge stays accountable until operations work.
              </strong>
            </p>
          </div>
        </div>

        {/* Bento Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:grid-rows-[repeat(2,220px)] gap-4 mb-16 reveal-on-scroll">
          <div className="lg:row-span-2 relative rounded-lg overflow-hidden bg-[#111112] min-h-[220px]">
            <img
              src="/images/aV6Purv77FqbMki9wqVNsy6axn0.webp"
              alt="Industrial Leadership and Operational Integrity"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden bg-[#111112] border border-white/10 flex items-center justify-center p-6 min-h-[220px]">
            <img
              src="/images/image_41.svg"
              alt="Precision Engineering Blueprint Schematic"
              loading="lazy"
              className="w-3/4 h-auto opacity-85 object-contain"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden bg-[#111112] min-h-[220px]">
            <img
              src="/images/QQAUpZpkEI6U2NUWdj3sLN3hK7U.webp"
              alt="Global Industrial Complex"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden bg-[#111112] min-h-[220px]">
            <img
              src="/images/2xLG0apeoWcgNL8Rn9zNBAqmQk.png"
              alt="Architectural Structural Elevation"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Why Clients Choose Us 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 md:gap-16 pt-14 border-t border-borderLine-subtle reveal-on-scroll">
          <div className="text-2xl sm:text-3xl font-medium text-ink-primary leading-tight">
            Why clients choose<br />us:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-9">
            {/* Item 1 */}
            <div className="flex flex-col gap-3 group">
              <svg
                className="w-8 h-8 text-ink-primary shrink-0 transition-transform group-hover:scale-110 duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <div className="text-base sm:text-lg font-normal text-ink-primary leading-relaxed">
                25+ years of hands-on industrial execution experience
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col gap-3 group">
              <svg
                className="w-8 h-8 text-ink-primary shrink-0 transition-transform group-hover:scale-110 duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <div className="text-base sm:text-lg font-normal text-ink-primary leading-relaxed">
                Deep understanding of global board governance and Indian realities
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col gap-3 group">
              <svg
                className="w-8 h-8 text-ink-primary shrink-0 transition-transform group-hover:scale-110 duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="5" r="3" />
                <circle cx="5" cy="19" r="3" />
                <circle cx="19" cy="19" r="3" />
                <line x1="12" y1="8" x2="5" y2="16" />
                <line x1="12" y1="8" x2="19" y2="16" />
              </svg>
              <div className="text-base sm:text-lg font-normal text-ink-primary leading-relaxed">
                Long-standing networks with PMCs, EPCs, regulators and suppliers
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col gap-3 group">
              <svg
                className="w-8 h-8 text-ink-primary shrink-0 transition-transform group-hover:scale-110 duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className="text-base sm:text-lg font-normal text-ink-primary leading-relaxed">
                One accountable partner across strategy, build and operations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
