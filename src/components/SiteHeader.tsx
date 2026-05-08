import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", ar: "الرئيسية", en: "Home" },
  { to: "/services", ar: "الخدمات", en: "Services" },
  { to: "/team", ar: "الفريق", en: "Team" },
  { to: "/tips", ar: "نصائح", en: "Tips" },
  { to: "/contact", ar: "تواصل", en: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur border-b border-deep/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="text-3xl" />
          <span className="hidden sm:inline-block text-xs uppercase tracking-[0.3em] text-deep/70 font-display font-bold">
            Alfyaa<sup>®</sup>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{
                className:
                  "bg-pink text-primary-foreground shadow-pop -rotate-2",
              }}
              className="px-4 py-2 rounded-full font-display font-bold text-sm text-deep hover:bg-pink-soft/50 transition-all"
            >
              <span className="font-ar">{n.ar}</span>
              <span className="opacity-50 mx-1.5">·</span>
              {n.en}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-deep text-cream px-5 py-2.5 rounded-full font-display font-bold text-sm hover:bg-pink hover:shadow-pop transition-all"
        >
          ابدأ معنا ↗
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full bg-deep text-cream"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-deep/10 bg-cream px-5 py-4 flex flex-col gap-2">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl bg-mint/30 font-display font-bold text-deep"
            >
              <span className="font-ar">{n.ar}</span> · {n.en}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
