"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import styles from "./FAQ.module.css";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqSection = {
  id: string;
  title: string;
  items: FaqItem[];
};

const faqSections: FaqSection[] = [
  {
    id: "produkt",
    title: "O produkcie",
    items: [
      {
        id: "produkt-1",
        question: "Czym różni się NutriPaw od zwykłej karmy?",
        answer:
          "NutriPaw to karma gotowana z prawdziwych składników human-grade — takich samych jakie kupujesz dla siebie w sklepie. Bez mączek mięsnych, wypełniaczy, sztucznych aromatów i konserwantów. Każda linia jest celowana zdrowotnie — GLOW wspiera skórę i sierść, VITAL stawy i długowieczność, GUT mikrobiom i trawienie.",
      },
      {
        id: "produkt-2",
        question: "Czy karma jest pełnoporcjowa?",
        answer:
          "Tak — wszystkie linie NutriPaw są pełnoporcjowe (pełnoporcjowa karma dla psów dorosłych), zgodne z wytycznymi FEDIAF 2025. Możesz karmić psa wyłącznie NutriPaw bez żadnych dodatków.",
      },
      {
        id: "produkt-3",
        question: "Czy karma jest odpowiednia dla szczeniąt i seniorów?",
        answer:
          "Aktualnie linie NutriPaw są opracowane dla psów dorosłych. Linia VITAL jest szczególnie polecana dla psów starszych ze względu na zawartość glukozaminy i małży nowozelandzkich wspierających stawy.",
      },
      {
        id: "produkt-4",
        question: "Jakie składniki są w karmie?",
        answer:
          "Używamy wyłącznie składników human-grade: mięso (wołowina, kurczak), warzywa (bataty, marchew, dynia, cukinia), superfoods (spirulina, olej sardynkowy, małże nowozelandzkie, kurkuma, proso) oraz premix witaminowo-mineralny. Bez zbóż glutenowych, bez soi, bez sztucznych dodatków.",
      },
      {
        id: "produkt-5",
        question: "Czy karma jest grain-free?",
        answer:
          "Tak — nie używamy pszenicy, żyta ani jęczmienia. Zamiast ryżu stosujemy bataty i proso jako źródła energii.",
      },
    ],
  },
  {
    id: "subskrypcja",
    title: "O subskrypcji",
    items: [
      {
        id: "sub-1",
        question: "Jak działa subskrypcja?",
        answer:
          "Wypełniasz krótką ankietę o swoim psie, my dobieramy odpowiednią linię i smaki. Karma jest dostarczana regularnie — co 2 lub 4 tygodnie, w zależności od wybranego planu. Możesz zmienić częstotliwość, smaki lub pauzować dostawę w każdej chwili.",
      },
      {
        id: "sub-2",
        question: "Czy mogę anulować subskrypcję?",
        answer:
          "Tak, bez żadnych opłat i bez podawania powodu. Możesz anulować, pauzować lub zmienić plan przez panel klienta lub pisząc do nas na hello@nutripaw.pl.",
      },
      {
        id: "sub-3",
        question: "Czy mogę mieszać linie produktowe?",
        answer:
          "Tak — oferujemy rotację smaków między liniami. To szczególnie polecane bo różnorodność białek chroni przed rozwojem alergii pokarmowych.",
      },
      {
        id: "sub-4",
        question: "Ile kosztuje dostawa?",
        answer:
          "Dostawa jest bezpłatna przy zamówieniach powyżej 99 zł. Pierwsza dostawa zawsze bezpłatna.",
      },
    ],
  },
  {
    id: "dostawa",
    title: "O dostawie i przechowywaniu",
    items: [
      {
        id: "dostawa-1",
        question: "Jak jest pakowana i dostarczana karma?",
        answer:
          "Karma jest pakowana w szczelne saszetki 400 g i dostarczana w chłodzonej torbie termicznej. Utrzymuje świeżość przez 48 godzin od momentu dostawy bez lodówki.",
      },
      {
        id: "dostawa-2",
        question: "Jak długo można przechowywać karmę?",
        answer:
          "Po dostawie karma w zamkniętej saszetce trzyma się w lodówce do 5 dni. Po otwarciu należy zużyć w ciągu 2 dni. Można mrozić — po rozmrożeniu w lodówce karma jest w pełni wartościowa.",
      },
      {
        id: "dostawa-3",
        question: "Do jakich miast dostarczacie?",
        answer: "Aktualnie dostarczamy na terenie całej Polski. Czas dostawy to 1–2 dni robocze.",
      },
    ],
  },
  {
    id: "zdrowie",
    title: "O zdrowiu psa",
    items: [
      {
        id: "zdrowie-1",
        question: "Jak dobrać odpowiednią linię dla mojego psa?",
        answer:
          "Wypełnij naszą ankietę — pytamy o rasę, wiek, wagę, aktywność i problemy zdrowotne. Na tej podstawie algorytm dobiera linię i smaki. Możesz też napisać do nas bezpośrednio — chętnie pomożemy.",
      },
      {
        id: "zdrowie-2",
        question: "Mój pies ma alergie — czy NutriPaw jest bezpieczne?",
        answer:
          "Nasze receptury są przejrzyste — zawsze wiesz dokładnie co jest w misce. Jeśli pies ma potwierdzoną alergię na konkretne białko, możemy wykluczyć je z planu rotacji. Skontaktuj się z nami przed zamówieniem.",
      },
      {
        id: "zdrowie-3",
        question: "Czy muszę konsultować zmianę diety z weterynarzem?",
        answer:
          "Zawsze zalecamy konsultację z weterynarzem przy zmianie diety, szczególnie u psów z chorobami przewlekłymi. NutriPaw jest karmą pełnoporcjową ale nie jest dietą leczniczą.",
      },
      {
        id: "zdrowie-4",
        question: "Jak przejść z dotychczasowej karmy na NutriPaw?",
        answer:
          "Polecamy stopniowe wprowadzanie przez 7–10 dni — zaczynasz od 25% NutriPaw i 75% dotychczasowej karmy, co 2–3 dni zwiększasz proporcję. Dołączamy do każdej pierwszej dostawy szczegółową instrukcję przejścia.",
      },
    ],
  },
];

function FaqAccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ""}`}>
      <button
        type="button"
        className={styles.question}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>{item.question}</span>
        <ChevronDown size={20} strokeWidth={2} className={styles.icon} aria-hidden="true" />
      </button>
      <div className={styles.answerWrap} hidden={!open}>
        <p className={styles.answer}>{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>FAQ</div>
        <h2 className={styles.title}>Najczęściej zadawane pytania</h2>
        <p className={styles.lead}>
          Wszystko, co warto wiedzieć o NutriPaw — od składu po dostawę i subskrypcję.
        </p>

        <div className={styles.groups}>
          {faqSections.map((group) => (
            <div key={group.id} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <div className={styles.list}>
                {group.items.map((item) => (
                  <FaqAccordionItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
