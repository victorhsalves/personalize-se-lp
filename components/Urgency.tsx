"use client";

import { motion } from "framer-motion";
import { URGENCY } from "@/lib/constants";
import Card from "./UI/Card";

export default function Urgency() {
  return (
    <section id="urgency" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 md:p-10 bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-400">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-800 mb-3 font-medium">
                  {URGENCY.description}
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-3">
                  {URGENCY.description2}
                </p>
                <p className="text-base md:text-lg text-gray-800 font-semibold">
                  {URGENCY.description3}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

