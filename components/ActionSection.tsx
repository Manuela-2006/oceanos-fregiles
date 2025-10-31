"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ActionSection() {
  const items = [
    {
      image: "/Residuos-en-recursos.jpg",
      title: "CONVIERTE RESIDUOS EN RECURSOS",
      text: "Cada vez más personas convierten el plástico en arte, muebles o proyectos comunitarios. Dar una nueva vida a los desechos demuestra que limpiar el planeta también puede ser una forma de crear.",
    },
    {
      image: "/consumir-con-conciencia.webp",
      title: "CONSUMICIÓN CONSCIENTE",
      text: "Elegir productos duraderos y sostenibles reduce la demanda de plásticos desechables. Pensar antes de comprar se ha convertido en una de las herramientas más efectivas contra la contaminación.",
    },
    {
      image: "/Movimiento-azul.jpg",
      title: "SUMARSE AL MOVIMIENTO AZUL",
      text: "Grupos y comunidades de todo el mundo organizan limpiezas, campañas y retos ambientales. La unión de muchas pequeñas acciones genera un cambio real en los océanos.",
    },
    {
      image: "/Innovación-verde.jpg",
      title: "IMPULSAR LA INNOVACIÓN VERDE",
      text: "Nuevas tecnologías y materiales biodegradables están transformando la forma en que se combate la contaminación marina. La ciencia avanza cuando cuenta con el apoyo de la sociedad.",
    },
    {
      image: "/Opciones-sostenibles.jpg",
      title: "ELEGIR OPCIONES SOSTENIBLES",
      text: "Restaurantes, marcas y empresas que eliminan el plástico están marcando el camino. Cada elección consciente ayuda a impulsar un modelo de consumo más respetuoso con el medio ambiente.",
    },
    {
      image: "/Local.webp",
      title: "ACTUAR DESDE LO LOCAL",
      text: "Iniciativas vecinales, escuelas y pequeños negocios están reduciendo su impacto ambiental con ideas simples y efectivas. El cambio global comienza en las comunidades locales.",
    },
  ];

  return (
    <section
      id="soluciones"
      className="bg-gray-50 dark:bg-gray-900 py-14 sm:py-16 md:py-18 px-4 sm:px-6 lg:px-8 flex flex-col justify-center transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-10 sm:mb-12 transition-colors duration-300"
          style={{ fontFamily: "var(--font-merriweather)" }}
        >
          Pequeñas acciones, grandes olas
        </h2>

        <Carousel className="w-full max-w-5xl mx-auto pb-12">
          <CarouselContent className="-ml-3 sm:-ml-4">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 pb-4"
              >
                <div className="h-full mb-4">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg dark:shadow-gray-900/50 transition-all duration-300 flex flex-col sm:h-[420px] md:h-[450px]">
                    {/* Alternancia imagen/texto */}
                    {index % 2 === 0 ? (
                      <>
                        {/* Imagen */}
                        <div className="relative w-full h-48 sm:h-1/2">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover dark:opacity-90 transition-opacity duration-300"
                          />
                        </div>

                        {/* Texto con borde dorado y bordes redondeados */}
                        <div
                          className="p-5 sm:p-6 flex flex-col justify-center h-auto sm:h-1/2 border border-amber-400 rounded-b-2xl transition-colors duration-300"
                          style={{
                            backgroundColor: "inherit",
                          }}
                        >
                          <h3
                            className="text-sm sm:text-base font-bold text-amber-400 mb-2 transition-colors duration-300"
                            style={{ fontFamily: "var(--font-nunito)" }}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm leading-relaxed transition-colors duration-300"
                            style={{ fontFamily: "var(--font-nunito)" }}
                          >
                            {item.text}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Texto con borde dorado y bordes redondeados */}
                        <div
                          className="p-5 sm:p-6 flex flex-col justify-center h-auto sm:h-1/2 border border-amber-400 rounded-t-2xl transition-colors duration-300"
                          style={{
                            backgroundColor: "inherit",
                          }}
                        >
                          <h3
                            className="text-sm sm:text-base font-bold text-amber-400 mb-2 transition-colors duration-300"
                            style={{ fontFamily: "var(--font-nunito)" }}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm leading-relaxed transition-colors duration-300"
                            style={{ fontFamily: "var(--font-nunito)" }}
                          >
                            {item.text}
                          </p>
                        </div>

                        {/* Imagen */}
                        <div className="relative w-full h-48 sm:h-1/2">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover dark:opacity-90 transition-opacity duration-300"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Flechas */}
          <CarouselPrevious className="absolute -left-10 sm:-left-12 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent" />
          <CarouselNext className="absolute -right-10 sm:-right-12 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent" />
        </Carousel>
      </div>
    </section>
  );
}
