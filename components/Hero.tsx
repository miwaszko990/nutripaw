import Image from "next/image";
import {
  Check,
  Fish,
  Snowflake,
  Sparkles,
  Sprout,
  Utensils,
  WheatOff,
} from "lucide-react";
import styles from "./Hero.module.css";

const avatars = [
  { letter: "A", bg: "#2e4636" },
  { letter: "M", bg: "#5e7355" },
  { letter: "K", bg: "#6b4f3a" },
  { letter: "J", bg: "#c2954a" },
];

const circles = [
  { id: "skin", icon: Sparkles, label: <>Skóra<br />& sierść</> },
  { id: "fish", icon: Fish, label: <>Olej z sardynek<br />EPA / DHA</> },
  { id: "grain", icon: WheatOff, label: <>Bez zbóż<br />i mączek</> },
  { id: "spirulina", icon: Sprout, label: <>Spirulina<br />+ siemię</> },
];

function PouchLabel() {
  return (
    <div className={styles.labelWrap}>
      <div className={styles.label}>
        <div className={styles.labelWash} />
        <div className={styles.labelHead}>
          <div className={styles.labelBrand}>
            <Image src="/NutriPaw-Icon-Color.svg" alt="" width={30} height={30} />
            <b>nutripaw</b>
          </div>
          <span className={styles.tagpill}>Wołowina & batat</span>
        </div>
        <div className={styles.labelBody}>
          <div className={styles.labelEyebrow}>Pielęgnacja skóry & sierści</div>
          <div className={styles.labelHeroRow}>
            <span className={styles.labelGlow}>GLOW</span>
            <span className={styles.labelBenefitBig}>
              Lśniąca sierść,
              <br />
              zdrowa skóra.
            </span>
          </div>
        </div>
        <div className={styles.labelCheck}>
          <Check size={17} color="#7da06d" strokeWidth={2.5} aria-hidden="true" />
          <span>Mokra karma pełnoporcjowa dla psów dorosłych — z olejem z sardynek na skórę i sierść.</span>
        </div>
        <div className={styles.circles}>
          {circles.map((item) => (
            <div key={item.id} className={styles.circle}>
              <span className={styles.circleRing}>
                <item.icon size={30} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className={styles.circleLbl}>{item.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.info}>
          <div>
            <div className={styles.infoH}>Skład</div>
            <p className={styles.infoP}>
              Mięso i produkty pochodzenia zwierzęcego 70% (wołowina 40%, serca i wątroba wołowa), batat 12%,
              marchew, olej z sardynek 2%, siemię lniane, spirulina 0,5%, drożdże, naturalne minerały.
            </p>
            <div className={styles.infoH}>Składniki analityczne</div>
            <p className={`${styles.infoP} ${styles.infoPNoMargin}`}>
              Białko 11% · Tłuszcz 7% · Włókno 0,5% · Popiół 2,3% · Wilgotność 78%.
            </p>
          </div>
          <div className={styles.care}>
            <div className={styles.careRow}>
              <span className={styles.careIc}>
                <Snowflake size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              <div>
                <div className={styles.careH}>Przechowywanie</div>
                <div className={styles.careT}>Przechowuj w 2–6 °C. Po otwarciu zużyj w ciągu 48 godzin.</div>
              </div>
            </div>
            <div className={styles.careRow}>
              <span className={styles.careIc}>
                <Utensils size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              <div>
                <div className={styles.careH}>Dawkowanie</div>
                <div className={styles.careT}>1 saszetka dziennie na 8–10 kg masy ciała. Podawaj w temp. pokojowej.</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.footCols}>
            <div>
              <div className={styles.footK}>Masa netto</div>
              <div className={`${styles.footV} ${styles.footVBig}`}>300 g / 10,6 oz</div>
            </div>
            <div>
              <div className={styles.footK}>Producent</div>
              <div className={styles.footV}>
                NutriPaw Sp. z o.o.
                <br />
                ul. Łąkowa 4, Warszawa
              </div>
            </div>
            <div>
              <div className={styles.footK}>Kontakt</div>
              <div className={styles.footV}>
                nutripaw.pl
                <br />
                hej@nutripaw.pl
              </div>
            </div>
          </div>
          <span className={styles.footBadge}>Bez nasties</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
      <div>
        <div className={styles.pill}>
          <span className={styles.dot} />
          <span>Karma gotowana · Pełnoporcjowa · Celowana</span>
        </div>
        <h1 className={styles.h1}>
          Jedzenie, które <em>naprawdę</em> działa na Twojego psa.
        </h1>
        <p className={styles.sub}>
          Gotowane z ludzkich składników, skomponowane przez dietetyków. Dostarczamy do drzwi — co miesiąc,
          zgodnie z potrzebami Twojego psa.
        </p>
        <div className={styles.cta}>
          <a href="#subskrypcja" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnFullMobile}`}>
            Dopasuj plan →
          </a>
          <a href="#skladniki" className={`${styles.btn} ${styles.btnGhost} ${styles.btnFullMobile}`}>
            Poznaj składniki
          </a>
        </div>
        <div className={styles.proof}>
          <div className={styles.avatars}>
            {avatars.map((a) => (
              <span key={a.letter} style={{ background: a.bg }}>
                {a.letter}
              </span>
            ))}
          </div>
          <p>Dołącz do 2 000+ opiekunów, którzy już karmią zdrowiej</p>
        </div>
      </div>

      <div className={styles.compWrap}>
        <div className={styles.comp}>
          <div className={styles.compBlob} />
          <div className={styles.compBowl} />
          <div className={styles.compShadow} />

          <div className={styles.pouch}>
            <Image
              className={styles.pouchImg}
              src="/pouch-glow-body.png"
              alt="Saszetka NutriPaw GLOW"
              width={360}
              height={591}
              priority
            />
            <PouchLabel />
            <div className={`${styles.pouchFilm} ${styles.filmSheen}`} />
            <div className={`${styles.pouchFilm} ${styles.filmCreaseLight}`} />
            <div className={`${styles.pouchFilm} ${styles.filmCreaseDark}`} />
          </div>

          <div className={styles.compCaption}>Saszetka 300 g · FEDIAF 2025 · bez zbóż glutenowych</div>
        </div>
      </div>
      </div>
    </section>
  );
}
