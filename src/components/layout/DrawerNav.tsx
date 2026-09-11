'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface DrawerNavProps {
  isOpen: boolean;
  onClose: () => void;
}

function RollingNavText({ children }: { children: string }) {
  return (
    <span className="relative overflow-hidden inline-flex flex-col h-[1.18em] leading-[1.18em]">
      <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full will-change-transform">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0 will-change-transform"
      >
        {children}
      </span>
    </span>
  );
}

export function DrawerNav({ isOpen, onClose }: DrawerNavProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[200] transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Main Navigation"
        className={`fixed top-0 right-0 h-full h-[100dvh] w-full max-w-[380px] sm:max-w-[430px] bg-[#111112] text-white px-8 py-6 sm:px-12 sm:py-9 flex flex-col justify-between overflow-hidden shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top Close Button (Solid White Circle with Dark X) */}
        <div className="w-full flex justify-start shrink-0">
          <button
            onClick={onClose}
            aria-label="Close Navigation Menu"
            className="w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md select-none"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation Links in One Vertical Column with Reel Scroll Hover Effect */}
        <nav className="flex flex-col gap-2.5 sm:gap-3.5 my-auto text-left py-3 sm:py-4">
          <Link
            href="/"
            onClick={onClose}
            className="group w-fit text-[28px] sm:text-[32px] md:text-[34px] font-normal tracking-tight text-white transition-opacity select-none leading-tight"
          >
            <RollingNavText>Home</RollingNavText>
          </Link>
          <Link
            href="/#advantage"
            onClick={onClose}
            className="group w-fit text-[28px] sm:text-[32px] md:text-[34px] font-normal tracking-tight text-white transition-opacity select-none leading-tight"
          >
            <RollingNavText>Values</RollingNavText>
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="group w-fit text-[28px] sm:text-[32px] md:text-[34px] font-normal tracking-tight text-white transition-opacity select-none leading-tight"
          >
            <RollingNavText>About</RollingNavText>
          </Link>
          <Link
            href="/blog"
            onClick={onClose}
            className="group w-fit text-[28px] sm:text-[32px] md:text-[34px] font-normal tracking-tight text-white transition-opacity select-none leading-tight"
          >
            <RollingNavText>Blog</RollingNavText>
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="group w-fit text-[28px] sm:text-[32px] md:text-[34px] font-normal tracking-tight text-white transition-opacity select-none leading-tight"
          >
            <RollingNavText>Contact</RollingNavText>
          </Link>
        </nav>

        {/* Bottom Info Section (Contact + Socials) */}
        <div className="flex flex-col gap-4 sm:gap-5 text-left shrink-0 pb-1">
          {/* Contact Info Block */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[#8e8e93] text-[13px] sm:text-[14px] font-normal mb-0.5">Contact</span>
            <a
              href="mailto:hi@terahaus.com"
              className="text-white text-[15px] sm:text-[16px] font-normal leading-snug hover:opacity-75 transition-opacity"
            >
              hi@terahaus.com
            </a>
            <a
              href="tel:+919925007371"
              className="text-white text-[15px] sm:text-[16px] font-normal leading-snug hover:opacity-75 transition-opacity"
            >
              +91 99250 07371
            </a>
          </div>

          {/* Socials Block */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[#8e8e93] text-[13px] sm:text-[14px] font-normal mb-0.5">Socials</span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[15px] sm:text-[16px] font-normal leading-snug hover:opacity-75 transition-opacity"
            >
              X / Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[15px] sm:text-[16px] font-normal leading-snug hover:opacity-75 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[15px] sm:text-[16px] font-normal leading-snug hover:opacity-75 transition-opacity"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
