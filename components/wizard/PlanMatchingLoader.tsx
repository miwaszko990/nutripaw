import Image from "next/image";
import styles from "./PlanMatchingLoader.module.css";

export default function PlanMatchingLoader() {
  return (
    <div className={styles.screen} role="status" aria-live="polite" aria-busy="true">
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Dopasowywanie planu
          <br />
          do indywidualnych potrzeb
          <span className={styles.dots} aria-hidden="true">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </h1>

        <figure className={styles.bowlFigure}>
          <div className={styles.bowl}>
            <Image
              src="/beef.jpg"
              alt=""
              fill
              sizes="180px"
              className={styles.bowlPhoto}
              priority
            />
          </div>
          <figcaption className={styles.bowlCaption}>
            <strong>NutriPaw</strong>
            <span>Świeże składniki, które widać gołym okiem</span>
          </figcaption>
        </figure>

        <p className={styles.srOnly}>Ładowanie ankiety…</p>
      </div>
    </div>
  );
}
