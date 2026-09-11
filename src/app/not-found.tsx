'use client';

import React from 'react';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { usePageTransition } from '@/components/layout/PageTransitionProvider';

export default function NotFound() {
  const { navigateTo } = usePageTransition();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <>
      <main className="relative min-h-[90vh] bg-[#fafafa] flex flex-col justify-between overflow-x-clip text-[#101012]">
        {/* Architectural 4-Column Guide Lines */}
        <div className="pointer-events-none absolute inset-0 z-[1] flex justify-center" aria-hidden="true">
          <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-4 h-full">
            <div className="border-r border-black/[0.05] h-full" />
            <div className="border-r border-black/[0.05] h-full" />
            <div className="border-r border-black/[0.05] h-full" />
            <div className="h-full" />
          </div>
        </div>

        {/* Blueprint Watermark */}
        <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-[500px] h-[500px] opacity-[0.035] select-none">
          <img
            src="/images/wireframe-building-sketch.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Top spacer for navbar clearance */}
        <div className="w-full pt-32 sm:pt-40" />

        {/* Main 404 Notice */}
        <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-24 my-auto">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#71717a] mb-6 select-none animate-hero-pitch">
            <span className="w-2 h-2 rounded-full bg-[#f9452c] inline-block shrink-0" />
            <span>404 &mdash; Page Not Found</span>
          </div>

          {/* Colossal 404 Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-semibold tracking-[-0.035em] leading-[1.05] text-[#111112] max-w-3xl mb-6 select-none animate-hero-headline"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontFeatureSettings: "'cv05' on, 'cv11' on",
            }}
          >
            The requested structure does not exist.
          </h1>

          <p className="text-base sm:text-lg text-[#55555e] max-w-xl leading-relaxed mb-10">
            The page or project you are searching for has been moved, archived, or is temporarily unavailable within the execution platform.
          </p>

          {/* Action Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#111112] text-white text-sm font-medium hover:bg-black transition-all hover:scale-[1.02] active:scale-95 shadow-sm"
            >
              Return to Home
            </Link>
            <Link
              href="/projects"
              onClick={(e) => handleLinkClick(e, '/projects')}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-[#111112] border border-black/15 text-sm font-medium hover:bg-black/[0.03] transition-all hover:scale-[1.02] active:scale-95"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-[#111112] border border-black/15 text-sm font-medium hover:bg-black/[0.03] transition-all hover:scale-[1.02] active:scale-95"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Bottom breathing space */}
        <div className="w-full pb-16" />
      </main>

      <Footer />
    </>
  );
}
