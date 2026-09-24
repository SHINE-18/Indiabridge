import {
  ServiceItem,
  FAQItem,
  TestimonialItem,
  BlogArticle,
  WhyChoosePoint,
  WhyIndiaPhoto,
  MethodologyPhase,
  CorePrinciple,
} from '@/types';

export const MARQUEE_IMAGES = [
  {
    src: '/images/marquee-industrial-logistics.webp',
    alt: 'Industrial Logistics and Factory Campus',
    className: 'card-dim-1',
  },
  {
    src: '/images/marquee-heavy-manufacturing.webp',
    alt: 'Heavy Industrial Manufacturing Infrastructure',
    className: 'card-dim-2',
  },
  {
    src: '/images/marquee-precision-foundry.webp',
    alt: 'Precision Foundry and High-Performance Plant',
    className: 'card-dim-3',
  },
  {
    src: '/images/marquee-structural-framework.webp',
    alt: 'Structural Steel Factory Framework',
    className: 'card-dim-4',
  },
  {
    src: '/images/marquee-advanced-facility.webp',
    alt: 'Grade-A Industrial Facility and Advanced Complex',
    className: 'card-dim-5',
  },
  {
    src: '/images/marquee-precision-assembly.webp',
    alt: 'High-Precision Manufacturing Assembly',
    className: 'card-dim-6',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'market-entry',
    number: '01',
    title: 'India Strategy & Market Entry',
    description:
      'Board-ready clarity before capital is committed. We help global manufacturers evaluate, enter, and scale operations in India with confidence through data-driven market entry strategy, feasibility analysis, location selection, government incentives, and ecosystem mapping. Our approach covers greenfield projects, brownfield expansions, joint ventures, and acquisitions, supported by detailed CAPEX, OPEX, ROI, and risk modelling to reduce execution uncertainty.',
    image: '/images/service-01-market-entry.webp',
    tags: ['Board Strategy', 'Feasibility', 'Location Selection', 'Incentives'],
  },
  {
    id: 'factory-design-build',
    number: '02',
    title: 'Factory Design, Build, and Commissioning',
    description:
      'Factories designed to work, scale, and perform from day one. We deliver end-to-end factory planning from concept to commissioning, including industrial layouts, utilities planning, and engineering design. Our team oversees PMC, EPC, and contractor governance while maintaining strict control over cost, schedule, quality, and on-site execution to ensure manufacturing facilities are delivered on time and ready for production.',
    image: '/images/service-02-factory-build.webp',
    tags: ['Layouts & Utilities', 'EPC Governance', 'Schedule Control', 'Commissioning'],
  },
  {
    id: 'bot-stabilisation',
    number: '03',
    title: 'Build-Operate-Transfer (BOT) Stabilisation',
    description:
      'Where most India manufacturing projects succeed or fail. We provide interim operational leadership during the most critical ramp-up phase, driving KPI-based production stabilisation and performance improvement. This includes engineering and leadership hiring, SOP development, quality systems, and maintenance frameworks, ensuring smooth transition from build phase to steady-state operations before transfer.',
    image: '/images/service-03-bot-stabilization.webp',
    tags: ['Interim Leadership', 'OEE Ramp-Up', 'SOPs & Quality', 'Handover Assurance'],
  },
  {
    id: 'engineering-localisation',
    number: '04',
    title: 'Engineering and Product Localisation',
    description:
      'Turning India into a true engineering and cost advantage. We support product and process localisation tailored to Indian operating conditions, enabling faster scale-up and cost efficiency. Our work includes value engineering, cost-down programmes, engineering centre setup, workflow design, and alignment across design standards, quality systems, and PLM platforms for global manufacturing organizations.',
    image: '/images/service-04-localization.webp',
    tags: ['Value Engineering', 'Supplier Localisation', 'PLM Alignment', 'Cost-Down'],
  },
  {
    id: 'jv-ma-advisory',
    number: '05',
    title: 'JV, M&A, and Brownfield Advisory',
    description:
      'Execution insight that leads to better deals and smoother integrations. We conduct technical and operational due diligence for joint ventures, mergers, and acquisitions in India, with a strong focus on manufacturing readiness and risk. Our team develops brownfield upgrade and modernisation roadmaps and supports post-merger integration to align operations, systems, and leadership.',
    image: '/images/service-05-jv-advisory.webp',
    tags: ['Technical DD', 'Brownfield Upgrades', 'Operational Integration', 'Partner Sourcing'],
  },
];

