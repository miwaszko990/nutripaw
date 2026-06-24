"use client";

const pouches = [
  { id: "glow", bg: "#2A5240", height: 170, badge: "Skóra", name: "GLOW", sub: "Wołowina + spirulina" },
  { id: "vital", bg: "#1D3D2F", height: 195, badge: "Długowieczność", name: "VITAL", sub: "Kurczak + małże" },
  { id: "gut", bg: "#3D6B52", height: 160, badge: "Jelita", name: "GUT", sub: "Kurczak + dynia" },
];

export default function Hero() {
  return (
    <div style={{ background: "var(--cream)", padding: "80px 48px 0" }}>
      <div
        style={{ maxWidth: 1100, margin: "0 auto" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end min-h-[520px]"
      >
        {/* LEFT */}
        <div className="pb-20 md:pb-20">
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
              fontSize: "clamp(36px, 5vw, 52px)",
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
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: "rgba(29,61,47,0.65)",
              marginBottom: 36,
              maxWidth: 420,
            }}
          >
            Gotowane z ludzkich składników, skomponowane przez dietetyków.
            Dostarczamy do drzwi — co miesiąc, zgodnie z potrzebami Twojego psa.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
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

          <div className="flex items-center gap-3 mt-10">
            <div className="flex">
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
            <span style={{ fontSize: 13, color: "rgba(29,61,47,0.5)" }}>
              Dołącz do <strong>2 000+</strong> opiekunów, którzy już karmią zdrowiej
            </span>
          </div>
        </div>

        {/* RIGHT — pouches */}
        <div className="flex flex-col items-center justify-end">
          <div className="flex gap-3 items-end">
            {pouches.map((p) => (
              <div
                key={p.id}
                style={{
                  width: 100,
                  height: p.height,
                  background: p.bg,
                  borderRadius: 16,
                  padding: "16px 12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "transform 0.25s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
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
                    fontSize: 18,
                    color: "var(--cream)",
                    letterSpacing: 1,
                  }}
                >
                  {p.name}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    color: "rgba(245,240,232,0.55)",
                    textAlign: "center",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {p.sub}
                </span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 14, fontSize: 12, color: "rgba(29,61,47,0.3)", letterSpacing: "0.4px" }}>
            Saszetka 400g · FEDIAF 2025 · bez zbóż glutenowych
          </p>
        </div>
      </div>
    </div>
  );
}
