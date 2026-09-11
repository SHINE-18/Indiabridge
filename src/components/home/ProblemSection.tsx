'use client';

import React, { useEffect, useRef, useState } from 'react';

export function ProblemSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const groups = track.querySelectorAll('.carousel-marquee-group');
    if (groups.length === 0) return;

    let currentX = 0;
    const defaultSpeed = -0.85;
    let speed = defaultSpeed;
    let targetSpeed = defaultSpeed;
    let isDragging = false;
    let startX = 0;
    let dragStartX = 0;
    let lastDragX = 0;
    let lastDragTime = 0;
    let velocity = 0;
    let groupWidth = (groups[0] as HTMLElement).getBoundingClientRect().width;

    const updateGroupWidth = () => {
      if (groups[0]) {
        const w = (groups[0] as HTMLElement).getBoundingClientRect().width;
        if (w > 100) groupWidth = w;
      }
    };

    window.addEventListener('resize', updateGroupWidth, { passive: true });
    const images = track.querySelectorAll('img');
    images.forEach((img) => {
      if (img.complete) {
        updateGroupWidth();
      } else {
        img.addEventListener('load', updateGroupWidth);
      }
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      targetSpeed = 0;
      speed = 0;
    }

    let isIntersecting = true;
    let rafId: number | null = null;

    function tick() {
      if (!isIntersecting) {
        rafId = null;
        return;
      }

      if (!isDragging) {
        speed += (targetSpeed - speed) * 0.08;

        if (Math.abs(velocity) > 0.05) {
          currentX += velocity;
          velocity *= 0.94;
        } else {
          currentX += speed;
        }

        if (groupWidth > 0) {
          if (currentX <= -groupWidth) {
            currentX += groupWidth;
          } else if (currentX > 0) {
            currentX -= groupWidth;
          }
        }
      }

      if (track) {
        track.style.transform = `translate3d(${currentX.toFixed(2)}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && !rafId) {
          rafId = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(viewport);

    // Pointer event handlers for drag
    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = e.clientX;
      dragStartX = currentX;
      lastDragX = e.clientX;
      lastDragTime = performance.now();
      velocity = 0;
      viewport.classList.add('is-dragging');
      viewport.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      currentX = dragStartX + dx;

      if (groupWidth > 0) {
        if (currentX <= -groupWidth) {
          currentX += groupWidth;
          dragStartX += groupWidth;
        } else if (currentX > 0) {
          currentX -= groupWidth;
          dragStartX -= groupWidth;
        }
      }

      if (track) {
        track.style.transform = `translate3d(${currentX.toFixed(2)}px, 0, 0)`;
      }

      const now = performance.now();
      const dt = now - lastDragTime;
      if (dt > 10) {
        velocity = ((e.clientX - lastDragX) / dt) * 16;
        lastDragX = e.clientX;
        lastDragTime = now;
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      viewport.classList.remove('is-dragging');
      try {
        viewport.releasePointerCapture(e.pointerId);
      } catch (_) {}
    };

    const onMouseEnter = () => {
      if (!prefersReducedMotion) targetSpeed = defaultSpeed * 0.5;
    };

    const onMouseLeave = () => {
      if (!prefersReducedMotion) targetSpeed = defaultSpeed;
      if (isDragging) isDragging = false;
      viewport.classList.remove('is-dragging');
    };

    viewport.addEventListener('pointerdown', onPointerDown);
    viewport.addEventListener('pointermove', onPointerMove);
    viewport.addEventListener('pointerup', onPointerUp);
    viewport.addEventListener('pointercancel', onPointerUp);
    viewport.addEventListener('mouseenter', onMouseEnter);
    viewport.addEventListener('mouseleave', onMouseLeave);

    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('resize', updateGroupWidth);
      viewport.removeEventListener('pointerdown', onPointerDown);
      viewport.removeEventListener('pointermove', onPointerMove);
      viewport.removeEventListener('pointerup', onPointerUp);
      viewport.removeEventListener('pointercancel', onPointerUp);
      viewport.removeEventListener('mouseenter', onMouseEnter);
      viewport.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Stats number counting animation
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 1800;
            const delay = 200;
            let start: number | null = null;

            const animate = (now: number) => {
              if (start === null) start = now + delay;
              if (now < start) {
                requestAnimationFrame(animate);
                return;
              }
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);

              setCounts({
                stat1: Math.round(25 * ease),
                stat2: Math.round(86 * ease),
                stat3: Math.round(95 * ease),
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCounts({ stat1: 25, stat2: 86, stat3: 95 });
              }
            };

            requestAnimationFrame(animate);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-16 md:pt-24 pb-12 relative bg-surface-primary border-b border-black/25 overflow-hidden" id="problem">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Architectural Wireframe Sketch Background (Top Left Corner) */}
        <div
          aria-hidden="true"
          className="absolute -top-6 sm:-top-10 md:-top-24 -left-[40px] sm:-left-[70px] md:-left-[100px] lg:-left-[240px] w-[522px] sm:w-[648px] md:w-[774px] lg:w-[882px] pointer-events-none select-none opacity-15 mix-blend-multiply z-0"
        >
          <img
            src="/images/wireframe-building-sketch.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Left Column: Eyebrow */}
            <div className="md:col-span-1 reveal-on-scroll">
              <div className="inline-flex items-center text-[20px] font-sans uppercase text-ink-secondary">
                <span className="indicator-dot"></span> THE PROBLEM
              </div>
            </div>

            {/* Right Column: Problem Statement & Narrative */}
            <div className="md:col-span-2 flex flex-col pt-1 reveal-on-scroll">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-medium tracking-tight text-ink-primary leading-[1.12] mb-6">
              India doesn’t fail strategies.<br />
              It exposes assumptions.
            </h2>
            <p className="text-base sm:text-[20px] text-ink-secondary leading-relaxed mb-10 max-w-2xl">
              Most companies entering India don’t struggle because of ambition or capital. They struggle
              because execution is underestimated. Factories get built, but operations don’t stabilize. Teams
              get hired, but systems don’t integrate. Plans look good on slides, but reality unfolds
              differently on the ground. India rewards those who plan for complexity — and punishes those who
              don’t.
            </p>

            {/* Stats Counter Row */}
            <div className="grid grid-cols-3 gap-6 pt-8" ref={statsRef}>
              <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[78px] font-sans font-medium text-accent tracking-tight leading-[1.08]">
                  {counts.stat1}+
                </span>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-ink-muted mt-1">
                  Years Experience
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[78px] font-sans font-medium text-accent tracking-tight leading-[1.08]">
                  {counts.stat2}+
                </span>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-ink-muted mt-1">
                  Projects Done
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[78px] font-sans font-medium text-accent tracking-tight leading-[1.08]">
                  {counts.stat3}%
                </span>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-ink-muted mt-1">
                  Client Satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* ================= LOWER AREA (QUOTE & CAROUSEL) WITH VERTICAL HAIRLINE DIVIDERS ================= */}
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 relative mt-16 md:mt-24">
        {/* Manifesto Divider & Centered Quote */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-full h-px bg-borderLine-subtle" aria-hidden="true" />
          <div className="w-full py-[22px] px-[40px] text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-ink-primary sm:whitespace-nowrap leading-snug reveal-on-scroll">
            Design with intent. Build with discipline. Operate with ownership.
          </div>
        </div>

        {/* SLIDING IMAGE CAROUSEL / MARQUEE */}
        <div
          className="relative z-10 w-full overflow-hidden mt-6 mb-4 py-2"
          id="problemCarousel"
          role="region"
          aria-label="Industrial projects sliding gallery"
        >
          {/* Background Vertical Hairline Dividers (Begins after quote text) */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3">
              <div className="border-r-0 md:border-r border-black/10 h-full" />
              <div className="border-r-0 md:border-r border-black/10 h-full" />
              <div className="h-full" />
            </div>
          </div>
        <div
          className="relative z-10 w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
          id="carouselViewport"
          ref={viewportRef}
        >
          <div className="flex w-max items-center will-change-transform" id="carouselTrack" ref={trackRef}>
            {/* Set 1 */}
            <div className="carousel-marquee-group flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10 shrink-0">
              <div className="relative rounded-lg overflow-hidden shrink-0 h-[310px] sm:h-[350px] md:h-[380px] w-[280px] sm:w-[320px] md:w-[340px]">
                <img
                  src="/images/marquee-industrial-logistics.webp"
                  alt="Industrial Logistics and Factory Campus"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shrink-0 h-[310px] sm:h-[350px] md:h-[380px] w-[300px] sm:w-[340px] md:w-[360px]">
                <img
                  src="/images/marquee-heavy-manufacturing.webp"
                  alt="Heavy Industrial Manufacturing Infrastructure"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shrink-0 h-[310px] sm:h-[350px] md:h-[380px] w-[290px] sm:w-[330px] md:w-[350px]">
                <img
                  src="/images/marquee-precision-foundry.webp"
                  alt="Precision Foundry and High-Performance Plant"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shrink-0 h-[310px] sm:h-[350px] md:h-[380px] w-[330px] sm:w-[370px] md:w-[400px]">
                <img
                  src="/images/marquee-structural-framework.webp"
                  alt="Structural Steel Factory Framework"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shrink-0 h-[310px] sm:h-[350px] md:h-[380px] w-[280px] sm:w-[320px] md:w-[340px]">
                <img
                  src="/images/marquee-advanced-facility.webp"
                  alt="Grade-A Industrial Facility and Advanced Complex"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shrink-0 h-[310px] sm:h-[350px] md:h-[380px] w-[300px] sm:w-[340px] md:w-[360px]">
                <img
                  src="/images/marquee-precision-assembly.webp"
                  alt="High-Precision Manufacturing Assembly"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>

            {/* Set 2 (Exact Duplicate for Infinite Loop) */}
            <div className="carousel-marquee-group flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10 shrink-0" aria-hidden="true">
              <div className="relative rounded-lg overflow-hidden shrink-0 h-[310px] sm:h-[350px] md:h-[380px] w-[280px] sm:w-[320px] md:w-[340px]">
                <img
                  src="/images/marquee-industrial-logistics.webp"
                  alt="Industrial Logistics and Factory Campus"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shrink-0 h-[310px] sm:h-[350px] md:h-[380px] w-[300px] sm:w-[340px] md:w-[360px]">
                <img
                  src="/images/marquee-heavy-manufacturing.webp"
                  alt="Heavy Industrial Manufacturing Infrastructure"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shrink-0 h-[310px] sm:h-[350px] md:h-[380px] w-[290px] sm:w-[330px] md:w-[350px]">
                <img
                  src="/images/marquee-precision-foundry.webp"
                  alt="Precision Foundry and High-Performance Plant"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shrink-0 h-[310px] sm:h-[350px] md:h-[380px] w-[330px] sm:w-[370px] md:w-[400px]">
                <img
                  src="/images/marquee-structural-framework.webp"
                  alt="Structural Steel Factory Framework"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shrink-0 h-[310px] sm:h-[350px] md:h-[380px] w-[280px] sm:w-[320px] md:w-[340px]">
                <img
                  src="/images/marquee-advanced-facility.webp"
                  alt="Grade-A Industrial Facility and Advanced Complex"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shrink-0 h-[310px] sm:h-[350px] md:h-[380px] w-[300px] sm:w-[340px] md:w-[360px]">
                <img
                  src="/images/marquee-precision-assembly.webp"
                  alt="High-Precision Manufacturing Assembly"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
