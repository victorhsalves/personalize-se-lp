"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import SectionTitle from "./UI/SectionTitle";
import Card from "./UI/Card";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title={TESTIMONIALS.title} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {TESTIMONIALS.items.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-sm font-semibold text-[#1E1E1E]">
                  — {testimonial.name}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

