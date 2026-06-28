"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Ingredients.module.css";

const SWIPE_THRESHOLD = 48;

type Ingredient = {
  id: string;
  name: string;
  pct: string;
  color: string;
  tag: { left: string; top: string; showPct: boolean };
  anchor: { x: number; y: number };
  lineEnd: { x: number; y: number };
};

type Slide = {
  id: string;
  line: string;
  eyebrow: string;
  tabClass: "tabGlow" | "tabVital" | "tabGut";
  photo: { src: string; size: string; position: string };
  ingredients: Ingredient[];
};

const slides: Slide[] = [
  {
    id: "glow",
    line: "GLOW",
    eyebrow: "Receptura · Wołowina z batatem",
    tabClass: "tabGlow",
    photo: { src: "/beef.jpg", size: "142%", position: "50% 43%" },
    ingredients: [
      {
        id: "beef",
        name: "Wołowina",
        pct: "60%",
        color: "var(--bark)",
        tag: { left: "26.1%", top: "8%", showPct: true },
        anchor: { x: 350, y: 180 },
        lineEnd: { x: 298, y: 74 },
      },
      {
        id: "sweet-potato",
        name: "Bataty",
        pct: "17%",
        color: "var(--terracotta)",
        tag: { left: "15.3%", top: "85.3%", showPct: true },
        anchor: { x: 235, y: 430 },
        lineEnd: { x: 150, y: 500 },
      },
      {
        id: "carrot",
        name: "Marchew",
        pct: "12%",
        color: "var(--ochre)",
        tag: { left: "84%", top: "38.7%", showPct: true },
        anchor: { x: 545, y: 255 },
        lineEnd: { x: 580, y: 232 },
      },
      {
        id: "oil",
        name: "Olej sardynkowy",
        pct: "5%",
        color: "var(--oil)",
        tag: { left: "75%", top: "87.3%", showPct: true },
        anchor: { x: 430, y: 415 },
        lineEnd: { x: 498, y: 512 },
      },
      {
        id: "spirulina",
        name: "Spirulina",
        pct: "3%",
        color: "var(--spirulina)",
        tag: { left: "10%", top: "49.7%", showPct: true },
        anchor: { x: 248, y: 268 },
        lineEnd: { x: 88, y: 288 },
      },
    ],
  },
  {
    id: "vital",
    line: "VITAL",
    eyebrow: "Receptura · Kurczak z małżami",
    tabClass: "tabVital",
    photo: { src: "/vital-chicken.jpg", size: "152%", position: "50% 50%" },
    ingredients: [
      {
        id: "chicken",
        name: "Kurczak",
        pct: "55%",
        color: "var(--cream-meat)",
        tag: { left: "24%", top: "10%", showPct: true },
        anchor: { x: 340, y: 175 },
        lineEnd: { x: 280, y: 72 },
      },
      {
        id: "batat",
        name: "Bataty",
        pct: "15%",
        color: "var(--terracotta)",
        tag: { left: "14%", top: "84%", showPct: true },
        anchor: { x: 228, y: 425 },
        lineEnd: { x: 145, y: 498 },
      },
      {
        id: "carrot",
        name: "Marchew",
        pct: "12%",
        color: "var(--ochre)",
        tag: { left: "84%", top: "36%", showPct: true },
        anchor: { x: 538, y: 248 },
        lineEnd: { x: 605, y: 225 },
      },
      {
        id: "mussels",
        name: "Małże zielone",
        pct: "8%",
        color: "var(--mussel)",
        tag: { left: "78%", top: "86%", showPct: true },
        anchor: { x: 445, y: 410 },
        lineEnd: { x: 510, y: 505 },
      },
      {
        id: "turmeric",
        name: "Kurkuma",
        pct: "5%",
        color: "var(--turmeric)",
        tag: { left: "8%", top: "48%", showPct: true },
        anchor: { x: 240, y: 262 },
        lineEnd: { x: 82, y: 282 },
      },
      {
        id: "glucosamine",
        name: "Glukozamina",
        pct: "3%",
        color: "var(--sage-deep)",
        tag: { left: "52%", top: "6%", showPct: true },
        anchor: { x: 390, y: 155 },
        lineEnd: { x: 395, y: 58 },
      },
    ],
  },
  {
    id: "gut",
    line: "GUT",
    eyebrow: "Receptura · Kurczak z dynią i prosem",
    tabClass: "tabGut",
    photo: { src: "/gut-pumpkin.jpg", size: "150%", position: "50% 50%" },
    ingredients: [
      {
        id: "chicken",
        name: "Kurczak",
        pct: "52%",
        color: "var(--cream-meat)",
        tag: { left: "25%", top: "9%", showPct: true },
        anchor: { x: 345, y: 178 },
        lineEnd: { x: 288, y: 70 },
      },
      {
        id: "pumpkin",
        name: "Dynia",
        pct: "18%",
        color: "var(--pumpkin)",
        tag: { left: "13%", top: "83%", showPct: true },
        anchor: { x: 222, y: 422 },
        lineEnd: { x: 138, y: 495 },
      },
      {
        id: "millet",
        name: "Proso",
        pct: "12%",
        color: "var(--millet)",
        tag: { left: "83%", top: "37%", showPct: true },
        anchor: { x: 532, y: 252 },
        lineEnd: { x: 598, y: 228 },
      },
      {
        id: "carrot",
        name: "Marchew",
        pct: "10%",
        color: "var(--ochre)",
        tag: { left: "76%", top: "85%", showPct: true },
        anchor: { x: 438, y: 412 },
        lineEnd: { x: 502, y: 508 },
      },
      {
        id: "zucchini",
        name: "Cukinia",
        pct: "5%",
        color: "var(--zucchini)",
        tag: { left: "9%", top: "47%", showPct: true },
        anchor: { x: 235, y: 265 },
        lineEnd: { x: 78, y: 285 },
      },
      {
        id: "prebiotic",
        name: "Prebiotyki",
        pct: "3%",
        color: "var(--spirulina)",
        tag: { left: "54%", top: "5%", showPct: true },
        anchor: { x: 395, y: 152 },
        lineEnd: { x: 400, y: 55 },
      },
    ],
  },
];

