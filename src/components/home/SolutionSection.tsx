import React from 'react';

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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.375rem] font-medium tracking-tight text-white leading-[1.12] pl-28 mb-20">
                We don’t advise India entry. We execute it.
              </h2>
              <p className="text-[18px] sm:text-[20px] text-white/70 leading-relaxed max-w-3xl pl-28">
                Indiabridge Capital Partners is a specialized India-entry and industrial execution firm for global
                manufacturers. We operate at the intersection of strategy, engineering, and operations, acting as a single
                accountable partner from boardroom intent to stable production. Where others stop at recommendations, we
                stay until outcomes are delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
