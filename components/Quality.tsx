"use client";

import { motion } from "framer-motion";
import { QUALITY } from "@/lib/constants";
import Card from "./UI/Card";

export default function Quality() {
  return (
    <section id="quality" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-6"
          >
            {QUALITY.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-700 mb-8"
          >
            {QUALITY.description}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            {QUALITY.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="text-green-600 text-xl">✔</span>
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-700 mb-2"
          >
            {QUALITY.conclusion}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg md:text-xl text-[#C97A65] font-semibold"
          >
            {QUALITY.conclusion2}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

