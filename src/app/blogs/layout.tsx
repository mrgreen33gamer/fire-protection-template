import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';

export const metadata: Metadata = {
  title: 'Fire Protection Tips & Insights | Sentinel Fire Protection Blog',
  description:
    'Fire Protection safety tips, sprinkler systems repair guides, and fire monitoring advice for Waco and Central Texas homeowners from Sentinel Fire Protection.',
  alternates: { canonical: `${BASE_URL}/blogs` },
  openGraph: {
    title: 'Fire Protection Tips & Insights | Sentinel Fire Protection Blog',
    description: 'Practical fire protection guidance for Central Texas homeowners.',
    url: `${BASE_URL}/blogs`,
    siteName: 'Sentinel Fire Protection',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
