"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Truck, ShieldCheck, ArrowRight, Calendar, Fuel, Gauge, Car, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/components/cart-provider"

// Updated car data with mapped images
const getCarById = (id: string) => {
  const cars = {
    "1": {
      id: 1,
      name: "2023 Mercedes-Benz S-Class",
      price: 110000,
      rating: 4.9,
      reviewCount: 42,
      category: "Luxury Sedan",
      year: 2023,
      mileage: 5,
      fuelType: "Gasoline",
      transmission: "Automatic",
      engine: "4.0L V8 Biturbo",
      exteriorColor: "Obsidian Black",
      interiorColor: "Black Nappa Leather",
      vin: "WDDUG8DB1MA456789",
      stockNumber: "MB12345",
      location: "Main Showroom",
      images: [
        "/products/2023-mercedes-benz-sclass.avif",
        "/products/2023-mercedes-benz-sclass.avif",
        "/products/2023-mercedes-benz-sclass.avif",
        "/products/2023-mercedes-benz-sclass.avif",
      ],
      description:
        "Experience unparalleled luxury with the 2023 Mercedes-Benz S-Class. This flagship sedan represents the pinnacle of automotive engineering, combining cutting-edge technology with exquisite craftsmanship. With its powerful V8 engine, advanced driver assistance systems, and sumptuous interior, the S-Class delivers an exceptional driving experience.",
      features: [
        "MBUX Infotainment System with Augmented Reality Navigation",
        "Burmester® High-End 4D Surround Sound System",
        "Executive Rear Seat Package with massage function",
        "Active Ambient Lighting with 64 colors",
        "E-Active Body Control suspension",
        "Head-Up Display with Augmented Reality",
        "Driving Assistance Package Plus",
        "Energizing Comfort Control",
        "Panoramic sliding sunroof",
        "Wireless smartphone charging",
      ],
      specifications: {
        Engine: "4.0L V8 Biturbo",
        Horsepower: "496 hp @ 5,500 rpm",
        Torque: "516 lb-ft @ 2,000-4,500 rpm",
        Transmission: "9G-TRONIC 9-speed automatic",
        Drivetrain: "4MATIC All-Wheel Drive",
        "Acceleration (0-60 mph)": "4.4 seconds",
        "Top Speed": "130 mph (electronically limited)",
        "Fuel Economy": "17 city / 25 highway mpg",
        "Fuel Tank Capacity": "22.1 gallons",
        "Seating Capacity": "5 passengers",
        "Cargo Volume": "12.9 cubic feet",
        "Curb Weight": "4,740 lbs",
        "Dimensions (L/W/H)": '208.2" / 76.9" / 59.2"',
        Wheelbase: "126.6 inches",
      },
      relatedCars: [
        {
          id: 2,
          name: "2023 BMW 7 Series",
          price: 95000,
          image: "/products/2022-bmw-x3.avif", // Using BMW X5 image as a placeholder since 7 Series image isn't available
        },
        {
          id: 3,
          name: "2023 Audi A8",
          price: 88000,
          image: "/products/2020-audi-q7.avif", // Using Audi Q7 image as a placeholder
        },
        {
          id: 4,
          name: "2023 Lexus LS",
          price: 78000,
          image: "/products/2022-lexus-es350.jpg", // Using Lexus ES image as a placeholder
        },
      ],
      reviews: [
        {
          id: 1,
          author: "Michael Thompson",
          rating: 5,
          date: "March 15, 2023",
          content:
            "The S-Class is simply the best car I've ever owned. The technology is mind-blowing, especially the augmented reality navigation. The ride quality is unmatched - it feels like you're floating on a cloud. Interior quality and attention to detail are second to none. Worth every penny for those who appreciate automotive excellence.",
        },
        {
          id: 2,
          author: "Sarah Johnson",
          rating: 5,
          date: "February 28, 2023",
          content:
            "After test driving several luxury sedans, the S-Class stood out as the clear winner. The cabin is whisper-quiet, the seats are incredibly comfortable, and the Burmester sound system is phenomenal. The driver assistance features make long trips much less fatiguing. My only minor complaint is that the MBUX system has a bit of a learning curve.",
        },
        {
          id: 3,
          author: "David Wilson",
          rating: 4,
          date: "January 10, 2023",
          content:
            "This is my third S-Class, and Mercedes has raised the bar yet again. The new model improves on its predecessor in almost every way. The interior is more luxurious, the technology more advanced, and the driving experience more refined. I deducted one star only because the trunk space is slightly reduced compared to the previous generation.",
        },
      ],
    },
    "2": {
      id: 2,
      name: "2023 BMW X5",
      price: 65000,
      rating: 4.8,
      reviewCount: 56,
      category: "Luxury SUV",
      year: 2023,
      mileage: 12,
      fuelType: "Diesel",
      transmission: "Automatic",
      engine: "3.0L TwinPower Turbo Inline-6",
      exteriorColor: "Alpine White",
      interiorColor: "Cognac Vernasca Leather",
      vin: "5UXCR6C55KLL86752",
      stockNumber: "BMW45678",
      location: "North Showroom",
      images: [
        "/products/2022-bmw-x3.avif",
        "/products/2022-bmw-x3.avif",
        "/products/2022-bmw-x3.avif",
        "/products/2022-bmw-x3.avif",
      ],
      description:
        "The 2023 BMW X5 combines versatility, luxury, and performance in a compelling package. This premium midsize SUV offers a refined driving experience with its powerful engine options, sophisticated all-wheel-drive system, and advanced technology features. The spacious and well-appointed interior provides comfort for all passengers, while the generous cargo capacity ensures practicality for everyday use.",
      features: [
        'Live Cockpit Professional with 12.3" digital instrument cluster',
        '12.3" Central Information Display with iDrive 7.0',
        "Panoramic glass sunroof",
        "Harman Kardon Surround Sound System",
        "Comfort Access keyless entry",
        "4-zone automatic climate control",
        "Driving Assistant Professional",
        "Parking Assistant Plus with Surround View",
        "Adaptive M Suspension",
        "BMW Laserlight headlights",
      ],
      specifications: {
        Engine: "3.0L TwinPower Turbo Inline-6",
        Horsepower: "335 hp @ 5,500-6,500 rpm",
        Torque: "330 lb-ft @ 1,500-5,200 rpm",
        Transmission: "8-speed Sport Automatic",
        Drivetrain: "xDrive All-Wheel Drive",
        "Acceleration (0-60 mph)": "5.3 seconds",
        "Top Speed": "130 mph (electronically limited)",
        "Fuel Economy": "21 city / 26 highway mpg",
        "Fuel Tank Capacity": "21.9 gallons",
        "Seating Capacity": "5 passengers (7 with optional 3rd row)",
        "Cargo Volume": "33.9 cubic feet (72.3 with rear seats folded)",
        "Curb Weight": "4,840 lbs",
        "Dimensions (L/W/H)": '194.3" / 78.9" / 69.0"',
        Wheelbase: "117.1 inches",
      },
      relatedCars: [
        {
          id: 5,
          name: "2023 Mercedes-Benz GLE",
          price: 63000,
          image: "/products/2023-mercedes-benz-sclass.avif", // Using S-Class image as a placeholder
        },
        {
          id: 6,
          name: "2023 Audi Q7",
          price: 58000,
          image: "/products/2020-audi-q7.avif",
        },
        {
          id: 7,
          name: "2023 Volvo XC90",
          price: 56000,
          image: "/products/2021-land-rover-range-rover-sport.jpg", // Using Range Rover Sport as a placeholder
        },
      ],
      reviews: [
        {
          id: 1,
          author: "Jennifer Adams",
          rating: 5,
          date: "April 2, 2023",
          content:
            "The X5 is the perfect blend of luxury and practicality. It's comfortable enough for long road trips yet still fun to drive. The diesel engine provides plenty of torque and surprisingly good fuel economy for an SUV of this size. The technology is intuitive and the build quality is excellent. Highly recommended!",
        },
        {
          id: 2,
          author: "Robert Chen",
          rating: 4,
          date: "March 18, 2023",
          content:
            "This is my second X5 and the improvements in this generation are substantial. The ride quality is better, the cabin is quieter, and the technology is more advanced. The only reason I'm giving 4 stars instead of 5 is that some features that should be standard at this price point are optional extras.",
        },
        {
          id: 3,
          author: "Emily Parker",
          rating: 5,
          date: "February 5, 2023",
          content:
            "After test driving the Mercedes GLE, Audi Q7, and BMW X5, I chose the X5 for its superior driving dynamics and more intuitive infotainment system. Six months in, I'm still delighted with my choice. The diesel engine is both powerful and efficient, and the interior has held up beautifully to family use.",
        },
      ],
    },
    "3": {
      id: 3,
      name: "2023 Tesla Model 3",
      price: 45000,
      rating: 4.7,
      reviewCount: 89,
      category: "Electric",
      year: 2023,
      mileage: 0,
      fuelType: "Electric",
      transmission: "Automatic",
      engine: "Dual Motor Electric",
      exteriorColor: "Pearl White Multi-Coat",
      interiorColor: "Black",
      vin: "5YJ3E1EA8PF123456",
      stockNumber: "TES78901",
      location: "EV Showroom",
      images: [
        "/products/2019-tesla-model3.avif",
        "/products/2019-tesla-model3.avif",
        "/products/2019-tesla-model3.avif",
        "/products/2019-tesla-model3.avif",
      ],
      description:
        "The 2023 Tesla Model 3 continues to revolutionize the automotive industry with its cutting-edge electric technology, impressive range, and minimalist design. This all-electric sedan delivers exhilarating performance with instant torque and precise handling. The spacious, tech-forward interior features a distinctive 15-inch touchscreen that controls nearly all vehicle functions. With regular over-the-air updates, the Model 3 continuously improves and gains new features over time.",
      features: [
        "15-inch central touchscreen display",
        "Autopilot with advanced safety and convenience features",
        "Glass roof with UV and infrared protection",
        "Premium audio system with 14 speakers",
        "Wireless smartphone charging",
        "Over-the-air software updates",
        "Keyless entry and remote climate control via mobile app",
        "Vegan leather seats with heating for all passengers",
        "HEPA air filtration system",
        "Full Self-Driving capability (optional)",
      ],
      specifications: {
        Motor: "Dual Motor All-Wheel Drive",
        Power: "Estimated 346 hp combined",
        Battery: "75 kWh lithium-ion",
        Range: "358 miles (EPA estimated)",
        "Acceleration (0-60 mph)": "4.2 seconds",
        "Top Speed": "145 mph",
        Charging: "Up to 170 miles in 30 minutes at Supercharger",
        "Onboard Charger": "11.5 kW",
        "Seating Capacity": "5 passengers",
        "Cargo Volume": "15 cubic feet (trunk + frunk)",
        "Curb Weight": "4,048 lbs",
        "Dimensions (L/W/H)": '184.8" / 72.8" / 56.8"',
        Wheelbase: "113.2 inches",
        "Ground Clearance": "5.5 inches",
      },
      relatedCars: [
        {
          id: 8,
          name: "2023 Polestar 2",
          price: 48000,
          image: "/products/2023-chevrolette-corvette.jpg", // Using Corvette as a placeholder
        },
        {
          id: 9,
          name: "2023 BMW i4",
          price: 52000,
          image: "/products/2022-bmw-x3.avif", // Using BMW X5 as a placeholder
        },
        {
          id: 10,
          name: "2023 Audi e-tron GT",
          price: 104000,
          image: "/products/2020-audi-q7.avif", // Using Audi Q7 as a placeholder
        },
      ],
      reviews: [
        {
          id: 1,
          author: "Alex Rivera",
          rating: 5,
          date: "April 10, 2023",
          content:
            "Transitioning from a BMW 3 Series to the Tesla Model 3 was the best automotive decision I've made. The instant torque makes it incredibly fun to drive, and the Autopilot feature reduces fatigue on long trips. The minimalist interior took some getting used to, but now I find traditional car interiors cluttered. The total cost of ownership is significantly lower with no gas, minimal maintenance, and free software upgrades that add new features.",
        },
        {
          id: 2,
          author: "Priya Patel",
          rating: 4,
          date: "March 25, 2023",
          content:
            "I've owned my Model 3 for three months and am generally very impressed. The performance is outstanding, and charging at home is much more convenient than I expected. The technology is years ahead of traditional automakers. I'm giving 4 stars instead of 5 because the build quality, while improved, still doesn't match luxury brands at similar price points. Also, the all-glass roof makes the cabin very hot in summer.",
        },
        {
          id: 3,
          author: "Marcus Johnson",
          rating: 5,
          date: "March 2, 2023",
          content:
            "After driving gas cars for 20+ years, the Model 3 has completely changed my perspective on what a car should be. The acceleration is addictive, the technology is intuitive, and the safety features are reassuring. I was concerned about range anxiety, but it hasn't been an issue at all with home charging. The over-the-air updates make it feel like you're getting a new car every few months. Highly recommended!",
        },
      ],
    },
  }

  // If the ID doesn't exist in our mock data, return the first car as a fallback
  return cars[id as keyof typeof cars] || cars["1"]
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = getCarById(params.id)

  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: car.id,
      name: car.name,
      price: car.price,
      image: car.images[0],
    })
  }



  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/products"
          className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          ← Back to Inventory
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Car Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border bg-gray-100">
            <Image
              src={car.images[selectedImage] || "/placeholder.svg"}
              alt={car.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {car.images.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-square cursor-pointer overflow-hidden rounded-md border bg-gray-100 ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${car.name} - View ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Car Info */}
        <div>
          <Badge className="mb-2">{car.category}</Badge>
          <h1 className="mb-2 text-3xl font-bold">{car.name}</h1>
          <div className="mb-4 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(car.rating)
                      ? "fill-primary text-primary"
                      : i < car.rating
                        ? "fill-primary/50 text-primary"
                        : "fill-muted text-muted-foreground"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {car.rating} ({car.reviewCount} reviews)
              </span>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-3xl font-bold">${car.price.toLocaleString()}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Est. ${Math.round(car.price / 60).toLocaleString()}/mo with financing
            </p>
          </div>

          <div className="mb-6">
            <p className="mb-4 text-gray-700 dark:text-gray-300">{car.description}</p>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4 rounded-lg border p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Year</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{car.year}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Gauge className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Mileage</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{car.mileage.toLocaleString()} miles</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Fuel className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Fuel Type</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{car.fuelType}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Car className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Transmission</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{car.transmission}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{car.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 rounded-full bg-primary/20 text-center text-xs font-bold text-primary">VIN</div>
              <div>
                <p className="text-sm font-medium">VIN</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{car.vin}</p>
              </div>
            </div>
          </div>

          <div className="mb-6 space-y-4">
            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              Add to Garage
            </Button>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" size="lg">
                Schedule Test Drive
              </Button>
              <Button variant="outline" size="lg">
                Get Financing
              </Button>
            </div>
          </div>

          <div className="space-y-3 rounded-lg border p-4">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm">Free delivery within 50 miles</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm">3-year/36,000-mile warranty included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Car Details Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="features">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="ml-6 list-disc space-y-2">
                {car.features.map((feature, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Technical Specifications</h3>
              <div className="rounded-md border">
                {Object.entries(car.specifications).map(([key, value], ) => (
                  <div key={key} className="flex flex-col border-b p-3 last:border-0 sm:flex-row">
                    <span className="mb-1 font-medium sm:mb-0 sm:w-1/3">{key}</span>
                    <span className="text-gray-600 dark:text-gray-400 sm:w-2/3">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <Button>Write a Review</Button>
              </div>

              <div className="space-y-6">
                {car.reviews.map((review) => (
                  <div key={review.id} className="space-y-2 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{review.author}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{review.date}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Cars */}
      <div className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Similar Vehicles</h2>
          <Link
            href="/products"
            className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            View all
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {car.relatedCars.map((relatedCar) => (
            <Card key={relatedCar.id} className="overflow-hidden">
              <Link href={`/products/${relatedCar.id}`} className="block">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={relatedCar.image || "/placeholder.svg"}
                    alt={relatedCar.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-4">
                <Link href={`/products/${relatedCar.id}`} className="block">
                  <h3 className="mb-1 font-medium">{relatedCar.name}</h3>
                </Link>
                <p className="font-medium">${relatedCar.price.toLocaleString()}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3 w-full"
                  onClick={() => {
                    addItem({
                      id: relatedCar.id,
                      name: relatedCar.name,
                      price: relatedCar.price,
                      image: relatedCar.image,
                    })
                  }}
                >
                  Add to Garage
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}