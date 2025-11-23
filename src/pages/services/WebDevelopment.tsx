import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Check, ArrowRight } from "lucide-react";

const WebDevelopment = () => {
  const features = [
    "Modern responsive design",
    "Mobile-first approach",
    "SEO optimized structure",
    "Fast loading speeds (90+ Lighthouse score)",
    "Secure & scalable architecture",
    "Content management system",
    "Analytics integration",
    "Ongoing maintenance & support"
  ];

  const process = [
    { step: "Plan", desc: "Define goals, features, and sitemap" },
    { step: "Design", desc: "Create wireframes and visual mockups" },
    { step: "Develop", desc: "Build with modern frameworks" },
    { step: "Test", desc: "Quality assurance across devices" },
    { step: "Launch", desc: "Deploy and monitor performance" }
  ];

  const packages = [
    {
      name: "Starter Website",
      price: "₹30,000",
      desc: "Perfect for small businesses",
      features: ["5-page website", "Responsive design", "Contact form", "SEO basics", "1 month support", "Social media links"],
      timeline: "2-3 weeks"
    },
    {
      name: "Business Website",
      price: "₹60,000",
      desc: "Full-featured business site",
      features: ["10-page website", "Custom design", "CMS integration", "Advanced SEO", "Blog setup", "3 months support", "Analytics"],
      timeline: "4-6 weeks",
      popular: true
    },
    {
      name: "E-Commerce Website",
      price: "₹1,20,000+",
      desc: "Complete online store",
      features: ["Unlimited products", "Payment gateway", "Inventory management", "Order tracking", "Customer accounts", "6 months support", "Marketing tools"],
      timeline: "8-12 weeks"
    }
  ];

  const faqs = [
    {
      q: "Which technologies do you use?",
      a: "We build with React, Next.js, and modern frameworks. For e-commerce, we use Shopify or WooCommerce based on your needs."
    },
    {
      q: "Will my website work on mobile?",
      a: "Absolutely! All our websites are fully responsive and optimized for mobile, tablet, and desktop. We test on all major devices."
    },
    {
      q: "Can I update content myself?",
      a: "Yes! We integrate user-friendly CMS platforms like WordPress or custom admin panels so you can easily update content, images, and products."
    },
    {
      q: "What about hosting and domain?",
      a: "We can handle everything - domain registration, hosting setup, SSL certificates, and email accounts. Or we can work with your existing providers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/10 mb-6">
            <Code className="w-10 h-10 text-secondary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Web <span className="text-gradient">Development</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Modern, responsive websites built with the latest technologies for maximum performance and user experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">View All Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">What You Get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="glass border-2 hover:border-secondary/50 transition-all">
                <CardContent className="pt-6 flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-sm">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Our Process</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {process.map((item, i) => (
              <div key={i} className="flex items-center">
                <Card className="glass border-2 hover:border-secondary/50 transition-all w-48">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold mb-2">
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

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Web Development Packages</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the package that fits your business needs
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <Card key={i} className={`glass border-2 hover:scale-105 transition-all ${pkg.popular ? 'border-secondary shadow-2xl' : 'hover:border-secondary/50'}`}>
                <CardHeader>
                  {pkg.popular && (
                    <div className="text-xs font-semibold text-secondary mb-2">MOST POPULAR</div>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold mt-4">{pkg.price}</div>
                  <CardDescription className="text-base mt-2">{pkg.desc}</CardDescription>
                  <div className="text-sm text-muted-foreground mt-2">Timeline: {pkg.timeline}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {pkg.features.map((feature, j) => (
                      <div key={j} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-secondary">
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

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a stunning online presence for your business.
          </p>
          <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
