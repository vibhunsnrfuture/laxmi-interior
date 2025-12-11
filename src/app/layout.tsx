import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/common/Navbar";
import Footer from "./Component/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 🔹 Dynamic, SEO-friendly title
  title: {
    default: "Laxmi Interior | Home Interior Designer in Hyderabad",
    template: "%s | Laxmi Interior Hyderabad",
  },

  // 🔹 Strong, keyword-rich description (but still natural)
  description:
    "Laxmi Interior is a home interior design studio in Laxmiguda, Hyderabad offering modular kitchens, wardrobes, TV units, false ceilings, full home interiors, renovation and turnkey solutions for 1BHK, 2BHK and 3BHK flats.",

  // 🔹 20+ SEO keywords
  keywords: [
    "Laxmi Interior",
    "Laxmi Interior Hyderabad",
    "interior designer in Hyderabad",
    "home interior design Hyderabad",
    "modular kitchen Hyderabad",
    "wardrobe design Hyderabad",
    "full home interiors",
    "1BHK interior design",
    "2BHK interior design",
    "3BHK interior design",
    "living room interior design",
    "bedroom interior design",
    "false ceiling design",
    "TV unit design",
    "pooja room interior Hyderabad",
    "balcony interior design",
    "luxury interiors Hyderabad",
    "budget interiors Hyderabad",
    "turnkey interior solutions",
    "home renovation Hyderabad",
    "custom furniture Hyderabad",
    "interior design consultation Hyderabad",
  ],

  // 🔹 Open Graph for social sharing
  openGraph: {
    title: "Laxmi Interior | Home Interior Designer in Hyderabad",
    description:
      "End-to-end interior design services in Hyderabad – modular kitchens, wardrobes, full home interiors, renovation and turnkey solutions by Laxmi Interior.",
    type: "website",
    locale: "en_IN",
    siteName: "Laxmi Interior",
  },

  // 🔹 Basic robots config (allow indexing)
  robots: {
    index: true,
    follow: true,
  },

  // 🔹 Extra info (optional but nice)
  authors: [{ name: "Laxmi Interior", url: "mailto:laxmiinterior297@gmail.com" }],
  category: "Home & Interior Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#e9edc9] text-[#333]`}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
