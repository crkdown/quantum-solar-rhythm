import { Link } from "react-router-dom";
import logo from "@/assets/solaris-nutri-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Solaris Nutri" className="h-20 w-auto" />
            </Link>
            <p className="text-[#A6A6A6] font-lora text-sm leading-relaxed mb-4">
              Guiding alignment across the seen and unseen bodies.<br />
              Alignment not restriction — because alignment restores vitality.
            </p>
            <p className="text-xs text-[#A6A6A6] font-lora">
              Created by Paula Carolina Suescun — BioRhythm Nutrition Coach & Nutritionist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-nourd font-semibold text-[#4D7D7D] mb-4">Explore</h4>
            <ul className="space-y-2 text-sm font-lora">
              <li>
                <Link to="/about" className="text-[#A6A6A6] hover:text-primary transition-colors">
                  About Paula
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
                <Link to="/masterclasses" className="text-[#A6A6A6] hover:text-primary transition-colors">
                  Masterclasses
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-[#A6A6A6] hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#A6A6A6] hover:text-primary transition-colors">
                  Journal
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
            <h4 className="font-nourd font-semibold text-[#4D7D7D] mb-4">Connect</h4>
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
          <img src={logo} alt="Solaris Nutri" className="h-12 w-auto mx-auto mb-4 opacity-60" />
          <p className="text-xs text-[#A6A6A6] font-lora">
            © {new Date().getFullYear()} Solaris Nutri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;