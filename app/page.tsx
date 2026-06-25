import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import Ingredients from "@/components/Ingredients";
import WhyNutriPaw from "@/components/WhyNutriPaw";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="h-px bg-[rgba(29,61,47,0.1)] max-w-[1100px] mx-auto" />
        <HowItWorks />
        <Products />
        <Ingredients />
        <WhyNutriPaw />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
