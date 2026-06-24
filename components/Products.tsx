"use client";
const lines = [
  {
    id: "glow",
    bg: "#2A5240",
    name: "GLOW",
    tagline: "Skóra · sierść · mikrobiom",
    tags: ["Spirulina", "Olej sardynkowy", "EPA/DHA"],
    flavors: ["Wołowina z olejem sardynkowym", "Indyk ze spiruliną i batatem"],
  },
  {
    id: "vital",
    bg: "#1D3D2F",
    name: "VITAL",
    tagline: "Długowieczność · stawy · energia",
    tags: ["Małże zielone", "Glukozamina", "Kurkuma"],
    flavors: ["Kurczak z małżami i marchewką", "Łosoś z batatem i algami"],
  },
  {
    id: "gut",
    bg: "#3D6B52",
    name: "GUT",
    tagline: "Mikrobiom · trawienie · jelita",
    tags: ["Dynia", "Proso", "Prebiotyki"],
    flavors: ["Kurczak z dynią i prosem", "Indyk z cukinią i marchewką"],
  },
];

export default function Products() {
  return (
    <section id="produkty" style={{ padding: "0 48px 80px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>
        Linie produktowe
      </div>
      <h2
        style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          fontSize: 36,
          letterSpacing: "-1px",
          color: "var(--green-dark)",
          marginBottom: 48,
          maxWidth: 500,
          lineHeight: 1.15,
        }}
      >
        Trzy linie. Jeden cel — zdrowy pies.
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="grid-cols-1 md:grid-cols-3">
        {lines.map((line) => (
          <div
            key={line.id}
            style={{ borderRadius: 20, overflow: "hidden", cursor: "pointer", transition: "transform 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            {/* top */}
            <div
              style={{
                background: line.bg,
                padding: "32px 24px 24px",
                minHeight: 220,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 32, color: "var(--cream)", letterSpacing: 1 }}>
                  {line.name}
                </div>
                <div style={{ fontSize: 12, color: "rgba(245,240,232,0.5)", marginTop: 4, textTransform: "uppercase", letterSpacing: 1, fontWeight: 500 }}>
                  {line.tagline}
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 20 }}>
                {line.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(245,240,232,0.12)",
                      color: "rgba(245,240,232,0.8)",
                      fontSize: 11,
                      padding: "4px 10px",
                      borderRadius: 100,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* bottom */}
            <div style={{ background: "#fff", padding: "20px 24px" }}>
              {line.flavors.map((flavor, i) => (
                <div key={flavor}>
                  {i > 0 && <div style={{ height: 1, background: "rgba(29,61,47,0.07)", margin: "6px 0" }} />}
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "var(--green-dark)", fontWeight: 500 }}>{flavor}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
