import { siteFacts } from '@/lib/constants';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Indiabridge Capital Partners',
  description:
    'Connect with Indiabridge to discuss your manufacturing entry, plant setup, or industrial execution operations across India.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Indiabridge Capital Partners',
    description:
      'Connect with Indiabridge to discuss your manufacturing entry, plant setup, or industrial execution operations across India.',
    url: `${siteFacts.urls.siteUrl}/contact`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteFacts.brand.name,
    images: [
      {
        url: siteFacts.urls.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteFacts.brand.name} — Contact & Mandates`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Indiabridge Capital Partners',
    description:
      'Connect with Indiabridge to discuss your manufacturing entry, plant setup, or industrial execution operations across India.',
    images: [siteFacts.urls.ogImage],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
