import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Video, Check, ArrowRight } from "lucide-react";

const AIVideo = () => {
  const features = [
    "Professional AI-generated videos in minutes",
    "Text-to-video conversion with AI",
    "Custom branding and style options",
    "HD quality output (1080p/4K)",
    "AI voiceover integration",
    "Automated editing and transitions",
    "Social media optimization",
    "Commercial usage rights"
  ];

  const process = [
    { step: "Brief", desc: "Share your video requirements and brand assets" },
    { step: "Script", desc: "We create or refine your video script" },
    { step: "Generate", desc: "AI produces your video with custom styles" },
    { step: "Review", desc: "Request edits and refinements" },
    { step: "Deliver", desc: "Receive final video in your preferred format" }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "₹5,000",
      videos: "10 videos",
      features: ["Text-to-video", "720p quality", "Basic templates", "2 revisions", "3-day delivery"]
    },
    {
      name: "Pro",
      price: "₹12,000",
      videos: "20 videos",
      features: ["Text-to-video", "1080p quality", "Premium templates", "AI voiceover", "5 revisions", "2-day delivery"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      videos: "Unlimited",
      features: ["Everything in Pro", "4K quality", "Custom styles", "Priority support", "Same-day delivery", "Dedicated manager"]
    }
  ];

  const faqs = [
    {
      q: "How long does it take to generate a video?",
      a: "Basic videos are typically ready within 3 days. Pro plan delivers in 2 days, and Enterprise gets same-day turnaround for urgent projects."
    },
    {
      q: "Can I use the videos commercially?",
      a: "Yes! All videos come with full commercial usage rights. You can use them for marketing, social media, ads, or any business purpose."
    },
    {
      q: "What video formats do you provide?",
      a: "We deliver in MP4, MOV, and WebM formats optimized for different platforms (YouTube, Instagram, LinkedIn, etc.)."
    },
    {
      q: "Do you offer revisions?",
      a: "Yes! Basic plan includes 2 revisions, Pro includes 5 revisions, and Enterprise includes unlimited revisions until you're satisfied."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
            <Video className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            AI Video <span className="text-gradient">Generation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Create professional marketing videos in minutes using cutting-edge AI. Perfect for social media, ads, and content creation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">View All Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">What You Get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="glass border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Our Process</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {process.map((item, i) => (
              <div key={i} className="flex items-center">
                <Card className="glass border-2 hover:border-primary/50 transition-all w-48">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-2">
                      {i + 1}
                    </div>
                    <CardTitle className="text-lg">{item.step}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
                {i < process.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground mx-2 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">AI Video Pricing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the perfect plan for your video content needs
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <Card key={i} className={`glass border-2 hover:scale-105 transition-all ${plan.popular ? 'border-primary shadow-2xl' : 'hover:border-primary/50'}`}>
                <CardHeader>
                  {plan.popular && (
                    <div className="text-xs font-semibold text-primary mb-2">MOST POPULAR</div>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold mt-4">{plan.price}</div>
                  <CardDescription className="text-base mt-2">{plan.videos}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to Create Stunning Videos?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with AI-powered video generation today. No experience required.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIVideo;
