"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import SectionTitle from "./UI/SectionTitle";
import Card from "./UI/Card";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Testimonials() {
  const handleGoogleStoreClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "external_link",
        event_label: "Google Store - Ver mais feedbacks",
        link_url: "https://share.google/dws5QxobxqiVfniya",
      });
    }
  };

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
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  {`"${testimonial.text}"`}
                </p>
                <p className="text-sm font-semibold text-[#1E1E1E]">
                  — {testimonial.name}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://share.google/dws5QxobxqiVfniya"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleGoogleStoreClick}
            className="inline-flex items-center gap-2 text-[#C97A65] hover:text-[#A66B5B] font-medium transition-colors duration-200 underline underline-offset-4 hover:underline-offset-2"
          >
            Veja mais feedbacks e informações da nossa loja no Google
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
