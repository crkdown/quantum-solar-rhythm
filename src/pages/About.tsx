import { Circle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
              <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
              About Pau
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4D7D7D] mb-6">
              Bridging Biology, Rhythm & Consciousness
            </h1>
          </div>

          {/* Story */}
          <div className="prose prose-lg max-w-none space-y-8 animate-fade-in-up">
            <div className="bg-card p-8 md:p-12 rounded-lg border border-border shadow-subtle-glow">
              <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-6">
                I'm <span className="font-semibold text-primary">Quantum Pau</span> — 
                a Quantum Coherence Practitioner and Nutritionist who spent years 
                searching for answers that traditional nutrition couldn't provide.
              </p>

              <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-6">
                After witnessing countless clients struggle with restrictive diets 
                that ignored their body's natural intelligence, I knew there had to 
                be a better way. My journey led me deep into chronobiology, quantum 
                physics, and the ancient wisdom of circadian rhythms.
              </p>

              <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-6">
                What I discovered changed everything: <span className="text-accent font-medium">your body 
                doesn't need another meal plan — it needs rhythm restoration</span>. 
                When we align our eating patterns with our biological clocks, 
                something remarkable happens. Inflammation decreases. Energy stabilizes. 
                Emotional resilience returns.
              </p>

              <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-6">
                This realization birthed the <span className="font-semibold text-primary">Quantum 
                Rhythm Framework</span> — a methodology that treats time as a nutrient 
                and honors the profound intelligence encoded in your cells.
              </p>

              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                Today, I help people worldwide reclaim their vitality through rhythm, 
                not restriction. Because when you work <em>with</em> your body's natural 
                cycles instead of against them, transformation becomes inevitable.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-muted/30 p-8 rounded-lg border border-border animate-fade-in-up">
              <h3 className="font-serif text-2xl font-semibold text-[#4D7D7D] mb-4">
                My Approach
              </h3>
              <ul className="space-y-3 font-sans text-foreground/80">
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Biology-first nutrition grounded in circadian science</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Quantum coherence as the foundation of vitality</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Compassionate guidance without restriction or shame</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Practical tools that honor modern life</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border border-border animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <h3 className="font-serif text-2xl font-semibold text-[#4D7D7D] mb-4">
                My Credentials
              </h3>
              <ul className="space-y-3 font-sans text-foreground/80">
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Certified Quantum Coherence Practitioner</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Registered Nutritionist (CNP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Chronobiology & Circadian Health Specialist</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>10+ years guiding rhythm restoration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
