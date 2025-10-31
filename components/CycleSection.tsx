export default function CycleSection() {
  return (
    <section
      id="Viaje"
      className="min-h-[70vh] bg-gray-100 dark:bg-gray-800 py-12 px-6 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12 transition-colors duration-300"
          style={{ fontFamily: "var(--font-merriweather)" }}
        >
          De la fábrica a la tortuga
        </h2>

        {/* Contenedor adaptable */}
        <div className="flex flex-col md:grid md:items-start md:gap-8 md:[grid-template-columns:1fr_auto_1fr_auto_1fr]">
          {/* Producción */}
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <img
              src="/factory-svgrepo-com (1).svg"
              alt="Fábrica"
              className="w-20 h-20 mb-4 dark:opacity-90 transition-opacity duration-300"
            />
            <h3
              className="text-xl font-bold text-amber-500 dark:text-amber-400 mb-2"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Producción y consumo
            </h3>
            <p
              className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              El plástico se fabrica a partir del petróleo. Cada año se producen más de 400 millones de toneladas, y gran parte se usa solo una vez antes de desecharse (ONU Medioambiente, 2024).
            </p>
          </div>

          {/* Línea curva (horizontal desktop / flecha vertical móvil) */}
          <div className="flex justify-center md:items-start md:pt-8">
            {/* Desktop */}
            <svg
              width="80"
              height="40"
              viewBox="0 0 80 40"
              className="hidden md:block text-cyan-500 dark:text-cyan-400 transition-colors duration-300"
            >
              <path
                d="M 0 20 Q 40 5, 80 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
            {/* Móvil */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="md:hidden text-cyan-500 dark:text-cyan-400 transition-colors duration-300"
            >
              <path
                d="M 20 0 L 20 40 M 20 40 L 15 32 M 20 40 L 25 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Desecho */}
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <img
              src="/trash-bin-minimalistic-svgrepo-com.svg"
              alt="Basura"
              className="w-20 h-20 mb-4 dark:opacity-90 transition-opacity duration-300"
            />
            <h3
              className="text-xl font-bold text-amber-500 dark:text-amber-400 mb-2"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Desecho y dispersión
            </h3>
            <p
              className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Solo el 9 % del plástico mundial se recicla. El resto acaba en vertederos, ríos o se dispersa con el viento y la lluvia hasta llegar al mar (OCDE, 2023).
            </p>
          </div>

          {/* Línea curva */}
          <div className="flex justify-center md:items-start md:pt-8">
            {/* Desktop */}
            <svg
              width="80"
              height="40"
              viewBox="0 0 80 40"
              className="hidden md:block text-cyan-500 dark:text-cyan-400 transition-colors duration-300"
            >
              <path
                d="M 0 20 Q 40 5, 80 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
            {/* Móvil */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="md:hidden text-cyan-500 dark:text-cyan-400 transition-colors duration-300"
            >
              <path
                d="M 20 0 L 20 40 M 20 40 L 15 32 M 20 40 L 25 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Océano */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/turtle-svgrepo-com (1).svg"
              alt="Tortuga"
              className="w-20 h-20 mb-4 dark:opacity-90 transition-opacity duration-300"
            />
            <h3
              className="text-xl font-bold text-amber-500 dark:text-amber-400 mb-2"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Océano y vida marina
            </h3>
            <p
              className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              En el océano, el plástico se fragmenta en microplásticos que son ingeridos por peces, tortugas y aves. Finalmente, muchos regresan a nosotros a través de la cadena alimentaria (FAO, 2022).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
