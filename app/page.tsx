import Image from "next/image";
import Link from "next/link";
import { BookingBand, Container, Kicker, OutlineLink, TextButton } from "./components/ui";
import { contact } from "./lib/contact";

const ways = [
  {
    n: "01",
    title: "Brides",
    img: "/img/bride-4.jpg",
    alt: "A bride holding a white bouquet after her wedding makeup",
    body: "My heart is with the brides. We start with a free consultation and a trial, so nothing about your makeup is a surprise on the day. I also do engagement photos, showers, and bachelorettes, and I teach destination brides to do their own wedding makeup.",
    href: "/services#bridal",
    link: "Bridal services",
  },
  {
    n: "02",
    title: "Just you",
    img: "/img/application.jpg",
    alt: "Mascara being applied to a client, close up",
    body: "Makeup for an event, headshots, a photo shoot, prom, a sweet 16, a mitzvah, or just because. If you’d rather learn to do it yourself, book a lesson or a makeup overhaul. We go through what you already own, and I’ll tell you what’s working and what’s worth replacing.",
    href: "/services#private",
    link: "Private sessions",
  },
  {
    n: "03",
    title: "You and your friends",
    img: "/img/workshop.jpg",
    alt: "Meredith brushing foundation onto a workshop guest",
    body: "A workshop is a girls’ night where everyone leaves better at their own makeup. Wear your everyday look and bring the products you want to use better. I’ll walk you through an easy day-to-night routine and give each of you your own product recommendations.",
    href: "/workshops",
    link: "How workshops work",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="overflow-hidden">
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Kicker>Makeup artist in Westchester and New York City</Kicker>
            <h1 id="hero-title" className="mt-4 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Makeup that still looks like <em className="text-berry">you</em>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Hi, I&rsquo;m Meredith. I&rsquo;ve been doing makeup in New York since 1998, behind the counter, on TV
              sets, at runway shows, and in a lot of bridal suites. Today I work with brides, with anyone who wants a
              lesson or a night-out look, and with groups of friends who want to learn together.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TextButton />
              <OutlineLink href="/services">See what I do</OutlineLink>
            </div>
            <p className="mt-5 text-sm text-muted">
              Texting is best: <a href={`sms:${contact.phoneHref}`} className="font-medium text-ink underline decoration-berry/40 underline-offset-4">{contact.phone}</a>
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/img/meredith-hero.jpg"
                alt="Meredith Hayman smiling at home"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 w-40 rotate-[-4deg] rounded-2xl bg-white p-2 shadow-lg sm:-left-10 sm:w-52">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image src="/img/mirror.jpg" alt="A client checking her makeup in a hand mirror" fill sizes="210px" className="object-cover" />
              </div>
            </div>
            <p className="absolute -top-3 -right-2 flex h-24 w-24 rotate-[8deg] flex-col items-center justify-center rounded-full bg-berry text-center text-white shadow-lg sm:-right-6">
              <span className="text-xs tracking-wide uppercase">since</span>
              <span className="font-serif text-3xl leading-none">1998</span>
            </p>
          </div>
        </Container>
      </section>

      {/* Press */}
      <section aria-label="Press" className="border-y border-line bg-white">
        <Container className="py-7">
          <p className="text-center text-[15px] text-muted">
            You might know my work from <span className="text-ink">Westchester Magazine</span>,{" "}
            <span className="text-ink">The Knot</span>, <span className="text-ink">Shape</span>, and the{" "}
            <span className="text-ink">New York Post</span>, or from <span className="text-ink">VH1</span>,{" "}
            <span className="text-ink">MTV</span>, and <span className="text-ink">Bravo</span>.
          </p>
        </Container>
      </section>

      {/* Ways to work together */}
      <section aria-labelledby="ways-title" className="py-20 sm:py-28">
        <Container>
          <h2 id="ways-title" className="max-w-xl text-4xl leading-tight sm:text-5xl">
            How we can work together
          </h2>
          <ol className="mt-14 space-y-16 sm:space-y-24">
            {ways.map((w, i) => (
              <li key={w.n} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-blush ${i % 2 ? "md:order-last" : ""}`}>
                  <Image src={w.img} alt={w.alt} fill sizes="(min-width: 768px) 520px, 100vw" className="object-cover" />
                </div>
                <div>
                  <p className="font-serif text-2xl text-berry" aria-hidden="true">{w.n}</p>
                  <h3 className="mt-1 text-4xl">{w.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{w.body}</p>
                  <Link href={w.href} className="mt-5 inline-block font-medium text-berry underline decoration-berry/30 underline-offset-4 hover:decoration-berry">
                    {w.link}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Half-face */}
      <section aria-labelledby="half-title" className="bg-blush py-20 sm:py-28">
        <Container className="grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full">
            <Image src="/img/meredith-smile.jpg" alt="Meredith Hayman" fill sizes="384px" className="object-cover object-[50%_35%]" />
          </div>
          <div>
            <Kicker>The half-face trick</Kicker>
            <h2 id="half-title" className="mt-3 text-4xl leading-tight sm:text-5xl">
              I do one side. <em>You</em> do the other.
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Early in my career I learned a &ldquo;half-face&rdquo; technique from Trish McEvoy herself, and I still
              teach this way. I do the look on one half of your face, then you copy it on the other half. You leave
              having done it with your own hands, which means you can do it again at home.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              And there&rsquo;s no sales pitch. I use a mix of splurge and save products, mostly save.
            </p>
          </div>
        </Container>
      </section>

      {/* Quote */}
      <section aria-label="Meredith's philosophy" className="py-20 sm:py-28">
        <Container>
          <figure className="max-w-4xl">
            <blockquote className="font-serif text-4xl leading-tight sm:text-5xl">
              &ldquo;You don&rsquo;t have to wear a lot of makeup to look great; you just need the makeup that is{" "}
              <em className="text-berry">right for you</em>.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-muted">Meredith</figcaption>
          </figure>
        </Container>
      </section>

      {/* Gallery */}
      <section aria-labelledby="gallery-title" className="pb-20 sm:pb-28">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 id="gallery-title" className="text-3xl sm:text-4xl">A few of my brides</h2>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-[15px] font-medium text-berry underline decoration-berry/30 underline-offset-4"
            >
              More on Instagram<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {[
              ["/img/bride-1.jpg", "A bride in soft dramatic makeup, side profile"],
              ["/img/bride-2.jpg", "A bride in a pink robe on her wedding morning"],
              ["/img/bride-3.jpg", "A bride smiling behind her hands"],
              ["/img/bride-4.jpg", "A bride in her veil holding her bouquet"],
            ].map(([src, alt]) => (
              <li key={src} className="relative aspect-square overflow-hidden rounded-2xl bg-blush">
                <Image src={src} alt={alt} fill sizes="(min-width: 768px) 270px, 50vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <BookingBand />
    </>
  );
}
