"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [iconState, setIconState] = useState<"light" | "dark">("light")

  useEffect(() => {
    setMounted(true)
    setIconState(theme === "dark" ? "dark" : "light")
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    setIconState(newTheme)
  }

  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-foreground hover:text-primary relative overflow-hidden"
      onClick={toggleTheme}
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] absolute transition-all duration-300 ease-in-out ${
          iconState === "light"
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-50 -rotate-90"
        }`}
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] absolute transition-all duration-300 ease-in-out ${
          iconState === "dark"
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-50 rotate-90"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
      {/* Click animation overlay */}
      <span
        className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
          iconState === "light" ? "scale-100" : "scale-0"
        } bg-primary/20 rounded-full`}
      />
    </Button>
  )
}