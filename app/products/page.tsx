import { PRODUCTS, NAVIGATION } from "@/lib/constants";
import SectionTitle from "@/components/UI/SectionTitle";
import Card from "@/components/UI/Card";
import Button from "@/components/UI/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle
              title={PRODUCTS.title}
              subtitle={PRODUCTS.description}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {PRODUCTS.items.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="relative h-64 bg-gray-200">
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
                      Solicitar Orçamento
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

