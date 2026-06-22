import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1612] text-[#a89e96] mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-white text-lg mb-3">About Face</h3>
            <p className="text-sm leading-relaxed">
              Meredith Hayman, Makeup Artist.<br />
              Serving the New York Metro Area, Westchester, Hudson Valley, Manhattan, and New Jersey.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-widest">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-[#b5706a] transition-colors">Bridal Makeup</Link></li>
              <li><Link href="/services" className="hover:text-[#b5706a] transition-colors">Private Services</Link></li>
              <li><Link href="/workshops" className="hover:text-[#b5706a] transition-colors">Group Workshops</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:6464185445" className="hover:text-[#b5706a] transition-colors">646.418.5445</a></li>
              <li><a href="mailto:meredith@meredithhayman.com" className="hover:text-[#b5706a] transition-colors">meredith@meredithhayman.com</a></li>
              <li><a href="https://instagram.com/meredithmakeup" target="_blank" rel="noopener noreferrer" className="hover:text-[#b5706a] transition-colors">@MeredithMakeup</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#2e2724] pt-6 text-xs text-center">
          © {new Date().getFullYear()} About Face by Meredith Hayman. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
