import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MenuPage from "@/components/menu/MenuPage";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nasze menu — NutriPaw",
  description:
    "Gotowana karma pełnoporcjowa NutriPaw — linie GLOW, VITAL i GUT dopasowane do potrzeb Twojego psa.",
};

export default function NaszeMenuPage() {
  return (
    <>
      <Navbar />
      <main>
        <MenuPage />
      </main>
      <Footer />
    </>
  );
}
