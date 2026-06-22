import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "About Meredith | About Face Makeup Artist",
};

export default function About() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#f5ede8] py-20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-[#b5706a] text-sm font-semibold uppercase tracking-widest mb-3">About Face</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#1a1612]">Meet Meredith</h1>
          </div>
        </section>

        {/* Bio */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-5 text-[#7a6f68] leading-relaxed">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1a1612]">Flawless Application with Confidence and Ease</h2>
              <p>
                Meredith Hayman is a seasoned professional with an extensive background that demonstrates her worthiness of being trusted for your big day. Since moving to New York in 1998, Meredith has worked in all aspects of makeup artistry — from behind a makeup counter to television, print, instruction, runway, and bridal.
              </p>
              <p>
                Early in her career, Meredith had the privilege of working with top industry professionals including Trish McEvoy and Bobbi Brown. Her work has been featured on VH1, MTV, and Bravo, among others. She has enjoyed working with legendary celebrities including Whitney Cummings, Channing Tatum, and Christie Brinkley.
              </p>
              <p>
                Her expertise is also sought after in a variety of publications. As a featured expert in Westchester Magazine, Meredith is continually asked to contribute her insight on trends in the industry as well as lend her hand to several published photo shoots. She has also been a beauty consultant for The Knot, Shape Magazine, and the New York Post.
              </p>
              <p>
                As a champion for every woman, Meredith&apos;s passion is making the everyday woman feel and look her best. Whether she is shaping your brows, teaching you how to apply makeup for a big event, or giving you a complete makeup overhaul, Meredith&apos;s trademark sense of humor and genuine excitement are there making the whole process seem easier and much more fun.
              </p>
              <p>
                When she isn&apos;t busy making women beautiful, Meredith is a wife and mom to two kids and a cockapoo in Yorktown Heights, NY.
              </p>
            </div>
            <div className="space-y-6">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5997155eb8a79b2ad1dbc7bf/607cf7c3-edce-4b88-8188-d5e2e601585f/IMG_9615.jpeg"
                  alt="Meredith Hayman"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://images.squarespace-cdn.com/content/v1/5997155eb8a79b2ad1dbc7bf/5e263bf1-213d-4654-b612-f4bd2eac5c2f/IMG_5743.jpeg",
                  "https://images.squarespace-cdn.com/content/v1/5997155eb8a79b2ad1dbc7bf/0eaa0d0e-687c-4dd9-9567-44917d31fc61/42059220_1835966433118358_954595780486758400_o.jpg",
                ].map((src, i) => (
                  <div key={i} className="relative h-48 rounded-xl overflow-hidden shadow">
                    <Image src={src} alt="Meredith at work" fill className="object-cover" sizes="25vw" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#f0ebe5] py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: "25+", label: "Years Experience" },
                { num: "1000+", label: "Brides & Clients" },
                { num: "3", label: "Networks Featured" },
                { num: "7+", label: "Publications" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#b5706a] mb-1">{s.num}</div>
                  <div className="text-sm text-[#7a6f68]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
