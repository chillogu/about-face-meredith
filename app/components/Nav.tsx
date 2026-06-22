"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/workshops", label: "Workshops" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f6]/95 backdrop-blur border-b border-[#e8e0d8]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-playfair)] text-lg font-semibold tracking-tight text-[#1a1612]">
          About Face
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#7a6f68] hover:text-[#b5706a] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:meredith@meredithhayman.com"
            className="text-sm px-4 py-2 bg-[#b5706a] text-white rounded-full hover:bg-[#a35f59] transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="w-5 h-0.5 bg-[#1a1612] mb-1" />
          <div className="w-5 h-0.5 bg-[#1a1612] mb-1" />
          <div className="w-5 h-0.5 bg-[#1a1612]" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#faf8f6] border-t border-[#e8e0d8] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-[#7a6f68]" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href="mailto:meredith@meredithhayman.com" className="text-sm text-[#b5706a]">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
