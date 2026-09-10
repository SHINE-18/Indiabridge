import React from 'react';
import Link from 'next/link';

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
  return (
    <footer
      className="w-full bg-[#111112] text-white pt-12 sm:pt-16 md:pt-20 pb-[1cm] border-t border-white/10 overflow-hidden min-h-[80vh] flex flex-col justify-between relative z-10"
      style={{
        fontFamily: '"Inter Variable", "Inter Variable Placeholder", var(--font-inter), sans-serif',
        backgroundImage: "url('/images/footer-grid-pattern.png')",
        backgroundRepeat: 'repeat',
        backgroundPosition: 'top left',
      }}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-between flex-1 relative z-10">
        {/* Top 3-Column Grid with Full-Height Connecting Vertical Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-[33%_35.5%_1fr] md:grid-rows-[1fr] border-t border-b border-white/10 flex-1">
          {/* Part 1: Bio & Vision */}
          <div className="flex flex-col justify-start gap-8 sm:gap-10 pr-6 md:pr-10 lg:pr-14 pt-5 sm:pt-6 md:pt-7 lg:pt-8 pb-8 sm:pb-10 md:pb-12 lg:pb-14 border-b md:border-b-0 md:border-r border-white/10">
            <p className="text-white/60 text-[18px] leading-[32px] max-w-md">
              We partner with global manufacturers to execute India entry with precision, bridging strategy,
              engineering, and operations to deliver stable, scalable industrial outcomes.
            </p>
            <div className="text-xl sm:text-[22px] lg:text-[24px] font-medium tracking-tight text-white leading-snug">
              Let&apos;s build something<br />great. Get in touch today!
            </div>
          </div>

          {/* Part 2: Direct Contact & Socials */}
          <div className="flex flex-col justify-start gap-8 sm:gap-10 px-0 md:pl-6 md:pr-6 lg:pl-6 lg:pr-8 pt-5 sm:pt-6 md:pt-7 lg:pt-8 pb-8 sm:pb-10 md:pb-12 lg:pb-14 border-b md:border-b-0 md:border-r border-white/10">
            <div>
              <div className="text-[17px] font-normal text-white/50 mb-2.5">Lets talk</div>
              <div className="flex flex-col gap-1 text-[19px] sm:text-[21px] font-medium text-white">
                <a href="tel:+919925007371" className="group w-fit inline-block hover:text-white/80 transition-colors">
                  <RollingText>+91 99250 07371</RollingText>
                </a>
                <a href="mailto:hello@terahaus.com" className="group w-fit inline-block hover:text-white/80 transition-colors">
                  <RollingText>hello@terahaus.com</RollingText>
                </a>
              </div>
            </div>

            <div>
              <div className="text-[17px] font-normal text-white/50 mb-2.5">Follow our socials</div>
              <div className="flex flex-col gap-1 text-[19px] sm:text-[21px] font-medium text-white">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group w-fit inline-block hover:text-white/80 transition-colors">
                  <RollingText>Instagram</RollingText>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group w-fit inline-block hover:text-white/80 transition-colors">
                  <RollingText>Twitter (X)</RollingText>
                </a>
              </div>
            </div>
          </div>

          {/* Part 3: Navigation Menu */}
          <div className="flex flex-col justify-start pl-0 md:pl-5 lg:pl-5 pt-5 sm:pt-6 md:pt-7 lg:pt-8 pb-8 sm:pb-10 md:pb-12 lg:pb-14">
            <div>
              <div className="text-[17px] font-normal text-white/50 mb-2.5">Nav menu</div>
              <nav className="flex flex-col gap-1.5 text-[19px] sm:text-[21px] font-medium text-white">
                <Link href="/" className="group w-fit inline-block hover:text-white/80 transition-colors">
                  <RollingText>Home</RollingText>
                </Link>
                <Link href="/#advantage" className="group w-fit inline-block hover:text-white/80 transition-colors">
                  <RollingText>Values</RollingText>
                </Link>
                <Link href="/blog" className="group w-fit inline-block hover:text-white/80 transition-colors">
                  <RollingText>Blog</RollingText>
                </Link>
                <Link href="/about" className="group w-fit inline-block hover:text-white/80 transition-colors">
                  <RollingText>About us</RollingText>
                </Link>
                <Link href="/contact" className="group w-fit inline-block hover:text-white/80 transition-colors">
                  <RollingText>Contact</RollingText>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Brand Row: Architectural Thumbnail + Colossal Wordmark (Equal Height, Stuck to Bottom) */}
        <div className="flex items-end gap-3 sm:gap-4 w-full pt-[0.5cm] pb-0 text-[clamp(2rem,13.4vw,216px)]">
          <div className="relative h-[0.733em] aspect-[14/10] shrink-0 rounded-sm sm:rounded overflow-hidden bg-white/5 border border-white/10">
            <img
              src="/images/footer-building.webp"
              alt="Indiabridge Architecture"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <p
            className="framer-text font-semibold text-white select-none whitespace-nowrap tracking-[-0.045em] leading-[0.74]"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontFeatureSettings: "'cv05' on, 'cv11' on",
            }}
            aria-label="INDIABRIDGE"
          >
            INDIABRIDGE
          </p>
        </div>
      </div>
    </footer>
  );
}
