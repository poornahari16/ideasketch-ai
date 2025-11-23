import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Smartphone, Check, ArrowRight } from "lucide-react";

const AppDevelopment = () => {
  const features = [
    "iOS & Android native apps",
    "Cross-platform development (React Native)",
    "Beautiful UI/UX design",
    "API & backend integration",
    "Push notifications",
    "In-app payments",
    "App Store & Play Store submission",
    "Post-launch support & updates"
  ];

  const process = [
    { step: "Ideate", desc: "Define app features and user flows" },
    { step: "Design", desc: "Create beautiful UI/UX mockups" },
    { step: "Develop", desc: "Build for iOS and Android" },
    { step: "Test", desc: "QA testing on real devices" },
    { step: "Deploy", desc: "Launch on app stores" }
  ];

  const packages = [
    {
      name: "MVP App",
      price: "₹70,000",
      desc: "Launch your app idea quickly",
      features: ["Cross-platform (iOS + Android)", "5-8 core screens", "Basic UI/UX design", "User authentication", "API integration", "2 months support"],
      timeline: "6-8 weeks"
    },
    {
      name: "Full-Featured App",
      price: "₹1,50,000",
      desc: "Complete mobile solution",
      features: ["Native iOS + Android", "10-15 screens", "Custom UI/UX design", "Push notifications", "Payment gateway", "Admin panel", "6 months support"],
      timeline: "10-14 weeks",
      popular: true
    },
    {
      name: "Enterprise App",
      price: "₹3,00,000+",
      desc: "Complex, scalable apps",
      features: ["Everything in Full-Featured", "Unlimited screens", "Advanced features", "Real-time sync", "Offline mode", "Analytics", "12 months support"],
      timeline: "16+ weeks"
    }
  ];

  const faqs = [
    {
      q: "Should I build native or cross-platform?",
      a: "For faster launch and lower cost, cross-platform (React Native) is ideal. For maximum performance and native features, we recommend separate iOS and Android apps."
    },
    {
      q: "How much does app maintenance cost?",
      a: "Basic maintenance (bug fixes, OS updates) costs ₹10,000-20,000/month. Feature updates are quoted separately based on complexity."
    },
    {
      q: "Will you help with App Store approval?",
      a: "Yes! We handle the entire submission process for both Apple App Store and Google Play Store, including compliance and artwork."
    },
    {
      q: "Can you integrate with our existing backend?",
      a: "Absolutely! We can integrate with any REST API or build a custom backend using Node.js, Python, or your preferred technology."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-6">
            <Smartphone className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            App <span className="text-gradient">Development</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
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
              <Card key={i} className="glass border-2 hover:border-accent/50 transition-all">
                <CardContent className="pt-6 flex items-start space-x-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
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
                <Card className="glass border-2 hover:border-accent/50 transition-all w-48">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold mb-2">
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
          <h2 className="text-4xl font-heading font-bold text-center mb-4">App Development Packages</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From MVP to enterprise-grade mobile apps
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <Card key={i} className={`glass border-2 hover:scale-105 transition-all ${pkg.popular ? 'border-accent shadow-2xl' : 'hover:border-accent/50'}`}>
                <CardHeader>
                  {pkg.popular && (
                    <div className="text-xs font-semibold text-accent mb-2">MOST POPULAR</div>
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
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
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
                <AccordionTrigger className="text-left font-semibold hover:text-accent">
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
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Turn your app idea into reality with our expert development team.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDevelopment;
