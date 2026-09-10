'use client';

import React, { useState } from 'react';
import { Footer } from '@/components/layout/Footer';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'greenfield',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <main>
        {/* CONTACT HERO */}
        <section className="relative min-h-[55vh] flex items-end pb-16 pt-36 bg-[#111112] text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30 mix-blend-multiply overflow-hidden">
            <img
              src="/images/marquee-industrial-logistics.webp"
              alt="Industrial Manufacturing Campus"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
            <div className="reveal-on-scroll max-w-4xl">
              <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-white/80 mb-6">
                <span className="indicator-dot"></span> REACH OUT / BUILT FOR BOARDS, OPERATORS, AND INVESTORS
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.05] mb-6">
                Connect with an India execution partner.
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
                Whether you are evaluating India as a manufacturing base, planning a factory build-out,
                stabilizing operations, or navigating execution risk, we are ready to engage. We work with
                leadership teams who need clarity, accountability, and outcomes, not generic advice.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT FORM & CHANNELS */}
        <section className="py-20 md:py-32 bg-surface-primary">
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
              {/* Left Column: Direct Channels */}
              <div className="bg-white rounded-3xl border border-borderLine-subtle p-8 sm:p-10 shadow-card flex flex-col gap-8 reveal-on-scroll">
                <div>
                  <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-ink-secondary mb-4">
                    <span className="indicator-dot"></span> DIRECT CHANNELS
                  </div>
                  <div className="text-sm font-mono uppercase tracking-wider text-ink-muted mb-1">
                    Engagements & Active Mandates
                  </div>
                  <a
                    href="mailto:sales@terahaus.com"
                    className="text-lg font-medium text-ink-primary hover:text-accent transition-colors block mb-1"
                  >
                    sales@terahaus.com
                  </a>
                  <div className="text-sm text-ink-secondary leading-relaxed">
                    For active India entry programs, factory builds, BOT models, and brownfield acquisitions.
                  </div>
                </div>

                <div className="border-t border-borderLine-subtle pt-6">
                  <div className="text-sm font-mono uppercase tracking-wider text-ink-muted mb-1">
                    General & Advisory Enquiries
                  </div>
                  <a
                    href="mailto:support@terahaus.com"
                    className="text-lg font-medium text-ink-primary hover:text-accent transition-colors block mb-1"
                  >
                    support@terahaus.com
                  </a>
                  <div className="text-sm text-ink-secondary leading-relaxed">
                    For initial exploratory discussions, state incentive overviews, and capability deep-dives.
                  </div>
                </div>

                <div className="border-t border-borderLine-subtle pt-6">
                  <div className="text-sm font-mono uppercase tracking-wider text-ink-muted mb-1">
                    Direct Executive Hotline
                  </div>
                  <a
                    href="tel:+919925007371"
                    className="text-lg font-medium text-ink-primary hover:text-accent transition-colors block mb-1"
                  >
                    +91 99250 07371
                  </a>
                  <div className="text-sm text-ink-secondary leading-relaxed">
                    Monday – Friday: 08:00 – 19:00 IST. Direct routing to partner on call.
                  </div>
                </div>

                <div className="border-t border-borderLine-subtle pt-6">
                  <div className="text-sm font-mono uppercase tracking-wider text-ink-muted mb-1">
                    Corporate Headquarters
                  </div>
                  <p className="text-base font-medium text-ink-primary leading-relaxed">
                    Indiabridge Capital Partners<br />
                    Industrial Operations Practice<br />
                    Mumbai & Ahmedabad Corridors, India
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Form */}
              <div className="bg-white rounded-3xl border border-borderLine-subtle p-8 sm:p-12 shadow-card reveal-on-scroll">
                <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-accent font-semibold mb-2">
                  <span className="indicator-dot"></span> PROJECT INTAKE
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium text-ink-primary tracking-tight mb-8">
                  Start a Confidential Dialogue
                </h2>

                <form id="advisoryContactForm" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="formName" className="block text-sm font-medium text-ink-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="formName"
                      required
                      placeholder="e.g. David Mueller"
                      className="w-full px-4 py-3.5 rounded-xl border border-borderLine-subtle bg-surface-primary text-ink-primary placeholder:text-ink-muted/60 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all text-base"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="formEmail" className="block text-sm font-medium text-ink-primary mb-2">
                      Business E-mail *
                    </label>
                    <input
                      type="email"
                      id="formEmail"
                      required
                      placeholder="e.g. david.mueller@globalprecision.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-borderLine-subtle bg-surface-primary text-ink-primary placeholder:text-ink-muted/60 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all text-base"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="formCompany" className="block text-sm font-medium text-ink-primary mb-2">
                      Company & Industry
                    </label>
                    <input
                      type="text"
                      id="formCompany"
                      placeholder="e.g. Mueller Precision GmbH — Automotive Powertrains"
                      className="w-full px-4 py-3.5 rounded-xl border border-borderLine-subtle bg-surface-primary text-ink-primary placeholder:text-ink-muted/60 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all text-base"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="formType" className="block text-sm font-medium text-ink-primary mb-2">
                      Primary Engagement Scope
                    </label>
                    <select
                      id="formType"
                      className="w-full px-4 py-3.5 rounded-xl border border-borderLine-subtle bg-surface-primary text-ink-primary focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all text-base cursor-pointer"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                      <option value="greenfield">Greenfield Factory Design & Build</option>
                      <option value="bot">Build-Operate-Transfer (BOT) Stabilization</option>
                      <option value="advisory">India Market Entry & Location Selection</option>
                      <option value="localization">Engineering & Supply Chain Localization</option>
                      <option value="ma">Brownfield, JV & Distressed Asset Acquisition</option>
                      <option value="other">Other Operational Governance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="formMessage" className="block text-sm font-medium text-ink-primary mb-2">
                      Project Scope or Inquiries *
                    </label>
                    <textarea
                      id="formMessage"
                      rows={4}
                      required
                      placeholder="Briefly describe your proposed product lines, timeline, expected CAPEX range, or current execution roadblocks..."
                      className="w-full px-4 py-3.5 rounded-xl border border-borderLine-subtle bg-surface-primary text-ink-primary placeholder:text-ink-muted/60 focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all text-base resize-y"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white text-base font-medium shadow-[0_4px_14px_rgba(249,69,44,0.28)] hover:shadow-[0_6px_20px_rgba(249,69,44,0.4)] transition-all cursor-pointer group"
                  >
                    <span>Send message</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">↳</span>
                  </button>

                  <p className="text-xs text-ink-muted leading-relaxed pt-2">
                    <strong>Statutory & Advisory Disclaimer:</strong> Site evaluations, capital expenditure
                    projections, state industrial incentives (PLI/Capital Subsidies), and environmental
                    clearances (EC/CTE/CTO) are determined project-by-project under applicable state industrial
                    policies. Indiabridge Capital Partners acts as an independent execution advisor and
                    client-side project governance partner.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FEEDBACK MODAL */}
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

          <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-medium text-ink-primary mb-3">Enquiry Dispatched</h3>
            <p className="text-base text-ink-secondary leading-relaxed mb-8">
              Thank you for submitting your India industrial project details. A senior Indiabridge practice partner
              will review your notes and respond within one business day.
            </p>
            <button
              className="w-full py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-medium text-base transition-colors cursor-pointer"
              onClick={() => setIsSubmitted(false)}
            >
              Return to Site
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
