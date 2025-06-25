"use client"; // This directive marks the component as a Client Component.

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

// Since this is not a Next.js environment, we'll use standard <a> and <img> tags.
// I'll create helper functions to generate the class names for button styles
// to keep the JSX clean and maintain consistency.

// Define the props type for the helper function to fix the TypeScript error.
type ButtonClassProps = {
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

const getButtonClasses = ({ variant = 'default', size = 'default', className = '' }: ButtonClassProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  };

  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
  };

  return [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  ].join(' ');
};


export default function BlogPage() {
  // Mock blog data with realistic content
  const articles = [
    {
      id: 1,
      title: "The Future of Electric Vehicles: What to Expect in 2024",
      excerpt: "Explore the latest innovations in electric vehicle technology and what the future holds for sustainable transportation.",
      date: "May 1, 2023",
      readTime: "8 min read",
      category: "Technology",
      imageUrl: "/electric-car.png"
    },
    {
      id: 2,
      title: "Luxury vs. Performance: Finding the Right Balance",
      excerpt: "A comprehensive guide to understanding the key differences between luxury and performance vehicles and how to choose the right one for your needs.",
      date: "May 2, 2023",
      readTime: "10 min read",
      category: "BInsights",
       imageUrl: "/sport-vs-luxury.jpg"
    },
    {
      id: 3,
      title: "Essential Maintenance Tips to Extend Your Car's Lifespan",
      excerpt:
        "Learn the most important maintenance practices that will keep your vehicle running smoothly and extend its life by years.",
      date: "May 3, 2023",
      readTime: "7 min read",
      imageUrl: "/car-lifespan.jpg",
      category: "Maintenance", // Added for consistency
    },
    {
      id: 4,
      title: "Quantum Computing: Are We on the Brink of a Revolution?",
      excerpt: "The promise of quantum computing is immense, but what's the current state of the art? We break down the progress, the players, and the hurdles that remain in this technological marathon.",
      date: "June 18, 2025",
      readTime: "8 min read",
      category: "Technology",
      imageUrl: "https://placehold.co/600x400/7C3AED/FFFFFF?text=Quantum+Computing"
    },
    {
        id: 5,
        title: "Mastering Digital Marketing in a Post-Cookie World",
        excerpt: "With third-party cookies crumbling, marketers need new strategies. This guide covers first-party data, contextual advertising, and building genuine customer relationships to thrive.",
        date: "June 15, 2025",
        readTime: "7 min read",
        category: "Business",
        imageUrl: "https://placehold.co/600x400/16A34A/FFFFFF?text=Digital+Marketing"
    },
    {
        id: 6,
        title: "The Rise of Solo Travel: Exploring the World on Your Own Terms",
        excerpt: "Solo travel is more than just a trip; it's a journey of self-discovery. We delve into the benefits, safety tips, and the best destinations for your first solo adventure.",
        date: "June 12, 2025",
        readTime: "6 min read",
        category: "Lifestyle",
        imageUrl: "https://placehold.co/600x400/F97316/FFFFFF?text=Solo+Travel"
    },
    {
        id: 7,
        title: "Web 3.0 and the Decentralized Internet",
        excerpt: "Beyond the hype of cryptocurrencies, Web 3.0 aims to build a more open, user-centric internet. This article explores the core technologies and potential impact on our digital lives.",
        date: "June 10, 2025",
        readTime: "9 min read",
        category: "Technology",
        imageUrl: "https://placehold.co/600x400/7C3AED/FFFFFF?text=Web+3.0"
    },
    {
        id: 8,
        title: "The Gig Economy in 2025: Trends and Predictions",
        excerpt: "The freelance and gig economy continues to reshape our workforce. We analyze the latest trends, from platform regulations to the rise of specialized skill marketplaces.",
        date: "June 7, 2025",
        readTime: "5 min read",
        category: "Business",
        imageUrl: "https://placehold.co/600x400/16A34A/FFFFFF?text=Gig+Economy"
    },
    {
        id: 9,
        title: "From Farm to Table: A Beginner's Guide to Urban Gardening",
        excerpt: "You don't need a huge backyard to grow your own food. This guide will show you how to start a thriving urban garden on your balcony, patio, or even your windowsill.",
        date: "June 5, 2025",
        readTime: "6 min read",
        category: "Lifestyle",
        imageUrl: "https://placehold.co/600x400/F97316/FFFFFF?text=Urban+Gardening"
    }
  ];

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-slate-900">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Our Blog</h1>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search articles..." className="pl-9" />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Filter by:</span>
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
      <div className="mb-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg dark:bg-gray-800">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 w-full md:h-auto">
            <img
              src={featuredArticle.imageUrl}
              alt={featuredArticle.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/CCCCCC/FFFFFF?text=Image+Not+Found'; }}
            />
          </div>
          <div className="p-8">
            <Badge className="mb-2">{featuredArticle.category}</Badge>
            <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{featuredArticle.title}</h2>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              {featuredArticle.date} • {featuredArticle.readTime}
            </p>
            <p className="mb-6 text-gray-600 dark:text-gray-300">{featuredArticle.excerpt}</p>
            <a href={`/blog/${featuredArticle.id}`} className={getButtonClasses({ size: 'lg' })}>
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {otherArticles.map((article) => (
          <Card key={article.id} className="overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800 flex flex-col">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Not+Found'; }}
              />
            </div>
            <div className="flex flex-col flex-grow">
              <CardHeader className="p-4">
                <Badge className="mb-2 w-fit">{article.category}</Badge>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{article.title}</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {article.date} • {article.readTime}
                </p>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{article.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <a href={`/blog/${article.id}`} className={getButtonClasses({ variant: 'outline', className: 'w-full mt-2' })}>
                  Read More
                </a>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
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
  );
}
