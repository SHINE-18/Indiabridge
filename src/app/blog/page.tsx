import type { Metadata } from 'next';
import { siteFacts } from '@/lib/constants';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Perspectives — Industrial Insights',
  description:
    'Executive insights and ground truths on manufacturing entry, plant commissioning, and industrial execution across India.',
  alternates: {
    canonical: `${siteFacts.urls.siteUrl}/blog`,
  },
  openGraph: {
    title: `Perspectives — Industrial Insights | ${siteFacts.brand.name}`,
    description:
      'Executive insights and ground truths on manufacturing entry, plant commissioning, and industrial execution across India.',
    url: `${siteFacts.urls.siteUrl}/blog`,
    siteName: siteFacts.brand.name,
    locale: 'en_IN',
    images: [
      {
        url: siteFacts.urls.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteFacts.brand.name} Industrial Perspectives`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Perspectives — Industrial Insights | ${siteFacts.brand.name}`,
    description:
      'Executive insights and ground truths on manufacturing entry, plant commissioning, and industrial execution across India.',
    images: [siteFacts.urls.ogImage],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
