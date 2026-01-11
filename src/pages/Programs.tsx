import { Circle, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const Programs = () => {
  const { t, language } = useLanguage();

  const programs = {
    en: [
      {
        duration: "3-Month",
        title: "Rhythm Reset",
        price: "€700 – €900",
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
        price: "€1,600 – €1,800",
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
        price: "€2,500 – €2,700",
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
        price: "€700 – €900",
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
        price: "€1,600 – €1,800",
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
        price: "€2,500 – €2,700",
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
        price: "€700 – €900",
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
        price: "€1,600 – €1,800",
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
        price: "€2,500 – €2,700",
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

  const allIncluded = {
    en: [
      "Comprehensive rhythm assessment",
      "Personalized QRN protocols",
      "Circadian eating window optimization",
      "Light exposure guidance",
      "Progress tracking tools",
      "Educational resources",
      "Ongoing email support",
      "Access to Solaris community"
    ],
    es: [
      "Evaluación integral de ritmo",
      "Protocolos QRN personalizados",
      "Optimización de ventana alimenticia circadiana",
      "Guía de exposición a la luz",
      "Herramientas de seguimiento de progreso",
      "Recursos educativos",
      "Soporte continuo por email",
      "Acceso a la comunidad Solaris"
    ],
    pt: [
      "Avaliação abrangente de ritmo",
      "Protocolos QRN personalizados",
      "Otimização de janela alimentar circadiana",
      "Orientação de exposição à luz",
      "Ferramentas de acompanhamento de progresso",
      "Recursos educacionais",
      "Suporte contínuo por email",
      "Acesso à comunidade Solaris"
    ]
  };

  const currentPrograms = programs[language] || programs.en;
  const currentIncluded = allIncluded[language] || allIncluded.en;

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

        {/* What's Included */}
        <div className="max-w-4xl mx-auto bg-muted/30 p-12 rounded-lg border border-border animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-8">
            {t('programs.allInclude')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {currentIncluded.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                <span className="font-sans text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Not Sure Section */}
        <div className="max-w-3xl mx-auto mt-16 text-center animate-fade-in">
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
