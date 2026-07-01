import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/menu/ProductDetail";
import Navbar from "@/components/Navbar";
import { getMenuProduct, getMenuProductSlugs } from "@/lib/menu/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getMenuProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getMenuProduct(slug);
  if (!product) return { title: "Produkt — NutriPaw" };

  return {
    title: `${product.detailTitle} — NutriPaw`,
    description: product.detailIntro,
  };
}

export default async function MenuProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getMenuProduct(slug);
  if (!product) notFound();

  const { Icon: _icon, ...rest } = product;
  const productData = {
    ...rest,
    superfoods: rest.flavors?.length ? [] : rest.superfoods,
  };

  return (
    <>
      <Navbar />
      <main>
        <ProductDetail product={productData} />
      </main>
      <Footer />
    </>
  );
}
