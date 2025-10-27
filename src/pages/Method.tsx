import { Circle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import methodDiagram from "@/assets/method-diagram.jpg";

const Method = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            The Method
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            The Quantum Rhythm Framework
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">
            A revolutionary three-phase methodology that restores your body's 
            natural intelligence through aligned nutrition and circadian coherence.
          </p>
        </div>

        {/* Diagram */}
        <div className="max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="bg-card p-8 rounded-lg border border-border shadow-quantum">
            <img 
              src={methodDiagram} 
              alt="Quantum Rhythm Framework Diagram" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Three Phases - Detailed */}
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Phase 1: Decode */}
          <div className="grid md:grid-cols-12 gap-8 items-start animate-fade-in-up">
            <div className="md:col-span-3">
              <div className="text-accent font-serif text-8xl font-bold opacity-30">
                01
              </div>
            </div>
            <div className="md:col-span-9 space-y-4">
              <h2 className="font-serif text-4xl font-bold text-primary">
                Decode
              </h2>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                <span className="font-semibold text-primary">Understand your rhythm signature.</span> We begin by 
                mapping your unique biological patterns — sleep-wake cycles, energy fluctuations, 
                digestive rhythms, and hormonal patterns.
              </p>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-sans font-semibold text-foreground mb-3">What You'll Discover:</h3>
                <ul className="space-y-2 font-sans text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>Your natural chronotype and optimal eating windows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>Hidden circadian misalignments causing symptoms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>Quantum coherence baseline assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>Environmental factors disrupting your rhythm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2: Reprogram */}
          <div className="grid md:grid-cols-12 gap-8 items-start animate-fade-in-up">
            <div className="md:col-span-3">
              <div className="text-accent font-serif text-8xl font-bold opacity-30">
                02
              </div>
            </div>
            <div className="md:col-span-9 space-y-4">
              <h2 className="font-serif text-4xl font-bold text-primary">
                Reprogram
              </h2>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                <span className="font-semibold text-primary">Reset your biological clock.</span> Using 
                strategic meal timing, light exposure protocols, and quantum-aligned nutrition, 
                we restore your body's natural rhythms.
              </p>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-sans font-semibold text-foreground mb-3">Core Protocols:</h3>
                <ul className="space-y-2 font-sans text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>Circadian eating windows tailored to your chronotype</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>Quantum-coherent food combinations and timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>Light exposure and darkness protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>Movement aligned with natural energy peaks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3: Rebuild */}
          <div className="grid md:grid-cols-12 gap-8 items-start animate-fade-in-up">
            <div className="md:col-span-3">
              <div className="text-accent font-serif text-8xl font-bold opacity-30">
                03
              </div>
            </div>
            <div className="md:col-span-9 space-y-4">
              <h2 className="font-serif text-4xl font-bold text-primary">
                Rebuild
              </h2>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                <span className="font-semibold text-primary">Establish sustainable rhythms.</span> Once 
                aligned, we solidify these patterns into lifelong habits that continuously 
                regenerate your vitality.
              </p>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-sans font-semibold text-foreground mb-3">Long-Term Results:</h3>
                <ul className="space-y-2 font-sans text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>Sustained energy without crashes or cravings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>Balanced mood and emotional resilience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>Improved sleep quality and recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>Intuitive relationship with food and your body</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-20 text-center bg-primary/5 p-12 rounded-lg border border-primary/20 animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">
            Ready to Begin Your Rhythm Reset?
          </h2>
          <p className="font-sans text-foreground/80 mb-8">
            Choose from 3-week, 6-week, or 9-week programs — each designed to 
            guide you through all three phases.
          </p>
          <Link to="/programs">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-sans font-medium px-8">
              Explore Programs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Method;
