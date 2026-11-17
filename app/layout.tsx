import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { Ambient } from "@/components/ambient";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Spotlight } from "@/components/spotlight";
import { ThemeProvider } from "@/components/theme-provider";
import { site, siteUrl } from "@/content/site";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.headline,
  openGraph: { type: "website", siteName: site.name },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${archivo.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Ambient />
          <SiteHeader />
          <main className="relative z-10 mx-auto w-full max-w-[1240px] flex-1 px-3.5 pt-5 pb-6 sm:px-5 sm:pt-10 sm:pb-10">
            {children}
          </main>
          <SiteFooter />
          <Spotlight />
        </ThemeProvider>
      </body>
    </html>
  );
}
