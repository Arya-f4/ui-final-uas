"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Copy,
  Facebook,
  Linkedin,
  MessageSquare,
  Share2,
  Tag,
  ThumbsUp,
  Twitter
} from "lucide-react";
import { useEffect, useState } from "react"; // Import React

// Define the article type for better type safety
interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  comments: {
    id: number;
    author: string;
    avatar: string;
    date: string;
    content: string;
    likes: number;
  }[];
  relatedArticles: {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
  }[];
}

// Mock data with realistic content, expanded from the blog list page
const getArticleById = (id: string): Article | null => {
    const articles: { [key: string]: Article } = {
        "1": {
            id: 1,
            title: "The Future of Electric Vehicles: What to Expect in 2024",
            excerpt: "Explore the latest innovations in electric vehicle technology and what the future holds for sustainable transportation.",
            content: `
                <h2>The EV Revolution is Just Getting Started</h2>
                <p>Electric vehicles (EVs) have moved from a niche interest to a mainstream phenomenon. With major automakers pledging to go all-electric and battery technology advancing at a breakneck pace, the future of transportation is undoubtedly electric. But what can we really expect to see in 2024 and beyond?</p>
                <h3>Solid-State Batteries: The Game Changer</h3>
                <p>One of the most anticipated innovations is the arrival of solid-state batteries. Unlike the lithium-ion batteries used today, solid-state batteries promise longer range, faster charging times, and improved safety. Companies like QuantumScape and Solid Power are on the verge of commercializing this technology, which could make 'range anxiety' a thing of the past.</p>
                <figure class="my-4">
                  <img src="https://placehold.co/1200x600/1D4ED8/FFFFFF?text=Solid-State+Battery+Tech" alt="Solid-State Battery Technology" class="rounded-lg shadow-md" />
                  <figcaption class="text-center text-sm text-gray-500 mt-2">A conceptual look at next-gen battery cells.</figcaption>
                </figure>
                <h3>Autonomous Driving and Connectivity</h3>
                <p>Level 4 and Level 5 autonomous driving features will become more common, moving beyond simple lane-keeping and adaptive cruise control. Vehicles will communicate with each other and with smart city infrastructure (V2X communication), leading to safer roads and more efficient traffic flow.</p>
                <h2>Conclusion</h2>
                <p>The EV landscape in 2024 is set to be the most exciting yet. With breakthroughs in battery tech, autonomous features, and a wider range of models than ever before, the transition to sustainable transport is accelerating. The road ahead is electric, and it's a future worth looking forward to.</p>
            `,
            author: {
                name: "Alex Carter",
                role: "Automotive Technology Analyst",
                avatar: "https://placehold.co/100x100/3B82F6/FFFFFF?text=AC",
            },
            date: "May 1, 2023",
            readTime: "8 min read",
            category: "Technology",
            tags: ["Electric Vehicles", "Sustainability", "Battery Tech", "Autonomous Driving"],
            featuredImage: "/electric-car.png",
            comments: [
                { id: 1, author: "Jane Miller", avatar: "https://placehold.co/50x50/F59E0B/FFFFFF?text=JM", date: "May 1, 2023", content: "Great overview! I'm particularly excited about solid-state batteries. It's the key to mass adoption.", likes: 22 },
                { id: 2, author: "David Lee", avatar: "https://placehold.co/50x50/10B981/FFFFFF?text=DL", date: "May 2, 2023", content: "The V2X communication part is fascinating. The safety implications are huge.", likes: 15 },
            ],
            relatedArticles: [
                { id: 4, title: "Quantum Computing: Are We on the Brink of a Revolution?", excerpt: "The promise of quantum computing is immense, but what's the current state of the art?", category: "Technology", date: "June 18, 2025", image: "https://placehold.co/600x400/7C3AED/FFFFFF?text=Quantum+Computing" },
                { id: 7, title: "Web 3.0 and the Decentralized Internet", excerpt: "Beyond the hype of cryptocurrencies, Web 3.0 aims to build a more open internet.", category: "Technology", date: "June 10, 2025", image: "https://placehold.co/600x400/7C3AED/FFFFFF?text=Web+3.0" },
            ]
        },
        "2": {
            id: 2,
            title: "Luxury vs. Performance: Finding the Right Balance",
            excerpt: "A comprehensive guide to understanding the key differences between luxury and performance vehicles and how to choose the right one for your needs.",
            content: `
              <h2>The Age-Old Debate: Comfort or Speed?</h2>
              <p>Choosing a new car often comes down to a fundamental question: do you prioritize the plush, serene experience of a luxury vehicle, or the exhilarating, raw power of a performance car? For decades, these two categories were distinct. Today, the lines are blurring, but understanding the core philosophies behind each can help you make the perfect choice.</p>
              <h3>What Defines a Luxury Car?</h3>
              <p>Luxury is all about the experience. It's defined by high-quality materials like leather, wood, and aluminum, superior craftsmanship, and a quiet, comfortable ride. Features like advanced infotainment systems, premium audio, and extensive sound-deadening are hallmarks of the luxury segment. The goal is to isolate you from the road, not connect you to it.</p>
              <h3>What Defines a Performance Car?</h3>
              <p>Performance is about connection and engagement. It's characterized by powerful engines, responsive handling, track-tuned suspension, and strong brakes. The design often includes aerodynamic elements, larger wheels, and a driver-focused cockpit. The goal is to make you feel every corner and acceleration, delivering an adrenaline-pumping experience.</p>
              <h2>The Modern Hybrid: Performance Luxury</h2>
              <p>Today, many brands like Porsche, BMW M, and Mercedes-AMG offer vehicles that do both. They combine potent powertrains with opulent interiors, giving drivers the best of both worlds. The trade-off is often a higher price tag and a slightly less focused experience in either direction. Ultimately, the right balance is a personal one, depending on your daily driving habits and what you truly value in a vehicle.</p>
            `,
            author: {
              name: "Maria Garcia",
              role: "Automotive Journalist",
              avatar: "https://placehold.co/100x100/EC4899/FFFFFF?text=MG",
            },
            date: "May 2, 2023",
            readTime: "10 min read",
            category: "Insights",
            tags: ["Luxury Cars", "Performance Cars", "Car Buying", "Automotive"],
            featuredImage: "/sport-vs-luxury.jpg",
            comments: [
              { id: 1, author: "Tom Harris", avatar: "https://placehold.co/50x50/8B5CF6/FFFFFF?text=TH", date: "May 3, 2023", content: "This is the exact dilemma I'm facing. Thanks for breaking it down so clearly!", likes: 18 },
            ],
            relatedArticles: [
              { id: 3, title: "Essential Maintenance Tips to Extend Your Car's Lifespan", excerpt: "Learn the most important maintenance practices that will keep your vehicle running smoothly.", category: "Maintenance", date: "May 3, 2023", image: "/car-lifespan.jpg" },
              { id: 1, title: "The Future of Electric Vehicles: What to Expect in 2024", excerpt: "Explore the latest innovations in electric vehicle technology.", category: "Technology", date: "May 1, 2023", image: "/electric-car.png" },
            ]
        }
    };
    return articles[id] || null;
};

