import {
    Menu,
    Package2,
} from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"

import { AdminNav } from "@/components/admin-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

/**
 * Defines the main layout for the admin section.
 * It includes a persistent sidebar for desktop and a sheet-based menu for mobile.
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The child pages to be rendered within the layout.
 */
export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Desktop Sidebar */}
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6 text-primary" />
              <span className="">AutoClassic</span>
            </Link>
          </div>
          <div className="flex-1">
            <AdminNav />
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Butuh Bantuan?</CardTitle>
                <CardDescription>
                  Hubungi tim support kami jika Anda menemukan masalah.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Hubungi Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          {/* Mobile Navigation Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="flex h-14 items-center border-b px-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Package2 className="h-6 w-6 text-primary" />
                  <span className="">AutoClassic</span>
                </Link>
              </div>
              <div className="flex-1 overflow-y-auto">
                <AdminNav isMobile={true}/>
              </div>
              <div className="mt-auto p-4 border-t">
                <Card>
                <CardHeader>
                    <CardTitle>Butuh Bantuan?</CardTitle>
                    <CardDescription>
                      Hubungi tim support kami.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Hubungi Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          
          <div className="w-full flex-1">
            {/* Header content like search can go here */}
          </div>

          <ModeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Image
                    src="https://placehold.co/32x32/E0E0E0/333?text=A"
                    width={32}
                    height={32}
                    alt="Avatar"
                    className="rounded-full"
                  />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Pengaturan</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  )
}
