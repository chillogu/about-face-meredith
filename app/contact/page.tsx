import Image from "next/image";
import { Container, Kicker } from "../components/ui";
import { contact, mailto, sms, tel } from "../lib/contact";

export const metadata = {
  title: "Contact",
  description: "Text, call, or email Meredith Hayman to book bridal makeup, a lesson, an overhaul, or a workshop.",
};

const include = ["The date", "Where you are", "What it’s for (wedding, event, lesson, workshop)", "How many people need makeup"];

export default function Contact() {
  return (
    <section aria-labelledby="contact-title">
      <Container className="grid gap-14 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <Kicker>Contact</Kicker>
          <h1 id="contact-title" className="mt-4 text-5xl leading-[1.05] sm:text-6xl">
            Text me. It&rsquo;s the fastest way.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Send me a quick note with your date and I&rsquo;ll get back to you. Email and Instagram work too.
          </p>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            <li className="flex flex-wrap items-baseline justify-between gap-2 py-5">
              <span className="text-sm font-medium text-berry">Text or call</span>
              <span className="flex gap-4">
                <a href={sms} className="font-serif text-3xl text-ink hover:text-berry">{contact.phone}</a>
                <a href={tel} className="self-center text-sm text-muted underline underline-offset-4 hover:text-berry">call</a>
              </span>
            </li>
            <li className="flex flex-wrap items-baseline justify-between gap-2 py-5">
              <span className="text-sm font-medium text-berry">Email</span>
              <a href={mailto} className="break-all text-lg text-ink hover:text-berry">{contact.email}</a>
            </li>
            <li className="flex flex-wrap items-baseline justify-between gap-2 py-5">
              <span className="text-sm font-medium text-berry">Instagram</span>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="text-lg text-ink hover:text-berry">
                {contact.instagramHandle}<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>

          <p className="mt-8 text-[15px] leading-relaxed text-muted">I work across {contact.area}.</p>
        </div>

        <div className="space-y-6">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-blush">
            <Image src="/img/meredith-smile.jpg" alt="Meredith Hayman" fill priority sizes="(min-width: 1024px) 440px, 100vw" className="object-cover object-[50%_30%]" />
          </div>
          <div className="rounded-3xl bg-blush p-6 sm:p-8">
            <h2 className="text-2xl">To book faster, send me:</h2>
            <ul className="mt-4 space-y-2">
              {include.map((i) => (
                <li key={i} className="flex gap-3 text-ink">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-berry" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
