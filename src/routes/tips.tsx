import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tips")({
  head: () => ({
    meta: [
      { title: "نصائح · Tips & Tricks — ALFYAA®" },
      {
        name: "description",
        content:
          "نصائح يومية للسوشال ميديا — كيف تكتب كابشن، كيف ترفع التفاعل، أفكار محتوى مجانية.",
      },
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
  },
  {
    n: "02",
    ar: "اول 3 ثواني = كل شي",
    en: "Hook in 3 seconds",
    body: "السؤال، التناقض، أو حركة مفاجئة — اختر واحدة وابدأ فيها.",
    c: "bg-mint text-deep",
  },
  {
    n: "03",
    ar: "انشر بنفس الوقت",
    en: "Be consistent, not viral",
    body: "خوارزمية انستغرام بتحب الثبات أكتر من الكمية. 4 ريلز بالأسبوع > 14 ريل بأسبوع و0 بالثاني.",
    c: "bg-pink-soft text-deep",
  },
  {
    n: "04",
    ar: "ردّ على أول 30 كومنت",
    en: "First 30 comments rule",
    body: "أول نص ساعة بعد النشر = الذهب. ردّك بيرفع نسبة الوصول بشكل مباشر.",
    c: "bg-deep text-cream",
  },
  {
    n: "05",
    ar: "احكي بصوتك انت",
    en: "Sound human",
    body: "اللي بيقرأ صفحتك بيحس فيك. لو الكابشن ChatGPT ناشف، الناس بتحس.",
    c: "bg-cream text-deep border-2 border-deep",
  },
  {
    n: "06",
    ar: "ستوري قبل الريل",
    en: "Warm them up",
    body: "ستوريز قبل النشر بساعتين بترفع نسبة المشاهدة الأولى بشكل ملحوظ.",
    c: "bg-gradient-funky text-cream",
  },
];

function Tips() {
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
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((t, i) => (
            <article
              key={t.n}
              className={`${t.c} rounded-3xl p-7 shadow-pop hover:-translate-y-2 transition-transform`}
              style={{ transform: `rotate(${i % 3 === 1 ? -1 : 1}deg)` }}
            >
              <div className="text-7xl font-display font-black opacity-90 leading-none">
                {t.n}
              </div>
              <h3 className="mt-6 text-3xl font-arabic-display font-black">
                {t.ar}
              </h3>
              <p className="font-display font-bold opacity-80 text-sm mt-1">
                {t.en}
              </p>
              <p className="mt-4 leading-relaxed font-ar">{t.body}</p>
            </article>
          ))}
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
