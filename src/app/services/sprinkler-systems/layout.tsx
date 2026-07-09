import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';
const url = BASE_URL + '/services/sprinkler-systems';

export const metadata: Metadata = {
  title: "Sprinkler Systems Waco TX | Sentinel Fire Protection",
  description: "Fire sprinkler service in Waco TX — wet, dry, and pre-action systems, head replacement, hydro tests, and impairment procedures.",
  keywords: ["fire sprinkler inspection Waco TX","sprinkler head replacement Waco","wet pipe sprinkler service Central Texas","Sentinel Fire Protection"],
  alternates: { canonical: url },
  openGraph: {
    title: "Sprinkler Systems Waco TX | Sentinel Fire Protection",
    description: "Fire sprinkler service in Waco TX — wet, dry, and pre-action systems, head replacement, hydro tests, and impairment procedures.",
    url,
    siteName: "Sentinel Fire Protection",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprinkler Systems Waco TX | Sentinel Fire Protection",
    description: "Fire sprinkler service in Waco TX — wet, dry, and pre-action systems, head replacement, hydro tests, and impairment procedures.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sprinkler Systems",
  description: "Fire sprinkler service in Waco TX — wet, dry, and pre-action systems, head replacement, hydro tests, and impairment procedures.",
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
  serviceType: "Sprinkler Systems",
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
