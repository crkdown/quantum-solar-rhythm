import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { path: "/about", label: t('nav.about') },
    { path: "/method", label: t('nav.method') },
    { path: "/programs", label: t('nav.programs') },
    { path: "/masterclasses", label: t('nav.masterclass') },
    { path: "/rhythm-calculator", label: t('nav.rhythmCalc') },
    { path: "/food-rhythm-tool", label: t('nav.foodRhythm') },
    { path: "/earth-rhythm-retreat", label: t('nav.retreat') },
    { path: "/resources", label: t('nav.resources') },
    { path: "/blog", label: t('nav.blog') },
    { path: "/shop", label: t('nav.shop') },
    { path: "/contact", label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - just the icon, links to home */}
          <Link to="/" className="flex items-center" aria-label="Home">
            <img 
              src={logo} 
              alt="Solaris Nutri" 
              className="h-10 w-10 logo-circle object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-xs tracking-wide transition-colors ${
                  isActive(link.path)
                    ? "text-primary font-medium"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-sm tracking-wide transition-colors ${
                    isActive(link.path)
                      ? "text-primary font-medium"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
