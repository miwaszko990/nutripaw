"use client";

import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: podłącz do swojego backendu / Mailchimp / Klaviyo
    alert(`Dziękujemy! Wyślemy potwierdzenie na: ${email}`);
    setEmail("");
  };

  return (
    <section id="subskrypcja" style={{ background: "var(--gold)", padding: "80px 48px", textAlign: "center" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 40px)",
            letterSpacing: "-1px",
            color: "var(--green-dark)",
            marginBottom: 16,
            lineHeight: 1.1,
          }}
        >
          Zacznij karmić lepiej — już dziś.
        </h2>
        <p style={{ fontSize: 16, color: "rgba(29,61,47,0.6)", marginBottom: 36, lineHeight: 1.6 }}>
          Pierwsza dostawa –20% z kodem NUTRI20. Bez umów, bez ukrytych kosztów.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10, maxWidth: 420, margin: "0 auto" }}>
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
          >
            Zacznij →
          </button>
        </form>

        <p style={{ marginTop: 16, fontSize: 12, color: "rgba(29,61,47,0.4)" }}>
          Możesz anulować w każdej chwili · Dostawa chłodzona · Polska produkcja
        </p>
      </div>
    </section>
  );
}
