import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StructuredData from "@/components/SEO/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://personalize-se.ilhasoftware.com";

export const metadata: Metadata = {
  title: {
    absolute: "Personalize-se | Produtos Personalizados em São Luís",
  },
  description: "Presentes únicos em São Luís, feitos com personalidade. Canecas, camisas e muito mais — cada detalhe pensado pra ser tão especial quanto quem vai receber.",
  openGraph: {
    title: "Personalize-se | Produtos Personalizados em São Luís",
    description: "Presentes únicos em São Luís, feitos com personalidade. Canecas, camisas e muito mais — cada detalhe pensado pra ser tão especial quanto quem vai receber.",
    url: siteUrl,
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "pW86tmet3qg6W6xyBl72X8dii-JWiYyn-xg-RzvZ83k",
  },
  other: {
    "google-site-verification": "pW86tmet3qg6W6xyBl72X8dii-JWiYyn-xg-RzvZ83k",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData type="Organization" />
      <StructuredData type="WebSite" />
      <StructuredData type="LocalBusiness" />
      <Header />
      <main>
        <Hero />
        <About />
        <ProductGrid />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
