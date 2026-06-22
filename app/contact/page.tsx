import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact | About Face Makeup Artist",
};

export default function Contact() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="bg-[#f5ede8] py-20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-[#b5706a] text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#1a1612]">Contact</h1>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1a1612] mb-6">
                Ready to book or have questions? Reach out.
              </h2>
              <div className="space-y-6 text-[#7a6f68]">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#b5706a] mb-1">Email</p>
                  <a href="mailto:meredith@meredithhayman.com" className="text-[#1a1612] hover:text-[#b5706a] transition-colors">
                    meredith@meredithhayman.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#b5706a] mb-1">Phone</p>
                  <a href="tel:6464185445" className="text-[#1a1612] hover:text-[#b5706a] transition-colors">
                    646.418.5445
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#b5706a] mb-1">Instagram</p>
                  <a href="https://instagram.com/meredithmakeup" target="_blank" rel="noopener noreferrer" className="text-[#1a1612] hover:text-[#b5706a] transition-colors">
                    @MeredithMakeup
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#b5706a] mb-1">Service Area</p>
                  <p className="text-sm leading-relaxed">
                    Serving the New York Metro Area, Westchester, Manhattan, Hudson Valley, New Jersey, and Rockland, Putnam, Dutchess, and Orange Counties.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e8e0d8] p-8 shadow-sm">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#1a1612] mb-6">Send a message</h3>
              <p className="text-sm text-[#7a6f68] mb-6">
                For the fastest response, email directly at{" "}
                <a href="mailto:meredith@meredithhayman.com" className="text-[#b5706a] underline">
                  meredith@meredithhayman.com
                </a>{" "}
                or call 646.418.5445.
              </p>
              <a
                href="mailto:meredith@meredithhayman.com?subject=Booking Inquiry"
                className="flex items-center justify-center w-full px-6 py-4 bg-[#b5706a] text-white rounded-xl text-sm font-medium hover:bg-[#a35f59] transition-colors"
              >
                Email Meredith
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
