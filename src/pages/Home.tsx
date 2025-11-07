import { Link } from "react-router-dom";
import { ArrowRight, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-quantum-waves.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
              <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
              Quantum Rhythm Framework
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#4D7D7D] leading-tight">
              The world doesn't need another diet.
              <span className="block text-accent mt-4">It needs rhythm.</span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Discover the revolutionary approach to nutrition that restores biological 
              and emotional alignment through rhythm, not restriction.
            </p>

            <div className="pt-8">
              <Link to="/programs">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-8 py-6 text-lg shadow-quantum transition-all hover:scale-105"
                >
                  Start Your 6-Week Rhythm Reset
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>

            <div className="pt-4 text-sm text-muted-foreground font-sans">
              Alignment not restriction. Because alignment restores vitality.
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4D7D7D]">
              Why Rhythm?
            </h2>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed">
              Your body doesn't speak the language of calories or macros. 
              It speaks the language of <span className="text-accent font-medium">circadian rhythms</span>, 
              seasonal cycles, and quantum coherence.
            </p>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed">
              The Quantum Rhythm Framework (QR) is the first nutritional methodology 
              that treats time as a nutrient — restoring your body's natural intelligence 
              through aligned eating patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4D7D7D] text-center mb-16">
            The Three Phases
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                phase: "01",
                title: "Decode",
                description: "Understand your unique biological rhythm signature and identify misalignments causing fatigue, cravings, and inflammation."
              },
              {
                phase: "02",
                title: "Reprogram",
                description: "Reset your circadian clock through strategic meal timing, light exposure, and quantum-aligned nutrition protocols."
              },
              {
                phase: "03",
                title: "Rebuild",
                description: "Establish sustainable rhythms that restore vitality, mental clarity, and emotional resilience for life."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg border border-border shadow-subtle-glow hover:shadow-quantum transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-accent font-serif text-6xl font-bold mb-4 opacity-50">
                  {item.phase}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#4D7D7D] mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/method">
              <Button variant="outline" size="lg" className="font-sans">
                Learn More About The Method
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Ready to Restore Your Rhythm?
            </h2>
            <p className="font-sans text-lg opacity-90">
              Begin your transformation with personalized rhythm resets, 
              printable tools, and quantum-aligned nutrition guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/programs">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="font-sans font-medium px-8"
                >
                  Explore Programs
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="font-sans font-medium px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
