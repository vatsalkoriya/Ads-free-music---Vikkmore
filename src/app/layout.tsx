import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import AppShell from "@/components/AppShell";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://vikkmore.vercel.app"),
  title: "Vikkmore - Free YouTube Music Player & Playlist Manager",
  description: "Vikkmore is a free YouTube music player and playlist manager for streaming songs, creating playlists, and organizing your music library online.",
  keywords: [
    "vikkmore",
    "youtube music player",
    "free music streaming",
    "playlist manager",
    "online music player",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: "https://vikkmore.vercel.app/",
    siteName: "Vikkmore",
    title: "Vikkmore - Free YouTube Music Player & Playlist Manager",
    description: "Stream songs, create playlists, and organize your music library online with Vikkmore.",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "vikkmore",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${outfit.variable} font-outfit bg-black text-white antialiased overflow-hidden`}>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
