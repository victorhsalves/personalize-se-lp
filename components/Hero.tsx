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
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1E1E1E] mb-6 max-w-4xl"
      >
        {HERO.title}{" "}
        <span className="text-[#C97A65]">{HERO.titleHighlight}</span>.
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mb-8"
      >
        {HERO.description}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Button href={NAVIGATION.contact} size="lg">
          {HERO.cta}
        </Button>
      </motion.div>
    </section>
  );
}

