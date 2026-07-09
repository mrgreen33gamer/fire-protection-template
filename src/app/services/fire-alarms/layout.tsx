import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';
const url = BASE_URL + '/services/fire-alarms';

export const metadata: Metadata = {
  title: "Fire Alarm Systems Waco TX | Sentinel Fire Protection",
  description: "Fire alarm design, install, and service in Waco and Central Texas. Addressable and conventional systems, detectors, panels, and AHJ documentation. Licensed Fire Alarm Contractor.",
  keywords: ["fire alarm systems Waco TX","fire alarm contractor Waco","addressable fire alarm Central Texas","Sentinel Fire Protection"],
  alternates: { canonical: url },
  openGraph: {
    title: "Fire Alarm Systems Waco TX | Sentinel Fire Protection",
    description: "Fire alarm design, install, and service in Waco and Central Texas. Addressable and conventional systems, detectors, panels, and AHJ documentation. Licensed Fire Alarm Contractor.",
    url,
    siteName: "Sentinel Fire Protection",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Alarm Systems Waco TX | Sentinel Fire Protection",
    description: "Fire alarm design, install, and service in Waco and Central Texas. Addressable and conventional systems, detectors, panels, and AHJ documentation. Licensed Fire Alarm Contractor.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Alarm Systems",
  description: "Fire alarm design, install, and service in Waco and Central Texas. Addressable and conventional systems, detectors, panels, and AHJ documentation. Licensed Fire Alarm Contractor.",
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
  serviceType: "Fire Alarm Systems",
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
