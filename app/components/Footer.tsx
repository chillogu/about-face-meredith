import Link from "next/link";
import { contact, mailto, sms } from "../lib/contact";

export default function Footer() {
  return (
    <footer className="on-dark mt-auto bg-ink text-[#cbbfc2]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl text-white">About Face</p>
          <p className="mt-1 text-sm">by Meredith Hayman, makeup artist</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">Based in Yorktown Heights. Working across {contact.area}.</p>
        </div>
        <div>
          <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-white uppercase">Pages</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/workshops" className="hover:text-white">Workshops</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-white uppercase">Say hi</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={sms} className="hover:text-white">Text {contact.phone}</a></li>
            <li><a href={mailto} className="break-all hover:text-white">{contact.email}</a></li>
            <li>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {contact.instagramHandle}<span className="sr-only"> on Instagram (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-6 text-center text-xs text-[#a89a9e]">
        &copy; {new Date().getFullYear()} About Face by Meredith Hayman
      </p>
    </footer>
  );
}
