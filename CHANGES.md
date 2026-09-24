# Pre-Launch Audit Changelog — Indiabridge Capital Partners

This document details all content, SEO, UX, legal, and accessibility modifications implemented during the pre-launch audit for the Indiabridge Capital Partners website (`indiabridge.vercel.app` → `indiabridge.com`).

---

## Phase 1: Centralized Single Source of Truth

### File: `src/lib/constants.ts`
- **Created `siteFacts`**: Unified data architecture defining corporate branding, URLs, contact details, physical addresses, legal registration statuses, verified operational statistics, and feature gating flags.
- **Removed Unverified Data**: Removed `®` registered trademark symbol from brand references pending trademark registration certificate.
- **Gating Architecture**: Configured three critical feature flags:
  - `showProjects: false`: Prevents public access to unverified residential/commercial UK/NL projects until real India manufacturing case studies are delivered.
  - `showTestimonials: false`: Gates the testimonial slider until real, written client approvals are executed.
  - `showLeadership: false`: Suppresses generic/fabricated team cards on the About page until verified executive bios and headshots are provided.
- **Dual Mailbox Standards**: Defined `inquiries@indiabridgecp.com` (general enquiries) and `partners@indiabridgecp.com` (mandates and enterprise engagements).
- **Verified Headquarters**: Configured verified Mumbai operations headquarters (Level 14, Tower 2, One International Centre, Senapati Bapat Marg, Mumbai 400013) and flagged the London liaison address as unconfirmed (`isConfirmed: false`).

---

## Phase 2: Content Gating, Claims Moderation, British English & Data Synchronization

### 1. Projects Routing & Detail Pages
- **`src/app/projects/page.tsx`**: Gated behind `siteFacts.features.showProjects`. Calls `notFound()` when false, preventing public indexation of template architecture projects.
- **`src/app/projects/[slug]/page.tsx`**: Gated behind `siteFacts.features.showProjects` (`notFound()` fallback). Removed fabricated Indian team names (`Vikramaditya Shah`, `Julian Park`, `Aisha Rahman`, `Rajesh Nair`) and replaced with functional practice groups (`Indiabridge CleanTech & Operations Team`). Corrected American spelling (`localization` → `localisation`, `specialized` → `specialised`).
- **`src/app/projects/ProjectsClient.tsx`**: Updated headline from residential architectural copy (`"Architecture shaped with intention"`) to industrial focus (`"Industrial facilities built with discipline"`). Added `alt=""` to decorative background watermarks.

### 2. Home Page Components
- **`src/components/home/ProblemSection.tsx`**: Initialized stat counters directly from `siteFacts.stats` (`25+` years experience, `86+` completed projects) so initial server-rendered HTML displays real numbers rather than `0`. Removed unverified `98%` client satisfaction metric, switching layout to a balanced 2-column format. Added `prefers-reduced-motion` check to prevent jitter. Corrected British spelling (`stabilise`). Set `alt=""` on watermark illustration.
- **`src/components/home/SolutionSection.tsx`**: Dynamically routes the bottom CTA to `/contact` ("Initiate a Mandate") when `showProjects` is false, eliminating dead links to gated `/projects`.
- **`src/components/home/HeroFullscreen.tsx`**: Moderated absolute corporate claims (`"and de-risked"` → `"and built to reduce risk"`; `"without execution risk"` → `"sustainably while significantly reducing execution risk"`).
- **`src/components/home/AdvantageSection.tsx`**: Softened blanket guarantees (`"Indiabridge stays accountable until operations work"` → `"Indiabridge remains hands-on through operational ramp-up"`). Set `alt=""` on decorative arch vectors and sketch watermarks.
- **`src/components/home/WhyIndiaSection.tsx`**: Replaced absolute phrasing (`"Supply chains are de-risking"` → `"Supply chains are diversifying"`). Added client citation comments.
- **`src/components/home/TestimonialSection.tsx`**: Gated behind `siteFacts.features.showTestimonials` (returns `null` when false).
- **`src/components/home/FAQSection.tsx`**: Changed decorative blueprint watermark `alt` attribute to `alt=""`.
- **`src/components/home/BlogPreview.tsx`**: Rewrote introductory template text (`"We share insights on design, planning..."` → `"Perspectives on industrial execution, plant commissioning, and supply chain localisation across India."`).
- **`src/components/home/EngagementSection.tsx`**: Re-routed primary action button from `/about` ("More about us") to `/contact` ("Discuss Engagement Models").

