import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "الفريق · Team — ALFYAA®" },
      {
        name: "description",
        content:
          "تعرّف على طِيب العَمد، مديرة الفياء، والفريق الإبداعي خلف كل صفحة.",
      },
      { property: "og:title", content: "الفريق — ALFYAA®" },
      {
        property: "og:description",
        content: "ناس بتحب اللي بتعمله — التيم الإبداعي خلف كل صفحة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "الفريق — ALFYAA®" },
      {
        name: "twitter:description",
        content: "ناس بتحب اللي بتعمله — التيم الإبداعي خلف كل صفحة.",
      },
    ],
  }),
  component: Team,
});

const crew = [
  { ar: "كاتبة محتوى", en: "Copywriter", letter: "ك", c: "bg-mint text-deep" },
  { ar: "مصوّر", en: "Photographer", letter: "ص", c: "bg-pink-soft text-deep" },
  { ar: "مونتيرة", en: "Video Editor", letter: "م", c: "bg-pink text-cream" },
  { ar: "مصمم جرافيك", en: "Graphic Designer", letter: "ج", c: "bg-deep text-cream" },
];

const quotes = [
  "المحتوى مش كثرة نشر — المحتوى نيّة واضحة.",
  "كل براند عنده قصة، شغلتنا نلاقي الزاوية الصح.",
  "الفايرال مش صدفة — الفايرال سكربت مكتوب بعقل.",
  "منشتغل مع ناس عندهم شي يستاهل يُحكى.",
];

/** كتابة تدريجية للمسمّى الوظيفي */
function Typewriter({ text }: { text: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(0);
    const id = setInterval(() => setN((v) => (v >= text.length ? v : v + 1)), 45);
    return () => clearInterval(id);
  }, [text]);
  return (
    <span>
      {text.slice(0, n)}
      <span className="text-pink animate-pulse">|</span>
    </span>
  );
}

