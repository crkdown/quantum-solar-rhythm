import { Circle, Leaf, Sparkles, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/solaris-nutri-logo.jpeg";

const Shop = () => {
  const granolaFeatures = [
    {
      icon: Clock,
      title: "Slow-Roasted at 120°C",
      description: "Low-temperature roasting preserves delicate nutrients, enzymes, and the natural life force of ingredients that high heat destroys."
    },
    {
      icon: Leaf,
      title: "Enzyme Preservation",
      description: "Cooking below 120°C maintains beneficial enzymes that aid digestion and nutrient absorption, keeping your gut rhythm aligned."
    },
    {
      icon: Sparkles,
      title: "Enhanced Bioavailability",
      description: "Gentle roasting unlocks nutrients while maintaining their bioactive form, allowing your body to fully absorb and utilize them."
    },
    {
      icon: Heart,
      title: "Rhythmic Nourishment",
      description: "Crafted to support your circadian rhythm — perfect for morning activation without the inflammatory stress of processed cereals."
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Solaris Nutri" className="h-24 w-auto" />
          </div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            Artisan Nourishment
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4D7D7D] mb-6">
            Solaris Granola
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">
            Handcrafted, rhythm-aligned granola slow-roasted at 120°C to preserve life force and nourish your body's natural intelligence.
          </p>
        </div>

        {/* Main Product Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-border shadow-quantum animate-fade-in-up overflow-hidden">
            <div className="bg-gradient-to-br from-accent/10 to-primary/5 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <CardDescription className="text-sm font-sans uppercase tracking-wide text-accent mb-3">
                    Artisan Product
                  </CardDescription>
                  <CardTitle className="font-serif text-4xl text-primary mb-4">
                    Solaris Morning Granola
                  </CardTitle>
                  <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                    A carefully curated blend of organic oats, seeds, nuts, and natural sweeteners, 
                    slow-roasted at precisely 120°C to maintain nutritional integrity and support 
                    your morning rhythm activation.
                  </p>
                  <div className="font-serif text-4xl font-bold text-primary mb-4">
                    €18
                  </div>
                  <p className="text-sm text-muted-foreground font-sans mb-6">
                    350g · Handmade in small batches · Organic ingredients
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 font-sans w-full md:w-auto">
                    Order Now
                  </Button>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                    <img src={logo} alt="Solaris Nutri Granola" className="h-40 w-auto opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Benefits of Slow Roasting Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4D7D7D] mb-4">
              Why Slow-Roasting at 120°C Matters
            </h2>
            <p className="font-sans text-foreground/70 max-w-2xl mx-auto">
              Temperature is everything. Unlike commercial granolas roasted at 180°C+, 
              our gentle process honours the living intelligence within each ingredient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {granolaFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-subtle-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <feature.icon className="text-accent" size={24} />
                    </div>
                    <CardTitle className="font-serif text-xl text-primary">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Science Section */}
        <div className="max-w-4xl mx-auto bg-muted/30 p-8 md:p-12 rounded-lg border border-border animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#4D7D7D] mb-4">
              The Science of Gentle Heat
            </h3>
          </div>
          <div className="space-y-4 font-sans text-foreground/80 leading-relaxed">
            <p>
              <span className="font-semibold text-primary">Above 120°C</span>, many heat-sensitive 
              nutrients begin to degrade. Vitamin C, B vitamins, and beneficial enzymes are 
              particularly vulnerable to high temperatures.
            </p>
            <p>
              <span className="font-semibold text-primary">The Maillard reaction</span> that creates 
              that satisfying golden crunch can occur gently at lower temperatures, preserving 
              flavour while protecting nutritional value.
            </p>
            <p>
              <span className="font-semibold text-primary">Slow roasting</span> allows for even 
              heat distribution, ensuring every oat, seed, and nut reaches its optimal state 
              without the oxidative damage caused by rapid high-heat cooking.
            </p>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-16 animate-fade-in">
          <img src={logo} alt="Solaris Nutri" className="h-16 w-auto mx-auto mb-4 opacity-60" />
          <p className="font-lora text-lg text-[#4D7D7D] italic">
            Guiding alignment across the seen and unseen bodies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;