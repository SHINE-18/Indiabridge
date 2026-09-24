// ============================================================================
// SITE FACTS — Single Source of Truth for Business Facts & Configuration
// Indiabridge Capital Partners
// ============================================================================

export const siteFacts = {
  brand: {
    name: 'Indiabridge Capital Partners',
    shortName: 'Indiabridge',
    legalName: 'Indiabridge Capital Partners', // TODO(client): confirm exact registered corporate entity name
    tagline: 'Industrial Entry & Execution Platform for Global Manufacturing',
    description:
      'Indiabridge partners with global manufacturers to establish, build, and scale industrial operations in India with hands-on execution.',
  },
  urls: {
    // Production domain; falls back to indiabridge.com if not configured in environment
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://indiabridge.com',
    ogImage: '/images/marquee-industrial-logistics.webp', // High-resolution 1200x630 industrial asset
  },
  contact: {
    // TODO(client): confirm primary general email mailbox
    generalEmail: 'inquiries@indiabridgecp.com',
    // TODO(client): confirm dedicated mandates / executive email mailbox
    partnersEmail: 'partners@indiabridgecp.com',
    // Confirmed operational line
    phone: '+91 99250 07371',
    // Additional switchboard line
    phoneOffice: '+91 22 6900 8800',
  },
  addresses: {
    // Confirmed India Operations Headquarters
    indiaHq: {
      isConfirmed: true,
      title: 'India Operations Headquarters',
      street: 'Level 14, Tower 2, One International Centre, Senapati Bapat Marg',
      city: 'Mumbai',
      region: 'Maharashtra',
      postalCode: '400013',
      country: 'India',
      countryCode: 'IN',
    },
    // UNCONFIRMED London liaison placeholder from template with typo ('Undergrond')
    // Hidden from UI until client confirms real address
    londonLiaison: {
      isConfirmed: false, // TODO(client): confirm London registered office address
      rawPlaceholder: '57 Undergrond, Chelsea St, London, UK',
      city: 'London',
      country: 'UK',
      countryCode: 'GB',
    },
  },
  legal: {
    // TODO(client): confirm India CIN / LLPIN registration number
    indiaRegistrationNumber: 'Registration Pending Confirmation',
    // TODO(client): confirm UK Companies House company number
    ukCompanyNumber: 'Registration Pending Confirmation',
    copyrightYear: 2026,
  },
  socials: {
    linkedin: 'https://linkedin.com/company/indiabridge-capital-partners',
    twitter: 'https://x.com/indiabridgecp',
  },
  stats: {
    // TODO(client): confirm exact years of industrial execution experience
    yearsExperience: 25,
    // TODO(client): confirm total completed industrial projects
    projectsDone: 86,
    // Note: Client satisfaction percentage removed from public display until client supplies verifiable source
    clientSatisfactionPercent: null as number | null,
  },
  features: {
    // Feature gating per audit rules:
    // Default false: hides /projects and detail pages from nav, footer, sitemap, and renders 404 until real case studies arrive
    showProjects: false,
    // Default false: gates testimonial slider until client provides written permission and real verified clients
    showTestimonials: false,
    // Default false: gates leadership section on /about until real team photos & bios are supplied
    showLeadership: false,
  },
};

// Backwards compatibility alias for components referencing SITE_METADATA
export const SITE_METADATA = {
  name: siteFacts.brand.name,
  shortName: siteFacts.brand.shortName,
  tagline: siteFacts.brand.tagline,
  description: siteFacts.brand.description,
  url: siteFacts.urls.siteUrl,
  ogImage: siteFacts.urls.ogImage,
  telephone: siteFacts.contact.phone,
  email: siteFacts.contact.generalEmail,
  address: siteFacts.addresses.indiaHq,
  socials: siteFacts.socials,
};

export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  ...(siteFacts.features.showProjects ? [{ label: 'Projects', href: '/projects' }] : []),
  { label: 'Values', href: '/values' },
  { label: 'Perspectives', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const ENGAGEMENT_OPTIONS = [
  { value: 'strategy', label: 'India Entry Strategy & Board Feasibility' },
  { value: 'factory_build', label: 'Factory Design, Build & Commissioning' },
  { value: 'bot', label: 'Build–Operate–Transfer (BOT) Operational Ramp-Up' },
  { value: 'jv_ma', label: 'Joint Venture (JV), M&A & Due Diligence' },
  { value: 'localisation', label: 'Supplier Localisation & Value Engineering' },
  { value: 'other', label: 'Turnkey Industrial Execution / Other' },
];
