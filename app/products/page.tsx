import type { Metadata } from "next";
import { PRODUCTS, NAVIGATION } from "@/lib/constants";
import SectionTitle from "@/components/UI/SectionTitle";
import Card from "@/components/UI/Card";
import Button from "@/components/UI/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductVideos from "@/components/ProductVideos";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://personalize-se.ilhasoftware.com";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Transforme ideias em realidade com nossos produtos personalizados em São Luís. Canecas personalizadas, canecas corporativas e canecas temáticas com qualidade impecável.",
  keywords: [
    "canecas personalizadas",
    "canecas corporativas",
    "canecas temáticas",
    "produtos personalizados",
    "orçamento personalização",
    "canecas personalizadas são luis",
    "canecas personalizadas slz",
    "produtos personalizados são luis",
    "produtos personalizados slz",
    "personalização são luis",
    "personalização slz",
  ],
  openGraph: {
    title: "Produtos | Personalize-se - São Luís",
    description: "Transforme ideias em realidade com nossos produtos personalizados em São Luís. Canecas personalizadas, canecas corporativas e canecas temáticas com qualidade impecável.",
    url: `${siteUrl}/products`,
  },
  alternates: {
    canonical: `${siteUrl}/products`,
  },
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle
              title={PRODUCTS.title}
              subtitle="Transforme ideias em realidade com nossos produtos personalizados."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {PRODUCTS.items.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="relative h-64 bg-gray-200 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <Button href={NAVIGATION.contact} size="sm" variant="outline" className="w-full">
                      {PRODUCTS.cta}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-[#F9F5F0]">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle
              title="Galeria de Produtos"
              subtitle="Confira alguns dos nossos trabalhos personalizados"
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
              {[
                { src: "/images/all-products/1.jpeg", alt: "Produto personalizado 1" },
                { src: "/images/all-products/2.jpg", alt: "Produto personalizado 2" },
                { src: "/images/all-products/3.jpeg", alt: "Produto personalizado 3" },
                { src: "/images/all-products/4.jpg", alt: "Produto personalizado 4" },
                { src: "/images/all-products/5.jpg", alt: "Produto personalizado 5" },
                { src: "/images/all-products/6.jpg", alt: "Produto personalizado 6" },
                { src: "/images/all-products/7.jpeg", alt: "Produto personalizado 7" },
                { src: "/images/all-products/8.jpg", alt: "Produto personalizado 8" },
                { src: "/images/all-products/9.jpg", alt: "Produto personalizado 9" },
              ].map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.src}
                  alt={product.alt}
                />
              ))}
            </div>
          </div>
        </section>

        <ProductVideos />
      </main>
      <Footer />
    </>
  );
}

