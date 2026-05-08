export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-arabic-display font-black text-pink leading-none select-none ${className}`}
      style={{
        fontFamily: "var(--font-arabic-display)",
        textShadow: "3px 3px 0 var(--deep)",
        letterSpacing: "0.02em",
      }}
    >
      الفياء
    </span>
  );
}
