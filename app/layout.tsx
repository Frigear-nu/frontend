import { ThemeProvider } from "@/app/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import Footer from "./components/Footer";
import FooterMobile from "./components/footerMobile/FooterMobile";
import { Roboto } from "next/font/google";
import { url } from "@/utils/helpers";

const roboto = Roboto({ subsets: ["latin-ext"], weight: ["500"] });

const meta = {
  title: {
    template: "%s | Frigear",
    default: "Non-profit | Frigear",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  description:
    "Foreningen Frigear faciliterer, støtter, og driver frivillig non-profit projekter, med fokus på medlemsindflydelse og bæredygtighed.",
  cardImage: "/og.png",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  favicon: "/favicon.ico",
  url: url(),
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    generator: "Next.js",
    applicationName: "Frigear App",
    referrer: "origin-when-cross-origin",
    alternates: {
      canonical: "/",
      languages: {
        "da-DK": "/da-DK",
        "de-DE": "/de-DE",
        "en-US": "/en-US",
      },
    },
    keywords: [
      "Foreningen Frigear, Frigear, Non-profit, Frivillige, Roskilde festival, Arena scenen, Frigear Bar, Forening, Almennyttig, Frivilligdrevet, Frivilligforening, Foreningsliv",
    ],
    authors: [
      { name: "Six", url: "https://block-folio.netlify.app/" },
      { name: "Hare", url: "" },
    ],
    creator: "Six",
    publisher: "Frigear",
    icons: { icon: meta.favicon },
    metadataBase: new URL(meta.url),
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
      type: "website",
      siteName: "Frigear App",
    },
    twitter: {
      card: "summary_large_image",
      site: "https://frigear.nu/",
      creator: "Six n' Hare",
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={roboto.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <div className="absolute hidden sm:block sm:bottom-0 sm:mt-auto w-full">
              <Footer />
            </div>
            <div className="block sm:hidden fixed bottom-0 w-full bg-background z-10 mb-2">
              <FooterMobile />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
