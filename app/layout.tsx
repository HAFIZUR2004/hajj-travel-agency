import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Hind_Siliguri } from "next/font/google"; // একই লাইনে ইম্পোর্ট করা ভালো
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Hind Siliguri ফন্ট লোড
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Agency",
  description: "Your trusted travel partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn" // বাংলা কন্টেন্টের জন্য lang="bn" রাখা ভালো
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${hindSiliguri.className}`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}