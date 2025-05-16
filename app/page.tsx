"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import { AuthButtons } from "@/components/auth/auth-buttons"
import Image from "next/image"
import Link from "next/link"
import {
  Thermometer,
  Bell,
  Clock,
  Smartphone,
  Shield,
  LineChart,
  Building2,
  ArrowRight,
  CheckCircle2,
  Send,
  Home,
  Menu,
  X,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#features", label: "Características" },
    { href: "#how-it-works", label: "Cómo Funciona" },
    { href: "#segments", label: "Segmentos" },
    { href: "#contact", label: "Contacto" },
  ]

  const features = [
    {
      icon: <Thermometer className="h-6 w-6 text-primary" />,
      title: "Monitoreo en Tiempo Real",
      description: "Seguimiento constante de la temperatura de medicamentos refrigerados.",
    },
    {
      icon: <Bell className="h-6 w-6 text-primary" />,
      title: "Alertas Automáticas",
      description: "Notificaciones inmediatas ante variaciones críticas de temperatura.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Registro Continuo",
      description: "Historial completo de las condiciones térmicas para trazabilidad.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Interfaz Intuitiva",
      description: "Diseño simple para uso por personal no técnico y pacientes.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Protección de Medicamentos",
      description: "Garantiza la eficacia y seguridad de fármacos termosensibles.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Análisis de Datos",
      description: "Estadísticas y reportes para optimizar la conservación.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-lg border-b border-white/20 dark:border-white/10"
            : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo-neurofridge.png"
                  alt="NeuroFridge Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="text-lg md:text-xl font-semibold">NeuroFridge</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <ModeToggle />
              <AuthButtons />
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex md:hidden items-center space-x-4">
              <ModeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/70 dark:bg-black/70 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-3 flex flex-col space-y-2">
                <Button variant="outline" size="sm" className="w-full rounded-full" asChild>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    Iniciar Sesión
                  </Link>
                </Button>
                <Button size="sm" className="w-full rounded-full" asChild>
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    Registrarse
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/5 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Monitoreo Inteligente de Temperatura para Medicamentos
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                CryoMed transforma la conservación de fármacos con tecnología accesible para clínicas, farmacias y
                hogares.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full">
                  Comenzar Ahora
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Conocer Más
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl p-6 shadow-xl">
                  <Image
                    src="/images/logo-cryomed.png"
                    alt="CryoMed App"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                </div>
                <div className="absolute -z-10 inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/50 dark:bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Características de CryoMed</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nuestra solución tecnológica ofrece un control térmico completo y accesible para la conservación óptima de
              medicamentos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index}>
                <Card className="bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Funciona CryoMed</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Un sistema simple pero poderoso para garantizar la conservación adecuada de medicamentos sensibles a la
              temperatura.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Conecta el Sensor</h3>
                    <p className="text-muted-foreground">
                      Instala nuestro sensor digital de bajo costo en tu refrigerador o espacio de almacenamiento.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Configura la App</h3>
                    <p className="text-muted-foreground">
                      Descarga la aplicación CryoMed y establece los rangos de temperatura adecuados para tus
                      medicamentos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Monitoreo Automático</h3>
                    <p className="text-muted-foreground">
                      El sistema comienza a monitorear y registrar la temperatura en tiempo real, enviando alertas
                      cuando sea necesario.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg"
                    alt="Smartphone with temperature monitoring app"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -z-10 inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section id="segments" className="py-20 bg-secondary/50 dark:bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Para Quién es CryoMed?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Soluciones adaptadas a las necesidades específicas de diferentes usuarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card className="bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg"
                    alt="Persona con medicamentos en casa"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Pacientes con Enfermedades Crónicas</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Ideal para personas que almacenan medicamentos sensibles a la temperatura en casa, como insulina,
                    biológicos o vacunas.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Fácil de usar",
                      "Alertas a tu teléfono",
                      "Tranquilidad para el paciente",
                      "Bajo costo de implementación",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg"
                    alt="Clínica o farmacia"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Clínicas y Farmacias Independientes</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Solución profesional para establecimientos de salud que necesitan cumplir con normativas de
                    conservación de medicamentos.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Cumplimiento normativo",
                      "Reportes detallados",
                      "Múltiples sensores",
                      "Integración con sistemas existentes",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 dark:to-primary/5 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para transformar la conservación de tus medicamentos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a las clínicas, farmacias y pacientes que ya confían en CryoMed para proteger la eficacia de sus
              medicamentos.
            </p>
            <Button size="lg" className="rounded-full">
              Solicitar Demo Gratuita <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/50 dark:bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes preguntas sobre CryoMed? Nuestro equipo está listo para ayudarte.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form className="bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Asunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2 mb-6">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full rounded-full">
                  Enviar Mensaje <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="flex items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
                  <p className="text-muted-foreground">
                    Estamos comprometidos a transformar la conservación de medicamentos con tecnología accesible e
                    inteligente.
                  </p>
                </div>

                <div className="bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl p-6 shadow-lg">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                      alt="Equipo de NeuroFridge"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Nuestro Equipo</h4>
                  <p className="text-muted-foreground">
                    Un grupo multidisciplinario de profesionales en tecnología y salud, comprometidos con la innovación
                    y la calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary dark:bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo-neurofridge.png"
                  alt="NeuroFridge Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="text-xl font-semibold">NeuroFridge</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Desarrollando soluciones tecnológicas accesibles e inteligentes para el monitoreo térmico eficiente y
                seguro de medicamentos.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {["Inicio", "Características", "Cómo Funciona", "Segmentos", "Contacto"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {["Términos de Servicio", "Política de Privacidad", "Cookies"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} NeuroFridge. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
