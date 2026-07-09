import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';

export const metadata: Metadata = {
  title: "About Sentinel Fire Protection — Waco TX Fire Protection Since 2001",
  description: "Meet the Sentinel Fire Protection team. Locally owned in Waco, Texas since 2001 by Captain (ret.) Neil Briggs. Licensed Fire Alarm Contractor · Bonded & Insured. Code-Compliant Installs · Inspection On-Time Guarantee.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About Sentinel Fire Protection — Waco TX Fire Protection Since 2001",
    description: "Locally owned fire protection in Waco since 2001. Licensed Fire Alarm Contractor · Bonded & Insured.",
    url: `${BASE_URL}/about`,
    siteName: "Sentinel Fire Protection",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
