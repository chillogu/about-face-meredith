import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Workshops | About Face Makeup Artist",
};

export default function Workshops() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="bg-[#f5ede8] py-20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-[#b5706a] text-sm font-semibold uppercase tracking-widest mb-3">Group Sessions</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#1a1612]">About Face Workshops</h1>
          </div>
        </section>

        {/* What is a workshop */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1a1612] mb-5">
                Easy makeup tips and tricks for the everyday woman.
              </h2>
              <div className="space-y-4 text-[#7a6f68] leading-relaxed">
                <p>
                  Highly experienced makeup artist Meredith Hayman will show you and a few of your closest friends how to look your absolute best through hands-on makeup workshops designed to teach you how to apply and wear makeup confidently.
                </p>
                <p>
                  Utilizing a &ldquo;half-face&rdquo; technique she learned from Trish McEvoy herself, Meredith will show the group techniques on half of a model&apos;s face and then have the model recreate it herself to ensure that she and the rest of the group understand each and every step.
                </p>
                <p>
                  As a makeup artist, Meredith prides herself on making her clients look like the best versions of themselves. With About Face workshops, she&apos;s taking that to a whole new level by empowering the women she works with to do it themselves.
                </p>
                <p className="font-medium text-[#1a1612]">
                  There is no sales pitch at an About Face workshop. Just techniques you&apos;ll actually use.
                </p>
              </div>
              <a href="mailto:meredith@meredithhayman.com" className="inline-block mt-8 px-6 py-3 bg-[#b5706a] text-white rounded-full text-sm font-medium hover:bg-[#a35f59] transition-colors">
                Book a Workshop
              </a>
            </div>
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5997155eb8a79b2ad1dbc7bf/1517255073432-7PTU4ZJ4QRIMO7K2CLYS/AboutFace_Home_BookWorkshop2.jpg"
                alt="About Face Workshop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-[#f0ebe5] py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1a1612]">How it works</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Host at your home",
                  desc: "Gather 4–8 friends in your living room. Meredith comes to you with everything needed.",
                },
                {
                  step: "02",
                  title: "Live demonstration",
                  desc: "Using the half-face technique, Meredith demonstrates on a volunteer model — step by step.",
                },
                {
                  step: "03",
                  title: "Everyone practices",
                  desc: "Each guest recreates the look on themselves. Meredith coaches and answers questions throughout.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-8 border border-[#e8e0d8]">
                  <div className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#e8e0d8] mb-4">{item.step}</div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#1a1612] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#7a6f68] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perfect for */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1a1612] mb-6">Perfect for</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Girls Night In", "Birthday Party", "Bachelorette", "Moms Night Out", "Team Bonding", "Gift Giving"].map((tag) => (
                <span key={tag} className="px-5 py-2 bg-[#f5ede8] text-[#b5706a] rounded-full text-sm font-medium border border-[#d4998f]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-12">
              <a href="mailto:meredith@meredithhayman.com" className="px-8 py-4 bg-[#b5706a] text-white rounded-full text-sm font-medium hover:bg-[#a35f59] transition-colors">
                Inquire about hosting
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
