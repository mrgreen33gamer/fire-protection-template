import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';
const url = BASE_URL + '/industries/multifamily';

export const metadata: Metadata = {
  title: "Fire Protection for Multifamily Housing | Waco TX | Sentinel Fire Protection",
  description: "Fire protection for multifamily housing in Waco TX — common-area alarms, extinguishers, sprinklers, monitoring, and portfolio inspections for apartments and mixed-use.",
  alternates: { canonical: url },
  openGraph: {
    title: "Fire Protection for Multifamily Housing | Waco TX | Sentinel Fire Protection",
    description: "Fire protection for multifamily housing in Waco TX — common-area alarms, extinguishers, sprinklers, monitoring, and portfolio inspections for apartments and mixed-use.",
    url,
    siteName: "Sentinel Fire Protection",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