### 3. Data Store & Global Copy
- **`src/lib/data.ts`**: Replaced generic slogan `"Zero Theoretical Fluff"` with `"Tested Execution"`. Synchronized all blog slugs to exact live routes (`why-india-manufacturing-projects-fail`, `everyone-advises-no-one-owns`, `china-plus-one-decision-not-strategy`, `india-punishes-assumptions`, `commissioning-is-not-success`). Standardized British spelling across principles and methodology descriptions.

### 4. About & Values Pages
- **`src/app/about/AboutClient.tsx`**: Structured typed `LEADERSHIP_TEAM` scaffold gated behind `siteFacts.features.showLeadership`. Fixed decorative watermark `alt=""`. Standardized British spelling (`stabilisation`).
- **`src/app/values/ValuesClient.tsx`**: Moderated claim `"zero ambiguity"` to `"clear operational alignment"`. Fixed watermark `alt=""`. Standardized British spelling (`stabilisation`).
- **`src/app/values/page.tsx`**: Added full OpenGraph, Twitter, and canonical metadata with `locale: 'en_IN'`.

### 5. Perspectives / Blog Pages
- **`src/app/blog/page.tsx` & `src/app/blog/BlogClient.tsx`**: Standardized British English throughout (`stabilisation`, `programme`). Assigned dedicated high-resolution industrial photography assets. Added full OpenGraph, Twitter, and canonical metadata.
- **`src/app/blog/[slug]/page.tsx`**: Enhanced dynamic metadata with route-specific OpenGraph and Twitter cards, canonical tags, and verified fallback routing.

---

## Phase 3: Links, Social & Navigation

### 1. Navigation Components
- **`src/components/layout/Navbar.tsx`**: Conditionally filters out the `/projects` navigation item when `siteFacts.features.showProjects` is `false`, ensuring zero 404 links in the main navigation.
- **`src/components/layout/DrawerNav.tsx`**: Synchronized slide-out navigation to respect `showProjects` feature gating. Replaced static template emails and phone numbers with dynamic `siteFacts.contact` bindings. Bound social links directly to company-specific profiles (`linkedin.com/company/indiabridge-capital-partners`, `x.com/indiabridgecp`).

### 2. Footer Component
- **`src/components/layout/Footer.tsx`**: Corrected punctuation error (`"Lets talk"` → `"Let's talk"`). Conditionally excluded `/projects` link and Case Studies block when `showProjects` is false. Added links to `/privacy` and `/terms`. Integrated company registration status placeholder (`siteFacts.legal.indiaRegistrationNumber`). Set `alt=""` on decorative footer thumbnail.

---

## Phase 4: SEO, Structured Data, Robots & Sitemap

### 1. Root Layout (`src/app/layout.tsx`)
- Changed `openGraph.locale` from `'en_US'` to `'en_IN'`.
- Updated default `og:image` from residential preview image (`/images/project-01-hero-setas.jpg`) to enterprise industrial asset (`siteFacts.urls.ogImage`: `/images/marquee-industrial-logistics.webp`).
- Added dynamic noindex/nofollow robots directive when operating on `.vercel.app` preview environments to protect indexing integrity.
- Embedded complete `Organization` JSON-LD schema referencing confirmed Mumbai headquarters, official emails, telephone numbers, and social profiles.

### 2. Home Page (`src/app/page.tsx`)
- Updated title to `"Indiabridge Capital Partners | India Manufacturing Entry & Execution"`.
- Added OpenGraph, Twitter, and canonical metadata.
- Embedded `FAQPage` JSON-LD structured data mapping all 4 enterprise questions and answers for Google Rich Results.

