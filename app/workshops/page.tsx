import Image from "next/image";
import { BookingBand, Container, Kicker, TextButton } from "../components/ui";

export const metadata = {
  title: "Makeup Workshops",
  description:
    "Hands-on makeup workshops for you and your friends with Meredith Hayman. Learn an easy day-to-night routine and go home with personal product recommendations.",
};

const steps = [
  {
    title: "Pick a night and invite your friends",
    body: "Girls’ night, moms’ night out, a bachelorette. Text me the date and roughly how many people.",
  },
  {
    title: "Come as you are",
    body: "Wear your everyday makeup and bring a few products you’d like to learn to use better.",
  },
  {
    title: "Watch half, do half",
    body: "I do a look on one half of a volunteer’s face. She does the other half herself, and everyone follows along step by step.",
  },
  {
    title: "Go home with a plan",
    body: "You’ll leave with an easy day-to-night routine and product recommendations that are just for you.",
  },
];

export default function Workshops() {
  return (
    <>
      <section aria-labelledby="ws-title">
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Kicker>Workshops</Kicker>
            <h1 id="ws-title" className="mt-4 text-5xl leading-[1.05] sm:text-6xl">
              A girls&rsquo; night where everyone gets <em className="text-berry">better</em> at makeup
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Workshops are hands-on lessons for you and a few of your closest friends. You learn on your own face,
              with your own products, so it actually sticks. And there&rsquo;s no sales pitch.
            </p>
            <div className="mt-8">
              <TextButton label="Text me to plan one" />
            </div>
          </div>
          <div className="relative aspect-[762/348] overflow-hidden rounded-3xl bg-blush lg:aspect-[4/3]">
            <Image src="/img/workshop.jpg" alt="Meredith brushing foundation onto a workshop guest" fill priority sizes="(min-width: 1024px) 520px, 100vw" className="object-cover object-left" />
          </div>
        </Container>
      </section>

      <section aria-labelledby="how-title" className="border-t border-line bg-white py-20 sm:py-24">
        <Container>
          <h2 id="how-title" className="text-4xl sm:text-5xl">How it works</h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <li key={s.title}>
                <p className="font-serif text-5xl text-berry" aria-hidden="true">{i + 1}</p>
                <h3 className="mt-3 text-2xl leading-snug">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="why-title" className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <h2 id="why-title" className="text-4xl sm:text-5xl">Why I teach this way</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            I learned the half-face method from Trish McEvoy early in my career. Watching someone do your makeup is
            nice. Doing it yourself, with someone right there to help, is how you remember it the next morning.
          </p>
        </Container>
      </section>

      <BookingBand title="Got a group in mind?" />
    </>
  );
}
