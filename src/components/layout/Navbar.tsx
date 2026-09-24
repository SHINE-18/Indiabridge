'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DrawerNav } from './DrawerNav';
import { usePageTransition } from './PageTransitionProvider';

export function Navbar() {
  const pathname = usePathname();
  const { navigateTo } = usePageTransition();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Pages with a bright white opening hero require black logo and dark menu text from the top
  const isWhiteHero = pathname === '/projects' || pathname === '/blog';
  const useDarkElements = isScrolled || isWhiteHero;

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] border-b animate-navbar-entrance ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          isWhiteHero
            ? 'bg-white/95 backdrop-blur-md border-black/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.02)]'
            : isScrolled
            ? 'bg-white/95 backdrop-blur-md border-black/5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
            : 'bg-transparent border-transparent'
        }`}
        id="siteHeader"
      >
        <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/');
            }}
            className="inline-flex items-center relative z-10 select-none group h-[46px] sm:h-[54px] w-[76px] sm:w-[96px] overflow-hidden"
            aria-label="Indiabridge Capital Partners Home"
          >
            <img
              src={useDarkElements ? '/images/logo-black.png' : '/images/logo-white.png'}
              alt="Indiabridge Capital Partners"
              width={96}
              height={54}
              className="w-full h-full object-contain scale-[1.75] transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation Links (Directly crawlable and visible on desktop) */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-7 lg:gap-9">
            <Link
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/about');
              }}
              className={`text-[15px] lg:text-[16px] tracking-wide transition-all duration-200 select-none relative py-1 ${
                pathname === '/about'
                  ? useDarkElements
                    ? 'text-[#111112] font-semibold'
                    : 'text-white font-semibold'
                  : useDarkElements
                  ? 'text-[#111112]/75 hover:text-[#111112]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span>About</span>
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-200 ${
                  pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
                } ${useDarkElements ? 'bg-[#111112]' : 'bg-white'}`}
              />
            </Link>
            <Link
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/projects');
              }}
              className={`text-[15px] lg:text-[16px] tracking-wide transition-all duration-200 select-none relative py-1 ${
                pathname === '/projects'
                  ? useDarkElements
                    ? 'text-[#111112] font-semibold'
                    : 'text-white font-semibold'
                  : useDarkElements
                  ? 'text-[#111112]/75 hover:text-[#111112]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span>Projects</span>
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-200 ${
                  pathname === '/projects' ? 'w-full' : 'w-0 group-hover:w-full'
                } ${useDarkElements ? 'bg-[#111112]' : 'bg-white'}`}
              />
            </Link>
            <Link
              href="/values"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/values');
              }}
              className={`text-[15px] lg:text-[16px] tracking-wide transition-all duration-200 select-none relative py-1 ${
                pathname === '/values'
                  ? useDarkElements
                    ? 'text-[#111112] font-semibold'
                    : 'text-white font-semibold'
                  : useDarkElements
                  ? 'text-[#111112]/75 hover:text-[#111112]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span>Values</span>
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-200 ${
                  pathname === '/values' ? 'w-full' : 'w-0 group-hover:w-full'
                } ${useDarkElements ? 'bg-[#111112]' : 'bg-white'}`}
              />
            </Link>
            <Link
              href="/blog"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/blog');
              }}
              className={`text-[15px] lg:text-[16px] tracking-wide transition-all duration-200 select-none relative py-1 ${
                pathname === '/blog'
                  ? useDarkElements
                    ? 'text-[#111112] font-semibold'
                    : 'text-white font-semibold'
                  : useDarkElements
                  ? 'text-[#111112]/75 hover:text-[#111112]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span>Blog</span>
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-200 ${
                  pathname === '/blog' ? 'w-full' : 'w-0 group-hover:w-full'
                } ${useDarkElements ? 'bg-[#111112]' : 'bg-white'}`}
              />
            </Link>
            <Link
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/contact');
              }}
              className={`text-[15px] lg:text-[16px] tracking-wide transition-all duration-200 select-none relative py-1 ${
                pathname === '/contact'
                  ? useDarkElements
                    ? 'text-[#111112] font-semibold'
                    : 'text-white font-semibold'
                  : useDarkElements
                  ? 'text-[#111112]/75 hover:text-[#111112]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span>Contact</span>
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-200 ${
                  pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
                } ${useDarkElements ? 'bg-[#111112]' : 'bg-white'}`}
              />
            </Link>
          </nav>

          {/* Right Action: Menu Trigger Button */}
          <div className="flex items-center gap-3">
            <button
              className={`inline-flex items-center gap-2 text-[18px] sm:text-[20px] font-normal tracking-wide transition-all duration-200 cursor-pointer bg-transparent border-none p-1 ${
                useDarkElements
                  ? 'text-[#111112] hover:opacity-70'
                  : 'text-white hover:opacity-75'
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
        </div>
      </header>

      <DrawerNav isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
