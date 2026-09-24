import type { Metadata } from 'next';
import ValuesClient from './ValuesClient';

export const metadata: Metadata = {
  title: 'Our Values — Grounded Execution',
  description:
    'Explore the core principles guiding Indiabridge: grounded decision-making, outcome ownership, capital discipline, and strategic alignment.',
  alternates: {
    canonical: '/values',
  },
};

export default function ValuesPage() {
  return <ValuesClient />;
}
