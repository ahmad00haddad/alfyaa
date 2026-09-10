import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل · Contact — ALFYAA®" },
      {
        name: "description",
        content: "احكِ معنا — نبني سوا صفحتك من الألف إلى الياء. Dubai, UAE.",
      },
      { property: "og:title", content: "تواصل · Contact — ALFYAA®" },
      {
        property: "og:description",
        content: "احكي عن مشروعك بكام جملة — منرجعلك خلال ٢٤ ساعة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const kinds = ["كوفي شوب", "إنفلونسر", "براند تجاري", "عيادة / خدمة", "غير هيك"];

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [kind, setKind] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [shake, setShake] = useState(false);
  const [now, setNow] = useState("");

  useEffect(() => {
    const tick = () =>
      setNow(
        new Intl.DateTimeFormat("ar", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Dubai",
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  const emailBad = email.length > 3 && !email.includes("@");
  const steps = (kind ? 1 : 0) + (email.includes("@") ? 1 : 0) + (msg.length > 12 ? 1 : 0);

  return (
    <>
      <section className="bg-mint py-20 relative overflow-hidden grain">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-right">
          <span className="font-script text-pink text-3xl">say hi</span>
          <h1 className="text-6xl md:text-8xl font-arabic-display font-black text-deep mt-2">
            تواصل
          </h1>
          <p className="mt-4 text-deep/80 text-xl max-w-2xl ms-auto font-ar">
            احكي عن مشروعك بكام جملة — رح نرجعلك خلال 24 ساعة.
          </p>
          {now && (
            <p className="mt-3 text-deep/60 text-sm font-ar">
              هلّق الساعة {now} بدبي — لو تأخرنا، منرد الصبح ☕
            </p>
          )}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {[
              { label: "Email", value: "hello@alfyaa.agency", href: "mailto:hello@alfyaa.agency" },
              { label: "Director", value: "alamadteeb@gmail.com", href: "mailto:alamadteeb@gmail.com" },
              { label: "Studio", value: "Dubai, UAE" },
              { label: "Hours", value: "Sun–Thu · 10:00 — 19:00" },
            ].map((c) => (
              <div
                key={c.label}
                className="bg-mint/40 rounded-2xl p-6 shadow-pop -rotate-1 hover:rotate-0 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-xs font-display font-bold uppercase tracking-widest text-pink">
                  {c.label}
                </div>
                {c.href ? (
                  <a href={c.href} className="block mt-2 text-2xl font-display font-black text-deep hover:text-pink">
                    {c.value}
                  </a>
                ) : (
                  <div className="mt-2 text-2xl font-display font-black text-deep">{c.value}</div>
                )}
              </div>
            ))}
            <p className="text-deep/60 text-sm font-ar">
              بياناتك بتوصل لطِيب مباشرة — بدون قوائم بريد ولا إزعاج.
            </p>
          </div>

          <form
            className={`lg:col-span-3 bg-deep text-cream rounded-3xl p-8 md:p-10 shadow-pop-pink ${
              shake ? "animate-[float_0.4s_ease-in-out]" : ""
            }`}
            onSubmit={(e) => {
              e.preventDefault();
              if (!kind) {
                setShake(true);
                setTimeout(() => setShake(false), 450);
                return;
              }
              setSending(true);
              setTimeout(() => {
                setSending(false);
                setSent(true);
              }, 1100);
            }}
          >
            {sent ? (
              <div className="relative text-center py-16 animate-scale-in overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                  {Array.from({ length: 26 }).map((_, i) => (
                    <span
                      key={i}
                      className="absolute top-0 block h-2.5 w-2.5 rounded-sm"
                      style={{
                        left: `${(i * 3.8) % 100}%`,
                        background: i % 3 === 0 ? "var(--pink)" : i % 3 === 1 ? "var(--mint)" : "var(--pink-soft)",
                        animation: `confetti-fall ${1.6 + (i % 5) * 0.35}s ease-in ${(i % 7) * 0.12}s forwards`,
                      }}
                    />
                  ))}
                </div>
                <div className="text-7xl">✦</div>
                <h3 className="mt-6 text-3xl font-arabic-display font-black text-pink">
                  وصلنا طلبك!
                </h3>
                <p className="mt-3 text-cream/80 font-ar">
                  رح نتواصل معك خلال 24 ساعة. شكراً لثقتك بـ الفياء.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {/* عدّاد الخطوات */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold uppercase tracking-widest text-pink-soft">
                    {steps} / 3 خطوات
                  </span>
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-10 rounded-full transition-all duration-500 ${
                          steps > i ? "bg-pink" : "bg-cream/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* نوع البزنس — ستيكرز */}
                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-widest text-pink-soft mb-2">
                    شو نوع البزنس؟
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {kinds.map((k) => (
                      <button
                        key={k}
                        type="button"
                        onClick={() => setKind(k)}
                        className={`px-4 py-2 rounded-full font-ar text-sm transition-all duration-200 ${
                          kind === k
                            ? "bg-pink text-cream shadow-pop -rotate-3 scale-105"
                            : "bg-cream/10 text-cream/80 hover:bg-cream/20"
                        }`}
                      >
                        {k}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="الاسم · Name" name="name" hint="الاسم اللي منناديك فيه" />
                  <Field
                    label="الإيميل · Email"
                    name="email"
                    type="email"
                    hint={emailBad ? "الإيميل ناقص @" : "منرد على هاد الإيميل"}
                    error={emailBad}
                    value={email}
                    onChange={setEmail}
                  />
                </div>
                <Field label="البزنس · Brand" name="brand" hint="اسم الصفحة أو لينكها" />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-display font-bold uppercase tracking-widest text-pink-soft">
                      شو اللي بدك تشتغل عليه؟
                    </label>
                    <span className="text-[11px] text-cream/40 font-display">{msg.length}/400</span>
                  </div>
                  <textarea
                    required
                    rows={5}
                    maxLength={400}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full bg-cream/10 border-2 border-cream/20 rounded-2xl px-4 py-3 text-cream placeholder-cream/40 focus:border-pink focus:outline-none font-ar transition-colors"
                    placeholder="احكي عن صفحتك، أهدافك، أو شي بدك تجرّبه…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-pink text-cream py-4 rounded-full font-display font-black text-xl shadow-pop hover:-translate-y-1 transition-transform disabled:opacity-80 disabled:translate-y-0"
                >
                  {sending ? "عم نبعت…" : "ابعث الرسالة ↗"}
                </button>
                <p className="text-center text-xs text-cream/50 font-ar">
                  منرد عادة خلال ٢٤ ساعة · بتفضّل واتساب؟ اكتبها بالرسالة
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  hint,
  error,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  hint?: string;
  error?: boolean;
  value?: string;
  onChange?: (v: string) => void;
}) {
  const [focus, setFocus] = useState(false);
  return (
    <div>
      <label className="block text-xs font-display font-bold uppercase tracking-widest text-pink-soft mb-2">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`w-full bg-cream/10 border-2 rounded-2xl px-4 py-3 text-cream placeholder-cream/40 focus:outline-none transition-colors ${
          error ? "border-pink" : "border-cream/20 focus:border-pink"
        }`}
      />
      {hint && (
        <p
          className={`mt-1.5 text-[11px] font-ar transition-all duration-300 ${
            error
              ? "text-pink opacity-100"
              : focus
                ? "text-cream/60 opacity-100"
                : "opacity-0 h-0"
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
}
