import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AutoElite - Premium Car Dealership",
  description:
    "Find your perfect drive with AutoElite's premium selection of luxury, performance, and electric vehicles.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
