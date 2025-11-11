import type { Metadata } from "next";
import StructuredData from "@/components/SEO/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://personalize-se.ilhasoftware.com";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato conosco em São Luís! Solicite um orçamento ou tire suas dúvidas. Estamos prontos para transformar suas ideias em realidade!",
  keywords: [
    "contato personalize-se",
    "orçamento produtos personalizados",
    "whatsapp personalize-se",
    "fale conosco",
    "contato personalize-se são luis",
    "contato personalize-se slz",
    "orçamento são luis",
    "orçamento slz",
  ],
  openGraph: {
    title: "Contato | Personalize-se - São Luís",
    description: "Entre em contato conosco em São Luís! Solicite um orçamento ou tire suas dúvidas. Estamos prontos para transformar suas ideias em realidade!",
    url: `${siteUrl}/contact`,
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData type="LocalBusiness" />
      {children}
    </>
  );
}

