import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Check, ArrowRight } from "lucide-react";

const CustomAI = () => {
  const features = [
    "Tailored AI models for your use case",
    "Custom training on your data",
    "API development & integration",
    "Predictive analytics & forecasting",
    "Computer vision solutions",
    "Natural language processing",
    "Recommendation engines",
    "Scalable cloud infrastructure"
  ];

  const process = [
    { step: "Consult", desc: "Define your AI requirements and goals" },
    { step: "Research", desc: "Select optimal AI models and architecture" },
    { step: "Develop", desc: "Build and train custom AI system" },
    { step: "Integrate", desc: "Deploy into your existing workflow" },
    { step: "Evolve", desc: "Continuous improvement and retraining" }
  ];

  const useCases = [
    {
      title: "Document Intelligence",
      desc: "Extract insights from invoices, contracts, and documents automatically",
      price: "Starting ₹30,000"
    },
    {
      title: "Image Recognition",
      desc: "Classify, detect, or analyze images for quality control or search",
      price: "Starting ₹40,000"
    },
    {
      title: "Predictive Analytics",
      desc: "Forecast sales, demand, or trends using your historical data",
      price: "Starting ₹50,000"
    },
    {
      title: "Custom AI Agents",
      desc: "Build AI assistants that perform complex multi-step tasks",
      price: "Starting ₹60,000"
    }
  ];

  const faqs = [
    {
      q: "What types of AI solutions can you build?",
      a: "We build custom solutions including NLP chatbots, computer vision systems, predictive models, recommendation engines, anomaly detection, sentiment analysis, and more."
    },
    {
      q: "Do you work with our existing data?",
      a: "Yes! We train models on your proprietary data to ensure accuracy and relevance. We follow strict data security protocols and sign NDAs."
    },
    {
      q: "How long does a custom AI project take?",
      a: "Simple solutions take 3-4 weeks. Complex projects with extensive training data can take 8-12 weeks. We provide detailed timelines after initial consultation."
    },
    {
      q: "Will I own the AI model?",
      a: "Yes! You retain full ownership of the custom AI models we develop for you, including all code, weights, and training data."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Custom <span className="text-gradient">AI Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Bespoke AI systems tailored to your specific business needs and challenges. From concept to deployment.
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
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Popular Use Cases</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Common custom AI solutions we've built for clients
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, i) => (
              <Card key={i} className="glass border-2 hover:border-primary/50 hover:scale-105 transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{useCase.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{useCase.price}</span>
                    <Button variant="outline" asChild>
                      <Link to="/contact">Discuss Project</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Card className="glass border-2 border-primary/30 inline-block px-8 py-6">
              <p className="text-lg mb-2">Don't see your use case?</p>
              <p className="text-muted-foreground mb-4">We build custom AI for virtually any business problem</p>
              <Button asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </Card>
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
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to Build Your Custom AI Solution?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can solve your unique business challenges.
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

export default CustomAI;
