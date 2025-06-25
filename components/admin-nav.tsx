"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
    FileText,
    Home,
    LineChart,
    Package,
    ShoppingCart,
    Users,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Defines the navigation links for the admin panel
const navLinks = [
    {
        href: "/admin",
        label: "Dashboard",
        icon: Home,
    },
    {
        href: "/admin/products",
        label: "Produk",
        icon: Package,
    },
    {
        href: "/admin/articles",
        label: "Artikel",
        icon: FileText,
    },
    {
        href: "/admin/transactions",
        label: "Transaksi",
        icon: ShoppingCart,
        badge: "6",
    },
    {
        href: "/admin/users",
        label: "Pengguna",
        icon: Users,
    },
    {
        href: "/admin/analytics",
        label: "Analitik",
        icon: LineChart,
    },
];

/**
 * Renders the admin navigation menu.
 * It uses the `usePathname` hook to highlight the currently active link.
 * @param {object} props - The component props.
 * @param {boolean} [props.isMobile=false] - Flag to adjust styles for mobile view if needed.
 */
export function AdminNav({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname();

  return (
    <nav className="grid items-start gap-1 px-2 text-sm font-medium lg:px-4">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
            pathname === link.href && "bg-muted text-primary" // Applies active styles
          )}
        >
          <link.icon className="h-4 w-4" />
          {link.label}
          {link.badge && (
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              {link.badge}
            </Badge>
          )}
        </Link>
      ))}
    </nav>
  );
}
