import { Circle, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";
import NewsletterSignup from "@/components/NewsletterSignup";

const Blog = () => {
  const articles = blogPosts;

  return (
    <div className="min-h-screen py-24">
      <SEOHead title="Rhythm & Nutrition Blog" description="Articles on circadian nutrition, TCM spleen health, Rudolf Steiner's grain rhythms and rebuilding metabolic balance through timing." path="/blog" keywords="circadian nutrition blog, TCM spleen, Rudolf Steiner nutrition" />
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
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Rhythmic Reflections
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">
            Insights on rhythm, planetary cycles, spleen health, and the path back to natural alignment.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card 
              key={article.slug}
              className="border-border hover:shadow-quantum transition-all duration-300 animate-fade-in-up group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/blog/${article.slug}`} className="block overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  width={1536}
                  height={1024}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
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
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
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
                <Link to={`/blog/${article.slug}`}>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto font-sans text-accent hover:text-accent/80"
                  >
                    Read Full Article
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-6xl mx-auto mt-20 animate-fade-in">
          <NewsletterSignup source="blog" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
