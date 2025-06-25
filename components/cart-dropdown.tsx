"use client"

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { createContext, useContext, useState } from "react";
// --- Cart Logic (previously in cart-provider.tsx) ---

// Define the shape of a single cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

// Define the shape of the cart context
interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

// Create the context with a default undefined value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// --- Main Cart Dropdown Component ---

export function CartDropdown() {
  // Mock cart data and functions since the provider is not available here.
  // In a real app, this data would come from the `useCart()` hook.
  const [items, setItems] = useState<CartItem[]>([
      { id: '1', name: 'Vintage Car', price: 25000, quantity: 1, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
      { id: '2', name: 'Sleek Sports Car', price: 75000, quantity: 1, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
  ]);

  const updateQuantity = (id: string, quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };
  
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "relative")}>
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary p-0 text-xs text-primary-foreground">
                {itemCount}
            </div>
          )}
          <span className="sr-only">Shopping cart</span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" className="w-80 z-999 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
        <div>
          <h3 className="mb-4 font-medium">Your Garage ({itemCount})</h3>
          {items.length === 0 ? (
            <div className="py-8 text-center">
              <p className="mb-4 text-slate-500 dark:text-slate-400">Your garage is empty</p>
               <Link href="/products" onClick={() => setOpen(false)} className={cn(buttonVariants({ variant: "outline" }))}>
                Browse Cars
              </Link>
            </div>
          ) : (
            <>
              <div className="max-h-[300px] space-y-4 overflow-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} className="absolute h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">${item.price.toLocaleString()}</p>
                      <div className="mt-1 flex items-center gap-2">
                         <button
                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
                           className={cn(buttonVariants({ variant: "outline", size: "icon" }), "h-6 w-6")}
                         >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </button>
                        <span className="w-4 text-center text-sm">{item.quantity}</span>
                        <button
                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
                           className={cn(buttonVariants({ variant: "outline", size: "icon" }), "h-6 w-6")}
                         >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </button>
                      </div>
                    </div>
                     <button
                       onClick={() => removeItem(item.id)}
                       className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-6 w-6")}
                     >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-medium">${subtotal.toLocaleString()}</span>
                </div>
                <a href="/checkout" onClick={() => setOpen(false)} className={cn(buttonVariants(), "w-full")}>
                  Proceed to Checkout
                </a>
                <Link href="/products" onClick={() => setOpen(false)} className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
