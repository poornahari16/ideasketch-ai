import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Search, Calendar, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: "ai-video-generation-guide",
      title: "The Complete Guide to AI Video Generation for Business",
      excerpt: "Learn how AI is revolutionizing video content creation and how your business can leverage it for marketing, training, and more.",
      category: "AI Video",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/placeholder.svg",
    },
    {
      id: "chatbot-roi",
      title: "Calculating ROI: How AI Chatbots Pay for Themselves",
      excerpt: "A data-driven analysis of how AI chatbots reduce costs, increase sales, and improve customer satisfaction.",
      category: "AI Chatbots",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "/placeholder.svg",
    },
    {
      id: "automation-workflows",
      title: "5 Business Workflows You Should Automate with AI Today",
      excerpt: "Discover the most common business processes that benefit from AI automation and see real examples.",
      category: "AI Automation",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "/placeholder.svg",
    },
    {
      id: "ai-vs-traditional",
      title: "AI-Generated Product Photos vs Traditional: Cost Analysis",
      excerpt: "Breaking down the costs, quality, and turnaround time of AI product photography compared to traditional methods.",
      category: "Product Shoots",
      date: "2023-12-28",
      readTime: "7 min read",
      image: "/placeholder.svg",
    },
    {
      id: "digital-marketing-ai",
      title: "How AI is Transforming Digital Marketing in 2024",
      excerpt: "Explore the latest AI tools and strategies that are changing the digital marketing landscape.",
      category: "Digital Marketing",
      date: "2023-12-20",
      readTime: "9 min read",
      image: "/placeholder.svg",
    },
    {
      id: "choosing-ai-solution",
      title: "How to Choose the Right AI Solution for Your Business",
      excerpt: "A practical framework for evaluating AI solutions and ensuring they align with your business goals.",
      category: "Custom AI",
      date: "2023-12-15",
      readTime: "11 min read",
      image: "/placeholder.svg",
    },
  ];

  const categories = ["All", "AI Video", "AI Chatbots", "AI Automation", "Digital Marketing", "Custom AI", "Product Shoots"];

  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Blog & <span className="text-primary">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Insights, guides, and updates on AI innovation, digital transformation, and business growth
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 bg-card border-2"
                />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "" : "hover:bg-primary hover:text-primary-foreground"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <Card className="glass border-2 border-primary/30 mb-12 overflow-hidden hover:scale-[1.02] transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-8xl font-heading font-bold text-primary/20">
                  AI
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <span className="text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 w-fit mb-4">
                  Featured
                </span>
                <h2 className="text-3xl font-heading font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Button className="w-fit glow-primary">
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card
                key={post.id}
                className="group glass border-2 hover:border-primary/50 hover:scale-105 transition-all overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-6xl font-heading font-bold text-primary/20">
                    {post.category.substring(0, 2)}
                  </div>
                </div>
                <CardHeader>
                  <span className="text-xs font-semibold text-primary px-2 py-1 rounded-full bg-primary/10 w-fit mb-2">
                    {post.category}
                  </span>
                  <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <Card className="glass border-2 border-primary/30 overflow-hidden mt-20">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Stay Updated with AI Insights
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest AI trends, tips, and exclusive content
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background border-2"
                />
                <Button className="glow-primary whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
