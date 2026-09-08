import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

export const Route = createFileRoute("/tips")({
  head: () => ({
    meta: [
      { title: "نصائح · Tips & Tricks — ALFYAA®" },
      {
        name: "description",
        content:
          "نصائح يومية للسوشال ميديا — كيف تكتب كابشن، كيف ترفع التفاعل، أفكار محتوى مجانية.",
      },
      { property: "og:title", content: "نصائح · Tips — ALFYAA®" },
      {
        property: "og:description",
        content: "نصائح عملية للسوشال ميديا — خد، طبّق، ولاحظ الفرق.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tips,
});

const tips = [
  {
    n: "01",
    ar: "اكتب الكابشن قبل الفيديو",
    en: "Caption-first thinking",
    body: "أول جملة هي اللي بتوقّف الناس. لو ما عندك hook، الفيديو مش جاهز ينزل.",
    c: "bg-pink text-cream",
    level: "مبتدئ",
    mins: "٢٠ ثانية",
  },
  {
    n: "02",
    ar: "اول 3 ثواني = كل شي",
    en: "Hook in 3 seconds",
    body: "السؤال، التناقض، أو حركة مفاجئة — اختر واحدة وابدأ فيها.",
    c: "bg-mint text-deep",
    level: "مبتدئ",
    mins: "٣٠ ثانية",
  },
  {
    n: "03",
    ar: "انشر بنفس الوقت",
    en: "Be consistent, not viral",
    body: "خوارزمية انستغرام بتحب الثبات أكتر من الكمية. 4 ريلز بالأسبوع > 14 ريل بأسبوع و0 بالثاني.",
    c: "bg-pink-soft text-deep",
    level: "متقدّم",
    mins: "٢٥ ثانية",
  },
  {
    n: "04",
    ar: "ردّ على أول 30 كومنت",
    en: "First 30 comments rule",
    body: "أول نص ساعة بعد النشر = الذهب. ردّك بيرفع نسبة الوصول بشكل مباشر.",
    c: "bg-deep text-cream",
    level: "متقدّم",
    mins: "٢٠ ثانية",
  },
  {
    n: "05",
    ar: "احكي بصوتك انت",
    en: "Sound human",
    body: "اللي بيقرأ صفحتك بيحس فيك. لو الكابشن ChatGPT ناشف، الناس بتحس.",
    c: "bg-cream text-deep border-2 border-deep",
    level: "مبتدئ",
    mins: "١٥ ثانية",
  },
  {
    n: "06",
    ar: "ستوري قبل الريل",
    en: "Warm them up",
    body: "ستوريز قبل النشر بساعتين بترفع نسبة المشاهدة الأولى بشكل ملحوظ.",
    c: "bg-gradient-funky text-cream",
    level: "متقدّم",
    mins: "٢٠ ثانية",
  },
];

const levels = ["الكل", "مبتدئ", "متقدّم"] as const;

function Tips() {
  const [open, setOpen] = useState<string | null>(null);
  const [done, setDone] = useState<string[]>([]);
  const [level, setLevel] = useState<(typeof levels)[number]>("الكل");
  const [copied, setCopied] = useState<string | null>(null);
  const [pop, setPop] = useState<string | null>(null);

  // نصيحة اليوم — تتغيّر كل يوم
  const today = useMemo(() => {
    const day = Math.floor(Date.now() / 86400000);
    return tips[day % tips.length];
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("alfyaa-tips-done");
      if (raw) setDone(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const toggleDone = (n: string) => {
    setDone((prev) => {
      const next = prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n];
      try {
        localStorage.setItem("alfyaa-tips-done", JSON.stringify(next));
      } catch {
        /* ignore */
      }
      if (!prev.includes(n)) {
        setPop(n);
        setTimeout(() => setPop(null), 900);
      }
      return next;
    });
  };

  const shown = tips.filter((t) => level === "الكل" || t.level === level);
  const progress = Math.round((done.length / tips.length) * 100);

  return (
    <>
      <section className="bg-deep text-cream py-20 relative overflow-hidden grain">
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-pink/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-right">
          <span className="font-script text-pink-soft text-3xl">free advice</span>
          <h1 className="text-6xl md:text-8xl font-arabic-display font-black mt-2">
            نصائح <span className="text-pink">يومية</span>
          </h1>
          <p className="mt-4 text-cream/85 text-xl max-w-2xl ms-auto font-ar">
            ما رح نخبّي عليك أسرار الشغل. خد، طبّق، ولاحظ الفرق.
          </p>

          {/* نصيحة اليوم */}
          <div className="mt-10 inline-block bg-cream/10 border border-cream/20 rounded-3xl p-6 text-right max-w-xl backdrop-blur">
            <div className="text-xs font-display font-bold uppercase tracking-[0.3em] text-pink-soft">
              نصيحة اليوم
            </div>
            <div className="mt-2 text-3xl font-arabic-display font-black text-cream">
              {today.ar}
            </div>
            <p className="mt-2 text-cream/80 font-ar text-sm">{today.body}</p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* فلاتر + تقدّم القراءة */}
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex gap-2">
              {levels.map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className={`px-5 py-2 rounded-full font-display font-bold text-sm transition-all ${
                    level === l
                      ? "bg-deep text-cream shadow-pop-pink -rotate-2"
                      : "bg-mint/40 text-deep hover:bg-mint/70"
                  }`}
                >
                  <span className="font-ar">{l}</span>
                </button>
              ))}
            </div>

            <div className="min-w-[220px]">
              <div className="flex justify-between text-xs font-display font-bold text-deep/70">
                <span className="font-ar">
                  {done.length === tips.length
                    ? "خلّصت الكل 🎉"
                    : `طبّقت ${done.length} من ${tips.length}`}
                </span>
                <span>{progress}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-deep/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-funky transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* الكروت */}
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((t, i) => {
              const isOpen = open === t.n;
              const isDone = done.includes(t.n);
              return (
                <article
                  key={t.n}
                  onClick={() => setOpen(isOpen ? null : t.n)}
                  className={`${t.c} relative cursor-pointer rounded-3xl p-7 shadow-pop transition-all duration-300 ${
                    isOpen ? "md:col-span-2 lg:col-span-2 -translate-y-2" : "hover:-translate-y-2"
                  } ${open && !isOpen ? "opacity-60" : "opacity-100"}`}
                  style={{ transform: isOpen ? "rotate(0deg)" : `rotate(${i % 3 === 1 ? -1 : 1}deg)` }}
                >
                  {isDone && (
                    <div
                      className={`absolute top-5 left-5 bg-cream text-deep text-xs font-display font-black px-3 py-1 rounded-full shadow-pop-pink ${
                        pop === t.n ? "animate-scale-in" : ""
                      }`}
                    >
                      طبّقتها ✓
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="text-7xl font-display font-black opacity-90 leading-none">
                      {t.n}
                    </div>
                    <span className="mt-2 text-[11px] font-display font-bold uppercase tracking-widest opacity-70">
                      {t.mins}
                    </span>
                  </div>

                  <h3 className="mt-6 text-3xl font-arabic-display font-black">{t.ar}</h3>
                  <p className="font-display font-bold opacity-80 text-sm mt-1">{t.en}</p>

                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="leading-relaxed font-ar">{t.body}</p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDone(t.n);
                          }}
                          className="bg-cream text-deep px-5 py-2 rounded-full font-display font-black text-sm shadow-pop hover:-translate-y-0.5 transition-transform"
                        >
                          {isDone ? "رجّعها ↺" : "جرّبها اليوم ✓"}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard?.writeText(`${t.ar} — ${t.body}`);
                            setCopied(t.n);
                            setTimeout(() => setCopied(null), 1500);
                          }}
                          className="border-2 border-current px-5 py-2 rounded-full font-display font-black text-sm hover:-translate-y-0.5 transition-transform"
                        >
                          {copied === t.n ? "انتسخت ✓" : "انسخ النصيحة"}
                        </button>
                      </div>
                    </div>
                  </div>

                  {!isOpen && (
                    <p className="mt-4 text-xs font-display font-bold opacity-60">
                      اضغط للتفاصيل ↓
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-pink text-cream py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-arabic-display font-black">
            بدك استشارة على صفحتك بالذات؟
          </h2>
          <p className="mt-4 text-cream/90 font-ar text-lg">
            احجز جلسة 1:1 مع طِيب — نحلل صفحتك، نعطيك خطة، وانت كمّل.
          </p>
          <a
            href="/contact"
            className="inline-block mt-8 bg-cream text-deep px-10 py-5 rounded-full font-display font-black text-lg shadow-pop hover:-translate-y-1 transition-transform"
          >
            احجز جلسة ↗
          </a>
        </div>
      </section>
    </>
  );
}
