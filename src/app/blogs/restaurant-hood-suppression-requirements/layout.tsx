import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';
const slug = 'restaurant-hood-suppression-requirements';
const url = `${BASE_URL}/blogs/${slug}`;
const imgUrl = `${BASE_URL}/pages/blogs/energy-savings.jpg`;

export const metadata: Metadata = {
  title: "Restaurant Hood Suppression Requirements in Texas | Sentinel Fire Protection",
  description: "Ansul/kitchen hood systems, semi-annual inspections, link replacement, and what health and fire inspectors look for in Central Texas restaurants.",
  keywords: ['kitchen hood suppression requirements Texas', 'Ansul inspection Waco', 'restaurant fire hood Central Texas'],
  alternates: { canonical: url },
  openGraph: {
    title: "Restaurant Hood Suppression Requirements in Texas",
    description: "Semi-annual inspections, link replacement, and compliance tips for Central Texas restaurants.",
    url,
    siteName: "Sentinel Fire Protection",
    images: [{ url: imgUrl, width: 1200, height: 630, alt: "Restaurant kitchen hood suppression requirements for Texas" }],
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
