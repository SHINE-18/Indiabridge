import React from 'react';
import { SERVICES } from '@/lib/data';

export function ServicesSection() {
  return (
    <section className="relative py-20 md:py-20 bg-white border-b border-black/25 overflow-hidden" id="services">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Content Container */}
        <div className="relative z-10">
          <div className="inline-flex items-center text-[20px] font-sans uppercase tracking-[0.05em] text-ink-secondary mb-12 reveal-on-scroll">
            <span className="indicator-dot"></span> WHAT WE DO
          </div>

          <div className="flex flex-col gap-14 md:gap-10">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="grid grid-cols-1 md:grid-cols-[520px_1fr] gap-8 md:gap-14 lg:gap-16 items-start pb-14 md:pb-10 border-b border-black/25 last:border-b-0 last:pb-0 group reveal-on-scroll"
              >
                <div className="relative w-full max-w-[520px] aspect-[520/346] rounded-lg overflow-hidden bg-surface-subtle shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.375rem] font-medium tracking-tight text-ink-primary leading-[1.15] pt-2 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-ink-primary leading-relaxed max-w-xl">
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
