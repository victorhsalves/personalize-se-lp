import { ABOUT, BRAND } from "@/lib/constants";
import SectionTitle from "@/components/UI/SectionTitle";
import Card from "@/components/UI/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-24 px-6 bg-[#F9F5F0]">
          <div className="container mx-auto max-w-4xl">
            <SectionTitle
              title={ABOUT.title}
              subtitle={ABOUT.description}
            />

            <div className="mt-12 space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">
                  Nossa Missão
                </h3>
                <p className="text-gray-600">
                  {BRAND.mission}
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">
                  Nossa Visão
                </h3>
                <p className="text-gray-600">
                  {BRAND.vision}
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">
                  Nosso Propósito
                </h3>
                <p className="text-gray-600">
                  {BRAND.purpose}
                </p>
              </Card>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#1E1E1E] mb-6 text-center">
                Nossos Valores
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ABOUT.values.map((value) => (
                  <Card key={value.title} className="p-6 text-center">
                    <h4 className="text-xl font-bold text-[#1E1E1E] mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

