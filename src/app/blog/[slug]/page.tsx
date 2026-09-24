import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteFacts } from '@/lib/constants';
import BlogDetailClient, { ArticleData, RelatedArticle } from './BlogDetailClient';

const articlesDatabase: Record<string, ArticleData> = {
  'why-india-manufacturing-projects-fail': {
    slug: 'why-india-manufacturing-projects-fail',
    title: 'Why India Manufacturing Projects Fail After the Factory Is Finished',
    date: 'September 10, 2026',
    category: 'Industrial',
    heroImage: '/images/blog-01-factory-failure.webp',
    leadParagraph:
      'For global manufacturers, building a factory in India is rarely the hardest part. Making it perform consistently is.',
    bodyParagraphs: [
      'Most India manufacturing projects do not fail at strategy or construction. They fail after commissioning, when execution ownership fades and operational reality takes over. This post-commissioning phase is where factory execution risk is highest and where long-term underperformance begins.',
      'Commissioning is often treated as completion. In reality, it marks the start of operational stabilisation. Plants go live before leadership is fully in place, systems are integrated, or teams are aligned to production targets. KPIs remain unclear, quality issues surface, and cost assumptions begin to erode.',
      'A common failure point is accountability. EPC and PMC responsibilities end once the factory is built, but no single owner remains accountable for outcomes. ERP, quality, maintenance, and supply chain systems operate in silos, while boards receive optimistic reports that mask structural issues.',
      'India amplifies execution gaps. Labour complexity, supplier maturity, regulatory interfaces, and infrastructure variability turn small missteps into persistent problems. This is not an India problem. It is an execution problem.',
      'Successful manufacturers treat stabilisation as a distinct phase. Interim leadership, KPI-driven ramp-up, system integration, and operational ownership are non-negotiable.',
      'The real question is not whether the factory is built, but who owns performance after commissioning.',
    ],
  },
  'china-plus-one-decision-not-strategy': {
    slug: 'china-plus-one-decision-not-strategy',
    title: 'China+1 Is a Decision, Not a Strategy',
    date: 'August 28, 2026',
    category: 'Industrial',
    heroImage: '/images/blog-02-china-plus-one.jpg',
    leadParagraph:
      'Corporate boardrooms around the world have universally endorsed the mandate for supply chain diversification. But a boardroom mandate is not a factory floor reality.',
    bodyParagraphs: [
      'Treating "China+1" as a high-level procurement realignment rather than a complex industrial execution initiative leads to severe capital and scheduling penalties.',
      'India offers unmatched scale, deep technical engineering talent, and aggressive federal PLI support, but navigating state-level operating nuances requires ground presence and local contract governance.',
      'Winning organizations treat Indian facilities as independent centres of manufacturing excellence rather than subordinate satellite operations.',
      'Operational success requires building local supplier tiers, securing stable power infrastructure, and designing quality governance that operates autonomously.',
    ],
  },
  'commissioning-is-not-success': {
    slug: 'commissioning-is-not-success',
    title: 'Commissioning Is Not Success: The Gap Before Stable Operations',
    date: 'August 14, 2026',
    category: 'Industrial',
    heroImage: '/images/blog-03-commissioning.jpg',
    leadParagraph:
      'Running a dry-cycle batch under equipment vendor supervision is vastly different from sustaining 85% OEE across two continuous operating shifts.',
    bodyParagraphs: [
      'EPC contractors and machinery OEMs define commissioning as running standard test parts without catastrophic failure. Once sign-off forms are completed, vendor teams depart, leaving plant operators to face live industrial turbulence alone.',
      'The gap between technical commissioning and commercial production stability is where millions in working capital disappear through scrap rates, cycle time delays, and tooling wear.',
      'Indiabridge bridges this exact gap by remaining accountable on the ground through ramp-up and operational stabilisation until targeted unit economics are secured.',
    ],
  },
  'everyone-advises-no-one-owns': {
    slug: 'everyone-advises-no-one-owns',
    title: 'Everyone Advises. No One Owns. The Real Risk in India Projects',
    date: 'July 29, 2026',
    category: 'Industrial',
    heroImage: '/images/blog-02-risk-ownership.webp',
    leadParagraph:
      'International manufacturers entering India are rarely short on advice. Strategy firms, brokers, and advisors provide endless decks—yet accountability remains absent.',
    bodyParagraphs: [
      'When contractors fail to mobilise or statutory permits hit administrative bottlenecks, theoretical advice offers zero protection to capital.',
      'Execution risk is resolved on the ground through daily site coordination, direct vendor negotiations, and uncompromising quality discipline.',
      'Indiabridge exists to eliminate this advisory void by providing hands-on ownership and operational leadership until facilities yield reliable output.',
    ],
  },
  'india-punishes-assumptions': {
    slug: 'india-punishes-assumptions',
    title: 'India Punishes Assumptions: A Board Framework for Manufacturing Entry',
    date: 'July 12, 2026',
    category: 'Industrial',
    heroImage: '/images/why-india-02-manufacturing.webp',
    leadParagraph:
      'Entering India requires unlearning assumptions formed in Western or East Asian manufacturing environments.',
    bodyParagraphs: [
      'Power tariffs, water access, supply chain proximity, and labour dynamics vary dramatically across state borders in India.',
      'A successful board framework prioritizes ground reality over headline subsidies, demanding realistic permitting timelines and tight Capex controls.',
      'By establishing institutional execution governance before capital is deployed, international leadership teams build durable manufacturing advantages in India.',
    ],
  },
};

const relatedArticles: RelatedArticle[] = [
  {
    slug: 'china-plus-one-decision-not-strategy',
    title: 'China+1 Is a Decision, Not a Strategy',
    category: 'Industrial',
    image: '/images/blog-02-china-plus-one.jpg',
  },
  {
    slug: 'commissioning-is-not-success',
    title: 'Commissioning Is Not Success: The Gap Before Stable Operations',
    category: 'Industrial',
    image: '/images/blog-03-commissioning.jpg',
  },
  {
    slug: 'everyone-advises-no-one-owns',
    title: 'Everyone Advises. No One Owns. The Real Risk in India Projects',
    category: 'Industrial',
    image: '/images/blog-02-risk-ownership.webp',
  },
];

export function generateStaticParams() {
  return Object.keys(articlesDatabase).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesDatabase[slug];

  if (!article) {
    return {
      title: 'Perspective Article',
      description: 'Industrial insight and perspective by Indiabridge.',
    };
  }

  // Ensure title is concise
  const displayTitle =
    article.title.length > 55 ? `${article.title.slice(0, 52)}...` : article.title;
  const cleanDescription = article.leadParagraph.slice(0, 150);

  return {
    title: displayTitle,
    description: cleanDescription,
    alternates: {
      canonical: `${siteFacts.urls.siteUrl}/blog/${article.slug}`,
    },
    openGraph: {
      title: `${displayTitle} | ${siteFacts.brand.name}`,
      description: cleanDescription,
      url: `${siteFacts.urls.siteUrl}/blog/${article.slug}`,
      siteName: siteFacts.brand.name,
      locale: 'en_IN',
      images: [
        {
          url: article.heroImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${displayTitle} | ${siteFacts.brand.name}`,
      description: cleanDescription,
      images: [article.heroImage],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesDatabase[slug];

  if (!article) {
    notFound();
  }

  const filteredRelated = relatedArticles.filter((a) => a.slug !== article.slug);

  return <BlogDetailClient article={article} relatedArticles={filteredRelated} />;
}
