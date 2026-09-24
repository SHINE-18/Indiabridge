import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Perspectives — Industrial Insights',
  description:
    'Executive insights and ground truths on manufacturing entry, plant commissioning, and industrial execution across India.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
