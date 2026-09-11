'use client';

import React, { useState } from 'react';
import { Footer } from '@/components/layout/Footer';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <main className="relative bg-white overflow-x-clip text-[#101012]">
        {/* ========================================================= */}
        {/* 1. OPENING CONTACT HERO: CINEMATIC FULL-WIDTH IMAGE       */}
        {/* ========================================================= */}
        <section className="sticky top-0 left-0 w-full h-screen h-[100dvh] flex flex-col justify-between bg-[#0b1419] z-[1] overflow-hidden animate-hero-curtain">
          {/* Background Image: Diverse Architecture & Manufacturing Team around Technical Drawings */}
          <div className="absolute inset-0 z-[1] overflow-hidden">
            <img
              src="/images/4.webp"
              alt="Indiabridge Architecture and Industrial Consultancy Team"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Darkened Overlay for Maximum Typography Readability */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-black/90 via-black/50 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-black/25"
              aria-hidden="true"
            />
          </div>

          {/* Very Thin Vertical Grid Lines Over Image */}
          <div className="pointer-events-none absolute inset-0 z-[2] flex justify-center" aria-hidden="true">
            <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-3 h-full">
              <div className="border-r border-white/15 h-full" />
              <div className="border-r border-white/15 h-full" />
              <div className="h-full" />
            </div>
          </div>

          {/* Top spacer for navbar clearance */}
          <div className="relative z-[3] w-full pt-24" />

          {/* Lower Section: Scroll Cue (Lower-Left) + Oversized "Get in touch" (Bottom-Right) */}
          <div className="relative z-[3] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pb-8 sm:pb-12 md:pb-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            {/* Small Downward Arrow Scroll Cue (Lower-Left) */}
            <button
              type="button"
              onClick={() => {
                const target = document.getElementById('contact-details');
                target?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors cursor-pointer select-none text-xs font-mono uppercase tracking-[0.2em] pb-2 sm:pb-4 group"
              aria-label="Scroll to contact information"
            >
              <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white/40 flex items-center justify-center transition-colors">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-bounce"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </div>
              <span className="opacity-80 group-hover:opacity-100 transition-opacity">Scroll</span>
            </button>

            {/* Oversized Headline (Bottom-Right) */}
            <h1
              className="text-white font-medium tracking-[-0.04em] sm:tracking-[-0.045em] leading-[0.92] text-left sm:text-right text-[clamp(3.5rem,9vw,136px)] select-none [backface-visibility:hidden] animate-hero-headline"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontFeatureSettings: "'cv05' on, 'cv11' on",
              }}
            >
              Get in touch
            </h1>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. CONTACT INFORMATION & FORM SECTION (OFF-WHITE CANVAS)  */}
        {/* ========================================================= */}
        <div id="contact-details" className="content-curtain relative z-10 bg-[#fafafa]">
          <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden">
            {/* Faint Architectural Blueprint Drawing Watermark on the Left */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-start justify-start overflow-hidden" aria-hidden="true">
              <img
                src="/images/wireframe-building-sketch.png"
                alt=""
                className="w-[680px] sm:w-[860px] lg:w-[1020px] max-w-none opacity-[0.06] object-contain select-none -translate-x-[12%] pt-8 pointer-events-none"
              />
            </div>

            {/* Three Continuous Thin Vertical Guide Lines */}
            <div className="pointer-events-none absolute inset-0 z-[1] flex justify-center" aria-hidden="true">
              <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-3 h-full">
                <div className="border-r border-black/[0.05] h-full" />
                <div className="border-r border-black/[0.05] h-full" />
                <div className="h-full" />
              </div>
            </div>

            {/* Main Content: Two-Column Editorial Layout */}
            <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-[36%_1fr] gap-12 lg:gap-16 items-start">
                {/* -------------------------------------------------- */}
                {/* LEFT COLUMN: Reach Out Indicator + Fieldwork Image */}
                {/* -------------------------------------------------- */}
                <div className="flex flex-col items-start reveal-on-scroll">
                  {/* Small Red Circular Marker + "Reach out" Label (Sole Red Accent on Page) */}
                  <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-[#111112]/80 mb-6 select-none">
                    <span className="indicator-dot" />
                    <span>Reach out</span>
                  </div>

                  {/* Small Portrait / Field-work Image */}
                  <div className="relative w-52 sm:w-60 aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-black/10 mb-6 bg-white">
                    <img
                      src="/images/contact-field-director.jpg"
                      alt="Indiabridge Field Director & Project Engineers"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Supporting Prompt Text */}
                  <p className="text-xl sm:text-2xl font-medium text-[#111112] tracking-tight leading-snug max-w-xs">
                    Have a project in mind? Let us know how we can help.
                  </p>
                </div>

                {/* -------------------------------------------------- */}
                {/* RIGHT COLUMN: Headline + Copy + Form + Enquiries   */}
                {/* -------------------------------------------------- */}
                <div className="flex flex-col reveal-on-scroll">
                  {/* Headline */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111112] leading-[1.08] mb-3">
                    Connect with an India<br className="hidden sm:inline" /> execution partner
                  </h2>

                  {/* Supporting Label (Monochrome per restrained palette instruction) */}
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#71717a] font-medium mb-6 block">
                    Built for boards, operators, and investors
                  </span>

                  {/* Body Copy */}
                  <div className="space-y-4 text-base sm:text-lg text-[#55555e] leading-relaxed max-w-xl mb-10 sm:mb-12">
                    <p>
                      Whether you are evaluating India as a manufacturing base, planning a factory build-out, stabilizing operations, or navigating execution risk, we are ready to engage.
                    </p>
                    <p>
                      We work with leadership teams who need clarity, accountability, and outcomes, not generic advice.
                    </p>
                  </div>

                  {/* ------------------------------------------------ */}
                  {/* CONTACT FORM CARD                                */}
                  {/* ------------------------------------------------ */}
                  <div className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
                    <p className="text-lg sm:text-xl font-medium text-[#111112] mb-8">
                      Leave us a message here, and we’ll reach out with personalised support.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Side-by-side inputs: Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-mono uppercase tracking-wider text-[#71717a]">
                            Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#f6f6f8] border border-black/[0.08] rounded-xl px-4 py-3.5 text-sm text-[#111112] placeholder:text-[#999] focus:outline-none focus:border-black transition-colors"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-mono uppercase tracking-wider text-[#71717a]">
                            E-mail
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#f6f6f8] border border-black/[0.08] rounded-xl px-4 py-3.5 text-sm text-[#111112] placeholder:text-[#999] focus:outline-none focus:border-black transition-colors"
                          />
                        </div>
                      </div>

                      {/* Larger Message Field */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#71717a]">
                          Message
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Leave your message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-[#f6f6f8] border border-black/[0.08] rounded-xl px-4 py-3.5 text-sm text-[#111112] placeholder:text-[#999] focus:outline-none focus:border-black transition-colors resize-y"
                        />
                      </div>

                      {/* Full-width Black Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-4 rounded-full bg-[#111112] hover:bg-black text-white text-base font-medium transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
                      >
                        <span>Send message</span>
                        <span className="transition-transform duration-200 group-hover:translate-x-1">↳</span>
                      </button>
                    </form>

                    {/* ---------------------------------------------- */}
                    {/* PROJECT ENQUIRY DETAILS (2 COMPACT COLUMNS)     */}
                    {/* ---------------------------------------------- */}
                    <div className="mt-10 sm:mt-12 pt-8 border-t border-black/[0.08]">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-[#111112] mb-5">
                        Project enquiries at:
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* First enquiry */}
                        <div className="p-5 rounded-2xl bg-[#f6f6f8] border border-black/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-sm font-medium text-[#111112] mb-1">
                              General and advisory enquiries
                            </div>
                            <a
                              href="mailto:support@terahaus.com"
                              className="text-xs sm:text-sm font-mono text-[#111112] hover:text-[#55555e] underline underline-offset-4 decoration-black/20 hover:decoration-black block mb-2 font-medium transition-colors"
                            >
                              support@terahaus.com
                            </a>
                          </div>
                          <p className="text-xs text-[#66666e] leading-relaxed">
                            For initial discussions, capability overview, and engagement models
                          </p>
                        </div>

                        {/* Second enquiry */}
                        <div className="p-5 rounded-2xl bg-[#f6f6f8] border border-black/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-sm font-medium text-[#111112] mb-1">
                              Engagements and mandates
                            </div>
                            <a
                              href="mailto:sales@terahaus.com"
                              className="text-xs sm:text-sm font-mono text-[#111112] hover:text-[#55555e] underline underline-offset-4 decoration-black/20 hover:decoration-black block mb-2 font-medium transition-colors"
                            >
                              sales@terahaus.com
                            </a>
                          </div>
                          <p className="text-xs text-[#66666e] leading-relaxed">
                            For active India entry, factory execution, BOT, JV, M&A, and brownfield advisory
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Confirmation Feedback Modal */}
      {isSubmitted && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
            onClick={() => setIsSubmitted(false)}
          />

          <div className="relative z-10 w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-[#111112]/5 text-[#111112] flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-medium text-[#111112] mb-3">Message Dispatched</h3>
            <p className="text-sm text-[#55555e] leading-relaxed mb-8">
              Thank you for reaching out. An Indiabridge industrial practice partner will review your project details and respond within one business day.
            </p>
            <button
              className="w-full py-3.5 rounded-full bg-[#111112] hover:bg-black text-white font-medium text-sm transition-colors cursor-pointer"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
              }}
            >
              Return to Page
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer />
    </>
  );
}
