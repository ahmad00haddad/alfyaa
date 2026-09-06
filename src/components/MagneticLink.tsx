import { Link } from "@tanstack/react-router";
import { useRef, useState, type ReactNode } from "react";

type Props = {
  to: "/" | "/services" | "/team" | "/tips" | "/contact";
  className?: string;
  children: ReactNode;
  strength?: number;
};

/** زر بحركة مغناطيسية — يتبع المؤشر بلطف */
export function MagneticLink({ to, className, children, strength = 14 }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  return (
    <Link
      to={to}
      ref={ref}
      className={className}
      style={{
        transform: `translate(${t.x}px, ${t.y}px)`,
        transition: t.x === 0 && t.y === 0 ? "transform 400ms cubic-bezier(.2,.8,.2,1)" : "transform 80ms linear",
      }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        setT({ x: dx * strength, y: dy * strength });
      }}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
    >
      {children}
    </Link>
  );
}
