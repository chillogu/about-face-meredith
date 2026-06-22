import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Services | About Face Makeup Artist",
};

const bridalServices = [
  "Complimentary Bridal Makeup Consultation",
  "Bridal Makeup Trial",
  "Engagement Photos",
  "Bridal Shower",
  "Boudoir",
  "Brow Shaping",
  "Bridal Makeup Lesson for Destination Brides",
  "Bachelorette Workshop and Application",
];

const privateServices = [
  "Special Event Makeup",
  "Photo Shoot Application",
  "Boudoir",
  "Makeup Lesson",
  "Complete Makeup Overhaul",
  "Brow Shaping",
];

export default function Services() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="bg-[#f5ede8] py-20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-[#b5706a] text-sm font-semibold uppercase tracking-widest mb-3">What I Offer</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#1a1612]">Services</h1>
          </div>
        </section>

        {/* Bridal */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#b5706a] text-sm font-semibold uppercase tracking-widest mb-3">Bridal</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1a1612] mb-5">Let About Face be your wedding day savior.</h2>
              <p className="text-[#7a6f68] leading-relaxed mb-6">
                Meredith&apos;s heart is with the brides — which is why she is one of the most recommended makeup artists in the Hudson Valley. Not only does she have the experience and know-how to make you look like the absolute best version of yourself, but she has charisma and a calming effect that just can&apos;t be taught.
              </p>
              <ul className="space-y-2 mb-8">
                {bridalServices.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-[#7a6f68]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b5706a] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <a href="mailto:meredith@meredithhayman.com" className="inline-block px-6 py-3 bg-[#b5706a] text-white rounded-full text-sm font-medium hover:bg-[#a35f59] transition-colors">
                Inquire about bridal
              </a>
            </div>
            <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5997155eb8a79b2ad1dbc7bf/1516426117405-3D33WQUC41HAJF5K2EIX/AboutFace_BridalMakeup_500x333.jpg"
                alt="Bridal Makeup"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Portraits grid */}
        <section className="bg-[#f0ebe5] py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.squarespace-cdn.com/content/v1/5997155eb8a79b2ad1dbc7bf/1516425767026-9CCPBNJ11NDPBCYR758X/AboutFace_bridalportrait1.jpg",
                "https://images.squarespace-cdn.com/content/v1/5997155eb8a79b2ad1dbc7bf/1516425951361-GQC0NBSDALU0ZQKPNGL8/AboutFace_bridalportrait2.jpg",
                "https://images.squarespace-cdn.com/content/v1/5997155eb8a79b2ad1dbc7bf/1516425963107-NNAV9CBKJWDKSKPPIPSQ/AboutFace_bridalportrait3.jpg",
                "https://images.squarespace-cdn.com/content/v1/5997155eb8a79b2ad1dbc7bf/1516425971841-A2L99Y5RH6SUZ4KJUQ40/AboutFace_bridalportrait4.jpg",
              ].map((src, i) => (
                <div key={i} className="relative h-52 md:h-64 rounded-xl overflow-hidden shadow">
                  <Image src={src} alt={`Bridal portrait ${i + 1}`} fill className="object-cover" sizes="25vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Private */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl order-last md:order-first">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5997155eb8a79b2ad1dbc7bf/1516901416272-RUXY80O6HRQDRC54E1N1/AboutFace_Home_Brushstrokes.jpg"
                alt="Private Makeup Services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-[#b5706a] text-sm font-semibold uppercase tracking-widest mb-3">Private Services</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1a1612] mb-5">Personalized to you.</h2>
              <p className="text-[#7a6f68] leading-relaxed mb-6">
                Whether you need makeup for a special event, a photo shoot, or just want to learn how to apply your existing products better, Meredith offers private, one-on-one sessions tailored to your goals.
              </p>
              <ul className="space-y-2 mb-8">
                {privateServices.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-[#7a6f68]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b5706a] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <a href="mailto:meredith@meredithhayman.com" className="inline-block px-6 py-3 bg-[#b5706a] text-white rounded-full text-sm font-medium hover:bg-[#a35f59] transition-colors">
                Book a session
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
