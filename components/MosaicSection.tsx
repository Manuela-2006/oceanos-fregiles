"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MosaicSection() {
  const [isDark, setIsDark] = useState(false);

  // 🌙 Detectar dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative z-20 pt-32 sm:pt-40 md:pt-52 lg:pt-60 pb-16 sm:pb-20 transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#0A1C2B" : "#ffffff" }}
    >
      {/* 🧩 Contenedor principal con mismo padding lateral que ImpactSection */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 px-6 sm:px-8">
        
        {/* 🖼️ Imagen sin marco ni sombra */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-full">
            <Image
              src={isDark ? "/rombos-dark.jpg" : "/rombos.jpg"}
              alt="Mosaico de rombos del océano"
              width={1600}
              height={1200}
              className="w-full h-auto object-contain max-h-[420px] sm:max-h-[480px] lg:max-h-[520px] transition-opacity duration-300"
              priority
            />
          </div>
        </div>

        {/* 🧭 Texto */}
        <div className="w-full text-center lg:text-left px-2 sm:px-6 lg:px-8 flex flex-col justify-center">
          <p
            className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 transition-colors duration-300"
            style={{
              fontFamily: "var(--font-nunito)",
              color: isDark ? "#FFD54F" : "#C9A227",
            }}
          >
            Un futuro azul es posible
          </p>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 transition-colors duration-300"
            style={{
              fontFamily: "var(--font-merriweather)",
              color: isDark ? "#E0F7FA" : "#111827",
            }}
          >
            La nueva generación <br className="hidden xl:block" />
            que protege el mar
          </h2>

          <p
            className="text-lg sm:text-xl leading-relaxed transition-colors duration-300 max-w-xl mx-auto lg:mx-0"
            style={{
              fontFamily: "var(--font-nunito)",
              color: isDark ? "#B0BEC5" : "#374151",
            }}
          >
            Cada vez más personas, comunidades y proyectos se unen para cambiar la historia de los océanos. Este movimiento global demuestra que la conciencia puede convertirse en acción y que un futuro limpio comienza con quienes creen en él.
          </p>
        </div>
      </div>
    </section>
  );
}
