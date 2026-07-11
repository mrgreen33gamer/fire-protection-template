// src/app/layout.tsx
// Sentinel Fire Protection — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0d1b2a' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Black_Ops_One, Barlow_Semi_Condensed, Roboto } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — uniqueness
const fontTitle = Black_Ops_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Barlow_Semi_Condensed({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Roboto({
  weight: ["400","500","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.sentinelfiretx.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a0505" },
    { media: "(prefers-color-scheme: dark)",  color: "#1a0505" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sentinel Fire Protection | Alarms, Sprinklers, Inspections & Monitoring — Waco, TX",
    template: "%s | Sentinel Fire Protection",
  },
  description:
    "Sentinel Fire Protection is a Waco, TX fire protection company offering fire alarm systems, sprinkler systems, extinguishers, kitchen hood suppression, monitoring, and annual inspections for Central Texas businesses and multifamily properties. Licensed Fire Alarm Contractor · Bonded & Insured.",
  keywords: [
    "Sentinel Fire Protection",
    "fire alarm systems Waco TX",
    "fire sprinkler inspection Waco Texas",
    "kitchen hood suppression Central Texas",
    "fire extinguisher service Waco",
    "fire alarm monitoring Waco TX",
    "annual fire inspection Hewitt TX",
    "licensed fire alarm contractor Waco",
    "restaurant fire protection Waco",
  ],
  authors: [{ name: "Sentinel Fire Protection", url: BASE_URL }],
  creator: "Sentinel Fire Protection",
  publisher: "Sentinel Fire Protection",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "Sentinel Fire Protection | Alarms, Sprinklers, Inspections & Monitoring — Waco, TX",
    description:
      "Waco-based fire protection for alarms, sprinklers, extinguishers, kitchen hoods, monitoring, and annual inspections across Central Texas. Licensed Fire Alarm Contractor · Bonded & Insured. Code-Compliant Installs · Inspection On-Time Guarantee.",
    url: BASE_URL,
    siteName: "Sentinel Fire Protection",
    images: [
      {
        url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`,
        width: 1200,
        height: 630,
        alt: "Sentinel Fire Protection — Waco TX Fire Alarms, Sprinklers & Inspections",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentinel Fire Protection | Waco TX Fire Protection Pros",
    description:
      "Fire alarms, sprinklers, extinguishers, kitchen hood suppression, monitoring & annual inspections for Central Texas. Licensed & insured — code-compliant installs.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Sentinel Fire Protection",
  alternateName: "Sentinel Fire Protection Waco",
  description:
    "Fire protection services in Waco and Central Texas — fire alarm systems, sprinkler systems, extinguishers, kitchen hood suppression, monitoring, and annual inspections. Licensed Fire Alarm Contractor · Bonded & Insured. Code-Compliant Installs · Inspection On-Time Guarantee.",
  url: BASE_URL,
  telephone: "+12549001111",
  email: "hello@sentinelfiretx.com",
  foundingDate: "2001",
  founder: {
    "@type": "Person",
    name: "Captain (ret.) Neil Briggs",
    jobTitle: "Owner & Lead Fire Protection Specialist",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1100 S 5th St",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76706",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fire Protection Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Alarm Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprinkler Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Extinguishers" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Hood Suppression" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Monitoring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Inspections" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/sentinelfiretx",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#dc2626" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#1a0505",
                }}
              >
                <PulseLoader size={50} color="#dc2626" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