// A simple notFound replacement for non-Next.js environments
const NotFound = () => (
    <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">404 - Article Not Found</h1>
        <p className="mt-4 text-muted-foreground">Sorry, we couldn't find the article you were looking for.</p>
        <a href="/blog" className="mt-6 inline-block rounded bg-primary px-6 py-2 text-primary-foreground">Back to Blog</a>
    </div>
);

export default function ArticleDetailPage() {
  const [article, setArticle] = useState<Article | null | undefined>(undefined);
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  // This effect runs only on the client to get the article ID from the URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
      const pathSegments = window.location.pathname.split('/');
      const id = pathSegments.pop() || ''; // Get the last segment as ID
      const articleData = getArticleById(id);
      setArticle(articleData);
    }
  }, []); // Empty dependency array means this runs once on mount
  
  const handleCopyToClipboard = () => {
    if (navigator.clipboard && currentUrl) {
      navigator.clipboard.writeText(currentUrl)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        })
        .catch((err) => {
          console.error("Failed to copy link: ", err);
        });
    }
  };
  
  if (article === undefined) {
    return (
        <div className="container mx-auto flex h-screen items-center justify-center">
            <h1 className="text-2xl font-semibold">Loading Article...</h1>
        </div>
    );
  }

  if (article === null) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <a
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </a>
        </Button>
      </div>

      <article className="mx-auto max-w-3xl">
        {/* Article Header */}
        <header className="mb-8">
          <Badge variant="secondary" className="mb-4 text-sm">
            {article.category}
          </Badge>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mb-6 text-lg text-muted-foreground md:text-xl">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-muted-foreground">
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>
                  {article.author.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium text-foreground">{article.author.name}</p>
                <p className="text-xs text-muted-foreground">{article.author.role}</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <Calendar className="mr-1.5 h-4 w-4" />
              {article.date}
            </div>
            <div className="flex items-center text-sm">
              <Clock className="mr-1.5 h-4 w-4" />
              {article.readTime}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/1200x600/CCCCCC/FFFFFF?text=Image+Not+Found'; }}
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="my-10">
            <h3 className="mb-3 text-lg font-semibold text-foreground">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="px-3 py-1 text-sm">
                  <Tag className="mr-1.5 h-3.5 w-3.5" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <Separator className="my-10" />

        {/* Share and Actions */}
        <div className="my-10 flex flex-wrap items-center justify-between gap-4 rounded-lg border bg-card p-4 shadow">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Facebook className="mr-2 h-4 w-4" /> Facebook
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Twitter className="mr-2 h-4 w-4" /> Twitter
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(article.title)}&summary=${encodeURIComponent(article.excerpt)}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleCopyToClipboard} className="flex cursor-pointer items-center">
                <Copy className="mr-2 h-4 w-4" />
                {copied ? "Copied!" : "Copy Link"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
       
        </div>

        {/* Author Bio */}
        <div className="my-12 rounded-lg border bg-muted p-6 shadow dark:bg-card">
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Avatar className="h-20 w-20">
              <AvatarImage src={article.author.avatar} alt={article.author.name} />
              <AvatarFallback className="text-2xl">
                {article.author.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">About the Author</p>
              <h3 className="mt-1 text-xl font-bold text-foreground">{article.author.name}</h3>
              <p className="mb-2 text-sm text-muted-foreground">{article.author.role}</p>
              <p className="text-sm text-muted-foreground">
                {article.author.name} is an expert in {article.category.toLowerCase()} with over 10 years of experience. They are passionate about exploring the intersection of technology, design, and human behavior.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Comments */}
        <section className="my-12">
          <h3 className="mb-6 text-2xl font-bold text-foreground">Comments ({article.comments.length})</h3>
          <div className="space-y-6">
            {article.comments.map((comment) => (
              <Card key={comment.id} className="shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={comment.avatar} alt={comment.author} />
                        <AvatarFallback>
                          {comment.author.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <p className="font-semibold text-foreground">{comment.author}</p>
                        <p className="text-xs text-muted-foreground">{comment.date}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{comment.content}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 gap-1.5 px-2.5 text-muted-foreground hover:text-primary">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{comment.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 gap-1.5 px-2.5 text-muted-foreground hover:text-primary">
                      <MessageSquare className="h-4 w-4" />
                      <span>Reply</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comment Form */}
          <Card className="mt-10 shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Leave a Comment</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Textarea rows={5} placeholder="Share your thoughts..." aria-label="Comment" className="border-border focus:border-primary focus:ring-primary"/>
                </div>
                <Button type="submit">Submit Comment</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </article>

      <Separator className="my-12 lg:my-16" />

      {/* Related Articles */}
      <section className="mt-12 lg:mt-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Related Articles</h2>
            <a href="/blog" className="flex items-center text-sm font-medium text-primary hover:text-primary/80">
              View all articles
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {article.relatedArticles.map((relatedArticle) => (
            <Card key={relatedArticle.id} className="group overflow-hidden shadow-md transition-shadow hover:shadow-xl">
              <a href={`/blog/${relatedArticle.id}`} className="block">
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Not+Found'; }}
                  />
                </div>
              </a>
              <CardContent className="p-5">
                <Badge variant="secondary" className="mb-2 text-xs">{relatedArticle.category}</Badge>
                <h3 className="mb-2 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                  <a href={`/blog/${relatedArticle.id}`}>{relatedArticle.title}</a>
                </h3>
                <p className="mb-3 text-xs text-muted-foreground">{relatedArticle.date}</p>
                <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">{relatedArticle.excerpt}</p>
                <Button variant="outline" asChild className="w-full">
                  <a href={`/blog/${relatedArticle.id}`}>Read Article</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
