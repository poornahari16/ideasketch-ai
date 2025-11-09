import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, Target, Lightbulb, TrendingUp } from "lucide-react";
const CaseStudyDetail = () => {
  const {
    id
  } = useParams();
  const caseStudyData: Record<string, any> = {
    "south-indian-filter-coffee": {
      title: "South Indian Filter Coffee",
      category: "AI Video Generation + Chatbot",
      overview: "A luxury beverage brand launching a premium South Indian filter coffee needed to create compelling launch content on a limited budget and tight 3-day timeline.",
      challenge: {
        title: "The Challenge",
        points: ["Limited marketing budget for luxury product launch", "Needed professional video content quickly", "Required 24/7 customer engagement during launch", "Tight 3-day deadline before launch event"]
      },
      solution: {
        title: "Our Solution",
        description: "We deployed a comprehensive AI-powered content and engagement strategy:",
        points: ["Created 3 high-quality AI-generated promotional videos showcasing the luxury positioning", "Implemented an intelligent chatbot trained on product details and brand voice", "Set up automated customer query handling for pre-launch inquiries", "Designed engaging video narratives highlighting premium ingredients and heritage"]
      },
      results: {
        title: "The Results",
        metrics: [{
          label: "Engagement Increase",
          value: "65%",
          description: "Compared to industry average"
        }, {
          label: "Project Timeline",
          value: "3 Days",
          description: "From brief to deployment"
        }, {
          label: "Cost Savings",
          value: "70%",
          description: "Vs. traditional production"
        }, {
          label: "Customer Queries",
          value: "500+",
          description: "Handled automatically"
        }]
      },
      testimonial: {
        quote: "IdeaSketch delivered beyond our expectations. The AI videos looked professionally shot, and the chatbot handled hundreds of customer queries seamlessly. We achieved a 65% engagement lift in just 3 days!",
        author: "Marketing Director",
        company: "South Indian Filter Coffee"
      },
      technologies: ["AI Video Generation", "Natural Language Processing", "Chatbot Automation", "Brand Training"]
    },
    "desi-chai": {
      title: "Desi Chai",
      category: "AI Video + Social Automation",
      overview: "A growing chai brand struggling with consistent social media content creation and engagement needed to scale their online presence.",
      challenge: {
        title: "The Challenge",
        points: ["Inconsistent social media posting schedule", "Time-consuming manual content creation", "Slow response to customer messages", "Limited resources for professional content"]
      },
      solution: {
        title: "Our Solution",
        description: "We implemented an end-to-end AI-powered social media system:",
        points: ["AI-generated promotional videos optimized for social platforms", "Automated social media posting across multiple channels", "Intelligent response system for customer inquiries", "Content calendar automation with best-time posting"]
      },
      results: {
        title: "The Results",
        metrics: [{
          label: "Response Speed",
          value: "90% Faster",
          description: "Customer query handling"
        }, {
          label: "Content Output",
          value: "5x More",
          description: "Posts per week"
        }, {
          label: "Engagement Rate",
          value: "+120%",
          description: "Across all platforms"
        }, {
          label: "Time Saved",
          value: "20 hrs/week",
          description: "For marketing team"
        }]
      },
      testimonial: {
        quote: "The AI automation transformed our social media game. We're now posting consistently, engaging faster, and our brand visibility has skyrocketed.",
        author: "Founder",
        company: "Desi Chai"
      },
      technologies: ["AI Video Generation", "Social Media Automation", "AI Chatbot", "Content Scheduling"]
    },
    "gs-water-supplies": {
      title: "GS Water Supplies",
      category: "Digital Marketing",
      overview: "A local water supply business needed to improve their online visibility and reach more customers in their service area.",
      challenge: {
        title: "The Challenge",
        points: ["Limited online presence in competitive market", "Low visibility in local search results", "Difficulty reaching target customers", "No clear digital marketing strategy"]
      },
      solution: {
        title: "Our Solution",
        description: "We created a comprehensive digital marketing strategy:",
        points: ["Performance marketing campaigns targeting local audiences", "Local SEO optimization for service area visibility", "Google My Business optimization and management", "Targeted social media advertising campaigns"]
      },
      results: {
        title: "The Results",
        metrics: [{
          label: "Local Reach",
          value: "+200%",
          description: "Service area coverage"
        }, {
          label: "Lead Quality",
          value: "+85%",
          description: "Higher intent customers"
        }, {
          label: "ROI",
          value: "3.5x",
          description: "Marketing spend return"
        }, {
          label: "Search Ranking",
          value: "Top 3",
          description: "Local search results"
        }]
      },
      testimonial: {
        quote: "We've never had such strong online presence. The phone keeps ringing with quality leads from customers in our exact service area.",
        author: "Owner",
        company: "GS Water Supplies"
      },
      technologies: ["Performance Marketing", "Local SEO", "Google Ads", "Social Media Marketing"]
    },
    "tea-time": {
      title: "Tea Time Franchise",
      category: "AI Lead Automation",
      overview: "A growing franchise business was overwhelmed with franchise inquiries and needed an efficient way to qualify and nurture leads.",
      challenge: {
        title: "The Challenge",
        points: ["Hundreds of franchise inquiries per week", "Time-consuming manual lead qualification", "Inconsistent follow-up process", "High-quality leads lost in the noise"]
      },
      solution: {
        title: "Our Solution",
        description: "We developed a custom AI agent for intelligent lead management:",
        points: ["AI agent trained on franchise requirements and qualification criteria", "Automated initial inquiry handling and information gathering", "Intelligent lead scoring and prioritization system", "Seamless handoff to human team for qualified leads"]
      },
      results: {
        title: "The Results",
        metrics: [{
          label: "Time Saved",
          value: "15 hrs/week",
          description: "For franchise team"
        }, {
          label: "Lead Quality",
          value: "+160%",
          description: "Better qualification"
        }, {
          label: "Conversion Rate",
          value: "+45%",
          description: "Inquiry to franchise"
        }, {
          label: "Response Time",
          value: "Instant",
          description: "24/7 availability"
        }]
      },
      testimonial: {
        quote: "The AI agent revolutionized our franchise inquiry process. We now focus only on serious, qualified prospects while the AI handles initial screening.",
        author: "Franchise Director",
        company: "Tea Time Franchise"
      },
      technologies: ["AI Agent", "Lead Scoring", "CRM Integration", "Natural Language Processing"]
    },
    "sofa-studio": {
      title: "Sofa Studio",
      category: "AI Product Visuals + Chat Automation",
      overview: "An online furniture retailer needed cost-effective product photography and better customer service to compete in e-commerce.",
      challenge: {
        title: "The Challenge",
        points: ["Expensive traditional product photography", "Slow turnaround for new product images", "Delayed customer service responses", "Limited ability to visualize products in different settings"]
      },
      solution: {
        title: "Our Solution",
        description: "We implemented AI-powered visual and service automation:",
        points: ["AI-generated product visuals in multiple settings and angles", "Lifestyle imagery creation without photoshoots", "24/7 customer chat automation for inquiries", "Product recommendation engine integration"]
      },
      results: {
        title: "The Results",
        metrics: [{
          label: "Photography Costs",
          value: "-80%",
          description: "Compared to traditional"
        }, {
          label: "Response Time",
          value: "Instant",
          description: "Customer inquiries"
        }, {
          label: "Sales Increase",
          value: "+95%",
          description: "Better product presentation"
        }, {
          label: "Turnaround",
          value: "24 Hours",
          description: "New product images"
        }]
      },
      testimonial: {
        quote: "AI-generated product visuals look professional and cost a fraction of traditional photography. Combined with instant customer service, our sales have nearly doubled.",
        author: "E-commerce Manager",
        company: "Sofa Studio"
      },
      technologies: ["AI Image Generation", "Chatbot Automation", "Product Visualization", "E-commerce Integration"]
    }
  };
  const data = id ? caseStudyData[id] : null;
  if (!data) {
    return <div className="min-h-screen bg-background dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Case Study Not Found</h1>
          <Button asChild>
            <Link to="/case-studies">
              <ArrowLeft className="mr-2" /> Back to Case Studies
            </Link>
          </Button>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-background dark">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/case-studies">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Case Studies
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <span className="text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10">
              {data.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mt-4 mb-6 text-blue-700">
              {data.title}
            </h1>
            <p className="text-xl text-muted-foreground">{data.overview}</p>
          </div>

          {/* Hero Image Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-12 flex items-center justify-center">
            <div className="text-8xl font-heading font-bold text-primary/20">
              {data.title.substring(0, 2)}
            </div>
          </div>

          {/* Challenge Section */}
          <Card className="glass border-2 mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-2">{data.challenge.title}</h2>
                </div>
              </div>
              <ul className="space-y-3">
                {data.challenge.points.map((point: string, i: number) => <li key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>)}
              </ul>
            </CardContent>
          </Card>

          {/* Solution Section */}
          <Card className="glass border-2 mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-2">{data.solution.title}</h2>
                  <p className="text-muted-foreground">{data.solution.description}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {data.solution.points.map((point: string, i: number) => <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>)}
              </ul>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="glass border-2 border-primary/30 mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-8">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold">{data.results.title}</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.results.metrics.map((metric: any, i: number) => <div key={i} className="bg-card/50 rounded-lg p-6 border border-border">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-lg font-semibold mb-1">{metric.label}</div>
                    <div className="text-sm text-muted-foreground">{metric.description}</div>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          {/* Testimonial */}
          <Card className="glass border-2 border-secondary/30 mb-8">
            <CardContent className="p-8">
              <p className="text-2xl italic mb-6">"{data.testimonial.quote}"</p>
              <div>
                <p className="font-heading font-semibold text-lg">{data.testimonial.author}</p>
                <p className="text-muted-foreground">{data.testimonial.company}</p>
              </div>
            </CardContent>
          </Card>

          {/* Technologies Used */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-bold mb-4 text-yellow-500">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {data.technologies.map((tech: string, i: number) => <span key={i} className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                  {tech}
                </span>)}
            </div>
          </div>

          {/* CTA */}
          <Card className="glass border-2 border-primary/30 overflow-hidden">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Ready for Similar Results?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Let's discuss how we can transform your business with AI
              </p>
              <Button asChild size="lg" className="glow-primary">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>;
};
export default CaseStudyDetail;