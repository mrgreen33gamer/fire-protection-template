// src/app/services/layout.tsx
// Sentinel Fire Protection — /services parent layout
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Fire Protection Services | Alarms, Sprinklers, Inspections & More | Sentinel Fire Protection",
  description:
    "Sentinel Fire Protection offers fire alarm systems, sprinkler systems, extinguishers, kitchen hood suppression, monitoring, and annual inspections for Waco and Central Texas. Licensed Fire Alarm Contractor · Bonded & Insured.",
  keywords: [
    "fire alarm systems Waco TX",
    "fire protection services Waco",
    "sprinkler inspection Central Texas",
    "kitchen hood suppression Waco TX",
    "fire protection company Texas",
    "annual fire inspection Waco",
    "licensed fire alarm contractor Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Fire Protection Services | Sentinel Fire Protection",
    description:
      "Alarms, sprinklers, extinguishers, kitchen hoods, monitoring, and annual inspections for Waco and Central Texas. Licensed Fire Alarm Contractor · Code-Compliant Installs.",
    url,
    siteName: "Sentinel Fire Protection",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Protection Services | Sentinel Fire Protection",
    description: "Alarms, sprinklers, inspections & more for Central Texas. Licensed Fire Alarm Contractor.",
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Sentinel Fire Protection — Fire Protection Services",
  description:
    "Fire protection services for Waco and Central Texas: fire alarms, sprinklers, extinguishers, kitchen hood suppression, monitoring, and annual inspections.",
  provider: {
    "@type": "LocalBusiness",
    name: "Sentinel Fire Protection",
    url: BASE_URL,
    telephone: "+12549001111",
    address: { "@type": "PostalAddress", addressLocality: "Waco", addressRegion: "TX", addressCountry: "US" },
  },
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Alarm Systems", url: `${BASE_URL}/services/fire-alarms` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprinkler Systems", url: `${BASE_URL}/services/sprinkler-systems` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Extinguishers", url: `${BASE_URL}/services/fire-extinguishers` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Hood Suppression", url: `${BASE_URL}/services/kitchen-hood` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Monitoring", url: `${BASE_URL}/services/monitoring` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Inspections", url: `${BASE_URL}/services/annual-inspections` } },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
      {children}
    </>
  );
}
