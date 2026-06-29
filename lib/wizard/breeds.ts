/** Rasy specjalne — zawsze na górze listy */
export const SPECIAL_BREEDS = ["Mieszaniec", "Ze schroniska", "Nie wiem"] as const;

/** Skróty pod polem wyszukiwania */
export const POPULAR_BREEDS = [
  "Labrador retriever",
  "Golden retriever",
  "Owczarek niemiecki",
  "Border collie",
  "Jamnik",
  "Bulldog francuski",
] as const;

const BREED_CATALOG = [
  "Affenpinscher",
  "Airedale terrier",
  "Akita",
  "Alaskan malamute",
  "American staffordshire terrier",
  "Basenji",
  "Basset hound",
  "Beagle",
  "Bernardyn",
  "Bernski pies pasterski",
  "Bichon frise",
  "Border collie",
  "Border terrier",
  "Boxer",
  "Buldog angielski",
  "Buldog francuski",
  "Bulterier",
  "Bulterier miniaturowy",
  "Cavalier king charles spaniel",
  "Chart afgański",
  "Chart rosyjski",
  "Chihuahua",
  "Chow chow",
  "Cocker spaniel",
  "Collie",
  "Corgi pembroke",
  "Corgi welsh",
  "Dalmatyńczyk",
  "Doberman",
  "Dog niemiecki",
  "Golden retriever",
  "Greyhound",
  "Griffon",
  "Husky syberyjski",
  "Irish setter",
  "Irish wolfhound",
  "Jamnik",
  "Jack russell terrier",
  "Kerry blue terrier",
  "Komondor",
  "Kooikerhondje",
  "Labrador retriever",
  "Lagotto romagnolo",
  "Leonberger",
  "Lhasa apso",
  "Maltańczyk",
  "Mastif",
  "Mops",
  "Mudi",
  "Newfoundland",
  "Owczarek australijski",
  "Owczarek belgijski",
  "Owczarek holenderski",
  "Owczarek niemiecki",
  "Owczarek szetlandzki",
  "Owczarek z południowej Rusi",
  "Papillon",
  "Pekińczyk",
  "Pointer",
  "Pomeranian",
  "Pudel",
  "Pudel miniaturowy",
  "Pudel toy",
  "Rottweiler",
  "Samoyed",
  "Shiba inu",
  "Shih tzu",
  "Snaucer",
  "Snaucer miniaturowy",
  "Spaniel tybetański",
  "Springer spaniel",
  "Staffordshire bull terrier",
  "Sznaucer olbrzy",
  "Sznaucer średni",
  "Terier irlandzki",
  "Terier szkocki",
  "West highland white terrier",
  "Whippet",
  "Yorkshire terrier",
] as const;

const SORTED_BREEDS = Array.from(new Set(BREED_CATALOG)).sort((a, b) => a.localeCompare(b, "pl"));

export function filterBreeds(query: string): string[] {
  const q = normalize(query.trim());

  if (!q) {
    return [...SPECIAL_BREEDS, ...SORTED_BREEDS];
  }

  const matches = SORTED_BREEDS.filter((breed) => normalize(breed).includes(q));
  const specials = SPECIAL_BREEDS.filter((breed) => normalize(breed).includes(q));
  const rest = matches.filter((breed) => !specials.includes(breed));

  return [...specials, ...rest];
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function isValidBreed(value: string) {
  return value.trim().length >= 2;
}
