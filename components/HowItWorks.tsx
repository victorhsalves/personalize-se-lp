"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/constants";
import Card from "./UI/Card";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#F9F5F0]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-12"
          >
            {HOW_IT_WORKS.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-[#C97A65] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-[#1E1E1E]">
            {HOW_IT_WORKS.conclusion}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

