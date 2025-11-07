import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "south-indian-filter-coffee",
      title: "South Indian Filter Coffee",
      category: "AI Video + Chatbot",
      description: "Luxury drink launch with limited budget achieved 65% engagement lift in just 3 days",
      challenge: "Needed luxury drink launch content with limited budget and tight timeline",
      solution: "3 AI-generated videos + intelligent chatbot for customer engagement",
      results: [
        { label: "Engagement Lift", value: "65%" },
        { label: "Timeline", value: "3 Days" },
        { label: "Cost Savings", value: "70%" },
      ],
      image: "/placeholder.svg",
      color: "primary",
    },
    {
      id: "desi-chai",
      title: "Desi Chai",
      category: "AI Video + Social Automation",
      description: "AI promo videos and social media automation increased brand visibility",
      challenge: "Manual social media management was time-consuming and inconsistent",
      solution: "AI-generated promotional videos with automated social media posting",
      results: [
        { label: "Response Time", value: "90% Faster" },
        { label: "Content Output", value: "5x More" },
        { label: "Engagement", value: "+120%" },
      ],
      image: "/placeholder.svg",
      color: "secondary",
    },
    {
      id: "gs-water-supplies",
      title: "GS Water Supplies",
      category: "Digital Marketing",
      description: "Performance marketing campaign improved local reach and customer engagement",
      challenge: "Limited online presence and low local visibility in competitive market",
      solution: "Targeted performance marketing ads with local SEO optimization",
      results: [
        { label: "Local Reach", value: "+200%" },
        { label: "Lead Quality", value: "+85%" },
        { label: "ROI", value: "3.5x" },
      ],
      image: "/placeholder.svg",
      color: "accent",
    },
    {
      id: "tea-time",
      title: "Tea Time Franchise",
      category: "AI Lead Automation",
      description: "AI agent automated franchise lead filtering and qualification process",
      challenge: "Overwhelmed with franchise inquiries, needed efficient lead qualification",
      solution: "Custom AI agent for lead filtering, qualification, and initial engagement",
      results: [
        { label: "Time Saved", value: "15hrs/week" },
        { label: "Lead Quality", value: "+160%" },
        { label: "Conversion", value: "+45%" },
      ],
      image: "/placeholder.svg",
      color: "primary",
    },
    {
      id: "sofa-studio",
      title: "Sofa Studio",
      category: "AI Product Visuals + Chat",
      description: "AI product visuals and customer chat automation transformed e-commerce experience",
      challenge: "Expensive product photography and slow customer response times",
      solution: "AI-generated product visuals with 24/7 customer chat automation",
      results: [
        { label: "Photo Costs", value: "-80%" },
        { label: "Response Time", value: "Instant" },
        { label: "Sales", value: "+95%" },
      ],
      image: "/placeholder.svg",
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
              Success <span className="text-primary">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real businesses. See how we've helped companies transform their operations with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={study.id}
                className="group glass border-2 hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className={`text-6xl font-heading font-bold text-${study.color}/20`}>
                    {study.title.substring(0, 2)}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-semibold text-${study.color} px-3 py-1 rounded-full bg-${study.color}/10`}>
                      {study.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-base">{study.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-heading font-bold text-primary mb-1">
                          {result.value}
                        </div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Link to={`/case-studies/${study.id}`}>
                      Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20">
            <Card className="glass border-2 border-primary/30 overflow-hidden">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join the businesses that are already transforming with AI
                </p>
                <Button asChild size="lg" className="glow-primary">
                  <Link to="/contact">
                    Get Started Today <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
