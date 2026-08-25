import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, ArrowLeft, Circle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen py-24">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        keywords={post.category}
      />
      <article className="container mx-auto px-6 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-sans text-sm mb-8 hover:underline">
          <ArrowLeft size={16} />
          Back to Journal
        </Link>

        <div className="inline-flex items-center gap-2 text-accent font-sans text-xs tracking-wider uppercase mb-4">
          <Circle size={8} fill="currentColor" />
          {post.category}
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans mb-10">
          <span className="inline-flex items-center gap-2">
            <Calendar size={14} />
            {post.date}
          </span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <img
          src={post.image}
          alt={post.title}
          width={1536}
          height={1024}
          className="w-full aspect-[3/2] object-cover rounded-2xl border border-border shadow-quantum mb-10"
        />

        <p className="font-serif text-xl text-foreground/80 leading-relaxed mb-10 border-l-2 border-accent pl-6">
          {post.excerpt}
        </p>


        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {post.references && post.references.length > 0 && (
          <div className="mt-12 bg-muted/30 border border-border rounded-xl p-6">
            <h2 className="font-serif text-xl font-semibold text-primary mb-4">References</h2>
            <ul className="space-y-3">
              {post.references.map((ref, i) => (
                <li key={i}>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-accent hover:underline inline-flex items-start gap-2"
                  >
                    <ExternalLink size={14} className="mt-1 flex-shrink-0" />
                    {ref.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12 bg-accent/5 border border-accent/20 rounded-xl p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-primary mb-3">
            Want to apply this to your own rhythm?
          </h2>
          <p className="font-sans text-foreground/70 mb-6">
            Book a free assessment call and receive the Solaris Nutri Rhythm Circle assessment as a gift.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-sans">
              Book a Free Assessment Call
            </Button>
          </Link>
        </div>

        <div className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-6">Continue reading</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="block bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
              >
                <span className="font-sans text-xs uppercase tracking-wide text-accent">{p.category}</span>
                <p className="font-serif text-base text-primary mt-2 leading-snug">{p.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