function SlideFigure({ slide }: { slide: Slide }) {
  return (
    <div className={styles.npFigure}>
      <div className={styles.npBlob} />
      <div
        className={styles.npPhoto}
        style={{
          backgroundImage: `url('${slide.photo.src}')`,
          backgroundSize: slide.photo.size,
          backgroundPosition: slide.photo.position,
        }}
      />

      <svg className={styles.npLines} viewBox="0 0 720 600" aria-hidden="true">
        <g stroke="#2e4636" strokeOpacity="0.32" strokeWidth="1.3" fill="none">
          {slide.ingredients.map((item) => (
            <line
              key={item.id}
              x1={item.anchor.x}
              y1={item.anchor.y}
              x2={item.lineEnd.x}
              y2={item.lineEnd.y}
            />
          ))}
        </g>
        <g fill="#c06849">
          {slide.ingredients.map((item) => (
            <circle key={item.id} cx={item.anchor.x} cy={item.anchor.y} r="4.5" />
          ))}
        </g>
      </svg>

      {slide.ingredients.map((item) => (
        <div
          key={item.id}
          className={styles.npTag}
          style={{ left: item.tag.left, top: item.tag.top }}
        >
          {item.tag.showPct ? (
            <>
              {item.name} <span className={styles.npTagPct}>{item.pct}</span>
            </>
          ) : (
            item.name
          )}
        </div>
      ))}
    </div>
  );
}

