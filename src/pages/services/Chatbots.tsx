import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquare, Check, ArrowRight } from "lucide-react";

const Chatbots = () => {
  const features = [
    "24/7 automated customer support",
    "Natural language understanding",
    "Multi-platform integration (WhatsApp, Web, FB)",
    "Custom training on your business data",
    "Lead qualification & capture",
    "Appointment booking automation",
    "Analytics & conversation insights",
    "Human handoff when needed"
  ];

  const process = [
    { step: "Discover", desc: "Understand your business needs and customer queries" },
    { step: "Design", desc: "Map conversation flows and responses" },
    { step: "Train", desc: "Feed AI your business knowledge" },
    { step: "Deploy", desc: "Launch on your preferred platforms" },
    { step: "Optimize", desc: "Analyze performance and improve responses" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹5,000",
      desc: "One-time setup",
      features: ["Basic chatbot setup", "1 platform (Web/WhatsApp)", "Up to 500 conversations/month", "Standard responses", "Email support"]
    },
    {
      name: "Pro",
      price: "₹15,000",
      desc: "One-time + ₹3,000/month",
      features: ["Advanced AI chatbot", "3 platforms", "Up to 2,000 conversations/month", "Custom training", "Lead capture", "Priority support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹35,000+",
      desc: "Custom solution",
      features: ["Everything in Pro", "Unlimited platforms", "Unlimited conversations", "Advanced analytics", "API access", "Dedicated account manager"]
    }
  ];

  const faqs = [
    {
      q: "How intelligent are your chatbots?",
      a: "Our chatbots use advanced natural language processing to understand context, intent, and sentiment. They're trained specifically on your business data for accurate, relevant responses."
    },
    {
      q: "Can the chatbot handle complex queries?",
      a: "Yes! For standard queries, it responds instantly. For complex issues, it can gather information and seamlessly hand off to your human team with full context."
    },
    {
      q: "Which platforms do you support?",
      a: "We support WhatsApp, Facebook Messenger, Instagram DM, website chat widgets, and custom integrations. Enterprise plans include API access for any platform."
    },
    {
      q: "How long does setup take?",
      a: "Starter chatbots launch in 3-5 days. Pro chatbots with custom training take 7-10 days. Enterprise solutions vary based on complexity."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/10 mb-6">
            <MessageSquare className="w-10 h-10 text-secondary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            AI Chatbots & <span className="text-gradient">Agents</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Intelligent conversational AI that handles customer queries, bookings, and support 24/7 across all platforms.
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
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Chatbot Pricing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Scale your customer support with AI-powered automation
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <Card key={i} className={`glass border-2 hover:scale-105 transition-all ${plan.popular ? 'border-secondary shadow-2xl' : 'hover:border-secondary/50'}`}>
                <CardHeader>
                  {plan.popular && (
                    <div className="text-xs font-semibold text-secondary mb-2">MOST POPULAR</div>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold mt-4">{plan.price}</div>
                  <CardDescription className="text-base mt-2">{plan.desc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
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
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to Automate Customer Support?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deploy your AI chatbot and start engaging customers 24/7.
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

export default Chatbots;
