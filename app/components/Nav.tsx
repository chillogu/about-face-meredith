"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { sms } from "../lib/contact";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/workshops", label: "Workshops" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center" aria-label="About Face by Meredith, home">
          <Image src="/img/logo.png" alt="" width={84} height={70} priority className="h-14 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="text-[15px] text-muted transition-colors hover:text-berry aria-[current=page]:text-berry"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={sms}
                className="rounded-full bg-berry px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-berry-dark"
              >
                Text Meredith
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      <nav id="mobile-menu" aria-label="Mobile" hidden={!open} className="border-t border-line bg-white px-5 py-4 md:hidden">
        <ul className="flex flex-col">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block py-3 font-serif text-2xl text-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a href={sms} className="mt-3 block rounded-full bg-berry px-5 py-3 text-center font-medium text-white">
          Text Meredith
        </a>
      </nav>
    </header>
  );
}
