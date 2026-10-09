import React from 'react';
import { SERVICES } from '@/lib/data';

export function ServicesSection() {
  return (
    <section className="relative pt-[110px] pb-20 bg-white border-b border-black/25 overflow-hidden" id="services">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Content Container */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2.5 text-[13px] sm:text-[15px] md:text-[20px] font-sans uppercase tracking-[0.14em] font-medium text-ink-secondary mb-8 sm:mb-12 reveal-on-scroll">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f9452c] shrink-0 inline-block" />
            <span>WHAT WE DO</span>
          </div>

          <div className="flex flex-col gap-14 md:gap-10">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="grid grid-cols-1 md:grid-cols-[520px_1fr] gap-5 sm:gap-8 md:gap-14 lg:gap-16 items-start pb-12 sm:pb-14 md:pb-10 border-b border-black/25 last:border-b-0 last:pb-0 group reveal-on-scroll"
              >
                <div className="relative w-full max-w-[520px] aspect-[520/346] rounded-lg overflow-hidden bg-surface-subtle shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={520}
                    height={346}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[30px] sm:text-[36px] md:text-4xl lg:text-[3.375rem] font-medium tracking-tight text-ink-primary leading-[1.12] pt-1 sm:pt-2 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[15px] sm:text-base md:text-lg text-ink-secondary leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
