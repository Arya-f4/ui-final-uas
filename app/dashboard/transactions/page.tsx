"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Download, Eye, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Mock transaction data
const transactions = [
  {
    id: "TRX-001",
    car: "2023 Mercedes-Benz S-Class",
    amount: 110000,
    date: "May 15, 2023",
    status: "Completed",
    paymentMethod: "Credit Card",
    image: "/placeholder.svg?height=100&width=100&text=Mercedes",
    invoice: "#INV-2023-001",
  },
  {
    id: "TRX-002",
    car: "2022 BMW X5",
    amount: 65000,
    date: "March 10, 2023",
    status: "Completed",
    paymentMethod: "Bank Transfer",
    image: "/placeholder.svg?height=100&width=100&text=BMW",
    invoice: "#INV-2023-002",
  },
  {
    id: "TRX-003",
    car: "2023 Tesla Model 3",
    amount: 45000,
    date: "January 5, 2023",
    status: "Processing",
    paymentMethod: "Financing",
    image: "/placeholder.svg?height=100&width=100&text=Tesla",
    invoice: "#INV-2023-003",
  },
  {
    id: "TRX-004",
    car: "2021 Audi A4",
    amount: 38000,
    date: "November 20, 2022",
    status: "Completed",
    paymentMethod: "Credit Card",
    image: "/placeholder.svg?height=100&width=100&text=Audi",
    invoice: "#INV-2022-004",
  },
  {
    id: "TRX-005",
    car: "2022 Lexus RX",
    amount: 52000,
    date: "October 5, 2022",
    status: "Completed",
    paymentMethod: "Bank Transfer",
    image: "/placeholder.svg?height=100&width=100&text=Lexus",
    invoice: "#INV-2022-005",
  },
]

export default function TransactionsPage() {
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Transaction History</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input placeholder="Search transactions..." className="pl-8" />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Filter by:</span>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-time">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-time">All Time</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden rounded-md border md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-md">
                      <Image
                        src={transaction.image || "/placeholder.svg"}
                        alt={transaction.car}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span>{transaction.car}</span>
                  </div>
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>${transaction.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      transaction.status === "Completed"
                        ? "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300"
                        : transaction.status === "Processing"
                          ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300"
                          : "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell>{transaction.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon" >
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Transaction Details</DialogTitle>
                        <DialogDescription>Transaction ID: {transaction.id}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="flex items-center justify-center">
                          <div className="relative h-32 w-32 overflow-hidden rounded-md">
                            <Image
                              src={transaction.image || "/placeholder.svg"}
                              alt={transaction.car}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="font-medium">Vehicle:</div>
                          <div>{transaction.car}</div>
                          <div className="font-medium">Amount:</div>
                          <div>${transaction.amount.toLocaleString()}</div>
                          <div className="font-medium">Date:</div>
                          <div>{transaction.date}</div>
                          <div className="font-medium">Status:</div>
                          <div>{transaction.status}</div>
                          <div className="font-medium">Payment Method:</div>
                          <div>{transaction.paymentMethod}</div>
                          <div className="font-medium">Invoice Number:</div>
                          <div>{transaction.invoice}</div>
                        </div>
                        <div className="flex justify-between">
                          <Button variant="outline">Download Invoice</Button>
                          <Button>Contact Support</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile View */}
      <div className="space-y-4 md:hidden">
        {transactions.map((transaction) => (
          <Card key={transaction.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">{transaction.id}</div>
                <Badge
                  className={
                    transaction.status === "Completed"
                      ? "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300"
                      : transaction.status === "Processing"
                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300"
                        : "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300"
                  }
                >
                  {transaction.status}
                </Badge>
              </div>
              <div className="mt-2 flex items-center space-x-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-md">
                  <Image
                    src={transaction.image || "/placeholder.svg"}
                    alt={transaction.car}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{transaction.car}</div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1 h-3 w-3" />
                    {transaction.date}
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-lg font-bold">${transaction.amount.toLocaleString()}</div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Transaction Details</DialogTitle>
                      <DialogDescription>Transaction ID: {transaction.id}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex items-center justify-center">
                        <div className="relative h-32 w-32 overflow-hidden rounded-md">
                          <Image
                            src={transaction.image || "/placeholder.svg"}
                            alt={transaction.car}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="font-medium">Vehicle:</div>
                        <div>{transaction.car}</div>
                        <div className="font-medium">Amount:</div>
                        <div>${transaction.amount.toLocaleString()}</div>
                        <div className="font-medium">Date:</div>
                        <div>{transaction.date}</div>
                        <div className="font-medium">Status:</div>
                        <div>{transaction.status}</div>
                        <div className="font-medium">Payment Method:</div>
                        <div>{transaction.paymentMethod}</div>
                        <div className="font-medium">Invoice Number:</div>
                        <div>{transaction.invoice}</div>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline">Download Invoice</Button>
                        <Button>Contact Support</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">Showing 1-5 of 5 transactions</p>
        <div className="flex space-x-1">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            1
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
