import styles from "./Ingredients.module.css";

const ingredients = [
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
    tag: { left: "91.7%", top: "38.7%", showPct: true },
    anchor: { x: 545, y: 255 },
    lineEnd: { x: 612, y: 232 },
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
];

export default function Ingredients() {
  return (
    <section className={styles.section} id="skladniki">
      <div className={styles.npIngredients}>
        <div className={styles.npCopy}>
          <div className={styles.npEyebrow}>Receptura · Wołowina z batatem</div>
          <h2 className={styles.npTitle}>
            Widać każdy składnik.
            <br />
            Bo nic nie chowamy.
          </h2>
          <p className={styles.npLead}>
            Gotujemy delikatnie, w niskiej temperaturze, z kawałków, które rozpoznasz gołym okiem. Bez
            mączek, wypełniaczy i „aromatów”.
          </p>

          <div className={styles.npLegend}>
            {ingredients.map((item) => (
              <div key={item.id} className={styles.npRow}>
                <span className={styles.npDot} style={{ background: item.color }} />
                <span className={styles.npName}>{item.name}</span>
                <span className={styles.npPct}>{item.pct}</span>
              </div>
            ))}
          </div>

          <button className={styles.npBtn} type="button">
            Zobacz pełny skład
          </button>
        </div>

        <div className={styles.npFigure}>
          <div className={styles.npBlob} />
          <div className={styles.npPhoto} />

          <svg className={styles.npLines} viewBox="0 0 720 600" aria-hidden="true">
            <g stroke="#2e4636" strokeOpacity="0.32" strokeWidth="1.3" fill="none">
              {ingredients.map((item) => (
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
              {ingredients.map((item) => (
                <circle key={item.id} cx={item.anchor.x} cy={item.anchor.y} r="4.5" />
              ))}
            </g>
          </svg>

          {ingredients.map((item) => (
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
      </div>
    </section>
  );
}
