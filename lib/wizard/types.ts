export type Gender = "male" | "female";
export type AgeGroup = "puppy" | "adult" | "senior";
export type BodyCondition = "thin" | "ideal" | "overweight";
export type ActivityLevel = "calm" | "moderate" | "active";
export type ProductLine = "GLOW" | "VITAL" | "GUT";

export type WizardData = {
  dogName: string;
  gender: Gender | null;
  neutered: boolean | null;
  breed: string;
  ageGroup: AgeGroup | null;
  weight: number;
  bodyCondition: BodyCondition | null;
  activity: ActivityLevel | null;
  goals: string[];
  allergies: string[];
  ownerName: string;
  email: string;
  marketingConsent: boolean;
};

export const INITIAL_WIZARD_DATA: WizardData = {
  dogName: "",
  gender: null,
  neutered: null,
  breed: "",
  ageGroup: null,
  weight: 28,
  bodyCondition: null,
  activity: null,
  goals: [],
  allergies: [],
  ownerName: "",
  email: "",
  marketingConsent: false,
};

export const POPULAR_BREEDS = [
  "Labrador retriever",
  "Golden retriever",
  "Owczarek niemiecki",
  "Border collie",
  "Jamnik",
  "Mieszaniec",
  "Nie wiem",
];

export const GOAL_OPTIONS = [
  { id: "skin", label: "Skóra i sierść" },
  { id: "digestion", label: "Trawienie i jelita" },
  { id: "weight", label: "Kontrola wagi" },
  { id: "joints", label: "Stawy i mobilność" },
  { id: "energy", label: "Energia i witalność" },
  { id: "immunity", label: "Odporność" },
];

export const ALLERGY_OPTIONS = [
  { id: "chicken", label: "Kurczak" },
  { id: "gluten", label: "Zboża z glutenem" },
  { id: "eggs", label: "Jajka" },
  { id: "beef", label: "Wołowina" },
  { id: "dairy", label: "Nabiał" },
  { id: "none", label: "Brak znanych alergii" },
];

export type LeadPayload = WizardData & {
  recommendedLine: ProductLine;
  recommendedFlavor: string;
  dailyPortionG: number;
  dailyPrice: number;
  submittedAt: string;
};

export function recommendPlan(data: WizardData): {
  line: ProductLine;
  flavor: string;
  dailyPortionG: number;
  dailyPrice: number;
  monthlyPrice: number;
  focus: string;
} {
  const goals = data.goals;

  let line: ProductLine = "GLOW";
  if (goals.includes("digestion")) line = "GUT";
  else if (goals.includes("joints") || goals.includes("energy")) line = "VITAL";
  else if (goals.includes("skin") || goals.includes("immunity")) line = "GLOW";
  else if (goals.includes("weight")) line = "VITAL";

  const hasChickenAllergy = data.allergies.includes("chicken") && !data.allergies.includes("none");
  const hasBeefAllergy = data.allergies.includes("beef") && !data.allergies.includes("none");

  const flavors: Record<ProductLine, string[]> = {
    GLOW: hasBeefAllergy ? ["Kurczak i batat"] : ["Wołowina i batat", "Kurczak i batat"],
    VITAL: hasChickenAllergy ? ["Wołowina i batat"] : ["Kurczak i małże", "Wołowina i batat"],
    GUT: hasChickenAllergy ? ["Indyk i dynia"] : ["Kurczak i dynia", "Indyk i dynia"],
  };

  const flavor = flavors[line][0];
  const basePortion = data.weight * (data.activity === "active" ? 11 : data.activity === "calm" ? 8 : 9);
  const dailyPortionG = Math.round(Math.min(450, Math.max(180, basePortion)) / 10) * 10;
  const dailyPrice = 14.9;
  const monthlyPrice = Math.round(dailyPrice * 30);

  const focusMap: Record<ProductLine, string> = {
    GLOW: "skóra, sierść i odporność",
    VITAL: "stawy, energia i mobilność",
    GUT: "trawienie i zdrowe jelita",
  };

  return {
    line,
    flavor,
    dailyPortionG,
    dailyPrice,
    monthlyPrice,
    focus: focusMap[line],
  };
}

export function ageLabel(age: AgeGroup | null): string {
  if (age === "puppy") return "Szczeniak";
  if (age === "senior") return "Senior";
  return "Dorosły";
}

export function activityLabel(activity: ActivityLevel | null): string {
  if (activity === "calm") return "spokojny";
  if (activity === "active") return "bardzo aktywny";
  return "umiarkowany";
}

export function bodyLabel(body: BodyCondition | null): string {
  if (body === "thin") return "szczupły";
  if (body === "overweight") return "nadwaga";
  return "idealna sylwetka";
}
