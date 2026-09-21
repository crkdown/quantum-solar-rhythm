import { Link } from "react-router-dom";
import { ArrowRight, Circle, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import sunriseImage from "@/assets/sunrise-nature.png";
import lightVideo from "@/assets/light-nutrient-sunrise.mp4.asset.json";
import fruitTreesImage from "@/assets/fruit-trees.jpg";
import vegetablesImage from "@/assets/fresh-vegetables.jpg";
import circadianImage from "@/assets/circadian-rhythm.jpg";
import pitchImage from "@/assets/elevator-sunrise-woman.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import NewsletterSignup from "@/components/NewsletterSignup";
import FreeEbook from "@/components/FreeEbook";

import SEOHead from "@/components/SEOHead";

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
      quote: "Instead of counting calories or cutting out more foods, I help you understand your biology and return to a natural rhythm—so you can make changes that are sustainable, practical, and right for your life.",
      block1Title: "What is rhythm-based nutrition?",
      block1Text: "Rhythm-based nutrition considers not only what you eat, but also when you eat, how you begin your day, how you rest, and how your daily habits interact with your physiology. It explores the relationship between nutrition, meal timing, circadian rhythms, sleep, light exposure, stress, digestion, movement and metabolic wellbeing. The goal is not rigid rules, but a more consistent and supportive environment in which healthier choices become easier to understand, practise and maintain.",
      block2Title: "Why another diet is not the answer",
      block2Items: [
        "Conventional diets focus on restriction, calorie control and short-term compliance.",
        "They may overlook sleep, stress, meal timing, movement, digestion and daily rhythms.",
        "Your body is not a problem to be controlled. It is a biological system to be understood."
      ],
      block2Short: "First we understand your system. Then we create changes that work with it.",
      block3Title: "What changes in practice?",
      block3Items: [
        "More consistency around meals, rest, movement and daily routines.",
        "Practical changes without relying on extreme restriction.",
        "Habits that can be maintained well beyond a short-term diet."
      ]
    },
    es: {
      quote: "En lugar de contar calorías o eliminar más alimentos, te ayudo a comprender tu biología y a volver a un ritmo natural—para que puedas hacer cambios sostenibles, prácticos y adecuados para tu vida.",
      block1Title: "¿Qué es la nutrición basada en ritmo?",
      block1Text: "La nutrición basada en ritmo considera no solo qué comes, sino también cuándo comes, cómo empiezas el día, cómo descansas y cómo tus hábitos diarios interactúan con tu fisiología. Explora la relación entre nutrición, horarios de comida, ritmos circadianos, sueño, exposición a la luz, estrés, digestión, movimiento y bienestar metabólico. El objetivo no son reglas rígidas, sino un entorno más consistente donde las elecciones saludables sean más fáciles de comprender, practicar y mantener.",
      block2Title: "Por qué otra dieta no es la respuesta",
      block2Items: [
        "Las dietas convencionales se centran en la restricción, el control de calorías y el cumplimiento a corto plazo.",
        "Pueden pasar por alto el sueño, el estrés, los horarios de comida, el movimiento, la digestión y los ritmos diarios.",
        "Tu cuerpo no es un problema que controlar. Es un sistema biológico que comprender."
      ],
      block2Short: "Primero comprendemos tu sistema. Luego creamos cambios que trabajan con él.",
      block3Title: "¿Qué cambia en la práctica?",
      block3Items: [
        "Más consistencia en comidas, descanso, movimiento y rutinas diarias.",
        "Cambios prácticos sin depender de la restricción extrema.",
        "Hábitos que se pueden mantener mucho más allá de una dieta corta."
      ]
    },
    pt: {
      quote: "Em vez de contar calorias ou cortar mais alimentos, ajudo-a a compreender a sua biologia e a regressar a um ritmo natural—para que possa fazer mudanças sustentáveis, práticas e certas para a sua vida.",
      block1Title: "O que é nutrição baseada em ritmo?",
      block1Text: "A nutrição baseada em ritmo considera não apenas o que come, mas também quando come, como começa o dia, como descansa e como os seus hábitos diários interagem com a sua fisiologia. Explora a relação entre nutrição, horários das refeições, ritmos circadianos, sono, exposição à luz, stress, digestão, movimento e bem-estar metabólico. O objetivo não são regras rígidas, mas um ambiente mais consistente onde as escolhas saudáveis sejam mais fáceis de compreender, praticar e manter.",
      block2Title: "Porque outra dieta não é a resposta",
      block2Items: [
        "As dietas convencionais focam-se na restrição, no controlo de calorias e no cumprimento a curto prazo.",
        "Podem ignorar o sono, o stress, os horários das refeições, o movimento, a digestão e os ritmos diários.",
        "O seu corpo não é um problema a controlar. É um sistema biológico a compreender."
      ],
      block2Short: "Primeiro compreendemos o seu sistema. Depois criamos mudanças que trabalham com ele.",
      block3Title: "O que muda na prática?",
      block3Items: [
        "Mais consistência nas refeições, descanso, movimento e rotinas diárias.",
        "Mudanças práticas sem depender de restrição extrema.",
        "Hábitos que se podem manter muito para além de uma dieta curta."
      ]
    }
  };

  const currentRhythm = rhythmBlocks[language] || rhythmBlocks.en;

  const lightBlocks = {
    en: {
      badge: "Light as a Nutrient",
      title: "Your first meal of the day is sunrise light",
      text: "Before food, your body is nourished by light. Morning sunlight sets your inner clock, calms your nervous system and prepares your digestion, hormones and mood for the day. Receiving natural light at sunrise is one of the simplest, most powerful rhythms you can return to.",
      points: [
        "Morning light anchors your circadian rhythm.",
        "Sunlight supports energy, sleep and mood.",
        "Aligning with the sun makes nutrition work better."
      ]
    },
    es: {
      badge: "La luz como nutriente",
      title: "Tu primera comida del día es la luz del amanecer",
      text: "Antes del alimento, tu cuerpo se nutre de luz. La luz solar de la mañana ajusta tu reloj interno, calma tu sistema nervioso y prepara tu digestión, hormonas y ánimo para el día. Recibir luz natural, especialmente al amanecer, es uno de los hábitos más poderosos que puedes integrar en tu rutina diaria.",
      points: [
        "La luz matutina ancla tu ritmo circadiano.",
        "El sol favorece energía, sueño y estado de ánimo.",
        "Alinearte con el sol hace que la nutrición funcione mejor."
      ]
    },
    pt: {
      badge: "A luz como nutriente",
      title: "Sua primeira refeição do dia é a luz do amanhecer",
      text: "Antes do alimento, seu corpo é nutrido pela luz. A luz solar da manhã ajusta seu relógio interno, acalma seu sistema nervoso e prepara sua digestão, hormônios e humor para o dia. Receber luz natural ao amanhecer é um dos ritmos mais simples e poderosos a que pode regressar.",
      points: [
        "A luz da manhã ancora seu ritmo circadiano.",
        "O sol favorece energia, sono e humor.",
        "Alinhar-se ao sol faz a nutrição funcionar melhor."
      ]
    }
  };

  const currentLight = lightBlocks[language] || lightBlocks.en;

  const pitchBlocks = {
    en: {
      badge: "Who I Help",
      title: "Solaris Nutri helps midlife women understand their biology and work with their natural rhythms",
      text: "Using nutrition, gut health, meal timing and daily rhythms to create sustainable changes that support metabolic wellbeing.",
      cta: "Book Your Consultation",
      alt: "Woman waking up and looking at the sunrise",
    },
    es: {
      badge: "A quién acompaño",
      title: "Solaris Nutri ayuda a mujeres en la mediana edad a comprender su biología y trabajar con sus ritmos naturales",
      text: "Con nutrición, salud intestinal, horarios de comida y ritmos diarios para crear cambios sostenibles que apoyan el bienestar metabólico.",
      cta: "Reserva Tu Consulta",
      alt: "Mujer despertando y contemplando el amanecer",
    },
    pt: {
      badge: "Quem eu acompanho",
      title: "A Solaris Nutri ajuda mulheres na meia-idade a compreender a sua biologia e a trabalhar com os seus ritmos naturais",
      text: "Com nutrição, saúde intestinal, horários das refeições e ritmos diários para criar mudanças sustentáveis que apoiam o bem-estar metabólico.",
      cta: "Marque a Sua Consulta",
      alt: "Mulher a acordar e a contemplar o nascer do sol",
    },
  };

  const currentPitch = pitchBlocks[language] || pitchBlocks.en;





  return (
    <div className="min-h-screen">
      <SEOHead
        title="Solaris Nutri — Rhythm-Based Nutrition for Metabolic Balance"
        description="Rhythm-based nutrition for midlife energy and metabolic balance. Programs, masterclasses and 1:1 coaching with Paula Suescun."
        path="/"
        keywords="rhythm nutrition, circadian rhythm diet, metabolic balance, holistic nutrition, chronobiology, TCM spleen, anthroposophic nutrition, Paula Suescun"
      />
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

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-amber-100 hover:bg-amber-50 text-primary font-sans font-medium px-8 py-5 text-base transition-all hover:scale-105 shadow-quantum"
                >
                  Book a Free Assessment Call
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/programs">
                <Button 
                  size="lg" 
                  className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-sans font-light px-8 py-5 text-base border border-white/30 transition-all hover:scale-105"
                >
                  {t('home.hero.cta')}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <a href="#light" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors animate-bounce">
          <Circle size={28} className="opacity-60" />
        </a>

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

      {/* Elevator Pitch */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-quantum animate-fade-in order-last lg:order-first">
              <img
                src={pitchImage}
                alt={currentPitch.alt}
                loading="lazy"
                width={1536}
                height={1024}
                className="w-full h-full object-cover aspect-[3/2]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 text-accent font-sans text-xs tracking-widest uppercase mb-5">
                <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
                {currentPitch.badge}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-tight mb-6">
                {currentPitch.title}
              </h2>
              <p className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
                {currentPitch.text}
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-sans">
                  {currentPitch.cta}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Light as a Nutrient - Video Section */}
      <section id="light" className="py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 text-accent font-sans text-xs tracking-widest uppercase mb-5">
                <Sun size={16} className="animate-pulse-slow" />
                {currentLight.badge}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-tight mb-6">
                {currentLight.title}
              </h2>
              <p className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
                {currentLight.text}
              </p>
              <ul className="space-y-3">
                {currentLight.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Sun size={18} className="text-accent mt-1 flex-shrink-0" />
                    <span className="font-sans text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-quantum animate-fade-in group">
              <video
                src={lightVideo.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-amber-100/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>



      {/* Rhythm-Based Nutrition Concept */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Block 1 */}
            <div className="bg-card p-8 rounded-xl border border-border shadow-subtle-glow animate-fade-in-up">
              <h2 className="font-serif text-xl font-semibold text-primary mb-4">{currentRhythm.block1Title}</h2>
              <p className="font-sans text-foreground/80 leading-relaxed text-sm">
                {currentRhythm.block1Text}
              </p>
            </div>

            {/* Block 2 */}
            <div className="bg-card p-8 rounded-xl border border-border shadow-subtle-glow animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h2 className="font-serif text-xl font-semibold text-primary mb-4">{currentRhythm.block2Title}</h2>
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
              <h2 className="font-serif text-xl font-semibold text-primary mb-4">{currentRhythm.block3Title}</h2>
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
                Solaris Nutri Framework
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
                  &ldquo;Solaris Nutri Framework is not a diet. It is a timing-based system that contributes to energy, digestion, and clarity by aligning your biology with natural cycles.&rdquo;
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border shadow-subtle-glow">
                <p className="font-serif text-lg text-foreground/90 leading-relaxed italic">
                  &ldquo;Most people try to change what they eat. The framework starts with when your system is ready.&rdquo;
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
      {/* Free e-book for Instagram followers */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <FreeEbook />
        </div>
      </section>

      {/* Newsletter lead magnet */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <NewsletterSignup source="home" />
        </div>
      </section>


    </div>
  );
};

export default Home;
