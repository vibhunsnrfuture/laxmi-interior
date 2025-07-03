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
  title: "MyWebsite - Interior & Design Studio",
  description: "Elegant interiors and modern designs using nature-inspired colors.",
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
        <Footer/>
        
      </body>
    </html>
  );
}
