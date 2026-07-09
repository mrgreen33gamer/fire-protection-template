import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';
const url = BASE_URL + '/industries/healthcare';

export const metadata: Metadata = {
  title: "Fire Protection for Healthcare Facilities | Waco TX | Sentinel Fire Protection",
  description: "Fire protection for healthcare facilities in Waco TX — clinics, medical offices, and care environments needing reliable alarms, extinguishers, monitoring, and inspections.",
  alternates: { canonical: url },
  openGraph: {
    title: "Fire Protection for Healthcare Facilities | Waco TX | Sentinel Fire Protection",
    description: "Fire protection for healthcare facilities in Waco TX — clinics, medical offices, and care environments needing reliable alarms, extinguishers, monitoring, and inspections.",
    url,
    siteName: "Sentinel Fire Protection",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
