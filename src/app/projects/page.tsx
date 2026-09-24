import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects — Industrial Case Studies',
  description:
    'Explore Indiabridge case studies delivering industrial facilities, manufacturing platforms, and greenfield plants across India.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
