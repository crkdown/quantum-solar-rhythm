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
                <span className="font-semibold text-primary">Solaris Nutri</span> is a forward-thinking 
                wellness company led by Paula Carolina Suescun, a nutritionist, holistic health coach, 
                and creator of the <span className="text-accent font-medium">Quantum Rhythm Nutrition™</span> method.
              </p>

              <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-6">
                The method focuses on restoring biological alignment through circadian, lunar, seasonal, 
                and digestive rhythms. Integrating physiology, chronobiology, microbiome science, Chinese 
                Medicine, biodynamics, and esoteric principles, Solaris Nutri offers a unique multidimensional 
                approach to nutrition that reconnects individuals with their natural cycles.
              </p>

              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                Paula's mission is to empower people to regain clarity, energy, and metabolic balance by 
                understanding their body as a rhythmic system influenced by natural forces. Her work bridges 
                science and intuitive knowledge, guiding clients toward sustainable wellbeing and deeper 
                coherence with the living world.
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
                  <span>Alignment over restriction — rhythm intelligence as foundation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Integration of chronobiology, quantum biology, and planetary rhythms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Food as frequency and information, not just calories</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Compassionate guidance rooted in love, kindness, and respect for nature</span>
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
                  <span>Nutritionist-Dietitian (UNAL - National University of Colombia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Certified Holistic Health Coach (IIN - Institute for Integrative Nutrition)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Clinical nutrition experience in hospitals & community health</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Creator of Quantum Rhythm Nutrition framework</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="font-serif text-3xl font-semibold text-[#4D7D7D] text-center mb-10">
              Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Rhythm",
                  description: "Honouring circadian, lunar, seasonal, and digestive cycles."
                },
                {
                  title: "Nature",
                  description: "Trusting natural simplicity as the ultimate teacher."
                },
                {
                  title: "Integration",
                  description: "Merging modern science with ancestral, biodynamic, Ayurvedic, and esoteric knowledge."
                },
                {
                  title: "Education",
                  description: "Empowering people through understanding."
                },
                {
                  title: "Simplicity",
                  description: "Restoring balance by removing complexity."
                },
                {
                  title: "Conscious Evolution",
                  description: "Supporting physical, emotional, and energetic growth."
                },
                {
                  title: "Natural Integrity",
                  description: "Choosing minimally industrialised foods that sustain vitality and ecological balance."
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-accent/5 p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Circle size={8} fill="currentColor" className="text-accent" />
                    <h4 className="font-serif text-lg font-semibold text-[#4D7D7D]">{value.title}</h4>
                  </div>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
