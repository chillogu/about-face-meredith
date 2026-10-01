import Link from "next/link";
import { contact, mailto, sms } from "../lib/contact";

export function Container({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-medium text-berry">{children}</p>;
}

const btn = "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-[15px] font-medium transition-colors";

export function TextButton({ label = "Text Meredith" }: { label?: string }) {
  return (
    <a href={sms} className={`${btn} bg-berry text-white hover:bg-berry-dark`}>
      {label}
    </a>
  );
}

export function OutlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={`${btn} border border-ink/25 text-ink hover:border-berry hover:text-berry`}>
      {children}
    </Link>
  );
}

/** Closing band used at the bottom of every page. */
export function BookingBand({ title = "Let’s get you on the calendar." }: { title?: string }) {
  return (
    <section aria-labelledby="book-title" className="on-dark bg-berry text-white">
      <Container className="grid gap-8 py-16 sm:py-20 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <h2 id="book-title" className="text-4xl leading-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-white/85">
            Texting is the fastest way to reach me. Tell me the date, where you are, and what you&rsquo;re planning,
            and I&rsquo;ll get back to you.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <a href={sms} className={`${btn} bg-white text-berry hover:bg-blush`}>
            Text {contact.phone}
          </a>
          <a href={mailto} className={`${btn} border border-white/60 text-white hover:border-white hover:bg-white/10`}>
            Email me
          </a>
        </div>
      </Container>
    </section>
  );
}
