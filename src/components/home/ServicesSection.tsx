import React from 'react';
import { SERVICES } from '@/lib/data';

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-surface-primary" id="services">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-ink-secondary mb-12 reveal-on-scroll">
          <span className="indicator-dot"></span> WHAT WE DO
        </div>

        <div className="flex flex-col gap-14 md:gap-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="grid grid-cols-1 md:grid-cols-[1fr_1.25fr] gap-8 md:gap-14 lg:gap-16 items-center pb-14 md:pb-20 border-b border-borderLine-subtle last:border-b-0 last:pb-0 group reveal-on-scroll"
            >
              <div className="relative aspect-[16/10.5] rounded-lg overflow-hidden bg-surface-subtle">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-ink-primary leading-[1.15] mb-4">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
