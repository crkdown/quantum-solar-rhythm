import { Circle, Check, TrendingUp, BookOpen, X, Users, Sparkles, CalendarHeart, MessageCircle, HeartHandshake, GraduationCap, UserRound, ClipboardList, LifeBuoy, Salad, Sun, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import collectiveImg from "@/assets/program-collective.jpg";
import privateImg from "@/assets/program-private.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead from "@/components/SEOHead";

const featureIcons = [CalendarHeart, Sun, MessageCircle, HeartHandshake, GraduationCap];

const Programs = () => {
  const { t, language } = useLanguage();

  const programs = {
    en: [
      {
        icon: Users,
        image: collectiveImg,
        badge: "Solaris Collective",
        duration: "90-Day Group Journey",
        title: "Solaris Collective",
        subtitle: "90-Day Rhythm Nutrition Journey",
        price: "€360",
        period: "/ 3 months",
        description: "A supportive small-group experience where you learn to understand your body through rhythm, nourishment and daily practices — guided through the foundations of the Solaris Nutri Framework while learning alongside others, sharing experiences and creating accountability together.",
        features: [
          "2 live group sessions per month",
          "Weekly rhythm practices and guidance",
          "Private community support",
          "Collective accountability",
          "Nutrition, circadian rhythm, gut–brain connection and lifestyle education"
        ],
        bestForLabel: "Best for",
        bestFor: "People who want guidance, community and structure without the intensity or cost of private coaching.",
        popular: false
      },
      {
        icon: Leaf,
        image: privateImg,
        badge: "Solaris Private",
        duration: "Personalised 90-Day Program",
        title: "Solaris Private",
        subtitle: "Personalised 90-Day Rhythm Nutrition Program",
        price: "€600",
        period: "/ 3 months",
        description: "A deeper, personalised journey designed around your individual rhythms, lifestyle, nutrition and goals. Together we identify where your daily rhythm is out of alignment and build practical changes that work with your biology rather than against it.",
        features: [
          "2 private consultations per month",
          "Personalised Solaris Nutri guidance",
          "Individual rhythm assessment",
          "Ongoing support between sessions",
          "Practical nutrition and lifestyle strategies"
        ],
        bestForLabel: "Best for",
        bestFor: "People who want individual attention, deeper personalisation and direct support.",
        popular: true
      },
    ],
    es: [
      {
        icon: Users,
        image: collectiveImg,
        badge: "Solaris Collective",
        duration: "Viaje Grupal de 90 Días",
        title: "Solaris Collective",
        subtitle: "Viaje de Nutrición Rítmica de 90 Días",
        price: "€360",
        period: "/ 3 meses",
        description: "Una experiencia grupal y cercana donde aprendes a entender tu cuerpo a través del ritmo, la nutrición y las prácticas diarias — guiada por los fundamentos del Marco Solaris Nutri, aprendiendo junto a otras personas, compartiendo experiencias y creando responsabilidad compartida.",
        features: [
          "2 sesiones grupales en vivo al mes",
          "Prácticas y guía de ritmo semanales",
          "Comunidad privada de apoyo",
          "Responsabilidad colectiva",
          "Educación en nutrición, ritmo circadiano, conexión intestino–cerebro y estilo de vida"
        ],
        bestForLabel: "Ideal para",
        bestFor: "Personas que quieren guía, comunidad y estructura sin la intensidad ni el coste del acompañamiento privado.",
        popular: false
      },
      {
        icon: Leaf,
        image: privateImg,
        badge: "Solaris Private",
        duration: "Programa Personalizado de 90 Días",
        title: "Solaris Private",
        subtitle: "Programa Personalizado de Nutrición Rítmica de 90 Días",
        price: "€600",
        period: "/ 3 meses",
        description: "Un viaje más profundo y personalizado, diseñado en torno a tus ritmos, tu estilo de vida, tu nutrición y tus objetivos. Juntas identificamos dónde tu ritmo diario está desalineado y creamos cambios prácticos que trabajan con tu biología, no en su contra.",
        features: [
          "2 consultas privadas al mes",
          "Guía personalizada Solaris Nutri",
          "Evaluación individual de ritmo",
          "Apoyo continuo entre sesiones",
          "Estrategias prácticas de nutrición y estilo de vida"
        ],
        bestForLabel: "Ideal para",
        bestFor: "Personas que quieren atención individual, mayor personalización y apoyo directo.",
        popular: true
      },
    ],
    pt: [
      {
        icon: Users,
        image: collectiveImg,
        badge: "Solaris Collective",
        duration: "Jornada em Grupo de 90 Dias",
        title: "Solaris Collective",
        subtitle: "Jornada de Nutrição Rítmica de 90 Dias",
        price: "€360",
        period: "/ 3 meses",
        description: "Uma experiência em pequeno grupo onde aprendes a compreender o teu corpo através do ritmo, da nutrição e das práticas diárias — guiada pelos fundamentos do Método Solaris Nutri, aprendendo com outras pessoas, partilhando experiências e criando responsabilidade em conjunto.",
        features: [
          "2 sessões de grupo ao vivo por mês",
          "Práticas e orientação de ritmo semanais",
          "Comunidade privada de apoio",
          "Responsabilidade coletiva",
          "Educação em nutrição, ritmo circadiano, conexão intestino–cérebro e estilo de vida"
        ],
        bestForLabel: "Ideal para",
        bestFor: "Pessoas que querem orientação, comunidade e estrutura sem a intensidade ou o custo do acompanhamento privado.",
        popular: false
      },
      {
        icon: Leaf,
        image: privateImg,
        badge: "Solaris Private",
        duration: "Programa Personalizado de 90 Dias",
        title: "Solaris Private",
        subtitle: "Programa Personalizado de Nutrição Rítmica de 90 Dias",
        price: "€600",
        period: "/ 3 meses",
        description: "Uma jornada mais profunda e personalizada, desenhada em torno dos teus ritmos, estilo de vida, nutrição e objetivos. Juntas identificamos onde o teu ritmo diário está desalinhado e construímos mudanças práticas que trabalham com a tua biologia e não contra ela.",
        features: [
          "2 consultas privadas por mês",
          "Orientação personalizada Solaris Nutri",
          "Avaliação individual de ritmo",
          "Apoio contínuo entre sessões",
          "Estratégias práticas de nutrição e estilo de vida"
        ],
        bestForLabel: "Ideal para",
        bestFor: "Pessoas que querem atenção individual, maior personalização e apoio direto.",
        popular: true
      },
    ]
  };

  const startHere = {
    en: {
      title: "Start where you are.",
      collective: "Collective — learn, connect and grow together.",
      private: "Private — go deeper with individual guidance.",
      quote: "The goal isn't to control your body. It is to learn its rhythm."
    },
    es: {
      title: "Empieza donde estás.",
      collective: "Collective — aprende, conecta y crece en comunidad.",
      private: "Private — profundiza con guía individual.",
      quote: "El objetivo no es controlar tu cuerpo. Es aprender su ritmo."
    },
    pt: {
      title: "Começa onde estás.",
      collective: "Collective — aprende, conecta e cresce em conjunto.",
      private: "Private — aprofunda com orientação individual.",
      quote: "O objetivo não é controlar o teu corpo. É aprender o seu ritmo."
    }
  };


  const progressTools = {
    en: [
      { name: "Microbiome Tracker", progress: 60, desc: "Monitor digestive health & gut balance" },
      { name: "Energy Mapping", progress: 90, desc: "Identify peak performance windows" }
    ],
    es: [
      { name: "Rastreador de Microbioma", progress: 60, desc: "Monitorea la salud digestiva y el equilibrio intestinal" },
      { name: "Mapeo de Energía", progress: 90, desc: "Identifica ventanas de rendimiento máximo" }
    ],
    pt: [
      { name: "Rastreador de Microbioma", progress: 60, desc: "Monitore a saúde digestiva e o equilíbrio intestinal" },
      { name: "Mapeamento de Energia", progress: 90, desc: "Identifique janelas de desempenho máximo" }
    ]
  };

  const educationalResources = {
    en: [
      
      "Circadian Nutrition Guide (eBook)",
      "Meal Timing Templates",
      "Seasonal Eating Calendar",
      "Breathwork Audio Sessions",
      "Monthly Live Q&A Access"
    ],
    es: [
      
      "Guía de Nutrición Circadiana (eBook)",
      "Plantillas de Horarios de Comidas",
      "Calendario de Alimentación Estacional",
      "Sesiones de Audio de Respiración",
      "Acceso a Q&A en Vivo Mensual"
    ],
    pt: [
      
      "Guia de Nutrição Circadiana (eBook)",
      "Modelos de Horários de Refeições",
      "Calendário de Alimentação Sazonal",
      "Sessões de Áudio de Respiração",
      "Acesso a Q&A ao Vivo Mensal"
    ]
  };

  const texts = {
    en: {
      progressTitle: "Progress Tracking Tools",
      progressDesc: "Comprehensive tools to monitor your rhythm journey",
      resourcesTitle: "Educational Resources",
      resourcesDesc: "Deep learning materials included with every program"
    },
    es: {
      progressTitle: "Herramientas de Seguimiento",
      progressDesc: "Herramientas completas para monitorear tu viaje rítmico",
      resourcesTitle: "Recursos Educativos",
      resourcesDesc: "Materiales de aprendizaje profundo incluidos con cada programa"
    },
    pt: {
      progressTitle: "Ferramentas de Acompanhamento",
      progressDesc: "Ferramentas abrangentes para monitorar sua jornada rítmica",
      resourcesTitle: "Recursos Educacionais",
      resourcesDesc: "Materiais de aprendizagem profunda incluídos em cada programa"
    }
  };

  const fitContent = {
    en: {
      forTitle: "Who this is for",
      forDesc: "Solaris Nutri helps women in midlife whose metabolism and energy seem to have changed despite trying different diets. I help them understand their biological rhythms and rebuild their nutrition around them.",
      notTitle: "Who this is not for",
      notItems: [
        "You want a quick-fix diet or a rapid weight-loss plan.",
        "You are looking for meal plans to follow without understanding your own biology.",
        "You are not willing to adjust sleep, light exposure and meal timing.",
        "You want supplements or protocols instead of sustainable daily habits.",
        "You are seeking treatment for an acute medical condition rather than nutritional guidance."
      ]
    },
    es: {
      forTitle: "Para quién es",
      forDesc: "Solaris Nutri ayuda a mujeres en la mediana edad cuyo metabolismo y energía parecen haber cambiado a pesar de probar diferentes dietas. Las acompaño a entender sus ritmos biológicos y a reconstruir su nutrición en torno a ellos.",
      notTitle: "Para quién no es",
      notItems: [
        "Buscas una dieta rápida o un plan de pérdida de peso exprés.",
        "Quieres menús para seguir sin entender tu propia biología.",
        "No estás dispuesta a ajustar el sueño, la luz y los horarios de comida.",
        "Prefieres suplementos o protocolos en lugar de hábitos diarios sostenibles.",
        "Buscas tratamiento para una condición médica aguda y no orientación nutricional."
      ]
    },
    pt: {
      forTitle: "Para quem é",
      forDesc: "A Solaris Nutri ajuda mulheres na meia-idade cujo metabolismo e energia parecem ter mudado apesar de terem tentado várias dietas. Ajudo-as a compreender os seus ritmos biológicos e a reconstruir a sua nutrição em torno deles.",
      notTitle: "Para quem não é",
      notItems: [
        "Procuras uma dieta rápida ou um plano de emagrecimento expresso.",
        "Queres ementas para seguir sem compreender a tua própria biologia.",
        "Não estás disponível para ajustar sono, luz e horários das refeições.",
        "Preferes suplementos ou protocolos em vez de hábitos diários sustentáveis.",
        "Procuras tratamento para uma condição médica aguda e não orientação nutricional."
      ]
    }
  };

  const currentPrograms = programs[language] || programs.en;
  const currentTools = progressTools[language] || progressTools.en;
  const currentResources = educationalResources[language] || educationalResources.en;
  const currentTexts = texts[language] || texts.en;
  const currentFit = fitContent[language] || fitContent.en;
  const currentStart = startHere[language] || startHere.en;



  const programsSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Solaris Nutri Rhythm-Based Nutrition Programs",
    serviceType: "Rhythm-based nutrition coaching",
    description:
      "3 and 6-month rhythm-based nutrition journeys rebuilding metabolic balance through circadian alignment, TCM spleen support and whole-food nutrition.",
    url: "https://solarisnutri-com.lovable.app/programs",
    areaServed: ["Worldwide", "Online"],
    provider: {
      "@type": "HealthAndBeautyBusiness",
      name: "Solaris Nutri",
      url: "https://solarisnutri-com.lovable.app",
      email: "qrnutrition4@gmail.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nutrition Programs",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Solaris Collective — 90-Day Group Journey",
          description: "Group 90-day rhythm nutrition journey with twice-monthly live sessions and community support.",
          price: "360",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: "https://solarisnutri-com.lovable.app/programs",
        },
        {
          "@type": "Offer",
          name: "Solaris Private — Personalised 90-Day Program",
          description: "Personalised 90-day rhythm nutrition program with twice-monthly 1:1 sessions.",
          price: "600",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: "https://solarisnutri-com.lovable.app/programs",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen py-24">
      <SEOHead
        title="Nutrition Programs"
        description="Join Solaris Nutri rhythm-based nutrition programs — 3 or 6-month journeys to rebuild your metabolic balance through circadian alignment and holistic nutrition."
        path="/programs"
        image={collectiveImg}
        keywords="nutrition programs, rhythm nutrition course, metabolic balance program, holistic nutrition coaching"
        jsonLd={programsSchema}
      />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Solaris Nutri" className="h-20 w-auto rounded-full" />
          </div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            {t('nav.programs')}
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            {t('programs.title')}
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed mb-4">
            {t('programs.subtitle')}
          </p>
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-sans text-sm">
            <span>🇬🇧</span>
            <span>🇪🇸</span>
            <span>🇵🇹</span>
            <span className="ml-1">{t('programs.available')}</span>
          </div>
        </div>



        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 items-stretch">
          {currentPrograms.map((program, index) => {
            const Icon = program.icon;
            return (
            <Card 
              key={index}
              className={`relative overflow-hidden flex flex-col ${
                program.popular 
                  ? 'border-accent shadow-quantum' 
                  : 'border-border'
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  width={1024}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-primary-foreground">
                  <Icon size={20} />
                  <span className="font-sans text-xs uppercase tracking-[0.2em]">{program.badge}</span>
                </div>
                {program.popular && (
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-sans font-semibold">
                    {t('programs.popular')}
                  </div>
                )}
              </div>

              <CardHeader className="text-center pb-4">
                <CardDescription className="text-sm font-sans uppercase tracking-wide text-muted-foreground mb-2">
                  {program.duration}
                </CardDescription>
                <CardTitle className="font-serif text-3xl text-primary mb-1">
                  {program.title}
                </CardTitle>
                <p className="font-sans text-sm text-foreground/70">{program.subtitle}</p>
                <div className="flex items-end justify-center gap-2 mt-4">
                  <span className="font-serif text-4xl font-bold text-primary">{program.price}</span>
                  <span className="font-sans text-sm text-muted-foreground mb-1">{program.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 flex-1">
                <p className="font-sans text-sm text-foreground/70 text-center leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-3">
                  {program.features.map((feature, featureIndex) => {
                    const FeatureIcon = featureIcons[featureIndex % featureIcons.length];
                    return (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <FeatureIcon size={15} />
                        </span>
                        <span className="font-sans text-sm text-foreground/80 pt-1">
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-lg bg-muted/50 border border-border p-4">
                  <div className="flex items-center gap-2 mb-1 text-accent">
                    <Sparkles size={16} />
                    <span className="font-sans text-xs uppercase tracking-wider font-semibold">{program.bestForLabel}</span>
                  </div>
                  <p className="font-sans text-sm text-foreground/75 leading-relaxed">{program.bestFor}</p>
                </div>
              </CardContent>

              <CardFooter>
                <Link to="/contact" className="w-full">
                  <Button 
                    className={`w-full font-sans font-medium ${
                      program.popular
                        ? 'bg-primary hover:bg-primary/90'
                        : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                    }`}
                  >
                    {t('common.bookNow')}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            );
          })}
        </div>

        {/* Start where you are */}
        <div className="max-w-4xl mx-auto mb-20 text-center bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-xl p-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-accent mb-3">
            <Sparkles size={22} />
          </div>
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">{currentStart.title}</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
            <div className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
              <Users size={20} className="text-accent mt-0.5 flex-shrink-0" />
              <span className="font-sans text-sm text-foreground/80">{currentStart.collective}</span>
            </div>
            <div className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
              <UserRound size={20} className="text-accent mt-0.5 flex-shrink-0" />
              <span className="font-sans text-sm text-foreground/80">{currentStart.private}</span>
            </div>
          </div>
          <p className="font-serif text-xl md:text-2xl text-primary italic mb-6">"{currentStart.quote}"</p>
          <Link to="/contact">
            <Button size="lg" className="font-sans">{t('common.bookNow')}</Button>
          </Link>
        </div>



        {/* Progress Tracking Tools Section */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-accent mb-4">
              <TrendingUp size={24} />
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-3">
              {currentTexts.progressTitle}
            </h2>
            <p className="font-sans text-foreground/70">
              {currentTexts.progressDesc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {currentTools.map((tool, index) => (
              <Card key={index} className="border-border hover:border-accent/50 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg font-semibold text-primary">{tool.name}</h3>
                    <span className="font-sans text-sm text-accent font-medium">{tool.progress}%</span>
                  </div>
                  <Progress value={tool.progress} className="h-2 mb-3" />
                  <p className="font-sans text-sm text-foreground/70">{tool.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Educational Resources Section */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-10 rounded-xl border border-border">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-accent mb-4">
                <BookOpen size={24} />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-3">
                {currentTexts.resourcesTitle}
              </h2>
              <p className="font-sans text-foreground/70">
                {currentTexts.resourcesDesc}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentResources.map((resource, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                  <Check size={18} className="text-accent flex-shrink-0" />
                  <span className="font-sans text-sm text-foreground/80">{resource}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fit Section */}
        <div className="max-w-5xl mx-auto mb-20 grid md:grid-cols-2 gap-6 animate-fade-in">
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-4 text-accent">
              <Check size={22} />
              <h2 className="font-serif text-2xl font-bold text-primary">{currentFit.forTitle}</h2>
            </div>
            <p className="font-sans text-foreground/80 leading-relaxed">{currentFit.forDesc}</p>
          </div>
          <div className="bg-muted/40 border border-border rounded-xl p-8">
            <div className="flex items-center gap-2 mb-4 text-muted-foreground">
              <X size={22} />
              <h2 className="font-serif text-2xl font-bold text-primary">{currentFit.notTitle}</h2>
            </div>
            <ul className="space-y-3">
              {currentFit.notItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X size={16} className="text-muted-foreground mt-1 flex-shrink-0" />
                  <span className="font-sans text-sm text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Not Sure Section */}
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
            {t('programs.notSure')}
          </h3>
          <p className="font-sans text-foreground/80 mb-6">
            {t('programs.notSure.desc')}
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="font-sans">
              {t('programs.discovery')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Programs;
