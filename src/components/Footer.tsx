import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-nourd font-semibold text-[#A6A6A6] mb-4">
              Solaris Nutri
            </h3>
            <p className="text-[#A6A6A6] font-lora text-sm leading-relaxed mb-4">
              Alignment not restriction.<br />
              Because alignment restores vitality.
            </p>
            <p className="text-xs text-[#A6A6A6] font-lora">
              Created by Quantum Pau — Quantum Coherence Practitioner & Nutritionist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-nourd font-semibold text-[#A6A6A6] mb-4">Explore</h4>
            <ul className="space-y-2 text-sm font-lora">
              <li>
                <Link to="/about" className="text-[#A6A6A6] hover:text-primary transition-colors">
                  About Pau
                </Link>
              </li>
              <li>
                <Link to="/method" className="text-[#A6A6A6] hover:text-primary transition-colors">
                  The Method
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-[#A6A6A6] hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-[#A6A6A6] hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-nourd font-semibold text-[#A6A6A6] mb-4">Connect</h4>
            <ul className="space-y-2 text-sm font-lora">
              <li>
                <Link to="/contact" className="text-[#A6A6A6] hover:text-primary transition-colors">
                  Book a Session
                </Link>
              </li>
              <li>
                <a href="mailto:hello@solarisnutri.com" className="text-[#A6A6A6] hover:text-primary transition-colors">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-[#A6A6A6] font-lora">
            © {new Date().getFullYear()} Solaris Nutri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
