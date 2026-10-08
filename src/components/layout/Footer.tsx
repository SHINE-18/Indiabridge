'use client';

import React from 'react';
import Link from 'next/link';
import { usePageTransition } from './PageTransitionProvider';
import { siteFacts } from '@/lib/constants';

function RollingText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative overflow-hidden inline-flex flex-col h-[1.3em] leading-[1.3em] ${className}`}>
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

export function Footer() {
  const { navigateTo } = usePageTransition();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <footer
      className="w-full bg-[#111112] text-white pt-10 sm:pt-12 md:pt-14 pb-2.5 border-t border-white/10 overflow-hidden min-h-[80vh] flex flex-col justify-between relative z-10"
      style={{
        fontFamily: 'Inter, "Inter Fallback", var(--font-inter), sans-serif',
        backgroundImage: "url('/images/footer-grid-pattern.png')",
        backgroundRepeat: 'repeat',
        backgroundPosition: 'top left',
      }}
    >
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 flex flex-col justify-between flex-1 relative z-10">
        {/* Top 3-Column Grid with Full-Height Connecting Vertical Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[33%_35.5%_1fr] border-t border-b border-white/10 flex-1">
          {/* Part 1: Bio & Vision */}
          <div className="flex flex-col justify-start gap-8 sm:gap-10 pr-6 md:pr-10 lg:pr-14 pt-5 sm:pt-6 md:pt-7 lg:pt-8 pb-8 sm:pb-10 md:pb-12 lg:pb-14 border-b md:border-b-0 md:col-span-2 lg:col-span-1 md:border-b lg:border-b-0 md:border-r-0 lg:border-r border-white/10">
            <p className="text-white/60 text-[18px] leading-[32px] max-w-md">
              We partner with global manufacturers to execute India entry with precision, bridging strategy,
              engineering, and operations to deliver stable, scalable industrial outcomes.
            </p>
            <div className="text-xl sm:text-[22px] lg:text-[24px] font-medium tracking-tight text-white leading-snug">
              Let&apos;s build something<br />great. Get in touch today!
            </div>

            {/* Legal Registration Information Placeholder */}
            <div className="pt-4 border-t border-white/10 text-xs text-white/40 font-mono leading-relaxed">
              <div>{siteFacts.brand.legalName}</div>
              <div>Entity Status: Advisory & Industrial Governance</div>
              {/* TODO(client): confirm corporate identification number (CIN / LLPIN) */}
              <div className="text-white/30 text-[11px] mt-1">
                CIN / Registration: {siteFacts.legal.indiaRegistrationNumber}
              </div>
            </div>
          </div>

          {/* Part 2: Direct Contact & Socials */}
          <div className="flex flex-col justify-start gap-8 sm:gap-10 px-0 md:pl-0 lg:pl-6 md:pr-6 lg:pr-8 pt-5 sm:pt-6 md:pt-7 lg:pt-8 pb-8 sm:pb-10 md:pb-12 lg:pb-14 border-b md:border-b-0 md:col-span-1 md:border-r border-white/10">
            <div>
              <div className="text-[17px] font-normal text-white/50 mb-2.5">Let&apos;s talk</div>
              <div className="flex flex-col gap-1 text-[17px] sm:text-[19px] lg:text-[21px] font-medium text-white break-words">
                <a
                  href={`tel:${siteFacts.contact.phone.replace(/\s+/g, '')}`}
                  className="group w-fit inline-block hover:text-white/80 transition-colors"
                >
                  <RollingText>{siteFacts.contact.phone}</RollingText>
                </a>
                <a
                  href={`mailto:${siteFacts.contact.generalEmail}`}
                  className="group w-fit inline-block hover:text-white/80 transition-colors"
                >
                  <RollingText>{siteFacts.contact.generalEmail}</RollingText>
                </a>
              </div>
            </div>

            <div>
              <div className="text-[17px] font-normal text-white/50 mb-2.5">Follow our socials</div>
              <div className="flex flex-col gap-1 text-[17px] sm:text-[19px] lg:text-[21px] font-medium text-white">
                <a
                  href={siteFacts.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-fit inline-block hover:text-white/80 transition-colors"
                >
                  <RollingText>LinkedIn</RollingText>
                </a>
                <a
                  href={siteFacts.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-fit inline-block hover:text-white/80 transition-colors"
                >
                  <RollingText>Twitter (X)</RollingText>
                </a>
              </div>
            </div>
          </div>

          {/* Part 3: Navigation Menu */}
          <div className="flex flex-col justify-start pl-0 md:pl-8 lg:pl-5 pt-5 sm:pt-6 md:pt-7 lg:pt-8 pb-8 sm:pb-10 md:pb-12 lg:pb-14 md:col-span-1">
            <div>
              <div className="text-[17px] font-normal text-white/50 mb-2.5">Nav menu</div>
              <nav aria-label="Footer Navigation" className="flex flex-col gap-1.5 text-[19px] sm:text-[21px] font-medium text-white">
                <Link
                  href="/"
                  onClick={(e) => handleLinkClick(e, '/')}
                  className="group w-fit inline-block hover:text-white/80 transition-colors"
                >
                  <RollingText>Home</RollingText>
                </Link>
                {siteFacts.features.showProjects && (
                  <Link
                    href="/projects"
                    onClick={(e) => handleLinkClick(e, '/projects')}
                    className="group w-fit inline-block hover:text-white/80 transition-colors"
                  >
                    <RollingText>Projects</RollingText>
                  </Link>
                )}
                <Link
                  href="/values"
                  onClick={(e) => handleLinkClick(e, '/values')}
                  className="group w-fit inline-block hover:text-white/80 transition-colors"
                >
                  <RollingText>Values</RollingText>
                </Link>
                <Link
                  href="/blog"
                  onClick={(e) => handleLinkClick(e, '/blog')}
                  className="group w-fit inline-block hover:text-white/80 transition-colors"
                >
                  <RollingText>Blog</RollingText>
                </Link>
                <Link
                  href="/about"
                  onClick={(e) => handleLinkClick(e, '/about')}
                  className="group w-fit inline-block hover:text-white/80 transition-colors"
                >
                  <RollingText>About us</RollingText>
                </Link>
                <Link
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, '/contact')}
                  className="group w-fit inline-block hover:text-white/80 transition-colors"
                >
                  <RollingText>Contact</RollingText>
                </Link>
              </nav>

              {/* Legal & Compliance Links */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2 text-xs font-mono uppercase tracking-[0.1em] text-white/50">
                <Link href="/privacy" className="hover:text-white transition-colors w-fit">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors w-fit">
                  Terms of Engagement
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Brand Row: Architectural Thumbnail + Colossal Wordmark (Edge-to-Edge Symmetrical Spanning) */}
        <div className="w-full [container-type:inline-size] pt-[0.5cm] pb-1">
          <div
            className="flex items-baseline justify-between w-full"
            style={{
              fontSize: 'clamp(1.75rem, 14.15cqi, 236px)',
            }}
          >
            <div
              className="relative h-[1cap] aspect-[14/10] shrink-0 rounded-sm sm:rounded overflow-hidden bg-white/5 border border-white/10"
              style={{ height: '1cap' }}
            >
              <img
                src="/images/footer-building.webp"
                alt=""
                width={280}
                height={200}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className="framer-text font-semibold text-white select-none whitespace-nowrap tracking-[-0.045em] leading-[0.84] pb-[0.02em]"
              style={{
                fontFamily: 'Inter, "Inter Fallback", var(--font-inter), sans-serif',
                fontFeatureSettings: "'cv05' on, 'cv11' on",
              }}
              aria-label={siteFacts.brand.shortName.toUpperCase()}
            >
              {siteFacts.brand.shortName.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
