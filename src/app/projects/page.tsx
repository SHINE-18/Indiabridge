import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteFacts } from '@/lib/constants';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects — Industrial Case Studies',
  description:
    'Explore Indiabridge case studies delivering industrial facilities, manufacturing platforms, and greenfield plants across India.',
  alternates: {
    canonical: `${siteFacts.urls.siteUrl}/projects`,
  },
  robots: {
    index: siteFacts.features.showProjects,
    follow: siteFacts.features.showProjects,
  },
};

export default function ProjectsPage() {
  if (!siteFacts.features.showProjects) {
    notFound();
  }

  return <ProjectsClient />;
}
