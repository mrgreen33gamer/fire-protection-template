import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';
const slug = 'fire-alarm-monitoring-worth-it';
const url = `${BASE_URL}/blogs/${slug}`;
const imgUrl = `${BASE_URL}/pages/blogs/ac-replacement.jpg`;

export const metadata: Metadata = {
  title: "Is Fire Alarm Monitoring Worth It? | Waco TX | Sentinel Fire Protection",
  description: "Central station monitoring vs. local-only alarms: response time, insurance, AHJ expectations, and when Waco businesses should upgrade.",
  keywords: ['fire alarm monitoring Waco TX', 'central station monitoring worth it', 'fire monitoring Central Texas'],
  alternates: { canonical: url },
  openGraph: {
    title: "Is Fire Alarm Monitoring Worth It? | Waco TX",
    description: "Central station vs. local-only alarms — when monitoring is worth it for Central Texas buildings.",
    url,
    siteName: "Sentinel Fire Protection",
    images: [{ url: imgUrl, width: 1200, height: 630, alt: "Fire alarm monitoring value guide for Central Texas buildings" }],
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
