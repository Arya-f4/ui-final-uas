"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, X, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useCart } from "@/components/cart-provider"
import { Badge } from "@/components/ui/badge"

export function CartDropdown() {
  const { items, itemCount, subtotal, removeItem, updateQuantity } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs">{itemCount}</Badge>
          )}
          <span className="sr-only">Shopping cart</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="p-4">
          <h3 className="mb-4 font-medium">Your Garage ({itemCount})</h3>
          {items.length === 0 ? (
            <div className="py-8 text-center">
              <p className="mb-4 text-muted-foreground">Your garage is empty</p>
              <Button asChild variant="outline" onClick={() => setOpen(false)}>
                <Link href="/products">Browse Cars</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="max-h-[300px] space-y-4 overflow-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">${item.price.toLocaleString()}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-4 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeItem(item.id)}>
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between border-t pt-4">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-medium">${subtotal.toLocaleString()}</span>
                </div>
                <Button asChild className="w-full" onClick={() => setOpen(false)}>
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
