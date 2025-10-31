import FormExample from "@/components/ui/FormExample"
import Header from "@/components/header"
import ProblemSection from "@/components/ProblemSection"
import CycleSection from "@/components/CycleSection"
import ImpactSection from "@/components/ImpactSection"
import MosaicSection from "@/components/MosaicSection";
import FloatSection from "@/components/FloatSection";
import ActionSection from "@/components/ActionSection";
import FinalSection  from "@/components/FinalSection"

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <main
  id="hero"
  className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 
  pt-28 sm:pt-32 pb-16 bg-cover bg-center transition-all duration-300"
  style={{ backgroundImage: "url('/pexels-kienvirak-8440346.jpg')" }}
>
  {/* Capa oscura encima del fondo */}
  <div className="absolute inset-0 bg-black/30 dark:bg-black/50 transition-colors duration-300"></div>

  {/* Contenido principal */}
  <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
    
    {/* Columna del texto */}
    <div className="text-white dark:text-gray-100 text-center lg:text-left lg:-ml-6 xl:-ml-8">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-300 max-w-xl"
        style={{ fontFamily: 'var(--font-merriweather)' }}
      >
        Tu acción puede cambiar el rumbo del océano.
      </h1>
    </div>

    {/* Columna del formulario */}
    <div className="flex justify-center lg:justify-end">
      <FormExample />
    </div>
  </div>
</main>





      {/* Problem Section */}
      <ProblemSection />

      {/* Cycle Section */}
      <CycleSection />

      {/* Cycle Section */}
      <ImpactSection />

      <FloatSection /> 

        {/* ⬇️ NUEVA SECCIÓN: Mosaico de rombos */}
      <MosaicSection />

      <ActionSection />

      <FinalSection />

    </>
  )
}