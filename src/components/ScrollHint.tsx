import { useEffect, useState } from "react";

/** سهم "اسحب لتحت" يختفي أول ما تسكرول */
export function ScrollHint() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-500 ${
        hidden ? "opacity-0 translate-y-4" : "opacity-100"
      }`}
    >
      <span className="font-script text-pink text-2xl">اسحب</span>
      <span className="text-deep text-2xl float-slow">↓</span>
    </div>
  );
}
