"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Car, Plus, Upload, Eye, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

// Mock data for existing products and blogs
const existingProducts = [
  {
    id: 1,
    name: "BMW X5 M Competition",
    category: "Luxury SUV",
    price: "$108,900",
    status: "Active",
  },
  {
    id: 2,
    name: "Mercedes-Benz S-Class",
    category: "Luxury Sedan",
    price: "$115,000",
    status: "Active",
  },
]

const existingBlogs = [
  {
    id: 1,
    title: "Top 10 Luxury Cars of 2024",
    category: "Reviews",
    status: "Published",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Electric vs Hybrid: Which is Right for You?",
    category: "Guides",
    status: "Draft",
    date: "2024-01-10",
  },
]

export default function AdminDashboard() {
  const [productForm, setProductForm] = useState({
    name: "",
    category: "",
    price: "",
    monthlyPayment: "",
    description: "",
    year: "",
    mileage: "",
    fuelType: "",
    transmission: "",
    location: "",
    vin: "",
    features: "",
    specifications: "",
    images: [],
  })

  const [blogForm, setBlogForm] = useState({
    title: "",
    category: "",
    excerpt: "",
    content: "",
    author: "",
    tags: "",
    featuredImage: null,
  })

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Product submitted:", productForm)
    // Handle product submission logic here
    alert("Product added successfully!")
    setProductForm({
      name: "",
      category: "",
      price: "",
      monthlyPayment: "",
      description: "",
      year: "",
      mileage: "",
      fuelType: "",
      transmission: "",
      location: "",
      vin: "",
      features: "",
      specifications: "",
      images: [],
    })
  }

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Blog submitted:", blogForm)
    // Handle blog submission logic here
    alert("Blog post created successfully!")
    setBlogForm({
      title: "",
      category: "",
      excerpt: "",
      content: "",
      author: "",
      tags: "",
      featuredImage: null,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Car className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">Auto Elite</span>
              </Link>
              <Badge variant="secondary">Admin Dashboard</Badge>
            </div>
            <Link href="/">
              <Button variant="outline">Back to Site</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your vehicles, blog posts, and website content</p>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="blogs">Blog Posts</TabsTrigger>
            <TabsTrigger value="add-product">Add Product</TabsTrigger>
            <TabsTrigger value="add-blog">Add Blog</TabsTrigger>
          </TabsList>

          {/* Products Management */}
          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Vehicle Inventory
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Vehicle
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {existingProducts.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {product.category} • {product.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={product.status === "Active" ? "default" : "secondary"}>{product.status}</Badge>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blog Management */}
          <TabsContent value="blogs">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Blog Posts
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Blog Post
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {existingBlogs.map((blog) => (
                    <div key={blog.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{blog.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {blog.category} • {blog.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={blog.status === "Published" ? "default" : "secondary"}>{blog.status}</Badge>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add Product Form */}
          <TabsContent value="add-product">
            <Card>
              <CardHeader>
                <CardTitle>Add New Vehicle</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProductSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Vehicle Name</Label>
                      <Input
                        id="name"
                        value={productForm.name}
                        onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                        placeholder="BMW X5 M Competition"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={productForm.category}
                        onValueChange={(value) => setProductForm({ ...productForm, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="luxury-sedan">Luxury Sedan</SelectItem>
                          <SelectItem value="luxury-suv">Luxury SUV</SelectItem>
                          <SelectItem value="sports-car">Sports Car</SelectItem>
                          <SelectItem value="convertible">Convertible</SelectItem>
                          <SelectItem value="coupe">Coupe</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Price</Label>
                      <Input
                        id="price"
                        value={productForm.price}
                        onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                        placeholder="$108,900"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="monthlyPayment">Monthly Payment</Label>
                      <Input
                        id="monthlyPayment"
                        value={productForm.monthlyPayment}
                        onChange={(e) => setProductForm({ ...productForm, monthlyPayment: e.target.value })}
                        placeholder="$1,850"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={productForm.description}
                      onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                      placeholder="Detailed vehicle description..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="year">Year</Label>
                      <Input
                        id="year"
                        value={productForm.year}
                        onChange={(e) => setProductForm({ ...productForm, year: e.target.value })}
                        placeholder="2024"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="mileage">Mileage</Label>
                      <Input
                        id="mileage"
                        value={productForm.mileage}
                        onChange={(e) => setProductForm({ ...productForm, mileage: e.target.value })}
                        placeholder="2,450 miles"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="fuelType">Fuel Type</Label>
                      <Select
                        value={productForm.fuelType}
                        onValueChange={(value) => setProductForm({ ...productForm, fuelType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select fuel type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gasoline">Gasoline</SelectItem>
                          <SelectItem value="premium-gasoline">Premium Gasoline</SelectItem>
                          <SelectItem value="diesel">Diesel</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                          <SelectItem value="electric">Electric</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="transmission">Transmission</Label>
                      <Select
                        value={productForm.transmission}
                        onValueChange={(value) => setProductForm({ ...productForm, transmission: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select transmission" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="automatic">Automatic</SelectItem>
                          <SelectItem value="manual">Manual</SelectItem>
                          <SelectItem value="cvt">CVT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={productForm.location}
                        onChange={(e) => setProductForm({ ...productForm, location: e.target.value })}
                        placeholder="Beverly Hills, CA"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="vin">VIN Number</Label>
                    <Input
                      id="vin"
                      value={productForm.vin}
                      onChange={(e) => setProductForm({ ...productForm, vin: e.target.value })}
                      placeholder="WBAFG9C50DD123456"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="features">Features (one per line)</Label>
                    <Textarea
                      id="features"
                      value={productForm.features}
                      onChange={(e) => setProductForm({ ...productForm, features: e.target.value })}
                      placeholder="M Performance TwinPower Turbo V8 Engine&#10;xDrive Intelligent All-Wheel Drive&#10;Adaptive M Suspension Professional"
                      rows={6}
                    />
                  </div>

                  <div>
                    <Label htmlFor="specifications">Technical Specifications (Label: Value format, one per line)</Label>
                    <Textarea
                      id="specifications"
                      value={productForm.specifications}
                      onChange={(e) => setProductForm({ ...productForm, specifications: e.target.value })}
                      placeholder="Engine: 4.4L Twin-Turbo V8&#10;Horsepower: 617 hp&#10;Torque: 553 lb-ft"
                      rows={6}
                    />
                  </div>

                  <div>
                    <Label htmlFor="images">Vehicle Images</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      <Input type="file" multiple accept="image/*" className="mt-4" />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Add Vehicle to Inventory
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add Blog Form */}
          <TabsContent value="add-blog">
            <Card>
              <CardHeader>
                <CardTitle>Create New Blog Post</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBlogSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="blog-title">Blog Title</Label>
                    <Input
                      id="blog-title"
                      value={blogForm.title}
                      onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                      placeholder="Top 10 Luxury Cars of 2024"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="blog-category">Category</Label>
                      <Select
                        value={blogForm.category}
                        onValueChange={(value) => setBlogForm({ ...blogForm, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reviews">Reviews</SelectItem>
                          <SelectItem value="guides">Guides</SelectItem>
                          <SelectItem value="news">News</SelectItem>
                          <SelectItem value="tips">Tips</SelectItem>
                          <SelectItem value="comparisons">Comparisons</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="blog-author">Author</Label>
                      <Input
                        id="blog-author"
                        value={blogForm.author}
                        onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="blog-excerpt">Excerpt</Label>
                    <Textarea
                      id="blog-excerpt"
                      value={blogForm.excerpt}
                      onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                      placeholder="Brief description of the blog post..."
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="blog-content">Content</Label>
                    <Textarea
                      id="blog-content"
                      value={blogForm.content}
                      onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                      placeholder="Write your blog content here..."
                      rows={12}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="blog-tags">Tags (comma separated)</Label>
                    <Input
                      id="blog-tags"
                      value={blogForm.tags}
                      onChange={(e) => setBlogForm({ ...blogForm, tags: e.target.value })}
                      placeholder="luxury cars, BMW, Mercedes, reviews"
                    />
                  </div>

                  <div>
                    <Label htmlFor="blog-image">Featured Image</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-2">Click to upload featured image</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
                      <Input type="file" accept="image/*" className="mt-4" />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" size="lg" className="flex-1">
                      Publish Blog Post
                    </Button>
                    <Button type="button" variant="outline" size="lg" className="flex-1">
                      Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
