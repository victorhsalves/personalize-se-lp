"use client";

import { motion } from "framer-motion";
import { NAVIGATION, FINAL_CTA } from "@/lib/constants";
import Button from "./UI/Button";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-[#C97A65] text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          {FINAL_CTA.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl mb-4 opacity-90"
        >
          {FINAL_CTA.description}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg md:text-xl mb-8 opacity-90"
        >
          {FINAL_CTA.description2}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button href={NAVIGATION.contact} variant="secondary" size="lg">
            {FINAL_CTA.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

