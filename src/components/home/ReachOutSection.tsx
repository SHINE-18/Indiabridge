import React from 'react';
import Link from 'next/link';

export function ReachOutSection() {
  return (
    <section className="pt-20 md:pt-32 pb-0 bg-white relative overflow-hidden" id="contact">
      {/* Subtle architectural watermark in background */}
      <div className="absolute right-0 top-0 w-full sm:w-2/3 h-full opacity-15 pointer-events-none mix-blend-multiply select-none">
        <img
          src="/images/wireframe-building-sketch.png"
          alt="Architectural Blueprint"
          loading="lazy"
          className="w-full h-full object-contain object-right-top"
        />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="reveal-on-scroll mb-12 sm:mb-16">
          <div className="inline-flex items-center text-[14px] sm:text-[15px] font-normal tracking-[0.02em] text-neutral-600 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f9452c] inline-block mr-2.5"></span> Reach out
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-medium tracking-tight text-neutral-900 leading-[1.02]">
            Ready to build?<br />
            Contact us today
          </h2>
        </div>
      </div>

      {/* Full-width Panoramic Banner with Floating Overlapping Contact Card */}
      <div className="relative w-full overflow-visible bg-[#111112]">
        {/* Full-Width Image */}
        <div className="w-full h-[380px] sm:h-[460px] md:h-[540px] overflow-hidden">
          <img
            src="/images/reach-out-team-banner.webp"
            alt="Indiabridge Team Ready to Execute"
            loading="lazy"
            className="block w-full h-full object-cover object-[center_46%]"
          />
        </div>

        {/* Floating Card Overlay - positioned at the TOP of the banner */}
        <div className="absolute top-0 left-0 w-full pointer-events-none z-20">
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 relative">
            <div className="absolute top-[-70px] right-6 md:right-12 z-20 w-[calc(100%-48px)] sm:w-[320px] md:w-[340px] rounded-sm overflow-hidden shadow-2xl bg-white pointer-events-auto">
              {/* Red "Get in touch" Header */}
              <Link
                href="/contact"
                className="w-full h-[70px] bg-[#f9452c] text-white px-7 flex items-center justify-between font-semibold text-[21px] sm:text-[22px] tracking-tight hover:bg-[#e03820] transition-colors group"
              >
                <span>Get in touch</span>
                <svg
                  className="w-[21px] h-[21px] text-white shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 4v8a1 1 0 0 0 1 1h9" />
                  <polyline points="12 9 16 13 12 17" />
                </svg>
              </Link>

              {/* Contact Details Body - Vertically Stacked to Match Reference */}
              <div className="w-full p-7 sm:p-8 space-y-7 sm:space-y-8 bg-white">
                {/* Email */}
                <div>
                  <svg
                    className="w-6 h-6 sm:w-[25px] sm:h-[25px] text-neutral-800 mb-2.5 sm:mb-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="15" x="2" y="4.5" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a
                    href="mailto:info@terahaus.com"
                    className="block text-[16px] sm:text-[17px] text-neutral-900 font-normal hover:text-[#f9452c] transition-colors leading-tight"
                  >
                    info@terahaus.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <svg
                    className="w-6 h-6 sm:w-[25px] sm:h-[25px] text-neutral-800 mb-2.5 sm:mb-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a
                    href="tel:+919925007371"
                    className="block text-[16px] sm:text-[17px] text-neutral-900 font-normal hover:text-[#f9452c] transition-colors leading-tight"
                  >
                    +91 99250 07371
                  </a>
                </div>

                {/* Address */}
                <div>
                  <svg
                    className="w-6 h-6 sm:w-[25px] sm:h-[25px] text-neutral-800 mb-2.5 sm:mb-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                    <line x1="9" x2="9" y1="3" y2="18" />
                    <line x1="15" x2="15" y1="6" y2="21" />
                  </svg>
                  <div className="text-[16px] sm:text-[17px] text-neutral-900 font-normal leading-snug">
                    57 Undergrond,<br />
                    Chelsea St, London, UK
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
