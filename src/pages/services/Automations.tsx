import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Check, ArrowRight } from "lucide-react";

const Automations = () => {
  const features = [
    "Workflow automation for repetitive tasks",
    "CRM & lead management automation",
    "Email & SMS marketing automation",
    "Social media scheduling & posting",
    "Data sync between platforms",
    "Invoice & billing automation",
    "Report generation & analytics",
    "Custom API integrations"
  ];

  const process = [
    { step: "Audit", desc: "Identify manual tasks and bottlenecks" },
    { step: "Design", desc: "Map automation workflows" },
    { step: "Build", desc: "Develop custom automation logic" },
    { step: "Test", desc: "Ensure accuracy and reliability" },
    { step: "Monitor", desc: "Track performance and optimize" }
  ];

  const pricingPlans = [
    {
      name: "Mini",
      price: "₹8,000",
      desc: "One-time setup",
      features: ["1-2 workflow automations", "Basic integrations", "Email support", "Setup within 5 days", "30-day support"]
    },
    {
      name: "Growth",
      price: "₹18,000",
      desc: "One-time + ₹4,000/month",
      features: ["5+ workflow automations", "Advanced integrations", "CRM automation", "Priority support", "Ongoing maintenance"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹40,000+",
      desc: "Custom solution",
      features: ["Unlimited automations", "Custom API development", "Multi-platform sync", "Dedicated engineer", "24/7 monitoring"]
    }
  ];

  const faqs = [
    {
      q: "What tasks can be automated?",
      a: "Almost anything repetitive: lead follow-ups, data entry, social media posts, invoice generation, email sequences, report creation, and much more."
    },
    {
      q: "Will automation work with my existing tools?",
      a: "Yes! We integrate with 1000+ platforms including CRMs, email tools, payment gateways, spreadsheets, and social media. If an API exists, we can connect it."
    },
    {
      q: "How much time will I save?",
      a: "Our clients typically save 10-20 hours per week on manual tasks. The ROI is usually realized within the first month."
    },
    {
      q: "What if something breaks?",
      a: "Growth and Enterprise plans include ongoing maintenance and monitoring. We proactively fix issues before they impact your business."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-6">
            <Zap className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            AI <span className="text-gradient">Automations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Automate repetitive tasks and workflows with smart AI systems that learn and adapt to save you time and money.
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
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Automation Pricing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the right level of automation for your business
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <Card key={i} className={`glass border-2 hover:scale-105 transition-all ${plan.popular ? 'border-accent shadow-2xl' : 'hover:border-accent/50'}`}>
                <CardHeader>
                  {plan.popular && (
                    <div className="text-xs font-semibold text-accent mb-2">MOST POPULAR</div>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold mt-4">{plan.price}</div>
                  <CardDescription className="text-base mt-2">{plan.desc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
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
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Save time, reduce errors, and scale your operations with AI-powered automation.
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

export default Automations;
