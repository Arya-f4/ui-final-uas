"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, User, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CartDropdown } from "@/components/cart-dropdown"
import { ModeToggle } from "@/components/mode-toggle"

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
      className={`w-full ${
        isScrolled
          ? "fixed top-0 z-50 bg-background/90 shadow-md backdrop-blur-sm dark:bg-card/90"
          : "bg-background dark:bg-card"
      } transition-all duration-200`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-xl font-bold text-foreground">
              <Car className="mr-2 h-6 w-6 text-primary" />
              <span>AutoElite</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary-foreground"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary-foreground"
            >
              Cars
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary-foreground"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary-foreground"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary-foreground"
            >
              Contact
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card text-foreground">
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
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <ModeToggle />
            <CartDropdown />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent dark:text-muted-foreground dark:hover:bg-card"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent dark:text-muted-foreground dark:hover:bg-card"
                onClick={() => setIsOpen(false)}
              >
                Cars
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent dark:text-muted-foreground dark:hover:bg-card"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent dark:text-muted-foreground dark:hover:bg-card"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent dark:text-muted-foreground dark:hover:bg-card"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent dark:text-muted-foreground dark:hover:bg-card"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent dark:text-muted-foreground dark:hover:bg-card"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
              <Link
                href="/dashboard"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent dark:text-muted-foreground dark:hover:bg-card"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/transactions"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent dark:text-muted-foreground dark:hover:bg-card"
                onClick={() => setIsOpen(false)}
              >
                My Transactions
              </Link>
              <Link
                href="/admin/users"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent dark:text-muted-foreground dark:hover:bg-card"
                onClick={() => setIsOpen(false)}
              >
                Admin Panel
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
