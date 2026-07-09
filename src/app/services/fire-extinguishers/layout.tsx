import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';
const url = BASE_URL + '/services/fire-extinguishers';

export const metadata: Metadata = {
  title: "Fire Extinguishers Waco TX | Sentinel Fire Protection",
  description: "Fire extinguisher service in Waco TX — annual inspections, hydro testing, new units, and tagged inventory.",
  keywords: ["fire extinguisher service Waco TX","extinguisher inspection Central Texas","Sentinel Fire Protection"],
  alternates: { canonical: url },
  openGraph: {
    title: "Fire Extinguishers Waco TX | Sentinel Fire Protection",
    description: "Fire extinguisher service in Waco TX — annual inspections, hydro testing, new units, and tagged inventory.",
    url,
    siteName: "Sentinel Fire Protection",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Extinguishers Waco TX | Sentinel Fire Protection",
    description: "Fire extinguisher service in Waco TX — annual inspections, hydro testing, new units, and tagged inventory.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Extinguishers",
  description: "Fire extinguisher service in Waco TX — annual inspections, hydro testing, new units, and tagged inventory.",
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
  serviceType: "Fire Extinguishers",
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
