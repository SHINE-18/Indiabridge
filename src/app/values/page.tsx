import type { Metadata } from 'next';
import { siteFacts } from '@/lib/constants';
import ValuesClient from './ValuesClient';

export const metadata: Metadata = {
  title: 'Our Values — Grounded Execution',
  description:
    'Explore the core principles guiding Indiabridge: grounded decision-making, outcome ownership, capital discipline, and strategic alignment.',
  alternates: {
    canonical: `${siteFacts.urls.siteUrl}/values`,
  },
  openGraph: {
    title: `Our Values — Grounded Execution | ${siteFacts.brand.name}`,
    description:
      'Explore the core principles guiding Indiabridge: grounded decision-making, outcome ownership, capital discipline, and strategic alignment.',
    url: `${siteFacts.urls.siteUrl}/values`,
    siteName: siteFacts.brand.name,
    locale: 'en_IN',
    images: [
      {
        url: siteFacts.urls.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteFacts.brand.name} Core Values`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Our Values — Grounded Execution | ${siteFacts.brand.name}`,
    description:
      'Explore the core principles guiding Indiabridge: grounded decision-making, outcome ownership, capital discipline, and strategic alignment.',
    images: [siteFacts.urls.ogImage],
  },
};

export default function ValuesPage() {
  return <ValuesClient />;
}
