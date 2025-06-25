"use client"

import { Checkbox } from "@/components/ui/checkbox"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Car, Clock, CreditCard, FileText, LogOut, Settings, ShoppingBag, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg?height=100&width=100&text=JD",
    joinDate: "January 2022",
  }

  // Mock transaction data
  const recentTransactions = [
    {
      id: 1,
      car: "2023 Mercedes-Benz S-Class",
      amount: 110000,
      date: "May 15, 2023",
      status: "Completed",
      image: "/placeholder.svg?height=100&width=100&text=Mercedes",
    },
    {
      id: 2,
      car: "2022 BMW X5",
      amount: 65000,
      date: "March 10, 2023",
      status: "Completed",
      image: "/placeholder.svg?height=100&width=100&text=BMW",
    },
    {
      id: 3,
      car: "2023 Tesla Model 3",
      amount: 45000,
      date: "January 5, 2023",
      status: "Processing",
      image: "/placeholder.svg?height=100&width=100&text=Tesla",
    },
  ]

  // Mock saved cars data
  const savedCars = [
    {
      id: 4,
      name: "2023 Porsche 911",
      price: 120000,
      category: "Sports Car",
      image: "/placeholder.svg?height=100&width=100&text=Porsche",
    },
    {
      id: 5,
      name: "2023 Audi Q7",
      price: 58000,
      category: "Luxury SUV",
      image: "/placeholder.svg?height=100&width=100&text=Audi",
    },
  ]

  // Mock appointments data
  const appointments = [
    {
      id: 1,
      car: "2023 Mercedes-Benz S-Class",
      type: "Test Drive",
      date: "June 10, 2023",
      time: "10:00 AM",
      location: "Main Showroom",
    },
    {
      id: 2,
      car: "2023 BMW X5",
      type: "Service",
      date: "June 15, 2023",
      time: "2:30 PM",
      location: "Service Center",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <div className="hidden md:block">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">Member since {user.joinDate}</p>
              </div>
            </div>
            <Separator />
            <nav className="flex flex-col space-y-1">
              <Button
                variant={activeTab === "overview" ? "secondary" : "ghost"}
                className="justify-start"
                onClick={() => setActiveTab("overview")}
              >
                <FileText className="mr-2 h-4 w-4" />
                Overview
              </Button>
              <Button
                variant={activeTab === "transactions" ? "secondary" : "ghost"}
                className="justify-start"
                onClick={() => setActiveTab("transactions")}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Transactions
              </Button>
              <Button
                variant={activeTab === "saved" ? "secondary" : "ghost"}
                className="justify-start"
                onClick={() => setActiveTab("saved")}
              >
                <Car className="mr-2 h-4 w-4" />
                Saved Cars
              </Button>
              <Button
                variant={activeTab === "appointments" ? "secondary" : "ghost"}
                className="justify-start"
                onClick={() => setActiveTab("appointments")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Appointments
              </Button>
              <Button
                variant={activeTab === "settings" ? "secondary" : "ghost"}
                className="justify-start"
                onClick={() => setActiveTab("settings")}
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Separator className="my-2" />
              <Button variant="ghost" className="justify-start text-red-500 hover:bg-red-50 hover:text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="mb-6 md:hidden">
          <Tabs defaultValue="overview" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Main Content */}
        <div>
          {activeTab === "overview" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Purchases</CardTitle>
                    <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${(220000).toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">3 vehicles purchased</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Saved Cars</CardTitle>
                    <Car className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2</div>
                    <p className="text-xs text-muted-foreground">Vehicles in your wishlist</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2</div>
                    <p className="text-xs text-muted-foreground">Next: June 10, 2023</p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-xl font-semibold">Recent Transactions</h2>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <Card key={transaction.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md">
                          <Image
                            src={transaction.image || "/placeholder.svg"}
                            alt={transaction.car}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{transaction.car}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{transaction.date}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${transaction.amount.toLocaleString()}</p>
                          <span
                            className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                              transaction.status === "Completed"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <div className="text-center">
                  <Button variant="outline" asChild>
                    <Link href="/dashboard/transactions">View All Transactions</Link>
                  </Button>
                </div>
              </div>

              <h2 className="text-xl font-semibold">Saved Cars</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {savedCars.map((car) => (
                  <Card key={car.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md">
                          <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{car.name}</h3>
                          <p className="text-sm text-gray-500">{car.category}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${car.price.toLocaleString()}</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <Card key={appointment.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          {appointment.type === "Test Drive" ? (
                            <Car className="h-6 w-6 text-primary" />
                          ) : (
                            <Settings className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">
                            {appointment.type}: {appointment.car}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{appointment.date}</span>
                            <Clock className="ml-2 mr-1 h-3 w-3" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "transactions" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Transaction History</h1>
              <p className="text-gray-500">View all your purchases and payments.</p>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <Card key={transaction.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md">
                          <Image
                            src={transaction.image || "/placeholder.svg"}
                            alt={transaction.car}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{transaction.car}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{transaction.date}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${transaction.amount.toLocaleString()}</p>
                          <span
                            className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                              transaction.status === "Completed"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "saved" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Saved Cars</h1>
              <p className="text-gray-500">Vehicles you&apos;ve saved for later.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {savedCars.map((car) => (
                  <Card key={car.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md">
                          <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{car.name}</h3>
                          <p className="text-sm text-gray-500">{car.category}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${car.price.toLocaleString()}</p>
                          <div className="mt-2 flex space-x-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                           </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "appointments" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Appointments</h1>
              <p className="text-gray-500">Your scheduled test drives and service appointments.</p>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <Card key={appointment.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          {appointment.type === "Test Drive" ? (
                            <Car className="h-6 w-6 text-primary" />
                          ) : (
                            <Settings className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">
                            {appointment.type}: {appointment.car}
                          </h3>
                          <div className="flex flex-col space-y-1 text-sm text-gray-500 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              <span>{appointment.time}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-1 h-3 w-3" />
                              <span>{appointment.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button variant="destructive" size="sm">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <div className="text-center">
                  <Button variant="default">Schedule New Appointment</Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Account Settings</h1>
              <p className="text-gray-500">Manage your profile and preferences.</p>

              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="settings-first-name">First Name</Label>
                      <Input id="settings-first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="settings-last-name">Last Name</Label>
                      <Input id="settings-last-name" defaultValue="Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="settings-email">Email</Label>
                      <Input id="settings-email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="settings-phone">Phone</Label>
                      <Input id="settings-phone" defaultValue="(555) 123-4567" />
                    </div>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Update your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <Button>Update Password</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Manage your notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-500">Receive emails about your account activity</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="email-notifications" className="sr-only">
                          Email Notifications
                        </Label>
                        <Checkbox id="email-notifications" defaultChecked />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">SMS Notifications</p>
                        <p className="text-sm text-gray-500">Receive text messages for appointment reminders</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="sms-notifications" className="sr-only">
                          SMS Notifications
                        </Label>
                        <Checkbox id="sms-notifications" defaultChecked />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketing Communications</p>
                        <p className="text-sm text-gray-500">Receive updates about new vehicles and promotions</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="marketing-communications" className="sr-only">
                          Marketing Communications
                        </Label>
                        <Checkbox id="marketing-communications" />
                      </div>
                    </div>
                  </div>
                  <Button>Save Preferences</Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
