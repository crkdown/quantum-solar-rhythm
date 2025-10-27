import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
              Solaris Nutri
            </h3>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
              Alignment not restriction.<br />
              Because alignment restores vitality.
            </p>
            <p className="text-xs text-muted-foreground">
              Created by Quantum Pau — Quantum Coherence Practitioner & Nutritionist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Pau
                </Link>
              </li>
              <li>
                <Link to="/method" className="text-muted-foreground hover:text-primary transition-colors">
                  The Method
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Book a Session
                </Link>
              </li>
              <li>
                <a href="mailto:hello@solarisnutri.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Solaris Nutri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
