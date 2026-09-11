'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQ_ITEMS } from '@/lib/data';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-20 md:py-32 bg-[#F5F5F5] overflow-hidden border-y border-black/25" id="faq">
      {/* Background Architectural Wireframe Illustration anchored to the left/bottom */}
      <div
        aria-hidden="true"
        className="absolute left-[-4%] sm:left-[-2%] md:left-[0%] lg:left-[2%] bottom-[-5%] w-[550px] sm:w-[700px] md:w-[850px] lg:w-[950px] pointer-events-none select-none opacity-[0.14] mix-blend-multiply z-0"
      >
        <img
          src="/images/wireframe-building-sketch.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr] gap-12 lg:gap-20 xl:gap-28 items-start">
          {/* Left Column: Frameless Eyebrow, Avatar, Copy & Button */}
          <div className="flex flex-col items-start pt-1">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-[15px] font-normal text-ink-primary mb-10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f9452c] shrink-0 inline-block" />
              <span>FAQ</span>
            </div>

            {/* Engineer Avatar */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-white shadow-sm mb-6 border border-black/5">
              <img
                src="/images/faq-support-avatar.webp"
                alt="Indiabridge Team"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Headline */}
            <div className="text-[17px] sm:text-[18px] text-ink-secondary leading-snug mb-8 font-normal">
              Have more questions?<br />
              Our team is happy to help.
            </div>

            {/* "Get in touch" Button with All Articles Pill Effect */}
            <Link
              href="/contact"
              className="relative overflow-hidden inline-flex items-center gap-3 p-1.5 pr-6 rounded-full bg-white border border-black/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97] group cursor-pointer w-fit shadow-sm"
            >
              {/* Orange Fill Bar that swipes/expands across the entire pill from the left */}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[#f9452c] rounded-full scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />

              {/* Circular Arrow Badge */}
              <span className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f9452c] group-hover:bg-white text-white group-hover:text-[#f9452c] flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 shadow-sm">
                <span className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                  {/* Primary arrow slides out right */}
                  <svg
                    className="w-4 h-4 absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-5 group-hover:opacity-0"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                  {/* Secondary arrow slides in from left */}
                  <svg
                    className="w-4 h-4 absolute inset-0 -translate-x-5 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </span>

              {/* Rolling Text Reel (Transitions to crisp white on hover) */}
              <span className="relative z-10 overflow-hidden inline-flex flex-col h-[20px] text-[15px] font-medium text-ink-primary group-hover:text-white leading-[20px] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {/* Primary text rolls up and out */}
                <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                  Get in touch
                </span>
                {/* Duplicate text rolls up into view from below */}
                <span className="absolute top-0 left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0">
                  Get in touch
                </span>
              </span>
            </Link>
          </div>

          {/* Right Column: Large Heading & Clean Accordion */}
          <div className="w-full">
            <h2 className="text-4xl sm:text-5xl md:text-[62px] lg:text-[72px] font-medium tracking-tight text-ink-primary leading-[1.02] mb-12 sm:mb-16">
              Frequently asked<br />
              questions
            </h2>

            <div className="divide-y divide-black/25 border-b border-black/25">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={item.id} className="py-6 sm:py-8">
                    <button
                      className="w-full flex items-center justify-between text-left gap-6 cursor-pointer group"
                      aria-expanded={isOpen}
                      onClick={() => toggleFAQ(idx)}
                    >
                      <span className="text-lg sm:text-[21px] md:text-[22px] font-normal text-ink-primary tracking-tight leading-snug group-hover:text-black transition-colors">
                        {item.question}
                      </span>
                      {/* Circular Button with + / × - Enlarged with smooth, moderate 500ms rotation */}
                      <span className="w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full bg-white border border-black/8 flex items-center justify-center shrink-0 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-black/25 group-hover:scale-105 group-hover:shadow-md">
                        <span
                          className={`text-2xl sm:text-[26px] font-light leading-none text-ink-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isOpen ? 'rotate-45' : 'rotate-0'
                          }`}
                        >
                          +
                        </span>
                      </span>
                    </button>
                    {/* Smooth, moderate expanding container using grid-template-rows */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-5 pb-2 text-[15px] sm:text-[16px] text-[#1b1b1e] font-normal leading-[1.65] max-w-3xl">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
