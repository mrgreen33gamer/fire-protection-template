import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Sentinel Fire Protection",
  description: "How we collect, use, and protect your information at Sentinel Fire Protection in Waco, TX.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}