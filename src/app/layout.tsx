import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
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
  title: "Adam Taïeb - Ingénieur Data & Développement Full-Stack",
  description: "Portfolio d'Adam Taïeb - Ingénieur Data & Full-Stack. Spécialisé en React, Python, Machine Learning et architecture d'applications data-driven.",
  keywords: "ingénieur data, développement full-stack, React, Python, Machine Learning, portfolio",
  // favicon.ico et apple-icon.png sont auto-détectés depuis src/app/
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
