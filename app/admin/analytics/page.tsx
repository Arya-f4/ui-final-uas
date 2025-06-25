"use client"

import {
    Activity,
    Calendar as CalendarIcon,
    CreditCard,
    DollarSign,
    Search,
    Users
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { addDays, format } from "date-fns"
import * as React from "react"
import { DateRange } from "react-day-picker"
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, XAxis } from "recharts"

const salesData = [
  { month: "Jan", sales: 186, revenue: 80 },
  { month: "Feb", sales: 305, revenue: 200 },
  { month: "Mar", sales: 237, revenue: 120 },
  { month: "Apr", sales: 73, revenue: 190 },
  { month: "May", sales: 209, revenue: 130 },
  { month: "Jun", sales: 214, revenue: 140 },
]

const trafficData = [
  { source: "Google", value: 400, fill: "hsl(var(--primary))" },
  { source: "Instagram", value: 300, fill: "hsl(var(--primary) / 0.9)" },
  { source: "Facebook", value: 200, fill: "hsl(var(--primary) / 0.8)" },
  { source: "Lainnya", value: 278, fill: "hsl(var(--primary) / 0.7)" },
]

const topProducts = [
    { name: "1967 Ford Mustang", sold: 120 },
    { name: "1957 Chevrolet Bel Air", sold: 98 },
    { name: "1969 Dodge Charger", sold: 75 },
    { name: "1981 DeLorean DMC-12", sold: 45 },
]

export default function AnalyticsPage() {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2024, 0, 20),
        to: addDays(new Date(2024, 0, 20), 20),
    })

  return (
    <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold md:text-2xl">Analitik</h1>
             <div className="flex items-center gap-2">
                 <Popover>
                    <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                        date.to ? (
                            <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                            </>
                        ) : (
                            format(date.from, "LLL dd, y")
                        )
                        ) : (
                        <span>Pilih tanggal</span>
                        )}
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                    </PopoverContent>
                </Popover>
                 <Button>
                    <Search className="h-4 w-4 md:mr-2" />
                    <span className="hidden md:flex">Cari</span>
                </Button>
             </div>
        </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tingkat Konversi</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.25%</div>
            <p className="text-xs text-muted-foreground">+5.2% dari bulan lalu</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nilai Pesanan Rata-rata</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,250.00</div>
            <p className="text-xs text-muted-foreground">-2.1% dari bulan lalu</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pengunjung Unik</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,402</div>
            <p className="text-xs text-muted-foreground">+15.7% dari bulan lalu</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sesi</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25,983</div>
            <p className="text-xs text-muted-foreground">+12.4% dari bulan lalu</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Ikhtisar Penjualan</CardTitle>
            <CardDescription>Menampilkan penjualan dan pendapatan per bulan.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[300px] w-full">
              <BarChart data={salesData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="sales" fill="hsl(var(--primary))" radius={4} />
                 <Bar dataKey="revenue" fill="hsl(var(--primary) / 0.5)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Sumber Lalu Lintas</CardTitle>
                <CardDescription>Sumber dari mana pengunjung datang.</CardDescription>
            </CardHeader>
            <CardContent>
                 <ChartContainer
                    config={{}}
                    className="mx-auto aspect-square h-[300px]"
                >
                    <PieChart>
                         <ChartTooltip content={<ChartTooltipContent nameKey="value" hideLabel />} />
                        <Pie data={trafficData} dataKey="value" nameKey="source" innerRadius={60} outerRadius={80} startAngle={90} endAngle={450}>
                             {trafficData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                        <ChartLegend content={<ChartLegendContent nameKey="source" />} className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center" />
                    </PieChart>
                 </ChartContainer>
            </CardContent>
         </Card>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Produk Terlaris</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nama Produk</TableHead>
                        <TableHead className="text-right">Unit Terjual</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {topProducts.map((product) => (
                        <TableRow key={product.name}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell className="text-right">{product.sold}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  )
}
