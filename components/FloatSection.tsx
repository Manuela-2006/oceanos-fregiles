"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormExample from "./ui/FormExample";

export default function FloatSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        relative z-30 
        flex justify-center 
        mt-[-2rem] sm:mt-[-3rem] md:mt-[-4rem] lg:-mt-40 
        mb-[-40px] sm:mb-[-60px] md:mb-[-80px] lg:mb-[-100px]
      "
    >
      <div
        className="
          w-[92%] sm:w-[90%] lg:w-4/5 
          bg-white dark:bg-gray-800 
          rounded-2xl border border-[#C9A227] 
          py-10 sm:py-12 md:py-14 lg:py-16 
          px-6 sm:px-8 md:px-10 lg:px-12 
          grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-center 
          transition-all duration-300 
          shadow-xl dark:shadow-2xl dark:shadow-gray-900/50
        "
      >
        {/* Columna 1 */}
        <div className="text-center lg:text-left">
          <p
            className="font-semibold text-sm mb-3 transition-colors duration-300"
            style={{ fontFamily: "var(--font-nunito)", color: "#C9A227" }}
          >
            El viaje del plástico
          </p>
          <h3
            className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-snug transition-colors duration-300"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            Descubre el impacto oculto
          </h3>
        </div>

        {/* Columna 2 */}
        <div className="flex justify-center lg:justify-start">
          <p
            className="text-gray-800 dark:text-gray-300 leading-relaxed text-base text-center lg:text-left max-w-[480px] transition-colors duration-300"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Cada trozo de plástico tiene una historia. Desde su creación hasta su
            llegada al mar.
          </p>
        </div>

        {/* Columna 3 */}
        <div className="flex justify-center lg:justify-end">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button
                className="relative px-8 sm:px-10 py-3 sm:py-4 text-white font-semibold bg-[#C9A227] rounded-[15px] overflow-hidden transition-transform duration-300 hover:scale-105"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                <span className="relative z-10">Ayuda al mar</span>
                <span className="absolute inset-1 border border-white rounded-[12px] pointer-events-none"></span>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl p-0 bg-transparent border-0">
              <DialogHeader>
                <DialogTitle className="sr-only">
                  Formulario de ayuda al mar
                </DialogTitle>
              </DialogHeader>
              <FormExample />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
