import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative bg-deep text-cream mt-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="marquee-track flex whitespace-nowrap text-[18vw] leading-none font-black font-arabic-display">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="px-8">
              الفياء
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Logo className="text-5xl" />
          <p className="mt-4 text-cream/70 text-sm leading-relaxed font-ar">
            من الألف إلى الياء — وكالة محتوى تمسك صفحتك من اللحظة الأولى وتطلع
            بها لأبعد نقطة.
          </p>
        </div>
        <div>
          <h4 className="text-pink-soft text-xs uppercase tracking-[0.3em] mb-4">
            Navigate
          </h4>
          <ul className="space-y-2 text-cream/90">
            <li><Link to="/services" className="hover:text-pink">Services · الخدمات</Link></li>
            <li><Link to="/team" className="hover:text-pink">Team · الفريق</Link></li>
            <li><Link to="/tips" className="hover:text-pink">Tips · نصائح</Link></li>
            <li><Link to="/contact" className="hover:text-pink">Contact · تواصل</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-pink-soft text-xs uppercase tracking-[0.3em] mb-4">
            Studio
          </h4>
          <p className="text-cream/90">Dubai, United Arab Emirates</p>
          <p className="text-cream/90 mt-2">
            <a href="mailto:hello@alfyaa.agency" className="hover:text-pink">
              hello@alfyaa.agency
            </a>
          </p>
          <p className="text-cream/60 text-sm mt-6">
            Directed by <span className="font-bold text-cream">Teeb Alamad</span>
          </p>
        </div>
      </div>
      <div className="relative border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} ALFYAA® — A to Z, no distance.
      </div>
    </footer>
  );
}
