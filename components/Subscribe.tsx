"use client";

import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Dziękujemy! Wyślemy potwierdzenie na: ${email}`);
    setEmail("");
  };

  return (
    <section
      id="subskrypcja"
      className="bg-[var(--gold)] px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20 text-center"
    >
      <div className="max-w-[600px] mx-auto">
        <h2
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 5vw, 40px)",
            letterSpacing: "-1px",
            color: "var(--green-dark)",
            marginBottom: 16,
            lineHeight: 1.1,
          }}
        >
          Zacznij karmić lepiej — już dziś.
        </h2>
        <p
          className="mb-8 md:mb-9"
          style={{ fontSize: 16, color: "rgba(29,61,47,0.6)", lineHeight: 1.6 }}
        >
          Pierwsza dostawa –20% z kodem NUTRI20. Bez umów, bez ukrytych kosztów.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 sm:gap-2.5 max-w-[420px] mx-auto w-full"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Twój adres e-mail"
            style={{
              flex: 1,
              padding: "12px 20px",
              borderRadius: 100,
              border: "none",
              fontSize: 14,
              fontFamily: "'Inter', sans-serif",
              background: "rgba(29,61,47,0.1)",
              color: "var(--green-dark)",
              outline: "none",
              width: "100%",
            }}
          />
          <button
            type="submit"
            style={{
              background: "var(--green-dark)",
              color: "var(--cream)",
              border: "none",
              padding: "12px 24px",
              borderRadius: 100,
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            className="w-full sm:w-auto"
          >
            Zacznij →
          </button>
        </form>

        <p style={{ marginTop: 16, fontSize: 12, color: "rgba(29,61,47,0.4)", lineHeight: 1.5 }} className="px-2">
          Możesz anulować w każdej chwili · Dostawa chłodzona · Polska produkcja
        </p>
      </div>
    </section>
  );
}
