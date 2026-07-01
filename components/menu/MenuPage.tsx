import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { MENU_PRODUCTS } from "@/lib/menu/products";
import styles from "./Menu.module.css";

export default function MenuPage() {
  return (
    <section className={styles.sec}>
      <div className={styles.head}>
        <h1 className={styles.title}>Nasze menu</h1>
        <p className={styles.sub}>
          Każdy pies — sportowiec, senior czy ten z wrażliwym brzuszkiem — znajdzie u nas swoją recepturę.
          Gotowana karma pełnoporcjowa, naturalnie suplementowana pod konkretny cel.
        </p>
      </div>

      <div className={styles.row}>
        {MENU_PRODUCTS.map((product) => (
          <article
            key={product.id}
            className={styles.card}
            style={{ "--acc": product.accent } as CSSProperties}
          >
            <Link href={`/nasze-menu/${product.slug}`} className={styles.cardLink}>
              <div className={styles.tile}>
                <Image
                  src={product.pouchSrc}
                  alt={`NutriPaw ${product.name}`}
                  width={400}
                  height={400}
                  className={`${styles.pouch} ${
                    product.pouchClass === "vital"
                      ? styles.pouchVital
                      : product.pouchClass === "gut"
                        ? styles.pouchGut
                        : ""
                  }`}
                  priority={product.id === "glow"}
                />
                <div className={styles.plabel}>
                  <div className={styles.plBrand}>
                    <Image src="/NutriPaw-Icon-Color.svg" alt="" width={18} height={18} />
                    <span>nutripaw</span>
                  </div>
                  <div className={styles.plGoal}>{product.goal}</div>
                  <div className={styles.plName}>{product.name}</div>
                  <div className={styles.plFlavor}>{product.flavor}</div>
                  <div className={styles.plFoot}>
                    <span className={styles.plWt}>{product.weight}</span>
                    <span className={styles.plPill}>Bez nasties</span>
                  </div>
                </div>
                <div className={styles.badge}>
                  <product.Icon size={26} strokeWidth={2} aria-hidden="true" />
                </div>
              </div>

              <div className={styles.meta}>
                <div className={styles.eyebrow}>{product.eyebrow}</div>
                <div className={styles.name}>{product.name}</div>
                <p className={styles.desc}>
                  <b>{product.descriptionBold}</b> {product.description}
                </p>
              </div>

              <span className={styles.cta}>Zobacz pełen skład</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
