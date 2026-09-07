import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "الخدمات · Services — ALFYAA®" },
      {
        name: "description",
        content:
          "ستراتيجي سوشال ميديا، إنتاج محتوى، تصوير ومونتاج، إدارة الحسابات والنشر.",
      },
      { property: "og:title", content: "Services — ALFYAA®" },
      {
        property: "og:description",
        content: "من الفكرة للتنفيذ للنشر — باكدجات محتوى متكاملة من الفياء.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    ar: "ستراتيجي وإدارة",
    en: "Strategy & Management",
    desc: "نبني خطة محتوى مدروسة لشهر، ربع، أو سنة كاملة، ومنمسك صفحتك يومياً ونرد على متابعينك.",
    items: ["Content calendar", "Audience research", "KPIs & reporting", "Community management"],
    c: "bg-pink text-cream",
    fit: "براندات جاهزة تكبر",
    eta: "أول خطة خلال ٧ أيام",
    hot: true,
  },
  {
    ar: "إنتاج محتوى",
    en: "Content Production",
    desc: "أفكار يومية، كابشنز بصوتك انت، ريلز وستوريز تطلع طبيعية مش مصنوعة.",
    items: ["Reels & shorts", "Captions & copy", "Story design", "Templates & carousels"],
    c: "bg-mint text-deep",
    fit: "كوفي شوب · مطاعم · متاجر",
    eta: "أول محتوى خلال ٥ أيام",
  },
  {
    ar: "تصوير وإخراج",
    en: "Photo & Video",
    desc: "تصوير احترافي للمكان والمنتج والوجه. كل لقطة بتقول قصة.",
    items: ["On-location shoots", "Product photography", "Behind the scenes", "Brand films"],
    c: "bg-pink-soft text-deep",
    fit: "منتجات · أماكن · شخصيات",
    eta: "جدولة تصوير داخل أسبوع",
  },
  {
    ar: "مونتاج وإيديتنغ",
    en: "Editing & Post",
    desc: "مونتاج سريع، تأثيرات بسيطة وذكية، صوت ونغمة بتشد المتابع لآخر ثانية.",
    items: ["Reels editing", "Color grading", "Subtitles AR/EN", "Sound design"],
    c: "bg-deep text-cream",
    fit: "عندك مواد خام كثيرة",
    eta: "تسليم أول ريل ٤٨ ساعة",
  },
  {
    ar: "استشارات",
    en: "Consulting",
    desc: "جلسة 1:1 معك، نحلل صفحتك، نضع خارطة طريق واضحة، ونعطيك أدوات تكمل فيها لحالك.",
    items: ["Account audit", "Brand voice", "Growth roadmap", "Tools & workflow"],
    c: "bg-cream text-deep border-2 border-deep",
    fit: "انفلونسر · بيرسونال براند",
    eta: "الجلسة داخل ٣ أيام",
  },
  {
    ar: "تيم متكامل",
    en: "Full Team",
    desc: "بنجيبلك تيم كامل (مصور، محرر، كاتب) يشتغلوا حصرياً على براندك.",
    items: ["Dedicated team", "Weekly syncs", "Monthly review", "Always on"],
    c: "bg-gradient-funky text-cream",
    fit: "براندات عندها value وطموح",
    eta: "بداية الشغل داخل ١٠ أيام",
  },
];

function Services() {
  const [picked, setPicked] = useState<string[]>([]);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const p = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      setShowCta(p > 0.45);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = (en: string) =>
    setPicked((p) => (p.includes(en) ? p.filter((x) => x !== en) : [...p, en]));

  return (
    <>
      <section className="bg-mint py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-right">
          <span className="font-script text-pink text-3xl">what we do</span>
          <h1 className="text-6xl md:text-8xl font-arabic-display font-black text-deep mt-2">
            خدماتنا
          </h1>
          <p className="mt-4 text-deep/80 text-xl max-w-2xl ms-auto font-ar">
            من الفكرة، للتنفيذ، للنشر، للنتيجة — كل شي بمكان واحد.
          </p>
          <p className="mt-3 text-deep/60 font-ar text-sm">
            ✦ اضغط على أي خدمة لتختارها — ومنجمعلك باكدج على قياسك.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-2 gap-7">
          {services.map((s, i) => {
            const on = picked.includes(s.en);
            return (
              <article
                key={s.en}
                onClick={() => toggle(s.en)}
                className={`group relative cursor-pointer ${s.c} rounded-3xl p-8 md:p-10 shadow-pop transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 ${
                  on ? "ring-4 ring-deep" : ""
                }`}
                style={{ transform: `rotate(${i % 2 ? 0.6 : -0.6}deg)` }}
              >
                {s.hot && (
                  <span className="absolute -top-3 start-6 bg-deep text-cream px-3 py-1 rounded-full text-[11px] font-display font-black uppercase tracking-widest">
                    الأكثر طلباً
                  </span>
                )}
                {on && (
                  <span className="absolute -top-3 end-6 bg-cream text-deep w-8 h-8 rounded-full grid place-items-center font-black shadow-pop">
                    ✓
                  </span>
                )}

                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <h2 className="text-4xl md:text-5xl font-arabic-display font-black">
                    {s.ar}
                  </h2>
                  <span className="font-display font-bold uppercase tracking-widest text-sm opacity-80">
                    {s.en}
                  </span>
                </div>

                <p className="mt-5 text-lg leading-relaxed font-ar opacity-90">
                  {s.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 font-ar text-xs">
                  <span className="px-3 py-1 rounded-full bg-cream/25 border border-current/20">
                    مناسب لـ: {s.fit}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cream/25 border border-current/20">
                    ⏱ {s.eta}
                  </span>
                </div>

                <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                  {s.items.map((it, j) => (
                    <li
                      key={it}
                      className="flex items-center gap-2 font-display font-bold text-sm"
                    >
                      <span
                        className="inline-block transition-transform duration-300 group-hover:scale-125 group-hover:rotate-180"
                        style={{ transitionDelay: `${j * 70}ms` }}
                      >
                        ✦
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block bg-deep text-cream px-10 py-5 rounded-full font-display font-black text-xl shadow-pop-pink hover:-translate-y-1 transition-transform"
          >
            ابني الباكدج تبعك ↗
          </Link>
          <p className="mt-4 text-deep/60 font-ar text-sm">
            ما منشتغل مع براند بدون value — منختار مشاريعنا بعناية.
          </p>
        </div>
      </section>

      <div
        className={`fixed bottom-5 inset-x-4 z-50 flex justify-center transition-all duration-500 ${
          showCta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <Link
          to="/contact"
          className="flex items-center gap-3 bg-pink text-cream px-6 py-3 rounded-full shadow-pop font-display font-black"
        >
          <span className="font-ar text-sm">
            {picked.length >= 2
              ? `اخترت ${picked.length} خدمات — منقدر ندمجهم بباكدج`
              : picked.length === 1
                ? "خدمة واحدة مختارة — كمّل الطلب"
                : "جاهز؟ ابني باكدجك"}
          </span>
          <span>↗</span>
        </Link>
      </div>
    </>
  );
}
