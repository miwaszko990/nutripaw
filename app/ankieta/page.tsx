import AnkietaEntry from "@/components/wizard/AnkietaEntry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankieta — NutriPaw",
  description: "Dopasuj plan żywieniowy dla swojego psa w kilku prostych krokach.",
};

export default function AnkietaPage() {
  return <AnkietaEntry />;
}
