import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { ConsentManager } from "@/components/ConsentManager";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "TechPulseDaily | Technology news, AI, software, and practical guides",
    template: "%s | TechPulseDaily",
  },
  description:
    "Technology news, practical AI guidance, software reviews, cybersecurity insights, and step-by-step how-to articles for curious readers.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechPulseDaily",
    description: "Technology news and practical digital guidance for modern readers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechPulseDaily",
    description: "Technology news and practical digital guidance for modern readers.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl("/"),
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJson) }} />
        <div className="min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ConsentManager enabled={siteConfig.optionalCookiesEnabled} />
        </div>
      </body>
    </html>
  );
}
