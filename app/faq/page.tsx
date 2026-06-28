import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "FAQ — NutriPaw",
  description: "Najczęściej zadawane pytania o NutriPaw — skład, subskrypcja, dostawa i zdrowie psa.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
