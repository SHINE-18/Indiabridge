# Build Prompt — Corporate Landing Page (Next.js + Tailwind)

Paste this whole document into Antigravity as the task prompt. It replaces the raw Figma-plugin export — that export used invalid Tailwind classes (`text-color-black--70%`, `size-lf-stretch`), absolute-pixel positioning for a fixed 1920px canvas, and dozens of empty/duplicate wrapper divs. Build from this spec instead; it preserves the exact section order, copy, and layout intent, but as clean, responsive, real Tailwind.

## 1. Stack & structure

- Next.js (App Router) + TypeScript + Tailwind CSS.
- One `page.tsx` composed of section components under `components/sections/`, plus `components/Header.tsx` and `components/Footer.tsx`.
- Font: **Inter** (Google Fonts / `next/font`), weights 420–580 as noted per element below.
- Container: max-width **1600px**, centered, with `px-10` (2.5rem) side padding on desktop, `px-5` on mobile.
- Build mobile-first and responsive — the source design is a fixed 1920px desktop canvas, so below `lg` breakpoint: stack all multi-column rows to one column, scale down the display type sizes (see §3), and collapse the header nav into the existing hamburger menu button (it's already a menu-triggered pattern, not a bug to fix).

## 2. Color tokens

Add these to `tailwind.config` as named colors (swap in real hex values from your brand — these are the roles they play):

| Token | Role |
|---|---|
| `grey-7` | Primary near-black (dark section backgrounds, headline text) |
| `white-solid` | Pure white |
| `red-57` | Accent color — small square/dot bullets before eyebrow labels, primary CTA button fill |
| `grey-96` | Very light grey section background (FAQ section) |
| `grey-92` / `grey-79` | Hairline divider colors on light backgrounds |
| `grey-6` | Footer background (near-black) |
| `black--70%` / `black--62%` / `black--46%` | Muted body text on white backgrounds, decreasing opacity = lighter grey |
| `white--60%` / `white--75%` | Muted body text on dark backgrounds |
| `white--10%` / `white--24%` | Hairline dividers on dark backgrounds |

Rule of thumb used throughout: eyebrow labels and secondary copy on a light section use black at reduced opacity; on a dark section, use white at reduced opacity. Full-opacity `grey-7` / `white-solid` is reserved for headlines.

## 3. Typography scale

Map to Tailwind text sizes with Inter weight/line-height as shown (weight is the Framer variable value, use the nearest standard weight — 400/500/600 — if your pipeline doesn't support variable font weights):

| Use | Size / Leading | Weight |
|---|---|---|
| Footer giant wordmark ("BRAND") | 231px / 173px | 600 (Semi Bold) |
| Section super-headline (FAQ, Blog, Why-Now headings) | ~86–106px / ~81–91px | 500–600 |
| Stat numbers (25+, 86+, 95%) | 78px / 84px | 600 |
| H2 section headlines (most section titles) | 54px / 57px | 500 |
| H3 sub-headlines / feature-card titles | 36–42px / 40–45px | 500–600 |
| Eyebrow labels ("THE PROBLEM", "OUR ADVANTAGE", etc.) | 20px / 28px, uppercase, tracked | 500 |
| Body copy (paragraphs) | 20px / 28px | 420–450 |
| Small labels (nav, footer links, tags) | 16–18px / 22–25px | 440 |

Scale every one of these down roughly 40–50% on mobile (e.g. 54px headline → ~30px).

## 4. Global components

### Header
Sticky/fixed, transparent-over-hero becoming solid on scroll. Left: small logo mark. Right: two horizontal bars + the word "Menu" that opens a full nav overlay. Do not build out a full desktop nav bar — the source site intentionally uses a menu-button pattern at every width.

### Footer (dark, `grey-6`)
Three-column layout on desktop, stacked on mobile, separated by thin `white--10%` vertical/horizontal hairlines:
1. **Intro column** — one paragraph of brand description + a two-line CTA line ("Let's build something great. Get in touch today!").
2. **Contact column** — "Let's talk" label, phone number, email, then "Follow our socials" label with Instagram / Twitter (X) links.
3. **Nav column** — "Nav menu" label + link list: Home, Values, Blog, About us, Contact. (Drop the "Project (CMS)", "Blog (CMS)", "404", "More templates" links from the source — those are Framer-template scaffolding, not real site nav.)

Below the three columns: a small logo image, then a **huge full-width wordmark** of the brand name (see typography row above) as a decorative footer element.

⚠️ The source export has mismatched placeholder contact details (`info@terahaus.com` in one card, `hello@terahaus.com` in the footer, and two different phone numbers). Replace all of these with your actual single set of contact details — don't carry the placeholder mismatch forward.

## 5. Page sections, in order

### 5.1 Hero
Full-bleed dark background image/video with dark overlay. Content: small red-dot + "COMPANY NAME" eyebrow, then a large headline (2–4 lines) stating the core value proposition, then a one-paragraph sub-line underneath. Left-aligned, vertically centered-ish, generous top padding to clear the header.

### 5.2 "THE PROBLEM"
White background. Two-column row: left column is just the red-dot eyebrow label ("THE PROBLEM"); right column holds a large H2 headline + a supporting paragraph (~5 sentences) below it. Under that, a row of **3 animated stat counters** (count up from 0 on scroll-into-view) — big number + small label underneath each, e.g. `25+` / "Years Experience", `86+` / "Projects Done", `95%` / "Client Satisfaction".

### 5.3 Tagline strip
White background, short height, single centered line of large, reduced-opacity text — one sentence summarizing the company's operating philosophy.

### 5.4 Logo/gallery marquee
A horizontal row/strip of 4–5 rounded-corner images of varying widths, slightly overflowing the container edges (peeks off both sides). Treat as an infinite auto-scrolling marquee if you want it dynamic; a static row is an acceptable simplification.

### 5.5 "THE SOLUTION"
Dark (`grey-7`) full-width band. Same two-column pattern as 5.2: eyebrow label on the left, H2 + paragraph on the right, all in white/white-muted text.

### 5.6 "WHAT WE DO" — services list
White background. One "WHAT WE DO" eyebrow label at the top, then a **vertically stacked list of 5 service blocks**, each block = one large image above, then an H3 title, then a paragraph. Repeat this same image→title→paragraph pattern 5 times for:
1. India Strategy & Market Entry
2. Factory Design, Build, and Commissioning
3. Build-Operate-Transfer (BOT) Stabilization
4. Engineering and Product Localization
5. JV, M&A, and Brownfield Advisory

(Use the copy already present in the source dump for each — it's carried through correctly in the export.)

### 5.7 "OUR ADVANTAGE"
Two-part section, `white` background, top divider line:
- **Top:** eyebrow + H2 ("Execution is our unfair advantage.") + two short supporting lines, in a left-label/right-content two-column layout like previous sections.
- **Bento image grid:** an asymmetric row of cards — one tall portrait card, two medium square cards stacked, one tall portrait card, mixing photo cards and dark icon/graphic cards. Treat as a CSS grid with mixed row-spans; exact card count/shape doesn't need to match pixel-for-pixel, just the "asymmetric gallery" feel.
- **"Why clients choose us:" feature list:** a left-hand heading ("Why clients choose us:") next to a **3-row × 2-column grid of 6 feature items**, each with a small line-icon above short bold-ish text:
  1. 25+ years of hands-on industrial execution experience
  2. Deep understanding of global board governance and Indian realities
  3. Long-standing networks with PMCs, EPCs, regulators and suppliers
  4. One accountable partner across strategy, build and operations
  5. Zero tolerance for theoretical plans without ownership
  6. We don't sell optimism. We deliver outcomes.

### 5.8 "ENGAGEMENT MODELS"
White background, two-column pattern again: eyebrow label left, right side has H2 ("Built for boards. Flexible for reality.") + a **bulleted list** of engagement types + one closing sentence about tailoring engagements to governance/risk appetite/investment horizon.

### 5.9 CTA banner
Full-width dark image banner with heavy overlay, tall (~450px+), a single "More about us" pill button anchored bottom-right.

### 5.10 "WHY INDIA / WHY NOW"
White background. Eyebrow label, then a large two-part headline ("Why [X]. Why Now.") next to a short sub-line, then one supporting paragraph below both. Under that: a **2×2 grid of large images**, each captioned underneath with a short phrase:
- Deep global engineering
- Cost-efficient manufacturing
- Aligned policy incentives
- Global market access

### 5.11 Testimonials
White background. Left column: "Testimonials" eyebrow + a short description sentence + prev/next circular arrow buttons. Right column: one large pull-quote (serif-scale display text, 5xl), then below it a small client photo, name, and title. Build as a carousel/slider (even if only 1 testimonial exists today, wire it up to take more).

### 5.12 FAQ
Light-grey (`grey-96`) background. Left column: eyebrow "FAQ" + small image + a two-line prompt ("Have more questions? Our team is happy to help.") + a "Get in touch" button. Right column: large "Frequently asked questions" headline, then an **accordion of 4 Q&A items** (first one open by default, others collapsed), each row separated by a hairline divider, with a circular +/− toggle icon on the right:
1. What makes [company] different from traditional advisors or EPC firms? — *(answer already present in source dump)*
2. Why do [company] engagements extend beyond factory construction and commissioning? — *(answer already present in source dump)*
3. How does [company] reduce execution and governance risk for boards and investors? — *(answer already present in source dump)*
4. When should a company engage [company] in its journey? — *(answer already present in source dump)*

### 5.13 Blog
White background, top divider. Header row: eyebrow "Blog posts" + large "Blog articles" headline + short description + "All articles" pill button, all left-aligned/spread across the row. Below: a **3-column grid of blog cards**, each = large rounded image + title (2-line clamp). Titles from source:
1. Why [Topic] Projects Fail After the [Milestone] Is Finished
2. [X] Is a Decision, Not a Strategy
3. Commissioning Is Not Success: The Gap Before Stable Operations

### 5.14 Final contact CTA
White background, image banner at top ("Reach out" eyebrow + "Ready to build? Contact us today" headline over a background photo), with a **floating contact card** overlapping the bottom-right of the image: dark card, header row with "Get in touch" + arrow icon, body with email / phone / address rows each preceded by a small line-icon.

Then the **Footer** (§4).

## 6. Interactions to wire up

- Header menu button toggles a full-screen (or slide-in) nav overlay.
- Stat counters (§5.2) animate 0 → target value when scrolled into view.
- Logo/gallery strip (§5.4) auto-scrolls horizontally (marquee), pausable on hover.
- Testimonial arrows (§5.11) cycle through testimonial items.
- FAQ rows (§5.12) expand/collapse on click, animate height, rotate the +/− icon.
- All CTA buttons/pills use the accent color (`red-57`) as a small offset background chip behind the button, per the source pattern (a colored square peeking from behind the pill).

## 7. Content gaps to fill before shipping

- Real logo mark (header + footer currently placeholder).
- Real photography for hero, service sections, bento grid, "why now" grid, testimonial headshot, blog thumbnails.
- One consistent phone number, email, and address (see the mismatch warning in §4).
- Real blog post URLs once those pages exist — the source template points every blog link back to the homepage.
