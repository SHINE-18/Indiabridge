import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetailClient, { ProjectDetail, ProjectSummary } from './ProjectDetailClient';

const PROJECTS_DATABASE: Record<string, ProjectDetail> = {
  'strong-policy-incentive': {
    slug: 'strong-policy-incentive',
    title: 'Strong policy & incentive',
    category: 'Commercial',
    date: 'Dec 1, 2025',
    client: 'Ridgeway Council',
    completed: 'December 2025',
    location: 'Manchester, UK',
    contributors: 'Manor Torres, Julian Park, Aisha Rahman, Noah Lee',
    previewImage: '/images/project-01-hero-setas.jpg',
    overviewParagraphs: [
      'A contemporary pavilion designed as a multifunctional public venue for exhibitions, community gatherings, and seasonal events. Its sculptural form is expressed through layered volumes and filtered daylight, creating a calm and adaptable interior.',
      'The structure is engineered for flexibility, enabling seamless transitions between civic uses while maintaining strong visual identity and an enduring civic presence within the surrounding urban landscape.',
      'Comprehensive environmental performance analysis shaped the envelope design, integrating high-performance thermal insulation, passive natural ventilation louvers, and rainwater recapture systems that dramatically reduce operating expenditures.',
      'Indiabridge supervised the complete project management lifecycle from initial concept and regulatory approval navigation through contractor procurement, structural slab execution, and final commissioning.',
    ],
    gallery: [
      {
        url: '/images/project-01-gallery-01.jpg',
        caption: '01 / Translucent Louver Facade',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-02.jpg',
        caption: '02 / Stepped Cantilevered Villa',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-03.jpg',
        caption: '03 / White Pavilion with Terracotta Frame',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-04.jpg',
        caption: '04 / Cantilevered Canopy Underside',
        aspect: 'aspect-[4/3]',
      },
    ],
  },
  'northbridge-townhouse': {
    slug: 'northbridge-townhouse',
    title: 'Northbridge Townhouse',
    category: 'Residential',
    date: 'November 2025',
    client: 'Northbridge Estates Ltd',
    completed: 'November 2025',
    location: 'Leeds, UK',
    contributors: 'Julian Park, Noah Lee',
    previewImage: '/images/project-02-northbridge-townhouse.jpg',
    overviewParagraphs: [
      'A refined urban residence emphasizing proportional harmony, tactile natural finishes, and deliberate connections between private interior living areas and secluded exterior gardens.',
      'The design incorporates sustainable envelope detailing, thermal massing, and understated acoustic separation tailored to contemporary living requirements and long-term domestic tranquility.',
      'Carefully curated local masonry and sustainable European timber framing create a balanced textural dialogue between heritage craftsmanship and modern minimalist spatial clarity.',
      'Every phase was governed by strict quality controls, with our team managing specialized trade contractors to maintain schedule integrity and ensure zero defects upon residential handover.',
    ],
    gallery: [
      {
        url: '/images/project-01-gallery-01.jpg',
        caption: '01 / Facade Detail',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-02.jpg',
        caption: '02 / Garden Courtyard',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-03.jpg',
        caption: '03 / Minimal Living Space',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-04.jpg',
        caption: '04 / Tactile Stairwell',
        aspect: 'aspect-[4/3]',
      },
    ],
  },
  'willowbank-penthouse': {
    slug: 'willowbank-penthouse',
    title: 'Willowbank Penthouse',
    category: 'Residential',
    date: 'October 2025',
    client: 'Willowbank Residences',
    completed: 'October 2025',
    location: 'Bradford, UK',
    contributors: 'Aisha Rahman, Julian Park',
    previewImage: '/images/project-03-willowbank-penthouse.jpg',
    overviewParagraphs: [
      'A top-floor residential transformation balancing expansive panoramic views with private, introspective domestic zones tailored for focused living and hospitality.',
      'Custom acoustic timber joinery, textured lime plaster walls, and precise daylight aperture orientation define the serene spatial atmosphere throughout the home.',
      'Structural adaptations required careful load redistribution across the existing roof slab to accommodate floor-to-ceiling high-performance structural glazing without compromising building envelope stability.',
      'The project was executed on an accelerated ten-month timeline, requiring rigorous vendor synchronization, custom millwork fabrication governance, and turnkey delivery.',
    ],
    gallery: [
      {
        url: '/images/project-01-gallery-02.jpg',
        caption: '01 / Perimeter Glazing',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-03.jpg',
        caption: '02 / Plaster and Timber Detailing',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-01.jpg',
        caption: '03 / Dining Alcove',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-04.jpg',
        caption: '04 / Sunset Terrace',
        aspect: 'aspect-[4/3]',
      },
    ],
  },
  'seaside-cliff-residence': {
    slug: 'seaside-cliff-residence',
    title: 'Seaside Cliff Residence',
    category: 'Residential',
    date: 'September 2025',
    client: 'Private Client',
    completed: 'September 2025',
    location: 'Amsterdam, NL',
    contributors: 'Noah Lee, Manor Torres',
    previewImage: '/images/project-04-seaside-cliff-residence.jpg',
    overviewParagraphs: [
      'Anchored directly into a dramatic maritime escarpment, this dwelling utilizes board-formed insulated concrete and raw weathering steel to withstand harsh sea air while celebrating its rugged coastal context.',
      'Cantilevered terraces provide deep shadow lines and uninterrupted horizon views from all primary living volumes while sheltering lower levels from intense prevailing winds.',
      'Complex geotechnical engineering and specialized anchor piling were deployed to secure the substructure against marine corrosion and ground movement.',
      'Our team served as the master technical coordinator, aligning marine structural engineers, regional environmental authorities, and specialized concrete artisans throughout execution.',
    ],
    gallery: [
      {
        url: '/images/project-01-gallery-04.jpg',
        caption: '01 / Escarpment Foundation',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-01.jpg',
        caption: '02 / Weathered Steel Overhang',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-02.jpg',
        caption: '03 / Oceanfacing Glass Wall',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-03.jpg',
        caption: '04 / Protected Inland Courtyard',
        aspect: 'aspect-[4/3]',
      },
    ],
  },
  'the-grove-workspace': {
    slug: 'the-grove-workspace',
    title: 'The Grove Workspace',
    category: 'Commercial',
    date: 'August 2025',
    client: 'Grove Industrial Ventures',
    completed: 'August 2025',
    location: 'London, UK',
    contributors: 'Julian Park, Manor Torres, Aisha Rahman',
    previewImage: '/images/project-05-grove-workspace.jpg',
    overviewParagraphs: [
      'An adaptive reuse of an industrial warehouse structure into a hybrid research, development, and collaborative engineering workspace.',
      'The design preserves historic steel trusses and exposed industrial masonry while inserting highly efficient, thermally decoupled office pods and landscaped interior gardens.',
      'A zoned variable-refrigerant mechanical system combined with smart daylight harvesting delivers a 35% reduction in baseline energy consumption across all operating shifts.',
      'From brownfield demolition to tenant fit-out and digital infrastructure commissioning, the delivery demonstrated tight budget adherence and zero safety incidents.',
    ],
    gallery: [
      {
        url: '/images/project-01-gallery-03.jpg',
        caption: '01 / Restored Steel Trusses',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-04.jpg',
        caption: '02 / Winter Garden Atrium',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-01.jpg',
        caption: '03 / Decoupled Meeting Pods',
        aspect: 'aspect-[4/3]',
      },
      {
        url: '/images/project-01-gallery-02.jpg',
        caption: '04 / Mezzanine Circulation',
        aspect: 'aspect-[4/3]',
      },
    ],
  },
};