/** كرت يميل ٣D حسب المؤشر */
function TiltCard({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `${style?.transform ?? ""} perspective(800px) rotateX(${t.y}deg) rotateY(${t.x}deg)`,
        transition: t.x === 0 && t.y === 0 ? "transform 500ms cubic-bezier(.2,.8,.2,1)" : "transform 90ms linear",
      }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setT({
          x: ((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * 8,
          y: -((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * 8,
        });
      }}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
    >
      {children}
    </div>
  );
}


function Team() {
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () =>
      setClock(
        new Intl.DateTimeFormat("ar-JO", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Amman",
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="bg-pink text-cream py-20 relative overflow-hidden grain">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-right">
          <span className="font-script text-cream/80 text-3xl">the crew</span>
          <h1 className="text-6xl md:text-8xl font-arabic-display font-black mt-2">
            الفريق
          </h1>
          <p className="mt-4 text-cream/90 text-xl max-w-2xl ms-auto font-ar">
            ناس بتحب اللي بتعمله — ولهيك اللي بتعمله بحب الناس.
          </p>
          <p className="mt-5 font-script text-3xl text-cream/95">“{quote}”</p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative">
              <TiltCard className="aspect-square rounded-[2.5rem] bg-gradient-funky p-1 shadow-pop" style={{ transform: "rotate(-3deg)" }}>
                <div className="w-full h-full rounded-[2.2rem] bg-deep flex items-center justify-center grain">
                  <span
                    className="text-[14rem] leading-none font-arabic-display font-black text-pink-soft"
                    style={{ textShadow: "8px 8px 0 var(--pink)" }}
                  >
                    ط
                  </span>
                </div>
              </TiltCard>
              <span className="float-slow absolute -bottom-4 -start-3 bg-cream text-deep border-2 border-deep px-4 py-2 rounded-full font-display font-black text-xs shadow-pop">
                human-generated · NO AI
              </span>
            </div>
          </div>
          <div className="lg:col-span-3 text-right">
            <div className="flex flex-wrap items-center gap-2 justify-end">
              <span className="inline-flex items-center gap-2 bg-mint/60 text-deep px-3 py-1 rounded-full text-xs font-display font-bold">
                <span className="w-2 h-2 rounded-full bg-pink animate-pulse" />
                عمّان · {clock || "—"} — بترد عادة بنفس اليوم
              </span>
              <span className="inline-block bg-deep text-cream px-4 py-1 rounded-full text-xs font-display font-bold tracking-widest">
                FOUNDER · DIRECTOR
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-arabic-display font-black text-deep mt-4">
              طِيب العَمد
            </h2>
            <p className="text-deep/60 font-display font-bold mt-1 text-lg min-h-7">
              <Typewriter text="Teeb Alamad — Content Writer & Content Strategist" />
            </p>
            <p className="mt-6 text-deep/85 leading-relaxed font-ar text-lg">
              طِيب بتقدّم استراتيجية مدروسة و<span className="font-bold text-pink">بيرسونال براندينق</span>
              {" "}عن طريق <span className="font-bold">storytelling</span> — مش أي محتوى عادي.
              كتابة محتوى و <span className="font-bold">viral script writing</span> بطريقة غير
              عشوائية، وكل فكرة <span className="font-bold text-pink">human-generated</span> — مش AI.
            </p>
            <p className="mt-4 text-deep/70 leading-relaxed">
              A content writer & strategist building personal brands through
              real storytelling and intentional viral scripts. Every idea is
              human-made — not AI-generated. We work with clients who actually
              have value in their business, and our job is to help them
              communicate it the right way.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-end">
              <span className="inline-flex items-center gap-2 bg-pink-soft/60 text-deep px-4 py-2 rounded-full text-sm font-display font-bold">
                ✦ منشتغل بس مع كلاينت عندهم value حقيقي
              </span>
              <span className="inline-flex items-center gap-2 bg-mint/50 text-deep px-4 py-2 rounded-full text-sm font-display font-bold">
                ٥+ سنوات · ٤٠+ مشروع
              </span>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-deep text-cream px-4 py-2 rounded-full text-sm font-display font-bold hover:-translate-y-0.5 transition-transform"
              >
                احجز جلسة 1:1 ↗
              </Link>
            </div>


            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                ["Alfan", "Social Media Manager · 2023 — Now"],
                ["Roya TV", "Content Creator · 2022 — 2023"],
                ["AlMamlaka TV", "Social Media Monitor · 2021 — 2022"],
                ["Yarmouk University", "BA, Radio & Television"],
              ].map(([t, s]) => (
                <div key={t} className="bg-mint/40 rounded-2xl p-4">
                  <div className="font-display font-black text-deep">{t}</div>
                  <div className="text-deep/70 text-sm">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Crew */}
      <section className="bg-mint py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-right mb-12">
            <span className="font-script text-pink text-3xl">behind every page</span>
            <h2 className="text-4xl md:text-6xl font-arabic-display font-black text-deep">
              تيم لكل كلاينت
            </h2>
            <p className="text-deep/80 mt-3 font-ar max-w-2xl ms-auto">
              لكل بزنس بنبني تيم مخصّص حسب احتياجه — مش قالب جاهز.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {crew.map((m, i) => (
              <div
                key={m.en}
                className={`${m.c} rounded-3xl p-7 aspect-[4/5] flex flex-col justify-between shadow-pop`}
                style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
              >
                <span className="text-[8rem] leading-none font-arabic-display font-black opacity-90">
                  {m.letter}
                </span>
                <div>
                  <h3 className="text-2xl font-arabic-display font-black">{m.ar}</h3>
                  <p className="font-display font-bold opacity-80 text-sm">{m.en}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/contact"
              className="inline-block bg-deep text-cream px-10 py-5 rounded-full font-display font-black text-lg shadow-pop-pink hover:-translate-y-1 transition-transform"
            >
              انضمّ كعميل — أو كصانع محتوى ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
