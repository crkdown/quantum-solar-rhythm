import { Circle, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Masterclasses = () => {
  const masterclasses = [
    {
      title: "The Craving Code",
      description: "Decode the hidden language of your cravings and understand what your body is really asking for.",
      duration: "2.5 hours",
      price: "$97",
      status: "Available Now"
    },
    {
      title: "The Gluten Matrix",
      description: "Navigate the complex world of gluten, grain sensitivity, and their impact on your rhythmic coherence.",
      duration: "3 hours",
      price: "$97",
      status: "Available Now"
    },
    {
      title: "Ultra-Processed",
      description: "Understand the industrial food system and how ultra-processed foods disrupt your natural rhythms.",
      duration: "2 hours",
      price: "$97",
      status: "Available Now"
    },
    {
      title: "The Cereal Code",
      description: "Unlock Steiner's 'Cereal of the Week' wisdom and integrate planetary rhythms through sacred grains.",
      duration: "3 hours",
      price: "$97",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            Masterclasses
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4D7D7D] mb-6">
            Deep Dive Learning
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">
            Comprehensive masterclasses to deepen your understanding of rhythm, 
            nourishment, and the hidden patterns that shape your vitality.
          </p>
        </div>

        {/* Masterclass Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {masterclasses.map((masterclass, index) => (
            <Card 
              key={index}
              className={`border-border hover:shadow-quantum transition-all duration-300 animate-fade-in-up ${
                masterclass.status === "Coming Soon" ? "opacity-75" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardDescription className="text-xs font-sans uppercase tracking-wide text-accent">
                    {masterclass.duration}
                  </CardDescription>
                  {masterclass.status === "Coming Soon" && (
                    <span className="text-xs font-sans font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  )}
                </div>
                <CardTitle className="font-serif text-2xl text-primary">
                  {masterclass.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                  {masterclass.description}
                </p>
                <div className="font-serif text-3xl font-bold text-primary">
                  {masterclass.price}
                </div>
              </CardContent>

              <CardFooter>
                {masterclass.status === "Available Now" ? (
                  <Link to="/contact" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90 font-sans">
                      Enroll Now
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    className="w-full font-sans" 
                    variant="secondary"
                    disabled
                  >
                    Notify When Available
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bundle Offer */}
        <div className="max-w-4xl mx-auto bg-primary/5 p-12 rounded-lg border border-primary/20 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="text-accent" size={32} />
            <h2 className="font-serif text-3xl font-bold text-[#4D7D7D]">
              Complete Masterclass Bundle
            </h2>
          </div>
          <p className="font-sans text-foreground/80 mb-6">
            Access all masterclasses and save 30% with the complete bundle.
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-muted-foreground line-through font-serif text-2xl">$388</span>
            <span className="font-serif text-4xl font-bold text-accent">$271</span>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-sans font-medium px-8">
              Get Bundle Access
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Masterclasses;
