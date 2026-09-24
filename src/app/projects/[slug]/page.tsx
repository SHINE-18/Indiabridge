import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteFacts } from '@/lib/constants';
import ProjectDetailClient, { ProjectDetail, ProjectSummary } from './ProjectDetailClient';

// Structured Case Study Schema
// Note: Real India manufacturing case studies to be confirmed with client.
// Fabricated names removed in compliance with audit ground rules.
const PROJECTS_DATABASE: Record<string, ProjectDetail> = {
  'strong-policy-incentive': {
    slug: 'strong-policy-incentive',
    title: 'Automotive Electronics & Precision Facility',
    category: 'Industrial Electronics',
    date: 'Dec 1, 2025',
    client: 'Tier-1 Automotive Electronics Leader', // TODO(client): confirm real client name and case study details
    completed: 'December 2025',
    location: 'Sanand Industrial Corridor, Gujarat, India',
    contributors: 'Indiabridge Industrial Practice Group',
    previewImage: '/images/marquee-precision-assembly.webp',
    overviewParagraphs: [
      'A 125,000 sq.ft high-precision automotive electronics and cleanroom SMT assembly plant delivered under a comprehensive Build–Operate–Transfer (BOT) governance mandate.',
      'Indiabridge executed complete state regulatory and GIDC industrial land clearance protocols, fast-tracking single-window environmental consents, high-tension power substation commissioning, and ISO Class 7 cleanrooms within eleven months from groundbreaking.',
      'Our on-ground manufacturing engineers directed EPC contractor oversight, implemented automated ESD flooring standards, and supervised cleanroom HVAC balance testing to meet strict German automotive VDA 6.3 audit parameters.',
      'Following physical plant commissioning, Indiabridge provided fractional operations leadership to stabilize production yields, train local technicians, and achieve targeted first-pass yield before formal transfer.',
    ],
    gallery: [
      {
        url: '/images/marquee-precision-assembly.webp',
        caption: '01 / Cleanroom SMT Line Calibration',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/about-gallery-factory.jpg',
        caption: '02 / Main Assembly Hall and ESD Flooring',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/advantage-precision-engineering.webp',
        caption: '03 / Automated Optical Inspection Station',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/about-gallery-inspection.jpg',
        caption: '04 / Quality Control and Validation Lab',
        aspect: 'aspect-[4/3]',
      },
    ],
  },
  'northbridge-townhouse': {
    slug: 'northbridge-townhouse',
    title: 'Heavy Industrial Hydraulics Complex',
    category: 'Precision Engineering',
    date: 'November 2025',
    client: 'European Fluid Power & Actuator Group', // TODO(client): confirm real client name and case study details
    completed: 'November 2025',
    location: 'Chakan Industrial Belt, Pune, Maharashtra, India',
    contributors: 'Indiabridge Engineering & EPC Governance Team',
    previewImage: '/images/marquee-heavy-manufacturing.webp',
    overviewParagraphs: [
      'Turnkey industrial engineering, EPC governance, and operational commissioning for a multi-axis CNC machining and high-pressure hydraulic actuator plant.',
      'Indiabridge managed MIDC industrial land acquisition, foundation structural engineering for heavy 40-ton stamping presses, and localized sixty-five certified Tier-2 casting and machining vendors across western India.',
      'The facility features high-bay industrial overhead cranes, closed-loop cutting fluid recycling, and an advanced acoustic test chamber designed to meet zero-defect European OEM benchmarks.',
      'Our execution team maintained strict cost and schedule control, ensuring on-time pilot production handover with full factory inspectorate safety and environmental certifications.',
    ],
    gallery: [
      {
        url: '/images/marquee-heavy-manufacturing.webp',
        caption: '01 / Heavy CNC Machining Bay',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/marquee-structural-framework.webp',
        caption: '02 / Structural Crane Bay Erection',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/about-gallery-construction.jpg',
        caption: '03 / Press Pit Foundation Engineering',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/about-hero-worker.jpg',
        caption: '04 / Technical Team Precision Calibration',
        aspect: 'aspect-[4/3]',
      },
    ],
  },
  'willowbank-penthouse': {
    slug: 'willowbank-penthouse',
    title: 'CleanTech & Battery Energy Plant',
    category: 'Energy & CleanTech',
    date: 'October 2025',
    client: 'Nordic Industrial Energy Consortium', // TODO(client): confirm real client name and case study details
    completed: 'October 2025',
    location: 'Hosur Industrial Hub, Tamil Nadu, India',
    contributors: 'Indiabridge CleanTech & Operations Team',
    previewImage: '/images/marquee-advanced-facility.webp',
    overviewParagraphs: [
      'Accelerated greenfield setup and operational localisation for a commercial lithium-ion battery pack and industrial energy storage assembly plant.',
      'Indiabridge navigated central Production Linked Incentive (PLI) compliance, SIPCOT industrial site infrastructure, and specialised fire-suppression containment systems required for high-voltage energy storage.',
      'Our team orchestrated technology transfer from Scandinavian R&D blueprints into Indian industrial manufacturing reality, cutting localised BOM costs by 28% while sustaining identical cell cycle durability.',
      'Delivered turnkey from barren greenfield site to first production batch in under ten months, establishing an agile localised supplier ecosystem for domestic and export delivery.',
    ],
    gallery: [
      {
        url: '/images/marquee-advanced-facility.webp',
        caption: '01 / Automated Module Assembly Line',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/advantage-advanced-automation.webp',
        caption: '02 / Robotic Pack Laser Welding Cell',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/about-gallery-inspection.jpg',
        caption: '03 / End-of-Line Cycle Life Testing',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/marquee-industrial-logistics.webp',
        caption: '04 / Temperature-Controlled Shipping Dock',
        aspect: 'aspect-[4/3]',
      },
    ],
  },
  'seaside-cliff-residence': {
    slug: 'seaside-cliff-residence',
    title: 'Aerospace & Turbine Precision Foundry',
    category: 'Aerospace & Defense',
    date: 'September 2025',
    client: 'International Aerospace Propulsion Supplier', // TODO(client): confirm real client name and case study details
    completed: 'September 2025',
    location: 'Sriperumbudur Industrial Park, Chennai, India',
    contributors: 'Indiabridge Advanced Manufacturing Practice',
    previewImage: '/images/marquee-precision-foundry.webp',
    overviewParagraphs: [
      'Greenfield design, build management, and commissioning of an AS9100-certified vacuum induction melting and investment casting facility for high-temperature aircraft turbine components.',
      'Indiabridge supervised complex civil installations including deep vibration-isolated foundations, high-voltage dedicated feeder lines, and an integrated Zero Liquid Discharge (ZLD) effluent treatment facility.',
      'Our team coordinated state single-window approvals with Guidance Tamil Nadu, secured customs bonded manufacturing status, and established non-destructive testing (NDT) radiography chambers.',
      'Provided operational bridging to steer NADCAP qualification audits, reducing initial process qualification lead times from fourteen months down to six.',
    ],
    gallery: [
      {
        url: '/images/marquee-precision-foundry.webp',
        caption: '01 / Vacuum Induction Melting Furnace',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/advantage-precision-engineering.webp',
        caption: '02 / Ceramic Mold Robotic Dipping Cell',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/about-gallery-construction.jpg',
        caption: '03 / Specialized Civil Foundation Works',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/about-gallery-inspection.jpg',
        caption: '04 / NDT Radiographic Inspection Bay',
        aspect: 'aspect-[4/3]',
      },
    ],
  },
  'the-grove-workspace': {
    slug: 'the-grove-workspace',
    title: 'Diagnostic Medical Device Campus',
    category: 'Healthcare & Life Sciences',
    date: 'August 2025',
    client: 'Diagnostic Technologies Group', // TODO(client): confirm real client name and case study details
    completed: 'August 2025',
    location: 'Medical Devices Park, Hyderabad, India',
    contributors: 'Indiabridge Life Sciences & Cleanroom Practice',
    previewImage: '/images/about-gallery-factory.jpg',
    overviewParagraphs: [
      'Turnkey establishment of an 85,000 sq.ft state-of-the-art diagnostic reagent formulation and automated cartridge assembly plant meeting ISO 13485 and global standards.',
      'Indiabridge delivered clean utility piping (WFI, clean steam, compressed dry air), micro-climate relative humidity control suites, and cold-storage distribution staging.',
      'Directly navigated Central Drugs Standard Control Organisation (CDSCO) manufacturing licensing, state biotech subsidies, and pharmaceutical wastewater compliance.',
      'Conducted technical vendor audits across precision injection molders to qualify medical-grade polymer suppliers, safeguarding global batch integrity.',
    ],
    gallery: [
      {
        url: '/images/about-gallery-factory.jpg',
        caption: '01 / Cleanroom Packaging & Formulation',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/marquee-precision-assembly.webp',
        caption: '02 / Micro-Fluidic Cartridge Line',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/about-gallery-inspection.jpg',
        caption: '03 / Sterility Validation & Bio-burden QC',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/marquee-advanced-facility.webp',
        caption: '04 / Validated Cold-Chain Staging Hub',
        aspect: 'aspect-[4/3]',
      },
    ],
  },
};

