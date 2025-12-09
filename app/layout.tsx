import type { Metadata } from "next";
import Script from "next/script";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { Providers } from "./Providers";
import AOSContainer from "./components/AOS/AOS";
import ClientSpecificLogic from "./components/Client-Layout";

// CSS Imports
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import "./global.css";
import "react-multi-carousel/lib/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mediend.com"),

  title: {
    default:
      "mediEND - Expert Surgical Care | Gynecomastia, Lipoma Surgery & More",
    template: "%s | mediEND",
  },

  description:
    "We offer expert surgical care from experienced surgeons, specializing in Lipoma, Gynecomastia, Bariatric, Piles, Lasik, and more.",

  openGraph: {
    title:
      "mediEND - Expert Surgical Care | Gynecomastia, Lipoma Surgery & More",
    description:
      "We offer expert surgical care with affordable pricing, comfort, and free pick-up & drop.",
    url: "/",
    siteName: "mediEND",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "mediEND - Expert Surgical Care | Gynecomastia, Lipoma Surgery & More",
    description: "Trusted surgical solutions with premium specialists.",
    images: ["/logo.png"],
  },

  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {/* Google Analytics using next/script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-29YDLX52BY"
        />

        <Script id="ga-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-29YDLX52BY');
          `}
        </Script>

        <Providers>
          <AOSContainer>
            <MantineProvider theme={theme} defaultColorScheme="light">
              <ClientSpecificLogic>{children}</ClientSpecificLogic>
            </MantineProvider>
          </AOSContainer>
        </Providers>
      </body>
    </html>
  );
}
