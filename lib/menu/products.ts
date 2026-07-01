import { HeartPulse, Sparkles, Sprout, type LucideIcon } from "lucide-react";

export type MenuProductId = "glow" | "vital" | "gut";
export type HighlightIcon = "utensils" | "sparkles" | "heart-pulse" | "sprout" | "stethoscope" | "leaf" | "shield-check";

export type Superfood = {
  emoji: string;
  title: string;
  claim: string;
  body: string;
};

export type ProductFlavor = {
  id: string;
  name: string;
  intro: string;
  gallery: { src: string; alt: string }[];
  ingredients: string;
  superfoods: Superfood[];
};

export type MenuProduct = {
  id: MenuProductId;
  slug: string;
  accent: string;
  Icon: LucideIcon;
  eyebrow: string;
  name: string;
  goal: string;
  flavor: string;
  weight: string;
  description: string;
  descriptionBold: string;
  pouchSrc: string;
  pouchClass?: "vital" | "gut";
  detailTitle: string;
  detailIntro: string;
  gallery: { src: string; alt: string }[];
  highlights: { icon: HighlightIcon; text: string }[];
  superfoods: Superfood[];
  audience: string;
  ingredients: string;
  additives: string;
  analytical: { label: string; value: string }[];
  flavors?: ProductFlavor[];
};

