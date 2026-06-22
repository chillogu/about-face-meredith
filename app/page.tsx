import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center bg-[#f5ede8]">
          <div className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center w-full">
            <div>
              <p className="text-[#b5706a] text-sm font-semibold uppercase tracking-widest mb-4">About Face</p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-[#1a1612] leading-tight mb-6">
                The absolute best version of yourself.
              </h1>
              <p className="text-[#7a6f68] text-lg leading-relaxed mb-8">
                Meredith Hayman is a professional makeup artist with over 25 years of experience in bridal, editorial, and private makeup services throughout the New York Metro Area.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="px-6 py-3 bg-[#b5706a] text-white rounded-full text-sm font-medium hover:bg-[#a35f59] transition-colors">
                  View Services
                </Link>
                <Link href="/contact" className="px-6 py-3 border border-[#b5706a] text-[#b5706a] rounded-full text-sm font-medium hover:bg-[#f5ede8] transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5997155eb8a79b2ad1dbc7bf/1505513700426-0K47SLHG8WLW60BSGXJ7/AboutFace_Makeup_home.jpg"
                alt="Meredith Hayman Makeup Artist"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* As seen in */}
        <section className="border-y border-[#e8e0d8] bg-white">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <p className="text-center text-xs text-[#7a6f68] uppercase tracking-widest mb-6">As Featured In</p>
            <div className="flex flex-wrap justify-center gap-8 text-[#b5706a] font-[family-name:var(--font-playfair)] text-sm font-semibold">
              {["Westchester Magazine", "The Knot", "Shape Magazine", "New York Post", "VH1", "MTV", "Bravo"].map((pub) => (
                <span key={pub}>{pub}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#b5706a] text-sm font-semibold uppercase tracking-widest mb-3">What I Offer</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1a1612]">Services</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Bridal Makeup",
                  desc: "From your makeup trial to your wedding day, Meredith makes sure you look and feel flawless. Serving brides throughout the Hudson Valley and NYC metro.",
                  href: "/services",
                  icon: "💍",
                },
                {
                  title: "Private Services",
                  desc: "One-on-one makeup application for special events, photo shoots, boudoir sessions, and everyday looks. Personalized to you.",
                  href: "/services",
                  icon: "✨",
                },
                {
                  title: "Group Workshops",
                  desc: "A fun, hands-on makeup workshop for you and your closest friends. No sales pitch — just practical techniques you'll actually use.",
                  href: "/workshops",
                  icon: "👄",
                },
              ].map((s) => (
                <Link key={s.title} href={s.href} className="group bg-white rounded-2xl p-8 border border-[#e8e0d8] hover:border-[#b5706a] hover:shadow-md transition-all">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#1a1612] mb-3">{s.title}</h3>
                  <p className="text-sm text-[#7a6f68] leading-relaxed">{s.desc}</p>
                  <span className="inline-block mt-4 text-xs text-[#b5706a] font-medium group-hover:underline">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About strip */}
        <section className="bg-[#f0ebe5] py-24">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5997155eb8a79b2ad1dbc7bf/607cf7c3-edce-4b88-8188-d5e2e601585f/IMG_9615.jpeg"
                alt="Meredith Hayman"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-[#b5706a] text-sm font-semibold uppercase tracking-widest mb-3">About Meredith</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1a1612] mb-5">Experience that shows.</h2>
              <p className="text-[#7a6f68] leading-relaxed mb-4">
                Since moving to New York in 1998, Meredith has worked across every aspect of makeup artistry — from television and print to runway and bridal. She trained alongside Trish McEvoy and Bobbi Brown, and has appeared on VH1, MTV, and Bravo.
              </p>
              <p className="text-[#7a6f68] leading-relaxed mb-6">
                Her work with clients like Whitney Cummings, Channing Tatum, and Christie Brinkley reflects the same care she brings to every bride, workshop guest, and private client.
              </p>
              <Link href="/about" className="text-sm text-[#b5706a] font-medium hover:underline">
                Read the full story →
              </Link>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <blockquote className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1612] italic leading-relaxed mb-4">
              &ldquo;You don&apos;t have to wear a lot of makeup to look great; you just need the makeup that is right for you.&rdquo;
            </blockquote>
            <cite className="text-sm text-[#b5706a] not-italic font-medium">— Meredith Hayman</cite>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1a1612] py-20 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-4">Ready to book?</h2>
            <p className="text-[#a89e96] mb-8">
              Serving Westchester, Manhattan, Hudson Valley, New Jersey, and surrounding counties.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:meredith@meredithhayman.com" className="px-6 py-3 bg-[#b5706a] text-white rounded-full text-sm font-medium hover:bg-[#a35f59] transition-colors">
                Email Meredith
              </a>
              <a href="tel:6464185445" className="px-6 py-3 border border-[#a89e96] text-[#a89e96] rounded-full text-sm font-medium hover:border-white hover:text-white transition-colors">
                646.418.5445
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
