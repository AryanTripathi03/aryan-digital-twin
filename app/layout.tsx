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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f4ed",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://aryan-digital-twin.openai.site",
  ),
  title: {
    default: "Aryan Tripathi · AI/ML Engineer & Systems Builder",
    template: "%s · Aryan Tripathi",
  },
  description:
    "Evidence-led portfolio of Aryan Tripathi: AI/ML engineering, industrial analytics, computer vision, data systems, and Python software.",
  keywords: [
    "Aryan Tripathi",
    "AI ML Engineer",
    "Data Systems",
    "Computer Vision",
    "FastAPI",
    "Python",
    "Industrial Analytics",
  ],
  authors: [{ name: "Aryan Tripathi" }],
  creator: "Aryan Tripathi",
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Aryan Tripathi · Building intelligent systems",
    description:
      "An original white-awakening portfolio for AI, analytics, automation, and computer vision.",
    siteName: "Aryan Digital Twin",
    images: [
      {
        url: "/og.png",
        width: 1672,
        height: 941,
        alt: "Aryan Tripathi — Building Intelligent Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Tripathi · Building intelligent systems",
    description:
      "An original white-awakening portfolio for AI, analytics, automation, and computer vision.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
