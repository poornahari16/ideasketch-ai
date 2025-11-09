import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ArrowRight } from "lucide-react";
const Pricing = () => {
  const pricingTiers = [{
    category: "AI Video Generation",
    plans: [{
      name: "Basic",
      price: "₹5,000",
      description: "Perfect for getting started",
      features: ["10 AI-generated videos", "HD quality output", "Basic editing tools", "Email support", "Commercial license"]
    }, {
      name: "Pro",
      price: "₹12,000",
      description: "For content creators",
      features: ["20 AI-generated videos", "HD quality output", "Advanced editing tools", "AI voiceover included", "Priority support", "Commercial license"],
      popular: true
    }]
  }, {
    category: "AI Chatbots & Agents",
    plans: [{
      name: "Starter",
      price: "₹5,000",
      description: "Basic automation",
      features: ["Single chatbot", "Up to 1,000 messages/month", "Basic NLP training", "Email integration", "Standard support"]
    }, {
      name: "Pro",
      price: "₹15,000",
      description: "Advanced automation",
      features: ["Up to 3 chatbots", "Up to 10,000 messages/month", "Advanced NLP training", "Multi-platform integration", "Custom workflows", "Priority support"],
      popular: true
    }, {
      name: "Enterprise",
      price: "₹35,000+",
      description: "Unlimited scale",
      features: ["Unlimited chatbots", "Unlimited messages", "Custom AI models", "Full API access", "Dedicated support", "SLA guarantee"]
    }]
  }, {
    category: "AI Automations",
    plans: [{
      name: "Mini",
      price: "₹8,000",
      description: "Small workflows",
      features: ["Up to 5 automations", "1,000 tasks/month", "Basic integrations", "Email notifications", "Standard support"]
    }, {
      name: "Growth",
      price: "₹18,000",
      description: "Scale your business",
      features: ["Up to 20 automations", "10,000 tasks/month", "Advanced integrations", "Real-time monitoring", "Priority support", "Custom workflows"],
      popular: true
    }, {
      name: "Enterprise",
      price: "₹40,000+",
      description: "Enterprise-grade",
      features: ["Unlimited automations", "Unlimited tasks", "Custom integrations", "Dedicated infrastructure", "24/7 support", "SLA guarantee"]
    }]
  }];
  const additionalServices = [{
    name: "Custom AI Solutions",
    price: "Starting at ₹30,000",
    description: "Bespoke AI systems tailored to your specific business needs and challenges"
  }, {
    name: "Digital Marketing",
    price: "₹20,000/month",
    description: "Complete digital marketing package including SEO, social media, and content marketing"
  }, {
    name: "Web Development",
    price: "₹30,000/project",
    description: "Modern, responsive websites built with the latest technologies"
  }, {
    name: "App Development",
    price: "₹70,000/project",
    description: "Native and cross-platform mobile applications for iOS and Android"
  }];
  return <div className="min-h-screen bg-background dark">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Simple, <span className="text-primary text-5xl text-left">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your needs. All plans include our dedicated support and regular updates.
            </p>
          </div>

          {/* AI Services Pricing */}
          {pricingTiers.map((tier, tierIndex) => <div key={tierIndex} className="mb-20">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-blue-700">
                {tier.category}
              </h2>
              <div className={`grid grid-cols-1 ${tier.plans.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8`}>
                {tier.plans.map((plan, planIndex) => <Card key={planIndex} className={`relative glass border-2 ${plan.popular ? "border-primary/50 scale-105" : "border-border"} hover:scale-105 transition-all duration-300`}>
                    {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>}
                    <CardHeader>
                      <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-heading font-bold text-primary">
                          {plan.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => <li key={i} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>)}
                      </ul>
                      <Button asChild className={`w-full ${plan.popular ? "glow-primary" : ""}`} variant={plan.popular ? "default" : "outline"}>
                        <Link to="/contact">
                          Get Started <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>)}
              </div>
            </div>)}

          {/* Additional Services */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-lime-600">
              Additional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => <Card key={index} className="glass border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-heading mb-2">{service.name}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-heading font-bold text-primary">
                        {service.price}
                      </span>
                      <Button asChild variant="outline">
                        <Link to="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20">
            <Card className="glass border-2 border-primary/30 overflow-hidden">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Contact us for enterprise pricing and custom packages tailored to your specific requirements
                </p>
                <Button asChild size="lg" className="glow-primary">
                  <Link to="/contact">
                    Contact Sales <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Pricing;