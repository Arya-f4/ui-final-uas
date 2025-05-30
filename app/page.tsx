// app/page.tsx (Relevant sections with cards)
"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Car, Clock, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
// Base Card components
import { AnimatedCard } from "@/components/animated-card"
import { useCart } from "@/components/cart-provider"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Card as ShadCard } from "@/components/ui/card"
import { motion } from "framer-motion"; // Ensure motion is imported

// Sample car data (ensure paths are correct, especially for images)
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
    image: "/electric-car.png",
    category: "Technology", // Added for consistency
  },
  {
    id: 2,
    title: "Luxury vs. Performance: Finding the Right Balance",
    excerpt:
      "A comprehensive guide to understanding the key differences between luxury and performance vehicles and how to choose the right one for your needs.",
    date: "May 2, 2023",
    readTime: "10 min read",
    image: "/sport-vs-luxury.jpg",
    category: "Insights", // Added for consistency
  },
  {
    id: 3,
    title: "Essential Maintenance Tips to Extend Your Car's Lifespan",
    excerpt:
      "Learn the most important maintenance practices that will keep your vehicle running smoothly and extend its life by years.",
    date: "May 3, 2023",
    readTime: "7 min read",
    image: "/car-lifespan.jpg",
    category: "Maintenance", // Added for consistency
  },
]

