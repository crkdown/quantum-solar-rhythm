import { Circle, Check, TrendingUp, BookOpen, Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const Programs = () => {
  const { t, language } = useLanguage();

  const programs = {
    en: [
      {
        duration: "3-Month",
        title: "Rhythm Reset",
        price: "€900",
        description: "Stabilize body rhythms, restore energy, and simplify nourishment through circadian alignment.",
        features: [
          "Rhythm calendar & circadian alignment",
          "Gut reset protocol",
          "Weekly/biweekly sessions",
          "WhatsApp support",
          "Personalized rhythm plan",
          "QRN starter toolkit"
        ],
        popular: false
      },
      {
        duration: "6-Month",
        title: "Coherence Deepening",
        price: "€1,800",
        description: "Rebuild metabolic stability and emotional regulation through lunar cycles and seasonal transitions.",
        features: [
          "Everything in 3-Month program",
          "Lunar cycle synchronization",
          "Seasonal transition guidance",
          "Food energetics & microbiome optimization",
          "Advanced craving decoding",
          "Bi-weekly deep-dive sessions",
          "Priority support"
        ],
        popular: true
      },
      {
        duration: "9-Month",
        title: "Full Quantum Rhythm Embodiment",
        price: "€2,700",
        description: "Complete reprogramming of body rhythms with planetary cycle integration and nervous system mastery.",
        features: [
          "Everything in 6-Month program",
          "Planetary rhythm cycle integration",
          "Nervous system & vagus regulation",
          "Weekly 1:1 deep-dive sessions",
          "Complete rhythm intelligence embodiment",
          "Lifetime access to resources",
          "6 months post-program support"
        ],
        popular: false
      }
    ],
    es: [
      {
        duration: "3 Meses",
        title: "Reset de Ritmo",
        price: "€900",
        description: "Estabiliza los ritmos corporales, restaura la energía y simplifica la nutrición a través de la alineación circadiana.",
        features: [
          "Calendario de ritmo y alineación circadiana",
          "Protocolo de reset intestinal",
          "Sesiones semanales/quincenales",
          "Soporte por WhatsApp",
          "Plan de ritmo personalizado",
          "Kit de inicio QRN"
        ],
        popular: false
      },
      {
        duration: "6 Meses",
        title: "Profundización de Coherencia",
        price: "€1,800",
        description: "Reconstruye la estabilidad metabólica y la regulación emocional a través de los ciclos lunares y transiciones estacionales.",
        features: [
          "Todo del programa de 3 meses",
          "Sincronización con el ciclo lunar",
          "Guía de transición estacional",
          "Energética alimentaria y optimización del microbioma",
          "Decodificación avanzada de antojos",
          "Sesiones profundas quincenales",
          "Soporte prioritario"
        ],
        popular: true
      },
      {
        duration: "9 Meses",
        title: "Encarnación Completa del Ritmo Cuántico",
        price: "€2,700",
        description: "Reprogramación completa de los ritmos corporales con integración de ciclos planetarios y dominio del sistema nervioso.",
        features: [
          "Todo del programa de 6 meses",
          "Integración de ciclos rítmicos planetarios",
          "Regulación del sistema nervioso y vagal",
          "Sesiones profundas 1:1 semanales",
          "Encarnación completa de inteligencia rítmica",
          "Acceso de por vida a recursos",
          "6 meses de soporte post-programa"
        ],
        popular: false
      }
    ],
    pt: [
      {
        duration: "3 Meses",
        title: "Reset de Ritmo",
        price: "€900",
        description: "Estabilize os ritmos corporais, restaure a energia e simplifique a nutrição através do alinhamento circadiano.",
        features: [
          "Calendário de ritmo e alinhamento circadiano",
          "Protocolo de reset intestinal",
          "Sessões semanais/quinzenais",
          "Suporte por WhatsApp",
          "Plano de ritmo personalizado",
          "Kit inicial QRN"
        ],
        popular: false
      },
      {
        duration: "6 Meses",
        title: "Aprofundamento de Coerência",
        price: "€1,800",
        description: "Reconstrua a estabilidade metabólica e a regulação emocional através dos ciclos lunares e transições sazonais.",
        features: [
          "Tudo do programa de 3 meses",
          "Sincronização com o ciclo lunar",
          "Orientação de transição sazonal",
          "Energética alimentar e otimização do microbioma",
          "Decodificação avançada de desejos",
          "Sessões profundas quinzenais",
          "Suporte prioritário"
        ],
        popular: true
      },
      {
        duration: "9 Meses",
        title: "Incorporação Completa do Ritmo Quântico",
        price: "€2,700",
        description: "Reprogramação completa dos ritmos corporais com integração de ciclos planetários e domínio do sistema nervoso.",
        features: [
          "Tudo do programa de 6 meses",
          "Integração de ciclos rítmicos planetários",
          "Regulação do sistema nervoso e vagal",
          "Sessões profundas 1:1 semanais",
          "Incorporação completa de inteligência rítmica",
          "Acesso vitalício a recursos",
          "6 meses de suporte pós-programa"
        ],
        popular: false
      }
    ]
  };

  const progressTools = {
    en: [
      { name: "Rhythm Journal", progress: 85, desc: "Daily tracking of energy, meals & sleep patterns" },
      { name: "Circadian Dashboard", progress: 70, desc: "Visual timeline of your body's natural cycles" },
      { name: "Microbiome Tracker", progress: 60, desc: "Monitor digestive health & gut balance" },
      { name: "Energy Mapping", progress: 90, desc: "Identify peak performance windows" }
    ],
    es: [
      { name: "Diario de Ritmo", progress: 85, desc: "Seguimiento diario de energía, comidas y patrones de sueño" },
      { name: "Panel Circadiano", progress: 70, desc: "Línea de tiempo visual de los ciclos naturales de tu cuerpo" },
      { name: "Rastreador de Microbioma", progress: 60, desc: "Monitorea la salud digestiva y el equilibrio intestinal" },
      { name: "Mapeo de Energía", progress: 90, desc: "Identifica ventanas de rendimiento máximo" }
    ],
    pt: [
      { name: "Diário de Ritmo", progress: 85, desc: "Acompanhamento diário de energia, refeições e padrões de sono" },
      { name: "Painel Circadiano", progress: 70, desc: "Linha do tempo visual dos ciclos naturais do seu corpo" },
      { name: "Rastreador de Microbioma", progress: 60, desc: "Monitore a saúde digestiva e o equilíbrio intestinal" },
      { name: "Mapeamento de Energia", progress: 90, desc: "Identifique janelas de desempenho máximo" }
    ]
  };

  const educationalResources = {
    en: [
      "QRN Foundations Video Library",
      "Circadian Nutrition Guide (eBook)",
      "Meal Timing Templates",
      "Seasonal Eating Calendar",
      "Breathwork Audio Sessions",
      "Monthly Live Q&A Access"
    ],
    es: [
      "Biblioteca de Videos Fundamentos QRN",
      "Guía de Nutrición Circadiana (eBook)",
      "Plantillas de Horarios de Comidas",
      "Calendario de Alimentación Estacional",
      "Sesiones de Audio de Respiración",
      "Acceso a Q&A en Vivo Mensual"
    ],
    pt: [
      "Biblioteca de Vídeos Fundamentos QRN",
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
      resourcesDesc: "Deep learning materials included with every program",
      retreatTitle: "2026 Retreat Access",
      retreatDesc: "Join our Earth Rhythm Retreats running April to October 2026 in Northern Portugal",
      retreatCta: "Learn About Retreats"
    },
    es: {
      progressTitle: "Herramientas de Seguimiento",
      progressDesc: "Herramientas completas para monitorear tu viaje rítmico",
      resourcesTitle: "Recursos Educativos",
      resourcesDesc: "Materiales de aprendizaje profundo incluidos con cada programa",
      retreatTitle: "Acceso a Retiros 2026",
      retreatDesc: "Únete a nuestros Retiros Earth Rhythm de abril a octubre 2026 en el norte de Portugal",
      retreatCta: "Conocer los Retiros"
    },
    pt: {
      progressTitle: "Ferramentas de Acompanhamento",
      progressDesc: "Ferramentas abrangentes para monitorar sua jornada rítmica",
      resourcesTitle: "Recursos Educacionais",
      resourcesDesc: "Materiais de aprendizagem profunda incluídos em cada programa",
      retreatTitle: "Acesso a Retiros 2026",
      retreatDesc: "Junte-se aos nossos Retiros Earth Rhythm de abril a outubro de 2026 no norte de Portugal",
      retreatCta: "Conhecer os Retiros"
    }
  };

  const currentPrograms = programs[language] || programs.en;
  const currentTools = progressTools[language] || progressTools.en;
  const currentResources = educationalResources[language] || educationalResources.en;
  const currentTexts = texts[language] || texts.en;

  return (
    <div className="min-h-screen py-24">
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
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {currentPrograms.map((program, index) => (
            <Card 
              key={index}
              className={`relative ${
                program.popular 
                  ? 'border-accent shadow-quantum scale-105' 
                  : 'border-border'
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-sans font-semibold">
                  {t('programs.popular')}
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardDescription className="text-sm font-sans uppercase tracking-wide text-muted-foreground mb-2">
                  {program.duration}
                </CardDescription>
                <CardTitle className="font-serif text-3xl text-primary mb-2">
                  {program.title}
                </CardTitle>
                <div className="font-serif text-4xl font-bold text-primary mt-4">
                  {program.price}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="font-sans text-sm text-foreground/70 text-center leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-sm text-foreground/80">
                        {feature}
                      </span>
                    </div>
                  ))}
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
          ))}
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

        {/* 2026 Retreat Access Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <Card className="border-accent/30 bg-gradient-to-r from-accent/5 to-primary/5 overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                    <Calendar className="text-accent" size={36} />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                    {currentTexts.retreatTitle}
                  </h3>
                  <p className="font-sans text-foreground/70 mb-4">
                    {currentTexts.retreatDesc}
                  </p>
                  <Link to="/earth-rhythm-retreat">
                    <Button variant="outline" className="font-sans group">
                      {currentTexts.retreatCta}
                      <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
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
