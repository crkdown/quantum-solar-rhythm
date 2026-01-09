import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const mainLinks = [
    { path: "/about", label: t('nav.about') },
    { path: "/method", label: t('nav.method') },
    { path: "/programs", label: t('nav.programs') },
    { path: "/earth-rhythm-retreat", label: t('nav.retreat') },
    { path: "/shop", label: t('nav.shop') },
    { path: "/blog", label: t('nav.blog') },
    { path: "/contact", label: t('nav.contact') },
  ];

  const toolsLinks = [
    { path: "/rhythm-calculator", label: t('nav.rhythmCalc') },
    { path: "/food-rhythm-tool", label: t('nav.foodRhythm') },
  ];

  const resourcesLinks = [
    { path: "/resources", label: t('nav.resources') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Home">
            <img 
              src={logo} 
              alt="Solaris Nutri" 
              className="h-10 w-10 logo-circle object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {mainLinks.slice(0, 4).map((link) => (
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

            {/* Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="font-sans text-xs tracking-wide transition-colors text-foreground/70 hover:text-primary flex items-center gap-1">
                {t('nav.tools')}
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {toolsLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link to={link.path} className="w-full">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources link (merged with Masterclass) */}
            {resourcesLinks.map((link) => (
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

            {mainLinks.slice(4).map((link) => (
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
              {mainLinks.map((link) => (
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
              <div className="border-t border-border pt-4 mt-2">
                <p className="font-sans text-xs text-muted-foreground uppercase mb-2">{t('nav.tools')}</p>
                {toolsLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block font-sans text-sm tracking-wide transition-colors py-2 ${
                      isActive(link.path)
                        ? "text-primary font-medium"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {resourcesLinks.map((link) => (
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
