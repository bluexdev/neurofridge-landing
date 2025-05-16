"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AuthButtons() {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="outline" size="sm" className="rounded-full" asChild>
        <Link href="/login">Iniciar Sesión</Link>
      </Button>
      <Button size="sm" className="rounded-full" asChild>
        <Link href="/register">Registrarse</Link>
      </Button>
    </div>
  )
}
