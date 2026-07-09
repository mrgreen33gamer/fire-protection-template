import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sentinelfiretx.com';
const url = BASE_URL + '/services/kitchen-hood';

export const metadata: Metadata = {
  title: "Kitchen Hood Suppression Waco TX | Sentinel Fire Protection",
  description: "Restaurant kitchen hood suppression service in Waco TX — Ansul-style systems, semi-annual inspections, link replacement, and cylinder service.",
  keywords: ["kitchen hood suppression Waco TX","Ansul inspection restaurant Texas","Sentinel Fire Protection"],
  alternates: { canonical: url },
  openGraph: {
    title: "Kitchen Hood Suppression Waco TX | Sentinel Fire Protection",
    description: "Restaurant kitchen hood suppression service in Waco TX — Ansul-style systems, semi-annual inspections, link replacement, and cylinder service.",
    url,
    siteName: "Sentinel Fire Protection",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Hood Suppression Waco TX | Sentinel Fire Protection",
    description: "Restaurant kitchen hood suppression service in Waco TX — Ansul-style systems, semi-annual inspections, link replacement, and cylinder service.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen Hood Suppression",
  description: "Restaurant kitchen hood suppression service in Waco TX — Ansul-style systems, semi-annual inspections, link replacement, and cylinder service.",
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
  serviceType: "Kitchen Hood Suppression",
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
