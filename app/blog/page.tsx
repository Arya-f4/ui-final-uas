import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  // Mock blog data
  const articles = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Article Title ${i + 1}`,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    date: `May ${i + 1}, 2023`,
    readTime: "5 min read",
    category: i % 3 === 0 ? "Technology" : i % 3 === 1 ? "Business" : "Lifestyle",
  }))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Blog</h1>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input placeholder="Search articles..." className="pl-8" />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Filter by:</span>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="lifestyle">Lifestyle</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Featured Article */}
      <div className="mb-8 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 w-full md:h-auto">
            <Image
              src="/placeholder.svg?height=600&width=800&text=Featured+Article"
              alt="Featured Article"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <Badge className="mb-2">{articles[0].category}</Badge>
            <h2 className="mb-2 text-2xl font-bold">{articles[0].title}</h2>
            <p className="mb-2 text-sm text-gray-500">
              {articles[0].date} • {articles[0].readTime}
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-300">{articles[0].excerpt}</p>
            <Button asChild>
              <Link href={`/blog/${articles[0].id}`}>Read More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(1).map((article) => (
          <Card key={article.id} className="overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={`/placeholder.svg?height=400&width=600&text=Article+${article.id}`}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="p-4">
              <Badge className="mb-2 w-fit">{article.category}</Badge>
              <CardTitle className="text-lg">{article.title}</CardTitle>
              <p className="text-sm text-gray-500">
                {article.date} • {article.readTime}
              </p>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="line-clamp-3 text-gray-600 dark:text-gray-300">{article.excerpt}</p>
            </CardContent>
            <CardFooter className="p-4">
              <Button variant="outline" asChild className="w-full">
                <Link href={`/blog/${article.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <div className="flex space-x-1">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
