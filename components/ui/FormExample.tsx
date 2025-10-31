"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FormExample() {
  const [formData, setFormData] = useState({
    nombre: "",
    ciudad: "",
    email: "",
    consejos: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div 
      className="w-full max-w-xl bg-white/15 dark:bg-black/50 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/20 dark:border-white/10 transition-all duration-300"
      style={{ fontFamily: 'var(--font-nunito)' }}
    >
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Input 
            placeholder="Nombre" 
            value={formData.nombre}
            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
            className="backdrop-blur-md border rounded-full px-4 sm:px-6 py-5 sm:py-7 text-sm sm:text-base shadow-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300 placeholder:text-gray-600"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderColor: 'rgba(255, 255, 255, 0.4)',
              color: '#1f2937'
            }}
          />
          
          <Input 
            placeholder="Ciudad" 
            value={formData.ciudad}
            onChange={(e) => setFormData({...formData, ciudad: e.target.value})}
            className="backdrop-blur-md border rounded-full px-4 sm:px-6 py-5 sm:py-7 text-sm sm:text-base shadow-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300 placeholder:text-gray-600"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderColor: 'rgba(255, 255, 255, 0.4)',
              color: '#1f2937'
            }}
          />
        </div>

        <Input 
          placeholder="Correo electrónico" 
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="backdrop-blur-md border rounded-full px-4 sm:px-6 py-5 sm:py-7 text-sm sm:text-base shadow-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300 placeholder:text-gray-600"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(255, 255, 255, 0.4)',
            color: '#1f2937'
          }}
        />

        <div 
          className="flex items-center space-x-3 backdrop-blur-md border rounded-full px-4 sm:px-6 py-4 sm:py-5 transition-all duration-300"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(255, 255, 255, 0.4)'
          }}
        >
          <input
            type="checkbox"
            checked={formData.consejos}
            onChange={(e) => setFormData({...formData, consejos: e.target.checked})}
            className="h-5 w-5 rounded cursor-pointer transition-colors duration-300 flex-shrink-0"
            style={{
              accentColor: '#26C6DA'
            }}
            id="consejos"
          />
          <label 
            htmlFor="consejos" 
            className="font-normal cursor-pointer text-sm sm:text-base"
            style={{ color: '#1f2937' }}
          >
            Quiero recibir consejos
          </label>
        </div>

        <div className="pt-2 sm:pt-4 flex justify-center">
          <Button 
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 dark:bg-[#4DD0E1] dark:hover:bg-[#80DEEA] text-white font-semibold px-8 sm:px-10 py-5 sm:py-7 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            Unirme al movimiento
          </Button>
        </div>
      </form>
    </div>
  )
}