"use client"

import { useState } from "react"
import Image from "next/image"
import { Edit, MoreHorizontal, Plus, Search, Trash, Car } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)
  const [isEditProductOpen, setIsEditProductOpen] = useState(false)
  const [currentCar, setCurrentCar] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all-status")

  // Mock car data
  const cars = [
    {
      id: 1,
      name: "2023 Mercedes-Benz S-Class",
      price: 110000,
      category: "Luxury Sedan",
      status: "In Stock",
      year: 2023,
      image: "/placeholder.svg?height=100&width=100&text=Mercedes",
      description: "Luxury sedan with premium features, leather interior, and advanced technology package."
    },
    {
      id: 2,
      name: "2023 BMW X5",
      price: 65000,
      category: "Luxury SUV",
      status: "In Stock",
      year: 2023,
      image: "/placeholder.svg?height=100&width=100&text=BMW",
      description: "Versatile luxury SUV with spacious interior, all-wheel drive, and premium sound system."
    },
    {
      id: 3,
      name: "2023 Tesla Model 3",
      price: 45000,
      category: "Electric",
      status: "In Stock",
      year: 2023,
      image: "/placeholder.svg?height=100&width=100&text=Tesla",
      description: "All-electric sedan with long range battery, autopilot capabilities, and minimalist interior."
    },
    {
      id: 4,
      name: "2023 Porsche 911",
      price: 120000,
      category: "Sports Car",
      status: "On Order",
      year: 2023,
      image: "/placeholder.svg?height=100&width=100&text=Porsche",
      description: "Iconic sports car with rear-engine layout, exceptional handling, and race-inspired performance."
    },
    {
      id: 5,
      name: "2022 Audi Q7",
      price: 58000,
      category: "Luxury SUV",
      status: "In Stock",
      year: 2022,
      image: "/placeholder.svg?height=100&width=100&text=Audi",
      description: "Three-row luxury SUV with Quattro all-wheel drive, panoramic sunroof, and premium interior."
    },
  ]

  // Handle edit car
  const handleEditCar = (car) => {
    setCurrentCar(car)
    setIsEditProductOpen(true)
  }

  // Filter cars based on search query and filters
  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || car.category.toLowerCase().replace(" ", "-") === categoryFilter
    const matchesStatus = statusFilter === "all-status" || car.status.toLowerCase().replace(" ", "-") === statusFilter
    
    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Vehicle Management</h1>
        <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Vehicle
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Vehicle</DialogTitle>
              <DialogDescription>Fill in the details to add a new vehicle to the inventory.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Vehicle Name
                </Label>
                <Input id="name" placeholder="2023 Mercedes-Benz S-Class" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input id="price" type="number" placeholder="110000" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="year" className="text-right">
                  Year
                </Label>
                <Input id="year" type="number" placeholder="2023" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="luxury-sedan">Luxury Sedan</SelectItem>
                    <SelectItem value="luxury-suv">Luxury SUV</SelectItem>
                    <SelectItem value="sports-car">Sports Car</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-stock">In Stock</SelectItem>
                    <SelectItem value="on-order">On Order</SelectItem>
                    <SelectItem value="sold">Sold</SelectItem>
                    <SelectItem value="reserved">Reserved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Enter vehicle description..."
                  className="col-span-3 min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image
                </Label>
                <Input id="image" type="file" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddProductOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddProductOpen(false)}>Add Vehicle</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search vehicles..." 
            className="pl-8" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Filter by:</span>
          <Select 
            value={categoryFilter}
            onValueChange={setCategoryFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="luxury-sedan">Luxury Sedan</SelectItem>
              <SelectItem value="luxury-suv">Luxury SUV</SelectItem>
              <SelectItem value="sports-car">Sports Car</SelectItem>
              <SelectItem value="electric">Electric</SelectItem>
            </SelectContent>
          </Select>
          <Select 
            value={statusFilter}
            onValueChange={setStatusFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status">All Status</SelectItem>
              <SelectItem value="in-stock">In Stock</SelectItem>
              <SelectItem value="on-order">On Order</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
              <SelectItem value="reserved">Reserved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vehicle</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCars.map((car) => (
              <TableRow key={car.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-md">
                      <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
                    </div>
                    <span className="font-medium">{car.name}</span>
                  </div>
                </TableCell>
                <TableCell>{car.category}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>${car.price.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      car.status === "In Stock"
                        ? "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300"
                        : car.status === "On Order"
                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300"
                        : car.status === "Sold"
                        ? "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300"
                        : "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300"
                    }
                  >
                    {car.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEditCar(car)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Car className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing {filteredCars.length > 0 ? 1 : 0}-{filteredCars.length} of {filteredCars.length} vehicles
        </p>
        <div className="flex space-x-1">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            1
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>

      {/* Edit Vehicle Dialog */}
      {currentCar && (
        <Dialog open={isEditProductOpen} onOpenChange={setIsEditProductOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Vehicle</DialogTitle>
              <DialogDescription>Update the details of this vehicle in the inventory.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  Vehicle Name
                </Label>
                <Input id="edit-name" defaultValue={currentCar.name} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-price" className="text-right">
                  Price
                </Label>
                <Input id="edit-price" type="number" defaultValue={currentCar.price} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-year" className="text-right">
                  Year
                </Label>
                <Input id="edit-year" type="number" defaultValue={currentCar.year} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-category" className="text-right">
                  Category
                </Label>
                <Select defaultValue={currentCar.category.toLowerCase().replace(" ", "-")}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="luxury-sedan">Luxury Sedan</SelectItem>
                    <SelectItem value="luxury-suv">Luxury SUV</SelectItem>
                    <SelectItem value="sports-car">Sports Car</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="text-right">
                  Status
                </Label>
                <Select defaultValue={currentCar.status.toLowerCase().replace(" ", "-")}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-stock">In Stock</SelectItem>
                    <SelectItem value="on-order">On Order</SelectItem>
                    <SelectItem value="sold">Sold</SelectItem>
                    <SelectItem value="reserved">Reserved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="edit-description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="edit-description"
                  defaultValue={currentCar.description}
                  className="col-span-3 min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-image" className="text-right">
                  Image
                </Label>
                <div className="col-span-3 flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image src={currentCar.image || "/placeholder.svg"} alt={currentCar.name} fill className="object-cover" />
                  </div>
                  <Input id="edit-image" type="file" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditProductOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsEditProductOpen(false)}>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
