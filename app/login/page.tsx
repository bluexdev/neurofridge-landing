"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    // Validación básica
    if (!email || !password) {
      setError("Por favor complete todos los campos")
      setIsLoading(false)
      return
    }

    // Simulación de login
    try {
      // Aquí iría la lógica real de autenticación
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulamos un login exitoso
      console.log("Login exitoso", { email })
      router.push("/")

      // Aquí se podría guardar el token en localStorage o usar un estado global
    } catch (err) {
      setError("Error al iniciar sesión. Verifique sus credenciales.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/70 dark:bg-black/70 backdrop-blur-lg border-b border-white/20 dark:border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
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
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="w-full max-w-md">
          <div className="bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Iniciar Sesión</h1>
              <p className="text-muted-foreground mt-2">
                Accede a tu cuenta de CryoMed para gestionar tus dispositivos y alertas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background/50"
                  required
                />
              </div>

              <Button type="submit" className="w-full rounded-full" disabled={isLoading}>
                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Button>

              <div className="text-center text-sm mt-6">
                ¿No tienes una cuenta?{" "}
                <Link href="/register" className="text-primary hover:underline">
                  Regístrate
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-muted-foreground bg-secondary/30 dark:bg-secondary/20">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} NeuroFridge. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
