import { Link } from "react-router-dom";
import { ArrowRight, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-quantum-waves.jpg";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import sunriseImage from "@/assets/sunrise-nature.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  const phases = [
    {
      phase: "01",
      titleKey: 'home.phases.decode.title',
      descKey: 'home.phases.decode.desc'
    },
    {
      phase: "02",
      titleKey: 'home.phases.reprogram.title',
      descKey: 'home.phases.reprogram.desc'
    },
    {
      phase: "03",
      titleKey: 'home.phases.rebuild.title',
      descKey: 'home.phases.rebuild.desc'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Sunrise Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background - Sunrise Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${sunriseImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            {/* Centered Logo - perfectly round */}
            <div className="flex justify-center mb-8">
              <img 
                src={logo} 
                alt="Solaris Nutri" 
                className="h-32 md:h-40 w-32 md:w-40 logo-circle object-cover shadow-quantum"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 text-white/90 font-sans text-sm tracking-wider uppercase mb-4">
              <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
              {t('home.hero.badge')}
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-lg">
              {t('home.hero.title1')}
              <span className="block text-amber-200 mt-4 drop-shadow-lg">{t('home.hero.title2')}</span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              {t('home.hero.subtitle')}
            </p>

            <div className="pt-8">
              <Link to="/programs">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-8 py-6 text-lg shadow-quantum transition-all hover:scale-105"
                >
                  {t('home.hero.cta')}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>

            <div className="pt-4 text-sm text-white/80 font-sans drop-shadow">
              {t('home.hero.tagline')}
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              {t('home.why.title')}
            </h2>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed">
              {t('home.why.p1')} <span className="text-accent font-medium">{t('home.why.highlight')}</span>{t('home.why.p1end')}
            </p>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed">
              {t('home.why.p2')}
            </p>
          </div>
        </div>
      </section>

      {/* QRN Philosophy Section with Sunrise Image */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-quantum">
                <img 
                  src={sunriseImage} 
                  alt="Sunrise over nature - representing natural rhythms" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>

            {/* Text Side */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary leading-tight">
                  Quantum Rhythm Nutrition
                </h2>
                
                <div className="space-y-6">
                  <div className="p-6 bg-card rounded-xl border border-border shadow-subtle-glow">
                    <p className="font-sans text-lg text-foreground/90 leading-relaxed italic">
                      "Quantum Rhythm Nutrition is not a diet. It is a timing-based system that supports the restoration of energy, digestion, and clarity by aligning your biology with natural cycles."
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card rounded-xl border border-border shadow-subtle-glow">
                    <p className="font-sans text-lg text-foreground/90 leading-relaxed italic">
                      "Most people try to change what they eat. QRN starts with when your system is ready."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            {t('home.phases.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {phases.map((item, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg border border-border shadow-subtle-glow hover:shadow-quantum transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-accent font-serif text-6xl font-bold mb-4 opacity-50">
                  {item.phase}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  {t(item.titleKey)}
                </h3>
                <p className="font-sans text-foreground/70 leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/method">
              <Button variant="outline" size="lg" className="font-sans">
                {t('home.phases.cta')}
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              {t('home.cta.title')}
            </h2>
            <p className="font-sans text-lg opacity-90">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/programs">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="font-sans font-medium px-8"
                >
                  {t('home.cta.programs')}
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="font-sans font-medium px-8"
                >
                  {t('home.cta.consult')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
