"use client";

const steps = [
  {
    num: "01",
    icon: "ti-clipboard-list",
    title: "Powiedz nam o psie",
    text: "Rasa, wiek, waga, aktywność, problemy zdrowotne. Ankieta zajmuje 2 minuty i jest podstawą doboru linii.",
  },
  {
    num: "02",
    icon: "ti-sparkles",
    title: "Dobieramy plan",
    text: "Nasz algorytm wskazuje linię produktową i smaki dopasowane do potrzeb zdrowotnych Twojego psa.",
  },
  {
    num: "03",
    icon: "ti-package",
    title: "Dostarczamy co miesiąc",
    text: "Świeże, chłodzone saszetki pod drzwi. Możesz pauzować, zmieniać smaki lub anulować w każdej chwili.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="jak-to-dziala"
      style={{ padding: "80px 48px", maxWidth: 1100, margin: "0 auto" }}
      className="max-md:!px-5 max-md:!py-14"
    >
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
        Jak to działa
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
        className="max-md:text-[clamp(28px,5vw,36px)] max-md:mb-10"
      >
        Od ankiety do miski — w 3 krokach.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[rgba(29,61,47,0.08)] rounded-[20px] overflow-hidden">
        {steps.map((step) => (
          <div key={step.num} className="bg-[var(--cream)] px-6 py-8 sm:px-7 sm:py-9">
            <div
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: 48,
                fontWeight: 700,
                color: "rgba(29,61,47,0.07)",
                lineHeight: 1,
                marginBottom: 16,
              }}
            >
              {step.num}
            </div>
            <div
              style={{
                width: 40,
                height: 40,
                background: "var(--green-dark)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
                color: "var(--cream)",
                fontSize: 20,
              }}
            >
              <i className={`ti ${step.icon}`} />
            </div>
            <h3
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600,
                fontSize: 17,
                marginBottom: 10,
                color: "var(--green-dark)",
              }}
            >
              {step.title}
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(29,61,47,0.6)" }}>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
