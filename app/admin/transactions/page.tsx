"use client"

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  {
    invoice: "INV001",
    customer: "Liam Johnson",
    status: "Lunas",
    amount: "250.00",
    date: "2023-06-23",
  },
  {
    invoice: "INV002",
    customer: "Olivia Smith",
    status: "Menunggu",
    amount: "150.00",
    date: "2023-06-24",
  },
   {
    invoice: "INV003",
    customer: "Noah Williams",
    status: "Lunas",
    amount: "350.00",
    date: "2023-06-25",
  },
  {
    invoice: "INV004",
    customer: "Emma Brown",
    status: "Gagal",
    amount: "450.00",
    date: "2023-06-26",
  },
];

export default function AdminTransactionsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Riwayat Transaksi</CardTitle>
        <CardDescription>
          Daftar semua transaksi yang terjadi di platform Anda.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Pelanggan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Jumlah</TableHead>
              <TableHead className="hidden sm:table-cell text-right">Tanggal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.invoice}>
                <TableCell className="font-medium">{transaction.invoice}</TableCell>
                <TableCell>{transaction.customer}</TableCell>
                <TableCell>
                  <Badge 
                    variant={transaction.status === 'Lunas' ? 'default' : transaction.status === 'Menunggu' ? 'secondary' : 'destructive'}
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">${parseFloat(transaction.amount).toLocaleString()}</TableCell>
                <TableCell className="hidden sm:table-cell text-right">{new Date(transaction.date).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
