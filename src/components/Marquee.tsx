export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-pink text-cream py-5 border-y-4 border-deep -rotate-1 mx-[-2%]">
      <div className="marquee-track flex whitespace-nowrap items-center font-display font-black text-2xl md:text-3xl">
        {doubled.map((t, i) => (
          <span key={i} className="px-8 flex items-center gap-8">
            {t}
            <span className="text-pink-soft">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
