import Image from "next/image";
import { ClipboardList, Package, PawPrint, Sparkles } from "lucide-react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    num: "01",
    Icon: ClipboardList,
    title: "Powiedz nam o psie",
    text: "Rasa, wiek, waga, aktywność, problemy zdrowotne. Ankieta zajmuje 2 minuty i jest podstawą doboru linii.",
  },
  {
    num: "02",
    Icon: Sparkles,
    title: "Dobieramy plan",
    text: "Nasz algorytm wskazuje linię produktową i smaki dopasowane do potrzeb zdrowotnych Twojego psa.",
  },
  {
    num: "03",
    Icon: Package,
    title: "Dostarczamy co miesiąc",
    text: "Świeże, chłodzone saszetki pod drzwi. Możesz pauzować, zmieniać smaki lub anulować w każdej chwili.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="jak-to-dziala">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <div className={styles.eyebrow}>Jak to działa</div>
            <h2 className={styles.title}>Od ankiety do miski — w 3 krokach.</h2>
            <p className={styles.lead}>
              Dobór planu zajmuje dosłownie chwilę. Resztą zajmujemy się my — Twój pies dostaje dokładnie to,
              czego potrzebuje, prosto pod drzwi.
            </p>
          </div>

          <div className={styles.media}>
            <span className={`${styles.blob} ${styles.blobSage}`} aria-hidden="true" />
            <span className={`${styles.blob} ${styles.blobGold}`} aria-hidden="true" />
            <div className={styles.photo}>
              <Image
                className={styles.photoImg}
                src="/golden-running.png"
                alt="Golden retriever biegnący po słonecznej łące"
                fill
                sizes="(max-width: 880px) 100vw, 520px"
              />
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>
                  <PawPrint size={15} strokeWidth={2} aria-hidden="true" />
                </span>
                <span className={styles.badgeText}>Prosto do pełnej miski</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepIcon}>
                <step.Icon size={24} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
