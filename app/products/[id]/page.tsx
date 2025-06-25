"use client"

import { useCart } from "@/components/cart-provider";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, Calendar, Car, Fuel, Gauge, MapPin, ShieldCheck, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

// --- Type Definitions for Car Data ---
interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
}

interface RelatedCar {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface Specifications {
  [key: string]: string;
}

interface CarData {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  category: string;
  year: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  engine: string;
  exteriorColor: string;
  interiorColor: string;
  vin: string;
  stockNumber: string;
  location: string;
  images: string[];
  description: string;
  features: string[];
  specifications: Specifications;
  relatedCars: RelatedCar[];
  reviews: Review[];
}


// --- Mock Data ---
const getCarById = (id: string): CarData | null => {
 const cars: { [key: string]: CarData } = {
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
        "https://images.unsplash.com/photo-1616421233880-ca927d2e20b6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1616421234424-038c114a8f9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1616421234390-5b4d7c9f7a7c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1616421234336-6ide4a32b2f6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          name: "2023 BMW X5",
          price: 65000,
          category: "Luxury SUV",
          image: "https://images.unsplash.com/photo-1587930982522-e8b843d191a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 3,
          name: "2023 Tesla Model 3",
          price: 45000,
          category: "Electric",
          image: "https://images.unsplash.com/photo-1554495532-3e28a47d3368?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 4,
          name: "2023 Lexus LS",
          price: 78000,
          category: "Luxury Sedan",
          image: "https://images.unsplash.com/photo-1623862414707-b04e6c967672?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      reviews: [
        {
          id: 1,
          author: "Michael Thompson",
          avatar: "https://placehold.co/40x40/EFEFEF/333333?text=MT",
          rating: 5,
          date: "March 15, 2023",
          content:
            "The S-Class is simply the best car I've ever owned. The technology is mind-blowing, especially the augmented reality navigation. The ride quality is unmatched - it feels like you're floating on a cloud. Interior quality and attention to detail are second to none. Worth every penny for those who appreciate automotive excellence.",
        },
        {
          id: 2,
          author: "Sarah Johnson",
          avatar: "https://placehold.co/40x40/EFEFEF/333333?text=SJ",
          rating: 5,
          date: "February 28, 2023",
          content:
            "After test driving several luxury sedans, the S-Class stood out as the clear winner. The cabin is whisper-quiet, the seats are incredibly comfortable, and the Burmester sound system is phenomenal. The driver assistance features make long trips much less fatiguing. My only minor complaint is that the MBUX system has a bit of a learning curve.",
        },
        {
          id: 3,
          author: "David Wilson",
          avatar: "https://placehold.co/40x40/EFEFEF/333333?text=DW",
          rating: 4,
          date: "January 10, 2023",
          content:
            "This is my third S-Class, and Mercedes has raised the bar yet again. The new model improves on its predecessor in almost every way. The interior is more luxurious, the technology more advanced, and the driving experience more refined. I deducted one star only because the trunk space is slightly reduced compared to the previous generation.",
        },
      ],
    },
  };
 return cars[id] || null;
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
 const car = getCarById(params.id);
 const [selectedImage, setSelectedImage] = useState(0);
 const { addItem } = useCart();

 if (!car) {
    notFound();
 }

 const handleAddToCart = () => {
    addItem({
      id: car.id.toString(),
      name: car.name,
      price: car.price,
      image: car.images[0],
      quantity: 1,
    });
  };

 return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/products"
          className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
 >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Inventory
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-3">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted/30 md:aspect-square lg:aspect-[4/3]">
            <Image
              src={car.images[selectedImage] || "https://placehold.co/600x400/eee/ccc?text=Image"}
              alt={car.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {car.images.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-square cursor-pointer overflow-hidden rounded-md border transition-all ${
                  selectedImage === index ? "ring-2 ring-primary ring-offset-2" : "border-border hover:border-primary/70"
                }`}
                onClick={() => setSelectedImage(index)}
 >
                <Image
                  src={image || "https://placehold.co/100x100/eee/ccc?text=Image"}
                  alt={`${car.name} - View ${index + 1}`}
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div>
            <Badge variant="secondary" className="mb-2 text-xs uppercase tracking-wider">{car.category}</Badge>
            <h1 className="mb-1 text-3xl font-bold text-foreground lg:text-4xl">{car.name}</h1>
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
                        : "fill-muted-foreground/20 text-muted-foreground/50"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  {car.rating.toFixed(1)} ({car.reviewCount} reviews)
                </span>
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary lg:text-4xl">${car.price.toLocaleString()}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Est. ${Math.round(car.price / 60).toLocaleString()}/mo with financing
              </p>
            </div>
          </div>

          <div className="space-y-3 leading-relaxed text-foreground/90">
            <p>{car.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 rounded-lg border border-border/50 bg-muted/20 p-4">
            {[
              { icon: Calendar, label: "Year", value: car.year.toString() },
              { icon: Gauge, label: "Mileage", value: `${car.mileage.toLocaleString()} miles` },
              { icon: Fuel, label: "Fuel Type", value: car.fuelType },
              { icon: Car, label: "Transmission", value: car.transmission },
              { icon: MapPin, label: "Location", value: car.location },
              { icon: ShieldCheck, label: "VIN", value: car.vin },
            ].map(item => (
              <div key={item.label} className="flex items-start space-x-2">
                <item.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              Add to Garage
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="lg">Schedule Test Drive</Button>
              <Button variant="outline" size="lg">Get Financing</Button>
            </div>
          </div>

          <div className="space-y-2 rounded-lg border border-border/50 bg-muted/20 p-4 text-sm">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Truck className="h-5 w-5 text-primary/80" />
              <span>Free delivery within 50 miles</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-primary/80" />
              <span>3-year/36,000-mile warranty included</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 lg:mt-16">
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:inline-flex md:w-auto">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({car.reviews.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="prose prose-sm max-w-none dark:prose-invert sm:prose-base mt-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">Key Features</h3>
            <ul className="list-disc space-y-2 pl-5 text-foreground/90">
              {car.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="specifications" className="mt-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">Technical Specifications</h3>
            <div className="overflow-hidden rounded-md border border-border/50">
              {Object.entries(car.specifications).map(([key, value]) => (
                <div key={key} className="flex flex-col p-3 text-sm even:bg-muted/30 odd:bg-transparent sm:flex-row">
                  <span className="mb-1 font-medium text-muted-foreground sm:mb-0 sm:w-1/3 lg:w-1/4">{key}</span>
                  <span className="text-foreground sm:w-2/3 lg:w-3/4">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <h3 className="text-xl font-semibold text-foreground">Customer Reviews</h3>
                <Button variant="outline">Write a Review</Button>
              </div>
              <div className="space-y-6">
                {car.reviews.length > 0 ? car.reviews.map((review) => (
                  <Card key={review.id} className="bg-muted/30">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="relative h-10 w-10">
                            <Image src={review.avatar} alt={review.author} fill sizes="40px" className="rounded-full" />
                            <AvatarFallback>{review.author.substring(0,2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">{review.author}</CardTitle>
                            <CardDescription className="text-xs">{review.date}</CardDescription>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "fill-muted-foreground/20 text-muted-foreground/50"}`} />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3 text-sm leading-relaxed text-foreground/90">
                      <p>{review.content}</p>
                    </CardContent>
                  </Card>
                )) : (
                  <p className="text-muted-foreground">No reviews yet for this vehicle.</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-12 lg:mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Similar Vehicles</h2>
          <Button variant="ghost" asChild className="text-sm font-medium text-primary hover:text-primary/80">
            <Link href="/products">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {car.relatedCars.map((relatedCar) => (
            <Card key={relatedCar.id} className="group overflow-hidden transition-shadow hover:shadow-xl">
              <Link href={`/products/${relatedCar.id}`} className="block">
                <div className="relative aspect-video overflow-hidden bg-muted/30">
                  <Image
                    src={relatedCar.image || "https://placehold.co/400x225/eee/ccc?text=Image"}
                    alt={relatedCar.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="space-y-1 p-4">
                <Link href={`/products/${relatedCar.id}`} className="block">
                  <h3 className="truncate font-medium text-foreground transition-colors group-hover:text-primary">{relatedCar.name}</h3>
                </Link>
                  {relatedCar.category && <p className="text-xs text-muted-foreground">{relatedCar.category}</p>}
                <p className="text-lg font-semibold text-primary">${relatedCar.price.toLocaleString()}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 w-full"
                  onClick={() => {
                    addItem({ id: relatedCar.id.toString(), name: relatedCar.name, price: relatedCar.price, image: relatedCar.image, quantity: 1 });
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