export default function Ingredients() {
  const [active, setActive] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(active);
  const slide = slides[active];

  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;
    let tracking = false;

    const onStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      tracking = true;
      setIsDragging(true);
      setDragOffset(0);
    };

    const onMove = (e: TouchEvent) => {
      if (!tracking || e.touches.length !== 1) return;

      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;

      if (Math.abs(dx) <= Math.abs(dy) || Math.abs(dx) < 8) return;

      e.preventDefault();

      const current = activeRef.current;
      let offset = dx;
      if (current === 0 && dx > 0) offset = dx * 0.25;
      if (current === slides.length - 1 && dx < 0) offset = dx * 0.25;

      setDragOffset(offset);
    };

    const onEnd = (e: TouchEvent) => {
      if (!tracking) return;
      tracking = false;

      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;

      setIsDragging(false);
      setDragOffset(0);

      if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;

      if (dx < 0) goTo(activeRef.current + 1);
      else goTo(activeRef.current - 1);
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", onEnd, { passive: true });
    el.addEventListener("touchcancel", onEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
      el.removeEventListener("touchcancel", onEnd);
    };
  }, [goTo]);

  return (
    <section className={styles.section} id="skladniki">
      <div className={styles.npIngredients}>
        <div className={styles.sliderHeader}>
          <div className={styles.sliderTabs} role="tablist" aria-label="Receptury">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-controls={`ingredients-panel-${item.id}`}
                className={`${styles.sliderTab} ${styles[item.tabClass]} ${index === active ? styles.sliderTabActive : ""}`}
                onClick={() => setActive(index)}
              >
                {item.line}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.sliderShell}>
          <button
            type="button"
            className={`${styles.sliderSideArrow} ${styles.sliderSideArrowPrev}`}
            aria-label="Poprzednia receptura"
            onClick={() => goTo(active - 1)}
          >
            <ChevronLeft size={22} strokeWidth={2} aria-hidden="true" />
          </button>

          <div className={styles.sliderViewport} ref={viewportRef}>
          <div
            className={`${styles.sliderTrack} ${isDragging ? styles.sliderTrackDragging : ""}`}
            style={{ transform: `translateX(calc(-${active * 100}% + ${dragOffset}px))` }}
          >
            {slides.map((item) => (
              <div
                key={item.id}
                id={`ingredients-panel-${item.id}`}
                role="tabpanel"
                aria-hidden={item.id !== slide.id}
                className={styles.slide}
              >
                <div className={styles.npCopy}>
                  <div className={styles.npEyebrow}>{item.eyebrow}</div>
                  <h2 className={styles.npTitle}>
                    Widać każdy składnik.
                    <br />
                    Bo nic nie chowamy.
                  </h2>
                  <p className={styles.npLead}>
                    Gotujemy delikatnie, w niskiej temperaturze, z kawałków, które rozpoznasz gołym okiem.
                    Bez mączek, wypełniaczy i „aromatów”.
                  </p>

                  <div className={styles.npLegend}>
                    {item.ingredients.map((ing) => (
                      <div key={ing.id} className={styles.npRow}>
                        <span className={styles.npDot} style={{ background: ing.color }} />
                        <span className={styles.npName}>{ing.name}</span>
                        <span className={styles.npPct}>{ing.pct}</span>
                      </div>
                    ))}
                  </div>

                  <button className={styles.npBtn} type="button">
                    Zobacz pełny skład
                  </button>
                </div>

                <div className={styles.slideFigureCol}>
                  <SlideFigure slide={item} />
                </div>
              </div>
            ))}
          </div>
          </div>

          <button
            type="button"
            className={`${styles.sliderSideArrow} ${styles.sliderSideArrowNext}`}
            aria-label="Następna receptura"
            onClick={() => goTo(active + 1)}
          >
            <ChevronRight size={22} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>

        <div className={styles.sliderFooter}>
          <div className={styles.sliderDots}>
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.sliderDot} ${index === active ? styles.sliderDotActive : ""}`}
                aria-label={`Receptura ${item.line}`}
                aria-current={index === active ? "true" : undefined}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
