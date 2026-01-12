import { Circle, Leaf, Sparkles, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import granolaProduct from "@/assets/granola-product.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Shop = () => {
  const { t, language } = useLanguage();

  const granolaFeatures = {
    en: [
      {
        icon: Clock,
        title: "Slow-Roasted at 120°C",
        description: "Low-temperature roasting preserves delicate nutrients, enzymes, and the natural life force of ingredients that high heat destroys."
      },
      {
        icon: Leaf,
        title: "Enzyme Preservation",
        description: "Cooking below 120°C maintains beneficial enzymes that aid digestion and nutrient absorption, keeping your gut rhythm aligned."
      },
      {
        icon: Sparkles,
        title: "Enhanced Bioavailability",
        description: "Gentle roasting unlocks nutrients while maintaining their bioactive form, allowing your body to fully absorb and utilize them."
      },
      {
        icon: Heart,
        title: "Rhythmic Nourishment",
        description: "Crafted to support your circadian rhythm — perfect for morning activation without the inflammatory stress of processed cereals."
      }
    ],
    es: [
      {
        icon: Clock,
        title: "Tostado Lento a 120°C",
        description: "El tostado a baja temperatura preserva nutrientes delicados, enzimas y la fuerza vital natural de los ingredientes que el calor alto destruye."
      },
      {
        icon: Leaf,
        title: "Preservación de Enzimas",
        description: "Cocinar por debajo de 120°C mantiene enzimas beneficiosas que ayudan a la digestión y absorción de nutrientes, manteniendo tu ritmo intestinal alineado."
      },
      {
        icon: Sparkles,
        title: "Biodisponibilidad Mejorada",
        description: "El tostado suave desbloquea nutrientes mientras mantiene su forma bioactiva, permitiendo que tu cuerpo los absorba y utilice completamente."
      },
      {
        icon: Heart,
        title: "Nutrición Rítmica",
        description: "Elaborada para apoyar tu ritmo circadiano — perfecta para la activación matutina sin el estrés inflamatorio de los cereales procesados."
      }
    ],
    pt: [
      {
        icon: Clock,
        title: "Torrado Lento a 120°C",
        description: "A torrefação a baixa temperatura preserva nutrientes delicados, enzimas e a força vital natural dos ingredientes que o calor alto destrói."
      },
      {
        icon: Leaf,
        title: "Preservação de Enzimas",
        description: "Cozinhar abaixo de 120°C mantém enzimas benéficas que auxiliam a digestão e absorção de nutrientes, mantendo seu ritmo intestinal alinhado."
      },
      {
        icon: Sparkles,
        title: "Biodisponibilidade Melhorada",
        description: "A torrefação suave desbloqueia nutrientes enquanto mantém sua forma bioativa, permitindo que seu corpo os absorva e utilize completamente."
      },
      {
        icon: Heart,
        title: "Nutrição Rítmica",
        description: "Elaborada para apoiar seu ritmo circadiano — perfeita para a ativação matinal sem o estresse inflamatório dos cereais processados."
      }
    ]
  };

  const currentFeatures = granolaFeatures[language] || granolaFeatures.en;

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Solaris Nutri" className="h-24 w-auto rounded-full" />
          </div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            {t('shop.badge')}
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            {t('shop.title')}
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">
            {t('shop.subtitle')}
          </p>
        </div>

        {/* Main Product Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-border shadow-quantum animate-fade-in-up overflow-hidden">
            <div className="bg-gradient-to-br from-accent/10 to-primary/5 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <CardDescription className="text-sm font-sans uppercase tracking-wide text-accent mb-3">
                    {language === 'es' ? 'Producto Artesanal' : language === 'pt' ? 'Produto Artesanal' : 'Artisan Product'}
                  </CardDescription>
                  <CardTitle className="font-serif text-4xl text-primary mb-4">
                    {t('shop.product')}
                  </CardTitle>
                  <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                    {t('shop.product.desc')}
                  </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-lg font-medium animate-pulse-slow">
                    {language === 'en' ? '🌿 Coming Soon' : language === 'es' ? '🌿 Próximamente' : '🌿 Em Breve'}
                  </span>
                </div>
                <Button size="lg" disabled className="w-full bg-muted text-muted-foreground font-sans cursor-not-allowed md:w-auto">
                  {language === 'en' ? 'Notify Me When Available' : language === 'es' ? 'Notificarme' : 'Notifique-me'}
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  {language === 'en' ? 'Be the first to know when our artisan granola launches.' : language === 'es' ? 'Sé el primero en saber cuando lancemos nuestra granola artesanal.' : 'Seja o primeiro a saber quando nossa granola artesanal for lançada.'}
                </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={granolaProduct} 
                    alt="Solaris Nutri Granola" 
                    className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Benefits of Slow Roasting Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('shop.whyTitle')}
            </h2>
            <p className="font-sans text-foreground/70 max-w-2xl mx-auto">
              {t('shop.whyDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {currentFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-subtle-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <feature.icon className="text-accent" size={24} />
                    </div>
                    <CardTitle className="font-serif text-xl text-primary">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Science Section */}
        <div className="max-w-4xl mx-auto bg-muted/30 p-8 md:p-12 rounded-lg border border-border animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              {t('shop.science')}
            </h3>
          </div>
          <div className="space-y-4 font-sans text-foreground/80 leading-relaxed">
            <p>
              <span className="font-semibold text-primary">{language === 'es' ? 'Por encima de 120°C' : language === 'pt' ? 'Acima de 120°C' : 'Above 120°C'}</span>, {language === 'es' ? 'muchos nutrientes sensibles al calor comienzan a degradarse. La vitamina C, vitaminas B y enzimas beneficiosas son particularmente vulnerables a altas temperaturas.' : language === 'pt' ? 'muitos nutrientes sensíveis ao calor começam a degradar. A vitamina C, vitaminas B e enzimas benéficas são particularmente vulneráveis a altas temperaturas.' : 'many heat-sensitive nutrients begin to degrade. Vitamin C, B vitamins, and beneficial enzymes are particularly vulnerable to high temperatures.'}
            </p>
            <p>
              <span className="font-semibold text-primary">{language === 'es' ? 'La reacción de Maillard' : language === 'pt' ? 'A reação de Maillard' : 'The Maillard reaction'}</span> {language === 'es' ? 'que crea ese crujido dorado satisfactorio puede ocurrir suavemente a temperaturas más bajas, preservando el sabor mientras protege el valor nutricional.' : language === 'pt' ? 'que cria aquele crocante dourado satisfatório pode ocorrer suavemente a temperaturas mais baixas, preservando o sabor enquanto protege o valor nutricional.' : 'that creates that satisfying golden crunch can occur gently at lower temperatures, preserving flavour while protecting nutritional value.'}
            </p>
            <p>
              <span className="font-semibold text-primary">{language === 'es' ? 'El tostado lento' : language === 'pt' ? 'A torrefação lenta' : 'Slow roasting'}</span> {language === 'es' ? 'permite una distribución uniforme del calor, asegurando que cada avena, semilla y nuez alcance su estado óptimo sin el daño oxidativo causado por la cocción rápida a alto calor.' : language === 'pt' ? 'permite uma distribuição uniforme do calor, garantindo que cada aveia, semente e noz atinja seu estado ideal sem o dano oxidativo causado pela cocção rápida a alta temperatura.' : 'allows for even heat distribution, ensuring every oat, seed, and nut reaches its optimal state without the oxidative damage caused by rapid high-heat cooking.'}
            </p>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-16 animate-fade-in">
          <img src={logo} alt="Solaris Nutri" className="h-16 w-auto mx-auto mb-4 opacity-60 rounded-full" />
          <p className="font-lora text-lg text-primary italic">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
