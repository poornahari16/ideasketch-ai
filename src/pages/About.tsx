import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Zap, Users, Award, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "We embrace cutting-edge AI technology to deliver solutions that push boundaries",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Simplicity",
      description: "Complex AI made simple. We believe powerful technology should be accessible to all",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in every project, no matter the size",
    },
  ];

  const whyChooseUs = [
    "Rapid deployment - from idea to production in days, not months",
    "Cost-effective AI solutions that deliver ROI",
    "Expert team with proven track record",
    "24/7 support and dedicated account management",
    "Scalable solutions that grow with your business",
    "Transparent pricing with no hidden costs",
  ];

  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              About <span className="text-primary">IdeaSketch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're an AI innovation studio on a mission to make artificial intelligence accessible, practical, and impactful for businesses of all sizes.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Card className="glass border-2 border-primary/30">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-heading font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To make AI simple, fast, and impactful. We transform complex artificial intelligence into practical solutions that businesses can implement immediately and see real results.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-2 border-secondary/30">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-heading font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  To empower everyone to scale using AI and digital solutions. We envision a future where any business, regardless of size, can leverage enterprise-grade AI technology.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="glass border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Why Choose <span className="text-primary">IdeaSketch?</span>
            </h2>
            <Card className="glass border-2">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-muted-foreground">{reason}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Our Approach */}
          <div className="mb-20">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Our <span className="text-primary">Approach</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Listen", desc: "We understand your unique challenges" },
                { step: "02", title: "Design", desc: "Custom solutions tailored to your needs" },
                { step: "03", title: "Build", desc: "Rapid development with AI-powered tools" },
                { step: "04", title: "Support", desc: "Ongoing optimization and support" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-heading font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who We Serve */}
          <div className="mb-20">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Who We <span className="text-primary">Serve</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {["Startups", "Small Businesses", "Enterprises", "Creators", "Agencies"].map((segment, index) => (
                <Card key={index} className="glass border-2 hover:border-primary/50 transition-all text-center">
                  <CardContent className="p-6">
                    <p className="font-heading font-semibold">{segment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="glass border-2 border-primary/30 overflow-hidden">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ready to transform your business with AI? Get in touch and let's start your journey.
              </p>
              <Button asChild size="lg" className="glow-primary">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
