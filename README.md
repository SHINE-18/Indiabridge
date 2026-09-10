# Indiabridge Capital Partners — Static Architecture

A high-performance, zero-bundler rebuild of the **Indiabridge Capital Partners** industrial entry and execution platform (`https://indiabridge.framer.website/`), built according to the **DesignLab $10K Site Playbook**:
- Architectural Swiss structural grid system
- Warm obsidian black & crisp light contrast palette (`#101012`, `#ffffff`, `#ff3322`)
- Micro-interactions (pulsating red status indicators, silky drawer menu, accessible FAQ accordion, testimonials slider, dynamic article modal reader)
- Fast, zero-dependency static execution ready for instant deployment to Vercel, Netlify, or any static host.

---

## 📁 Project Directory Structure

```
d:\PROJECTS\indiabridge\
├── index.html                  # Flagship landing page (12 sections)
├── about.html                  # About Indiabridge & 4-phase methodology
├── blog.html                   # 5 Executive field perspectives & modal reader
├── contact.html                # Board intake consultation & direct channels
├── css/
│   ├── main.css                # Design tokens, typography, grid, utilities
│   └── components.css          # Navigation, cards, drawer, FAQ, testimonials, colossal footer
├── js/
│   ├── main.js                 # Header scroll dynamics, drawer open/close, scroll reveal
│   ├── carousel.js             # Testimonials slider with touch swipe & autoplay
│   ├── faq.js                  # Accessible FAQ accordion with smooth height calculation
│   └── contact.js              # Intake form validation & feedback modal
├── assets/
│   ├── images/                 # 43 local high-res WebP, PNG, and SVG assets
│   └── icons/                  # Lucide line icons
├── vercel.json                 # Clean URLs routing configuration
└── README.md                   # Project documentation
```

---

## 🚀 Running Locally

Because this is a zero-bundler static site, you can run it directly:

### Option 1: Python Simple Server
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000`.

### Option 2: Live Server (VS Code / Antigravity)
Right click `index.html` and choose **Open with Live Server**.

### Option 3: Direct File View
Double-click `index.html` to open it immediately in any modern web browser.

---

## 🌐 Deploying to Vercel

```bash
vercel --prod
```
The included `vercel.json` ensures clean, extensionless URLs (`/about`, `/blog`, `/contact`).
