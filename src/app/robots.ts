import { MetadataRoute } from 'next';
import { siteFacts } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  // If deployed on Vercel preview or .vercel.app domain, block all crawlers
  const isVercelPreview =
    process.env.VERCEL_ENV === 'preview' ||
    Boolean(process.env.VERCEL_URL && process.env.VERCEL_URL.includes('.vercel.app')) ||
    Boolean(process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.includes('.vercel.app'));

  if (isVercelPreview) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteFacts.urls.siteUrl}/sitemap.xml`,
  };
}
