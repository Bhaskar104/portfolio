import type React from "react";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

/* Updated fonts to match design brief - Inter for headings, Manrope for body */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Creative Developer Portfolio",
  description: "Innovative portfolio showcasing creative development work",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} antialiased dark`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
