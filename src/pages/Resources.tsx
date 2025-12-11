import { Circle, Download, Calendar, FileText, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/solaris-nutri-logo.jpeg";

const Resources = () => {
  const resources = [
    {
      icon: Calendar,
      title: "Rhythm Calculator",
      description: "Interactive assessment to discover your chronotype and optimal eating windows.",
      type: "Interactive Tool",
      size: "Free",
      link: "/rhythm-calculator"
    },
    {
      icon: Calendar,
      title: "Rhythm Planner",
      description: "Track your daily rhythms, energy patterns, and alignment progress.",
      type: "PDF Download",
      size: "2.4 MB"
    },
    {
      icon: Sun,
      title: "Cereal of the Week Chart",
      description: "Steiner's planetary grain wisdom for weekly rhythm integration.",
      type: "PDF Download",
      size: "1.8 MB"
    },
    {
      icon: FileText,
      title: "Spring Seasonal Guide",
      description: "Nourishment protocols aligned with spring's awakening energy.",
      type: "PDF Download",
      size: "3.2 MB"
    },
    {
      icon: FileText,
      title: "Summer Seasonal Guide",
      description: "Peak vitality nourishment for summer's expansive rhythms.",
      type: "PDF Download",
      size: "3.1 MB"
    },
    {
      icon: FileText,
      title: "Autumn Seasonal Guide",
      description: "Grounding nutrition as nature turns inward.",
      type: "PDF Download",
      size: "3.0 MB"
    },
    {
      icon: FileText,
      title: "Winter Seasonal Guide",
      description: "Deep nourishment protocols for winter's restorative phase.",
      type: "PDF Download",
      size: "2.9 MB"
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Solaris Nutri" className="h-20 w-auto" />
          </div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            Resources
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4D7D7D] mb-6">
            Rhythm Tools & Guides
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">
            Free downloads to support your journey back to natural alignment.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card 
                key={index}
                className="border-border hover:shadow-quantum transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <CardDescription className="text-xs font-sans uppercase tracking-wide text-muted-foreground">
                      {resource.type} • {resource.size}
                    </CardDescription>
                  </div>
                  <CardTitle className="font-serif text-xl text-primary">
                    {resource.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    {resource.description}
                  </p>
                </CardContent>

                <CardFooter>
                  {resource.link ? (
                    <Button 
                      onClick={() => window.location.href = resource.link}
                      className="w-full bg-accent hover:bg-accent/90 font-sans"
                    >
                      Start Assessment
                    </Button>
                  ) : (
                    <Button className="w-full bg-primary hover:bg-primary/90 font-sans">
                      <Download size={16} className="mr-2" />
                      Download Free
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-4xl mx-auto bg-muted/30 p-12 rounded-lg border border-border text-center animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-[#4D7D7D] mb-4">
            Join the Rhythm Field
          </h2>
          <p className="font-sans text-foreground/80 mb-8 max-w-2xl mx-auto">
            Receive planetary rhythm insights, seasonal nourishment guides, and 
            exclusive access to new resources delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-sans whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
