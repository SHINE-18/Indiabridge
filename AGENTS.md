# Engineering & Performance Guidelines (AGENTS.md)

This document records key performance, rendering, and architectural guidelines established for this project and across future web applications.

---

## 1. Scroll Performance & Screen Tearing Prevention

### Anti-Patterns to NEVER Use:
1. **Never set `scroll-behavior: smooth` on `<html>` or `<body>`**:
   - **Why:** On Windows (Chrome/Edge), setting `scroll-behavior: smooth` on the root document forces the browser to intercept mouse-wheel and keyboard scrolling and animate it via software interpolation. This interpolation runs out of sync with Windows DWM (Desktop Window Manager) VSync presentation, splitting video frames horizontally across the monitor's midline (**screen tearing**).
   - **Rule:** Keep native scrolling on `html`. If smooth scrolling is required for anchor link jumps, apply it specifically to the click event (`element.scrollIntoView({ behavior: 'smooth' })`), never globally.

2. **Never drive `translate3d` parallax inside JavaScript `scroll` listeners on `sticky` or `fixed` containers**:
   - **Why:** The browser GPU compositor pins `position: sticky` and `position: fixed` elements on the compositor thread at the display's native refresh rate (60Hz / 120Hz / 144Hz). When JavaScript listens to `scroll` and applies `translate3d` or `style.top` in `requestAnimationFrame`, the JS main thread is 1–2 frames behind the compositor. This race condition causes sticky elements and child text/images to visibly vibrate, shake, and wobble relative to the viewport.
   - **Rule:** Keep sticky elements stationary and let content scroll over them naturally without asynchronous JavaScript `translate3d` counters.

3. **Avoid heavy box-shadows and 1px borders on overlay curtain seams**:
   - **Why:** Having a high-radius blur box-shadow (`0 -20px 40px`) or a 1px border on a sliding container creates GPU rasterization invalidations and a distracting horizontal line that cuts across the screen as it travels over sticky backgrounds.

4. **Never update React state on every scroll tick without equality guards**:
   - **Why:** Calling `setIsHidden(true)` or `setIsScrolled(true)` on every mouse tick during scroll triggers dozens of virtual DOM re-renders in React, consuming main thread cycles and causing frame drops.
   - **Rule:** Always guard state setters with functional checks:
     ```tsx
     const shouldBeHidden = currentScrollY > lastScrollY && currentScrollY > 120;
     setIsHidden((prev) => (prev !== shouldBeHidden ? shouldBeHidden : prev));
     ```

5. **Prefer GPU-composited CSS animations over main-thread JavaScript RAF loops**:
   - **Why:** Continuous `requestAnimationFrame` loops that mutate DOM `transform` on the main thread cause constant style recalculations and garbage collection pauses during scroll.
   - **Rule:** Use CSS `@keyframes` with `transform: translate3d(...)` so the animation runs entirely on the GPU compositor thread without touching the main thread.

---

## 2. Tailwind CSS Architecture Standards

1. **Co-located Utility Styling**:
   - Maintain all component layout, typography, padding, margins, and responsive rules directly in JSX using Tailwind CSS utilities.
   - Avoid creating sprawling external CSS stylesheets (`components.css`, `main.css`).

2. **Global Styles Scope (`globals.css`)**:
   - Only place universal CSS variables (`:root`), font declarations, global selection styles, and shared base layout resets in `globals.css`.

3. **Subpixel & Transform Stability**:
   - When using large scaled typography or transforms, add `[backface-visibility:hidden]` to prevent subpixel font snapping and text jittering during layout shifts.

---

## 3. Workflow & Direct Code Modification Rule

1. **No Scratch / PowerShell Inspection Scripts for UI & CSS**:
   - Never write one-off PowerShell or Node terminal inspection scripts to inspect image dimensions, calculate CSS values, or test UI layout adjustments.
   - Apply edits directly to the respective component JSX/TSX and CSS files using direct file editing tools.
   - Keep the workspace clean, fast, and completely free of temporary scratch scripts.

---

## 4. Framer-Standard 4-Tier Responsive Breakpoint Architecture

Established from high-end Framer builds (`indiabridge.framer.website`) for consistent multi-device rendering:

| Tier | Name | Breakpoint Range | Key Layout Behavior |
| :--- | :--- | :--- | :--- |
| **Tier 1** | **Phone** | `0px — 809px` | Single-column collapse, full-screen drawer menu (`w-full`), edge padding `16px–24px` (`px-4` to `px-6`), compact display typography (`text-3xl` to `text-4xl`), minimum touch target $44\times 44\text{px}$. |
| **Tier 2** | **Tablet** | `810px — 1199px` | 2-column bento/content splits, drawer menu `w-[510px]`, relaxed padding `24px–32px`, balanced headline wrapping (`text-4xl` to `text-5xl`), prevents premature desktop 3-column crowding. |
| **Tier 3** | **Desktop** | `1200px — 2559px` | Full 3-column architectural grids, drawer menu `w-[570px]`, container clamped at `1700px`, section top padding unified at `110px`, colossal typography (`text-6xl` to `100px+`). |
| **Tier 4** | **Ultrawide** | `2560px+` | Fixed container clamping (`max-w-[1700px]`), generous horizontal margins, strict font-size caps (use `clamp()` upper limits to prevent distortion on 4K/5K displays). |

### Core Architectural Rules:
- **Phone boundary extends to 809px**: Never prematurely activate desktop multi-column layouts at 768px (standard Tailwind `md`). iPads in portrait mode (768px–800px) must retain clean single-column or simplified 2-column flow.
- **Desktop begins strictly at 1200px**: Do not treat 1024px laptops or iPad Pro as full desktop. Use intermediate 2-column layouts between 810px and 1199px.
- **Section top padding standard**: All section starts must strictly maintain `pt-[110px]` without nested redundant padding offsets.
- **Always verify 4 viewports**: 390px (Phone), 820px/1024px (Tablet), 1440px (Desktop), and 2560px (Ultrawide).


