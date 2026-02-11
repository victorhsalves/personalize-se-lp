"use client";

import { motion } from "framer-motion";
import { HERO, NAVIGATION } from "@/lib/constants";
import Button from "./UI/Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-24 px-6 bg-[#F9F5F0] text-center pt-32">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1E1E1E] mb-6 max-w-5xl leading-tight"
      >
        {HERO.title}{" "}
        <span className="text-[#C97A65]">{HERO.titleHighlight}</span>.
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mb-2"
      >
        {HERO.description}
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8"
      >
        {HERO.description2}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col gap-2 mb-8"
      >
        {HERO.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-700">
            <span className="text-green-600 text-xl">✔</span>
            <span className="text-base md:text-lg">{benefit}</span>
          </div>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button href={NAVIGATION.contact} size="lg">
          {HERO.cta}
        </Button>
      </motion.div>
    </section>
  );
}

