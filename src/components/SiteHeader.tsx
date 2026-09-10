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
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8 h-16 md:h-20 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <Logo className="text-2xl sm:text-3xl" />
          <span className="hidden sm:inline-block truncate text-xs uppercase tracking-[0.3em] text-deep/70 font-display font-bold">
            Alfyaa<sup>®</sup>
          </span>
        </Link>

        <div className="flex items-center gap-2 justify-self-end">


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
          className="md:hidden grid h-11 w-11 shrink-0 place-items-center rounded-full bg-deep text-cream text-lg active:scale-95 transition-transform"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-deep/10 bg-cream px-4 py-4 flex flex-col gap-2 pb-safe">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="px-4 py-3.5 rounded-2xl bg-mint/30 font-display font-bold text-deep active:scale-[0.98] transition-transform"
            >
              <span className="font-ar">{n.ar}</span> · {n.en}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-1 px-4 py-3.5 rounded-2xl bg-deep text-cream text-center font-display font-bold active:scale-[0.98] transition-transform"
          >
            ابدأ معنا ↗
          </Link>
        </div>
      )}

    </header>
  );
}
