"use client"

import {
  MoreHorizontal
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
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
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const users = [
  {
    id: "user_1",
    name: "Liam Johnson",
    email: "liam@example.com",
    role: "Pelanggan",
    joined: "2023-10-25",
    avatar: "https://placehold.co/40x40/E0E0E0/333?text=LJ",
  },
  {
    id: "user_2",
    name: "Olivia Smith",
    email: "olivia@example.com",
    role: "Pelanggan",
    joined: "2023-10-24",
    avatar: "https://placehold.co/40x40/E0E0E0/333?text=OS",
  },
  {
    id: "user_3",
    name: "John Doe",
    email: "john.doe@admin.com",
    role: "Admin",
    joined: "2023-01-15",
    avatar: "https://placehold.co/40x40/E0E0E0/333?text=JD",
  }
];

export default function AdminUsersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manajemen Pengguna</CardTitle>
        <CardDescription>Lihat dan kelola semua pengguna terdaftar.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pengguna</TableHead>
              <TableHead>Peran</TableHead>
              <TableHead className="hidden md:table-cell">Tanggal Bergabung</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src={user.avatar} alt="Avatar" />
                        <AvatarFallback>{user.name.substring(0,2)}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                        {user.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                        {user.email}
                        </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={user.role === 'Admin' ? 'destructive' : 'outline'}>{user.role}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">{new Date(user.joined).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
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
                                    <DialogTitle>Edit Pengguna</DialogTitle>
                                    <DialogDescription>
                                        Ubah peran untuk pengguna <strong>{user.name}</strong>.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor={`role-${user.id}`} className="text-right">Peran</Label>
                                         <Select defaultValue={user.role}>
                                            <SelectTrigger className="col-span-3">
                                                <SelectValue placeholder="Pilih peran" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Admin">Admin</SelectItem>
                                                <SelectItem value="Pelanggan">Pelanggan</SelectItem>
                                            </SelectContent>
                                        </Select>
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
                                    Tindakan ini tidak bisa dibatalkan. Ini akan menghapus pengguna <strong>{user.name}</strong> secara permanen.
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
    </Card>
  )
}
