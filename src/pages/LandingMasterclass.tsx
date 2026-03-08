import { Circle, Calendar, Clock, Video, CheckCircle, Users, AlertCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import paulaPhoto from "@/assets/paula-photo.jpeg";
import circadianRhythm from "@/assets/circadian-rhythm.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const LandingMasterclass = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      badge: "FREE LIVE MASTERCLASS",
      title: "Alignment with Your Internal Clock",
      subtitle: "Digestive health, nutrition, and rhythm — explained simply",
      tagline: "\"I eat well, but I feel bad\"",
      intro: "Your body is not broken. It's responding to the rhythm you give it.",
      description: "Modern nutrition focuses on rules, restriction, and control. But the body works through timing, safety, and cycles.",
      mainText: "In this live masterclass you'll learn how your internal clock, digestion, and gut microbiota are deeply connected — and how small, practical adjustments can contribute to balance without overwhelm.",
      learnTitle: "What you'll learn",
      learnItems: [
        "What the circadian rhythm is and why it's key to digestion and energy",
        "How nutrients support the body beyond calories",
        "Why gut health is about environment, not 'fixing problems'",
        "How stress and timing affect your microbiota",
        "Simple ways to introduce probiotics and prebiotics through food",
        "Where to start if you want progress without drastic changes"
      ],
      audienceTitle: "Who is this for?",
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
      registerBtn: "Reserve your place — It's FREE",
      limitedSpaces: "Limited spaces available",
      instructor: "Paula Suescun",
      instructorRole: "Nutritionist-Dietitian · National University of Colombia",
      instructorDesc: "Health Coach · Founder of Solaris Nutri · Creator of QRN",
      whatsappCta: "Join our WhatsApp community",
      quote: "Instead of counting calories or cutting more foods, I help you rebuild your natural rhythm – so your body feels safe, grounded, and ready to change.",
    },
    es: {
      badge: "MASTERCLASS EN VIVO — GRATUITA",
      title: "Alineación con tu Reloj Interno",
      subtitle: "Salud digestiva, nutrición y ritmo — explicados de forma simple",
      tagline: "\"Como bien, pero me siento mal\"",
      intro: "Tu cuerpo no está roto. Está respondiendo al ritmo que le das.",
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
      audienceTitle: "¿Para quién es?",
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
      registerBtn: "Reserva tu lugar — Es GRATIS",
      limitedSpaces: "Cupos limitados",
      instructor: "Paula Suescun",
      instructorRole: "Nutricionista-Dietista · Universidad Nacional de Colombia",
      instructorDesc: "Health Coach · Fundadora de Solaris Nutri · Creadora de QRN",
      whatsappCta: "Únete a nuestra comunidad de WhatsApp",
      quote: "En lugar de contar calorías o eliminar más alimentos, te ayudo a reconstruir tu ritmo natural — para que tu cuerpo se sienta seguro, enraizado y listo para cambiar.",
    },
    pt: {
      badge: "MASTERCLASS AO VIVO — GRATUITA",
      title: "Alinhamento com seu Relógio Interno",
      subtitle: "Saúde digestiva, nutrição e ritmo — explicados de forma simples",
      tagline: "\"Como bem, mas me sinto mal\"",
      intro: "Seu corpo não está quebrado. Está respondendo ao ritmo que você dá a ele.",
      description: "A nutrição moderna foca em regras, restrição e controle. Mas o corpo funciona através do tempo, segurança e ciclos.",
      mainText: "Nesta masterclass ao vivo você aprenderá como seu relógio interno, digestão e microbiota intestinal estão profundamente conectados — e como pequenos ajustes práticos podem contribuir para o equilíbrio sem sobrecarregar.",
      learnTitle: "O que você aprenderá",
      learnItems: [
        "O que é o ritmo circadiano e por que é fundamental para digestão e energia",
        "Como os nutrientes apoiam o corpo além das calorias",
        "Por que a saúde intestinal é sobre ambiente, não sobre \"consertar problemas\"",
        "Como o estresse e o tempo afetam sua microbiota",
        "Formas simples de introduzir probióticos e prebióticos através dos alimentos",
        "Por onde começar se você quer progredir sem mudanças drásticas"
      ],
      audienceTitle: "Para quem é?",
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
      registerBtn: "Reserve seu lugar — É GRÁTIS",
      limitedSpaces: "Vagas limitadas",
      instructor: "Paula Suescun",
      instructorRole: "Nutricionista-Dietista · Universidade Nacional da Colômbia",
      instructorDesc: "Health Coach · Fundadora da Solaris Nutri · Criadora de QRN",
      whatsappCta: "Junte-se à nossa comunidade WhatsApp",
      quote: "Em vez de contar calorias ou cortar mais alimentos, ajudo você a reconstruir seu ritmo natural — para que seu corpo se sinta seguro, enraizado e pronto para mudar.",
    }
  };

  const t = texts[language] || texts.en;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Solaris Nutri" className="h-16 w-16 rounded-full shadow-lg" />
          </div>
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-sans font-semibold mb-8 animate-fade-in">
            <Video size={16} />
            {t.badge}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-4 animate-fade-in">
            {t.title}
          </h1>
          <p className="font-sans text-xl text-foreground/80 mb-8 animate-fade-in">
            {t.subtitle}
          </p>

          {/* Event Details Bar */}
          <div className="flex flex-wrap justify-center gap-6 py-5 px-6 bg-card rounded-xl border border-border shadow-sm mb-8 animate-fade-in-up">
            <div className="flex items-center gap-2 text-foreground">
              <Calendar className="text-accent" size={18} />
              <span className="font-sans font-medium text-sm">{t.date}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Clock className="text-accent" size={18} />
              <span className="font-sans font-medium text-sm">{t.time}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Video className="text-accent" size={18} />
              <span className="font-sans font-medium text-sm">{t.format}</span>
            </div>
          </div>

          <a href="https://forms.gle/masterclass-registro" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold py-6 px-10 text-lg shadow-quantum transition-all hover:scale-105">
              {t.registerBtn} <ArrowRight size={20} className="ml-2" />
            </Button>
          </a>
          <div className="flex items-center justify-center gap-2 mt-4">
            <AlertCircle className="text-accent" size={16} />
            <span className="font-sans text-sm text-accent font-medium">{t.limitedSpaces}</span>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="font-serif text-3xl md:text-4xl text-primary italic mb-4">
            {t.tagline}
          </p>
          <p className="font-sans text-lg text-foreground/80 mb-6">
            {t.intro}
          </p>
          <p className="font-sans text-foreground/70 leading-relaxed">
            {t.description}
          </p>
        </div>
      </section>

      {/* Paula's Quote */}
      <section className="py-12 bg-accent/5 border-y border-accent/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={paulaPhoto} alt="Paula Suescun" className="w-20 h-20 rounded-full object-cover border-2 border-accent/30 flex-shrink-0" />
            <blockquote className="font-serif text-lg text-primary/90 italic leading-relaxed text-center md:text-left">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-10">{t.learnTitle}</h2>
          <div className="space-y-4">
            {t.learnItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border hover:border-accent/40 transition-colors">
                <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={20} />
                <span className="font-sans text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="py-0">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative rounded-xl overflow-hidden shadow-subtle-glow">
            <img src={circadianRhythm} alt="Circadian rhythm and nature" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-10">{t.audienceTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.audienceItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-card p-5 rounded-lg border border-border">
                <Users className="text-accent mt-0.5 flex-shrink-0" size={18} />
                <span className="font-sans text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">{t.whyDifferent}</h2>
          <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-4">{t.whyDifferentText}</p>
          <p className="font-sans text-foreground/70 leading-relaxed">{t.bridgeText}</p>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={paulaPhoto} alt="Paula Suescun" className="w-24 h-24 rounded-full object-cover shadow-quantum border-3 border-accent/20" />
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-semibold text-primary">{t.instructor}</h3>
              <p className="font-sans text-sm text-foreground/70 mt-1">{t.instructorRole}</p>
              <p className="font-sans text-sm text-foreground/60">{t.instructorDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">{t.title}</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm font-sans">
            <span className="flex items-center gap-1 text-foreground/80"><Calendar size={14} className="text-accent" /> {t.date}</span>
            <span className="flex items-center gap-1 text-foreground/80"><Clock size={14} className="text-accent" /> {t.time}</span>
          </div>

          <a href="https://forms.gle/masterclass-registro" target="_blank" rel="noopener noreferrer" className="block mb-4">
            <Button size="lg" className="w-full max-w-sm mx-auto bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold py-6 text-lg shadow-quantum transition-all hover:scale-105">
              {t.registerBtn} <ArrowRight size={20} className="ml-2" />
            </Button>
          </a>

          <a href="https://chat.whatsapp.com/YOUR_GROUP_LINK" target="_blank" rel="noopener noreferrer" className="block">
            <Button variant="outline" size="lg" className="w-full max-w-sm mx-auto border-green-500 text-green-700 hover:bg-green-50 font-sans font-medium py-5">
              <MessageCircle size={18} className="mr-2" />
              {t.whatsappCta}
            </Button>
          </a>

          <div className="flex items-center justify-center gap-2 mt-4">
            <AlertCircle className="text-accent" size={14} />
            <span className="font-sans text-xs text-accent font-medium">{t.limitedSpaces}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingMasterclass;
