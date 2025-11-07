import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Video,
  MessageSquare,
  Zap,
  Sparkles,
  Code,
  Smartphone,
  TrendingUp,
  Camera,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Video className="w-12 h-12" />,
      title: "AI Video Generation",
      description: "Create professional videos in minutes using cutting-edge AI. Perfect for marketing, social media, and content creation.",
      features: ["Text-to-Video", "AI Editing", "Custom Styles", "HD Quality"],
      link: "/services/ai-video",
      color: "primary",
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "AI Chatbots & Agents",
      description: "Intelligent conversational AI that handles customer queries, bookings, and support 24/7.",
      features: ["Natural Language", "Multi-platform", "Custom Training", "Analytics"],
      link: "/services/chatbots",
      color: "secondary",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "AI Automations",
      description: "Automate repetitive tasks and workflows with smart AI systems that learn and adapt.",
      features: ["Process Automation", "Integration", "Smart Workflows", "Real-time Updates"],
      link: "/services/automations",
      color: "accent",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Custom AI Solutions",
      description: "Bespoke AI systems tailored to your specific business needs and challenges.",
      features: ["Custom Models", "API Integration", "Scalable", "Support"],
      link: "/services/custom-ai",
      color: "primary",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Modern, responsive websites built with latest technologies for maximum performance.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
      link: "/services/web-development",
      color: "secondary",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "App Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-platform", "UI/UX Design", "App Store Ready"],
      link: "/services/app-development",
      color: "accent",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that drive traffic, leads, and conversions.",
      features: ["SEO", "Social Media", "Content Marketing", "Analytics"],
      link: "/services/digital-marketing",
      color: "primary",
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Product Shoots",
      description: "Professional product photography and videography that showcases your products perfectly.",
      features: ["Studio Quality", "Fast Turnaround", "E-commerce Ready", "Editing Included"],
      link: "/services/product-shoots",
      color: "secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI and digital solutions to transform your business. From ideation to execution, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl glass border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center text-${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Link to={service.link}>
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
