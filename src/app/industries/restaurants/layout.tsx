import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';
const url = BASE_URL + '/industries/restaurants';

export const metadata: Metadata = {
  title: "Fire Protection for Restaurants & Hospitality | Waco TX | Sentinel Fire Protection",
  description: "Fire protection for restaurants and hospitality in Waco TX — kitchen hood suppression, extinguishers, alarms, and inspections that keep you open and compliant.",
  alternates: { canonical: url },
  openGraph: {
    title: "Fire Protection for Restaurants & Hospitality | Waco TX | Sentinel Fire Protection",
    description: "Fire protection for restaurants and hospitality in Waco TX — kitchen hood suppression, extinguishers, alarms, and inspections that keep you open and compliant.",
    url,
    siteName: "Sentinel Fire Protection",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
