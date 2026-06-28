import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import Ingredients from "@/components/Ingredients";
import WhyNutriPaw from "@/components/WhyNutriPaw";
import Comparison from "@/components/Comparison";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Products />
        <Ingredients />
        <WhyNutriPaw />
        <Comparison />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