### 3. Robots & Sitemap
- **`src/app/robots.ts`**: Configured environment detection: outputs `disallow: '/'` on preview and Vercel domains; outputs `allow: '/'` with sitemap reference on production domain.
- **`src/app/sitemap.ts`**: Dynamically includes all active routes (`/`, `/about`, `/values`, `/blog` + 5 article slugs, `/contact`, `/privacy`, `/terms`). Conditionally suppresses `/projects` and detail URLs while `showProjects` is false.

---

## Phase 5: Image Assets & Filename Sanitization

- **Unused Files with Spaces Removed**: Safely removed four unreferenced image files from `public/images/`:
  - `Black Full.png`
  - `Black Sub.png`
  - `White Full.png`
  - `White Sub.png`
  Verified that standard URL-safe assets (`logo-black.png` and `logo-white.png`) remain in place.
- **Accessibility Audit on Decorative Watermarks**: Replaced generic or descriptive `alt` texts on background sketch/blueprint watermarks (`wireframe-building-sketch.png`) with `alt=""` across all pages (`FAQSection`, `ContactClient`, `AboutClient`, `ValuesClient`, `ProjectsClient`, `AdvantageSection`).

---

## Phase 6: Contact Experience & Enquiry Validation

### 1. `src/components/contact/ContactForm.tsx`
- **Rebuilt with Zod & React Hook Form**: Fully validated enterprise contact form component.
- **Required Fields Added**:
  - Full Name
  - Corporate E-mail
  - Company & Industry
  - Primary Engagement Scope (Dropdown: India Entry Strategy, Factory Design & Build, BOT Operational Ramp-Up, JV & M&A Due Diligence, Supplier Localisation, Other Turnkey Execution)
  - Brief Project Scope / Outline
- **Optional Direct Phone**: Added optional phone/WhatsApp input.
- **Honeypot Bot Trap**: Added invisible `honeypot` field (`tabIndex={-1}`, `autoComplete="off"`, `className="hidden"`, `aria-hidden="true"`). Submissions with content in this field are discarded silently.
- **Privacy Policy Consent**: Added mandatory consent checkbox linking directly to `/privacy`.
- **Accessible State Handling**: Includes clear validation errors, loading/submitting button state, and an accessible success modal dialog.

### 2. `src/app/contact/ContactClient.tsx`
- Embedded new `<ContactForm />` component.
- Displayed verified Project Enquiry cards for `inquiries@indiabridgecp.com` (general) and `partners@indiabridgecp.com` (mandates).
- Displayed confirmed Mumbai Headquarters and Direct Industrial Desk (`+91 99250 07371`).
- Standardized British spelling (`stabilising`).

### 3. `src/app/contact/page.tsx`
- Configured complete OpenGraph, Twitter, and canonical metadata with `en_IN` locale.

---

## Phase 7: Legal Compliance & Draft Policy Pages

### 1. Privacy Policy (`src/app/privacy/page.tsx` & `PrivacyClient.tsx`)
- Created full privacy disclosure covering:
  - India Digital Personal Data Protection Act, 2023 (DPDP Act)
  - UK General Data Protection Regulation (UK GDPR) / Data Protection Act 2018
  - Data Controller identity and verified Mumbai Headquarters
  - Specific corporate data collected and processing grounds (legitimate interest, consent, legal compliance)
  - Cross-border data transfer safeguards (TLS 1.3 encryption, IDTAs)
  - Data retention guidelines
  - Statutory Data Subject rights (access, correction, withdrawal, erasure)
  - Designated Grievance Officer contact details
- Prominent draft callout banner: `[DRAFT — For Legal Review Only]`.

### 2. Terms of Use & Legal Disclaimer (`src/app/terms/page.tsx` & `TermsClient.tsx`)
- Created comprehensive terms governing:
  - Informational nature of the platform
  - Clarification that website use does not create an advisor-client relationship (MSA/SOW required)
  - Statutory disclaimers regarding state subsidies, PLI, and environmental clearances
  - Intellectual property rights for methodology and content
  - Limitation of liability
  - Governing law (Courts of Mumbai, Maharashtra, India)
- Prominent draft callout banner: `[DRAFT — For Legal Review Only]`.