export const WHY_CHOOSE_POINTS: WhyChoosePoint[] = [
  {
    id: 'exp',
    title: '25+ Years Experience',
    description: '25+ years of hands-on industrial execution experience', // TODO(client): confirm exact years
  },
  {
    id: 'governance',
    title: 'Board Governance & Ground Realities',
    description: 'Deep understanding of global board governance and Indian operating environments',
  },
  {
    id: 'networks',
    title: 'Ecosystem & Vendor Networks',
    description: 'Long-standing relationships with PMCs, EPCs, regulators, and verified suppliers',
  },
  {
    id: 'accountability',
    title: 'Single Accountable Partner',
    description: 'One accountable partner across strategy, build, and operational ramp-up',
  },
  {
    id: 'tested-execution',
    title: 'Tested Execution',
    description: 'Disciplined execution grounded in operational realities without theoretical detachment',
  },
  {
    id: 'outcomes',
    title: 'Outcomes, Not Optimism',
    description: 'We don’t sell optimism. We deliver outcomes.',
  },
];

export const WHY_INDIA_PHOTOS: WhyIndiaPhoto[] = [
  {
    id: 'photo-1',
    image: '/images/why-india-01-engineering.webp',
    title: 'Deep global engineering',
    subtitle: 'Modern industrial engineering clusters',
  },
  {
    id: 'photo-2',
    image: '/images/why-india-02-manufacturing.webp',
    title: 'Cost-efficient manufacturing',
    subtitle: 'High precision production floors',
  },
  {
    id: 'photo-3',
    image: '/images/why-india-03-policy.webp',
    title: 'Aligned policy incentives',
    subtitle: 'PLI schemes and state industrial corridors',
  },
  {
    id: 'photo-4',
    image: '/images/why-india-04-logistics.png',
    title: 'Global market access',
    subtitle: 'Strategic multi-modal logistics nodes',
  },
];

