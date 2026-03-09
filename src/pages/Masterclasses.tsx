import { Circle, Calendar, Clock, Video, CheckCircle, Users, AlertCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import circadianMasterclass from "@/assets/circadian-masterclass.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Masterclasses = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      badge: "FREE LIVE ONLINE MASTERCLASS",
      title: "Alignment with Your Internal Clock",
      subtitle: "Digestive health, nutrition, and rhythm — explained simply",
      tagline: "\"I eat well, but I feel bad\"",
      intro: "It's responding to the rhythm you give it.",
      description: "Modern nutrition focuses on rules, restriction, and control. But the body works through timing, safety, and cycles.",
      mainText: "In this live masterclass you'll learn how your internal clock, digestion, and gut microbiota are deeply connected, and how small, practical adjustments can contribute to balance without overwhelm.",
      learnTitle: "What you'll learn",
      learnItems: [
        "What the circadian rhythm is and why it's key to digestion and energy",
        "How nutrients support the body beyond calories",
        "Why gut health is about environment, not 'fixing problems'",
        "How stress and timing affect your microbiota",
        "Simple ways to introduce probiotics and prebiotics through food",
        "Where to start if you want progress without drastic changes"
      ],
      audienceTitle: "Who is this Masterclass for?",
      audienceItems: [
        "Wellness-curious people new to nutrition science",
        "Anyone experiencing bloating, fatigue, or digestive discomfort",
        "People tired of complicated protocols",
        "Those seeking a calm, sustainable approach to health"
      ],
      whyDifferent: "Why this masterclass is different",
      whyDifferentText: "You won't be given long supplement lists or rigid plans. You'll gain clarity, awareness, and a rhythm-based foundation you can build on.",
      bridgeText: "This masterclass is the first step into a deeper program and digital resources designed to support long-term coherence and digestive health.",
      date: "April 25, 2026",
      time: "10:30 a.m. (Colombia)",
      format: "Live on Zoom | Recording included",
      registerBtn: "Reserve your place here",
      limitedSpaces: "Limited spaces available — FREE masterclass",
      instructor: "Paula Suescun",
      instructorRole: "Nutritionist-Dietitian – National University of Colombia",
      instructorDesc: "Health Coach · Founder of Solaris Nutri · Creator of the Quantum Rhythm Nutrition (QRN) framework",
      whatsappCta: "Join our WhatsApp community",
    },
    es: {
      badge: "MASTERCLASS ONLINE EN VIVO — GRATUITA",
      title: "Alineación con tu Reloj Interno",
      subtitle: "Salud digestiva, nutrición y ritmo — explicados de forma simple",
      tagline: "\"Como bien, pero me siento mal\"",
      intro: "Está respondiendo al ritmo que le das.",
      description: "La nutrición moderna se enfoca en reglas, restricción y control. Pero el cuerpo funciona a través del tiempo, la seguridad y los ciclos.",
      mainText: "En esta masterclass en vivo aprenderás cómo tu reloj interno, la digestión y la microbiota intestinal están profundamente conectados, y cómo pequeños ajustes prácticos pueden devolver el equilibrio sin generar sobrecarga.",
      learnTitle: "Lo que aprenderás",
      learnItems: [
        "Qué es el ritmo circadiano y por qué es clave para la digestión y la energía",
        "Cómo los nutrientes apoyan al cuerpo más allá de las calorías",
        "Por qué la salud intestinal tiene que ver con el entorno, no con \"arreglar problemas\"",
        "Cómo el estrés y el tiempo afectan a tu microbiota",
        "Formas simples de introducir probióticos y prebióticos a través de los alimentos",
        "Por dónde empezar si quieres avanzar sin cambios drásticos"
      ],
      audienceTitle: "¿Para quién es esta masterclass?",
      audienceItems: [
        "Personas curiosas por el bienestar, nuevas en la ciencia de la nutrición",
        "Quienes experimentan hinchazón, fatiga o malestar digestivo",
        "Personas cansadas de protocolos complicados",
        "Quienes buscan un enfoque calmado y sostenible de la salud"
      ],
      whyDifferent: "Por qué esta masterclass es diferente",
      whyDifferentText: "No recibirás largas listas de suplementos ni planes rígidos. Obtendrás claridad, consciencia y una base rítmica sobre la cual construir.",
      bridgeText: "Esta masterclass es el primer paso hacia un programa más profundo y recursos digitales diseñados para apoyar la coherencia digestiva y la salud a largo plazo.",
      date: "25 de abril, 2026",
      time: "10:30 a. m. (Colombia)",
      format: "En vivo por Zoom | Grabación incluida",
      registerBtn: "Reserva tu lugar aquí",
      limitedSpaces: "Cupos limitados — Masterclass GRATUITA",
      instructor: "Paula Suescun",
      instructorRole: "Nutricionista-Dietista – Universidad Nacional de Colombia",
      instructorDesc: "Health Coach · Fundadora de Solaris Nutri · Creadora del framework Quantum Rhythm Nutrition (QRN)",
      whatsappCta: "Únete a nuestra comunidad de WhatsApp",
    },
    pt: {
      badge: "MASTERCLASS ONLINE AO VIVO — GRATUITA",
      title: "Alinhamento com seu Relógio Interno",
      subtitle: "Saúde digestiva, nutrição e ritmo — explicados de forma simples",
      tagline: "\"Como bem, mas me sinto mal\"",
      intro: "Está respondendo ao ritmo que você dá a ele.",
      description: "A nutrição moderna foca em regras, restrição e controle. Mas o corpo funciona através do tempo, segurança e ciclos.",
      mainText: "Nesta masterclass ao vivo você aprenderá como seu relógio interno, digestão e microbiota intestinal estão profundamente conectados, e como pequenos ajustes práticos podem contribuir para o equilíbrio sem sobrecarregar.",
      learnTitle: "O que você aprenderá",
      learnItems: [
        "O que é o ritmo circadiano e por que é fundamental para digestão e energia",
        "Como os nutrientes apoiam o corpo além das calorias",
        "Por que a saúde intestinal é sobre ambiente, não sobre \"consertar problemas\"",
        "Como o estresse e o tempo afetam sua microbiota",
        "Formas simples de introduzir probióticos e prebióticos através dos alimentos",
        "Por onde começar se você quer progredir sem mudanças drásticas"
      ],
      audienceTitle: "Para quem é esta masterclass?",
      audienceItems: [
        "Pessoas curiosas por bem-estar, novas na ciência da nutrição",
        "Quem experimenta inchaço, fadiga ou desconforto digestivo",
        "Pessoas cansadas de protocolos complicados",
        "Quem busca uma abordagem calma e sustentável para a saúde"
      ],
      whyDifferent: "Por que esta masterclass é diferente",
      whyDifferentText: "Você não receberá longas listas de suplementos ou planos rígidos. Você ganhará clareza, consciência e uma base rítmica sobre a qual construir.",
      bridgeText: "Esta masterclass é o primeiro passo para um programa mais profundo e recursos digitais projetados para apoiar a coerência digestiva e a saúde a longo prazo.",
      date: "25 de abril, 2026",
      time: "10:30 a.m. (Colômbia)",
      format: "Ao vivo via Zoom | Gravação incluída",
      registerBtn: "Reserve seu lugar aqui",
      limitedSpaces: "Vagas limitadas — Masterclass GRATUITA",
      instructor: "Paula Suescun",
      instructorRole: "Nutricionista-Dietista – Universidade Nacional da Colômbia",
      instructorDesc: "Health Coach · Fundadora da Solaris Nutri · Criadora do framework Quantum Rhythm Nutrition (QRN)",
      whatsappCta: "Junte-se à nossa comunidade WhatsApp",
    }
  };

  const currentTexts = texts[language] || texts.en;

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="Solaris Nutri" 
              className="h-20 w-20 logo-circle object-cover"
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-sans font-medium mb-6">
            <Video size={16} />
            {currentTexts.badge}
          </div>
        </div>

        {/* Main Masterclass Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
            <CardHeader className="text-center pb-4">
              <CardTitle className="font-serif text-4xl md:text-5xl text-primary mb-4">
                {currentTexts.title}
              </CardTitle>
              <CardDescription className="text-lg text-foreground/80 font-sans">
                {currentTexts.subtitle}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8 px-6 md:px-10">
              {/* Tagline */}
              <div className="text-center py-6 border-y border-border">
                <p className="font-serif text-2xl text-primary italic mb-2">
                  {currentTexts.tagline}
                </p>
                <p className="font-sans text-foreground/80">
                  {currentTexts.intro}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="font-sans text-foreground/80 leading-relaxed">
                  {currentTexts.description}
                </p>
                <p className="font-sans text-foreground/80 leading-relaxed">
                  {currentTexts.mainText}
                </p>
              </div>

              {/* Event Details */}
              <div className="flex flex-wrap justify-center gap-6 py-6 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2 text-foreground">
                  <Calendar className="text-primary" size={20} />
                  <span className="font-sans font-medium">📅 {currentTexts.date}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="text-primary" size={20} />
                  <span className="font-sans font-medium">⏰ {currentTexts.time}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Video className="text-primary" size={20} />
                  <span className="font-sans font-medium">💻 {currentTexts.format}</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-4">
                  <img 
                    src={logo} 
                    alt="Paula Suescun" 
                    className="h-16 w-16 logo-circle object-cover"
                  />
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-primary">{currentTexts.instructor}</h3>
                    <p className="font-sans text-sm text-foreground/70">
                      {currentTexts.instructorRole}<br />
                      {currentTexts.instructorDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* QRN Framework Image */}
              <div className="flex justify-center py-6">
                <img 
                  src={qrnFramework} 
                  alt="Quantum Rhythm Nutrition Framework" 
                  className="max-w-full md:max-w-3xl rounded-lg shadow-quantum"
                />
              </div>

              {/* What you'll learn */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-primary">{currentTexts.learnTitle}</h3>
                <ul className="space-y-3">
                  {currentTexts.learnItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span className="font-sans text-foreground/80">• {item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Audience */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-primary">{currentTexts.audienceTitle}</h3>
                <ul className="space-y-3">
                  {currentTexts.audienceItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Users className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span className="font-sans text-foreground/80">• {item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Different */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-primary">{currentTexts.whyDifferent}</h3>
                <p className="font-sans text-foreground/80 leading-relaxed">
                  {currentTexts.whyDifferentText}
                </p>
                <p className="font-sans text-foreground/80 leading-relaxed">
                  {currentTexts.bridgeText}
                </p>
              </div>

              {/* Limited Spaces Alert */}
              <div className="flex items-center justify-center gap-2 p-4 bg-accent/10 rounded-lg border border-accent/30">
                <AlertCircle className="text-accent" size={20} />
                <span className="font-sans font-medium text-accent">{currentTexts.limitedSpaces}</span>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-4 pb-10 pt-6 px-6 md:px-10">
              <a 
                href="https://forms.gle/masterclass-registro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full max-w-md mx-auto"
              >
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium py-6 text-lg shadow-quantum transition-all hover:scale-105"
                >
                  👉 {currentTexts.registerBtn}
                </Button>
              </a>

              {/* WhatsApp Community Link */}
              <a 
                href="https://chat.whatsapp.com/YOUR_GROUP_LINK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full max-w-md mx-auto"
              >
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full border-green-500 text-green-700 hover:bg-green-50 font-sans font-medium py-5 text-base transition-all"
                >
                  <MessageCircle size={20} className="mr-2" />
                  {currentTexts.whatsappCta}
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Masterclasses;