const ALL_PROJECTS_SUMMARY: ProjectSummary[] = [
  {
    slug: 'strong-policy-incentive',
    title: 'Strong policy & incentive',
    category: 'Commercial',
    location: 'Manchester, UK',
    image: '/images/project-01-hero-setas.jpg',
  },
  {
    slug: 'northbridge-townhouse',
    title: 'Northbridge Townhouse',
    category: 'Residential',
    location: 'Leeds, UK',
    image: '/images/project-02-northbridge-townhouse.jpg',
  },
  {
    slug: 'willowbank-penthouse',
    title: 'Willowbank Penthouse',
    category: 'Residential',
    location: 'Bradford, UK',
    image: '/images/project-03-willowbank-penthouse.jpg',
  },
  {
    slug: 'seaside-cliff-residence',
    title: 'Seaside Cliff Residence',
    category: 'Residential',
    location: 'Amsterdam, NL',
    image: '/images/project-04-seaside-cliff-residence.jpg',
  },
  {
    slug: 'the-grove-workspace',
    title: 'The Grove Workspace',
    category: 'Commercial',
    location: 'London, UK',
    image: '/images/project-05-grove-workspace.jpg',
  },
];

export function generateStaticParams() {
  return Object.keys(PROJECTS_DATABASE).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATABASE[slug];

  if (!project) {
    return {
      title: 'Project Case Study',
      description: 'Industrial and architectural case study by Indiabridge.',
    };
  }

  const cleanDescription = project.overviewParagraphs[0]
    ? project.overviewParagraphs[0].slice(0, 145)
    : 'Industrial case study by Indiabridge.';

  return {
    title: `${project.title}`,
    description: cleanDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Indiabridge`,
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
  const { slug } = await params;
  const project = PROJECTS_DATABASE[slug];

  if (!project) {
    notFound();
  }

  const relatedProjects = ALL_PROJECTS_SUMMARY.filter((p) => p.slug !== project.slug).slice(0, 2);

  return <ProjectDetailClient project={project} relatedProjects={relatedProjects} />;
}
