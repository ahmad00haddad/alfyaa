import { createFileRoute, Link } from "@tanstack/react-router";
import heroTv from "@/assets/hero-tv.png";
import blob from "@/assets/blob-pink.png";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALFYAA® — وكالة سوشال ميديا من الألف إلى الياء" },
      {
        name: "description",
        content:
          "نمسك صفحتك ونبنيها من الصفر: استراتيجية، محتوى، تصوير، مونتاج، ونشر. وكالة الفياء — Dubai.",
      },
      { property: "og:title", content: "ALFYAA® — A to Z social media" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream grain">
        <div
          className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full opacity-60 blur-3xl"
          style={{ background: "var(--mint)" }}
        />
        <img
          src={blob}
          alt=""
          aria-hidden
          className="absolute -bottom-24 -right-24 w-[420px] opacity-80 spin-slow"
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 lg:pt-24 pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-right">
            <span className="inline-flex items-center gap-2 bg-deep text-cream px-4 py-1.5 rounded-full text-xs font-display font-bold tracking-widest -rotate-2">
              ALFYAA® · من الألف إلى الياء
            </span>

            <h1
              className="mt-6 font-arabic-display font-black text-pink leading-[0.9] text-[18vw] sm:text-[14vw] lg:text-[10rem]"
              style={{ textShadow: "8px 8px 0 var(--deep)" }}
            >
              الفياء
            </h1>

            <p className="mt-6 text-2xl md:text-3xl font-bold text-deep leading-snug font-ar">
              ما في مسافة بينك وبين جمهورك. <br className="hidden md:block" />
              <span className="squiggle-underline">احنا اللي بنمسكها.</span>
            </p>

            <p className="mt-5 text-deep/80 text-lg max-w-xl ms-auto font-ar leading-relaxed">
              وكالة محتوى ديجيتال متكاملة — ستراتيجي، تصوير، مونتاج، نشر، وكل
              اللي تحتاجه صفحتك تكبر وتتفاعل.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-end">
              <Link
                to="/contact"
                className="bg-pink text-primary-foreground px-7 py-4 rounded-full font-display font-black text-lg shadow-pop hover:translate-x-[-3px] hover:translate-y-[-3px] transition-transform"
              >
                ابدأ مشروعك ↗
              </Link>
              <Link
                to="/services"
                className="bg-cream border-2 border-deep text-deep px-7 py-4 rounded-full font-display font-black text-lg hover:bg-deep hover:text-cream transition-colors"
              >
                شو منعمل؟
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 justify-end text-deep/70 text-sm font-display font-bold uppercase tracking-widest">
              <span>Strategy</span><span>·</span>
              <span>Content</span><span>·</span>
              <span>Production</span><span>·</span>
              <span>Editing</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <img
              src={heroTv}
              alt="Funky retro TV with Alfyaa logo on screen"
              className="w-full max-w-[520px] mx-auto float-slow drop-shadow-2xl"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "STRATEGY",
          "CONTENT",
          "PHOTO + VIDEO",
          "EDITING",
          "POSTING",
          "GROWTH",
          "FROM A TO Z",
        ]}
      />

      {/* PHILOSOPHY */}
      <section className="bg-mint py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-2 p-4 text-deep font-arabic-display text-3xl">
            {Array.from({ length: 96 }).map((_, i) => (
              <span key={i}>الفياء</span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <span className="inline-block bg-deep text-cream px-4 py-1.5 rounded-full text-xs font-display font-bold tracking-widest">
            THE PHILOSOPHY · الفلسفة
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-arabic-display font-black text-deep leading-tight">
            من <span className="text-pink">الألف</span> إلى{" "}
            <span className="text-pink">الياء</span>
          </h2>
          <p className="mt-6 text-deep/85 text-lg md:text-xl leading-loose font-ar max-w-3xl mx-auto">
            الفياء متّصلة، لأنه ما في مسافة. بعالم السوشال ميديا والديجيتال
            المسافة ما بتوجد — لهيك اختصرنا الحروف اللي بالنص، وضلّينا الأول
            والآخر. كل اللي بينهم… شغلنا.
          </p>
          <p className="mt-4 text-deep/60 italic font-display">
            “We may appear to be a cursive alphabet with a misspelling. From A
            to Z. But there is no time to put distance.”
          </p>
        </div>
      </section>

      {/* SERVICES TEASE */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div className="text-right">
              <span className="text-pink font-script text-3xl">what we do</span>
              <h2 className="text-4xl md:text-6xl font-arabic-display font-black text-deep">
                خدماتنا
              </h2>
            </div>
            <Link
              to="/services"
              className="text-deep font-display font-bold underline underline-offset-4 decoration-pink decoration-4"
            >
              كل الخدمات ↗
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { ar: "ستراتيجي", en: "Strategy", emoji: "✦", c: "bg-pink text-cream" },
              { ar: "محتوى", en: "Content", emoji: "✿", c: "bg-mint text-deep" },
              { ar: "تصوير", en: "Photo & Video", emoji: "❍", c: "bg-pink-soft text-deep" },
              { ar: "مونتاج", en: "Editing", emoji: "▲", c: "bg-deep text-cream" },
            ].map((s, i) => (
              <div
                key={s.en}
                className={`${s.c} rounded-3xl p-7 shadow-pop hover:-translate-y-2 transition-transform`}
                style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
              >
                <div className="text-5xl mb-6">{s.emoji}</div>
                <h3 className="text-3xl font-arabic-display font-black">{s.ar}</h3>
                <p className="mt-1 font-display font-bold opacity-80">{s.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTOR */}
      <section className="bg-deep text-cream py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="aspect-square rounded-[2.5rem] bg-gradient-funky p-1 shadow-pop-pink rotate-3">
              <div className="w-full h-full rounded-[2.2rem] bg-deep flex items-center justify-center">
                <span
                  className="text-9xl font-arabic-display font-black text-pink"
                  style={{ textShadow: "6px 6px 0 var(--cream)" }}
                >
                  ط
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <span className="text-pink-soft font-script text-3xl">director</span>
            <h2 className="text-4xl md:text-5xl font-arabic-display font-black mt-2">
              طِيب العَمد
            </h2>
            <p className="text-cream/60 font-display font-bold mt-1">
              Teeb Alamad · Social Media Strategist
            </p>
            <p className="mt-6 text-cream/85 leading-relaxed">
              I’m a creative social media strategist with a passion for
              storytelling, human connection, and turning simple ideas into
              meaningful content. I believe in content that feels real, adds
              value, and leaves a lasting impression.
            </p>
            <Link
              to="/team"
              className="inline-block mt-8 bg-pink text-cream px-6 py-3 rounded-full font-display font-bold shadow-pop hover:-translate-y-1 transition-transform"
            >
              تعرّف على الفريق ↗
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-5xl md:text-7xl font-arabic-display font-black text-deep leading-tight">
            صفحتك تستاهل تكون{" "}
            <span className="text-pink">حدث</span>.
          </h2>
          <p className="mt-6 text-deep/80 text-lg font-ar">
            خلّينا نمسكها من الألف للياء — وانت بس استمتع بالنتيجة.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-10 bg-deep text-cream px-10 py-5 rounded-full font-display font-black text-xl shadow-pop-pink hover:-translate-y-1 transition-transform"
          >
            احجز جلسة استشارة ↗
          </Link>
        </div>
      </section>
    </>
  );
}