// Gated behind siteFacts.features.showTestimonials
// TODO(client): confirm real person, company and written permission
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Indiabridge stayed accountable beyond plans and construction, until operations stabilised and performance became predictable. That level of ownership is rare.',
    author: 'Michael Thornton',
    role: 'Chief Executive Officer',
    company: 'Global Precision Engineering',
    avatar: '/images/testimonial-michael-thornton.webp',
  },
  {
    id: 'test-2',
    quote:
      'Entering the Indian market without seasoned ground execution is a recipe for delays and cost inflation. Indiabridge navigated the regulatory, EPC, and localisation hurdles with rigorous operational discipline and on-schedule handover.',
    author: 'Dr. Stefan Krause',
    role: 'VP Operations',
    company: 'European Industrial Systems',
    avatar: '/images/testimonial-stefan-krause.webp',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What makes Indiabridge Capital Partners different from traditional advisors or EPC firms?',
    answer:
      'Most advisors stop at strategy and most EPCs stop at construction. Indiabridge operates across strategy, engineering, and operations as one accountable partner. We stay involved from boardroom intent through stable production, taking ownership of project delivery rather than delivering detached recommendations.',
  },
  {
    id: 'faq-2',
    question: 'Why do Indiabridge engagements extend beyond factory construction and commissioning?',
    answer:
      'Because commissioning is not commercial success. Significant execution risk in India emerges during ramp-up and early operations. We provide hands-on leadership through pilot runs, quality stabilisation, and SOP institutionalisation until production is steady and predictable.',
  },
  {
    id: 'faq-3',
    question: 'How does Indiabridge reduce execution and governance risk for boards and investors?',
    answer:
      'We base decisions on real operating conditions, apply disciplined capital governance, and maintain clear ownership across engineering, PMCs, and contractors with board-ready reporting and transparent milestone verification.',
  },
  {
    id: 'faq-4',
    question: 'When should a company engage Indiabridge in its India entry journey?',
    answer:
      'Ideally before capital is committed. Early engagement allows us to shape entry strategy, execution architecture, state incentives, and site selection to prevent costly missteps later.',
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'art-1',
    slug: 'why-india-manufacturing-projects-fail',
    tag: 'Industrial Execution',
    title: 'Why India Manufacturing Projects Fail After the Factory Is Finished',
    excerpt:
      'The most critical phase in India industrial investments is not civil construction, but the handover gap when contractors depart and local teams face ramp-up discipline.',
    readTime: '6 min read',
    date: 'September 2026',
    image: '/images/blog-01-factory-failure.webp',
    content: [
      'Most corporate post-mortems on India manufacturing failures focus on civil delays, land acquisition bottlenecks, or bureaucratic permit hold-ups. While those hurdles are real, industrial experience demonstrates that the single most critical vulnerability occurs after the building is erected and machines are turned on.',
      'When the EPC contractor and engineering consultants complete their punch list and demobilise, multinational companies frequently experience a challenging operational gap. The plant manager is new, the shift supervisors lack institutional product knowledge, and the local supply chain has not been rigorously stress-tested for volume quality consistency.',
      "The solution is not more consulting reports; it is disciplined operational stabilisation. Indiabridge's Build-Operate-Transfer methodology bridges this exact gap by maintaining senior engineering governance on-site until Overall Equipment Effectiveness (OEE) targets and scrap rate thresholds are proven over consecutive operating quarters.",
    ],
  },
  {
    id: 'art-2',
    slug: 'everyone-advises-no-one-owns',
    tag: 'Industrial Governance',
    title: 'Everyone Advises. No One Owns. The Real Risk in India Projects',
    excerpt:
      'Why traditional corporate advisory structures struggle to resolve ground-level friction, and why single-point execution accountability protects capital.',
    readTime: '5 min read',
    date: 'August 2026',
    image: '/images/blog-02-risk-ownership.webp',
    content: [
      'When entering India, global manufacturers often assemble management consultancies, legal firms, accounting advisory groups, and local design architects. Yet when costs overrun and commissioning slips, each party points to clauses limiting operational liability.',
      'In high-stakes industrial environments, advice without ground-level ownership creates false confidence at the board level while exposing local operating teams to friction.',
      'Single accountability is the model that aligns incentives. By having one accountable partner who manages the lifecycle — from state industrial development negotiations to contractor coordination and shop-floor calibration — boards regain governance over their capital.',
    ],
  },
  {
    id: 'art-3',
    slug: 'china-plus-one-decision-not-strategy',
    tag: 'Supply Chain Strategy',
    title: 'China+1 Is a Decision, Not a Strategy',
    excerpt:
      'Moving manufacturing capacity to India requires deep tooling adaptation, tier-2 vendor qualification, and material engineering — not simply replicating an existing bill of materials.',
    readTime: '7 min read',
    date: 'August 2026',
    image: '/images/blog-03-china-plus-one.webp',
    content: [
      'Multinational boards frequently declare a "China+1" mandate without recognising that manufacturing ecosystems require disciplined domestic vendor development. You cannot simply take existing tooling, blueprints, and vendor specifications and expect them to plug into local suppliers without extensive localisation.',
      'Successful localisation demands metallurgical auditing, local raw material tolerance testing, tooling modifications, and multi-tier vendor qualification. Companies that succeed in India build resilient domestic vendor clusters rather than relying indefinitely on imported sub-assemblies.',
    ],
  },
  {
    id: 'art-4',
    slug: 'india-punishes-assumptions',
    tag: 'Board Governance',
    title: 'India Punishes Assumptions: A Board-Level Framework for Manufacturing Entry',
    excerpt:
      'A structured checklist for evaluating state MoUs, fiscal subsidy disbursement timelines, power grid reliability, and statutory clearances before committing capital.',
    readTime: '8 min read',
    date: 'July 2026',
    image: '/images/why-india-02-manufacturing.webp',
    content: [
      'India is a federal union of states, each with distinct industrial policies, labour ecosystems, water availability, power tariffs, and logistics infrastructure. Assuming that an entry strategy formulated for Gujarat or Maharashtra can be directly replicated in Tamil Nadu or Karnataka is a critical executive assumption.',
      'Our board-level framework evaluates five mandatory vectors before capital deployment: statutory single-window effectiveness, downstream supplier proximity, port and rail freight velocity, technical university feeder pipelines, and realistic state subsidy payback schedules.',
    ],
  },
  {
    id: 'art-5',
    slug: 'commissioning-is-not-success',
    tag: 'Plant Operations',
    title: 'Commissioning Is Not Success: The Gap Before Stable Operations',
    excerpt:
      'Running initial dry-cycle trials is routine. Achieving consistent OEE and stable quality PPM metrics under full operating shifts is where value is protected.',
    readTime: '6 min read',
    date: 'July 2026',
    image: '/images/why-india-01-engineering.webp',
    content: [
      'Cutting the ribbon at a newly commissioned facility is a celebratory milestone, but in the lifecycle of manufacturing plant economics, it marks the beginning of the operational ramp-up curve.',
      'Between commissioning day and profitable steady-state volume lies the ramp-up phase, characterised by tooling adjustments, surface finishing calibration, and local tier-2 component feeding. Navigating this requires seasoned plant managers who understand both global quality tolerances and the nuances of local shop-floor execution.',
    ],
  },
];

