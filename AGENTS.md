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

