import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "About Face | Meredith Hayman, Makeup Artist",
  description: "Professional makeup artist serving Westchester, NYC, Hudson Valley, and NJ. Bridal makeup, private services, and group workshops.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-full flex flex-col bg-[#faf8f6] text-[#1a1612] antialiased">
        {children}
      </body>
    </html>
  );
}
