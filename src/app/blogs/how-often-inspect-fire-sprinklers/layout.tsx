import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';
const slug = 'how-often-inspect-fire-sprinklers';
const url = `${BASE_URL}/blogs/${slug}`;
const imgUrl = `${BASE_URL}/pages/blogs/heat-pump.jpg`;

export const metadata: Metadata = {
  title: "How Often Should You Inspect Fire Sprinklers | Waco TX | Sentinel Fire Protection",
  description: "NFPA and local AHJ rules set minimum inspection intervals for wet, dry, and pre-action systems. What Waco property owners need on the calendar.",
  keywords: ['fire sprinkler inspection frequency', 'sprinkler inspection Waco TX', 'NFPA sprinkler inspection Central Texas'],
  alternates: { canonical: url },
  openGraph: {
    title: "How Often Should You Inspect Fire Sprinklers | Waco TX",
    description: "NFPA and local AHJ rules set minimum inspection intervals for wet, dry, and pre-action systems.",
    url,
    siteName: "Sentinel Fire Protection",
    images: [{ url: imgUrl, width: 1200, height: 630, alt: "Fire sprinkler inspection frequency guide for Waco TX facilities" }],
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
