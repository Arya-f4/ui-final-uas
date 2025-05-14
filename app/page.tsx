"use client"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ArrowRight, Car, Shield, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Sample car data
const featuredCars = [
  {
    id: 1,
    name: "2023 Mercedes-Benz S-Class",
    price: 110000,
    category: "Luxury Sedan",
    image: "/products/2023-mercedes-benz-sclass.avif",
  },
  {
    id: 2,
    name: "2023 BMW X5",
    price: 65000,
    category: "Luxury SUV",
    image: "/products/2022-bmw-x3.avif",
  },
  {
    id: 3,
    name: "2023 Tesla Model 3",
    price: 45000,
    category: "Electric",
    image: "/products/2019-tesla-model3.avif",
  },
  {
    id: 4,
    name: "2023 Porsche 911",
    price: 120000,
    category: "Sports Car",
    image: "/products/2023-porsche-911.avif",
  },
]

// Sample article data
const latestArticles = [
  {
    id: 1,
    title: "The Future of Electric Vehicles: What to Expect in 2024",
    excerpt:
      "Explore the latest innovations in electric vehicle technology and what the future holds for sustainable transportation.",
    date: "May 1, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600&text=Electric+Vehicles",
  },
  {
    id: 2,
    title: "Luxury vs. Performance: Finding the Right Balance",
    excerpt:
      "A comprehensive guide to understanding the key differences between luxury and performance vehicles and how to choose the right one for your needs.",
    date: "May 2, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=600&text=Luxury+Performance",
  },
  {
    id: 3,
    title: "Essential Maintenance Tips to Extend Your Car's Lifespan",
    excerpt:
      "Learn the most important maintenance practices that will keep your vehicle running smoothly and extend its life by years.",
    date: "May 3, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600&text=Car+Maintenance",
  },
]

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getVideoSource = () => {
    if (!mounted) return "/supra.mp4"
    return "/supra.mp4"
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-background to-white py-20 dark:from-card dark:to-card">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="h-full w-full object-cover opacity-50"
          >
            <source src={getVideoSource()} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-30 dark:opacity-30"></div> {/* Adjusted overlay for light mode */}
        </div>
        <div className="container mx-auto px-4 relative z-10 flex min-h-screen items-center">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white dark:text-gray-200 sm:text-5xl md:text-6xl">
                Find Your Perfect Drive
              </h1>
              <p className="mb-8 text-lg text-white dark:text-gray-200">
                Discover our premium selection of luxury, performance, and electric vehicles. Experience automotive
                excellence with AutoElite.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/products">Browse Cars</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-gray-200 hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-gray-700">
                  <Link href="/blog">Read Blog</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-foreground">Featured Cars</h2>
            <Link
              href="/products"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground"
            >
              View all cars
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredCars.map((car) => (
              <Card key={car.id} className="overflow-hidden">
                <Link href={`/products/${car.id}`} className="block">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                <CardHeader className="p-4">
                  <Link href={`/products/${car.id}`} className="block">
                    <CardTitle className="text-lg text-foreground">{car.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{car.category}</CardDescription>
                  </Link>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="font-medium text-foreground">${car.price.toLocaleString()}</p>
                </CardContent>
                <CardFooter className="p-4">
                  <AddToCartButton product={car} />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-16 dark:bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Why Choose AutoElite</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Premium Selection</h3>
              <p className="text-muted-foreground">
                Curated inventory of luxury, performance, and electric vehicles from top manufacturers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                Every vehicle undergoes a comprehensive 150-point inspection before sale.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Award-Winning Service</h3>
              <p className="text-muted-foreground">
                Recognized for excellence in customer satisfaction and after-sales support.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Convenient Process</h3>
              <p className="text-muted-foreground">
                Streamlined buying experience with flexible financing options and quick delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-foreground">Latest Articles</h2>
            <Link
              href="/blog"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground dark:hover:text-primary-foreground"
            >
              View all articles
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <Link href={`/blog/${article.id}`} className="block">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                <CardHeader className="p-4">
                  <Link href={`/blog/${article.id}`} className="block">
                    <CardTitle className="text-lg text-foreground">{article.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {article.date} • {article.readTime}
                    </CardDescription>
                  </Link>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="line-clamp-3 text-muted-foreground">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="p-4">
                  <Button variant="outline" asChild className="w-full text-foreground">
                    <Link href={`/blog/${article.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Find Your Dream Car?</h2>
            <p className="mb-8 text-lg">
              Browse our extensive inventory of premium vehicles or schedule a test drive today.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" variant="secondary" className="text-foreground">
                <Link href="/products">Browse Inventory</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground">
                <Link href="/contact">Schedule Test Drive</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-muted p-8 dark:bg-card">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">Stay Updated</h2>
              <p className="mb-6 text-muted-foreground">
                Subscribe to our newsletter for the latest inventory updates, automotive news, and exclusive offers.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-1"
                />
                <Button className="bg-primary text-primary-foreground">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Client component for Add to Cart button
import { useCart } from "@/components/cart-provider"

function AddToCartButton({ product }) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <Button className="w-full bg-primary text-primary-foreground" onClick={handleAddToCart}>
      Add to Garage
    </Button>
  )
}