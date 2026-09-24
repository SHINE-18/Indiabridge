'use client';

import React from 'react';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { siteFacts } from '@/lib/constants';

export function TermsClient() {
  return (
    <>
      <main className="relative bg-white text-[#101012] min-h-screen pt-28 sm:pt-36 pb-20">
        <div className="w-full max-w-[900px] mx-auto px-6 sm:px-8 md:px-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-[#71717a] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f9452c] inline-block" />
            <span>Legal Governance</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111112] leading-[1.1] mb-6">
            Terms of Use &amp; Disclaimers
          </h1>

          {/* Last updated & status */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#71717a] border-b border-black/[0.08] pb-6 mb-10">
            <span>Effective Date: 24 September 2026</span>
            <span>•</span>
            <span>Version 1.0 (Pre-Launch Draft)</span>
          </div>

          {/* DRAFT WATERMARK / WARNING BANNER */}
          <div className="rounded-2xl bg-[#fff8f6] border border-[#f9452c]/25 p-6 sm:p-8 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-[#f9452c] text-xl font-bold leading-none shrink-0 mt-0.5">⚠️</span>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#f9452c] mb-2 font-mono">
                  [DRAFT — For Legal Review Only]
                </h2>
                <p className="text-xs sm:text-sm text-[#44444e] leading-relaxed">
                  These terms are provisional operational conditions prepared for Indiabridge Capital Partners. They outline the legal parameters regarding use of this website, intellectual property ownership, and advisory disclaimers. This text must be formally evaluated, adapted, and approved by qualified commercial solicitors before public enterprise deployment.
                </p>
              </div>
            </div>
          </div>

          {/* TERMS CONTENT */}
          <div className="space-y-10 text-sm sm:text-base text-[#44444e] leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or using the website of Indiabridge Capital Partners (&ldquo;Indiabridge&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our accompanying{' '}
                <Link href="/privacy" className="text-[#111112] underline underline-offset-2 hover:text-black font-medium">
                  Privacy Policy
                </Link>
                . If you do not accept these terms, you should immediately cease using this website.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                2. Nature of Platform &amp; No Advisor-Client Relationship
              </h2>
              <p>
                The materials, perspectives, articles, and methodology frameworks published on this website are provided strictly for general informational and educational purposes for corporate executives, investors, and industrial operators.
              </p>
              <p>
                Transmitting an enquiry through our contact forms or engaging in preliminary correspondence does not constitute or create a binding advisory, fiduciary, or legal relationship between you and Indiabridge. Formal advisory or project management engagements are established exclusively upon the mutual execution of a formal Master Services Agreement (MSA) or Statement of Work (SOW).
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                3. Statutory &amp; Regulatory Disclaimers
              </h2>
              <p>
                Industrial project parameters in India — including state capital subsidies, Production Linked Incentives (PLI), industrial land allotments, power tariffs, environmental permissions (CTE/CTO/EC), and factory inspectorate approvals — are governed by statutory authorities and evolving governmental notifications.
              </p>
              <p>
                While Indiabridge strives to ensure that published insights reflect verified ground realities, no representation or warranty (express or implied) is made as to the accuracy, completeness, or continuing applicability of statutory information. Clients must verify specific site parameters through project-specific due diligence.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                4. Intellectual Property Rights
              </h2>
              <p>
                All content, designs, graphics, wireframes, methodology structures, brand marks, and articles on this website are the proprietary intellectual property of Indiabridge Capital Partners and are protected under Indian and international copyright and trademark laws.
              </p>
              <p>
                You may not reproduce, modify, distribute, republish, or commercialise any portion of this material without prior express written permission from Indiabridge.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                5. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, Indiabridge Capital Partners, its partners, directors, employees, and advisors shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your access to, reliance upon, or inability to access this website;</li>
                <li>Any errors, omissions, or typographical inaccuracies in published articles or data;</li>
                <li>Third-party websites, tools, or links accessed via our platform.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                6. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the substantive laws of India. Any dispute, controversy, or claim arising out of or relating to these terms or use of the website shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra, India.
              </p>
              <p className="text-xs text-[#71717a]">
                For cross-border commercial contracts, specific choice-of-law and international arbitration clauses (such as SIAC, LCIA, or MCIA) will be defined in individual Master Services Agreements.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                7. Amendments &amp; Enquiries
              </h2>
              <p>
                We reserve the right to revise these Terms of Use at any time by posting an updated version on this page. Your continued use of the website following any update signifies your agreement to the modified terms.
              </p>
              <p>
                For questions regarding these Terms of Use, please reach out to our legal and governance practice:
              </p>
              <div className="p-4 sm:p-5 rounded-xl bg-[#f6f6f8] border border-black/[0.06] text-xs sm:text-sm font-mono text-[#111112] space-y-1">
                <p className="font-semibold">{siteFacts.brand.legalName}</p>
                <p>Email: {siteFacts.contact.generalEmail}</p>
                <p>Mandates Desk: {siteFacts.contact.partnersEmail}</p>
                <p>Location: {siteFacts.addresses.indiaHq.city}, India</p>
              </div>
            </section>
          </div>

          {/* Navigation CTA */}
          <div className="mt-16 pt-8 border-t border-black/[0.08] flex items-center justify-between">
            <Link
              href="/privacy"
              className="text-xs font-mono uppercase tracking-wider text-[#111112] hover:text-[#55555e] underline underline-offset-4 font-semibold"
            >
              ← Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-xs font-mono uppercase tracking-wider text-[#111112] hover:text-[#55555e] underline underline-offset-4 font-semibold"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default TermsClient;