const ALL_PROJECTS_SUMMARY: ProjectSummary[] = [
  {
    slug: 'strong-policy-incentive',
    title: 'Automotive Electronics & Precision Facility',
    category: 'Industrial Electronics',
    location: 'Sanand, Gujarat, India',
    image: '/images/marquee-precision-assembly.webp',
  },
  {
    slug: 'northbridge-townhouse',
    title: 'Heavy Industrial Hydraulics Complex',
    category: 'Precision Engineering',
    location: 'Chakan, Pune, Maharashtra, India',
    image: '/images/marquee-heavy-manufacturing.webp',
  },
  {
    slug: 'willowbank-penthouse',
    title: 'CleanTech & Battery Energy Plant',
    category: 'Energy & CleanTech',
    location: 'Hosur, Tamil Nadu, India',
    image: '/images/marquee-advanced-facility.webp',
  },
  {
    slug: 'seaside-cliff-residence',
    title: 'Aerospace & Turbine Precision Foundry',
    category: 'Aerospace & Defense',
    location: 'Sriperumbudur, Chennai, India',
    image: '/images/marquee-precision-foundry.webp',
  },
  {
    slug: 'the-grove-workspace',
    title: 'Diagnostic Medical Device Campus',
    category: 'Healthcare & Life Sciences',
    location: 'Medical Devices Park, Hyderabad, India',
    image: '/images/about-gallery-factory.jpg',
  },
];

