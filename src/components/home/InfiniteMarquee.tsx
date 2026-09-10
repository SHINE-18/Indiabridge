'use client';

import React from 'react';
import Image from 'next/image';
import { MARQUEE_IMAGES } from '@/lib/data';

export function InfiniteMarquee() {
  const allImages = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

  return (
    <div
      className="w-full py-6 md:py-10 overflow-hidden bg-surface-primary select-none"
      role="region"
      aria-label="Industrial projects sliding gallery"
    >
      <div className="w-full relative overflow-hidden flex">
        {/* Infinite CSS marquee track */}
        <div className="flex shrink-0 gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused]">
          {allImages.map((img, idx) => (
            <div
              key={idx}
              className="relative h-[220px] sm:h-[300px] md:h-[360px] aspect-[16/10] flex-shrink-0 rounded-xl overflow-hidden bg-surface-subtle shadow-card"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 300px, 450px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Duplicate track to make loop seamlessly continuous */}
        <div
          aria-hidden="true"
          className="flex shrink-0 gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused]"
        >
          {allImages.map((img, idx) => (
            <div
              key={`dup-${idx}`}
              className="relative h-[220px] sm:h-[300px] md:h-[360px] aspect-[16/10] flex-shrink-0 rounded-xl overflow-hidden bg-surface-subtle shadow-card"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 300px, 450px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
