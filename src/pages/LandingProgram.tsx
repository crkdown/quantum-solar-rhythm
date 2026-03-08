import { Circle, Check, ArrowRight, Heart, Shield, Leaf, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import paulaPhoto from "@/assets/paula-photo.jpeg";
import wholesomeFood from "@/assets/wholesome-food.jpg";
import nourishingBowl from "@/assets/nourishing-bowl.jpg";
import sunriseNature from "@/assets/sunrise-nature.png";
import { useLanguage } from "@/contexts/LanguageContext";

const LandingProgram = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      badge: "RHYTHM-BASED NUTRITION PROGRAMS",
      title: "Rebuild Your Natural Rhythm",
      subtitle: "Instead of counting calories or cutting more foods, we help you rebuild your natural rhythm – so your body feels safe, grounded, and ready to change.",
      quote: "I don't put you on another diet. I guide you into a new rhythm.",
      quoteAuthor: "Paula Suescun · Nutritionist & QRN Creator",
      howTitle: "How It Works",
      steps: [
        { icon: "heart", title: "Decode — See Your Rhythm", desc: "We observe your sleep, meals, stress, and emotions with compassion. We understand how your spleen and nervous system are living in survival mode — and we name your patterns with love, not shame." },
        { icon: "shield", title: "Reprogram — Calm Your System", desc: "Like retuning an instrument, we gently guide your nervous system from survival into safety. Small, rhythmic rituals — warm meals, breath, light, sleep — replace stress-driven habits." },
        { icon: "leaf", title: "Rebuild — Grow a New Way", desc: "We build the home your body always needed. New food habits grow naturally from consciousness, care, and love — creating a long-term relationship with food that feels natural and sustainable." },
      ],
      whyTitle: "Why Rhythm Instead of Diet?",
      whyItems: [
        "Diets push your body while it is still in survival mode",
        "Irregular meals, stress and poor sleep confuse your inner clock",
        "When your nervous system and spleen are calm, your body stops fighting you",
        "First we calm your system, then food begins to change by itself"
      ],
      whatChanges: "What Changes in Practice?",
      practiceItems: [
        "Regular, warm meals instead of random snacking",
        "Earlier, lighter dinners and better sleep",
        "Small, loving changes that are easy to repeat every day"
      ],
      includesTitle: "Every Program Includes",
      includes: [
        "Personalized rhythm plan",
        "Weekly/biweekly 1:1 sessions",
        "WhatsApp support",
        "QRN digital resources & tools",
        "Circadian alignment guidance",
        "Gut reset protocol"
      ],
      ctaTitle: "Ready to Begin?",
      ctaDesc: "Book a free discovery call to find the right program for you.",
      ctaBtn: "Book Your Free Discovery Call",
      whatsappCta: "Join our WhatsApp community",
      slidingScale: "Sliding scale pricing available",
    },
    es: {
      badge: "PROGRAMAS DE NUTRICIÓN BASADA EN RITMO",
      title: "Reconstruye Tu Ritmo Natural",
      subtitle: "En lugar de contar calorías o eliminar más alimentos, te ayudamos a reconstruir tu ritmo natural — para que tu cuerpo se sienta seguro, enraizado y listo para cambiar.",
      quote: "No te pongo otra dieta. Te guío hacia un nuevo ritmo.",
      quoteAuthor: "Paula Suescun · Nutricionista y Creadora de QRN",
      howTitle: "Cómo Funciona",
      steps: [
        { icon: "heart", title: "Decodificar — Observa Tu Ritmo", desc: "Observamos tu sueño, comidas, estrés y emociones con compasión. Entendemos cómo tu bazo y sistema nervioso viven en modo supervivencia — y nombramos tus patrones con amor, no con vergüenza." },
        { icon: "shield", title: "Reprogramar — Calma Tu Sistema", desc: "Como resintonizar un instrumento, guiamos suavemente tu sistema nervioso de la supervivencia a la seguridad. Pequeños rituales rítmicos — comidas cálidas, respiración, luz, sueño — reemplazan los hábitos de estrés." },
        { icon: "leaf", title: "Reconstruir — Cultiva un Nuevo Camino", desc: "Construimos el hogar que tu cuerpo siempre necesitó. Los nuevos hábitos alimentarios crecen naturalmente desde la consciencia, el cuidado y el amor — creando una relación con la comida que se siente natural y sostenible." },
      ],
      whyTitle: "¿Por Qué Ritmo en Vez de Dieta?",
      whyItems: [
        "Las dietas fuerzan tu cuerpo mientras aún está en modo supervivencia",
        "Comidas irregulares, estrés y mal sueño confunden tu reloj interno",
        "Cuando tu sistema nervioso y bazo están calmados, tu cuerpo deja de luchar contigo",
        "Primero calmamos tu sistema, luego la comida comienza a cambiar sola"
      ],
      whatChanges: "¿Qué Cambia en la Práctica?",
      practiceItems: [
        "Comidas regulares y cálidas en lugar de picoteo aleatorio",
        "Cenas más tempranas, más ligeras y mejor sueño",
        "Pequeños cambios amorosos que son fáciles de repetir cada día"
      ],
      includesTitle: "Cada Programa Incluye",
      includes: [
        "Plan de ritmo personalizado",
        "Sesiones 1:1 semanales/quincenales",
        "Soporte por WhatsApp",
        "Recursos y herramientas digitales QRN",
        "Guía de alineación circadiana",
        "Protocolo de reset intestinal"
      ],
      ctaTitle: "¿Lista para Comenzar?",
      ctaDesc: "Reserva una llamada de descubrimiento gratuita para encontrar el programa adecuado para ti.",
      ctaBtn: "Reserva Tu Llamada Gratuita",
      whatsappCta: "Únete a nuestra comunidad de WhatsApp",
      slidingScale: "Precios con escala deslizante disponibles",
    },
    pt: {
      badge: "PROGRAMAS DE NUTRIÇÃO BASEADA EM RITMO",
      title: "Reconstrua Seu Ritmo Natural",
      subtitle: "Em vez de contar calorias ou cortar mais alimentos, ajudamos você a reconstruir seu ritmo natural — para que seu corpo se sinta seguro, enraizado e pronto para mudar.",
      quote: "Eu não te coloco em outra dieta. Eu te guio para um novo ritmo.",
      quoteAuthor: "Paula Suescun · Nutricionista e Criadora de QRN",
      howTitle: "Como Funciona",
      steps: [
        { icon: "heart", title: "Decodificar — Veja Seu Ritmo", desc: "Observamos seu sono, refeições, estresse e emoções com compaixão. Entendemos como seu baço e sistema nervoso vivem em modo de sobrevivência — e nomeamos seus padrões com amor, não com vergonha." },
        { icon: "shield", title: "Reprogramar — Acalme Seu Sistema", desc: "Como resintonizar um instrumento, guiamos suavemente seu sistema nervoso da sobrevivência para a segurança. Pequenos rituais rítmicos — refeições quentes, respiração, luz, sono — substituem hábitos de estresse." },
        { icon: "leaf", title: "Reconstruir — Cultive um Novo Caminho", desc: "Construímos o lar que seu corpo sempre precisou. Novos hábitos alimentares crescem naturalmente da consciência, cuidado e amor — criando uma relação com a comida que se sente natural e sustentável." },
      ],
      whyTitle: "Por Que Ritmo em Vez de Dieta?",
      whyItems: [
        "Dietas forçam seu corpo enquanto ele ainda está em modo de sobrevivência",
        "Refeições irregulares, estresse e sono ruim confundem seu relógio interno",
        "Quando seu sistema nervoso e baço estão calmos, seu corpo para de lutar contra você",
        "Primeiro acalmamos seu sistema, depois a comida começa a mudar sozinha"
      ],
      whatChanges: "O Que Muda na Prática?",
      practiceItems: [
        "Refeições regulares e quentes em vez de lanches aleatórios",
        "Jantares mais cedo, mais leves e melhor sono",
        "Pequenas mudanças amorosas que são fáceis de repetir todos os dias"
      ],
      includesTitle: "Cada Programa Inclui",
      includes: [
        "Plano de ritmo personalizado",
        "Sessões 1:1 semanais/quinzenais",
        "Suporte por WhatsApp",
        "Recursos e ferramentas digitais QRN",
        "Orientação de alinhamento circadiano",
        "Protocolo de reset intestinal"
      ],
      ctaTitle: "Pronta para Começar?",
      ctaDesc: "Agende uma chamada de descoberta gratuita para encontrar o programa certo para você.",
      ctaBtn: "Agende Sua Chamada Gratuita",
      whatsappCta: "Junte-se à nossa comunidade WhatsApp",
      slidingScale: "Preços com escala deslizante disponíveis",
    }
  };

  const t = texts[language] || texts.en;

  const programs = {
    en: [
      { duration: "3 Months", title: "Rhythm Reset", price: "€700–€900", desc: "Stabilize body rhythms, contribute to energy, simplify nourishment." },
      { duration: "6 Months", title: "Coherence Deepening", price: "€1,600–€1,800", desc: "Rebuild metabolic stability through lunar cycles and seasonal transitions.", popular: true },
      { duration: "9 Months", title: "Full Quantum Rhythm Embodiment", price: "€2,500–€2,700", desc: "Complete reprogramming with planetary rhythms and nervous system mastery." },
    ],
    es: [
      { duration: "3 Meses", title: "Reset de Ritmo", price: "€700–€900", desc: "Estabiliza los ritmos corporales, contribuye a la energía, simplifica la nutrición." },
      { duration: "6 Meses", title: "Profundización de Coherencia", price: "€1,600–€1,800", desc: "Reconstruye la estabilidad metabólica a través de ciclos lunares y transiciones estacionales.", popular: true },
      { duration: "9 Meses", title: "Encarnación Completa del Ritmo Cuántico", price: "€2,500–€2,700", desc: "Reprogramación completa con ritmos planetarios y dominio del sistema nervioso." },
    ],
    pt: [
      { duration: "3 Meses", title: "Reset de Ritmo", price: "€700–€900", desc: "Estabilize os ritmos corporais, contribua para a energia, simplifique a nutrição." },
      { duration: "6 Meses", title: "Aprofundamento de Coerência", price: "€1,600–€1,800", desc: "Reconstrua a estabilidade metabólica através de ciclos lunares e transições sazonais.", popular: true },
      { duration: "9 Meses", title: "Incorporação Completa do Ritmo Quântico", price: "€2,500–€2,700", desc: "Reprogramação completa com ritmos planetários e domínio do sistema nervoso." },
    ]
  };

  const currentPrograms = programs[language] || programs.en;

  const StepIcon = ({ icon }: { icon: string }) => {
    if (icon === "heart") return <Heart className="text-accent" size={28} />;
    if (icon === "shield") return <Shield className="text-accent" size={28} />;
    return <Leaf className="text-accent" size={28} />;
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/8 via-background to-accent/8">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Solaris Nutri" className="h-16 w-16 rounded-full shadow-lg" />
          </div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-xs tracking-widest uppercase mb-6">
            <Circle size={6} fill="currentColor" />
            {t.badge}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">{t.title}</h1>
          <p className="font-sans text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">{t.subtitle}</p>
          <a href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold py-6 px-10 text-lg shadow-quantum transition-all hover:scale-105">
              {t.ctaBtn} <ArrowRight size={20} className="ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Paula Quote */}
      <section className="py-12 bg-accent/5 border-y border-accent/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={paulaPhoto} alt="Paula Suescun" className="w-20 h-20 rounded-full object-cover border-2 border-accent/30 flex-shrink-0" />
            <div className="text-center md:text-left">
              <blockquote className="font-serif text-xl text-primary/90 italic leading-relaxed mb-2">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="font-sans text-sm text-foreground/60">{t.quoteAuthor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nature Image */}
      <section className="py-0">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-4 -mt-0 my-12">
            <div className="relative rounded-xl overflow-hidden shadow-subtle-glow">
              <img src={wholesomeFood} alt="Wholesome food" className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-subtle-glow">
              <img src={sunriseNature} alt="Nature and sunrise" className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">{t.howTitle}</h2>
          <div className="space-y-8">
            {t.steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start bg-card p-6 md:p-8 rounded-xl border border-border shadow-sm">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <StepIcon icon={step.icon} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-serif text-2xl font-bold text-accent/40">0{index + 1}</span>
                    <h3 className="font-serif text-xl font-semibold text-primary">{step.title}</h3>
                  </div>
                  <p className="font-sans text-foreground/80 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rhythm */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-10">{t.whyTitle}</h2>
          <div className="space-y-3">
            {t.whyItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg border border-accent/15">
                <Circle size={8} fill="currentColor" className="text-accent mt-1.5 flex-shrink-0" />
                <span className="font-sans text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Changes */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-serif text-2xl font-bold text-primary mb-8">{t.whatChanges}</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {t.practiceItems.map((item, index) => (
              <div key={index} className="bg-card p-5 rounded-lg border border-border text-center">
                <p className="font-sans text-sm text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nourishing bowl image */}
      <section className="py-0">
        <div className="container mx-auto px-6 max-w-4xl my-12">
          <div className="relative rounded-xl overflow-hidden shadow-subtle-glow">
            <img src={nourishingBowl} alt="Nourishing bowl" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {currentPrograms.map((program, index) => (
              <Card
                key={index}
                className={`relative text-center ${program.popular ? 'border-accent shadow-quantum scale-105' : 'border-border'}`}
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-sans font-semibold">
                    <Star size={12} className="inline mr-1" />
                    {language === 'es' ? 'Más Popular' : language === 'pt' ? 'Mais Popular' : 'Most Popular'}
                  </div>
                )}
                <CardHeader className="pb-2">
                  <p className="text-xs font-sans uppercase tracking-wide text-muted-foreground mb-1">{program.duration}</p>
                  <CardTitle className="font-serif text-2xl text-primary">{program.title}</CardTitle>
                  <p className="font-serif text-3xl font-bold text-primary mt-3">{program.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">{program.desc}</p>
                </CardContent>
                <CardFooter>
                  <a href="/contact" className="w-full">
                    <Button className={`w-full font-sans ${program.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'}`}>
                      {t.ctaBtn}
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
          <p className="text-center font-sans text-sm text-foreground/60 mt-6">{t.slidingScale}</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-10">{t.includesTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {t.includes.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                <Check size={18} className="text-accent flex-shrink-0" />
                <span className="font-sans text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">{t.ctaTitle}</h2>
          <p className="font-sans text-foreground/70 mb-8">{t.ctaDesc}</p>

          <a href="/contact" className="block mb-4">
            <Button size="lg" className="w-full max-w-sm mx-auto bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold py-6 text-lg shadow-quantum transition-all hover:scale-105">
              {t.ctaBtn} <ArrowRight size={20} className="ml-2" />
            </Button>
          </a>

          <a href="https://chat.whatsapp.com/YOUR_GROUP_LINK" target="_blank" rel="noopener noreferrer" className="block">
            <Button variant="outline" size="lg" className="w-full max-w-sm mx-auto border-green-500 text-green-700 hover:bg-green-50 font-sans font-medium py-5">
              <MessageCircle size={18} className="mr-2" />
              {t.whatsappCta}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingProgram;