function AddToCartButton({ product }: { product: (typeof featuredCars)[0] }) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
    console.log(`${product.name} added to garage`)
  }

  return (
    <Button
      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
      onClick={handleAddToCart}
      size="sm" // Consider smaller button for cards
    >
      Add to Garage
    </Button>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getVideoSource = () => {
    if (!mounted) return ""
    return "/supra.mp4"
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section ... (no changes to this part from previous response) ... */}
      <section className="relative min-h-screen bg-gradient-to-b from-black via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {mounted && (
            <video
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="h-full w-full object-cover opacity-40"
            >
              <source src={getVideoSource()} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70 dark:from-card dark:opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Find Your <span className="text-primary">Perfect Drive</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mb-10 text-lg text-gray-300 md:text-xl max-w-2xl mx-auto"
          >
            Discover our premium selection of luxury, performance, and electric vehicles. Experience automotive
            excellence with AutoElite.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0"
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href="/products">Browse Cars</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary bg-white/10 hover:bg-primary hover:text-primary-foreground backdrop-blur-sm shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href="/contact">Schedule Test Drive</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-12 md:py-16 lg:py-24 bg-muted/30 dark:bg-card/30">
        <div className="container mx-auto px-4">
          <div className="mb-10 md:mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Featured Vehicles</h2>
            <p className="mt-3 md:mt-4 text-md md:text-lg text-muted-foreground max-w-xl mx-auto">
              Handpicked selection of our finest automobiles, ready to elevate your driving experience.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCars.map((car, index) => (
              <AnimatedCard key={car.id} delay={index * 0.1} className="h-full flex flex-col">
                <ShadCard className="group flex flex-col flex-grow"> {/* Using ShadCard alias */}
                  <Link href={`/products/${car.id}`} className="block">
                    <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-t-lg"> {/* Ensure top corners are rounded if image is first */}
                      <Image
                        src={car.image || "/placeholder.svg"}
                        alt={car.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                  </Link>
                  <CardHeader className="pb-2"> {/* Reduced bottom padding for tighter content */}
                    <Link href={`/products/${car.id}`} className="block">
                      <CardTitle>{car.name}</CardTitle>
                      <CardDescription>{car.category}</CardDescription>
                    </Link>
                  </CardHeader>
                  <CardContent className="flex-grow pb-2"> {/* Reduced bottom padding */}
                    <p className="text-lg md:text-xl font-semibold text-foreground">${car.price.toLocaleString()}</p>
                  </CardContent>
                  <CardFooter>
                    <AddToCartButton product={car} />
                  </CardFooter>
                </ShadCard>
              </AnimatedCard>
            ))}
          </div>
          <div className="mt-10 md:mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Link href="/products">
                View All Inventory <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 md:mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">From the Blog</h2>
            <p className="mt-3 md:mt-4 text-md md:text-lg text-muted-foreground max-w-xl mx-auto">
              Stay informed with our latest articles, trends, and automotive insights.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article, index) => (
              <AnimatedCard key={article.id} delay={index * 0.1} className="h-full flex flex-col">
                 <ShadCard className="group flex flex-col flex-grow"> {/* Using ShadCard alias */}
                  <Link href={`/blog/${article.id}`} className="block">
                    <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                  </Link>
                  <CardHeader className="pb-2">
                    <Link href={`/blog/${article.id}`} className="block">
                      <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                      <CardDescription className="text-xs mt-1">
                        {article.date} • {article.readTime} • <span className="text-primary">{article.category}</span>
                      </CardDescription>
                    </Link>
                  </CardHeader>
                  <CardContent className="flex-grow pb-2">
                    <p className="line-clamp-3 text-sm text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full text-foreground hover:text-primary hover:border-primary transition-colors" size="sm">
                      <Link href={`/blog/${article.id}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </ShadCard>
              </AnimatedCard>
            ))}
          </div>
          <div className="mt-10 md:mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us (from previous response, with motion added) */}
      <section className="py-12 md:py-16 lg:py-24 bg-muted/30 dark:bg-card/30">
        <div className="container mx-auto px-4">
          <div className="mb-10 md:mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Choose AutoElite</h2>
            <p className="mt-3 md:mt-4 text-md md:text-lg text-muted-foreground max-w-xl mx-auto">
              Experience the difference with our commitment to quality, transparency, and exceptional service.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Car, title: "Premium Selection", description: "Curated inventory of luxury, performance, and electric vehicles from top manufacturers." },
              { icon: Shield, title: "Quality Guaranteed", description: "Every vehicle undergoes a comprehensive 150-point inspection before sale." },
              { icon: Award, title: "Award-Winning Service", description: "Recognized for excellence in customer satisfaction and after-sales support." },
              { icon: Clock, title: "Convenient Process", description: "Streamlined buying experience with flexible financing options and quick delivery." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
                transition={{ duration: 0.5, delay: index * 0.15, ease:"easeOut" }}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-2xl transition-all duration-300 bg-card dark:bg-card/80 hover:bg-card/95 dark:hover:bg-card" // Changed to rounded-xl, adjusted hover background
              >
                <div className="mb-5 rounded-full bg-primary/10 p-4 text-primary inline-flex"> {/* Added inline-flex */}
                  <item.icon className="h-10 w-10" />
                </div>
                <h3 className="mb-2 text-lg md:text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (from previous response, with motion) */}
       <section className="py-16 lg:py-24 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground"> {/* Added gradient */}
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4 text-3xl font-bold sm:text-4xl tracking-tight"
            >
              Ready to Find Your Dream Car?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay:0.1, ease: "easeOut" }}
              className="mb-8 text-lg opacity-90"
            >
              Browse our extensive inventory of premium vehicles or schedule a test drive today. Our team is ready to assist you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay:0.2, ease: "easeOut" }}
              className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg transform hover:scale-105 transition-all duration-300">
                <Link href="/products">Browse Inventory</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300">
                <Link href="/contact">Schedule Test Drive</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter (from previous response, with motion) */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-xl bg-muted p-8 md:p-12 dark:bg-card shadow-xl">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Stay Updated</h2>
              <p className="mb-8 text-muted-foreground">
                Subscribe to our newsletter for the latest inventory updates, automotive news, and exclusive offers.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row">
                <motion.input
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px hsl(var(--ring))" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  type="email"
                  placeholder="Enter your email address"
                  className="flex h-11 md:h-12 w-full border-indigo-600 rounded-md border  bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-1"
                />
                <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transform hover:scale-105 active:scale-95 transition-all duration-300 h-11 md:h-12">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}