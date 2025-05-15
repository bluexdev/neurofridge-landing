import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "NeuroFridge | CryoMed - Monitoreo Inteligente de Temperatura para Medicamentos",
  description: "Soluciones inteligentes para el monitoreo y control de temperatura en el almacenamiento de medicamentos en clínicas, farmacias y hogares. Protege la calidad y seguridad de tus medicamentos con tecnología avanzada.",
  keywords: [
    "monitoreo de temperatura",
    "medicamentos",
    "farmacia",
    "clínica",
    "refrigerador inteligente",
    "NeuroFridge",
    "CryoMed",
    "salud",
    "tecnología médica"
  ],
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.variable} ${poppins.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
