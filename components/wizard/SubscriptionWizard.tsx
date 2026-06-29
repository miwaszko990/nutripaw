"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bone,
  Check,
  Dog,
  Heart,
  Soup,
} from "lucide-react";
import { useMemo, useState } from "react";
import NutriPawWordmark from "@/components/NutriPawWordmark";
import {
  activityLabel,
  ageLabel,
  ALLERGY_OPTIONS,
  GOAL_OPTIONS,
  INITIAL_WIZARD_DATA,
  recommendPlan,
  type ActivityLevel,
  type AgeGroup,
  type BodyCondition,
  type Gender,
  type WizardData,
} from "@/lib/wizard/types";
import BreedCombobox from "./BreedCombobox";
import styles from "./SubscriptionWizard.module.css";

const TOTAL_STEPS = 10;

const PHASES = [
  { id: "dog", label: "O Twoim psie", steps: [1, 2, 3, 4] },
  { id: "health", label: "Zdrowie i dieta", steps: [5, 6, 7, 8, 9] },
  { id: "plan", label: "Twój plan", steps: [10] },
];

function stepPhaseIndex(step: number) {
  if (step <= 4) return 0;
  if (step <= 9) return 1;
  return 2;
}

export default function SubscriptionWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<WizardData>(INITIAL_WIZARD_DATA);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dogName = data.dogName.trim() || "Twój pies";
  const plan = useMemo(() => recommendPlan(data), [data]);
  const progress = submitted ? 100 : Math.round((step / TOTAL_STEPS) * 100);

  const patch = (partial: Partial<WizardData>) => setData((prev) => ({ ...prev, ...partial }));

  const canContinue = () => {
    switch (step) {
      case 1:
        return data.dogName.trim().length >= 2;
      case 2:
        return data.gender !== null && data.neutered !== null;
      case 3:
        return data.breed.trim().length >= 2;
      case 4:
        return data.ageGroup !== null;
      case 5:
        return data.weight >= 1;
      case 6:
        return data.bodyCondition !== null;
      case 7:
        return data.activity !== null;
      case 8:
        return data.goals.length > 0;
      case 9:
        return data.allergies.length > 0;
      case 10:
        return (
          data.ownerName.trim().length >= 2 &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
        );
      default:
        return false;
    }
  };

  const goNext = async () => {
    if (!canContinue()) return;

    if (step === 10 && !submitted) {
      setSubmitting(true);
      setSubmitError("");
      try {
        const res = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const json = (await res.json()) as { error?: string };
        if (!res.ok) throw new Error(json.error ?? "Nie udało się zapisać danych.");
        setSubmitted(true);
      } catch (error) {
        setSubmitError(error instanceof Error ? error.message : "Coś poszło nie tak.");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    if (submitted) return;
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  };

  const goBack = () => {
    if (submitted) {
      setSubmitted(false);
      return;
    }
    setStep((s) => Math.max(1, s - 1));
  };

  const toggleGoal = (id: string) => {
    patch({
      goals: data.goals.includes(id) ? data.goals.filter((g) => g !== id) : [...data.goals, id],
    });
  };

  const toggleAllergy = (id: string) => {
    if (id === "none") {
      patch({ allergies: data.allergies.includes("none") ? [] : ["none"] });
      return;
    }
    const withoutNone = data.allergies.filter((a) => a !== "none");
    patch({
      allergies: withoutNone.includes(id)
        ? withoutNone.filter((a) => a !== id)
        : [...withoutNone, id],
    });
  };

  const goalsSummary = GOAL_OPTIONS.filter((g) => data.goals.includes(g.id))
    .map((g) => g.label.toLowerCase())
    .join(", ");

  const allergiesSummary =
    data.allergies.includes("none") || data.allergies.length === 0
      ? "brak wykluczeń"
      : ALLERGY_OPTIONS.filter((a) => data.allergies.includes(a.id))
          .map((a) => a.label.toLowerCase())
          .join(", ");

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.logoLink}>
          <NutriPawWordmark variant="cream" className={styles.logo} />
        </Link>

        <p className={styles.sidebarEyebrow}>Dopasuj plan</p>
        <h1 className={styles.sidebarTitle}>
          Zbudujmy plan
          <br />
          żywieniowy {dogName}.
        </h1>

        <ol className={styles.phases}>
          {PHASES.map((phase, index) => {
            const current = stepPhaseIndex(submitted ? 11 : step);
            const done = index < current || submitted;
            const active = index === current && !submitted;

            return (
              <li
                key={phase.id}
                className={`${styles.phase} ${done ? styles.phaseDone : ""} ${active ? styles.phaseActive : ""}`}
              >
                <span className={styles.phaseIcon}>{done ? <Check size={14} /> : index + 1}</span>
                <span>{phase.label}</span>
              </li>
            );
          })}
        </ol>

        {(submitted || step >= 5) && (
          <div className={styles.summary}>
            <p>
              <strong>{ageLabel(data.ageGroup)}</strong> · {data.weight.toFixed(1).replace(".0", "")} kg ·{" "}
              {activityLabel(data.activity)}
            </p>
            {goalsSummary && <p>{goalsSummary}</p>}
            {step >= 9 && <p>{allergiesSummary}</p>}
          </div>
        )}
      </aside>

      <main className={styles.main}>
        <div className={styles.progressTop}>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
          <span className={styles.progressLabel}>
            {submitted ? "Plan gotowy" : `${String(step).padStart(2, "0")} / ${TOTAL_STEPS}`}
          </span>
        </div>

        <div className={styles.content}>
          {!submitted && step === 1 && (
            <>
              <h2 className={styles.question}>Jak wabi się Twój pies?</h2>
              <p className={styles.hint}>Spersonalizujemy plan i opakowanie pod jego imię.</p>
              <label className={styles.fieldLabel} htmlFor="dogName">
                Imię psa
              </label>
              <input
                id="dogName"
                className={styles.textInput}
                value={data.dogName}
                onChange={(e) => patch({ dogName: e.target.value })}
                placeholder="np. Burek"
                autoFocus
              />
            </>
          )}

          {!submitted && step === 2 && (
            <>
              <h2 className={styles.question}>Kim jest {dogName}?</h2>
              <p className={styles.hint}>Płeć i kastracja wpływają na zapotrzebowanie kaloryczne.</p>
              <p className={styles.groupLabel}>Płeć</p>
              <div className={styles.choiceRow}>
                {(["male", "female"] as Gender[]).map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`${styles.choiceBtn} ${data.gender === value ? styles.choiceBtnActive : ""}`}
                    onClick={() => patch({ gender: value })}
                  >
                    {value === "male" ? "Pies" : "Suczka"}
                  </button>
                ))}
              </div>
              <p className={styles.groupLabel}>Kastracja / sterylizacja</p>
              <div className={styles.choiceRow}>
                {[true, false].map((value) => (
                  <button
                    key={String(value)}
                    type="button"
                    className={`${styles.choiceBtn} ${data.neutered === value ? styles.choiceBtnActive : ""}`}
                    onClick={() => patch({ neutered: value })}
                  >
                    {value ? "Tak" : "Nie"}
                  </button>
                ))}
              </div>
            </>
          )}

          {!submitted && step === 3 && (
            <>
              <h2 className={styles.question}>Jaka to rasa?</h2>
              <p className={styles.hint}>Dobierzemy profil pod wielkość i predyspozycje.</p>
              <BreedCombobox value={data.breed} onChange={(breed) => patch({ breed })} />
            </>
          )}

          {!submitted && step === 4 && (
            <>
              <h2 className={styles.question}>Ile lat ma {dogName}?</h2>
              <p className={styles.hint}>Wiek decyduje o kaloryczności i składnikach receptury.</p>
              <div className={styles.cardGrid}>
                {(
                  [
                    { id: "puppy" as AgeGroup, title: "Szczeniak", sub: "do 12 miesięcy", Icon: Bone },
                    { id: "adult" as AgeGroup, title: "Dorosły", sub: "1–7 lat", Icon: Soup },
                    { id: "senior" as AgeGroup, title: "Senior", sub: "7 lat i więcej", Icon: Heart },
                  ] as const
                ).map(({ id, title, sub, Icon }) => (
                  <button
                    key={id}
                    type="button"
                    className={`${styles.optionCard} ${data.ageGroup === id ? styles.optionCardActive : ""}`}
                    onClick={() => patch({ ageGroup: id })}
                  >
                    {data.ageGroup === id && (
                      <span className={styles.cardCheck}>
                        <Check size={14} />
                      </span>
                    )}
                    <Icon size={22} aria-hidden="true" />
                    <strong>{title}</strong>
                    <span>{sub}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {!submitted && step === 5 && (
            <>
              <h2 className={styles.question}>Ile waży {dogName}?</h2>
              <p className={styles.hint}>Na tej podstawie obliczymy dzienną porcję.</p>
              <div className={styles.weightDisplay}>
                {data.weight.toFixed(1).replace(".0", "")} <span>kg</span>
              </div>
              <input
                type="range"
                min={1}
                max={60}
                step={0.5}
                value={data.weight}
                onChange={(e) => patch({ weight: Number(e.target.value) })}
                className={styles.range}
              />
              <div className={styles.rangeLabels}>
                <span>1 kg</span>
                <span>60 kg</span>
              </div>
            </>
          )}

          {!submitted && step === 6 && (
            <>
              <h2 className={styles.question}>Jaka jest jego sylwetka?</h2>
              <p className={styles.hint}>Pomoże nam to skorygować porcję.</p>
              <div className={styles.cardGrid}>
                {(
                  [
                    { id: "thin" as BodyCondition, title: "Za szczupły", Icon: Dog },
                    { id: "ideal" as BodyCondition, title: "Idealna", Icon: Dog },
                    { id: "overweight" as BodyCondition, title: "Nadwaga", Icon: Dog },
                  ] as const
                ).map(({ id, title, Icon }) => (
                  <button
                    key={id}
                    type="button"
                    className={`${styles.optionCard} ${data.bodyCondition === id ? styles.optionCardActive : ""}`}
                    onClick={() => patch({ bodyCondition: id })}
                  >
                    {data.bodyCondition === id && (
                      <span className={styles.cardCheck}>
                        <Check size={14} />
                      </span>
                    )}
                    <Icon size={22} aria-hidden="true" />
                    <strong>{title}</strong>
                  </button>
                ))}
              </div>
            </>
          )}

          {!submitted && step === 7 && (
            <>
              <h2 className={styles.question}>Jak aktywny jest {dogName}?</h2>
              <p className={styles.hint}>Aktywność wpływa na kaloryczność planu.</p>
              <div className={styles.listChoices}>
                {(
                  [
                    {
                      id: "calm" as ActivityLevel,
                      title: "Spokojny",
                      sub: "Krótkie spacery, dużo odpoczynku",
                    },
                    {
                      id: "moderate" as ActivityLevel,
                      title: "Umiarkowany",
                      sub: "1–2 godziny ruchu dziennie",
                    },
                    {
                      id: "active" as ActivityLevel,
                      title: "Bardzo aktywny",
                      sub: "Sport, bieganie, długie wyjścia",
                    },
                  ] as const
                ).map(({ id, title, sub }) => (
                  <button
                    key={id}
                    type="button"
                    className={`${styles.listChoice} ${data.activity === id ? styles.listChoiceActive : ""}`}
                    onClick={() => patch({ activity: id })}
                  >
                    <div>
                      <strong>{title}</strong>
                      <span>{sub}</span>
                    </div>
                    {data.activity === id && <Check size={18} />}
                  </button>
                ))}
              </div>
            </>
          )}

          {!submitted && step === 8 && (
            <>
              <h2 className={styles.question}>Co chcesz poprawić?</h2>
              <p className={styles.hint}>Wybierz wszystkie, które pasują.</p>
              <div className={styles.checkGrid}>
                {GOAL_OPTIONS.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    className={`${styles.checkCard} ${data.goals.includes(id) ? styles.checkCardActive : ""}`}
                    onClick={() => toggleGoal(id)}
                  >
                    <span className={styles.checkbox}>
                      {data.goals.includes(id) && <Check size={12} />}
                    </span>
                    {label}
                  </button>
                ))}
              </div>
            </>
          )}

          {!submitted && step === 9 && (
            <>
              <h2 className={styles.question}>Czego unikać?</h2>
              <p className={styles.hint}>Wykluczamy składniki, które mu szkodzą.</p>
              <div className={styles.checkGrid}>
                {ALLERGY_OPTIONS.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    className={`${styles.checkCard} ${data.allergies.includes(id) ? styles.checkCardActive : ""}`}
                    onClick={() => toggleAllergy(id)}
                  >
                    <span className={styles.checkbox}>
                      {data.allergies.includes(id) && <Check size={12} />}
                    </span>
                    {label}
                  </button>
                ))}
              </div>
            </>
          )}

          {!submitted && step === 10 && (
            <>
              <h2 className={styles.question}>Gdzie wysłać plan {dogName}?</h2>
              <p className={styles.hint}>Zapiszemy rekomendację i wyślemy ją na Twój e-mail.</p>
              <label className={styles.fieldLabel} htmlFor="ownerName">
                Twoje imię
              </label>
              <input
                id="ownerName"
                className={styles.textInput}
                value={data.ownerName}
                onChange={(e) => patch({ ownerName: e.target.value })}
                placeholder="np. Anna"
              />
              <label className={styles.fieldLabel} htmlFor="email">
                Adres e-mail
              </label>
              <input
                id="email"
                type="email"
                className={styles.textInput}
                value={data.email}
                onChange={(e) => patch({ email: e.target.value })}
                placeholder="anna@email.pl"
              />
              <label className={styles.consent}>
                <input
                  type="checkbox"
                  checked={data.marketingConsent}
                  onChange={(e) => patch({ marketingConsent: e.target.checked })}
                />
                Chcę otrzymywać porady żywieniowe i oferty NutriPaw (opcjonalnie).
              </label>
              {submitError && <p className={styles.error}>{submitError}</p>}
            </>
          )}

          {submitted && (
            <>
              <h2 className={styles.question}>Plan {dogName} jest gotowy.</h2>
              <p className={styles.hint}>
                Na podstawie profilu zdrowotnego rekomendujemy linię {plan.line} — {plan.focus}.
              </p>
              <div className={styles.resultCard}>
                <div className={styles.resultBadge}>{plan.line}</div>
                <h3>{plan.flavor}</h3>
                <ul className={styles.resultMeta}>
                  <li>
                    <span>Porcja</span>
                    <strong>{plan.dailyPortionG} g / dzień</strong>
                  </li>
                  <li>
                    <span>Cena</span>
                    <strong>{plan.dailyPrice.toFixed(2).replace(".", ",")} zł / dzień</strong>
                  </li>
                  <li>
                    <span>Subskrypcja</span>
                    <strong>Dostawa co 31 dni · ok. {plan.monthlyPrice} zł/mies.</strong>
                  </li>
                </ul>
              </div>
              <p className={styles.confirmNote}>
                Zapisaliśmy plan pod adresem <strong>{data.email}</strong>. Wkrótce wyślemy podsumowanie —
                możesz już teraz rozpocząć subskrypcję.
              </p>
            </>
          )}
        </div>

        <footer className={styles.footer}>
          <button type="button" className={styles.backBtn} onClick={goBack} disabled={step === 1 && !submitted}>
            <ArrowLeft size={16} aria-hidden="true" />
            Wstecz
          </button>

          {!submitted ? (
            <button
              type="button"
              className={`${styles.nextBtn} ${step === 10 ? styles.nextBtnAccent : ""}`}
              onClick={goNext}
              disabled={!canContinue() || submitting}
            >
              {submitting ? "Zapisuję..." : step === 10 ? "Pokaż mój plan" : "Dalej"}
              {!submitting && step !== 10 && <ArrowRight size={16} aria-hidden="true" />}
            </button>
          ) : (
            <Link href="/" className={styles.nextBtnAccent}>
              Rozpocznij subskrypcję
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          )}
        </footer>
      </main>
    </div>
  );
}
