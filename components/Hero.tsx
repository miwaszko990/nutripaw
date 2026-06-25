"use client";

const pouches = [
  {
    id: "glow",
    bg: "#2A5240",
    heightClass: "h-[140px] md:h-[170px]",
    badge: "Skóra",
    name: "GLOW",
    sub: "Wołowina + spirulina",
  },
  {
    id: "vital",
    bg: "#1D3D2F",
    heightClass: "h-[160px] md:h-[195px]",
    badge: "Długowieczność",
    name: "VITAL",
    sub: "Kurczak + małże",
  },
  {
    id: "gut",
    bg: "#3D6B52",
    heightClass: "h-[130px] md:h-[160px]",
    badge: "Jelita",
    name: "GUT",
    sub: "Kurczak + dynia",
  },
];

export default function Hero() {
  return (
    <div className="bg-[var(--cream)] px-5 pt-12 pb-0 sm:px-8 md:px-12 md:pt-20 lg:px-12">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end md:min-h-[520px]">
        <div className="pb-8 md:pb-20">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(29,61,47,0.08)",
              borderRadius: 100,
              padding: "6px 14px",
              fontSize: 12,
              fontWeight: 500,
              color: "var(--green-dark)",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: "var(--gold)",
                borderRadius: "50%",
                flexShrink: 0,
              }}
            />
            Karma gotowana · Pełnoporcjowa · Celowana
          </div>

          <h1
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 6vw, 52px)",
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              color: "var(--green-dark)",
              marginBottom: 20,
            }}
          >
            Jedzenie, które{" "}
            <em style={{ fontStyle: "normal", color: "var(--gold)" }}>naprawdę</em>{" "}
            działa na Twojego psa.
          </h1>

          <p
            className="max-w-[420px]"
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: "rgba(29,61,47,0.65)",
              marginBottom: 36,
            }}
          >
            Gotowane z ludzkich składników, skomponowane przez dietetyków.
            Dostarczamy do drzwi — co miesiąc, zgodnie z potrzebami Twojego psa.
          </p>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <a
              href="#subskrypcja"
              style={{
                background: "var(--green-dark)",
                color: "var(--cream)",
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                borderRadius: 100,
                padding: "10px 22px",
                textDecoration: "none",
              }}
              className="hover:opacity-80 transition-opacity"
            >
              Dopasuj plan →
            </a>
            <a
              href="#produkty"
              style={{
                background: "transparent",
                color: "var(--green-dark)",
                border: "1.5px solid rgba(29,61,47,0.3)",
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                borderRadius: 100,
                padding: "10px 22px",
                textDecoration: "none",
              }}
              className="hover:border-[#1D3D2F] transition-colors"
            >
              Poznaj składniki
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-8 sm:mt-10">
            <div className="flex shrink-0">
              {["A", "M", "K", "J"].map((letter, i) => (
                <div
                  key={letter}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: "2px solid var(--cream)",
                    marginRight: -8,
                    background: ["#2A5240", "#3D6B52", "#1D3D2F", "#C8A96E"][i],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--cream)",
                    zIndex: 4 - i,
                    position: "relative",
                  }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <span style={{ fontSize: 13, color: "rgba(29,61,47,0.5)", lineHeight: 1.5 }}>
              Dołącz do <strong>2 000+</strong> opiekunów, którzy już karmią zdrowiej
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-end pb-8 md:pb-0">
          <div className="flex gap-2 sm:gap-3 items-end">
            {pouches.map((p) => (
              <div
                key={p.id}
                style={{ background: p.bg }}
                className={`w-[76px] sm:w-[88px] md:w-[100px] rounded-2xl px-3 py-4 sm:px-3 sm:py-4 flex flex-col items-center justify-between cursor-pointer transition-transform duration-250 ease-in-out hover:-translate-y-2 ${p.heightClass}`}
              >
                <span
                  style={{
                    background: "var(--gold)",
                    color: "var(--green-dark)",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    padding: "3px 8px",
                    borderRadius: 100,
                    textTransform: "uppercase",
                  }}
                >
                  {p.badge}
                </span>
                <div style={{ width: 40, height: 1, background: "rgba(245,240,232,0.15)" }} />
                <span
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "var(--cream)",
                    letterSpacing: 1,
                  }}
                  className="sm:text-lg"
                >
                  {p.name}
                </span>
                <span
                  style={{
                    fontSize: 9,
                    color: "rgba(245,240,232,0.55)",
                    textAlign: "center",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                  className="sm:text-[10px]"
                >
                  {p.sub}
                </span>
              </div>
            ))}
          </div>
          <p
            className="text-center px-2"
            style={{ marginTop: 14, fontSize: 12, color: "rgba(29,61,47,0.3)", letterSpacing: "0.4px" }}
          >
            Saszetka 400g · FEDIAF 2025 · bez zbóż glutenowych
          </p>
        </div>
      </div>
    </div>
  );
}
