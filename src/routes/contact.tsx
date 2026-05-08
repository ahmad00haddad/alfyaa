import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل · Contact — ALFYAA®" },
      {
        name: "description",
        content: "احكِ معنا — نبني سوا صفحتك من الألف إلى الياء. Dubai, UAE.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

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
              <div key={c.label} className="bg-mint/40 rounded-2xl p-6 shadow-pop -rotate-1">
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
          </div>

          <form
            className="lg:col-span-3 bg-deep text-cream rounded-3xl p-8 md:p-10 shadow-pop-pink"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div className="text-center py-16">
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
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="الاسم · Name" name="name" />
                  <Field label="الإيميل · Email" name="email" type="email" />
                </div>
                <Field label="البزنس · Brand" name="brand" />
                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-widest text-pink-soft mb-2">
                    شو اللي بدك تشتغل عليه؟
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-cream/10 border-2 border-cream/20 rounded-2xl px-4 py-3 text-cream placeholder-cream/40 focus:border-pink focus:outline-none font-ar"
                    placeholder="احكي عن صفحتك، أهدافك، أو شي بدك تجرّبه…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink text-cream py-4 rounded-full font-display font-black text-xl shadow-pop hover:-translate-y-1 transition-transform"
                >
                  ابعث الرسالة ↗
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-display font-bold uppercase tracking-widest text-pink-soft mb-2">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        className="w-full bg-cream/10 border-2 border-cream/20 rounded-2xl px-4 py-3 text-cream placeholder-cream/40 focus:border-pink focus:outline-none"
      />
    </div>
  );
}
