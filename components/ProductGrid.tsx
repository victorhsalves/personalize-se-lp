"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";
import SectionTitle from "./UI/SectionTitle";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { NAVIGATION } from "@/lib/constants";

export default function ProductGrid() {
  return (
    <section id="products" className="py-24 px-6 bg-[#F9F5F0]">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle
          title={PRODUCTS.title}
          subtitle={PRODUCTS.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PRODUCTS.items.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

