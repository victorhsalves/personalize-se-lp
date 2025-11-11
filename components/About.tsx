"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/lib/constants";
import SectionTitle from "./UI/SectionTitle";
import Card from "./UI/Card";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle
          title={ABOUT.title}
          subtitle={ABOUT.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {ABOUT.values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 text-center h-full">
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

