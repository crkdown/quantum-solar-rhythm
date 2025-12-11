import { Circle, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/solaris-nutri-logo.jpeg";

const Programs = () => {
  const programs = [
    {
      duration: "3-Month",
      title: "Rhythm Reset",
      price: "€700 – €900",
      description: "Stabilize body rhythms, restore energy, and simplify nourishment through circadian alignment.",
      features: [
        "Rhythm calendar & circadian alignment",
        "Gut reset protocol",
        "Weekly/biweekly sessions",
        "WhatsApp support",
        "Personalized rhythm plan",
        "QRN starter toolkit"
      ],
      popular: false
    },
    {
      duration: "6-Month",
      title: "Coherence Deepening",
      price: "€1,600 – €1,800",
      description: "Rebuild metabolic stability and emotional regulation through lunar cycles and seasonal transitions.",
      features: [
        "Everything in 3-Month program",
        "Lunar cycle synchronization",
        "Seasonal transition guidance",
        "Food energetics & microbiome optimization",
        "Advanced craving decoding",
        "Bi-weekly deep-dive sessions",
        "Priority support"
      ],
      popular: true
    },
    {
      duration: "9-Month",
      title: "Full Quantum Rhythm Embodiment",
      price: "€2,500 – €2,700",
      description: "Complete reprogramming of body rhythms with planetary cycle integration and nervous system mastery.",
      features: [
        "Everything in 6-Month program",
        "Planetary rhythm cycle integration",
        "Nervous system & vagus regulation",
        "Weekly 1:1 deep-dive sessions",
        "Complete rhythm intelligence embodiment",
        "Lifetime access to resources",
        "6 months post-program support"
      ],
      popular: false
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
            Programs
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4D7D7D] mb-6">
            Rhythm Reset Programs
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">
            Choose your pathway to restored vitality. Each program guides you through 
            the complete Quantum Rhythm Framework.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className={`relative ${
                program.popular 
                  ? 'border-accent shadow-quantum scale-105' 
                  : 'border-border'
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-sans font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardDescription className="text-sm font-sans uppercase tracking-wide text-muted-foreground mb-2">
                  {program.duration}
                </CardDescription>
                <CardTitle className="font-serif text-3xl text-primary mb-2">
                  {program.title}
                </CardTitle>
                <div className="font-serif text-4xl font-bold text-primary mt-4">
                  {program.price}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="font-sans text-sm text-foreground/70 text-center leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-sm text-foreground/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Link to="/contact" className="w-full">
                  <Button 
                    className={`w-full font-sans font-medium ${
                      program.popular
                        ? 'bg-primary hover:bg-primary/90'
                        : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* What's Included */}
        <div className="max-w-4xl mx-auto bg-muted/30 p-12 rounded-lg border border-border animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-[#4D7D7D] text-center mb-8">
            What's Included in All Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Comprehensive rhythm assessment",
              "Personalized QRN protocols",
              "Circadian eating window optimization",
              "Light exposure guidance",
              "Progress tracking tools",
              "Educational resources",
              "Ongoing email support",
              "Access to Solaris community"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                <span className="font-sans text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Not Sure Section */}
        <div className="max-w-3xl mx-auto mt-16 text-center animate-fade-in">
          <h3 className="font-serif text-2xl font-semibold text-[#4D7D7D] mb-4">
            Not Sure Which Program is Right for You?
          </h3>
          <p className="font-sans text-foreground/80 mb-6">
            Book a free discovery call to discuss your unique needs and goals.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="font-sans">
              Schedule Discovery Call
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Programs;
