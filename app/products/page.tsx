"use client"

import Image from "next/image"
import Link from "next/link"
import { Filter, Grid3X3, List, Car, Fuel, Calendar, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

// Sample car data
const cars = [
  {
    id: 1,
    name: "2023 Mercedes-Benz S-Class",
    price: 110000,
    category: "Luxury Sedan",
    image: "/products/2023-mercedes-benz-sclass.avif",
    year: 2023,
    mileage: 5,
    fuelType: "Gasoline",
    transmission: "Automatic",
  },
  {
    id: 2,
    name: "2023 BMW X5",
    price: 65000,
    category: "Luxury SUV",
    image: "/products/2022-bmw-x3.avif",
    year: 2023,
    mileage: 12,
    fuelType: "Diesel",
    transmission: "Automatic",
  },
  {
    id: 3,
    name: "2023 Tesla Model 3",
    price: 45000,
    category: "Electric",
    image: "/products/2019-tesla-model3.avif",
    year: 2023,
    mileage: 0,
    fuelType: "Electric",
    transmission: "Automatic",
  },
  {
    id: 4,
    name: "2023 Porsche 911",
    price: 120000,
    category: "Sports Car",
    image: "/products/2023-porsche-911.avif",
    year: 2023,
    mileage: 8,
    fuelType: "Gasoline",
    transmission: "Manual",
  },
  {
    id: 5,
    name: "2022 Audi Q7",
    price: 58000,
    category: "Luxury SUV",
    image: "/products/2020-audi-q7.avif",
    year: 2022,
    mileage: 15000,
    fuelType: "Diesel",
    transmission: "Automatic",
  },
  {
    id: 6,
    name: "2022 Lexus ES",
    price: 42000,
    category: "Luxury Sedan",
    image: "/products/2022-lexus-es350.jpg",
    year: 2022,
    mileage: 12000,
    fuelType: "Hybrid",
    transmission: "Automatic",
  },
  {
    id: 7,
    name: "2021 Range Rover Sport",
    price: 68000,
    category: "Luxury SUV",
    image: "/products/2021-land-rover-range-rover-sport.jpg",
    year: 2021,
    mileage: 25000,
    fuelType: "Diesel",
    transmission: "Automatic",
  },
  {
    id: 8,
    name: "2023 Chevrolet Corvette",
    price: 65000,
    category: "Sports Car",
    image: "/products/2023-chevrolette-corvette.jpg",
    year: 2023,
    mileage: 500,
    fuelType: "Gasoline",
    transmission: "Manual",
  },
  {
    id: 9,
    name: "2022 Toyota Camry",
    price: 28000,
    category: "Sedan",
    image: "/products/2023-toyota-camry.jpg",
    year: 2022,
    mileage: 18000,
    fuelType: "Gasoline",
    transmission: "Automatic",
  },
  {
    id: 10,
    name: "2023 Ford Mustang",
    price: 45000,
    category: "Sports Car",
    image: "/products/2023-Ford-Mustang.avif",
    year: 2023,
    mileage: 2000,
    fuelType: "Gasoline",
    transmission: "Manual",
  },
  {
    id: 11,
    name: "2022 Honda CR-V",
    price: 32000,
    category: "SUV",
    image: "/products/2023-honda-cr-v.jpg",
    year: 2022,
    mileage: 15000,
    fuelType: "Gasoline",
    transmission: "Automatic",
  },
  {
    id: 12,
    name: "2021 Volkswagen Golf",
    price: 25000,
    category: "Hatchback",
    image: "/products/vw-golf-gti-2024.jpg",
    year: 2021,
    mileage: 22000,
    fuelType: "Gasoline",
    transmission: "Manual",
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Our Inventory</h1>

      {/* Filters and Sort */}
      <div className="mb-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <div className="p-2">
                <h4 className="mb-2 font-medium">Categories</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="luxury" />
                    <label htmlFor="luxury" className="text-sm">
                      Luxury
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sports" />
                    <label htmlFor="sports" className="text-sm">
                      Sports
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="suv" />
                    <label htmlFor="suv" className="text-sm">
                      SUV
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sedan" />
                    <label htmlFor="sedan" className="text-sm">
                      Sedan
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="electric" />
                    <label htmlFor="electric" className="text-sm">
                      Electric
                    </label>
                  </div>
                </div>
                <h4 className="mb-2 mt-4 font-medium">Price Range</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Input type="number" placeholder="Min" className="h-8" />
                  <Input type="number" placeholder="Max" className="h-8" />
                </div>
                <h4 className="mb-2 mt-4 font-medium">Year</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Input type="number" placeholder="From" className="h-8" />
                  <Input type="number" placeholder="To" className="h-8" />
                </div>
                <div className="mt-4 flex justify-end">
                  <Button size="sm">Apply</Button>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <Select defaultValue="featured">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="mileage">Lowest Mileage</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cars.map((car) => (
          <Card key={car.id} className="overflow-hidden">
            <Link href={`/products/${car.id}`} className="block">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                {car.mileage < 100 && <Badge className="absolute left-2 top-2 bg-green-500">New</Badge>}
              </div>
            </Link>
            <CardHeader className="p-4">
              <Link href={`/products/${car.id}`} className="block">
                <CardTitle className="text-lg">{car.name}</CardTitle>
              </Link>
              <p className="text-sm text-gray-500">{car.category}</p>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="mb-3 text-xl font-medium">${car.price.toLocaleString()}</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4 text-primary" />
                  <span>{car.year}</span>
                </div>
                <div className="flex items-center">
                  <Gauge className="mr-1 h-4 w-4 text-primary" />
                  <span>{car.mileage.toLocaleString()} mi</span>
                </div>
                <div className="flex items-center">
                  <Fuel className="mr-1 h-4 w-4 text-primary" />
                  <span>{car.fuelType}</span>
                </div>
                <div className="flex items-center">
                  <Car className="mr-1 h-4 w-4 text-primary" />
                  <span>{car.transmission}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <AddToCartButton product={car} />
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <div className="flex space-x-1">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
// Client component for Add to Cart button
;

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
    <Button className="w-full" onClick={handleAddToCart}>
      Add to Garage
    </Button>
  )
}
