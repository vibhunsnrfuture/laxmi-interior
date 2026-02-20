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
  metadataBase: new URL("https://yogitainterior.in"),

  title: {
    default: "Yogita Interior | Home Interior Designer in Hyderabad",
    template: "%s | Yogita Interior Hyderabad",
  },

  description:
    "Yogita Interior is a home interior design studio in Hyderabad offering modular kitchens, wardrobes, TV units, false ceilings, full home interiors, renovation and turnkey solutions for 1BHK, 2BHK and 3BHK flats.",

  // ✅ Expanded: Professional + Hindi + Hinglish keywords
  keywords: [
    // Brand / Domain
    "Yogita Interior",
    "Yogita Interior Hyderabad",
    "YogitaInterior.in",
    "yogitainterior",
    "Yogita interiors",

    // Core English (High intent)
    "interior designer in Hyderabad",
    "best interior designer Hyderabad",
    "top interior designers Hyderabad",
    "home interior design Hyderabad",
    "interior design company Hyderabad",
    "interior design studio Hyderabad",
    "turnkey interior solutions Hyderabad",
    "end to end home interiors Hyderabad",
    "house interior design Hyderabad",
    "flat interior design Hyderabad",
    "apartment interiors Hyderabad",
    "villa interior design Hyderabad",
    "home renovation Hyderabad",
    "interior renovation Hyderabad",

    // Services (English)
    "modular kitchen Hyderabad",
    "modular kitchen designer Hyderabad",
    "modular kitchen price Hyderabad",
    "wardrobe design Hyderabad",
    "sliding wardrobe Hyderabad",
    "TV unit design Hyderabad",
    "false ceiling design Hyderabad",
    "gypsum ceiling Hyderabad",
    "living room interior design Hyderabad",
    "bedroom interior design Hyderabad",
    "kids bedroom interior Hyderabad",
    "pooja room interior Hyderabad",
    "balcony interior design Hyderabad",
    "custom furniture Hyderabad",
    "space saving furniture Hyderabad",
    "wallpaper and wall decor Hyderabad",
    "lighting design Hyderabad",
    "paint and polish work Hyderabad",

    // Budget / Luxury intent
    "budget interiors Hyderabad",
    "affordable interior designer Hyderabad",
    "premium interiors Hyderabad",
    "luxury interiors Hyderabad",
    "modern interior design Hyderabad",
    "contemporary interiors Hyderabad",
    "minimalist interiors Hyderabad",

    // BHK intent
    "1BHK interior design Hyderabad",
    "2BHK interior design Hyderabad",
    "3BHK interior design Hyderabad",
    "full home interior 2bhk Hyderabad",
    "full home interior 3bhk Hyderabad",

    // Hindi (Devanagari) - Local SEO intent
    "हैदराबाद इंटीरियर डिजाइनर",
    "हैदराबाद में इंटीरियर डिजाइन",
    "हैदराबाद में बेस्ट इंटीरियर डिजाइनर",
    "घर का इंटीरियर हैदराबाद",
    "फ्लैट इंटीरियर हैदराबाद",
    "किचन इंटीरियर हैदराबाद",
    "मॉड्यूलर किचन हैदराबाद",
    "वार्डरोब डिजाइन हैदराबाद",
    "टीवी यूनिट डिजाइन हैदराबाद",
    "फॉल्स सीलिंग हैदराबाद",
    "जिप्सम सीलिंग हैदराबाद",
    "बेडरूम इंटीरियर हैदराबाद",
    "लिविंग रूम इंटीरियर हैदराबाद",
    "पूजा रूम इंटीरियर हैदराबाद",
    "घर रिनोवेशन हैदराबाद",
    "टर्नकी इंटीरियर सॉल्यूशन हैदराबाद",

    // Hinglish / Common search phrases
    "Hyderabad me interior designer",
    "best interior designer Hyderabad me",
    "ghar ka interior Hyderabad",
    "modular kitchen Hyderabad me",
    "wardrobe banwana Hyderabad",
    "false ceiling ka kaam Hyderabad",
    "TV unit banwana Hyderabad",
    "full home interior Hyderabad",
    "2bhk interior Hyderabad",
    "3bhk interior Hyderabad",
  ],

  alternates: {
    canonical: "https://yogitainterior.in",
  },

  openGraph: {
    title: "Yogita Interior | Home Interior Designer in Hyderabad",
    description:
      "End-to-end interior design services in Hyderabad — modular kitchens, wardrobes, TV units, false ceilings, full home interiors, renovation and turnkey solutions by Yogita Interior.",
    type: "website",
    locale: "en_IN",
    siteName: "Yogita Interior",
    url: "https://yogitainterior.in",
    // images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Yogita Interior Hyderabad" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yogita Interior | Home Interior Designer in Hyderabad",
    description:
      "Hyderabad home interior design studio for modular kitchens, wardrobes, false ceilings, TV units, renovations & turnkey interiors — Yogita Interior.",
    // images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  authors: [{ name: "Yogita Interior", url: "https://yogitainterior.in" }],
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