"use client";

const pillars = [
  {
    icon: "ti-flask",
    title: "Receptury zgodne z FEDIAF 2025",
    text: "Pełnoporcjowa karma spełniająca europejskie normy żywieniowe — bez suplementów ani domieszek.",
  },
  {
    icon: "ti-leaf",
    title: "Superfoods wbudowane w recepturę",
    text: "Spirulina, małże nowozelandzkie, oleje zimnotłoczone — nie jako dodatki, ale jako składniki bazowe.",
  },
  {
    icon: "ti-rotate",
    title: "Rotacja smaków w subskrypcji",
    text: "Różnorodność białek chroni przed alergiami i monotonią. Plan rotacji dobieramy razem z Tobą.",
  },
];

const reviews = [
  {
    quote: "`Maks przestał się drapać po 3 tygodniach na GLOW. Pierwsza karma, która naprawdę pomogła.`",
    author: "Agnieszka, golden retriever 4 lata",
  },
  {
    quote: "`GUT zrobiło różnicę od razu — busia jest regularna, a stolec wreszcie normalny.`",
    author: "Kasia, mieszaniec 6 lat",
  },
  {
    quote: "`VITAL dla mojej starszej labradorki — więcej energii i lepsza mobilność po 4 tygodniach.`",
    author: "Tomek, labrador 9 lat",
  },
];

export default function WhyNutriPaw() {
  return (
    <section id="dlaczego" className="bg-[var(--green-dark)] px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 12,
            }}
          >
            Dlaczego NutriPaw
          </div>
          <h2
            className="text-[clamp(28px,5vw,36px)] mb-8"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "var(--cream)",
              lineHeight: 1.15,
            }}
          >
            Nie karma. Jedzenie z prawdziwych składników.
          </h2>
          <div className="flex flex-col gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-4 items-start">
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: "rgba(245,240,232,0.08)",
                    borderRadius: 8,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold)",
                    fontSize: 18,
                  }}
                >
                  <i className={`ti ${p.icon}`} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 600,
                      fontSize: 15,
                      color: "var(--cream)",
                      marginBottom: 4,
                    }}
                  >
                    {p.title}
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(245,240,232,0.45)", lineHeight: 1.6 }}>{p.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {reviews.map((r) => (
            <div
              key={r.author}
              style={{
                background: "rgba(245,240,232,0.06)",
                border: "1px solid rgba(245,240,232,0.1)",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <div style={{ color: "var(--gold)", fontSize: 14, letterSpacing: 2, marginBottom: 10 }}>★★★★★</div>
              <div
                style={{
                  fontSize: 14,
                  color: "rgba(245,240,232,0.72)",
                  lineHeight: 1.6,
                  marginBottom: 14,
                  fontStyle: "italic",
                }}
              >
                {r.quote}
              </div>
              <div style={{ fontSize: 12, color: "rgba(245,240,232,0.35)", fontWeight: 500 }}>{r.author}</div>
            </div>
          ))}

          <div
            className="sm:col-span-2 lg:col-span-1"
            style={{
              background: "rgba(245,240,232,0.06)",
              border: "1px solid rgba(245,240,232,0.1)",
              borderRadius: 16,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              minHeight: 160,
            }}
          >
            <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 44, fontWeight: 700, color: "var(--gold)" }}>
              4.9
            </div>
            <div style={{ fontSize: 14, color: "rgba(245,240,232,0.35)", marginTop: 4 }}>średnia ocena</div>
            <div style={{ color: "var(--gold)", letterSpacing: 3, marginTop: 6, fontSize: 16 }}>★★★★★</div>
            <div style={{ fontSize: 12, color: "rgba(245,240,232,0.22)", marginTop: 8 }}>na podstawie 312 opinii</div>
          </div>
        </div>
      </div>
    </section>
  );
}
