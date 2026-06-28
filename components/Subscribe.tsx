"use client";

import { useState } from "react";
import styles from "./Subscribe.module.css";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Dziękujemy! Wyślemy potwierdzenie na: ${email}`);
    setEmail("");
  };

  return (
    <section id="subskrypcja" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Zacznij karmić lepiej — już dziś.</h2>
        <p className={styles.lead}>
          Pierwsza dostawa –20% z kodem NUTRI20. Bez umów, bez ukrytych kosztów.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Twój adres e-mail"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Zacznij →
          </button>
        </form>

        <p className={styles.note}>
          Możesz anulować w każdej chwili · Dostawa chłodzona · Polska produkcja
        </p>
      </div>
    </section>
  );
}
