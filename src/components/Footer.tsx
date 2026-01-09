import { Link } from "react-router-dom";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo} 
                alt="Solaris Nutri" 
                className="h-20 w-20 logo-circle object-cover"
              />
            </Link>
            <p className="text-muted-foreground font-lora text-sm leading-relaxed mb-4">
              {t('footer.tagline')}<br />
              {t('home.hero.tagline')}
            </p>
            <p className="text-xs text-muted-foreground font-lora">
              {t('footer.createdBy')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-nourd font-semibold text-primary mb-4">{t('footer.explore')}</h4>
            <ul className="space-y-2 text-sm font-lora">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/method" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.method')}
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.programs')}
                </Link>
              </li>
              <li>
                <Link to="/masterclasses" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.masterclass')}
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.resources')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.shop')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-nourd font-semibold text-primary mb-4">{t('footer.connect')}</h4>
            <ul className="space-y-2 text-sm font-lora">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.book')}
                </Link>
              </li>
              <li>
                <a href="mailto:hello@solarisnutri.com" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <img 
            src={logo} 
            alt="Solaris Nutri" 
            className="h-12 w-12 mx-auto mb-4 opacity-60 logo-circle object-cover"
          />
          <p className="text-xs text-muted-foreground font-lora">
            © {new Date().getFullYear()} Solaris Nutri. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
