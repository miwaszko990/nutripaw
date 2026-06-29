import StartSubscriptionButton from "./StartSubscriptionButton";
import styles from "./Subscribe.module.css";

export default function Subscribe() {
  return (
    <section id="kontakt-subskrypcja" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Zacznij karmić lepiej — już dziś.</h2>
        <p className={styles.lead}>
          Pierwsza dostawa –20% z kodem NUTRI20. Bez umów, bez ukrytych kosztów.
        </p>

        <StartSubscriptionButton className={styles.button}>Zacznij subskrypcję →</StartSubscriptionButton>

        <p className={styles.note}>
          Możesz anulować w każdej chwili · Dostawa chłodzona · Polska produkcja
        </p>
      </div>
    </section>
  );
}
