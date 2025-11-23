import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Camera, Check, ArrowRight } from "lucide-react";

const ProductShoots = () => {
  const features = [
    "Professional studio photography",
    "High-resolution images",
    "Multiple angles & variations",
    "Professional editing & retouching",
    "White background & lifestyle shots",
    "E-commerce optimized formats",
    "Video product demos (Pro+)",
    "Same-day turnaround available"
  ];

  const process = [
    { step: "Brief", desc: "Discuss your products and requirements" },
    { step: "Setup", desc: "Arrange studio lighting and backdrop" },
    { step: "Shoot", desc: "Capture multiple angles and styles" },
    { step: "Edit", desc: "Professional retouching and color correction" },
    { step: "Deliver", desc: "Receive optimized images ready to use" }
  ];

  const packages = [
    {
      name: "Basic",
      price: "₹2,000",
      desc: "Per product",
      features: ["5 angles per product", "White background", "Basic editing", "High-res JPG", "48-hour delivery", "Up to 5 products/session"]
    },
    {
      name: "Professional",
      price: "₹4,000",
      desc: "Per product",
      features: ["10 angles per product", "White + lifestyle shots", "Advanced editing", "High-res JPG + PNG", "24-hour delivery", "Up to 10 products/session"],
      popular: true
    },
    {
      name: "Premium",
      price: "₹8,000",
      desc: "Per product",
      features: ["Unlimited angles", "All backgrounds", "Professional retouching", "All formats + RAW", "Product video (15s)", "Same-day delivery", "Unlimited products"]
    }
  ];

  const faqs = [
    {
      q: "Where do you shoot the products?",
      a: "We have a professional studio in Bangalore equipped with professional lighting and backdrops. We can also do on-location shoots for larger products at an additional cost."
    },
    {
      q: "What types of products can you shoot?",
      a: "We shoot everything from jewelry and cosmetics to furniture and electronics. If it can be photographed, we can shoot it professionally."
    },
    {
      q: "Can you do lifestyle and model shots?",
      a: "Yes! Professional and Premium packages include lifestyle photography. Model shots are available at an additional cost (starting ₹5,000 for half-day shoot)."
    },
    {
      q: "What format will I receive the images in?",
      a: "All packages include high-resolution JPEGs optimized for web and print. Premium package also includes PNG with transparent background and RAW files."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/10 mb-6">
            <Camera className="w-10 h-10 text-secondary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Product <span className="text-gradient">Shoots</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional product photography and videography that showcases your products perfectly for e-commerce and marketing.
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
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Product Photography Pricing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional product photography for every budget
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
                    <Link to="/contact">Book Shoot</Link>
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
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to Showcase Your Products?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a professional product shoot and get stunning images that sell.
          </p>
          <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90">
            <Link to="/contact">Schedule Shoot</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductShoots;
