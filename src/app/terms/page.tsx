import type { Metadata } from 'next';
import { siteFacts } from '@/lib/constants';
import TermsClient from '@/app/terms/TermsClient';

export const metadata: Metadata = {
  title: 'Terms of Use & Legal Disclaimer | Indiabridge Capital Partners',
  description:
    'Terms of use, commercial advisory disclaimers, and intellectual property terms for the Indiabridge Capital Partners platform.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Use & Legal Disclaimer | Indiabridge Capital Partners',
    description:
      'Terms of use, commercial advisory disclaimers, and intellectual property terms for the Indiabridge Capital Partners platform.',
    url: `${siteFacts.urls.siteUrl}/terms`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteFacts.brand.name,
    images: [
      {
        url: siteFacts.urls.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteFacts.brand.name} — Terms of Use`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use & Legal Disclaimer | Indiabridge Capital Partners',
    description:
      'Terms of use, commercial advisory disclaimers, and intellectual property terms for the Indiabridge Capital Partners platform.',
    images: [siteFacts.urls.ogImage],
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
