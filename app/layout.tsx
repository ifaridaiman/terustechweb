import type { Metadata } from "next";

import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ibmPlexMono, ibmPlexSans, spaceGrotesk } from "@/lib/fonts";
import { themeInitScript } from "@/lib/theme-script";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://terustech.my"),
  title: {
    default: "Terus Tech | Custom software, first phase live in 30 days",
    template: "%s | Terus Tech",
  },
  description:
    "First phase of your software live in 30 days. Lean, agile custom software, managed services and GIS from Puncak Alam, Malaysia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-accent focus-visible:px-4 focus-visible:py-2 focus-visible:text-on-accent"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
