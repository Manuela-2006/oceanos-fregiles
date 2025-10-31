"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <header className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav
        className="backdrop-blur-md rounded-full shadow-lg px-6 sm:px-10 py-3 flex items-center justify-between transition-colors duration-300"
        style={{
          fontFamily: "var(--font-nunito)",
          backgroundColor: isDark ? "#0A1C2B" : "rgba(255, 255, 255, 0.9)",
          border: isDark ? "1px solid #1F3B44" : "1px solid rgba(0,0,0,0.05)",
        }}
      >
        {/* LOGO */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/logo.svg"
            alt="Logo tortuga"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-all duration-300"
            style={{ filter: isDark ? "brightness(0) invert(1)" : "none" }}
          />
          <span
            className="hidden sm:block text-lg font-bold whitespace-nowrap"
            style={{ color: isDark ? "#FFFFFF" : "#134e4a" }} // 👈 Texto blanco en dark
          >
            Océanos Frágiles
          </span>
        </div>

        {/* LINKS + TOGGLE agrupados */}
        <div className="flex items-center gap-6 sm:gap-8">
          {/* LINKS DESKTOP */}
          <div className="hidden lg:flex gap-10 text-base font-semibold ml-auto">
            {["Problema", "Soluciones", "Impacto", "Viaje"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-300 hover:opacity-80"
                style={{ color: isDark ? "#FFFFFF" : "#134e4a" }} // 👈 Blanco en dark
              >
                {item}
              </a>
            ))}
          </div>

          {/* TOGGLE DARK MODE */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="relative w-14 h-8 rounded-full transition-colors duration-300 flex-shrink-0"
            style={{ backgroundColor: isDark ? "#26C6DA" : "#d1d5db" }}
            aria-label="Toggle dark mode"
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-transform flex items-center justify-center ${
                isDark ? "translate-x-7" : "translate-x-1"
              }`}
            >
              {isDark ? (
                <svg className="w-4 h-4" style={{ color: "#0A1C2B" }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>

          {/* BOTÓN HAMBURGUESA */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke={isDark ? "#FFFFFF" : "#134e4a"} // 👈 Blanco en dark
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      {menuOpen && (
        <div
          className="lg:hidden mt-3 rounded-2xl shadow-lg py-4 flex flex-col gap-3 text-center backdrop-blur-md transition-all duration-300"
          style={{
            backgroundColor: isDark ? "rgba(10,28,43,0.95)" : "rgba(255,255,255,0.95)",
            border: isDark ? "1px solid #1F3B44" : "1px solid rgba(0,0,0,0.05)",
          }}
        >
          {["Problema", "Soluciones", "Impacto", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-semibold transition-colors duration-300 hover:opacity-80"
              style={{ color: isDark ? "#FFFFFF" : "#134e4a" }} // 👈 Blanco en dark
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
