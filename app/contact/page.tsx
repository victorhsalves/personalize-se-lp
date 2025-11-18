"use client";

import { useState, FormEvent } from "react";
import { CONTACT } from "@/lib/constants";
import SectionTitle from "@/components/UI/SectionTitle";
import Card from "@/components/UI/Card";
import Button from "@/components/UI/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const trackConversion = () => {
    // Disparar evento de conversão do Google Ads
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    if (typeof window !== "undefined" && (window as any).gtag) {
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17725341926/zszPCOzmxMIbEOaBjYRC",
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    trackConversion();

    const whatsappMessage = `Olá! Me chamo ${name} e vim pelo site. ${message}. ${email}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5598920021053?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsAppClick = () => {
    trackConversion();
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
                <div className="space-y-4">
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
                  <div className="pt-4">
                    <Button
                      href={CONTACT.whatsapp}
                      variant="primary"
                      className="w-full"
                      onClick={handleWhatsAppClick}
                    >
                      Falar no WhatsApp
                    </Button>
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
                  <Button type="submit" variant="primary" className="w-full">
                    Enviar Mensagem
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
