import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import WhyNutriPaw from "@/components/WhyNutriPaw";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div style={{ height: 1, background: "rgba(29,61,47,0.1)", maxWidth: 1100, margin: "0 auto" }} />
        <HowItWorks />
        <Products />
        <WhyNutriPaw />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
