import React from 'react';

export function SolutionSection() {
  return (
    <section className="py-20 md:py-32 bg-[#111112] text-white border-y border-white/10 relative" id="solution">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 md:gap-16 items-start reveal-on-scroll">
          <div>
            <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-white/75">
              <span className="indicator-dot"></span> THE SOLUTION
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-medium tracking-tight text-white leading-[1.12] mb-7">
              We don’t advise India entry. We execute it.
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
              Indiabridge Capital Partners is a specialized India-entry and industrial execution firm for global
              manufacturers. We operate at the intersection of strategy, engineering, and operations, acting as a single
              accountable partner from boardroom intent to stable production. Where others stop at recommendations, we
              stay until outcomes are delivered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
