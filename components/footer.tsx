import { Car, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"
export default function Footer() {
  return (
    <footer className="border-t border-t-indigo-800 border-border/50 bg-muted/50 dark:bg-card/80"> {/* Changed to border-border/50 and bg-muted/50 for subtlety */}
      <div className="container mx-auto px-4 py-8 md:py-12"> {/* Added md:py-12 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"> {/* Adjusted md columns */}
          <div>
            <div className="mb-4 flex items-center text-lg font-semibold text-foreground">
              <Car className="mr-2 h-5 w-5 text-primary" />
              <span>AutoElite</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted destination for premium new and used cars. We provide quality vehicles and exceptional
              service.
            </p>
            <div className="mt-4 space-y-3"> {/* Increased spacing slightly */}
              <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0 text-primary/80" /> {/* Added flex-shrink-0 */}
                <span>123 Automotive Blvd, Car City, CC 12345</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="mr-2 h-4 w-4 flex-shrink-0 text-primary/80" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="mr-2 h-4 w-4 flex-shrink-0 text-primary/80" />
                <span>info@autoelite.com</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-md font-semibold text-foreground uppercase tracking-wider">Quick Links</h3> {/* Styled heading */}
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Cars</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="mb-4 text-md font-semibold text-foreground uppercase tracking-wider">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">Login</Link></li>
              <li><Link href="/register" className="text-muted-foreground hover:text-primary transition-colors">Register</Link></li>
              <li><Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</Link></li>
              <li><Link href="/dashboard/transactions" className="text-muted-foreground hover:text-primary transition-colors">My Transactions</Link></li>
            </ul>
          </div>

          {/* Connect With Us & Business Hours */}
          <div>
            <h3 className="mb-4 text-md font-semibold text-foreground uppercase tracking-wider">Connect & Hours</h3>
            <div className="flex space-x-3 mb-6"> {/* Adjusted spacing */}
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Link key={index} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{Icon.displayName || Icon.name}</span>
                </Link>
              ))}
            </div>
            <div>
              <h4 className="mb-2 text-sm font-medium text-foreground">Business Hours</h4>
              <p className="text-xs text-muted-foreground">Monday - Friday: 9AM - 7PM</p> {/* Adjusted font size */}
              <p className="text-xs text-muted-foreground">Saturday: 10AM - 5PM</p>
              <p className="text-xs text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-8 border-t-indigo-800 border-t border-border/50 pt-6 md:mt-12 md:pt-8"> {/* Used border-border/50 and adjusted margin/padding */}
          <p className="text-center text-xs text-muted-foreground"> {/* Adjusted font size */}
            © {new Date().getFullYear()} AutoElite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}