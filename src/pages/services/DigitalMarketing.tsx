import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, Check, ArrowRight } from "lucide-react";

const DigitalMarketing = () => {
  const features = [
    "SEO optimization & keyword strategy",
    "Google & Meta ads management",
    "Social media marketing",
    "Content marketing & copywriting",
    "Email marketing campaigns",
    "Analytics & performance tracking",
    "Conversion rate optimization",
    "Monthly reports & insights"
  ];

  const process = [
    { step: "Audit", desc: "Analyze current marketing performance" },
    { step: "Strategy", desc: "Create custom marketing plan" },
    { step: "Execute", desc: "Launch campaigns across channels" },
    { step: "Optimize", desc: "A/B test and improve ROI" },
    { step: "Report", desc: "Track metrics and adjust strategy" }
  ];

  const packages = [
    {
      name: "Starter",
      price: "₹15,000/mo",
      desc: "For new businesses",
      features: ["SEO optimization", "2 social platforms", "Google My Business", "Monthly reporting", "Basic ads (₹5k budget)", "Email support"]
    },
    {
      name: "Growth",
      price: "₹30,000/mo",
      desc: "For growing businesses",
      features: ["Everything in Starter", "4 social platforms", "Google & Meta ads", "Content creation", "Email campaigns", "Weekly reporting", "Phone support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹60,000+/mo",
      desc: "For established brands",
      features: ["Everything in Growth", "All platforms", "Influencer marketing", "Video content", "Advanced analytics", "Dedicated manager", "Daily monitoring"]
    }
  ];

  const faqs = [
    {
      q: "How long until I see results?",
      a: "Paid ads show immediate traffic, but conversions take 2-4 weeks to optimize. SEO results typically appear in 3-6 months. We provide weekly progress updates."
    },
    {
      q: "What's included in the ad budget?",
      a: "The ad budget is separate from our service fee. Starter includes ₹5,000 ad spend. Growth and Enterprise plans require minimum ₹15,000-30,000/month ad budget."
    },
    {
      q: "Do you create content for social media?",
      a: "Yes! Growth and Enterprise plans include custom graphics, captions, and posting schedules. We create 12-20 posts per month based on your plan."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes! We require a 3-month minimum commitment for best results, but you can cancel with 30 days notice after that period."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
            <TrendingUp className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Digital <span className="text-gradient">Marketing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Data-driven marketing strategies that drive traffic, generate leads, and increase conversions for your business.
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

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Marketing Packages</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions for every business stage
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <Card key={i} className={`glass border-2 hover:scale-105 transition-all ${pkg.popular ? 'border-primary shadow-2xl' : 'hover:border-primary/50'}`}>
                <CardHeader>
                  {pkg.popular && (
                    <div className="text-xs font-semibold text-primary mb-2">MOST POPULAR</div>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold mt-4">{pkg.price}</div>
                  <CardDescription className="text-base mt-2">{pkg.desc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {pkg.features.map((feature, j) => (
                      <div key={j} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
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

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a data-driven marketing strategy that delivers real results.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Start Your Campaign</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
