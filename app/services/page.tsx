import Image from "next/image";
import { BookingBand, Container, Kicker, TextButton } from "../components/ui";

export const metadata = {
  title: "Services",
  description:
    "Bridal makeup, trials, engagement photos, special events, headshots, prom, makeup lessons, and makeup overhauls with Meredith Hayman.",
};

const bridal = [
  "Free bridal makeup consultation",
  "Bridal makeup trial",
  "Wedding day makeup",
  "Engagement photos",
  "Bridal shower",
  "Boudoir",
  "Brow shaping",
  "Makeup lessons for destination brides",
  "Bachelorette workshop and application",
];

const occasions = ["Special events", "Headshots and photo shoots", "Prom", "Sweet 16s", "Mitzvahs", "Boudoir", "Just because"];

export default function Services() {
  return (
    <>
      <section aria-labelledby="services-title">
        <Container className="py-14 sm:py-20">
          <Kicker>Services</Kicker>
          <h1 id="services-title" className="mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
            Whatever you&rsquo;re getting ready for
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            I can do your makeup for you, or teach you to do it yourself. Most people end up wanting a bit of both.
          </p>
        </Container>
      </section>

      {/* Bridal */}
      <section id="bridal" aria-labelledby="bridal-title" className="scroll-mt-24 border-t border-line py-16 sm:py-24">
        <Container className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 id="bridal-title" className="text-4xl sm:text-5xl">Brides</h2>
            <p className="mt-5 leading-relaxed text-muted">
              My heart is with the brides. Your wedding morning is busy enough, so we do the planning ahead of time.
              We start with a free consultation, then a trial, so you&rsquo;ve already seen your wedding makeup before
              the day. I stay calm, and it tends to rub off on everyone in the room.
            </p>
            <ul className="mt-8 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {bridal.map((s) => (
                <li key={s} className="flex gap-3 text-[15px] text-ink">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-berry" />
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <TextButton label="Text me your date" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["/img/bride-4.jpg", "A bride holding her bouquet"],
              ["/img/bride-2.jpg", "A bride in a pink robe on her wedding morning"],
              ["/img/bride-3.jpg", "A bride smiling behind her hands"],
              ["/img/bride-1.jpg", "A bride in soft dramatic makeup, side profile"],
            ].map(([src, alt]) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-2xl bg-blush">
                <Image src={src} alt={alt} fill sizes="(min-width: 768px) 260px, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Private */}
      <section id="private" aria-labelledby="private-title" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <Container className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-blush md:order-last">
            <Image src="/img/application.jpg" alt="Mascara being applied to a client, close up" fill sizes="(min-width: 768px) 520px, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 id="private-title" className="text-4xl sm:text-5xl">Just you</h2>

            <h3 className="mt-8 font-sans text-sm font-semibold tracking-[0.14em] text-berry uppercase">I do your makeup</h3>
            <p className="mt-3 leading-relaxed text-muted">One on one, for whatever&rsquo;s coming up:</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {occasions.map((o) => (
                <li key={o} className="rounded-full border border-line bg-cream px-4 py-1.5 text-sm text-ink">{o}</li>
              ))}
            </ul>

            <h3 className="mt-10 font-sans text-sm font-semibold tracking-[0.14em] text-berry uppercase">I teach you</h3>
            <p className="mt-3 leading-relaxed text-muted">
              <strong className="font-medium text-ink">Makeup lesson.</strong>{" "} Learn a look for a big event, or finally
              figure out the everyday routine you&rsquo;ve been guessing at.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              <strong className="font-medium text-ink">Makeup overhaul.</strong>{" "} Bring your makeup bag. We&rsquo;ll go
              through what you own, I&rsquo;ll show you how to use it better, and I&rsquo;ll tell you what&rsquo;s worth
              replacing for your budget and your life. I use a mix of splurge and save products, mostly save.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              <strong className="font-medium text-ink">Brow shaping.</strong>{" "} Brows change your whole face. Let&rsquo;s get them right.
            </p>
            <p className="mt-6 rounded-2xl bg-blush px-5 py-4 text-[15px] text-ink">
              Lessons and overhauls make good gifts too. Text me about gift certificates.
            </p>
          </div>
        </Container>
      </section>

      <BookingBand />
    </>
  );
}
