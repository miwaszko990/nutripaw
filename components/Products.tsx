import { HeartPulse, Sparkles, Sprout, type LucideIcon } from "lucide-react";
import styles from "./Products.module.css";

type Chip = string | { label: string; variant: "solid" | "ghost" };

type ProductLine = {
  id: string;
  variant: "glow" | "vital" | "gut";
  Icon: LucideIcon;
  name: string;
  goal: string;
  benefit: string;
  chips: Chip[];
  recipes: string[];
};

const lines: ProductLine[] = [
  {
    id: "glow",
    variant: "glow",
    Icon: Sparkles,
    name: "GLOW",
    goal: "Skóra · Sierść · Mikrobiom",
    benefit: "Lśniąca sierść, zdrowa skóra.",
    chips: ["Spirulina", "Olej sardynkowy", "EPA/DHA"],
    recipes: ["Wołowina z olejem sardynkowym", "Indyk ze spiruliną i batatem"],
  },
  {
    id: "vital",
    variant: "vital",
    Icon: HeartPulse,
    name: "VITAL",
    goal: "Długowieczność · Stawy · Energia",
    benefit: "Mocne stawy, więcej energii.",
    chips: [
      { label: "Małże zielone", variant: "solid" },
      { label: "Glukozamina", variant: "ghost" },
      { label: "Kurkuma", variant: "ghost" },
    ],
    recipes: ["Kurczak z małżami i marchewką", "Łosoś z batatem i algami"],
  },
  {
    id: "gut",
    variant: "gut",
    Icon: Sprout,
    name: "GUT",
    goal: "Mikrobiom · Trawienie · Jelita",
    benefit: "Spokojny brzuch, mocny mikrobiom.",
    chips: ["Dynia", "Proso", "Prebiotyki"],
    recipes: ["Kurczak z dynią i prosem", "Indyk z cukinią i marchewką"],
  },
];

function chipClassName(variant: ProductLine["variant"], chip: Chip) {
  if (typeof chip === "string") return styles.chip;
  if (variant === "vital") {
    return chip.variant === "solid" ? styles.chipSolid : styles.chipGhost;
  }
  return styles.chip;
}

function chipLabel(chip: Chip) {
  return typeof chip === "string" ? chip : chip.label;
}

export default function Products() {
  return (
    <section className={styles.wrapper} id="produkty">
      <div className={styles.eyebrow}>Linie produktowe</div>
      <h2 className={styles.heading}>Trzy linie. Jeden cel — zdrowy pies.</h2>

      <div className={styles.grid}>
          {lines.map((line) => {
            const cardClass =
              line.variant === "glow" ? styles.glow : line.variant === "vital" ? styles.vital : styles.gut;

            return (
              <article key={line.id} className={`${styles.card} ${cardClass}`}>
                <line.Icon className={styles.watermark} strokeWidth={1.5} aria-hidden="true" />
                <span className={styles.badge}>
                  <line.Icon size={26} strokeWidth={2} aria-hidden="true" />
                </span>
                <div className={styles.name}>{line.name}</div>
                <div className={styles.goal}>{line.goal}</div>
                <p className={styles.benefit}>{line.benefit}</p>
                <div className={styles.chips}>
                  {line.chips.map((chip) => (
                    <span key={chipLabel(chip)} className={chipClassName(line.variant, chip)}>
                      {chipLabel(chip)}
                    </span>
                  ))}
                </div>
                <div className={styles.divider} />
                <div className={styles.recipes}>
                  {line.recipes.map((recipe) => (
                    <div key={recipe} className={styles.recipe}>
                      <span className={styles.dot} />
                      <span>{recipe}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
    </section>
  );
}
