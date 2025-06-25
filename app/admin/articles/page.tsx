"use client"

import {
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

const articles = [
    {
        id: "art_1",
        title: "Sejarah Panjang di Balik Kemewahan Ford Mustang Klasik",
        author: "John Doe",
        status: "Published",
        createdAt: "2023-10-25",
        content: "Ford Mustang adalah salah satu mobil paling ikonik dalam sejarah otomotif Amerika..."
    },
    {
        id: "art_2",
        title: "5 Tips Jitu Merawat Cat Mobil Klasik Agar Tetap Kinclong",
        author: "Jane Smith",
        status: "Published",
        createdAt: "2023-10-24",
        content: "Merawat cat mobil klasik membutuhkan perhatian khusus agar tetap terlihat seperti baru..."
    },
    {
        id: "art_3",
        title: "Melihat Lebih Dekat Restorasi Chevrolet Bel Air 1957",
        author: "Admin",
        status: "Draft",
        createdAt: "2023-10-22",
        content: "Proses restorasi Chevrolet Bel Air 1957 adalah perjalanan yang memadukan seni dan teknik..."
    },
    {
        id: "art_4",
        title: "Pontiac Firebird Trans Am: Ikon Otomotif Era 70-an",
        author: "Chris Evan",
        status: "Published",
        createdAt: "2023-10-20",
        content: "Pontiac Firebird Trans Am menjadi simbol kekuatan dan gaya pada era 70-an..."
    },
];

export default function AdminArticlesPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
            <div>
                <CardTitle>Artikel Blog</CardTitle>
                <CardDescription>
                Buat dan kelola artikel untuk blog Anda.
                </CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Tambah Artikel
                    </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Tambah Artikel Baru</DialogTitle>
                  <DialogDescription>
                    Isi detail artikel di bawah ini. Klik simpan jika sudah selesai.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Judul</Label>
                    <Input id="title" placeholder="Judul Artikel" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="content">Konten</Label>
                    <Textarea id="content" placeholder="Tulis konten artikel Anda di sini..." className="min-h-[200px]" />
                  </div>
                   <div className="grid gap-2">
                    <Label htmlFor="image">Gambar Unggulan</Label>
                    <Input id="image" type="file" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Simpan Artikel</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Judul</TableHead>
              <TableHead className="hidden md:table-cell">Penulis</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Tanggal</TableHead>
              <TableHead>
                <span className="sr-only">Aksi</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article) => (
                <TableRow key={article.id}>
                <TableCell className="font-medium">
                    {article.title}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    {article.author}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    <Badge variant={article.status === 'Published' ? 'default' : 'outline'}>{article.status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    {new Date(article.createdAt).toLocaleDateString()}
                </TableCell>
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
                            <DialogContent className="sm:max-w-2xl">
                                <DialogHeader>
                                    <DialogTitle>Edit Artikel</DialogTitle>
                                    <DialogDescription>
                                        Lakukan perubahan pada artikel Anda di sini. Klik simpan jika sudah selesai.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor={`title-${article.id}`}>Judul</Label>
                                        <Input id={`title-${article.id}`} defaultValue={article.title} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`content-${article.id}`}>Konten</Label>
                                        <Textarea id={`content-${article.id}`} defaultValue={article.content} className="min-h-[200px]" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`image-${article.id}`}>Gambar Unggulan</Label>
                                        <Input id={`image-${article.id}`} type="file" />
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
                                    Tindakan ini tidak bisa dibatalkan. Ini akan menghapus artikel <strong>"{article.title}"</strong> secara permanen.
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
          Menampilkan <strong>1-4</strong> dari <strong>4</strong> artikel
        </div>
      </CardFooter>
    </Card>
  )
}
