"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE } from "@/lib/constants";
import Card from "./UI/Card";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-8"
          >
            {WHY_CHOOSE.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-700 mb-6 font-semibold"
          >
            Você já passou por isso?
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {WHY_CHOOSE.painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="px-2 py-6 text-center">
                  <div className="flex items-center justify-center gap-2">

                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                  <p className="text-gray-700 font-medium">
                    {/* svg de warning triangle*/}
                    {point}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl md:text-3xl text-[#C97A65] font-bold mb-4"
          >
            {WHY_CHOOSE.solution}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-700 mb-2"
          >
            {WHY_CHOOSE.solutionDescription}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-700 font-semibold"
          >
            {WHY_CHOOSE.solutionDescription2}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

