import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag, Share2, MessageSquare, ThumbsUp, Bookmark, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";

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
const getArticleById = (id: string): Article => {
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
        
        <p>Companies like Zendesk and Intercom have integrated AI into their customer service platforms, allowing businesses of all sizes to leverage these technologies without significant investment in custom solutions.</p>
        
        <h3>Data Analysis and Decision Making</h3>
        <p>Perhaps the most powerful application of AI in business is its ability to analyze vast amounts of data and extract actionable insights. Machine learning algorithms can identify patterns and trends that would be impossible for humans to detect, helping businesses make more informed decisions.</p>
        
        <p>For example, retail companies are using AI to analyze purchasing patterns and optimize inventory management. Financial institutions are employing AI to detect fraudulent transactions in real-time. Healthcare providers are utilizing AI to improve diagnostic accuracy and patient outcomes.</p>
        
        <h3>Process Automation</h3>
        <p>Robotic Process Automation (RPA) combined with AI is transforming back-office operations. Tasks that once required human intervention—such as invoice processing, data entry, and compliance reporting—can now be automated, freeing employees to focus on higher-value activities.</p>
        
        <h2>Emerging Trends in Business AI</h2>
        
        <h3>Generative AI</h3>
        <p>The rise of generative AI tools like GPT-4, DALL-E, and Midjourney is opening new possibilities for content creation, product design, and creative problem-solving. Businesses are using these tools to draft marketing copy, generate product descriptions, create visual assets, and even assist with coding and software development.</p>
        
        <h3>AI-Enhanced Decision Intelligence</h3>
        <p>Decision intelligence platforms that combine AI with human expertise are gaining traction. These systems don't just provide data analysis; they offer recommendations, explain their reasoning, and learn from the outcomes of previous decisions to continuously improve.</p>
        
        <h3>Ethical AI and Governance</h3>
        <p>As AI becomes more prevalent, businesses are increasingly focused on ensuring their AI systems are ethical, transparent, and fair. This includes addressing issues like bias in algorithms, privacy concerns, and the societal impact of automation.</p>
        
        <h2>Preparing for an AI-Driven Future</h2>
        <p>For businesses looking to thrive in an AI-driven world, here are key strategies to consider:</p>
        
        <h3>Develop an AI Strategy</h3>
        <p>Rather than implementing AI tools in an ad hoc manner, businesses should develop a comprehensive AI strategy aligned with their overall business objectives. This includes identifying areas where AI can add the most value, establishing clear metrics for success, and creating a roadmap for implementation.</p>
        
        <h3>Invest in Data Infrastructure</h3>
        <p>AI systems are only as good as the data they're trained on. Businesses need robust data infrastructure to collect, store, and manage high-quality data. This includes addressing issues like data silos, inconsistent formats, and outdated information.</p>
        
        <h3>Build AI Literacy</h3>
        <p>While not everyone needs to be a data scientist, businesses should invest in building AI literacy across their organization. This includes helping employees understand AI capabilities and limitations, as well as providing training on how to work effectively with AI tools.</p>
        
        <h3>Address Ethical Considerations</h3>
        <p>Businesses should proactively address ethical considerations related to AI, including privacy, bias, transparency, and the impact on jobs. This includes establishing clear guidelines for AI development and use, as well as mechanisms for ongoing monitoring and oversight.</p>
        
        <h2>Conclusion</h2>
        <p>AI is not just changing how businesses operate—it's redefining what's possible. Companies that embrace AI strategically, ethically, and with a focus on creating value will be well-positioned to thrive in an increasingly AI-driven world.</p>
        
        <p>The future of business is not about humans versus machines, but rather humans and machines working together to achieve outcomes that neither could accomplish alone. By understanding AI's capabilities and limitations, and by thoughtfully integrating these technologies into their operations, businesses can unlock new levels of efficiency, innovation, and growth.</p>
      `,
      author: {
        name: "Dr. Emily Chen",
        role: "AI Research Director",
        avatar: "/placeholder.svg?height=100&width=100&text=EC",
      },
      date: "April 15, 2023",
      readTime: "8 min read",
      category: "Technology",
      tags: ["Artificial Intelligence", "Business Strategy", "Digital Transformation", "Future of Work"],
      featuredImage: "/placeholder.svg?height=800&width=1200&text=AI+in+Business",
      comments: [
        {
          id: 1,
          author: "Michael Roberts",
          avatar: "/placeholder.svg?height=50&width=50&text=MR",
          date: "April 16, 2023",
          content:
            "Great article! I especially appreciated the section on ethical considerations. Too many businesses are rushing to implement AI without thinking through the potential consequences.",
          likes: 12,
        },
        {
          id: 2,
          author: "Sarah Johnson",
          avatar: "/placeholder.svg?height=50&width=50&text=SJ",
          date: "April 17, 2023",
          content:
            "This was really insightful. I work in retail, and we're just starting to explore AI for inventory management. The point about data infrastructure is spot on - we're finding that our data quality is a major limiting factor.",
          likes: 8,
        },
        {
          id: 3,
          author: "David Kim",
          avatar: "/placeholder.svg?height=50&width=50&text=DK",
          date: "April 18, 2023",
          content:
            "I'd be interested in hearing more about how small businesses can leverage AI without the resources of larger enterprises. Are there accessible entry points for companies with limited budgets?",
          likes: 5,
        },
      ],
      relatedArticles: [
        {
          id: 2,
          title: "Implementing Ethical AI Frameworks in Your Organization",
          excerpt: "A practical guide to developing and implementing ethical AI guidelines in your business.",
          category: "Technology",
          date: "April 5, 2023",
          image: "/placeholder.svg?height=400&width=600&text=Ethical+AI",
        },
        {
          id: 3,
          title: "How Machine Learning is Revolutionizing Supply Chain Management",
          excerpt: "Explore how predictive analytics and machine learning are optimizing supply chains globally.",
          category: "Business",
          date: "March 28, 2023",
          image: "/placeholder.svg?height=400&width=600&text=Supply+Chain+AI",
        },
        {
          id: 4,
          title: "The Rise of AI-Powered Customer Experience",
          excerpt: "Discover how AI is creating more personalized, responsive customer experiences across industries.",
          category: "Technology",
          date: "March 15, 2023",
          image: "/placeholder.svg?height=400&width=600&text=AI+Customer+Experience",
        },
      ],
    },
    "2": {
      id: 2,
      title: "Sustainable Business Practices: Beyond the Buzzword",
      excerpt:
        "An in-depth look at how companies are implementing genuine sustainability initiatives and the business benefits they're seeing.",
      content: `
        <h2>Introduction</h2>
        <p>Sustainability has evolved from a marketing buzzword to a business imperative. As climate change concerns intensify and consumers increasingly demand environmental responsibility, companies across industries are recognizing that sustainable practices aren't just good for the planet—they're good for business.</p>
        
        <p>In this article, we'll explore how forward-thinking companies are implementing meaningful sustainability initiatives, the tangible benefits they're experiencing, and practical steps businesses can take to move beyond greenwashing toward authentic environmental stewardship.</p>
        
        <h2>The Business Case for Sustainability</h2>
        <p>While environmental and social responsibility are compelling reasons to embrace sustainability, the business benefits are equally significant:</p>
        
        <h3>Cost Reduction</h3>
        <p>Contrary to the perception that sustainability initiatives are costly, many companies find that resource efficiency measures lead to significant savings. Energy-efficient operations, waste reduction, and water conservation directly impact the bottom line.</p>
        
        <p>For example, Unilever reports saving over €1 billion since 2008 through eco-efficiency measures in its factories. Similarly, Walmart saved nearly $20 million annually through a simple switch to LED lighting in its stores and parking lots.</p>
        
        <h3>Risk Mitigation</h3>
        <p>Companies with strong sustainability practices are better positioned to navigate regulatory changes, resource scarcity, and climate-related disruptions. They're also less vulnerable to reputational damage from environmental incidents or controversies.</p>
        
        <p>CDP (formerly Carbon Disclosure Project) research shows that companies that actively manage climate risks demonstrate 18% higher return on investment than companies that don't, and 67% higher than companies that refuse to disclose their emissions.</p>
        
        <h3>Innovation and Growth</h3>
        <p>Sustainability challenges drive innovation. Companies focused on developing sustainable products and services often discover new markets, technologies, and business models.</p>
        
        <p>Patagonia's commitment to using recycled materials led to the development of innovative fabrics and manufacturing processes. Tesla's focus on sustainable transportation revolutionized the automotive industry and created enormous market value.</p>
        
        <h3>Talent Attraction and Retention</h3>
        <p>Today's workforce, particularly millennials and Gen Z, increasingly seeks employers whose values align with their own. Companies with authentic sustainability commitments have a competitive advantage in recruiting and retaining top talent.</p>
        
        <p>A 2020 HP Workforce Sustainability Survey found that 61% of office workers believe sustainability is mandatory for businesses, and 56% believe ignoring environmental impact in the workplace is as bad as ignoring diversity and inclusion.</p>
        
        <h2>Beyond Greenwashing: Authentic Sustainability Initiatives</h2>
        <p>As consumers become more environmentally conscious and skeptical of corporate claims, companies must move beyond superficial "green" marketing to implement meaningful sustainability practices:</p>
        
        <h3>Science-Based Targets</h3>
        <p>Leading companies are setting emissions reduction targets aligned with climate science. The Science Based Targets initiative (SBTi) provides a framework for companies to set greenhouse gas reduction goals consistent with limiting global warming to well below 2°C above pre-industrial levels.</p>
        
        <p>Over 1,000 companies worldwide have committed to science-based targets, including Microsoft, which pledged to be carbon negative by 2030 and to remove all the carbon it has emitted since its founding by 2050.</p>
        
        <h3>Circular Economy Models</h3>
        <p>Rather than the traditional "take-make-waste" approach, companies are adopting circular economy principles that design out waste, keep products and materials in use, and regenerate natural systems.</p>
        
        <p>Interface, a global commercial flooring company, has pioneered circular design through its ReEntry program, which reclaims and recycles old carpet tiles. The company has reduced its carbon footprint by 96% since 1996 and aims to be carbon negative by 2040.</p>
        
        <h3>Supply Chain Transformation</h3>
        <p>For many companies, the majority of their environmental impact lies in their supply chain. Sustainable businesses are working with suppliers to reduce emissions, eliminate deforestation, improve water management, and ensure fair labor practices.</p>
        
        <p>Apple has committed to making its entire supply chain carbon neutral by 2030 and has already helped over 100 suppliers transition to renewable energy.</p>
        
        <h3>Regenerative Approaches</h3>
        <p>The most forward-thinking companies are moving beyond reducing harm to actively restoring and regenerating ecosystems.</p>
        
        <p>Patagonia's regenerative organic cotton program supports farming practices that rebuild soil health, increase biodiversity, and sequester carbon. Similarly, Timberland has committed to planting 50 million trees by 2025 as part of its regenerative agriculture initiatives.</p>
        
        <h2>Implementing Effective Sustainability Strategies</h2>
        <p>For businesses looking to develop or enhance their sustainability efforts, here are key steps to consider:</p>
        
        <h3>Assess Your Impact</h3>
        <p>Begin with a thorough assessment of your company's environmental footprint, including direct operations, supply chain, and product lifecycle. This baseline will help identify priority areas for improvement and measure progress over time.</p>
        
        <h3>Set Meaningful Goals</h3>
        <p>Establish specific, measurable, time-bound sustainability goals aligned with your business strategy and global frameworks like the UN Sustainable Development Goals or Science Based Targets.</p>
        
        <h3>Integrate Sustainability into Business Strategy</h3>
        <p>Rather than treating sustainability as a separate initiative, integrate it into core business strategy, product development, and operational decisions.</p>
        
        <h3>Engage Stakeholders</h3>
        <p>Involve employees, customers, suppliers, investors, and communities in your sustainability journey. Their insights and support are crucial for developing effective strategies and driving change.</p>
        
        <h3>Measure and Report Progress</h3>
        <p>Implement robust systems to track key sustainability metrics and regularly report progress to stakeholders. Transparency builds trust and accountability.</p>
        
        <h2>Conclusion</h2>
        <p>Sustainability is no longer optional for businesses that want to thrive in the 21st century. Companies that authentically embed environmental and social responsibility into their operations and strategy are realizing significant benefits: reduced costs, mitigated risks, enhanced innovation, improved brand reputation, and stronger talent attraction.</p>
        
        <p>The transition to truly sustainable business practices isn't easy or quick, but it's increasingly necessary. By taking meaningful action now, companies can position themselves for long-term success while contributing to a more sustainable future for all.</p>
      `,
      author: {
        name: "James Wilson",
        role: "Sustainability Consultant",
        avatar: "/placeholder.svg?height=100&width=100&text=JW",
      },
      date: "March 22, 2023",
      readTime: "10 min read",
      category: "Business",
      tags: ["Sustainability", "Corporate Responsibility", "Green Business", "Climate Action"],
      featuredImage: "/placeholder.svg?height=800&width=1200&text=Sustainable+Business",
      comments: [
        {
          id: 1,
          author: "Rebecca Torres",
          avatar: "/placeholder.svg?height=50&width=50&text=RT",
          date: "March 23, 2023",
          content:
            "This article perfectly captures the evolution of sustainability from a nice-to-have to a business imperative. I've seen firsthand how companies that embrace authentic sustainability outperform their peers over time.",
          likes: 15,
        },
        {
          id: 2,
          author: "Thomas Greene",
          avatar: "/placeholder.svg?height=50&width=50&text=TG",
          date: "March 24, 2023",
          content:
            "I appreciate the emphasis on moving beyond greenwashing. Too many companies are still focused on sustainability as a marketing exercise rather than meaningful change. The examples of companies taking real action are inspiring.",
          likes: 9,
        },
        {
          id: 3,
          author: "Lisa Chen",
          avatar: "/placeholder.svg?height=50&width=50&text=LC",
          date: "March 25, 2023",
          content:
            "As a small business owner, I found the implementation strategies particularly helpful. It can be overwhelming to know where to start, but the step-by-step approach makes it more manageable. Would love to see more content specifically for SMEs on this topic.",
          likes: 7,
        },
      ],
      relatedArticles: [
        {
          id: 5,
          title: "The ROI of Sustainability: Measuring Business Impact",
          excerpt: "How to quantify the financial returns of your sustainability initiatives.",
          category: "Business",
          date: "March 10, 2023",
          image: "/placeholder.svg?height=400&width=600&text=Sustainability+ROI",
        },
        {
          id: 6,
          title: "Circular Economy: Transforming Business Models for Sustainability",
          excerpt: "Explore how companies are redesigning products and services to eliminate waste and pollution.",
          category: "Business",
          date: "February 28, 2023",
          image: "/placeholder.svg?height=400&width=600&text=Circular+Economy",
        },
        {
          id: 7,
          title: "Employee Engagement in Corporate Sustainability Programs",
          excerpt: "Strategies for involving your workforce in your company's sustainability journey.",
          category: "Business",
          date: "February 15, 2023",
          image: "/placeholder.svg?height=400&width=600&text=Employee+Engagement",
        },
      ],
    },
  };

  const article = articles[id];
  if (!article) {
    notFound();
  }
  return article;
};

// Properly type the params prop for Next.js dynamic routes
interface ArticleDetailPageProps {
  params: {
    id: string;
  };
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const article = getArticleById(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/blog"
          className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          ← Back to Blog
        </Link>
      </div>

      <article className="mx-auto max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <Badge className="mb-4">{article.category}</Badge>
          <h1 className="mb-4 text-4xl font-bold leading-tight">{article.title}</h1>
          <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">{article.excerpt}</p>

          <div className="flex flex-wrap items-center gap-6">
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
                <p className="font-medium">{article.author.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{article.author.role}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="mr-1 h-4 w-4" />
              {article.date}
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Clock className="mr-1 h-4 w-4" />
              {article.readTime}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <Image
            src={article.featuredImage || "/placeholder.svg"}
            alt={article.title}
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <div className="my-8">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm">
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Share and Actions */}
        <div className="my-8 flex flex-wrap items-center justify-between gap-4 rounded-lg border p-4">
          <div className="flex items-center">
            <span className="mr-4 font-medium">Share this article:</span>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Copy link</span>
              </Button>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Bookmark className="mr-2 h-4 w-4" />
            Save for later
          </Button>
        </div>

        {/* Author Bio */}
        <div className="my-12 rounded-lg bg-muted p-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Avatar className="h-16 w-16">
              <AvatarImage src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} />
              <AvatarFallback>
                {article.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold">About {article.author.name}</h3>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{article.author.role}</p>
              <p className="text-gray-700 dark:text-gray-300">
                {article.author.name} is an expert in {article.category.toLowerCase()} with over 15 years of experience
                in the field. They have written extensively on topics related to {article.tags[0].toLowerCase()} and{" "}
                {article.tags[1].toLowerCase()}, and are a frequent speaker at industry conferences.
              </p>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="my-12">
          <h3 className="mb-6 text-2xl font-bold">Comments ({article.comments.length})</h3>
          <div className="space-y-6">
            {article.comments.map((comment) => (
              <div key={comment.id} className="rounded-lg border p-4">
                <div className="mb-4 flex items-start justify-between">
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
                      <p className="font-medium">{comment.author}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{comment.date}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
                <div className="mt-4 flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{comment.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 gap нашего1 px-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>Reply</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <div className="mt-8 rounded-lg border p-4">
            <h4 className="mb-4 text-xl font-semibold">Leave a Comment</h4>
            <div className="mb-4">
              <textarea
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                rows={4}
                placeholder="Share your thoughts..."
              ></textarea>
            </div>
            <Button>Submit Comment</Button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <div className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Related Articles</h2>
          <Link
            href="/blog"
            className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            View all articles
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {article.relatedArticles.map((relatedArticle) => (
            <Card key={relatedArticle.id} className="overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={relatedArticle.image || "/placeholder.svg"}
                  alt={relatedArticle.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <Badge className="mb-2">{relatedArticle.category}</Badge>
                <h3 className="mb-2 text-lg font-semibold">{relatedArticle.title}</h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{relatedArticle.date}</p>
                <p className="mb-4 line-clamp-2 text-gray-700 dark:text-gray-300">{relatedArticle.excerpt}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/blog/${relatedArticle.id}`}>Read Article</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}