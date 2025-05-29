"use client"

import { CartDropdown } from "@/components/cart-dropdown"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Car, Menu, User, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
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

  return (
    <header
      className={`w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? "fixed top-0 z-50 bg-background/95 shadow-lg backdrop-blur-md border-border/50" // Added subtle border
          : "bg-background dark:bg-card"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-xl font-bold text-foreground transition-colors hover:text-primary">
              <Car className="mr-2 h-6 w-6 text-primary" />
              <span>AutoElite</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1"> {/* Reduced space for a tighter look if desired */}
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md transition-colors"
            >
              Cars
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md transition-colors"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-1"> {/* Group icons together */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card text-card-foreground border-border shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link href="/login" className="hover:bg-accent">
                      Login
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/register" className="hover:bg-accent">
                      Register
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="hover:bg-accent">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/transactions" className="hover:bg-accent">
                      My Transactions
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/admin/users" className="hover:bg-accent">
                      Admin Panel
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <CartDropdown />
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-1 md:hidden"> {/* Reduced space */}
            <ModeToggle />
            <CartDropdown />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground hover:text-primary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 dark:bg-card/95"> {/* Added background and border */}
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Cars" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/login", label: "Login" },
                { href: "/register", label: "Register" },
                { href: "/dashboard", label: "Dashboard" },
                { href: "/dashboard/transactions", label: "My Transactions" },
                { href: "/admin/users", label: "Admin Panel" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}