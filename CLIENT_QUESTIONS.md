# Client Questions & Decisions Register — Indiabridge Capital Partners

This register catalogues all facts, claims, legal decisions, and assets that require client confirmation or sign-off before the formal production launch of `indiabridge.com`.

---

## 1. Corporate Identity & Contact Details to Confirm

| Item | Current Codebase Value | Action Required / Question for Client | Priority |
| :--- | :--- | :--- | :--- |
| **Exact Registered Entity Name** | `Indiabridge Capital Partners` | Please confirm the exact corporate legal entity name as registered (e.g. *Indiabridge Capital Partners LLP*, *Indiabridge Advisory Private Limited*, or UK entity name). | **High** |
| **Company Registration Numbers** | `Registration Pending Confirmation` | Please provide the Indian Corporate Identification Number (CIN) / LLPIN, and UK Companies House registration number (if incorporated in the UK). | **High** |
| **Trademark Registration** | Removed `®` symbol from all public copy | Does the firm hold an active registered trademark for "Indiabridge" or "Indiabridge Capital Partners" with the Indian Trade Marks Registry / UK IPO? If registration is pending, should we use `™` or omit symbols? | **Medium** |
| **General Enquiry Email** | `inquiries@indiabridgecp.com` | Please confirm if `inquiries@indiabridgecp.com` or `info@indiabridge.com` is configured and monitored on your corporate mail server. | **High** |
| **Mandates / Executive Email** | `partners@indiabridgecp.com` | Please confirm if `partners@indiabridgecp.com` or `mandates@indiabridge.com` is the preferred destination for high-value client enquiries. | **High** |
| **Direct Industrial Line** | `+91 99250 07371` | Please confirm that `+91 99250 07371` is active, assigned to an authorized representative, and enabled for WhatsApp corporate communication. | **High** |
| **Corporate Switchboard Line** | `+91 22 6900 8800` | Please verify whether `+91 22 6900 8800` is an active Mumbai office desk number. | **Medium** |
| **London Liaison Office** | *Hidden from UI (previously template placeholder: "57 Undergrond, Chelsea St, London")* | Does Indiabridge maintain an active representative office or registered liaison address in London, UK? If yes, please provide the exact official street address. If not, should all mentions of the London desk be permanently removed? | **High** |
| **Mumbai Headquarters Address** | `Level 14, Tower 2, One International Centre, Senapati Bapat Marg, Mumbai 400013` | Please confirm that this is the primary operating office address for commercial correspondence. | **High** |

---

## 2. Statistical Claims & Verification

| Statistic | Current Codebase Value | Action Required / Question for Client | Priority |
| :--- | :--- | :--- | :--- |
| **Years of Industrial Experience** | `25+` | Please verify if 25+ years reflects combined partner experience across Indian manufacturing leadership. | **Medium** |
| **Completed Industrial Projects** | `86+` | Please confirm the basis of the 86+ completed projects count (e.g. cumulative client engagements, plant builds, or feasibility mandates). | **Medium** |
| **Client Satisfaction Score** | *Removed from public display (previously unverified "98%")* | If you wish to display a satisfaction rating or Net Promoter Score, please provide the verifiable survey methodology or client cohort data to support the metric. | **Low** |

---

## 3. Assets & Approvals Needed to Enable Gated Features

The website currently has three features gated behind configuration flags in `src/lib/constants.ts` to protect brand credibility:

### A. Case Studies & Projects (`showProjects: false`)
- **Current Behavior**: `/projects` and detail routes return `404 Not Found`, and navigation links are hidden. This was implemented because previous template projects were UK and Netherlands residential townhouses and penthouses.
- **To Enable**: Please provide **3 to 5 real India industrial case studies** with:
  1. Project Title & Sector (e.g., *Automotive Tier-1 Precision Machining Plant*, *CleanTech Battery Energy Assembly*, *Chemical Synthesis Facility*).
  2. Location in India (State, Industrial Hub / SIPCOT / MIDC / GIDC park).
  3. Facility Scope (CAPEX range, built-up area in sq. ft., equipment installation, BOT timeframe).
  4. Real or anonymized client descriptor (e.g., *German Automotive Tier-1 Supplier*).
  5. High-resolution industrial photography (or approval to use licensed industrial editorial photography).

### B. Client Testimonials (`showTestimonials: false`)
- **Current Behavior**: Testimonial slider is suppressed.
- **To Enable**: Please provide **2 to 4 signed client quotes** with:
  1. Executive Name and Designation (e.g. *Chief Operating Officer*, *VP Global Manufacturing*).
  2. Company Name and Corporate Logo.
  3. Written authorization to publish on the public website.

### C. Executive Leadership Team (`showLeadership: false`)
- **Current Behavior**: Leadership section on `/about` is suppressed to avoid displaying generic placeholder avatars.
- **To Enable**: Please provide:
  1. Managing Partners / Practice Directors: Full names, official corporate designations.
  2. High-resolution executive headshots (3:4 portrait ratio).
  3. Brief professional bios highlighting industrial execution credentials in India.
  4. Verified LinkedIn profile URLs.

---

## 4. Legal & Regulatory Sign-Off

| Policy / Item | Location | Action Required | Priority |
| :--- | :--- | :--- | :--- |
| **Privacy Policy Review** | `/privacy` | The provisional draft incorporates India's **DPDP Act 2023** and **UK GDPR**. It must be formally reviewed and signed off by your legal counsel. | **High** |
| **Designation of Grievance Officer** | `/privacy` (Section 8) | Under the DPDP Act 2023, an Indian data fiduciary must designate a Grievance Officer. Please confirm the individual's name or corporate title to be listed. | **High** |
| **Terms of Use Review** | `/terms` | Please have legal counsel review the limitation of liability, exclusion of client-advisor relationship without an MSA, and dispute resolution jurisdiction (Courts of Mumbai). | **High** |
| **Contact Form Consent Notice** | `/contact` | Form now requires an affirmative tick box agreeing to the Privacy Policy. Please confirm if this meets internal corporate compliance requirements. | **Medium** |

---

## 5. Domain, DNS & Production Launch Checklist

- [ ] **Production Domain Setup**: Add `indiabridge.com` to the Vercel project dashboard.
- [ ] **DNS Records**: Configure root A records (`76.76.21.21`) and `www` CNAME record (`cname.vercel-dns.com`) with your domain registrar.
- [ ] **Environment Variable**: Set `NEXT_PUBLIC_SITE_URL=https://indiabridge.com` in Vercel project environment variables.
- [ ] **Robots Indexation**: Once deployed to `indiabridge.com`, `robots.ts` will automatically switch from `disallow: '/'` (preview) to `allow: '/'` (production indexation enabled).
- [ ] **Google Search Console**: Verify `https://indiabridge.com` and submit sitemap at `https://indiabridge.com/sitemap.xml`.
