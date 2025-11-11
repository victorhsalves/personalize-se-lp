"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { NAVIGATION, BRAND } from "@/lib/constants";
import Button from "./UI/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: NAVIGATION.home },
    { label: "Sobre", href: NAVIGATION.about },
    { label: "Produtos", href: NAVIGATION.products },
    { label: "Contato", href: NAVIGATION.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={NAVIGATION.home} className="text-2xl font-bold text-[#1E1E1E]">
              {BRAND.name}
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-[#C97A65] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <Button href={NAVIGATION.contact} size="sm">
              Orçamento
            </Button>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-[#1E1E1E] transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#1E1E1E] transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#1E1E1E] transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-[#C97A65] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button href={NAVIGATION.contact} size="sm" className="w-full">
                Orçamento
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

