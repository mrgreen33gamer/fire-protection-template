import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';
const url = BASE_URL + '/services/annual-inspections';

export const metadata: Metadata = {
  title: "Annual Inspections Waco TX | Sentinel Fire Protection",
  description: "Annual fire protection inspections in Waco TX — NFPA-aligned reports, deficiency tracking, and Inspection On-Time Guarantee.",
  keywords: ["annual fire inspection Waco TX","NFPA fire inspection Central Texas","Sentinel Fire Protection"],
  alternates: { canonical: url },
  openGraph: {
    title: "Annual Inspections Waco TX | Sentinel Fire Protection",
    description: "Annual fire protection inspections in Waco TX — NFPA-aligned reports, deficiency tracking, and Inspection On-Time Guarantee.",
    url,
    siteName: "Sentinel Fire Protection",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Annual Inspections Waco TX | Sentinel Fire Protection",
    description: "Annual fire protection inspections in Waco TX — NFPA-aligned reports, deficiency tracking, and Inspection On-Time Guarantee.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Annual Inspections",
  description: "Annual fire protection inspections in Waco TX — NFPA-aligned reports, deficiency tracking, and Inspection On-Time Guarantee.",
  provider: {
    "@type": "LocalBusiness",
    name: "Sentinel Fire Protection",
    url: BASE_URL,
    telephone: "+12549001111",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1100 S 5th St",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76706",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Annual Fire Inspections",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
