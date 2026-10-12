import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { media } from "../content/media";
import "./globals.css";

const origin = "https://digitalwealthpartnership.io";
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: { default: "DW Digitalwealth LLC | Global Business Perspective", template: "%s | DW Digitalwealth LLC" },
  description: "DW Digitalwealth LLC explores business development, strategic relationships, global opportunities and informed market conversations.",
  applicationName: "DW Digitalwealth LLC",
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/favicon.svg", type: "image/svg+xml" }, { url: "/assets/favicon.png", type: "image/png" }], apple: "/assets/favicon.png" },
  openGraph: { type: "website", siteName: "DW Digitalwealth LLC", locale: "en_US", title: "DW Digitalwealth LLC | Global Business Perspective", description: "A Digitalwealth-rooted corporate platform with a global perspective on business and connection.", url: origin, images: [{ url: media.heroDesktop, width: 1280, height: 720, alt: "DW Digitalwealth LLC corporate outlook" }] },
  twitter: { card: "summary_large_image", title: "DW Digitalwealth LLC", description: "A wider view of business and global connection.", images: [media.heroDesktop] },
  alternates: { canonical: origin },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "DW Digitalwealth LLC", url: origin, logo: `${origin}/assets/logo.svg` };
  return <html lang="en"><head><meta name="theme-color" content="#0c0b0a"/><link rel="preload" href={media.heroDesktop} as="image" media="(min-width: 701px)"/><link rel="preload" href={media.heroMobile} as="image" media="(max-width: 700px)"/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }}/></head><body><a href="#main-content" className="skip-link">Skip to content</a><Header/>{children}<Footer/></body></html>;
}
