# Indiabridge Capital Partners — Design System Spec (MASTER.md)

> Persisted design specification following `premium-web-builder` references (`design-principles.md`, `style-catalog.md`, `design-system-generator.md`, and `static-premium-site.md`).

---

## 1. Project Classification & Target

* **Target:** Indiabridge Capital Partners — Industrial Entry & Execution Platform
* **Classification:** Track A — Static Premium Site (B2B Industrial Advisory / Corporate Architecture)
* **Pattern:** Architectural Showpiece Hero + Swiss Grid Content Hierarchy + Methodology & Social Proof + Perspectives
* **Style:** **Swiss Modernism 2.0 / Trust & Authority**
  * *Rationale:* Tailored for board directors, global CEOs, and manufacturing operators evaluating high-capex investments in India. Conveys institutional permanence, precision, and operational rigor.

---

## 2. Palette (Named Values — No Unconsidered Defaults)

```css
--bg-primary:     #ffffff;   /* Pure clean card surfaces and high-contrast content */
--bg-subtle:      #f8f7f4;   /* Warm architectural paper tone for alternating sections */
--bg-dark:        #101012;   /* Warmed obsidian for global footer and dark drawer */
--hero-dark:      #0b1419;   /* Deep slate-tinted dark backing for hero architectural image */
--accent-red:     #c83226;   /* Disciplined terracotta accent for active indicators and primary buttons */
--text-primary:   #111113;   /* Warmed black for display headings and high-contrast text */
--text-secondary: #55555c;   /* Balanced industrial slate for body paragraphs */
--text-tertiary:  #8c8c94;   /* Quiet neutral for captions, kickers, and statutory disclaimers */
--border-subtle:  #e4e2dd;   /* Warm low-contrast structural dividers */
```

* **Rules:** Never use pure `#000000`. No neon AI glow or SaaS purple gradients. High WCAG AA contrast on all text surfaces.

---

## 3. Typography Hierarchy

* **Display Role:** Bold, condensed, architectural sans-serif (`font-family: var(--font-display)`) with negative tracking (`-0.03em`) for uppercase hero headlines and section titles.
* **Body Role:** Neutral, readable sans-serif (`font-family: var(--font-body)`), set to `1rem` with `line-height: 1.6` and `max-width: 68ch`.
* **Mono Role:** Uppercase technical kicker tags (`font-family: var(--font-mono)`), `font-size: 0.75rem`, `letter-spacing: 0.1em`.

---

## 4. Spacing Scale

* **Base Unit:** 8px
* **Scale:** `8 / 16 / 24 / 32 / 48 / 64 / 96 / 128px`
* **Hierarchy:** Section padding `clamp(64px, 8vw, 128px)`. Hero top padding `140px+` to give prominence and breathing room.

---

## 5. Motion & Interaction Vocabulary

1. **Smart Headroom Navbar:** Hides on scroll-down; reveals smoothly on scroll-up only after passing the initial landing page hero.
2. **Slide-Out Minimalist Drawer:** 390px deep black panel with 48px circular white close button and vertical link stack.
3. **Scroll Reveal:** IntersectionObserver-driven subtle translation (`16px`) and opacity fade.
4. **Touch Targets:** Minimum 44×44px interactive tap area on all buttons and toggles.
5. **Accessibility:** Visible `:focus-visible` keyboard ring (`2px solid #c83226`) and `@media (prefers-reduced-motion: reduce)` fallback.

---

## 6. Copy & Tone Standards (Industrial Voice)

* **Vocabulary:** Precise engineering and operational terms (EPC oversight, statutory clearance, PLI incentives, vendor localization, shop-floor commissioning).
* **Anti-Patterns Avoided:** No "cutting-edge", no "elevate your brand", no "seamless integration", no placeholder lorem ipsum.
* **Statutory Protection:** Mandatory project disclaimer on consultation forms and footer areas.
