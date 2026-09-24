import type { Metadata } from 'next';
import { siteFacts } from '@/lib/constants';
import PrivacyClient from '@/app/privacy/PrivacyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy | Indiabridge Capital Partners',
  description:
    'Information on how Indiabridge Capital Partners processes and protects corporate enquiry details under the DPDP Act 2023 and UK GDPR.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Indiabridge Capital Partners',
    description:
      'Information on how Indiabridge Capital Partners processes and protects corporate enquiry details under the DPDP Act 2023 and UK GDPR.',
    url: `${siteFacts.urls.siteUrl}/privacy`,
    type: 'website',
    locale: 'en_IN',
    siteName: siteFacts.brand.name,
    images: [
      {
        url: siteFacts.urls.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteFacts.brand.name} — Privacy Policy`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Indiabridge Capital Partners',
    description:
      'Information on how Indiabridge Capital Partners processes and protects corporate enquiry details under the DPDP Act 2023 and UK GDPR.',
    images: [siteFacts.urls.ogImage],
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
