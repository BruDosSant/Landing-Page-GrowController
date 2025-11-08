import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Grow Controller",
    template: "%s | Grow Controller",
  },
  description:
    "Plataforma para optimizar, monitorear y escalar el crecimiento de tu negocio.",
  metadataBase: new URL("https://grow-controller.local"),
  applicationName: "Grow Controller",
  generator: "Next.js",
  keywords: [
    "growth",
    "analytics",
    "automatización",
    "reportes",
    "dashboard",
    "Grow Controller",
  ],
  openGraph: {
    title: "Grow Controller",
    description:
      "Optimiza y escala el crecimiento de tu negocio con insights accionables.",
    url: "/",
    siteName: "Grow Controller",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Controller",
    description:
      "Optimiza y escala el crecimiento de tu negocio con insights accionables.",
  },
  icons: {
    icon: [
      { url: "/logo-perso.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
