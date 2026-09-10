import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'About Us | Indiabridge Capital Partners',
  description:
    'A specialized India-entry and industrial execution firm built for global manufacturers, boards, and industrial investors.',
};

export default function AboutPage() {
  return (
    <>
      <main>
        {/* ABOUT HERO */}
        <section className="relative min-h-[65vh] flex items-end pb-16 pt-36 bg-[#111112] text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30 mix-blend-multiply overflow-hidden">
            <img
              src="/images/testimonial-michael-thornton.webp"
              alt="Industrial Manufacturing Strategy"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
            <div className="reveal-on-scroll max-w-4xl">
              <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-white/80 mb-6">
                <span className="indicator-dot"></span> ABOUT US / ABOUT INDIABRIDGE®
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.05] mb-6">
                A specialized firm built to execute manufacturing in India.
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
                We work with boards, operators, and investors who understand that India is not a low-cost
                experiment, but a long-term manufacturing platform that demands disciplined planning and
                hands-on execution.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION & PHILOSOPHY NARRATIVE */}
        <section className="py-20 md:py-32 bg-surface-primary">
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
              <div className="reveal-on-scroll">
                <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-ink-secondary mb-6">
                  <span className="indicator-dot"></span> OUR DNA
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink-primary leading-[1.12]">
                  Bridging global intent with on-the-ground reality.
                </h2>
              </div>
              <div className="reveal-on-scroll text-base sm:text-lg text-ink-secondary leading-relaxed space-y-6">
                <p>
                  Indiabridge Capital Partners was established to eliminate the chronic execution gap in India
                  manufacturing entries. Too often, international corporations commission brilliant
                  multi-hundred-page strategy decks from conventional consultancies, only to face catastrophic
                  project delays, unexpected cost overruns, contractor mismanagement, and unachieved
                  production yields once ground is broken.
                </p>
                <p>
                  We operate differently. We are operators, engineers, and industrial governance leaders. We
                  assume full operational accountability from site identification and state incentive
                  negotiation through civil construction, equipment commissioning, vendor localization, and
                  shop-floor stabilization.
                </p>
              </div>
            </div>

            {/* 3-Photo Gallery Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 reveal-on-scroll">
              <div className="flex flex-col gap-3 group">
                <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-surface-subtle shadow-card">
                  <img
                    src="/images/why-india-02-manufacturing.webp"
                    alt="Heavy Machinery Precision"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                <div className="text-sm font-medium text-ink-primary">Operational Discipline</div>
              </div>
              <div className="flex flex-col gap-3 group">
                <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-surface-subtle shadow-card">
                  <img
                    src="/images/marquee-precision-assembly.webp"
                    alt="Factory Assembly Lines"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                <div className="text-sm font-medium text-ink-primary">Factory Build-Outs</div>
              </div>
              <div className="flex flex-col gap-3 group">
                <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-surface-subtle shadow-card">
                  <img
                    src="/images/service-01-market-entry.webp"
                    alt="Industrial Plant Commissioning"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                <div className="text-sm font-medium text-ink-primary">Steady-State Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* METHODOLOGY: 4 STAGES */}
        <section className="py-20 md:py-32 bg-[#111112] text-white border-y border-white/10">
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-white/75 mb-6 reveal-on-scroll">
              <span className="indicator-dot"></span> OUR METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.12] mb-14 reveal-on-scroll">
              Four Phases of Disciplined Execution
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-on-scroll">
              {/* Stage 1 */}
              <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 p-8 sm:p-10 flex flex-col justify-between">
                <div className="text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-4">
                  PHASE 01
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-white mb-4">Discovery & Strategy Alignment</h3>
                <p className="text-base text-white/70 leading-relaxed">
                  We work with boards and leadership teams to define India entry objectives, risk tolerance,
                  governance expectations, and success metrics before execution begins. We stress-test
                  assumptions on land, labor costs, supply chain depth, and lead times.
                </p>
              </div>

              {/* Stage 2 */}
              <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 p-8 sm:p-10 flex flex-col justify-between">
                <div className="text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-4">
                  PHASE 02
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-white mb-4">
                  Concept & Feasibility Development
                </h3>
                <p className="text-base text-white/70 leading-relaxed">
                  We translate intent into executable plans through rigorous feasibility studies, multi-state
                  location selection, incentive negotiation, statutory environmental compliance roadmaps, and
                  operating model designs grounded in Indian realities.
                </p>
              </div>

              {/* Stage 3 */}
              <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 p-8 sm:p-10 flex flex-col justify-between">
                <div className="text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-4">
                  PHASE 03
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-white mb-4">Industrial Design & Execution</h3>
                <p className="text-base text-white/70 leading-relaxed">
                  We oversee factory architectural design, engineering coordination, PMC and EPC governance,
                  and site construction control to ensure cost, schedule, and quality discipline. We manage
                  vendor bidding, contracts, and quality audits.
                </p>
              </div>

              {/* Stage 4 */}
              <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 p-8 sm:p-10 flex flex-col justify-between">
                <div className="text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-4">
                  PHASE 04
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-white mb-4">
                  Delivery, Stabilization & Support
                </h3>
                <p className="text-base text-white/70 leading-relaxed">
                  We remain engaged through plant ramp-up and operational stabilization, embedding local
                  leadership, standard operating procedures, ISO/IATF quality systems, and safety culture until
                  the operation performs reliably and predictably.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE PRINCIPLES */}
        <section className="py-20 md:py-32 bg-surface-primary">
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-ink-secondary mb-6 reveal-on-scroll">
              <span className="indicator-dot"></span> PRINCIPLES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink-primary leading-[1.12] mb-14 reveal-on-scroll">
              The Operating Commitments We Live By
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll">
              <div className="bg-white rounded-2xl border border-borderLine-subtle p-8 shadow-card flex flex-col">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-4">
                  01
                </span>
                <h3 className="text-xl font-medium text-ink-primary mb-3">Single Accountability</h3>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  No passing the blame between consultants, civil PMCs, and machine vendors. Indiabridge stands
                  accountable for the ultimate result.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-borderLine-subtle p-8 shadow-card flex flex-col">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-4">
                  02
                </span>
                <h3 className="text-xl font-medium text-ink-primary mb-3">Ground-Truth Reality</h3>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  We never sugarcoat on-the-ground challenges. We anticipate logistical friction, vendor
                  delays, and bureaucratic steps early.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-borderLine-subtle p-8 shadow-card flex flex-col">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-4">
                  03
                </span>
                <h3 className="text-xl font-medium text-ink-primary mb-3">Zero Theoretical Fluff</h3>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  Every recommendation is backed by working contracts, proven EPC vendor lists, and realistic
                  execution timelines.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-borderLine-subtle p-8 shadow-card flex flex-col">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-4">
                  04
                </span>
                <h3 className="text-xl font-medium text-ink-primary mb-3">Long-Term Value</h3>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  We build plants designed to operate for 30+ years, embedding industrial durability, scalable
                  power, and local supply resilience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 md:py-32 bg-surface-subtle border-t border-borderLine-subtle">
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="bg-white rounded-3xl border border-borderLine-subtle p-8 sm:p-14 md:p-16 text-center max-w-4xl mx-auto shadow-card reveal-on-scroll">
              <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-accent mb-6">
                <span className="indicator-dot"></span> DISCUSS YOUR EXPANSION
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink-primary leading-[1.15] mb-6">
                Explore how Indiabridge can de-risk your India entry.
              </h2>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-xl mx-auto mb-10">
                Schedule a confidential strategic session with our managing partners to review your proposed
                manufacturing timeline and footprint.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white text-base font-medium shadow-[0_4px_14px_rgba(249,69,44,0.28)] hover:shadow-[0_6px_20px_rgba(249,69,44,0.4)] transition-all cursor-pointer group"
              >
                <span>Contact Us Today</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">↳</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
