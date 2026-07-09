import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';

export const metadata: Metadata = {
  title: 'Contact Sentinel Fire Protection | Schedule Service in Waco & Central Texas',
  description: 'Contact Sentinel Fire Protection to schedule fire alarm service, sprinkler work, inspections, or monitoring. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 900-1111.',
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: 'Contact Sentinel Fire Protection | Schedule Service in Waco & Central Texas',
    description: 'Call, text, or submit a request. Same-day service available. Flat-rate pricing. Licensed Fire Alarm Contractor.',
    url: `${BASE_URL}/contact`,
    siteName: 'Sentinel Fire Protection',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
