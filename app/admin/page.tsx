"use client"

import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  Users
} from "lucide-react"
import Link from "next/link"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const recentTransactions = [
    {
        name: "Liam Johnson",
        email: "liam@example.com",
        amount: "250.00",
        avatar: "https://placehold.co/40x40/E0E0E0/333?text=LJ",
    },
    {
        name: "Olivia Smith",
        email: "olivia@example.com",
        amount: "150.00",
        avatar: "https://placehold.co/40x40/E0E0E0/333?text=OS",
    },
    {
        name: "Noah Williams",
        email: "noah@example.com",
        amount: "350.00",
        avatar: "https://placehold.co/40x40/E0E0E0/333?text=NW",
    },
    {
        name: "Emma Brown",
        email: "emma@example.com",
        amount: "450.00",
        avatar: "https://placehold.co/40x40/E0E0E0/333?text=EB",
    },
    {
        name: "James Jones",
        email: "james@example.com",
        amount: "550.00",
        avatar: "https://placehold.co/40x40/E0E0E0/333?text=JJ",
    },
];


export default function AdminDashboard() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Pendapatan
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% dari bulan lalu
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pelanggan Baru
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% dari bulan lalu
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Penjualan</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% dari bulan lalu
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Produk
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">
              +21 sejak jam terakhir
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Transaksi Terbaru</CardTitle>
              <CardDescription>
                Transaksi terbaru dari toko Anda.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/admin/transactions">
                Lihat Semua
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pelanggan</TableHead>
                  <TableHead className="text-right">Jumlah</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((transaction, index) => (
                    <TableRow key={index}>
                    <TableCell>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src={transaction.avatar} alt="Avatar" />
                                <AvatarFallback>{transaction.name.substring(0,2)}</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                {transaction.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                {transaction.email}
                                </p>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell className="text-right font-medium">${transaction.amount}</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle>Artikel Terbaru</CardTitle>
                <CardDescription>
                    Lihat dan kelola artikel terbaru di blog Anda.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Sejarah Mobil Klasik</p>
                        <p className="text-sm text-muted-foreground">Oleh John Doe - 2 hari yang lalu</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Tips Merawat Cat Mobil</p>
                        <p className="text-sm text-muted-foreground">Oleh Jane Smith - 3 hari yang lalu</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">Review Mustang 1967</p>
                        <p className="text-sm text-muted-foreground">Oleh Admin - 5 hari yang lalu</p>
                    </div>
                </div>
                 <Button asChild size="sm" className="mt-auto w-full">
                  <Link href="/admin/articles">
                    Kelola Artikel
                  </Link>
                </Button>
            </CardContent>
         </Card>
      </div>
    </>
  )
}
