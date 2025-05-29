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
  Bookmark,
  Calendar,
  Clock,
  Copy,
  Facebook,
  Linkedin,
  MessageSquare,
  Share2,
  Tag,
  ThumbsUp,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react"; // Import useEffect and useState

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

// Mock data (would normally come from a database)
const getArticleById = (id: string): Article | null => {
  const articles: { [key: string]: Article } = {
    "1": {
      id: 1,
      title: "The Future of Artificial Intelligence in Business",
      excerpt:
        "Explore how AI is transforming business operations and what companies need to know to stay competitive in an AI-driven world.",
      content: `
        <h2>Introduction</h2>
        <p>Artificial Intelligence (AI) is no longer a futuristic concept—it's here, and it's rapidly transforming how businesses operate across every industry. From automating routine tasks to providing deep insights from complex data, AI technologies are helping companies work smarter, faster, and more efficiently than ever before.</p>
        <p>In this article, we'll explore the current state of AI in business, examine emerging trends, and discuss how companies can prepare for an AI-driven future.</p>
        <h2>The Current State of AI in Business</h2>
        <p>Today's businesses are implementing AI in numerous ways:</p>
        <h3>Customer Service and Experience</h3>
        <p>AI-powered chatbots and virtual assistants are handling customer inquiries 24/7, providing immediate responses to common questions and seamlessly escalating complex issues to human agents. These systems are becoming increasingly sophisticated, capable of understanding context, sentiment, and even humor, making interactions more natural and effective.</p>
        <h3>Data Analysis and Decision Making</h3>
        <p>Perhaps the most powerful application of AI in business is its ability to analyze vast amounts of data and extract actionable insights. Machine learning algorithms can identify patterns and trends that would be impossible for humans to detect, helping businesses make more informed decisions.</p>
        <h3>Process Automation</h3>
        <p>Robotic Process Automation (RPA) combined with AI is transforming back-office operations. Tasks that once required human intervention—such as invoice processing, data entry, and compliance reporting—can now be automated, freeing employees to focus on higher-value activities.</p>
        <h2>Emerging Trends in Business AI</h2>
        <h3>Generative AI</h3>
        <p>The rise of generative AI tools like GPT-4, DALL-E, and Midjourney is opening new possibilities for content creation, product design, and creative problem-solving. Businesses are using these tools to draft marketing copy, generate product descriptions, create visual assets, and even assist with coding and software development.</p>
        <h2>Conclusion</h2>
        <p>AI is not just changing how businesses operate—it's redefining what's possible. Companies that embrace AI strategically, ethically, and with a focus on creating value will be well-positioned to thrive in an increasingly AI-driven world.</p>
      `,
      author: {
        name: "Dr. Emily Chen",
        role: "AI Research Director",
        avatar: "/placeholder.svg?height=100&width=100&text=EC",
      },
      date: "April 15, 2023",
      readTime: "8 min read",
      category: "Technology",
      tags: [
        "Artificial Intelligence",
        "Business Strategy",
        "Digital Transformation",
        "Future of Work",
      ],
      featuredImage: "/placeholder.svg?height=800&width=1200&text=AI+in+Business",
      comments: [
        {
          id: 1,
          author: "Michael Roberts",
          avatar: "/placeholder.svg?height=50&width=50&text=MR",
          date: "April 16, 2023",
          content:
            "Great article! I especially appreciated the section on ethical considerations.",
          likes: 12,
        },
        {
          id: 2,
          author: "Sarah Johnson",
          avatar: "/placeholder.svg?height=50&width=50&text=SJ",
          date: "April 17, 2023",
          content:
            "This was really insightful. The point about data infrastructure is spot on.",
          likes: 8,
        },
      ],
      relatedArticles: [
        {
          id: 2,
          title: "Implementing Ethical AI Frameworks",
          excerpt:
            "A practical guide to developing ethical AI guidelines.",
          category: "Technology",
          date: "April 5, 2023",
          image: "/placeholder.svg?height=400&width=600&text=Ethical+AI",
        },
        {
          id: 3,
          title: "Machine Learning in Supply Chains",
          excerpt:
            "Explore how predictive analytics optimize supply chains.",
          category: "Business",
          date: "March 28, 2023",
          image:
            "/placeholder.svg?height=400&width=600&text=Supply+Chain+AI",
        },
      ],
    },
    "2": { // Example for another article ID
      id: 2,
      title: "Sustainable Business Practices: Beyond the Buzzword",
      excerpt:
        "An in-depth look at how companies are implementing genuine sustainability initiatives and the business benefits they're seeing.",
      content: `
        <h2>Introduction</h2>
        <p>Sustainability has evolved from a marketing buzzword to a business imperative. As climate change concerns intensify and consumers increasingly demand environmental responsibility, companies across industries are recognizing that sustainable practices aren't just good for the planet—they're good for business.</p>
        <p>In this article, we'll explore how forward-thinking companies are implementing meaningful sustainability initiatives, the tangible benefits they're experiencing, and practical steps businesses can take to move beyond greenwashing toward authentic environmental stewardship.</p>
        {/* ... more content ... */}
      `,
      author: {
        name: "James Wilson",
        role: "Sustainability Consultant",
        avatar: "/placeholder.svg?height=100&width=100&text=JW",
      },
      date: "March 22, 2023",
      readTime: "10 min read",
      category: "Business",
      tags: ["Sustainability", "CSR", "Green Economy"],
      featuredImage: "/placeholder.svg?height=800&width=1200&text=Sustainable+Business",
      comments: [
        {
          id: 1,
          author: "Rebecca Torres",
          avatar: "/placeholder.svg?height=50&width=50&text=RT",
          date: "March 23, 2023",
          content: "This is a much-needed perspective on authentic sustainability.",
          likes: 15,
        },
      ],
      relatedArticles: [
        {
          id: 1,
          title: "The ROI of Sustainability",
          excerpt: "Measuring the financial impact of green initiatives.",
          category: "Business",
          date: "March 10, 2023",
          image: "/placeholder.svg?height=400&width=600&text=Sustainability+ROI",
        },
      ],
    },
  };
  return articles[id] || null;
};

