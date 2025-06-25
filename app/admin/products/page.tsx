"use client"

import {
  File,
  MoreHorizontal,
  PlusCircle
} from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

const products = [
    {
        id: "prod_1",
        name: "1967 Ford Mustang",
        status: "Aktif",
        price: "65000.00",
        stock: 2,
        image: "https://placehold.co/80x80/333/FFF?text=Mustang",
        description: "A classic American muscle car."
    },
    {
        id: "prod_2",
        name: "1957 Chevrolet Bel Air",
        status: "Aktif",
        price: "75000.00",
        stock: 1,
        image: "https://placehold.co/80x80/333/FFF?text=Bel+Air",
        description: "An iconic 50s automobile."
    },
    {
        id: "prod_3",
        name: "1981 DeLorean DMC-12",
        status: "Draft",
        price: "105000.00",
        stock: 0,
        image: "https://placehold.co/80x80/333/FFF?text=DeLorean",
        description: "Famous for its role in Back to the Future."
    },
     {
        id: "prod_4",
        name: "1969 Dodge Charger",
        status: "Aktif",
        price: "85000.00",
        stock: 3,
        image: "https://placehold.co/80x80/333/FFF?text=Charger",
        description: "A powerful and stylish muscle car."
    },
    {
        id: "prod_5",
        name: "1977 Pontiac Firebird",
        status: "Diarsipkan",
        price: "55000.00",
        stock: 0,
        image: "https://placehold.co/80x80/333/FFF?text=Firebird",
        description: "A distinctive and popular sports car."
    }
]

export default function AdminProductsPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
            <div>
                <CardTitle>Produk</CardTitle>
                <CardDescription>
                Kelola produk Anda dan lihat performa penjualan mereka.
                </CardDescription>
            </div>
            <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-8 gap-1">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Ekspor
                    </span>
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Tambah Produk
                        </span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Tambah Produk Baru</DialogTitle>
                      <DialogDescription>
                        Isi detail produk di bawah ini. Klik simpan jika sudah selesai.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Nama
                        </Label>
                        <Input id="name" placeholder="Contoh: Ford Mustang 1967" className="col-span-3" />
                      </div>
                       <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="price" className="text-right">
                          Harga
                        </Label>
                        <Input id="price" type="number" placeholder="65000" className="col-span-3" />
                      </div>
                       <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="stock" className="text-right">
                          Stok
                        </Label>
                        <Input id="stock" type="number" placeholder="2" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                          Deskripsi
                        </Label>
                        <Textarea id="description" placeholder="Deskripsi singkat produk" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Simpan Produk</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Gambar</span>
              </TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Harga</TableHead>
              <TableHead className="hidden md:table-cell">
                Stok
              </TableHead>
              <TableHead>
                <span className="sr-only">Aksi</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
                <TableRow key={product.id}>
                <TableCell className="hidden sm:table-cell">
                    <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={product.image}
                    width="64"
                    />
                </TableCell>
                <TableCell className="font-medium">
                    {product.name}
                </TableCell>
                <TableCell>
                    <Badge variant={product.status === 'Aktif' ? 'default' : 'outline'}>{product.status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    ${parseFloat(product.price).toLocaleString()}
                </TableCell>
                <TableCell className="hidden md:table-cell">{product.stock}</TableCell>
                <TableCell>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                        aria-haspopup="true"
                        size="icon"
                        variant="ghost"
                        >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                        <Dialog>
                            <DialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Edit</DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Edit Produk</DialogTitle>
                                    <DialogDescription>
                                        Lakukan perubahan pada produk Anda di sini. Klik simpan jika sudah selesai.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor={`name-${product.id}`} className="text-right">Nama</Label>
                                        <Input id={`name-${product.id}`} defaultValue={product.name} className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor={`price-${product.id}`} className="text-right">Harga</Label>
                                        <Input id={`price-${product.id}`} type="number" defaultValue={product.price} className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor={`stock-${product.id}`} className="text-right">Stok</Label>
                                        <Input id={`stock-${product.id}`} type="number" defaultValue={product.stock} className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor={`description-${product.id}`} className="text-right">Deskripsi</Label>
                                        <Textarea id={`description-${product.id}`} defaultValue={product.description} className="col-span-3" />
                                    </div>
                                </div>
                                <DialogFooter>
                                <Button type="submit">Simpan Perubahan</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-red-600 hover:!text-red-600 focus:!text-red-600">Hapus</DropdownMenuItem>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle>Apakah Anda benar-benar yakin?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Tindakan ini tidak bisa dibatalkan. Ini akan menghapus produk <strong>{product.name}</strong> secara permanen dari daftar.
                                </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                <AlertDialogCancel>Batal</AlertDialogCancel>
                                <AlertDialogAction className="bg-red-600 hover:bg-red-700">Lanjutkan</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Menampilkan <strong>1-5</strong> dari <strong>5</strong> produk
        </div>
      </CardFooter>
    </Card>
  )
}
