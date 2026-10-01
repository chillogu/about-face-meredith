import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "About Face | Meredith Hayman, Makeup Artist in Westchester & NYC",
    template: "%s | About Face by Meredith Hayman",
  },
  description:
    "Bridal makeup, private lessons, makeup overhauls, and group workshops with Meredith Hayman. Doing makeup in New York since 1998.",
  openGraph: {
    type: "website",
    siteName: "About Face by Meredith Hayman",
    images: [{ url: "/img/meredith-hero.jpg", width: 1440, height: 1800, alt: "Meredith Hayman" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrument.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-berry px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
