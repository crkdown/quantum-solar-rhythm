import { Circle, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/solaris-nutri-logo.jpeg";

const Blog = () => {
  const articles = [
    {
      title: "Understanding Circadian Rhythm and Your Body's Natural Clock",
      excerpt: "Discover how your internal timing system governs everything from hormone production to cellular repair, and why alignment matters more than restriction.",
      date: "March 15, 2024",
      category: "Rhythm Science",
      readTime: "8 min read"
    },
    {
      title: "The Lunar Cycle and Your Metabolic Rhythms",
      excerpt: "Explore the fascinating connection between lunar phases and your body's metabolic patterns, energy levels, and nutritional needs.",
      date: "March 8, 2024",
      category: "Planetary Rhythms",
      readTime: "10 min read"
    },
    {
      title: "Rudolf Steiner's Agriculture Course: The Foundation of Biodynamic Nutrition",
      excerpt: "Explore the revolutionary lectures from 1924 that birthed biodynamic agriculture and understand how cosmic rhythms influence the vitality of our food.",
      date: "March 1, 2024",
      category: "Steiner Studies",
      readTime: "12 min read"
    },
    {
      title: "Nutrition According to Rudolf Steiner: Food as Spiritual Substance",
      excerpt: "Delve into Steiner's insights on how different foods affect the physical, etheric, astral, and ego bodies, and the spiritual dimensions of nourishment.",
      date: "February 25, 2024",
      category: "Anthroposophic Nutrition",
      readTime: "10 min read"
    },
    {
      title: "Spiritual Science and Medicine: Healing Through Wholeness",
      excerpt: "Discover how Steiner's collaboration with Dr. Ita Wegman created a new paradigm for understanding health, illness, and the role of nutrition in healing.",
      date: "February 18, 2024",
      category: "Integrative Health",
      readTime: "11 min read"
    },
    {
      title: "Man as Symphony of the Creative Word: The Human Being and Cosmic Nutrition",
      excerpt: "Explore Steiner's profound lectures on how humans are connected to the animal, plant, and mineral kingdoms, and what this means for conscious eating.",
      date: "February 12, 2024",
      category: "Cosmic Connection",
      readTime: "14 min read"
    },
    {
      title: "The Cereal Code: Steiner's Grain Wisdom and Planetary Rhythms",
      excerpt: "An introduction to Rudolf Steiner's 'Cereal of the Week' system and how planetary grain rhythms can support your weekly energy flow.",
      date: "February 8, 2024",
      category: "Ancient Wisdom",
      readTime: "9 min read"
    },
    {
      title: "Beyond Calories: Food as Frequency and Information",
      excerpt: "Shift your perspective from counting calories to understanding food as energetic information that communicates with your cells.",
      date: "February 1, 2024",
      category: "Quantum Nutrition",
      readTime: "7 min read"
    },
    {
      title: "Seasonal Eating: Aligning with Nature's Wisdom",
      excerpt: "How shifting your nourishment patterns with the seasons can restore vitality, improve digestion, and reconnect you with natural cycles.",
      date: "January 25, 2024",
      category: "Seasonal Nourishment",
      readTime: "12 min read"
    },
    {
      title: "Why Your Cravings Are Communication, Not Weakness",
      excerpt: "Learn to decode the intelligent language of cravings and understand what your body is truly asking for beneath surface desires.",
      date: "January 18, 2024",
      category: "Body Wisdom",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Solaris Nutri" className="h-20 w-auto rounded-full" />
          </div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            Journal
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4D7D7D] mb-6">
            Rhythmic Reflections
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">
            Insights on rhythm, planetary cycles, and the path back to natural alignment.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-quantum transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-sans uppercase tracking-wide text-accent">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Calendar size={14} />
                  {article.date}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="font-sans text-foreground/70 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <Button 
                  variant="link" 
                  className="p-0 h-auto font-sans text-accent hover:text-accent/80"
                >
                  Read Full Article
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-4xl mx-auto mt-20 bg-muted/30 p-12 rounded-lg border border-border text-center animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-[#4D7D7D] mb-4">
            Never Miss a Reflection
          </h2>
          <p className="font-sans text-foreground/80 mb-8">
            Subscribe to receive new articles and rhythmic insights in your inbox.
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

export default Blog;
