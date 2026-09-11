import React from 'react';

export function AdvantageSection() {
  return (
    <section className="relative pt-16 sm:pt-20 md:pt-28 pb-10 md:pb-16 bg-white border-b border-black/45 overflow-hidden" id="advantage">
      {/* ================= BACKGROUND VERTICAL HAIRLINE DIVIDERS ================= */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-3">
            <div className="border-r-0 md:border-r border-black/10 h-full" />
            <div className="border-r-0 md:border-r border-black/10 h-full" />
            <div className="h-full" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Architectural Wireframe Sketch Background */}
        <div
          aria-hidden="true"
          className="absolute -top-6 sm:-top-8 md:-top-40 -left-[50px] sm:-left-[90px] md:-left-[130px] lg:-left-[100px] w-[520px] sm:w-[640px] md:w-[760px] lg:w-[860px] pointer-events-none select-none opacity-[0.1] mix-blend-multiply z-0"
        >
          <img
            src="/images/wireframe-building-sketch.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          {/* Header Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start mb-12 reveal-on-scroll">
            <div className="md:col-span-1">
              <div className="inline-flex items-center text-[20px] font-sans uppercase tracking-[0.2px] text-[#000000B3]">
                <span className="indicator-dot"></span> OUR ADVANTAGE
              </div>
            </div>
            <div className="md:col-span-2">
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

          {/* Asymmetric 3-Column Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-5 mb-16 reveal-on-scroll">
            {/* Column 1 (Left Tall Card): Spans 2 rows */}
            <div className="md:row-span-2 md:col-start-1 md:row-start-1 relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#111112] min-h-[420px] md:min-h-[540px] lg:min-h-[620px] group shadow-sm">
              <img
                src="/images/contact-field-director.jpg"
                alt="Industrial Leadership and Execution"
                loading="lazy"
                className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <img
                src="/images/brand-logo-arch.png"
                alt=""
                className="absolute bottom-5 right-5 w-6 h-auto opacity-70 pointer-events-none"
              />
            </div>

            {/* Column 2 (Middle Top Card): Precision Engineering */}
            <div className="md:col-start-2 md:row-start-1 relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#111112] min-h-[220px] md:min-h-0 group shadow-sm">
              <img
                src="/images/advantage-precision-engineering.webp"
                alt="High-Precision Industrial Engineering and Calibration"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <img
                src="/images/brand-logo-arch.png"
                alt=""
                className="absolute top-5 left-5 w-6 h-auto opacity-70 pointer-events-none"
              />
            </div>

            {/* Column 3 (Right Tall Card): Spans 2 rows */}
            <div className="md:row-span-2 md:col-start-3 md:row-start-1 relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#111112] min-h-[420px] md:min-h-[540px] lg:min-h-[620px] group shadow-sm">
              <img
                src="/images/faqsection.webp"
                alt="Global Industrial Operations and Engineering"
                loading="lazy"
                className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <img
                src="/images/brand-logo-arch.png"
                alt=""
                className="absolute top-5 left-5 w-6 h-auto opacity-70 pointer-events-none"
              />
            </div>

            {/* Column 2 (Middle Bottom Card): Advanced Automation */}
            <div className="md:col-start-2 md:row-start-2 relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#111112] min-h-[220px] md:min-h-0 group shadow-sm">
              <img
                src="/images/advantage-advanced-automation.webp"
                alt="Automated Cleanroom Robotics and Advanced Facility Operations"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <img
                src="/images/brand-logo-arch.png"
                alt=""
                className="absolute bottom-5 left-5 w-6 h-auto opacity-70 pointer-events-none"
              />
            </div>
          </div>

          {/* Why Clients Choose Us 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[380px_1fr_1fr] gap-y-10 md:gap-y-14 gap-x-8 md:gap-x-10 lg:gap-x-12 reveal-on-scroll">
            {/* Row 1: Col 1 Title */}
            <div className="text-2xl sm:text-3xl md:text-[36px] font-medium text-ink-primary leading-tight">
              Why clients choose<br />us:
            </div>

            {/* Row 1: Col 2 (Item 1) */}
            <div className="flex flex-col gap-3 group">
              <svg
                className="w-7 h-7 text-ink-primary shrink-0 transition-transform group-hover:scale-110 duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
                <path d="M10 15V6a2 2 0 0 1 4 0v9" />
                <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
              </svg>
              <div className="font-outfit text-base sm:text-[17px] md:text-[22px] text-ink-primary font-normal leading-relaxed">
                25+ years of hands-on industrial execution experience
              </div>
            </div>

            {/* Row 1: Col 3 (Item 2) */}
            <div className="flex flex-col gap-3 group">
              <svg
                className="w-7 h-7 text-ink-primary shrink-0 transition-transform group-hover:scale-110 duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <div className="font-outfit text-base sm:text-[17px] md:text-[22px] text-ink-primary font-normal leading-relaxed">
                Deep understanding of global board governance and Indian realities
              </div>
            </div>

            {/* Row 2: Col 1 Empty Placeholder */}
            <div className="hidden md:block" aria-hidden="true" />

            {/* Row 2: Col 2 (Item 3) */}
            <div className="flex flex-col gap-3 group">
              <svg
                className="w-7 h-7 text-ink-primary shrink-0 transition-transform group-hover:scale-110 duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="3" width="6" height="4" rx="1" />
                <rect x="2" y="17" width="6" height="4" rx="1" />
                <rect x="16" y="17" width="6" height="4" rx="1" />
                <path d="M12 7v4" />
                <path d="M5 17v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
              </svg>
              <div className="font-outfit text-base sm:text-[17px] md:text-[22px] text-ink-primary font-normal leading-relaxed">
                Long-standing networks with PMCs, EPCs, regulators and suppliers
              </div>
            </div>

            {/* Row 2: Col 3 (Item 4) */}
            <div className="flex flex-col gap-3 group">
              <svg
                className="w-7 h-7 text-ink-primary shrink-0 transition-transform group-hover:scale-110 duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <polyline points="16 11 18 13 22 9" />
              </svg>
              <div className="font-outfit text-base sm:text-[17px] md:text-[22px] text-ink-primary font-normal leading-relaxed">
                One accountable partner across strategy, build and operations
              </div>
            </div>

            {/* Row 3: Col 1 Empty Placeholder */}
            <div className="hidden md:block" aria-hidden="true" />

            {/* Row 3: Col 2 (Item 5) */}
            <div className="flex flex-col gap-3 group">
              <svg
                className="w-7 h-7 text-ink-primary shrink-0 transition-transform group-hover:scale-110 duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M9 12h6" />
                <path d="M9 16h6" />
              </svg>
              <div className="font-outfit text-base sm:text-[17px] md:text-[22px] text-ink-primary font-normal leading-relaxed">
                Zero tolerance for theoretical plans without ownership
              </div>
            </div>

            {/* Row 3: Col 3 (Item 6) */}
            <div className="flex flex-col gap-3 group">
              <svg
                className="w-7 h-7 text-ink-primary shrink-0 transition-transform group-hover:scale-110 duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <div className="font-outfit text-base sm:text-[17px] md:text-[22px] text-ink-primary font-normal leading-relaxed">
                We don’t sell optimism.<br />We deliver outcomes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
