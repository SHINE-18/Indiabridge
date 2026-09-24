'use client';

import React from 'react';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { siteFacts } from '@/lib/constants';

export function PrivacyClient() {
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
            Privacy Policy
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
                  This document is an operational policy draft prepared for Indiabridge Capital Partners. It outlines data processing standards in accordance with India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act) and the UK General Data Protection Regulation (UK GDPR). This policy must be formally reviewed, approved, and registered by qualified legal counsel in India and the United Kingdom prior to formal commercial launch.
                </p>
              </div>
            </div>
          </div>

          {/* POLICY CONTENT */}
          <div className="space-y-10 text-sm sm:text-base text-[#44444e] leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                1. Overview and Data Controller
              </h2>
              <p>
                Indiabridge Capital Partners (&ldquo;Indiabridge&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates an industrial advisory and execution platform facilitating manufacturing investments, factory build-outs, and operational stabilisation across India.
              </p>
              <p>
                For the purposes of applicable data protection legislation, the primary data fiduciary/controller for commercial enquiries submitted through this website is:
              </p>
              <div className="p-4 sm:p-5 rounded-xl bg-[#f6f6f8] border border-black/[0.06] text-xs sm:text-sm font-mono text-[#111112] space-y-1">
                <p className="font-semibold">{siteFacts.brand.legalName}</p>
                <p>{siteFacts.addresses.indiaHq.street}</p>
                <p>{siteFacts.addresses.indiaHq.city}, {siteFacts.addresses.indiaHq.region} {siteFacts.addresses.indiaHq.postalCode}, {siteFacts.addresses.indiaHq.country}</p>
                <p>Enquiries: {siteFacts.contact.generalEmail}</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                2. Applicable Legal Frameworks
              </h2>
              <p>
                We process personal and corporate data in compliance with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>India:</strong> The Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable Information Technology Rules.
                </li>
                <li>
                  <strong>United Kingdom & Europe:</strong> The UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and EU GDPR principles regarding cross-border corporate communications.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                3. Information We Collect
              </h2>
              <p>
                We only collect data necessary to evaluate commercial advisory engagements and respond to inbound executive enquiries. Such information includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity & Contact Information:</strong> Full name, corporate email address, corporate telephone number, job title, and employer organisation.</li>
                <li><strong>Project & Operational Details:</strong> Proposed manufacturing lines, state preferences, target commissioning timelines, and technical requirements submitted in enquiry forms.</li>
                <li><strong>Technical & Browsing Data:</strong> Standard server logs, IP addresses, browser types, and anonymised analytics to ensure website security and performance.</li>
              </ul>
              <p>
                We do not collect sensitive personal data, payment cards, or consumer banking credentials through this website.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                4. Grounds and Purposes for Processing
              </h2>
              <p>
                We process information under the following lawful grounds:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Legitimate Commercial Interest & Pre-Contractual Steps:</strong> To review enterprise manufacturing briefs, assess industrial feasibility, prepare proposal responses, and schedule confidential exploratory dialogues.</li>
                <li><strong>Consent:</strong> Where you provide express consent by ticking the privacy agreement box upon submitting an enquiry.</li>
                <li><strong>Legal Compliance:</strong> To satisfy statutory record-keeping, anti-bribery, KYC, and regulatory reporting requirements under Indian and UK laws.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                5. Cross-Border Data Transfers
              </h2>
              <p>
                Because Indiabridge coordinates engagements between multinational headquarters (in Europe, North America, and East Asia) and Indian manufacturing sites, enquiry data may be transferred to and accessed by authorized personnel located in India and the United Kingdom.
              </p>
              <p>
                All cross-border transfers are conducted under industry-standard technical encryption (TLS 1.3) and strict organizational confidentiality obligations, adhering to the requirements of the DPDP Act 2023 and UK International Data Transfer Agreements (IDTAs).
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                6. Data Retention
              </h2>
              <p>
                Enquiry information submitted through our website is retained only as long as necessary to fulfill the commercial purpose for which it was collected or to comply with statutory audit obligations. Non-converted general inquiries are purged periodically, whilst mandate-related correspondence is archived in accordance with statutory corporate record schedules.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                7. Your Statutory Rights
              </h2>
              <p>
                Under applicable DPDP and UK GDPR provisions, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access a summary of personal data held about you and processing activities undertaken.</li>
                <li>Request correction, completion, or updating of inaccurate data.</li>
                <li>Withdraw consent previously granted for enquiry communication.</li>
                <li>Request erasure of personal data, subject to statutory retention obligations.</li>
                <li>Nominate an individual to exercise rights on your behalf in the event of death or incapacity (DPDP Act).</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111112]">
                8. Grievance Officer and Contacts
              </h2>
              <p>
                For data protection questions, grievance redressal, or to exercise your statutory rights, please contact our designated Grievance Officer:
              </p>
              <div className="p-4 sm:p-5 rounded-xl bg-[#f6f6f8] border border-black/[0.06] text-xs sm:text-sm font-mono text-[#111112] space-y-1">
                <p><strong>Designation:</strong> Data Protection & Grievance Lead</p>
                <p><strong>Email:</strong> {siteFacts.contact.generalEmail}</p>
                <p><strong>Desk Telephone:</strong> {siteFacts.contact.phone}</p>
                <p><strong>Postal Address:</strong> {siteFacts.addresses.indiaHq.street}, {siteFacts.addresses.indiaHq.city}, {siteFacts.addresses.indiaHq.region} {siteFacts.addresses.indiaHq.postalCode}, {siteFacts.addresses.indiaHq.country}</p>
              </div>
              <p className="text-xs text-[#71717a] pt-2">
                We endeavor to acknowledge and address all statutory grievances within thirty (30) days of receipt.
              </p>
            </section>
          </div>

          {/* Back to Contact CTA */}
          <div className="mt-16 pt-8 border-t border-black/[0.08] flex items-center justify-between">
            <Link
              href="/contact"
              className="text-xs font-mono uppercase tracking-wider text-[#111112] hover:text-[#55555e] underline underline-offset-4 font-semibold"
            >
              ← Return to Contact
            </Link>
            <Link
              href="/terms"
              className="text-xs font-mono uppercase tracking-wider text-[#111112] hover:text-[#55555e] underline underline-offset-4 font-semibold"
            >
              Terms of Engagement →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default PrivacyClient;

