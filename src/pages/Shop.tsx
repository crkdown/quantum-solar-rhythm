import { Circle, Download, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Shop = () => {
  const printables = [
    {
      title: "QRN Daily Chart",
      description: "Track your circadian eating windows, energy levels, and rhythm patterns.",
      price: "$12",
      type: "Digital Download"
    },
    {
      title: "Seasonal Alignment Guide",
      description: "Quarterly nutrition protocols aligned with natural seasonal rhythms.",
      price: "$24",
      type: "Digital Download"
    },
    {
      title: "Chronotype Assessment Kit",
      description: "Discover your unique biological rhythm signature with detailed analysis.",
      price: "$18",
      type: "Digital Download"
    },
    {
      title: "Quantum Meal Planner",
      description: "Weekly meal architecture templates based on circadian principles.",
      price: "$15",
      type: "Digital Download"
    }
  ];

  const products = [
    {
      title: "Solaris Morning Muesli",
      description: "Quantum-aligned breakfast blend designed for optimal circadian activation.",
      price: "$28",
      type: "Physical Product",
      available: "Coming Soon"
    },
    {
      title: "Solaris Evening Blend",
      description: "Nighttime nutrient blend supporting natural melatonin production.",
      price: "$32",
      type: "Physical Product",
      available: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            Shop & Resources
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4D7D7D] mb-6">
            Printables & Shop
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">
            Tools and resources to support your rhythm restoration journey.
          </p>
        </div>

        {/* Printables Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Download className="text-accent" size={28} />
            <h2 className="font-serif text-3xl font-bold text-[#4D7D7D]">
              Digital Printables & Charts
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
            {printables.map((item, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-quantum transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardDescription className="text-xs font-sans uppercase tracking-wide text-accent mb-2">
                    {item.type}
                  </CardDescription>
                  <CardTitle className="font-serif text-xl text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="font-serif text-2xl font-bold text-primary">
                    {item.price}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90 font-sans">
                    Download Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Package className="text-accent" size={28} />
            <h2 className="font-serif text-3xl font-bold text-[#4D7D7D]">
              Solaris Nutri Products
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {products.map((item, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-quantum transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardDescription className="text-xs font-sans uppercase tracking-wide text-accent">
                      {item.type}
                    </CardDescription>
                    <span className="text-xs font-sans font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">
                      {item.available}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-2xl text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="font-sans text-foreground/70 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="font-serif text-3xl font-bold text-primary">
                    {item.price}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    className="w-full font-sans" 
                    variant="secondary"
                    disabled
                  >
                    Notify When Available
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Bundle Offer */}
        <div className="max-w-4xl mx-auto mt-20 bg-primary/5 p-12 rounded-lg border border-primary/20 text-center animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-[#4D7D7D] mb-4">
            Complete Rhythm Toolkit Bundle
          </h2>
          <p className="font-sans text-foreground/80 mb-6">
            Get all four printables at a special bundle price and save 25%.
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-muted-foreground line-through font-serif text-2xl">$69</span>
            <span className="font-serif text-4xl font-bold text-accent">$52</span>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 font-sans font-medium px-8">
            Get Bundle Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
