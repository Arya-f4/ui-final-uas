"use client"

import Image from "next/image"
import { Calendar, Download, Eye, MoreHorizontal, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function TransactionsPage() {
  
  // Mock transaction data
  const transactions = [
    {
      id: "TRX-001",
      customer: {
        name: "John Smith",
        email: "john.smith@example.com",
        avatar: "/placeholder.svg?height=50&width=50&text=JS",
      },
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
      customer: {
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        avatar: "/placeholder.svg?height=50&width=50&text=SJ",
      },
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
      customer: {
        name: "Michael Brown",
        email: "michael.brown@example.com",
        avatar: "/placeholder.svg?height=50&width=50&text=MB",
      },
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
      customer: {
        name: "Emily Davis",
        email: "emily.davis@example.com",
        avatar: "/placeholder.svg?height=50&width=50&text=ED",
      },
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
      customer: {
        name: "Robert Wilson",
        email: "robert.wilson@example.com",
        avatar: "/placeholder.svg?height=50&width=50&text=RW",
      },
      car: "2022 Lexus RX",
      amount: 52000,
      date: "October 5, 2022",
      status: "Completed",
      paymentMethod: "Bank Transfer",
      image: "/placeholder.svg?height=100&width=100&text=Lexus",
      invoice: "#INV-2022-005",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Transaction Management</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Data
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

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                      <Image
                        src={transaction.customer.avatar || "/placeholder.svg"}
                        alt={transaction.customer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{transaction.customer.name}</div>
                      <div className="text-xs text-gray-500">{transaction.customer.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="relative h-8 w-8 overflow-hidden rounded-md">
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
                <TableCell>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                    {transaction.date}
                  </div>
                </TableCell>
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
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <Dialog>
                        <DialogTrigger asChild>
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[525px]">
                          <DialogHeader>
                            <DialogTitle>Transaction Details</DialogTitle>
                            <DialogDescription>Transaction ID: {transaction.id}</DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h3 className="mb-2 font-medium">Customer Information</h3>
                                <div className="flex items-center space-x-3">
                                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                    <Image
                                      src={transaction.customer.avatar || "/placeholder.svg"}
                                      alt={transaction.customer.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <div>
                                    <div className="font-medium">{transaction.customer.name}</div>
                                    <div className="text-xs text-gray-500">{transaction.customer.email}</div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h3 className="mb-2 font-medium">Vehicle Information</h3>
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
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="font-medium">Transaction ID:</div>
                              <div>{transaction.id}</div>
                              <div className="font-medium">Invoice Number:</div>
                              <div>{transaction.invoice}</div>
                              <div className="font-medium">Amount:</div>
                              <div>${transaction.amount.toLocaleString()}</div>
                              <div className="font-medium">Date:</div>
                              <div>{transaction.date}</div>
                              <div className="font-medium">Status:</div>
                              <div>{transaction.status}</div>
                              <div className="font-medium">Payment Method:</div>
                              <div>{transaction.paymentMethod}</div>
                            </div>
                            <div className="flex justify-between">
                              <Button variant="outline">Download Invoice</Button>
                              <Button>Update Status</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download Invoice
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <span className="mr-2">⚠️</span>
                        Cancel Transaction
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between">
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
