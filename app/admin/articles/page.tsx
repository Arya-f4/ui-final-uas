"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator"; // Impor Separator
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import {
  AlignCenter, // Icon untuk toolbar
  AlignLeft, // Icon untuk toolbar
  AlignRight,
  Bold,
  Calendar,
  Edit, // Icon untuk toolbar
  Heading2, // Icon untuk toolbar
  Image as ImageIcon, // Icon untuk toolbar
  Italic, // Icon untuk toolbar
  Link as LinkIcon, // Icon untuk toolbar
  List as ListIcon,
  MoreHorizontal,
  Plus,
  Search,
  Trash, // Icon untuk toolbar
  Underline, // Icon untuk toolbar
} from "lucide-react";
import Image from "next/image"; // Impor Image jika diperlukan untuk preview gambar
import { useState } from "react";

// Definisikan tipe untuk artikel agar lebih aman
interface Article {
  id: number
  title: string
  category: string
  status: "Published" | "Draft" | string // Perluas string jika ada status lain
  date: string
  content?: string // Konten artikel, opsional untuk data awal
  slug?: string
  metaDescription?: string
  featuredImage?: string | File // Bisa string (URL) atau File (untuk upload baru)
}

export default function ArticlesPage() {
  const [isAddArticleOpen, setIsAddArticleOpen] = useState(false)
  const [isEditArticleOpen, setIsEditArticleOpen] = useState(false)
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null)

  // Data artikel mock
  const [articles, setArticles] = useState<Article[]>([
    {
      id: 1,
      title: "Memulai dengan Next.js",
      category: "Teknologi",
      status: "Published",
      date: "10 Mei 2023",
      content: "<p>Ini adalah konten <strong>awal</strong> untuk artikel Next.js.</p><ul><li>Poin satu</li><li>Poin dua</li></ul>",
      slug: "memulai-dengan-nextjs",
      metaDescription: "Pelajari dasar-dasar Next.js.",
      featuredImage: "/placeholder.svg?height=100&width=150&text=Gambar+Unggulan+1",
    },
    {
      id: 2,
      title: "Masa Depan E-commerce",
      category: "Bisnis",
      status: "Draft",
      date: "15 Mei 2023",
      content: "Konten draf tentang e-commerce.",
      slug: "masa-depan-ecommerce",
    },
    {
      id: 3,
      title: "10 Tips Produktivitas",
      category: "Gaya Hidup",
      status: "Published",
      date: "20 Mei 2023",
      content: "Tips untuk meningkatkan produktivitas harian Anda.",
    },
    {
      id: 4,
      title: "Memahami React Hooks",
      category: "Teknologi",
      status: "Published",
      date: "25 Mei 2023",
      content: "Penjelasan mendalam tentang React Hooks.",
    },
    {
      id: 5,
      title: "Membangun Merek Pribadi",
      category: "Bisnis",
      status: "Draft",
      date: "30 Mei 2023",
      content: "Langkah-langkah membangun merek pribadi yang kuat.",
    },
  ])

  // State untuk form edit
  const [editFormData, setEditFormData] = useState<Partial<Article>>({})

  const handleEditArticle = (article: Article) => {
    setCurrentArticle(article)
    setEditFormData({ // Inisialisasi form dengan data artikel saat ini
      title: article.title,
      category: article.category,
      content: article.content || "",
      status: article.status,
      slug: article.slug || "",
      metaDescription: article.metaDescription || "",
      featuredImage: article.featuredImage || "",
    })
    setIsEditArticleOpen(true)
  }

  const handleEditFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setEditFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEditSelectChange = (name: string, value: string) => {
    setEditFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEditImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Untuk dummy, kita simpan objek File atau URL preview
      // Dalam aplikasi nyata, Anda akan mengunggah file ini
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditFormData((prev) => ({ ...prev, featuredImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    if (currentArticle) {
      // Logika untuk menyimpan perubahan (dalam aplikasi nyata, ini akan memanggil API)
      console.log("Menyimpan perubahan untuk artikel:", currentArticle.id, editFormData)
      // Update data mock
      setArticles(prevArticles =>
        prevArticles.map(art =>
          art.id === currentArticle.id ? { ...art, ...editFormData, id: art.id, date: art.date } as Article : art
        )
      );
      setIsEditArticleOpen(false)
      setCurrentArticle(null)
    }
  }

  // Dummy Rich Text Editor Toolbar Component
  const DummyRichTextToolbar = () => (
    <div className="mb-2 flex flex-wrap items-center gap-1 rounded-md border border-indigo-600 bg-muted p-1">
      <Button variant="outline" size="icon" className="h-8 w-8" title="Bold">
        <Bold className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8" title="Italic">
        <Italic className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8" title="Underline">
        <Underline className="h-4 w-4" />
      </Button>
      <Separator orientation="vertical" className="h-6" />
      <Button variant="outline" size="icon" className="h-8 w-8" title="Heading">
        <Heading2 className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8" title="Link">
        <LinkIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8" title="List">
        <ListIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8" title="Image">
        <ImageIcon className="h-4 w-4" />
      </Button>
      <Separator orientation="vertical" className="h-6" />
       <Button variant="outline" size="icon" className="h-8 w-8" title="Align Left">
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8" title="Align Center">
        <AlignCenter className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8" title="Align Right">
        <AlignRight className="h-4 w-4" />
      </Button>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manajemen Artikel</h1>
        {/* Dialog Tambah Artikel */}
        <Dialog open={isAddArticleOpen} onOpenChange={setIsAddArticleOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Tambah Artikel
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Tambah Artikel Baru</DialogTitle>
              <DialogDescription>
                Isi detail di bawah untuk membuat artikel baru.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-title" className="text-right">
                  Judul
                </Label>
                <Input
                  id="add-title"
                  placeholder="Judul artikel"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-category" className="text-right">
                  Kategori
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teknologi">Teknologi</SelectItem>
                    <SelectItem value="bisnis">Bisnis</SelectItem>
                    <SelectItem value="gaya-hidup">Gaya Hidup</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="add-content" className="pt-1 text-right">
                  Konten
                </Label>
                <div className="col-span-3">
                  <DummyRichTextToolbar />
                  <Textarea
                    id="add-content"
                    placeholder="Tulis konten artikel di sini..."
                    className="min-h-[200px]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-status" className="text-right">
                  Status
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Pilih status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsAddArticleOpen(false)}
              >
                Batal
              </Button>
              <Button onClick={() => setIsAddArticleOpen(false)}>
                Tambah Artikel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filter dan Pencarian */}
      <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input placeholder="Cari artikel..." className="pl-8" />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Filter berdasarkan:</span>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Kategori</SelectItem>
              <SelectItem value="teknologi">Teknologi</SelectItem>
              <SelectItem value="bisnis">Bisnis</SelectItem>
              <SelectItem value="gaya-hidup">Gaya Hidup</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-status">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status">Semua Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tabel Artikel */}
      <div className="rounded-md border border-indigo-600">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Judul</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article) => (
              <TableRow key={article.id}>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>{article.category}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      article.status === "Published"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                    }`}
                  >
                    {article.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                    {article.date}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Buka menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEditArticle(article)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        Hapus
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Paginasi */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Menampilkan 1-{articles.length > 5 ? 5 : articles.length} dari {articles.length} artikel
        </p>
        <div className="flex space-x-1">
          <Button variant="outline" size="sm" disabled>
            Sebelumnya
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            1
          </Button>
          <Button variant="outline" size="sm" disabled={articles.length <= 5}>
            Berikutnya
          </Button>
        </div>
      </div>

      {/* Dialog Edit Artikel */}
      {currentArticle && (
        <Dialog open={isEditArticleOpen} onOpenChange={setIsEditArticleOpen}>
          <DialogContent className="max-w-3xl"> {/* Perbesar dialog untuk editor */}
            <DialogHeader>
              <DialogTitle>Edit Artikel: {currentArticle.title}</DialogTitle>
              <DialogDescription>
                Perbarui detail artikel ini. Klik simpan jika sudah selesai.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4 max-h-[70vh] overflow-y-auto pr-2"> {/* Tambahkan scroll jika konten panjang */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-title" className="text-right">
                  Judul
                </Label>
                <Input
                  id="edit-title"
                  name="title"
                  value={editFormData.title || ""}
                  onChange={handleEditFormChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-slug" className="text-right">
                  Slug
                </Label>
                <Input
                  id="edit-slug"
                  name="slug"
                  value={editFormData.slug || ""}
                  onChange={handleEditFormChange}
                  className="col-span-3"
                  placeholder="contoh: ini-slug-artikel"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-category" className="text-right">
                  Kategori
                </Label>
                <Select
                  value={editFormData.category}
                  onValueChange={(value) => handleEditSelectChange("category", value)}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Teknologi">Teknologi</SelectItem>
                    <SelectItem value="Bisnis">Bisnis</SelectItem>
                    <SelectItem value="Gaya Hidup">Gaya Hidup</SelectItem>
                    {/* Tambahkan kategori lain jika ada */}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="edit-content" className="pt-1 text-right">
                  Konten
                </Label>
                <div className="col-span-3">
                  <DummyRichTextToolbar />
                  <Textarea
                    id="edit-content"
                    name="content"
                    value={editFormData.content || ""}
                    onChange={handleEditFormChange}
                    className="min-h-[250px]" // Perbesar textarea
                  />
                </div>
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-featuredImage" className="text-right">
                  Gambar Unggulan
                </Label>
                <div className="col-span-3 space-y-2">
                    <Input
                        id="edit-featuredImage"
                        name="featuredImage"
                        type="file"
                        accept="image/*"
                        onChange={handleEditImageChange}
                        className="col-span-3"
                    />
                    {editFormData.featuredImage && typeof editFormData.featuredImage === 'string' && (
                        <div className="mt-2 relative h-32 w-full overflow-hidden rounded-md border border-indigo-600">
                            <Image src={editFormData.featuredImage} alt="Preview Gambar Unggulan" layout="fill" objectFit="cover" />
                        </div>
                    )}
                </div>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="edit-metaDescription" className="text-right">
                  Meta Deskripsi
                </Label>
                <Textarea
                  id="edit-metaDescription"
                  name="metaDescription"
                  value={editFormData.metaDescription || ""}
                  onChange={handleEditFormChange}
                  className="col-span-3 min-h-[80px]"
                  placeholder="Deskripsi singkat untuk SEO (maks 160 karakter)"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="text-right">
                  Status
                </Label>
                <Select
                  value={editFormData.status}
                  onValueChange={(value) => handleEditSelectChange("status", value as Article["status"])}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Pilih status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Published">Published</SelectItem>
                    <SelectItem value="Draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsEditArticleOpen(false)
                  setCurrentArticle(null)
                }}
              >
                Batal
              </Button>
              <Button onClick={handleSaveChanges}>Simpan Perubahan</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
