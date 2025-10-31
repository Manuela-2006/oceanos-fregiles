"use client";

export default function FinalSection() {
  // 👉 Función para hacer scroll suave al Hero Section
  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center text-white py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 transition-colors duration-300"
      style={{
        backgroundImage: "url('/FinalSection.jpg')", // Ajusta la ruta si es necesario
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/75 transition-colors duration-300" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        {/* Subtítulo */}
        <p
          className="text-sm sm:text-base md:text-lg text-yellow-400 dark:text-yellow-300 mb-3 font-semibold tracking-wide transition-colors duration-300"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Escucha la voz del mar
        </p>

        {/* Título principal */}
        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 leading-snug sm:leading-tight transition-colors duration-300"
          style={{ fontFamily: "var(--font-merriweather)" }}
        >
          Cada ola espera tu respuesta
        </h1>

        {/* Texto descriptivo */}
        <p
          className="text-base sm:text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-8 sm:mb-10 transition-colors duration-300"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          El océano habla en silencio, pidiendo una oportunidad. Tú puedes ser
          parte del cambio que devuelva la calma a sus aguas.
        </p>

        {/* Botón estilo FloatSection */}
        <button
          onClick={scrollToHero}
          className="relative px-10 py-4 text-white font-semibold bg-[#C9A227] rounded-[15px] overflow-hidden transition-transform duration-300 hover:scale-105"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          <span className="relative z-10">Sumate al movimiento</span>
          <span className="absolute inset-1 border border-white rounded-[12px] pointer-events-none"></span>
        </button>
      </div>
    </section>
  );
}
