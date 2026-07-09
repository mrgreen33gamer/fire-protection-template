import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';

export const metadata: Metadata = {
  title: 'Service Areas | Sentinel Fire Protection — Waco & Central Texas Fire Protection',
  description: 'Sentinel Fire Protection serves Waco, Hewitt, Woodway, Temple, Killeen, McGregor, China Spring, Bellmead, and surrounding Central Texas with fire alarms, sprinklers, inspections, and monitoring.',
  alternates: { canonical: `${BASE_URL}/service-areas` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
