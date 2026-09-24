import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us — Industrial Execution',
  description:
    'Indiabridge is an industrial execution firm helping global manufacturers enter, build, and scale operations across India.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