interface ArticleDetailPageProps {
  params: {
    id: string;
  };
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const [article, setArticle] = useState<Article | null>(null);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    const fetchedArticle = getArticleById(params.id);
    if (!fetchedArticle) {
      notFound();
    } else {
      setArticle(fetchedArticle);
    }
    // Ensure window dependent code runs only on client
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [params.id]);

  if (!article) {
    // This will be handled by notFound in useEffect, or you can return a loading state
    return <div>Loading article...</div>; 
  }
  
  const handleCopyToClipboard = () => {
    if (navigator.clipboard && currentUrl) {
      navigator.clipboard.writeText(currentUrl)
        .then(() => {
          // Optional: Show a success message, e.g., using a toast
          alert("Link copied to clipboard!");
        })
        .catch(err => {
          console.error('Failed to copy link: ', err);
          alert("Failed to copy link.");
        });
    } else if (currentUrl) {
      // Fallback for older browsers or non-secure contexts
      try {
        const textArea = document.createElement("textarea");
        textArea.value = currentUrl;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        alert("Failed to copy link.");
      }
    }
  };


  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <article className="mx-auto max-w-3xl">
        {/* Article Header */}
        <header className="mb-8">
          <Badge variant="secondary" className="mb-4 text-sm">{article.category}</Badge>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mb-6 text-lg text-muted-foreground md:text-xl">{article.excerpt}</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-muted-foreground">
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} />
                <AvatarFallback>
                  {article.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
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
        <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={article.featuredImage || "/placeholder.svg"}
            alt={article.title}
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
            priority
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
                  <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Facebook className="mr-2 h-4 w-4" /> Facebook
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Twitter className="mr-2 h-4 w-4" /> Twitter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(article.title)}&summary=${encodeURIComponent(article.excerpt)}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleCopyToClipboard} className="flex items-center">
                  <Copy className="mr-2 h-4 w-4" /> Copy Link
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          <Button variant="outline" size="sm">
            <Bookmark className="mr-2 h-4 w-4" />
            Save for later
          </Button>
        </div>

        {/* Author Bio */}
        <div className="my-12 rounded-lg border bg-muted p-6 shadow dark:bg-card">
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Avatar className="h-20 w-20">
              <AvatarImage src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} />
              <AvatarFallback className="text-2xl">
                {article.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">About the Author</p>
              <h3 className="mt-1 text-xl font-bold text-foreground">{article.author.name}</h3>
              <p className="mb-2 text-sm text-muted-foreground">{article.author.role}</p>
              <p className="text-sm text-muted-foreground">
                {article.author.name} is an expert in {article.category.toLowerCase()} with over 15 years of experience
                in the field. They have written extensively on topics related to {article.tags[0]?.toLowerCase() || 'their field'} and {article.tags[1]?.toLowerCase() || 'related subjects'}, 
                and are a frequent speaker at industry conferences.
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
                        <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
                        <AvatarFallback>
                          {comment.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
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
                  <Textarea
                    rows={5}
                    placeholder="Share your thoughts..."
                    aria-label="Comment"
                    className="border-border focus:border-primary focus:ring-primary"
                  />
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
          <h2 className="text-2xl font-bold text-foreground">
            Related Articles
          </h2>
          <Button variant="ghost" asChild>
            <Link
              href="/blog"
              className="flex items-center text-sm font-medium text-primary hover:text-primary/80"
            >
              View all articles
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {article.relatedArticles.map((relatedArticle) => (
            <Card
              key={relatedArticle.id}
              className="group overflow-hidden shadow-md transition-shadow hover:shadow-xl"
            >
              <Link href={`/blog/${relatedArticle.id}`} className="block">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={relatedArticle.image || "/placeholder.svg"}
                    alt={relatedArticle.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-5">
                <Badge variant="secondary" className="mb-2 text-xs">{relatedArticle.category}</Badge>
                <h3 className="mb-2 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                  <Link href={`/blog/${relatedArticle.id}`}>
                    {relatedArticle.title}
                  </Link>
                </h3>
                <p className="mb-3 text-xs text-muted-foreground">{relatedArticle.date}</p>
                <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">{relatedArticle.excerpt}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/blog/${relatedArticle.id}`}>Read Article</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}