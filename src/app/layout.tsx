import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#141417",
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Pratik Gade | Software Development Engineer",
    template: "%s | Pratik Gade",
  },
  description:
    "Software Development Engineer focused on Java, Spring Boot, microservices, and agentic AI. Building BFSI market intelligence (MarketPulse) and the AXIS agentic platform alongside production-ready APIs and Next.js frontends.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Pratik Gade | Software Development Engineer",
    description:
      "Java, Spring Boot, microservices, REST APIs, and agentic AI. MarketPulse, AXIS/Jarvis, and production-oriented full-stack delivery.",
    type: "website",
    locale: "en_IN",
    siteName: "Pratik Gade",
    url: getSiteUrl(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Gade | Software Development Engineer",
    description:
      "Java, Spring Boot, microservices, REST APIs, and agentic AI. MarketPulse, AXIS/Jarvis, and production-oriented full-stack delivery.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body
        className="min-h-screen bg-background font-sans text-foreground antialiased"
        suppressHydrationWarning
      >
        <div className="mx-auto flex min-h-screen w-full max-w-content flex-col px-3 min-[480px]:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
