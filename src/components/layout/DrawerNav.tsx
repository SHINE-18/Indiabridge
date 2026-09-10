'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface DrawerNavProps {
  isOpen: boolean;
  onClose: () => void;
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
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#111112] text-white p-8 md:p-12 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            aria-label="Close Navigation Menu"
            className="w-10 h-10 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-6 my-auto">
          <Link
            href="/"
            onClick={onClose}
            className="text-3xl md:text-4xl font-medium tracking-tight text-white/80 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#advantage"
            onClick={onClose}
            className="text-3xl md:text-4xl font-medium tracking-tight text-white/80 hover:text-white transition-colors"
          >
            Values
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="text-3xl md:text-4xl font-medium tracking-tight text-white/80 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            onClick={onClose}
            className="text-3xl md:text-4xl font-medium tracking-tight text-white/80 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="text-3xl md:text-4xl font-medium tracking-tight text-white/80 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="pt-8 border-t border-white/10 flex flex-col gap-6 text-sm">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Contact</div>
            <div className="flex flex-col gap-1 text-white/80">
              <a href="mailto:hi@terahaus.com" className="hover:text-accent transition-colors">
                hi@terahaus.com
              </a>
              <a href="tel:+919925007371" className="hover:text-accent transition-colors">
                +91 99250 07371
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Socials</div>
            <div className="flex gap-4 text-white/80">
              <a href="#" className="hover:text-accent transition-colors" target="_blank" rel="noopener">
                X / Twitter
              </a>
              <a href="#" className="hover:text-accent transition-colors" target="_blank" rel="noopener">
                Instagram
              </a>
              <a href="#" className="hover:text-accent transition-colors" target="_blank" rel="noopener">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
