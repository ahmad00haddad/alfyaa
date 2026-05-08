import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "الفريق · Team — ALFYAA®" },
      {
        name: "description",
        content:
          "تعرّف على طِيب العَمد، مديرة الفياء، والفريق الإبداعي خلف كل صفحة.",
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

function Team() {
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
        </div>
      </section>

      {/* Founder */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="aspect-square rounded-[2.5rem] bg-gradient-funky p-1 shadow-pop -rotate-3">
              <div className="w-full h-full rounded-[2.2rem] bg-deep flex items-center justify-center grain">
                <span
                  className="text-[14rem] leading-none font-arabic-display font-black text-pink-soft"
                  style={{ textShadow: "8px 8px 0 var(--pink)" }}
                >
                  ط
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 text-right">
            <span className="inline-block bg-deep text-cream px-4 py-1 rounded-full text-xs font-display font-bold tracking-widest">
              FOUNDER · DIRECTOR
            </span>
            <h2 className="text-5xl md:text-6xl font-arabic-display font-black text-deep mt-4">
              طِيب العَمد
            </h2>
            <p className="text-deep/60 font-display font-bold mt-1 text-lg">
              Teeb Alamad — Social Media Manager & Content Creator
            </p>
            <p className="mt-6 text-deep/85 leading-relaxed">
              I’m a creative social media strategist with a passion for
              storytelling, human connection, and turning simple ideas into
              meaningful content. I’m curious by nature, observant, and love
              exploring how digital platforms can become spaces for growth,
              expression, and opportunity — not just noise. Currently based in
              Dubai, I’m always inspired by culture, people, and the small
              everyday moments that make content feel alive.
            </p>

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
