'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DrawerNav } from './DrawerNav';

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const scrollTolerance = 6;
    let threshold = 500;

    const measureThreshold = () => {
      const hero = document.querySelector('section');
      threshold = hero ? Math.max(hero.offsetHeight - 60, 400) : 500;
    };
    measureThreshold();
    window.addEventListener('resize', measureThreshold, { passive: true });

    const updateNavbar = (scrollYPos?: number) => {
      const currentScrollY = typeof scrollYPos === 'number' ? scrollYPos : window.scrollY;

      if (currentScrollY <= 20) {
        setIsScrolled((prev) => (prev ? false : prev));
        setIsHidden((prev) => (prev ? false : prev));
        lastScrollY = currentScrollY;
        return;
      }

      const shouldBeScrolled = currentScrollY >= threshold;
      setIsScrolled((prev) => (prev !== shouldBeScrolled ? shouldBeScrolled : prev));

      const diff = currentScrollY - lastScrollY;
      if (Math.abs(diff) >= 14) {
        const shouldBeHidden = currentScrollY > lastScrollY && currentScrollY > 120;
        setIsHidden((prev) => (prev !== shouldBeHidden ? shouldBeHidden : prev));
        lastScrollY = currentScrollY;
      }
    };

    let isTicking = false;
    const onWindowScroll = () => {
      if (!isTicking) {
        requestAnimationFrame(() => {
          updateNavbar(window.scrollY);
          isTicking = false;
        });
        isTicking = true;
      }
    };
    window.addEventListener('scroll', onWindowScroll, { passive: true });
    updateNavbar(window.scrollY);

    return () => {
      window.removeEventListener('resize', measureThreshold);
      window.removeEventListener('scroll', onWindowScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHidden ? '-translate-y-full' : 'translate-y-0'
          } ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
          }`}
        id="siteHeader"
      >
        <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="inline-block relative z-10 select-none group"
            aria-label="Indiabridge Capital Partners Home"
          >
            <img
              src="/images/brandlogo1.svg"
              alt="Indiabridge Capital Partners"
              className={`w-[100px] h-[65px] object-contain transition-all duration-300 [image-rendering:-webkit-optimize-contrast] [backface-visibility:hidden] filter contrast-[1.08] ${
                isScrolled
                  ? 'invert'
                  : 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]'
              }`}
            />
          </Link>

          <button
            className={`inline-flex items-center gap-2 text-[20px] font-normal tracking-wide transition-all duration-200 cursor-pointer bg-transparent border-none p-1 ${!isScrolled
              ? 'text-white hover:opacity-75'
              : 'text-[#111112] hover:opacity-70'
              }`}
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="1" y1="2.5" x2="14" y2="2.5" />
              <line x1="1" y1="7.5" x2="14" y2="7.5" />
            </svg>
            <span className="leading-none select-none">Menu</span>
          </button>
        </div>
      </header>

      <DrawerNav isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