export const MENU_PRODUCTS: MenuProduct[] = [
  {
    id: "glow",
    slug: "glow",
    accent: "#c2954a",
    Icon: Sparkles,
    eyebrow: "Promienna",
    name: "GLOW",
    goal: "Skóra · Sierść · Mikrobiom",
    flavor: "Wołowina z olejem sardynkowym",
    weight: "400 g",
    descriptionBold: "Wołowina z olejem sardynkowym.",
    description: "Spirulina, EPA / DHA i biotyna na zdrową skórę i lśniącą sierść.",
    pouchSrc: "/pouch-glow.png",
    detailTitle: "Promienna GLOW",
    detailIntro:
      "GLOW to jedyna gotowana karma na polskim rynku, która łączy wołowinę z wolnego wybiegu z olejem sardynkowym zimnotłoczonym i spiruliną — trzema składnikami które działają synergicznie na skórę, sierść i mikrobiom jelitowy.",
    gallery: [
      { src: "/pouch-glow.png", alt: "NutriPaw GLOW — saszetka" },
      { src: "/beef.jpg", alt: "Wołowina — główny składnik GLOW" },
    ],
    highlights: [
      { icon: "utensils", text: "Pełnoporcjowa karma dla psów wszystkich ras" },
      { icon: "sparkles", text: "Spirulina, EPA/DHA i biotyna na skórę i sierść" },
      { icon: "stethoscope", text: "Receptura zgodna z normami FEDIAF 2025" },
      { icon: "leaf", text: "Bez zbóż glutenowych, sztucznych barwników i konserwantów" },
      { icon: "shield-check", text: "Bez glutenu, kukurydzy, nabiału, soi i jajek" },
    ],
    superfoods: [
      {
        emoji: "🐟",
        title: "Olej sardynkowy zimnotłoczony",
        claim: "EPA i DHA przyswajane bezpośrednio — mniej świądu, głębszy połysk sierści.",
        body: "Bogaty w kwasy EPA i DHA — formy omega-3 które organizm psa przyswaja bezpośrednio, bez konieczności konwersji. EPA działa przeciwzapalnie, redukując świąd i zaczerwienienie skóry. DHA buduje barierę lipidową naskórka, która zatrzymuje wilgoć i chroni przed alergenami. Efekt widoczny już po 3–4 tygodniach: mniej drapania, bardziej nawilżona skóra, głębszy połysk sierści.",
      },
      {
        emoji: "🌿",
        title: "Spirulina",
        claim: "Mikroalga antyoksydacyjna wspierająca oś jelito-skóra.",
        body: "Mikroalga bogata w fikocyjaninę — naturalny pigment o silnym działaniu antyoksydacyjnym i przeciwzapalnym. Wspiera produkcję kolagenu w skórze, wzmacnia bariery immunologiczne i odżywia mikrobiotę jelitową (oś jelito-skóra). Na polskim rynku żadna gotowana karma nie używa spiruliny jako składnika bazowego receptury — tylko jako dekorację na etykiecie.",
      },
      {
        emoji: "🥩",
        title: "Wołowina z wolnego wybiegu",
        claim: "Cynk, miedź i L-cysteina na keratynę i regenerację skóry.",
        body: "Naturalne źródło cynku i miedzi — minerałów kluczowych dla keratynizacji sierści i regeneracji skóry. Wyższy profil aminokwasowy niż wołowina przemysłowa, w tym L-cysteina — budulec keratyny.",
      },
    ],
    audience:
      "Psy z matową sierścią, nadmiernym drapaniem, problemami skórnymi, wrażliwą skórą lub po antybiotykoterapii.",
    ingredients:
      "Wołowina 45% (łopatka/udziec), batat 20%, marchew 10%, cukinia 8%, olej sardynkowy zimnotłoczony 3%, spirulina 0,5%, siemię lniane mielone 0,5%, premiks witaminowo-mineralny. Bez zbóż glutenowych. Bez strączków. Bez cukru.",
    additives:
      "Witamina A: 2 000 j.m., Witamina D3: 300 j.m., Witamina E: 45 mg, Cynk: 22 mg, Mangan: 6 mg, Jod: 0,5 mg, Selen: 0,15 mg.",
    analytical: [
      { label: "Białko", value: "14,2%" },
      { label: "Tłuszcz", value: "6,8%" },
      { label: "Błonnik", value: "1,2%" },
      { label: "Popiół", value: "2,0%" },
      { label: "Wilgotność", value: "69%" },
    ],
    flavors: [
      {
        id: "beef",
        name: "Wołowina z olejem sardynkowym",
        intro:
          "GLOW to jedyna gotowana karma na polskim rynku, która łączy wołowinę z wolnego wybiegu z olejem sardynkowym zimnotłoczonym i spiruliną — trzema składnikami które działają synergicznie na skórę, sierść i mikrobiom jelitowy.",
        gallery: [
          { src: "/pouch-glow.png", alt: "NutriPaw GLOW — Wołowina z olejem sardynkowym" },
          { src: "/beef.jpg", alt: "Wołowina — główny składnik GLOW" },
        ],
        ingredients:
          "Wołowina 45% (łopatka/udziec), batat 20%, marchew 10%, cukinia 8%, olej sardynkowy zimnotłoczony 3%, spirulina 0,5%, siemię lniane mielone 0,5%, premiks witaminowo-mineralny. Bez zbóż glutenowych. Bez strączków. Bez cukru.",
        superfoods: [
          {
            emoji: "🐟",
            title: "Olej sardynkowy zimnotłoczony",
            claim: "Redukuje świąd, buduje barierę skórną",
            body: "Bogaty w kwasy EPA i DHA — formy omega-3 które organizm psa przyswaja bezpośrednio, bez konieczności konwersji. EPA działa przeciwzapalnie, redukując świąd i zaczerwienienie skóry. DHA buduje barierę lipidową naskórka, która zatrzymuje wilgoć i chroni przed alergenami. Efekt widoczny już po 3–4 tygodniach: mniej drapania, bardziej nawilżona skóra, głębszy połysk sierści.",
          },
          {
            emoji: "🌿",
            title: "Spirulina",
            claim: "Antyoksydanty, mikrobiom skórny, fikocyjanina",
            body: "Mikroalga bogata w fikocyjaninę — naturalny pigment o silnym działaniu antyoksydacyjnym i przeciwzapalnym. Wspiera produkcję kolagenu w skórze, wzmacnia bariery immunologiczne i odżywia mikrobiotę jelitową (oś jelito-skóra). Na polskim rynku żadna gotowana karma nie używa spiruliny jako składnika bazowego receptury.",
          },
          {
            emoji: "🥩",
            title: "Wołowina z wolnego wybiegu",
            claim: "Cynk, miedź, L-cysteina — budulec keratyny",
            body: "Naturalne źródło cynku i miedzi — minerałów kluczowych dla keratynizacji sierści i regeneracji skóry. Wyższy profil aminokwasowy niż wołowina przemysłowa, w tym L-cysteina — budulec keratyny odpowiedzialnej za jakość sierści.",
          },
        ],
      },
      {
        id: "turkey",
        name: "Indyk ze spiruliną i batatem",
        intro:
          "GLOW w wersji z indykiem to lżejsza alternatywa dla psów wrażliwych na wołowinę. Chude mięso indyka łączymy z podwójną dawką spiruliny i batatami bogatymi w beta-karoten — dla psów których skóra potrzebuje wsparcia antyoksydacyjnego i przeciwzapalnego.",
        gallery: [
          { src: "/pouch-glow-turkey.png", alt: "NutriPaw GLOW — Indyk ze spiruliną i batatem (placeholder)" },
        ],
        ingredients:
          "Indyk 45% (pierś i udo bez skóry), batat 22%, marchew 8%, cukinia 8%, spirulina 1%, olej lniany zimnotłoczony 2%, siemię lniane mielone 0,5%, premiks witaminowo-mineralny. Bez zbóż glutenowych. Bez strączków. Bez cukru.",
        superfoods: [
          {
            emoji: "🌿",
            title: "Spirulina (podwójna dawka)",
            claim: "Fikocyjanina, kolagen, oś jelito-skóra",
            body: "Mikroalga bogata w fikocyjaninę — naturalny pigment o silnym działaniu antyoksydacyjnym i przeciwzapalnym. W tej recepturze spirulina jest głównym superfoodem — 1% składu, dwa razy więcej niż w wariancie wołowym. Wspiera produkcję kolagenu w skórze i odżywia mikrobiotę jelitową.",
          },
          {
            emoji: "🍠",
            title: "Batat (słodki ziemniak)",
            claim: "Beta-karoten, niski IG, energia bez skoków cukru",
            body: "Batat to jeden z najlepszych źródeł beta-karotenu, który organizm przetwarza na witaminę A — kluczową dla regeneracji nabłonka skóry i produkcji łoju nawilżającego sierść. Niski indeks glikemiczny zapewnia stabilną energię bez skoków insuliny.",
          },
          {
            emoji: "🦃",
            title: "Indyk — pierś i udo",
            claim: "Lekkostrawne białko, idealne przy nietolerancji wołowiny",
            body: "Chude mięso indyka jest jednym z najbardziej lekkostrawnych białek dla psów. Naturalne źródło tryptofanu — aminokwasu wpływającego na poziom serotoniny i spokój psa. Doskonała opcja rotacyjna dla psów z podejrzeniem alergii na wołowinę.",
          },
        ],
      },
    ],
  },
  {
    id: "vital",
    slug: "vital",
    accent: "#5f8350",
    Icon: HeartPulse,
    eyebrow: "Witalna",
    name: "VITAL",
    goal: "Długowieczność · Stawy · Energia",
    flavor: "Kurczak z małżami i marchewką",
    weight: "400 g",
    descriptionBold: "Kurczak z małżami i marchewką.",
    description: "Małże zielone, glukozamina i kurkuma na stawy i energię.",
    pouchSrc: "/pouch-vital.png",
    pouchClass: "vital",
    detailTitle: "Witalna VITAL",
    detailIntro:
      "VITAL wspiera psy aktywne, seniorów i rasy predysponowane do problemów ze stawami. Chude mięso kurczaka łączy się z małżą zielonopłetwą — jedynym naturalnym składnikiem zawierającym jednocześnie glukozaminę, chondroitynę i kwasy omega-3 ETA. Kurkuma działa przeciwzapalnie, a brokuł i natka pietruszki dostarczają antyoksydantów wspierających regenerację.",
    gallery: [
      { src: "/pouch-vital.png", alt: "NutriPaw VITAL — saszetka" },
      { src: "/vital-chicken.jpg", alt: "Kurczak — główny składnik VITAL" },
    ],
    highlights: [
      { icon: "utensils", text: "Pełnoporcjowa karma dla psów wszystkich ras" },
      { icon: "heart-pulse", text: "Małże zielone, glukozamina i kurkuma na stawy i mobilność" },
      { icon: "stethoscope", text: "Receptura zgodna z normami FEDIAF 2025" },
      { icon: "leaf", text: "Bez zbóż glutenowych, sztucznych barwników i konserwantów" },
      { icon: "shield-check", text: "Bez glutenu, kukurydzy, nabiału, soi i jajek" },
    ],
    superfoods: [
      {
        emoji: "🦪",
        title: "Małża zielonopłetwa (Perna canaliculus)",
        claim: "Glukozamina, chondroityna i ETA w jednym naturalnym składniku.",
        body: "Jedyny naturalny składnik zawierający jednocześnie glukozaminę, chondroitynę, kwasy omega-3 ETA i EPA oraz glikozaminoglikany — kompletny kompleks dla zdrowia chrząstki stawowej. Badania kliniczne potwierdzają redukcję objawów artretyzmu u psów po 6–8 tygodniach suplementacji. Żadna polska gotowana karma nie dodaje małży nowozelandzkiej do receptury — to nasz wyróżnik.",
      },
      {
        emoji: "💛",
        title: "Kurkuma",
        claim: "Kurkumina hamuje stany zapalne i wspiera regenerację stawów.",
        body: "Kurkumina ma potwierdzone działanie przeciwzapalne poprzez hamowanie cytokin prozapalnych. Naturalnie wspiera regenerację po wysiłku i zmniejsza sztywność stawów u psów starszych. W połączeniu z piperyną z czarnego pieprzu jej biodostępność znacząco wzrasta.",
      },
      {
        emoji: "🐓",
        title: "Kurczak — pierś i udo",
        claim: "L-karnityna i kompletny profil aminokwasowy — lekko strawny.",
        body: "Kompletny profil aminokwasowy z wysoką zawartością L-karnityny wspierającej metabolizm energetyczny i funkcję mięśnia sercowego. Lekkostrawny, idealny dla psów starszych i po rekonwalescencji.",
      },
    ],
    audience:
      "Psy powyżej 7 roku życia, rasy duże i olbrzymie (labrador, golden retriever, owczarek), psy aktywne i sportowe, psy po operacjach ortopedycznych.",
    ingredients:
      "Kurczak 42% (pierś i udo bez skóry), batat 21%, marchew 8%, brokuł 6%, olej sardynkowy zimnotłoczony 3%, małża nowozelandzka proszek 0,5%, natka pietruszki 0,3%, premiks witaminowo-mineralny. Bez zbóż glutenowych. Bez strączków. Bez cukru.",
    additives:
      "Witamina A: 2 000 j.m., Witamina D3: 300 j.m., Witamina E: 45 mg, Cynk: 22 mg, Mangan: 6 mg, Jod: 0,5 mg, Selen: 0,15 mg.",
    analytical: [
      { label: "Białko", value: "17,6%" },
      { label: "Tłuszcz", value: "8,8%" },
      { label: "Błonnik", value: "1,0%" },
      { label: "Popiół", value: "2,1%" },
      { label: "Wilgotność", value: "69%" },
    ],
    flavors: [
      {
        id: "chicken",
        name: "Kurczak z małżami i marchewką",
        intro:
          "VITAL wspiera psy aktywne, seniorów i rasy predysponowane do problemów ze stawami. Chude mięso kurczaka łączy się z małżą zielonopłetwą — jedynym naturalnym składnikiem zawierającym jednocześnie glukozaminę, chondroitynę i kwasy omega-3 ETA. Kurkuma działa przeciwzapalnie, a brokuł i natka pietruszki dostarczają antyoksydantów wspierających regenerację.",
        gallery: [
          { src: "/pouch-vital.png", alt: "NutriPaw VITAL — Kurczak z małżami i marchewką" },
          { src: "/vital-chicken.jpg", alt: "Kurczak — główny składnik VITAL" },
        ],
        ingredients:
          "Kurczak 42% (pierś i udo bez skóry), batat 21%, marchew 8%, brokuł 6%, olej sardynkowy zimnotłoczony 3%, małża nowozelandzka proszek 0,5%, natka pietruszki 0,3%, premiks witaminowo-mineralny. Bez zbóż glutenowych. Bez strączków. Bez cukru.",
        superfoods: [
          {
            emoji: "🦪",
            title: "Małża zielonopłetwa (Perna canaliculus)",
            claim: "Glukozamina, chondroityna, omega-3 ETA — kompletny kompleks stawowy",
            body: "Jedyny naturalny składnik zawierający jednocześnie glukozaminę, chondroitynę, kwasy omega-3 ETA i EPA oraz glikozaminoglikany — kompletny kompleks dla zdrowia chrząstki stawowej. Badania kliniczne potwierdzają redukcję objawów artretyzmu u psów po 6–8 tygodniach suplementacji. Żadna polska gotowana karma nie dodaje małży nowozelandzkiej do receptury — to nasz wyróżnik.",
          },
          {
            emoji: "💛",
            title: "Kurkuma",
            claim: "Naturalny środek przeciwzapalny, wspiera regenerację stawów",
            body: "Kurkumina ma potwierdzone działanie przeciwzapalne poprzez hamowanie cytokin prozapalnych. Naturalnie wspiera regenerację po wysiłku i zmniejsza sztywność stawów u psów starszych. W połączeniu z piperyną z czarnego pieprzu jej biodostępność znacząco wzrasta.",
          },
          {
            emoji: "🐓",
            title: "Kurczak — pierś i udo",
            claim: "L-karnityna, lekkostrawne białko, idealne dla seniorów",
            body: "Kompletny profil aminokwasowy z wysoką zawartością L-karnityny wspierającej metabolizm energetyczny i funkcję mięśnia sercowego. Lekkostrawny, idealny dla psów starszych i po rekonwalescencji.",
          },
        ],
      },
      {
        id: "salmon",
        name: "Łosoś z batatem i algami",
        intro:
          "VITAL z łososiem to najbogatszy w kwasy omega-3 wariant linii — idealny dla psów z zaawansowanymi problemami stawowymi lub po operacjach ortopedycznych. Łosoś dostarcza EPA i DHA bezpośrednio w formie gotowej do przyswojenia, a algi morskie wzmacniają działanie przeciwzapalne.",
        gallery: [
          { src: "/pouch-vital-salmon.png", alt: "NutriPaw VITAL — Łosoś z batatem i algami (placeholder)" },
        ],
        ingredients:
          "Łosoś 42%, batat 22%, marchew 8%, algi morskie 0,5%, olej z łososia zimnotłoczony 3%, szpinak 5%, premiks witaminowo-mineralny. Bez zbóż glutenowych. Bez strączków. Bez cukru.",
        superfoods: [
          {
            emoji: "🐟",
            title: "Łosoś atlantycki",
            claim: "EPA i DHA w najlepiej przyswajalnej formie, silne działanie przeciwzapalne",
            body: "Łosoś to jedno z najbogatszych naturalnych źródeł kwasów EPA i DHA — form omega-3 które organizm psa przyswaja bezpośrednio bez konieczności konwersji. EPA silnie hamuje stany zapalne w stawach, DHA wspiera regenerację chrząstki i funkcje neurologiczne. Efekt widoczny po 4–6 tygodniach: lepsza mobilność, mniej sztywności rano.",
          },
          {
            emoji: "🌊",
            title: "Algi morskie (Ascophyllum nodosum)",
            claim: "Jod, minerały, naturalne wsparcie tarczycy i metabolizmu",
            body: "Algi morskie to naturalne źródło jodu, manganu i innych minerałów śladowych. Ascophyllum nodosum ma potwierdzone działanie przeciwzapalne i wspiera zdrowie stawów synergistycznie z innymi składnikami receptury. Zawierają też naturalne prebiotyki wspierające mikrobiom jelitowy.",
          },
          {
            emoji: "🍠",
            title: "Batat z olejem z łososia",
            claim: "Beta-karoten + omega-3 — podwójne wsparcie tkanki łącznej",
            body: "Batat dostarcza beta-karotenu przekształcanego w witaminę A — kluczową dla regeneracji chrząstki i tkanki łącznej. W połączeniu z olejem z łososia tworzy synergistyczny duet: witamina A wspomaga wchłanianie kwasów tłuszczowych i wzmacnia działanie omega-3 na stawy.",
          },
        ],
      },
    ],
  },
  {
    id: "gut",
    slug: "gut",
    accent: "#c06849",
    Icon: Sprout,
    eyebrow: "Lekkostrawna",
    name: "GUT",
    goal: "Mikrobiom · Trawienie · Jelita",
    flavor: "Kurczak z dynią i prosem",
    weight: "400 g",
    descriptionBold: "Kurczak z dynią i prosem.",
    description: "Dynia, proso i prebiotyki na spokojny brzuch i zdrowe jelita.",
    pouchSrc: "/pouch-gut.png",
    pouchClass: "gut",
    detailTitle: "Lekkostrawna GUT",
    detailIntro:
      "GUT to receptura zaprojektowana wokół osi jelitowej — centrum immunologicznego organizmu psa. Lekkostrawny kurczak łączy się z dynią, kaszą jaglaną i naturalnymi prebiotykami FOS, tworząc środowisko w którym dobre bakterie mogą się rozwijać, a nie tylko przetrwać. Efekt widoczny już po 2–3 dniach: lepszy stolec, mniej gazów, spokojniejszy brzuszek.",
    gallery: [
      { src: "/pouch-gut.png", alt: "NutriPaw GUT — saszetka" },
      { src: "/gut-pumpkin.jpg", alt: "Dynia i kurczak — składniki GUT" },
    ],
    highlights: [
      { icon: "utensils", text: "Pełnoporcjowa karma dla psów wszystkich ras" },
      { icon: "sprout", text: "Dynia, proso i prebiotyki FOS na mikrobiom i trawienie" },
      { icon: "stethoscope", text: "Receptura zgodna z normami FEDIAF 2025" },
      { icon: "leaf", text: "Bez zbóż glutenowych, sztucznych barwników i konserwantów" },
      { icon: "shield-check", text: "Bez glutenu, kukurydzy, nabiału, soi i jajek" },
    ],
    superfoods: [
      {
        emoji: "🎃",
        title: "Dynia (przecier 100%)",
        claim: "Pektyny i beta-karoten karmią dobre bakterie i wspierają nabłonek jelit.",
        body: "Naturalne źródło pektyn i błonnika rozpuszczalnego, który działa jak prebiotyk — karmi korzystne bakterie Lactobacillus i Bifidobacterium. Beta-karoten zawarty w dyni wspiera integralność nabłonka jelitowego, zmniejszając przepuszczalność jelit. Efekt: regularniejszy stolec, mniej gazów, lepsza konsystencja.",
      },
      {
        emoji: "🌾",
        title: "Kasza jaglana (proso)",
        claim: "Bezglutenowe ziarno wspierające błonę śluzową jelit.",
        body: "Jedyne ziarno bezglutenowe z naturalną zawartością krzemionki wspierającej błonę śluzową jelit. Niski indeks glikemiczny zapewnia stabilne uwalnianie energii. Bogata w magnez i witaminy z grupy B wspierające perystaltykę jelit. Na polskim rynku żadna karma gotowana nie używa prosa jako świadomego składnika prebiotycznego.",
      },
      {
        emoji: "🍎",
        title: "Inulina i jabłko (pektyna)",
        claim: "FOS i pektyna regulują mikrobiom i konsystencję stolca.",
        body: "Inulina to prebiotyk klasy FOS — selektywnie karmi dobre bakterie jelitowe, nie dając pożywki patogenom. Jabłko dostarcza pektyny, która reguluje konsystencję stolca w obie strony — zagęszcza luźny i rozluźnia zbity. Razem tworzą kompletny system regulacji mikrobiomu.",
      },
    ],
    audience:
      "Psy z wrażliwym żołądkiem, luźnym stolcem, gazami, po antybiotykoterapii, psy wybredne z problemami trawiennymi, psy po zmianie diety.",
    ingredients:
      "Kurczak 40% (pierś i udo bez skóry), dynia 22% (przecier 100%), kasza jaglana 9%, marchew 7%, jabłko 5% (obrane), inulina/FOS 0,5%, olej sardynkowy zimnotłoczony 0,5%, premiks witaminowo-mineralny. Bez zbóż glutenowych. Bez strączków. Bez cukru.",
    additives:
      "Witamina A: 2 000 j.m., Witamina D3: 300 j.m., Witamina E: 45 mg, Cynk: 22 mg, Mangan: 6 mg, Jod: 0,5 mg, Selen: 0,15 mg.",
    analytical: [
      { label: "Białko", value: "13,8%" },
      { label: "Tłuszcz", value: "5,2%" },
      { label: "Błonnik", value: "1,8%" },
      { label: "Popiół", value: "1,9%" },
      { label: "Wilgotność", value: "71%" },
    ],
    flavors: [
      {
        id: "chicken",
        name: "Kurczak z dynią i prosem",
        intro:
          "GUT to receptura zaprojektowana wokół osi jelitowej — centrum immunologicznego organizmu psa. Lekkostrawny kurczak łączy się z dynią, kaszą jaglaną i naturalnymi prebiotykami FOS, tworząc środowisko w którym dobre bakterie mogą się rozwijać, a nie tylko przetrwać. Efekt widoczny już po 2–3 dniach: lepszy stolec, mniej gazów, spokojniejszy brzuszek.",
        gallery: [
          { src: "/pouch-gut.png", alt: "NutriPaw GUT — Kurczak z dynią i prosem" },
          { src: "/gut-pumpkin.jpg", alt: "Dynia i kurczak — składniki GUT" },
        ],
        ingredients:
          "Kurczak 40% (pierś i udo bez skóry), dynia 22% (przecier 100%), kasza jaglana 9%, marchew 7%, jabłko 5% (obrane), inulina/FOS 0,5%, olej sardynkowy zimnotłoczony 0,5%, premiks witaminowo-mineralny. Bez zbóż glutenowych. Bez strączków. Bez cukru.",
        superfoods: [
          {
            emoji: "🎃",
            title: "Dynia (przecier 100%)",
            claim: "Prebiotyk, błonnik rozpuszczalny, regulacja stolca",
            body: "Naturalne źródło pektyn i błonnika rozpuszczalnego, który działa jak prebiotyk — karmi korzystne bakterie Lactobacillus i Bifidobacterium. Beta-karoten zawarty w dyni wspiera integralność nabłonka jelitowego, zmniejszając przepuszczalność jelit. Efekt: regularniejszy stolec, mniej gazów, lepsza konsystencja.",
          },
          {
            emoji: "🌾",
            title: "Kasza jaglana (proso)",
            claim: "Bezglutenowa, krzemionka, wspiera błonę śluzową jelit",
            body: "Jedyne ziarno bezglutenowe z naturalną zawartością krzemionki wspierającej błonę śluzową jelit. Niski indeks glikemiczny zapewnia stabilne uwalnianie energii. Bogata w magnez i witaminy z grupy B wspierające perystaltykę jelit.",
          },
          {
            emoji: "🍎",
            title: "Inulina i jabłko (pektyna)",
            claim: "FOS, selektywne karmienie dobrych bakterii, regulacja mikrobiomy",
            body: "Inulina to prebiotyk klasy FOS — selektywnie karmi dobre bakterie jelitowe, nie dając pożywki patogenom. Jabłko dostarcza pektyny, która reguluje konsystencję stolca w obie strony — zagęszcza luźny i rozluźnia zbity. Razem tworzą kompletny system regulacji mikrobiomu.",
          },
        ],
      },
      {
        id: "turkey",
        name: "Indyk z cukinią i marchewką",
        intro:
          "GUT z indykiem to najłagodniejszy wariant linii — idealny dla psów po antybiotykoterapii, przy ostrych problemach trawiennych lub jako pierwsza karma przy przejściu na dietę gotowaną. Cukinia i marchew dostarczają delikatnego błonnika który nie drażni wrażliwego jelita, a indyk jest jednym z najbardziej lekkostrawnych białek.",
        gallery: [
          { src: "/pouch-gut-turkey.png", alt: "NutriPaw GUT — Indyk z cukinią i marchewką (placeholder)" },
        ],
        ingredients:
          "Indyk 40% (pierś i udo bez skóry), cukinia 15%, marchew 12%, kasza jaglana 9%, jabłko 5% (obrane), inulina/FOS 0,5%, olej lniany zimnotłoczony 1%, premiks witaminowo-mineralny. Bez zbóż glutenowych. Bez strączków. Bez cukru.",
        superfoods: [
          {
            emoji: "🥒",
            title: "Cukinia",
            claim: "Zasadotwórcza, nawadnia treść pokarmową, łagodzi podrażnienia jelit",
            body: "Cukinia jest jednym z najbardziej łagodnych warzyw dla psiego przewodu pokarmowego — zasadotwórcza, bogata w wodę, delikatna dla wrażliwej błony śluzowej. Zawiera luteinę i zeaksantynę chroniące komórki jelitowe przed stresem oksydacyjnym. Idealna przy ostrych stanach zapalnych jelit.",
          },
          {
            emoji: "🥕",
            title: "Marchew",
            claim: "Beta-karoten, błonnik nierozpuszczalny, naturalna regulacja perystaltyki",
            body: "Marchew dostarcza błonnika nierozpuszczalnego który mechanicznie stymuluje perystaltykę jelit — naturalnie reguluje ruchy robaczkowe bez drażnienia błony śluzowej. Beta-karoten wspiera integralność nabłonka jelitowego. Naturalnie słodka — zwiększa smakowitość karmy u wybrednych psów.",
          },
          {
            emoji: "🦃",
            title: "Indyk — pierś i udo",
            claim: "Najbardziej lekkostrawne białko, idealne przy ostrych problemach trawiennych",
            body: "Indyk jest uznawany za jedno z najbardziej lekkostrawnych i hipoalergicznych białek dla psów. Niski poziom tłuszczu zmniejsza obciążenie trzustki. Naturalne źródło tryptofanu wpływającego na serotoninę — wspiera spokój i dobre samopoczucie psa z wrażliwym brzuszkiem.",
          },
        ],
      },
    ],
  },
];

export function getMenuProduct(slug: string): MenuProduct | undefined {
  return MENU_PRODUCTS.find((product) => product.slug === slug);
}

export function getMenuProductSlugs(): string[] {
  return MENU_PRODUCTS.map((product) => product.slug);
}
