import { createFileRoute, Link } from "@tanstack/react-router";

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
  },
  {
    ar: "إنتاج محتوى",
    en: "Content Production",
    desc: "أفكار يومية، كابشنز بصوتك انت، ريلز وستوريز تطلع طبيعية مش مصنوعة.",
    items: ["Reels & shorts", "Captions & copy", "Story design", "Templates & carousels"],
    c: "bg-mint text-deep",
  },
  {
    ar: "تصوير وإخراج",
    en: "Photo & Video",
    desc: "تصوير احترافي للمكان والمنتج والوجه. كل لقطة بتقول قصة.",
    items: ["On-location shoots", "Product photography", "Behind the scenes", "Brand films"],
    c: "bg-pink-soft text-deep",
  },
  {
    ar: "مونتاج وإيديتنغ",
    en: "Editing & Post",
    desc: "مونتاج سريع، تأثيرات بسيطة وذكية، صوت ونغمة بتشد المتابع لآخر ثانية.",
    items: ["Reels editing", "Color grading", "Subtitles AR/EN", "Sound design"],
    c: "bg-deep text-cream",
  },
  {
    ar: "استشارات",
    en: "Consulting",
    desc: "جلسة 1:1 معك، نحلل صفحتك، نضع خارطة طريق واضحة، ونعطيك أدوات تكمل فيها لحالك.",
    items: ["Account audit", "Brand voice", "Growth roadmap", "Tools & workflow"],
    c: "bg-cream text-deep border-2 border-deep",
  },
  {
    ar: "تيم متكامل",
    en: "Full Team",
    desc: "بنجيبلك تيم كامل (مصور، محرر، كاتب) يشتغلوا حصرياً على براندك.",
    items: ["Dedicated team", "Weekly syncs", "Monthly review", "Always on"],
    c: "bg-gradient-funky text-cream",
  },
];

function Services() {
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
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-2 gap-7">
          {services.map((s, i) => (
            <article
              key={s.en}
              className={`${s.c} rounded-3xl p-8 md:p-10 shadow-pop`}
              style={{ transform: `rotate(${(i % 2 ? 0.6 : -0.6)}deg)` }}
            >
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
              <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 font-display font-bold text-sm">
                    <span>✦</span> {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block bg-deep text-cream px-10 py-5 rounded-full font-display font-black text-xl shadow-pop-pink hover:-translate-y-1 transition-transform"
          >
            ابني الباكدج تبعك ↗
          </Link>
        </div>
      </section>
    </>
  );
}
