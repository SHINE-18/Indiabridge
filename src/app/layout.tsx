import type { Metadata, Viewport } from 'next';
import { Inter, DM_Sans, Outfit, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { siteFacts, SITE_METADATA } from '@/lib/constants';
import './globals.css';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#101012',
  width: 'device-width',
  initialScale: 1,
};

const isPreview =
  process.env.VERCEL_ENV === 'preview' ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' ||
  (typeof process.env.NEXT_PUBLIC_SITE_URL === 'string' &&
    process.env.NEXT_PUBLIC_SITE_URL.includes('.vercel.app'));

export const metadata: Metadata = {
  metadataBase: new URL(siteFacts.urls.siteUrl),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Indiabridge Capital Partners | India Manufacturing Execution',
    template: `%s | ${siteFacts.brand.name}`,
  },
  description: siteFacts.brand.description,
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteFacts.urls.siteUrl,
    title: 'Indiabridge Capital Partners | India Manufacturing Execution',
    description: siteFacts.brand.description,
    siteName: siteFacts.brand.name,
    images: [
      {
        url: siteFacts.urls.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteFacts.brand.name} — Industrial Execution Platform`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indiabridge Capital Partners | India Manufacturing Execution',
    description: siteFacts.brand.description,
    images: [siteFacts.urls.ogImage],
  },
  robots: isPreview
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
      },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteFacts.brand.name,
  legalName: siteFacts.brand.legalName,
  url: siteFacts.urls.siteUrl,
  logo: `${siteFacts.urls.siteUrl}/favicon.png`,
  description: siteFacts.brand.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteFacts.addresses.indiaHq.street,
    addressLocality: siteFacts.addresses.indiaHq.city,
    addressRegion: siteFacts.addresses.indiaHq.region,
    postalCode: siteFacts.addresses.indiaHq.postalCode,
    addressCountry: siteFacts.addresses.indiaHq.countryCode,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: siteFacts.contact.phone,
      contactType: 'customer service',
      email: siteFacts.contact.generalEmail,
      areaServed: ['IN', 'GB', 'US', 'DE', 'JP'],
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  sameAs: [siteFacts.socials.linkedin, siteFacts.socials.twitter],
};

import { ScrollRevealManager } from '@/components/layout/ScrollRevealManager';
import { PageTransitionProvider } from '@/components/layout/PageTransitionProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <PageTransitionProvider>
          <SmoothScrollProvider>
            <ScrollRevealManager />
            <Navbar />
            {children}
          </SmoothScrollProvider>
        </PageTransitionProvider>
      </body>
    </html>
  );
}
