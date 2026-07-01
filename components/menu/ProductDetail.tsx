"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Sprout,
  Stethoscope,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import StartSubscriptionButton from "@/components/StartSubscriptionButton";
import type { HighlightIcon } from "@/lib/menu/products";
import type { ProductDetailData } from "@/lib/menu/product-detail";
import ProductAccordion from "./ProductAccordion";
import styles from "./ProductDetail.module.css";
import accordionStyles from "./ProductAccordion.module.css";

const HIGHLIGHT_ICONS: Record<HighlightIcon, LucideIcon> = {
  utensils: UtensilsCrossed,
  sparkles: Sparkles,
  "heart-pulse": HeartPulse,
  sprout: Sprout,
  stethoscope: Stethoscope,
  leaf: Leaf,
  "shield-check": ShieldCheck,
};

export default function ProductDetail({ product }: { product: ProductDetailData }) {
  const hasFlavors = Boolean(product.flavors?.length);
  const [activeFlavorIndex, setActiveFlavorIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [openSuperfood, setOpenSuperfood] = useState<string | null>(null);

  const activeFlavor = hasFlavors ? product.flavors?.[activeFlavorIndex] : undefined;
  const gallery = activeFlavor?.gallery ?? product.gallery;
  const ingredients = activeFlavor?.ingredients ?? product.ingredients;
  const intro = activeFlavor?.intro ?? product.detailIntro;
  const superfoods =
    hasFlavors && activeFlavor ? activeFlavor.superfoods : product.superfoods;
  const superfoodsKey = activeFlavor?.id ?? product.slug;
  const image = gallery[activeImage] ?? gallery[0];

  useEffect(() => {
    setActiveImage(0);
    setOpenSuperfood(null);
  }, [activeFlavorIndex]);

  const toggleSuperfood = (title: string) => {
    setOpenSuperfood((current) => (current === title ? null : title));
  };

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumbs} aria-label="Nawigacja">
        <Link href="/">Strona główna</Link>
        {" · "}
        <Link href="/nasze-menu">Nasze menu</Link>
        {" · "}
        <span>{product.detailTitle}</span>
      </nav>

      <div className={styles.layout}>
        <div className={styles.gallery}>
          {hasFlavors && product.flavors && (
            <div className={styles.flavorSwitcher} role="tablist" aria-label="Wybierz smak">
              {product.flavors.map((flavor, index) => (
                <button
                  key={flavor.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFlavorIndex === index}
                  className={`${styles.flavorPill} ${activeFlavorIndex === index ? styles.flavorPillActive : ""}`}
                  onClick={() => setActiveFlavorIndex(index)}
                >
                  {flavor.name}
                </button>
              ))}
            </div>
          )}
          {gallery.length > 1 && (
            <div className={styles.thumbs}>
              {gallery.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  className={`${styles.thumb} ${index === activeImage ? styles.thumbActive : ""}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Zdjęcie ${index + 1}`}
                >
                  <Image src={item.src} alt="" fill sizes="56px" style={{ objectFit: "cover" }} />
                </button>
              ))}
            </div>
          )}
          <div className={styles.mainImage}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>{product.detailTitle}</h1>
          <p className={styles.intro}>{intro}</p>

          <ul className={styles.highlights}>
            {product.highlights.map(({ icon, text }) => {
              const Icon = HIGHLIGHT_ICONS[icon];
              return (
                <li key={text} className={styles.highlight}>
                  <span className={styles.highlightIcon}>
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  {text}
                </li>
              );
            })}
          </ul>

          <div className={styles.humanGrade}>
            <div className={styles.humanGradeBadge}>
              HUMAN
              <br />
              GRADE
            </div>
            <p className={styles.humanGradeText}>
              Do ugotowania NutriPaw używamy tylko składników najwyższej jakości — takich samych,
              jakie trafiają na ludzki talerz.
            </p>
          </div>

          <section className={styles.superfoods} aria-labelledby="superfoods-heading">
            <h2 id="superfoods-heading" className={styles.superfoodsTitle}>
              Dlaczego te składniki działają?
            </h2>
            <div key={superfoodsKey} className={styles.superfoodsList}>
              {superfoods.map((item) => {
                const open = openSuperfood === item.title;
                return (
                  <article
                    key={`${superfoodsKey}-${item.title}`}
                    className={`${styles.superfood} ${open ? styles.superfoodOpen : ""}`}
                  >
                    <button
                      type="button"
                      className={styles.superfoodTrigger}
                      aria-expanded={open}
                      onClick={() => toggleSuperfood(item.title)}
                    >
                      <span className={styles.superfoodHeader}>
                        <span className={styles.superfoodEmoji} aria-hidden="true">
                          {item.emoji}
                        </span>
                        <span className={styles.superfoodHeading}>
                          <span className={styles.superfoodTitle}>{item.title}</span>
                          {!open && <span className={styles.superfoodClaim}>{item.claim}</span>}
                        </span>
                      </span>
                      <ChevronDown
                        size={20}
                        className={open ? styles.superfoodIconOpen : styles.superfoodIcon}
                        aria-hidden="true"
                      />
                    </button>
                    {open && <p className={styles.superfoodBody}>{item.body}</p>}
                  </article>
                );
              })}
            </div>
          </section>

          <div className={styles.audience}>
            <h2 className={styles.audienceLabel}>Dla kogo</h2>
            <p className={styles.audienceText}>{product.audience}</p>
          </div>

          <ProductAccordion
            key={activeFlavor?.id ?? "default"}
            items={[
              {
                id: "ingredients",
                title: "Skład",
                content: ingredients,
              },
              {
                id: "additives",
                title: "Dodatki dietetyczne / kg",
                content: product.additives,
              },
              {
                id: "analytical",
                title: "Składniki analityczne",
                content: (
                  <div className={accordionStyles.analyticalTable}>
                    {product.analytical.map((row) => (
                      <div key={row.label} className={accordionStyles.analyticalRow}>
                        <span className={accordionStyles.analyticalLabel}>{row.label}</span>
                        <span className={accordionStyles.analyticalValue}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                ),
              },
            ]}
          />

          <div className={styles.ctaWrap}>
            <StartSubscriptionButton
              style={{
                background: "#c06849",
                color: "#faf6ec",
                fontFamily: "'Mulish', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                borderRadius: 999,
                padding: "14px 28px",
                border: "none",
                cursor: "pointer",
              }}
              className="hover:opacity-90 transition-opacity"
            >
              Przygotuj dietę dla swojego psa →
            </StartSubscriptionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