export const METHODOLOGY_PHASES: MethodologyPhase[] = [
  {
    phase: 'PHASE 01',
    title: 'Discovery & Strategy Alignment',
    duration: 'Weeks 1–6',
    description:
      'We work with boards and leadership teams to define India entry objectives, risk tolerance, governance expectations, and success metrics before execution begins. We stress-test assumptions on land, labour costs, supply chain depth, and lead times.',
    deliverables: [
      'Board Charter & Risk Tolerance Thresholds',
      'Strategic Feasibility Modelling',
      'State-Level Ecosystem & Subsidies Analysis',
    ],
  },
  {
    phase: 'PHASE 02',
    title: 'Concept & Feasibility Development',
    duration: 'Weeks 7–16',
    description:
      'We translate intent into executable plans through rigorous feasibility studies, multi-state location selection, incentive negotiation, statutory environmental compliance roadmaps, and operating model designs grounded in Indian realities.',
    deliverables: [
      'Location Scoring & Land Due Diligence',
      'Fiscal Incentive MoU Negotiation',
      'Statutory & Environmental Permitting Pathway',
    ],
  },
  {
    phase: 'PHASE 03',
    title: 'Industrial Design & Execution',
    duration: 'Months 5–18',
    description:
      'We oversee factory architectural design, engineering coordination, PMC and EPC governance, and site construction control to ensure cost, schedule, and quality discipline. We manage vendor bidding, contracts, and quality audits.',
    deliverables: [
      'Civil PMC & EPC Tender Governance',
      'On-Site Execution & Schedule Control',
      'Machinery Import & Commissioning Oversight',
    ],
  },
  {
    phase: 'PHASE 04',
    title: 'Delivery, Stabilisation & Support',
    duration: 'Months 19–24+',
    description:
      'We remain engaged through plant ramp-up and operational stabilisation, embedding local leadership, standard operating procedures, ISO/IATF quality systems, and safety culture until the operation performs reliably and predictably.',
    deliverables: [
      'Plant Leadership & Workforce Onboarding',
      'SOP Institutionalisation & Quality Certifications',
      'BOT Transfer Milestone Verification',
    ],
  },
];

export const CORE_PRINCIPLES: CorePrinciple[] = [
  {
    number: '01',
    title: 'Single Accountability',
    description:
      'No passing responsibility between consultants, civil PMCs, and machine vendors. Indiabridge stands accountable for project governance and delivery.',
  },
  {
    number: '02',
    title: 'Ground-Truth Reality',
    description:
      'We assess on-the-ground conditions candidly, anticipating logistical friction, vendor lead times, and administrative steps early.',
  },
  {
    number: '03',
    title: 'Tested Execution',
    description:
      'Every recommendation is backed by working contracts, verified vendor lists, and realistic execution timelines.',
  },
  {
    number: '04',
    title: 'Long-Term Value',
    description:
      'We build industrial platforms designed to operate for decades, embedding engineering durability, scalable power, and local supply resilience.',
  },
];
