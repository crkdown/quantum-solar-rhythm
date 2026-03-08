import { Link } from "react-router-dom";
import { ArrowRight, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import sunriseImage from "@/assets/sunrise-nature.png";
import fruitTreesImage from "@/assets/fruit-trees.jpg";
import vegetablesImage from "@/assets/fresh-vegetables.jpg";
import circadianImage from "@/assets/circadian-rhythm.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import GoogleReviews from "@/components/GoogleReviews";

const Home = () => {
  const { t, language } = useLanguage();

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

  const rhythmBlocks = {
    en: {
      quote: "Instead of counting calories or cutting more foods, I help you rebuild your natural rhythm – so your body feels safe, grounded, and ready to change.",
      block1Title: "What is rhythm-based nutrition?",
      block1Text: "Rhythm-based nutrition is a gentle way of eating that focuses on when and how you eat before obsessing over what you eat. We stabilise your daily rhythms – sleep, light, nervous system, meals – so your digestion, hormones and emotions can finally relax. From there, better food choices feel natural, not forced.",
      block2Title: "Why rhythm instead of diet?",
      block2Items: [
        "Diets push your body while it is still in survival mode.",
        "Irregular meals, stress and poor sleep confuse your inner clock.",
        "When your nervous system and spleen are calm, your body stops fighting you."
      ],
      block2Short: "First we calm your system, then food begins to change by itself.",
      block3Title: "What changes in practice?",
      block3Items: [
        "Regular, warm meals instead of random snacking.",
        "Earlier, lighter dinners and better sleep.",
        "Small, loving changes that are easy to repeat every day."
      ]
    },
    es: {
      quote: "En lugar de contar calorías o eliminar más alimentos, te ayudo a reconstruir tu ritmo natural – para que tu cuerpo se sienta seguro, arraigado y listo para cambiar.",
      block1Title: "¿Qué es la nutrición basada en ritmo?",
      block1Text: "La nutrición basada en ritmo es una forma gentil de comer que se enfoca en cuándo y cómo comes antes de obsesionarte con qué comes. Estabilizamos tus ritmos diarios – sueño, luz, sistema nervioso, comidas – para que tu digestión, hormonas y emociones finalmente se relajen. A partir de ahí, mejores elecciones alimentarias se sienten naturales, no forzadas.",
      block2Title: "¿Por qué ritmo en vez de dieta?",
      block2Items: [
        "Las dietas empujan tu cuerpo mientras aún está en modo de supervivencia.",
        "Comidas irregulares, estrés y mal sueño confunden tu reloj interno.",
        "Cuando tu sistema nervioso y bazo están calmados, tu cuerpo deja de luchar contra ti."
      ],
      block2Short: "Primero calmamos tu sistema, luego la comida comienza a cambiar por sí sola.",
      block3Title: "¿Qué cambia en la práctica?",
      block3Items: [
        "Comidas regulares y cálidas en vez de picoteo aleatorio.",
        "Cenas más tempranas y ligeras, y mejor sueño.",
        "Pequeños cambios amorosos que son fáciles de repetir cada día."
      ]
    },
    pt: {
      quote: "Em vez de contar calorias ou cortar mais alimentos, eu ajudo você a reconstruir seu ritmo natural – para que seu corpo se sinta seguro, ancorado e pronto para mudar.",
      block1Title: "O que é nutrição baseada em ritmo?",
      block1Text: "Nutrição baseada em ritmo é uma forma gentil de comer que foca em quando e como você come antes de se obsedar com o que come. Estabilizamos seus ritmos diários – sono, luz, sistema nervoso, refeições – para que sua digestão, hormônios e emoções finalmente relaxem. A partir daí, melhores escolhas alimentares parecem naturais, não forçadas.",
      block2Title: "Por que ritmo em vez de dieta?",
      block2Items: [
        "Dietas forçam seu corpo enquanto ele ainda está em modo de sobrevivência.",
        "Refeições irregulares, estresse e sono ruim confundem seu relógio interno.",
        "Quando seu sistema nervoso e baço estão calmos, seu corpo para de lutar contra você."
      ],
      block2Short: "Primeiro acalmamos seu sistema, depois a comida começa a mudar sozinha.",
      block3Title: "O que muda na prática?",
      block3Items: [
        "Refeições regulares e quentes em vez de lanches aleatórios.",
        "Jantares mais cedo e leves, e melhor sono.",
        "Pequenas mudanças amorosas que são fáceis de repetir todos os dias."
      ]
    }
  };

  const currentRhythm = rhythmBlocks[language] || rhythmBlocks.en;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Sunrise Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${sunriseImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        
        <div className="absolute top-6 right-6 z-20 animate-[fade-in_1s_ease-out_0.3s_both] opacity-0">
          <img 
            src={logo} 
            alt="Solaris Nutri" 
            className="h-12 md:h-14 w-12 md:w-14 logo-circle object-cover shadow-quantum hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 text-white/80 font-sans text-xs tracking-widest uppercase mb-6">
              <Circle size={6} fill="currentColor" className="animate-pulse-slow" />
              {t('home.hero.badge')}
            </div>
            
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-wide drop-shadow-lg">
              {t('home.hero.title1')}
              <span className="block text-amber-100/90 mt-3 font-light">{t('home.hero.title2')}</span>
            </h1>
            
            <p className="font-sans text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed mt-8 drop-shadow">
              {t('home.hero.subtitle')}
            </p>

            <div className="mt-10">
              <Link to="/programs">
                <Button 
                  size="lg" 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-sans font-light px-8 py-5 text-base border border-white/30 transition-all hover:scale-105"
                >
                  {t('home.hero.cta')}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Paula's Quote */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-xl md:text-2xl text-primary leading-relaxed italic">
              &ldquo;{currentRhythm.quote}&rdquo;
            </p>
            <p className="font-sans text-sm text-accent mt-4 font-medium">— Paula Suescun, Solaris Nutri</p>
          </div>
        </div>
      </section>

      {/* Rhythm-Based Nutrition Concept */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Block 1 */}
            <div className="bg-card p-8 rounded-xl border border-border shadow-subtle-glow animate-fade-in-up">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">{currentRhythm.block1Title}</h3>
              <p className="font-sans text-foreground/80 leading-relaxed text-sm">
                {currentRhythm.block1Text}
              </p>
            </div>

            {/* Block 2 */}
            <div className="bg-card p-8 rounded-xl border border-border shadow-subtle-glow animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">{currentRhythm.block2Title}</h3>
              <ul className="space-y-3 mb-4">
                {currentRhythm.block2Items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span className="font-sans text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-sm text-accent font-medium italic">
                &ldquo;{currentRhythm.block2Short}&rdquo;
              </p>
            </div>

            {/* Block 3 */}
            <div className="bg-card p-8 rounded-xl border border-border shadow-subtle-glow animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">{currentRhythm.block3Title}</h3>
              <ul className="space-y-3">
                {currentRhythm.block3Items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span className="font-sans text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-muted/20">
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

      {/* Nature & Rhythm Visual Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-4">
                Quantum Rhythm Nutrition
              </h2>
              <p className="font-sans text-foreground/70 max-w-2xl mx-auto">
                Aligning your biology with natural cycles
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="relative group overflow-hidden rounded-xl shadow-subtle-glow">
                <img src={fruitTreesImage} alt="Fresh fruit trees" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-sans text-sm tracking-wide">Nature&apos;s Timing</span>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-subtle-glow">
                <img src={circadianImage} alt="Circadian rhythm cycle" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-sans text-sm tracking-wide">Your Internal Clock</span>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-subtle-glow">
                <img src={vegetablesImage} alt="Fresh organic vegetables" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-sans text-sm tracking-wide">Wholesome Nutrition</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-card rounded-xl border border-border shadow-subtle-glow">
                <p className="font-serif text-lg text-foreground/90 leading-relaxed italic">
                  &ldquo;Quantum Rhythm Nutrition is not a diet. It is a timing-based system that contributes to energy, digestion, and clarity by aligning your biology with natural cycles.&rdquo;
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border shadow-subtle-glow">
                <p className="font-serif text-lg text-foreground/90 leading-relaxed italic">
                  &ldquo;Most people try to change what they eat. QRN starts with when your system is ready.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-muted/20">
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

      {/* Google Reviews Section */}
      <GoogleReviews />

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
                <Button size="lg" variant="secondary" className="font-sans font-medium px-8">
                  {t('home.cta.programs')}
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="font-sans font-medium px-8">
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
