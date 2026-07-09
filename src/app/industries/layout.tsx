import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';
const url = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Restaurants & Hospitality, Healthcare Facilities & Commercial | Sentinel Fire Protection",
  description:
    "Sentinel Fire Protection serves restaurants & hospitality companies, healthcare facilities & remodelers, and multifamily housing across Waco and Central Texas with fire protection repair, installation, and maintenance.",
  keywords: [
    "fire protection restaurants & hospitality Waco",
    "healthcare facility fire protections Texas",
    "commercial fire protections Waco TX",
    "multifamily fire protection service",
    "Sentinel Fire Protection industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | Sentinel Fire Protection",
    description: "Fire protection programs for restaurant operators, healthcare facilities, and multifamily housing in Central Texas.",
    url,
    siteName: "Sentinel Fire Protection",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
