import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Car, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted dark:bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center text-lg font-semibold text-foreground">
              <Car className="mr-2 h-5 w-5 text-primary" />
              <span>AutoElite</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted destination for premium new and used cars. We provide quality vehicles and exceptional
              service.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4 text-primary" />
                <span>123 Automotive Blvd, Car City, CC 12345</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                <span>info@autoelite.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground"
                >
                  Cars
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/login"
                  className="text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/transactions"
                  className="text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground"
                >
                  My Transactions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="mt-6">
              <h4 className="mb-2 text-sm font-medium text-foreground">Business Hours</h4>
              <p className="text-sm text-muted-foreground">Monday - Friday: 9AM - 7PM</p>
              <p className="text-sm text-muted-foreground">Saturday: 10AM - 5PM</p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 dark:border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AutoElite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
