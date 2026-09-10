import React from 'react';

export function WhyIndiaSection() {
  return (
    <section className="py-20 md:py-32 bg-surface-primary" id="why-india">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col reveal-on-scroll mb-14">
          <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-ink-secondary mb-8">
            <span className="indicator-dot"></span> WHY INDIA / WHY NOW
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-ink-primary leading-[1.05]">
              Why India.<br />
              Why Now.
            </h2>
            <div className="text-xl sm:text-2xl font-normal text-ink-secondary">
              Global manufacturing is being re-written.
            </div>
          </div>

          <div className="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-2xl">
            Supply chains are de-risking.<br />
            China+1 and friend-shoring are board-level mandates.<br />
            Engineering talent, cost efficiency, and scale matter more than ever.
          </div>
        </div>

        {/* 4-Item Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll">
          {/* Item 1 */}
          <div className="flex flex-col gap-3 group">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-surface-subtle shadow-card">
              <img
                src="/images/why-india-01-engineering.webp"
                alt="Deep Global Engineering"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
            <div className="text-base font-medium text-ink-primary">Deep global engineering</div>
            <div className="text-sm text-ink-muted">Modern industrial engineering clusters</div>
          </div>

          {/* Photo 2 */}
          <div className="flex flex-col gap-3 group reveal-on-scroll">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-surface-subtle shadow-card">
              <img
                src="/images/why-india-02-manufacturing.webp"
                alt="Cost-Efficient Manufacturing"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
            <div className="text-base font-medium text-ink-primary">Cost-efficient manufacturing</div>
            <div className="text-sm text-ink-muted">High precision production floors</div>
          </div>

          {/* Photo 3 */}
          <div className="flex flex-col gap-3 group reveal-on-scroll">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-surface-subtle shadow-card">
              <img
                src="/images/why-india-03-policy.webp"
                alt="Aligned Policy Incentives"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
            <div className="text-base font-medium text-ink-primary">Aligned policy incentives</div>
            <div className="text-sm text-ink-muted">PLI schemes and state industrial corridors</div>
          </div>

          {/* Photo 4 */}
          <div className="flex flex-col gap-3 group reveal-on-scroll">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-surface-subtle shadow-card">
              <img
                src="/images/why-india-04-logistics.png"
                alt="Global Market Access from India Infrastructure Hubs"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
            <div className="text-base font-medium text-ink-primary">Global market access</div>
          </div>
        </div>
      </div>
    </section>
  );
}
