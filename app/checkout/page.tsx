"use client"

import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CreditCard, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function CheckoutPage() {
  const { items, removeItem, updateItemQuantity, totalPrice, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const tax = totalPrice * 0.08
  const deliveryFee = 499
  const total = totalPrice + tax + deliveryFee

  const handlePlaceOrder = () => {
    // In a real app, this would submit the order to a backend
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-lg border border-indigo-600 bg-card p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 text-primary"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="mb-2 text-2xl font-bold">Order Placed Successfully!</h1>
          <p className="mb-6 text-muted-foreground">
            Thank you for your purchase. Your order has been placed and will be processed shortly.
          </p>
          <p className="mb-8 text-muted-foreground">Order confirmation has been sent to your email address.</p>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Button asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard/transactions">View My Orders</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-lg border border-indigo-600 bg-card p-8 text-center">
          <h1 className="mb-4 text-2xl font-bold">Your Garage is Empty</h1>
          <p className="mb-8 text-muted-foreground">Looks like you haven&apos;t added any vehicles to your garage yet.</p>
          <Button asChild>
            <Link href="/products">Browse Vehicles</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <Link
          href="/products"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Link>
      </div>

      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-indigo-600">
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-md border-indigo-600 border">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">${item.price.toLocaleString()}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                          <span>-</span>
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-4 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                          <span>+</span>
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${(item.price * item.quantity).toLocaleString()}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-500 hover:text-red-500"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="mt-8 rounded-lg border border-indigo-600">
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Customer Information</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="(555) 123-4567" />
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="mt-8 rounded-lg border border-indigo-600">
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Delivery Information</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="New York" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="NY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input id="zipCode" placeholder="10001" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="United States" />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="mt-8 rounded-lg border border-indigo-600">
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Payment Method</h2>
              <RadioGroup defaultValue="credit-card">
                <div className="flex items-center space-x-2 rounded-lg border border-indigo-600 p-4">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card" className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Credit / Debit Card
                  </Label>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="expiryMonth">Expiry Month</Label>
                      <Input id="expiryMonth" placeholder="MM" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiryYear">Expiry Year</Label>
                      <Input id="expiryYear" placeholder="YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* Order Total */}
        <div className="lg:col-span-1">
          <div className="rounded-lg border border-indigo-600">
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Order Total</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <Button className="mt-4 w-full" size="lg" onClick={handlePlaceOrder}>
                  Place Order
                </Button>
                <p className="mt-2 text-center text-xs text-gray-500">
                  By placing your order, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}