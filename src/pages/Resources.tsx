import { Circle, Download, Calendar, FileText, Sun, BookOpen, Users, MessageCircle, Gift, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import toolRhythmCycles from "@/assets/tool-rhythm-cycles.png";
import toolBodyAwareness from "@/assets/tool-body-awareness.png";
import toolNourishingRhythm from "@/assets/tool-nourishing-rhythm.png";
import SEOHead from "@/components/SEOHead";
import FreeEbook from "@/components/FreeEbook";


const Resources = () => {
  const resources = [
    {
      icon: Calendar,
      title: "Rhythm Calculator",
      description: "Interactive assessment to discover your optimal eating windows.",
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

  const qrnFoundationLibrary = [
    {
      author: "Helena P. Blavatsky",
      works: "The Secret Doctrine, Isis Unveiled",
      contribution: "Foundational esoteric cosmology connecting human constitution to cosmic rhythms and universal law."
    },
    {
      author: "Alice A. Bailey",
      works: "A Treatise on Cosmic Fire, Esoteric Healing",
      contribution: "Expanded understanding of the etheric body, energy centers, and the relationship between consciousness and physical vitality."
    },
    {
      author: "Master Choa Kok Sui",
      works: "Pranic Healing, Twin Hearts Meditation",
      contribution: "Practical energy healing techniques, chakra-based health protocols, and the Twin Hearts meditation used in Solaris Nutri practice."
    },
    {
      author: "Rudolf Steiner",
      works: "Agriculture Course, Nutrition & Stimulants, Spiritual Science & Medicine",
      contribution: "Biodynamic agriculture, anthroposophic nutrition, planetary grain cycles, and the spiritual dimensions of food and health."
    },
    {
      author: "Biodynamic Tradition",
      works: "Demeter Standards, Biodynamic Farming Principles",
      contribution: "Living agriculture aligned with lunar, planetary and seasonal cycles — the foundation of rhythmic food quality."
    }
  ];

  const recipeCollections = [
    {
      author: "Rudolf Steiner",
      title: "Cereal of the Week",
      description: "Steiner's planetary grain rhythm: a different ancient cereal for each day of the week (rice, barley, millet, rye, oats, corn, wheat) — recipes that align body, planet and weekday for harmonised vitality.",
      tag: "Anthroposophic Nutrition"
    },
    {
      author: "Daverick Leggett",
      title: "Recipes for Self-Healing",
      description: "TCM-based seasonal recipes that nourish the spleen, support digestion, and rebuild qi using warming, easy-to-digest whole foods.",
      tag: "Traditional Chinese Medicine"
    },
    {
      author: "Susan Blum, MD",
      title: "Immune System Recovery Plan",
      description: "An anti-inflammatory protocol with gut-healing recipes designed to calm autoimmunity and restore immune balance through food.",
      tag: "Functional Medicine"
    },
    {
      author: "William W. Li, MD",
      title: "Eat to Beat Disease",
      description: "Recipes built around foods that activate the body's five defence systems — angiogenesis, regeneration, microbiome, DNA protection, and immunity.",
      tag: "Food as Medicine"
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <SEOHead title="Free Rhythm Resources & Recipes" description="Free Solaris Nutri guides, seasonal nutrition PDFs, rhythm tools and curated healing-food recipe traditions from Solaris Nutri." path="/resources" keywords="free nutrition resources, seasonal eating guide, circadian rhythm tools" />
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Solaris Nutri" className="h-20 w-auto rounded-full" />
          </div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            Resources
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Rhythm Tools & Guides
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">
            Free downloads to support your journey back to natural alignment.
          </p>
        </div>

        {/* Tool Area Illustrations */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl border border-border p-4 text-center shadow-subtle-glow hover:shadow-quantum transition-all">
              <img src={toolRhythmCycles} alt="Circadian rhythm and inner cycles" className="w-full h-48 object-contain mb-3" />
              <p className="font-sans text-sm text-foreground/70 font-medium">Rhythm & Inner Cycles</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 text-center shadow-subtle-glow hover:shadow-quantum transition-all">
              <img src={toolBodyAwareness} alt="Body awareness and spleen health" className="w-full h-48 object-contain mb-3" />
              <p className="font-sans text-sm text-foreground/70 font-medium">Body Awareness</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 text-center shadow-subtle-glow hover:shadow-quantum transition-all">
              <img src={toolNourishingRhythm} alt="Nourishing rhythm and wholesome eating" className="w-full h-48 object-contain mb-3" />
              <p className="font-sans text-sm text-foreground/70 font-medium">Nourishing Rhythm</p>
            </div>
          </div>
        </div>

        {/* Free e-book for Instagram followers */}
        <div className="max-w-5xl mx-auto mb-16 animate-fade-in">
          <FreeEbook />
        </div>

        {/* Solaris Nutri Rhythm Circle — Free with discovery call */}

        <div className="max-w-5xl mx-auto mb-16 animate-fade-in">
          <Card className="border-accent/40 bg-gradient-to-br from-accent/10 via-background to-primary/5 overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center">
                    <Gift className="text-accent" size={36} />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <CardDescription className="text-xs font-sans uppercase tracking-wider text-accent mb-2">
                    Free Gift
                  </CardDescription>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">
                    Solaris Nutri Rhythm Circle Assessment
                  </h3>
                  <p className="font-sans text-foreground/70 mb-5 leading-relaxed">
                    A printable self-mapping tool to see which rhythm areas need support.
                    Receive it for free when you book your complimentary discovery call — no purchase required.
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 font-sans">
                      Book Free Discovery Call & Get the Circle
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
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

        {/* Solaris Nutri Foundation Library */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-accent mb-4">
              <BookOpen size={24} />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-3">
              Solaris Nutri Foundation Library
            </h2>
            <p className="font-sans text-foreground/70 max-w-2xl mx-auto">
              The authors, traditions, and lineages that inform the Solaris Nutri Framework.
            </p>
          </div>

          <div className="space-y-4">
            {qrnFoundationLibrary.map((entry, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-lg border border-border hover:border-accent/40 transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="text-accent" size={20} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-primary mb-1">{entry.author}</h3>
                    <p className="font-sans text-sm text-accent mb-2 italic">{entry.works}</p>
                    <p className="font-sans text-sm text-foreground/70 leading-relaxed">{entry.contribution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recipes & Healing Foods */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-accent mb-4">
              <ChefHat size={24} />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-3">
              Recipes & Healing Foods
            </h2>
            <p className="font-sans text-foreground/70 max-w-2xl mx-auto">
              Curated recipe traditions and protocols woven into every Solaris Nutri program — from anthroposophic grain wisdom to functional medicine and food-as-medicine science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {recipeCollections.map((r, i) => (
              <Card
                key={i}
                className="border-border hover:border-accent/40 hover:shadow-quantum transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <CardHeader className="pb-3">
                  <CardDescription className="text-xs font-sans uppercase tracking-wider text-accent mb-1">
                    {r.tag}
                  </CardDescription>
                  <CardTitle className="font-serif text-xl text-primary">
                    {r.title}
                  </CardTitle>
                  <p className="font-sans text-sm text-foreground/60 italic">{r.author}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    {r.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* WhatsApp Community */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
            <MessageCircle className="text-green-600 mx-auto mb-4" size={36} />
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">
              Join Our WhatsApp Community
            </h2>
            <p className="font-sans text-foreground/70 mb-6 max-w-lg mx-auto">
              Connect with like-minded people on their rhythm journey. Share insights, ask questions, and receive weekly rhythm tips.
            </p>
            <a 
              href="https://chat.whatsapp.com/YOUR_GROUP_LINK" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white font-sans px-8">
                <MessageCircle size={18} className="mr-2" />
                Join WhatsApp Group
              </Button>
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-4xl mx-auto bg-muted/30 p-12 rounded-lg border border-border text-center animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">
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
