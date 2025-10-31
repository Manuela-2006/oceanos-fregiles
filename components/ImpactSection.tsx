"use client";

export default function ImpactSection() {
  return (
    <section
      id="impacto"
      className="relative min-h-screen overflow-hidden z-10 pt-36 sm:pt-44 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-20"
    >
      {/* 🎥 Fondo de video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/13627359_2160_3840_50fps.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        {/* Capa de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 dark:from-black/60 dark:via-black/40 dark:to-black/70 transition-colors duration-300" />
      </div>

      {/* 🌀 Divisor superior */}
      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden z-10">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L0,60 Q200,90 400,60 T800,60 T1200,60 L1200,0 Z"
            className="fill-gray-100 dark:fill-gray-800 transition-colors duration-300"
          />
        </svg>
      </div>

      {/* 📄 Contenido principal */}
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Texto */}
        <div className="text-white dark:text-gray-100 text-center lg:text-left">
          <p
            className="font-semibold text-base sm:text-lg mb-4 sm:mb-5 drop-shadow-lg"
            style={{ fontFamily: "var(--font-nunito)", color: "#C9A227" }}
          >
            Descubre el impacto oculto
          </p>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight drop-shadow-2xl"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            El impacto del plástico en nuestras vidas
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed text-blue-50 dark:text-gray-200 drop-shadow-md"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            El plástico no desaparece: vuelve a nosotros.  
            Se han encontrado microplásticos en el agua, el aire y hasta en el cuerpo humano.  
            Este impacto silencioso amenaza nuestra salud y la del planeta.
          </p>
        </div>

        {/* Imagen */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 w-full max-w-md sm:max-w-lg lg:max-w-none">
            <img
              src="/SeccionImpacto.jpg"
              alt="Plástico en el océano"
              className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
