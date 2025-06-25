"use client"

import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CartDropdown() {
  const { items, removeItem, updateItemQuantity, clearCart, totalItems, totalPrice } = useCart()
  const isMobile = useMobile()

  const CartContent = () => (
    <div className="flex h-full flex-col">
      {items.length > 0 ? (
        <>
          <ScrollArea className="flex-grow">
            <div className="pr-4">
              {items.map(item => (
                <div key={item.id} className="flex items-start gap-4 py-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image
                      src={item.image || "https://placehold.co/80x80/eee/ccc?text=Image"}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-base font-medium text-gray-900 dark:text-gray-50">
                      <h3>
                        <Link href={`/products/${item.id}`}>{item.name}</Link>
                      </h3>
                      <p className="ml-4">${item.price.toLocaleString()}</p>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-600"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900 dark:text-gray-50">
              <p>Subtotal</p>
              <p>${totalPrice.toLocaleString()}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href="/checkout">Checkout</Link>
              </Button>
            </div>
            <div className="mt-4 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{' '}
                <Button variant="link" className="p-0" onClick={clearCart}>
                  Clear Cart
                </Button>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-grow flex-col items-center justify-center gap-4 p-4 text-center">
          <ShoppingCart className="h-16 w-16 text-gray-400" />
          <h3 className="text-lg font-semibold">Your Garage is Empty</h3>
          <p className="text-sm text-gray-500">Add some cars to get started.</p>
          <Button asChild>
            <Link href="/products">Browse Inventory</Link>
          </Button>
        </div>
      )}
    </div>
  )

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
            <span className="sr-only">Open cart</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Your Garage</SheetTitle>
          </SheetHeader>
          <CartContent />
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {totalItems}
            </span>
          )}
           <span className="sr-only">Open cart</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 p-0" align="end">
        <DropdownMenuLabel className="px-4 py-3 text-lg font-semibold">Your Garage</DropdownMenuLabel>
        <Separator />
        <div className="max-h-[60vh]">
          <CartContent />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