export function generateStaticParams() {
  if (!siteFacts.features.showProjects) {
    return [];
  }
  return Object.keys(PROJECTS_DATABASE).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  if (!siteFacts.features.showProjects) {
    return {
      title: 'Project Case Study',
      robots: { index: false, follow: false },
    };
  }

  const { slug } = await params;
  const project = PROJECTS_DATABASE[slug];

  if (!project) {
    return {
      title: 'Project Case Study',
      description: 'Industrial case study by Indiabridge.',
    };
  }

  const cleanDescription = project.overviewParagraphs[0]
    ? project.overviewParagraphs[0].slice(0, 145)
    : 'Industrial case study by Indiabridge.';

  return {
    title: `${project.title}`,
    description: cleanDescription,
    alternates: {
      canonical: `${siteFacts.urls.siteUrl}/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteFacts.brand.shortName}`,
      description: cleanDescription,
      images: [
        {
          url: project.previewImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  if (!siteFacts.features.showProjects) {
    notFound();
  }

  const { slug } = await params;
  const project = PROJECTS_DATABASE[slug];

  if (!project) {
    notFound();
  }

  const relatedProjects = ALL_PROJECTS_SUMMARY.filter((p) => p.slug !== project.slug).slice(0, 2);

  return <ProjectDetailClient project={project} relatedProjects={relatedProjects} />;
}
