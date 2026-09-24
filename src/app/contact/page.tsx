import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us — Industrial Advisory',
  description:
    'Connect with Indiabridge to discuss your manufacturing entry, plant setup, or industrial execution operations across India.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
