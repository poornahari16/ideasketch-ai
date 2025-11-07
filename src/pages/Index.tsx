import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Video, MessageSquare, Zap, Sparkles, Code, Smartphone, TrendingUp, Camera, ArrowRight, CheckCircle } from "lucide-react";
const Index = () => {
  const services = [{
    icon: <Video className="w-8 h-8" />,
    title: "AI Video Generation",
    description: "Create stunning videos with AI in minutes, not days.",
    link: "/services/ai-video"
  }, {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "AI Chatbots & Agents",
    description: "24/7 intelligent assistants that understand your business.",
    link: "/services/chatbots"
  }, {
    icon: <Zap className="w-8 h-8" />,
    title: "AI Automations",
    description: "Automate repetitive tasks and scale effortlessly.",
    link: "/services/automations"
  }, {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Custom AI Solutions",
    description: "Tailored AI systems built for your unique needs.",
    link: "/services/custom-ai"
  }, {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Lightning-fast, modern websites that convert.",
    link: "/services/web-development"
  }, {
    icon: <Smartphone className="w-8 h-8" />,
    title: "App Development",
    description: "Native and cross-platform apps that users love.",
    link: "/services/app-development"
  }, {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Data-driven campaigns that drive real results.",
    link: "/services/digital-marketing"
  }, {
    icon: <Camera className="w-8 h-8" />,
    title: "Product Shoots",
    description: "Professional photography that makes products shine.",
    link: "/services/product-shoots"
  }];
  const process = [{
    step: "01",
    title: "Idea",
    description: "Share your vision with us"
  }, {
    step: "02",
    title: "Build",
    description: "We craft your solution"
  }, {
    step: "03",
    title: "Launch",
    description: "Go live in record time"
  }, {
    step: "04",
    title: "Scale",
    description: "Grow with AI power"
  }];
  const testimonials = [{
    quote: "IdeaSketch transformed our customer service with an AI chatbot that actually understands context. Response time dropped by 80%.",
    author: "Sarah Chen",
    role: "CEO, TechFlow"
  }, {
    quote: "The AI video generation tool saved us thousands in production costs. Quality is incredible and turnaround is lightning fast.",
    author: "Marcus Rodriguez",
    role: "Marketing Director, BrandLabs"
  }, {
    quote: "Their custom AI solution automated our entire workflow. We're now processing 10x more orders with the same team.",
    author: "Priya Sharma",
    role: "Operations Lead, ScaleUp Inc"
  }];
  return <div className="min-h-screen bg-background dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-50" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: "1s"
        }} />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight text-lime-400">
              Transform Ideas into{" "}
              <span className="text-gradient text-5xl font-bold">AI-Powered Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              We help businesses, creators, and startups build faster using AI-driven innovation. Make AI simple, fast, and impactful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary text-lg px-8 py-6">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 glass">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              What We <span className="text-gradient">Build</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end AI and digital solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => <Link key={index} to={service.link}>
                <Card className="h-full group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-primary/50 glass cursor-pointer">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all glow-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-heading font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to launch in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => <div key={index} className="relative text-center animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white glow-primary">
                  {item.step}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />}
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Trusted by <span className="text-gradient">Innovators</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="glass hover:scale-105 transition-transform">
                <CardContent className="p-8 space-y-4">
                  <p className="text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's turn your ideas into reality with the power of AI
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary text-lg px-8 py-6">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;