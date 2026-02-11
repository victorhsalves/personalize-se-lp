"use client";

import { motion } from "framer-motion";
import { PRICING, NAVIGATION } from "@/lib/constants";
import Button from "./UI/Button";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-[#F9F5F0]">
      <div className="container mx-auto max-w-4xl text-center">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-10 text-center"
        > */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-6">
            Investimento
          </h2>
          {/* <p className="text-gray-500 mb-10">
            Preço transparente e sem surpresas.
          </p> */}

          <div className="mb-8">
            <div className="text-4xl font-extrabold text-gray-900 mb-2">
              R$ 40,00
            </div>
            <p className="text-sm text-gray-500 mb-2">por unidade</p>
            <p className="text-sm text-gray-500">Pedidos individuais</p>
          </div>

          <div className="my-8 border-t border-gray-200"></div>

          <div className="mb-8">
            <span className="bg-[#C97A65] text-white px-4 py-1 rounded-full text-sm inline-block mb-4">
              Melhor escolha
            </span>
            <div className="text-4xl font-extrabold text-[#C97A65] mb-2">
              R$ 35,00
            </div>
            <p className="text-sm text-gray-500 mb-2">
              por unidade a partir de 5 unidades
            </p>
            <p className="text-sm text-green-600 mt-2">
              Economize R$ 5 por caneca
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-8 mb-6">
            {PRICING.note}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6"
          >
            <Button href={NAVIGATION.contact} size="lg">
              Quero meu orçamento gratuito
            </Button>
          </motion.div>
      </div>
    </section>
  );
}

