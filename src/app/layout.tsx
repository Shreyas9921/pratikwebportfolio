import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1D1E20",
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Pratik Gade | Software Development Engineer",
    template: "%s | Pratik Gade",
  },
  description:
    "Software Development Engineer: Java, Spring Boot, microservices, REST APIs, secure auth, database optimization, cloud & ERP/SaaS. CDAC PG-DAC. React, Next.js, SQL/NoSQL.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Pratik Gade | Software Development Engineer",
    description:
      "Java, Spring Boot, microservices, REST APIs, cloud & ERP/SaaS. Secure auth, DB performance, clean code. CDAC PG-DAC. React & Next.js.",
    type: "website",
    locale: "en_IN",
    siteName: "Pratik Gade",
    url: getSiteUrl(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Gade | Software Development Engineer",
    description:
      "Java, Spring Boot, microservices, REST APIs, cloud & ERP/SaaS. CDAC PG-DAC. React & Next.js.",
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <div className="mx-auto flex min-h-screen w-full max-w-content flex-col px-3 min-[480px]:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
