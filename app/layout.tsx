import type { Metadata } from "next"
import { Merriweather, Nunito } from "next/font/google"
import "./globals.css"

const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-merriweather"
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito"
})

export const metadata: Metadata = {
  title: "Formulario de contacto",
  description: "Únete al movimiento",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${merriweather.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  )
}