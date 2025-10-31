"use client"

import { useState, useEffect, useRef } from "react"

export default function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Detectar dark mode dinámicamente
  useEffect(() => {
    const checkDarkMode = () =>
      setIsDark(document.documentElement.classList.contains("dark"))
    checkDarkMode()
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  // Detectar visibilidad de la sección
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Contadores animados (corregido el tipo)
  useEffect(() => {
    if (!isVisible) return

    const animateCount = (
      target: number,
      setter: React.Dispatch<React.SetStateAction<number>>,
      speed: number
    ) => {
      let current = 0
      const interval = setInterval(() => {
        if (current < target) {
          current++
          setter(current)
        } else clearInterval(interval)
      }, speed)
    }

    animateCount(88, setCount1, 30)
    animateCount(52, setCount2, 35)
    animateCount(80, setCount3, 32)
  }, [isVisible])

  return (
    <section
      id="problema"
      ref={sectionRef}
      className="min-h-screen py-20 sm:py-28 px-6 sm:px-10 lg:px-20 transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#0A1C2B" : "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Columna izquierda - Texto */}
        <div>
          <p
            className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 transition-colors duration-300"
            style={{ fontFamily: "var(--font-nunito)", color: isDark ? "#FFD54F" : "#C9A227" }}
          >
            Salvemos el azul del planeta
          </p>

          {/* ✅ TÍTULO en blanco en modo dark */}
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight transition-colors duration-300"
            style={{
              fontFamily: "var(--font-merriweather)",
              color: isDark ? "#FFFFFF" : "#111827",
            }}
          >
            La lucha contra la contaminación por plásticos empieza contigo
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 transition-colors duration-300"
            style={{
              fontFamily: "var(--font-nunito)",
              color: isDark ? "#B0BEC5" : "#374151",
            }}
          >
            Cada año, más de 11 millones de toneladas de plástico terminan en el océano (ONU Medioambiente, 2024). 
            Estos residuos asfixian arrecifes, playas y especies marinas: más del 40% de ellas ya ha tenido contacto con plástico (WWF).
          </p>

          <p
            className="text-base sm:text-lg leading-relaxed mb-10 sm:mb-12 transition-colors duration-300"
            style={{
              fontFamily: "var(--font-nunito)",
              color: isDark ? "#B0BEC5" : "#374151",
            }}
          >
            Las tortugas, por ejemplo, confunden bolsas con medusas o quedan atrapadas en redes abandonadas. 
            Cada pequeño cambio importa: reducir el plástico de un solo uso o participar en limpiezas costeras ayuda a que las tortugas vuelvan a nadar entre olas, no entre desechos.
          </p>

          {/* Barras de progreso */}
          <div className="space-y-5 sm:space-y-6" style={{ fontFamily: "var(--font-nunito)" }}>
            {/* Barra 1 */}
            <div className="relative">
              <div
                className="h-5 sm:h-6 rounded-full transition-all duration-[1500ms] ease-out relative overflow-hidden"
                style={{
                  width: isVisible ? "88%" : "0%",
                  backgroundColor: isDark ? "#4DD0E1" : "#00B4D8",
                }}
              >
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white font-semibold text-[10px] sm:text-xs">
                  Animales afectados
                </span>
              </div>
              <span
                className="absolute top-1/2 -translate-y-1/2 font-semibold text-sm ml-3"
                style={{
                  left: "90%",
                  color: isDark ? "#FFFFFF" : "#374151",
                }}
              >
                {count1}%
              </span>
            </div>

            {/* Barra 2 */}
            <div className="relative">
              <div
                className="h-5 sm:h-6 rounded-full transition-all duration-[1500ms] ease-out relative overflow-hidden"
                style={{
                  width: isVisible ? "52%" : "0%",
                  backgroundColor: isDark ? "#26C6DA" : "#009BBB",
                }}
              >
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white font-semibold text-[10px] sm:text-xs">
                  Microplásticos
                </span>
              </div>
              <span
                className="absolute top-1/2 -translate-y-1/2 font-semibold text-sm ml-3"
                style={{
                  left: "54%",
                  color: isDark ? "#FFFFFF" : "#374151",
                }}
              >
                {count2}%
              </span>
            </div>

            {/* Barra 3 */}
            <div className="relative">
              <div
                className="h-5 sm:h-6 rounded-full transition-all duration-[1500ms] ease-out relative overflow-hidden"
                style={{
                  width: isVisible ? "80%" : "0%",
                  backgroundColor: isDark ? "#00B4D8" : "#0077B6",
                }}
              >
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white font-semibold text-[10px] sm:text-xs">
                  Plástico en el mar
                </span>
              </div>
              <span
                className="absolute top-1/2 -translate-y-1/2 font-semibold text-sm ml-3"
                style={{
                  left: "82%",
                  color: isDark ? "#FFFFFF" : "#374151",
                }}
              >
                {count3}%
              </span>
            </div>
          </div>
        </div>

        {/* Columna derecha - Imagen */}
        <div className="relative mt-12 lg:mt-0">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/ProblemSection.jpg"
              alt="Contaminación plástica en el océano"
              className="w-full h-64 sm:h-80 md:h-[450px] lg:h-[550px] object-cover transition-opacity duration-300"
              style={{ opacity: isDark ? 0.9 : 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
