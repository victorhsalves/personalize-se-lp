"use client";

import { useState, FormEvent } from "react";
import { CONTACT } from "@/lib/constants";
import SectionTitle from "@/components/UI/SectionTitle";
import Card from "@/components/UI/Card";
import Button from "@/components/UI/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/components/UI/Toast";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [catalogWhatsapp, setCatalogWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRequestingCatalog, setIsRequestingCatalog] = useState(false);
  const { showToast } = useToast();

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    const limitedNumbers = numbers.slice(0, 11);
    if (limitedNumbers.length <= 2) {
      return limitedNumbers;
    } else if (limitedNumbers.length <= 7) {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`;
    } else {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 7)}-${limitedNumbers.slice(7)}`;
    }
  };

  const trackConversion = (action: string = "contact") => {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    if (typeof window !== "undefined" && (window as any).gtag) {
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17725341926/zszPCOzmxMIbEOaBjYRC",
      });
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      (window as any).gtag("event", "conversion", {
        event_category: "engagement",
        event_label: action,
        value: 1,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: name,
          email: email,
          mensagem: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar dados");
      }

      trackConversion("form_submit");

      setName("");
      setEmail("");
      setMessage("");
      
      showToast("Mensagem enviada com sucesso! Entraremos em contato em breve.", "success");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      showToast("Erro ao enviar mensagem. Tente novamente.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    trackConversion("whatsapp_click");
  };

  const handleCatalogRequest = async () => {
    if (!catalogWhatsapp.trim()) {
      return;
    }

    setIsRequestingCatalog(true);

    try {
      const response = await fetch("/api/catalog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          whatsapp: catalogWhatsapp,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar dados");
      }

      trackConversion("catalog_request");

      setCatalogWhatsapp("");
      
      showToast("Solicitação enviada com sucesso! Entraremos em contato em breve.", "success");
    } catch (error) {
      console.error("Erro ao solicitar catálogo:", error);
      showToast("Erro ao solicitar catálogo. Tente novamente.", "error");
    } finally {
      setIsRequestingCatalog(false);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-24 px-6 bg-[#F9F5F0]">
          <div className="container mx-auto max-w-4xl">
            <SectionTitle
              title={CONTACT.title}
              subtitle={CONTACT.description}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">
                  Informações de Contato
                </h3>
                <div className="space-y-4 w-full">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-[#C97A65] hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Telefone</p>
                    <a
                      href={`tel:${CONTACT.phone}`}
                      className="text-[#C97A65] hover:underline"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                  <div className="w-full">
                    <Button
                      href={CONTACT.whatsapp}
                      variant="primary"
                      className="w-full"
                      onClick={handleWhatsAppClick}
                    >
                      Falar no WhatsApp
                    </Button>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-3 text-center">
                      Ou receba nosso catálogo completo + tabela de preços via WhatsApp
                    </p>
                    <div className="space-y-3">
                      <input
                        type="tel"
                        id="catalog-whatsapp"
                        name="catalog-whatsapp"
                        value={catalogWhatsapp}
                        onChange={(e) => setCatalogWhatsapp(formatPhoneNumber(e.target.value))}
                        placeholder="(98) 99999-9999"
                        maxLength={15}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C97A65] focus:border-transparent"
                      />
                      <Button
                        type="button"
                        variant="secondary"
                        className="w-full"
                        onClick={handleCatalogRequest}
                        disabled={!catalogWhatsapp.trim() || isRequestingCatalog}
                      >
                        {isRequestingCatalog ? "Enviando..." : "Receber Catálogo"}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">
                  Envie sua Mensagem
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C97A65] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C97A65] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C97A65] focus:border-transparent"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
