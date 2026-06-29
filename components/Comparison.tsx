import Image from "next/image";
import {
  Beef,
  Check,
  CookingPot,
  Flame,
  Leaf,
  Minus,
  Package,
  ScrollText,
  SlidersHorizontal,
  Soup,
  Utensils,
  WheatOff,
  X,
  type LucideIcon,
} from "lucide-react";
import styles from "./Comparison.module.css";

type Mark = "yes" | "no" | "half";

type CompareRow = {
  id: string;
  Icon: LucideIcon;
  label: string;
  otherCatering: Mark;
  dryWet: Mark;
};

const rows: CompareRow[] = [
  {
    id: "human-grade",
    Icon: Beef,
    label: "Jakość składników human-grade",
    otherCatering: "yes",
    dryWet: "no",
  },
  {
    id: "grain-free",
    Icon: WheatOff,
    label: "Brak zbóż i wypełniaczy",
    otherCatering: "yes",
    dryWet: "no",
  },
  {
    id: "personalization",
    Icon: SlidersHorizontal,
    label: "Personalizacja diety",
    otherCatering: "yes",
    dryWet: "no",
  },
  {
    id: "preservatives",
    Icon: Leaf,
    label: "Brak konserwantów",
    otherCatering: "yes",
    dryWet: "half",
  },
  {
    id: "calories",
    Icon: Flame,
    label: "Transparentna wartość kaloryczna",
    otherCatering: "half",
    dryWet: "half",
  },
  {
    id: "ingredients",
    Icon: ScrollText,
    label: "Czytelność składów",
    otherCatering: "half",
    dryWet: "no",
  },
  {
    id: "cooked",
    Icon: CookingPot,
    label: "Gotowane przed pakowaniem",
    otherCatering: "no",
    dryWet: "no",
  },
  {
    id: "portions",
    Icon: Utensils,
    label: "Gotowe, odważone porcje",
    otherCatering: "no",
    dryWet: "no",
  },
];

function MarkDot({ variant }: { variant: Mark | "np" }) {
  const dotClass =
    variant === "np"
      ? styles.dotNp
      : variant === "yes"
        ? styles.dotYes
        : variant === "no"
          ? styles.dotNo
          : styles.dotHalf;

  const Icon = variant === "no" ? X : variant === "half" ? Minus : Check;
  const size = variant === "np" ? 15 : 14;

  return (
    <span className={`${styles.dot} ${dotClass}`}>
      <Icon className={styles.dotIcon} size={size} strokeWidth={2.5} aria-hidden="true" />
    </span>
  );
}

export default function Comparison() {
  return (
    <section className={styles.section}>
      <div className={`${styles.blob} ${styles.blobA}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blobB}`} aria-hidden="true" />

      <div className={styles.intro}>
        <div className={styles.eyebrow}>Dlaczego NutriPaw</div>
        <h2 className={styles.title}>NutriPaw vs tradycyjna karma</h2>
        <p className={styles.lead}>
          Twój pies zasługuje na to, co najlepsze. Dlatego gotujemy wyłącznie ze składników human-grade i
          dbamy, by do miski trafiało tylko to, czego naprawdę potrzebuje. Wysoka zawartość mięsa, proste
          składy, żadnych konserwantów, przypraw ani wypełniaczy — delikatnie ugotowane i porcjowane pod
          Twojego psa.
        </p>
        <a href="/ankieta" className={styles.cta}>
          Dopasuj plan dla psa →
        </a>
      </div>

      <div className={styles.tableWrap}>
        <div className={styles.table}>
          <div className={styles.headerGrid}>
            <div className={styles.hCell} />
            <div className={`${styles.hCell} ${styles.hCellNp}`}>
              <Image
                className={`${styles.hTile} ${styles.hTileNp}`}
                src="/NutriPaw-Logo-Icon-Forest.svg"
                alt="NutriPaw"
                width={40}
                height={40}
              />
              <span className={`${styles.hLbl} ${styles.hLblNp}`}>NutriPaw</span>
            </div>
            <div className={styles.hCell}>
              <span className={`${styles.hTile} ${styles.hTileComp}`}>
                <Soup size={20} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className={`${styles.hLbl} ${styles.hLblComp}`}>
                <span className={styles.hLblFull}>Inne cateringi dla psów</span>
                <span className={styles.hLblShort}>Cateringi</span>
              </span>
            </div>
            <div className={styles.hCell}>
              <span className={`${styles.hTile} ${styles.hTileComp}`}>
                <Package size={20} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className={`${styles.hLbl} ${styles.hLblComp}`}>
                <span className={styles.hLblFull}>Karmy suche i mokre</span>
                <span className={styles.hLblShort}>Suche/mokre</span>
              </span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.bodyGrid}>
              {rows.map((row, index) => (
                <div key={row.id} className={styles.row} style={{ display: "contents" }}>
                  <div className={`${styles.feat} ${index === rows.length - 1 ? styles.rowLast : ""}`}>
                    <span className={styles.featIc}>
                      <row.Icon size={16} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className={styles.featTxt}>{row.label}</span>
                  </div>
                  <div
                    className={`${styles.mark} ${styles.markNp} ${index === rows.length - 1 ? styles.rowLast : ""}`}
                  >
                    <MarkDot variant="np" />
                  </div>
                  <div className={`${styles.mark} ${index === rows.length - 1 ? styles.rowLast : ""}`}>
                    <MarkDot variant={row.otherCatering} />
                  </div>
                  <div className={`${styles.mark} ${index === rows.length - 1 ? styles.rowLast : ""}`}>
                    <MarkDot variant={row.dryWet} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className={styles.note}>Porównanie na podstawie ogólnie dostępnych składów · czerwiec 2026</p>
    </section>
  );
}
