import Image from "next/image";
import { BookingBand, Container, Kicker } from "../components/ui";

export const metadata = {
  title: "About Meredith",
  description:
    "Meredith Hayman has done makeup in New York since 1998, from the makeup counter to TV, runway, and bridal. Mom of two in Yorktown Heights, NY.",
};

const credits = [
  { label: "Learned from", value: "Trish McEvoy and Bobbi Brown" },
  { label: "On TV", value: "VH1, MTV, and Bravo" },
  { label: "In print", value: "Featured expert for Westchester Magazine. Beauty consultant for The Knot, Shape, and the New York Post." },
  { label: "Faces you’d know", value: "Whitney Cummings, Channing Tatum, and Christie Brinkley" },
];

export default function About() {
  return (
    <>
      <section aria-labelledby="about-title">
        <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Kicker>About</Kicker>
            <h1 id="about-title" className="mt-4 text-5xl leading-[1.05] sm:text-6xl">
              Hi, I&rsquo;m Meredith.
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I moved to New York in 1998 and I&rsquo;ve done just about every kind of makeup since. I started behind a
                makeup counter, then moved into television, print, teaching, runway, and bridal.
              </p>
              <p>
                Early on I got to work with Trish McEvoy and Bobbi Brown. The half-face method I teach with came
                straight from Trish.
              </p>
              <p>
                I&rsquo;ve done TV and celebrity makeup, but what I love most is helping everyday women look and feel
                their best. That might mean shaping your brows, teaching you a look
                for a big night, or going through your whole makeup bag with you. I want it to feel like getting ready
                with a friend, and I&rsquo;ll probably make you laugh.
              </p>
              <p>
                When I&rsquo;m not doing makeup, I&rsquo;m at home in Yorktown Heights with my husband, our two kids,
                and our cockapoo.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-blush">
                <Image
                  src="/img/family.jpg"
                  alt="Meredith with her husband and their two kids"
                  fill
                  priority
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">My crew.</figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section aria-labelledby="work-title" className="border-t border-line bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative aspect-[762/348] overflow-hidden rounded-3xl bg-blush">
            <Image src="/img/workshop.jpg" alt="Meredith brushing foundation onto a client" fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 id="work-title" className="text-4xl">Where I&rsquo;ve worked</h2>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {credits.map((c) => (
                <div key={c.label} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="text-sm font-medium text-berry">{c.label}</dt>
                  <dd className="text-ink">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <BookingBand title="Want to work together?" />
    </>
  );
}
