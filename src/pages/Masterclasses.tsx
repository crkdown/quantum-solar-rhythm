import { Circle, BookOpen, Calendar, Clock, Video, User, CheckCircle, PlayCircle, FileText, Headphones, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import qrnFramework from "@/assets/qrn-framework.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Masterclasses = () => {
  const { t, language } = useLanguage();

  const texts = {
    en: {
      title: "Deep Dive Masterclasses",
      subtitle: "Comprehensive learning experiences to master the science and art of Quantum Rhythm Nutrition. Each masterclass is designed for deep understanding and practical application.",
      liveLabel: "LIVE ONLINE MASTERCLASS",
      liveTitle: "Alignment with Your Internal Clock",
      liveSubtitle: "and basic concepts of the digestive system and intestinal microbiota",
      aboutTitle: "What is this Masterclass about?",
      aboutP1: "The human body is designed to respond to time, light, and biological rhythms. Nutrition is a rhythmic process: when food aligns with the internal clock and natural cycles, digestion, energy, and intestinal balance recover coherence.",
      aboutP2: "In this masterclass we will explore how the digestive system and intestinal microbiota respond to these rhythms, and how small adjustments in schedules and habits can generate deep and sustainable changes.",
      exploreTitle: "What we'll explore",
      audienceTitle: "Who is this Masterclass for?",
      formatTitle: "Format",
      formatItems: ["Live masterclass via Zoom", "Q&A session", "Recording available for registered participants"],
      keyMessage: "When food aligns with the internal clock and biological cycles, the body recovers digestive and metabolic coherence. This masterclass is an introduction to that way of understanding nutrition.",
      registerBtn: "Register Now",
      comingSoonTitle: "Upcoming Masterclasses",
      bundleTitle: "Complete Masterclass Bundle",
      bundleDesc: "Access all masterclasses and save 30% with the complete bundle.",
      bundleBtn: "Get Bundle Access",
      notifyBtn: "Notify When Available",
      instructorRole: "Nutritionist-Dietitian – National University of Colombia",
      instructorDesc: "Health Coach · Founder of Solaris Nutri · Creator of the Quantum Rhythm Nutrition (QRN) framework"
    },
    es: {
      title: "Masterclasses de Inmersión Profunda",
      subtitle: "Experiencias de aprendizaje completas para dominar la ciencia y el arte de la Nutrición de Ritmo Cuántico. Cada masterclass está diseñada para una comprensión profunda y aplicación práctica.",
      liveLabel: "MASTERCLASS ONLINE EN VIVO",
      liveTitle: "Alineación con tu Reloj Interno",
      liveSubtitle: "y conceptos básicos del sistema digestivo y la microbiota intestinal",
      aboutTitle: "¿De qué trata esta Masterclass?",
      aboutP1: "El cuerpo humano está diseñado para responder al tiempo, la luz y los ritmos biológicos. La nutrición es un proceso rítmico: cuando la alimentación se alinea con el reloj interno y los ciclos naturales, la digestión, la energía y el equilibrio intestinal recuperan coherencia.",
      aboutP2: "En esta masterclass exploraremos cómo el sistema digestivo y la microbiota intestinal responden a estos ritmos, y cómo pequeños ajustes en horarios y hábitos pueden generar cambios profundos y sostenibles.",
      exploreTitle: "Lo que exploraremos",
      audienceTitle: "¿Para quién es esta Masterclass?",
      formatTitle: "Formato",
      formatItems: ["Masterclass en vivo por Zoom", "Espacio de preguntas y respuestas", "Grabación disponible para personas inscritas"],
      keyMessage: "Cuando la alimentación se alinea con el reloj interno y los ciclos biológicos, el cuerpo recupera coherencia digestiva y metabólica. Esta masterclass es una introducción a esa forma de comprender la nutrición.",
      registerBtn: "Inscríbete Ahora",
      comingSoonTitle: "Próximas Masterclasses",
      bundleTitle: "Paquete Completo de Masterclasses",
      bundleDesc: "Accede a todas las masterclasses y ahorra un 30% con el paquete completo.",
      bundleBtn: "Obtener Acceso al Paquete",
      notifyBtn: "Notificarme Cuando Esté Disponible",
      instructorRole: "Nutricionista-Dietista – Universidad Nacional de Colombia",
      instructorDesc: "Health Coach · Fundadora de Solaris Nutri · Creadora del framework Quantum Rhythm Nutrition (QRN)"
    },
    pt: {
      title: "Masterclasses de Imersão Profunda",
      subtitle: "Experiências de aprendizagem completas para dominar a ciência e a arte da Nutrição de Ritmo Quântico. Cada masterclass é projetada para compreensão profunda e aplicação prática.",
      liveLabel: "MASTERCLASS ONLINE AO VIVO",
      liveTitle: "Alinhamento com seu Relógio Interno",
      liveSubtitle: "e conceitos básicos do sistema digestivo e microbiota intestinal",
      aboutTitle: "Sobre o que é esta Masterclass?",
      aboutP1: "O corpo humano é projetado para responder ao tempo, luz e ritmos biológicos. A nutrição é um processo rítmico: quando a alimentação se alinha com o relógio interno e os ciclos naturais, a digestão, a energia e o equilíbrio intestinal recuperam coerência.",
      aboutP2: "Nesta masterclass exploraremos como o sistema digestivo e a microbiota intestinal respondem a esses ritmos, e como pequenos ajustes em horários e hábitos podem gerar mudanças profundas e sustentáveis.",
      exploreTitle: "O que exploraremos",
      audienceTitle: "Para quem é esta Masterclass?",
      formatTitle: "Formato",
      formatItems: ["Masterclass ao vivo via Zoom", "Sessão de perguntas e respostas", "Gravação disponível para participantes inscritos"],
      keyMessage: "Quando a alimentação se alinha com o relógio interno e os ciclos biológicos, o corpo recupera coerência digestiva e metabólica. Esta masterclass é uma introdução a essa forma de entender a nutrição.",
      registerBtn: "Inscreva-se Agora",
      comingSoonTitle: "Próximas Masterclasses",
      bundleTitle: "Pacote Completo de Masterclasses",
      bundleDesc: "Acesse todas as masterclasses e economize 30% com o pacote completo.",
      bundleBtn: "Obter Acesso ao Pacote",
      notifyBtn: "Notificar Quando Disponível",
      instructorRole: "Nutricionista-Dietista – Universidade Nacional da Colômbia",
      instructorDesc: "Health Coach · Fundadora da Solaris Nutri · Criadora do framework Quantum Rhythm Nutrition (QRN)"
    }
  };

  const masterclasses = {
    en: [
      {
        title: "The Craving Code",
        description: "Decode the hidden language of your cravings and understand what your body is really asking for. Learn the biological, emotional, and rhythmic patterns behind food desires.",
        duration: "2.5 hours",
        price: "€97",
        status: "Coming Soon",
        topics: ["Sugar cravings & blood sugar rhythms", "Emotional vs physical hunger", "Microbiome influence on cravings", "Lunar cycle correlations"]
      },
      {
        title: "The Gluten Matrix",
        description: "Navigate the complex world of gluten, grain sensitivity, and their impact on your rhythmic coherence. Beyond intolerance – understanding the full picture.",
        duration: "3 hours",
        price: "€97",
        status: "Coming Soon",
        topics: ["Modern wheat vs ancient grains", "Gut permeability & inflammation", "When to eliminate vs when to heal", "Reintroduction protocols"]
      },
      {
        title: "Ultra-Processed",
        description: "Understand the industrial food system and how ultra-processed foods disrupt your natural rhythms. Learn to identify and transition away from harmful products.",
        duration: "2 hours",
        price: "€97",
        status: "Coming Soon",
        topics: ["The NOVA classification system", "Addictive food engineering", "Reading labels like a pro", "Practical replacement strategies"]
      },
      {
        title: "The Cereal Code",
        description: "Unlock Steiner's 'Cereal of the Week' wisdom and integrate planetary rhythms through sacred grains. Ancient wisdom meets modern nutrition science.",
        duration: "3 hours",
        price: "€97",
        status: "Coming Soon",
        topics: ["The 7 classical grains", "Planetary rhythm integration", "Anthroposophic nutrition principles", "Weekly meal planning with intention"]
      }
    ],
    es: [
      {
        title: "El Código de los Antojos",
        description: "Decodifica el lenguaje oculto de tus antojos y entiende lo que tu cuerpo realmente está pidiendo. Aprende los patrones biológicos, emocionales y rítmicos detrás de los deseos alimentarios.",
        duration: "2.5 horas",
        price: "€97",
        status: "Próximamente",
        topics: ["Antojos de azúcar y ritmos de glucosa", "Hambre emocional vs física", "Influencia del microbioma", "Correlaciones con el ciclo lunar"]
      },
      {
        title: "La Matriz del Gluten",
        description: "Navega el complejo mundo del gluten, la sensibilidad a los granos y su impacto en tu coherencia rítmica. Más allá de la intolerancia – entendiendo el panorama completo.",
        duration: "3 horas",
        price: "€97",
        status: "Próximamente",
        topics: ["Trigo moderno vs granos antiguos", "Permeabilidad intestinal e inflamación", "Cuándo eliminar vs cuándo sanar", "Protocolos de reintroducción"]
      },
      {
        title: "Ultra-Procesados",
        description: "Entiende el sistema alimentario industrial y cómo los alimentos ultraprocesados alteran tus ritmos naturales. Aprende a identificar y transicionar lejos de productos dañinos.",
        duration: "2 horas",
        price: "€97",
        status: "Próximamente",
        topics: ["El sistema de clasificación NOVA", "Ingeniería alimentaria adictiva", "Leer etiquetas como un profesional", "Estrategias prácticas de reemplazo"]
      },
      {
        title: "El Código de los Cereales",
        description: "Desbloquea la sabiduría del 'Cereal de la Semana' de Steiner e integra ritmos planetarios a través de granos sagrados. Sabiduría ancestral con ciencia nutricional moderna.",
        duration: "3 horas",
        price: "€97",
        status: "Próximamente",
        topics: ["Los 7 granos clásicos", "Integración de ritmos planetarios", "Principios de nutrición antroposófica", "Planificación semanal con intención"]
      }
    ],
    pt: [
      {
        title: "O Código dos Desejos",
        description: "Decodifique a linguagem oculta dos seus desejos e entenda o que seu corpo realmente está pedindo. Aprenda os padrões biológicos, emocionais e rítmicos por trás dos desejos alimentares.",
        duration: "2.5 horas",
        price: "€97",
        status: "Em Breve",
        topics: ["Desejos de açúcar e ritmos de glicose", "Fome emocional vs física", "Influência do microbioma", "Correlações com o ciclo lunar"]
      },
      {
        title: "A Matriz do Glúten",
        description: "Navegue o complexo mundo do glúten, sensibilidade a grãos e seu impacto na sua coerência rítmica. Além da intolerância – entendendo o panorama completo.",
        duration: "3 horas",
        price: "€97",
        status: "Em Breve",
        topics: ["Trigo moderno vs grãos antigos", "Permeabilidade intestinal e inflamação", "Quando eliminar vs quando curar", "Protocolos de reintrodução"]
      },
      {
        title: "Ultra-Processados",
        description: "Entenda o sistema alimentar industrial e como os alimentos ultraprocessados perturbam seus ritmos naturais. Aprenda a identificar e transicionar para longe de produtos prejudiciais.",
        duration: "2 horas",
        price: "€97",
        status: "Em Breve",
        topics: ["O sistema de classificação NOVA", "Engenharia alimentar viciante", "Lendo rótulos como um profissional", "Estratégias práticas de substituição"]
      },
      {
        title: "O Código dos Cereais",
        description: "Desbloqueie a sabedoria do 'Cereal da Semana' de Steiner e integre ritmos planetários através de grãos sagrados. Sabedoria ancestral com ciência nutricional moderna.",
        duration: "3 horas",
        price: "€97",
        status: "Em Breve",
        topics: ["Os 7 grãos clássicos", "Integração de ritmos planetários", "Princípios de nutrição antroposófica", "Planejamento semanal com intenção"]
      }
    ]
  };

  const liveMasterclassTopics = {
    en: [
      "What is your internal clock and how it influences digestion and energy",
      "A clear and simple look at the digestive system",
      "Why many digestive symptoms reflect rhythmic misalignment",
      "What is the intestinal microbiota and how it is influenced by time and stress",
      "The difference between automatic eating and eating with body presence",
      "How to begin synchronizing food with circadian and lunar rhythms",
      "First steps toward intuitive, rhythmic, and sustainable nutrition"
    ],
    es: [
      "Qué es tu reloj interno y cómo influye en la digestión y la energía",
      "Una mirada clara y sencilla al sistema digestivo",
      "Por qué muchos síntomas digestivos reflejan desalineación rítmica",
      "Qué es la microbiota intestinal y cómo se ve influenciada por el tiempo y el estrés",
      "La diferencia entre comer de forma automática y comer con presencia corporal",
      "Cómo comenzar a sincronizar la alimentación con los ritmos circadianos y lunares",
      "Primeros pasos hacia una nutrición intuitiva, rítmica y sostenible"
    ],
    pt: [
      "O que é seu relógio interno e como ele influencia a digestão e a energia",
      "Um olhar claro e simples sobre o sistema digestivo",
      "Por que muitos sintomas digestivos refletem desalinhamento rítmico",
      "O que é a microbiota intestinal e como ela é influenciada pelo tempo e pelo estresse",
      "A diferença entre comer automaticamente e comer com presença corporal",
      "Como começar a sincronizar a alimentação com os ritmos circadianos e lunares",
      "Primeiros passos para uma nutrição intuitiva, rítmica e sustentável"
    ]
  };

  const targetAudience = {
    en: [
      "People with bloating, heavy digestion, or frequent fatigue",
      "Those who feel they eat correctly but their body doesn't respond",
      "People looking to understand their body beyond diets",
      "Those interested in science-based integrative nutrition",
      "Anyone wanting to reconnect with their natural rhythms"
    ],
    es: [
      "Personas con hinchazón, digestiones pesadas o fatiga frecuente",
      "Quienes sienten que comen de forma correcta pero su cuerpo no responde",
      "Personas que buscan comprender su cuerpo más allá de dietas",
      "Interesados en una nutrición con base científica e integrativa",
      "Quienes desean reconectar con sus ritmos naturales"
    ],
    pt: [
      "Pessoas com inchaço, digestão pesada ou fadiga frequente",
      "Aqueles que sentem que comem corretamente mas o corpo não responde",
      "Pessoas que buscam entender seu corpo além das dietas",
      "Interessados em nutrição integrativa baseada em ciência",
      "Quem deseja reconectar com seus ritmos naturais"
    ]
  };

  const currentTexts = texts[language] || texts.en;
  const currentMasterclasses = masterclasses[language] || masterclasses.en;
  const currentTopics = liveMasterclassTopics[language] || liveMasterclassTopics.en;
  const currentAudience = targetAudience[language] || targetAudience.en;

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="Solaris Nutri" 
              className="h-20 w-20 logo-circle object-cover"
            />
          </div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            Masterclasses
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            {currentTexts.title}
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">
            {currentTexts.subtitle}
          </p>
        </div>

        {/* LIVE MASTERCLASS - Featured Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
            <CardHeader className="text-center pb-2">
              <div className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-sans font-medium mb-4 mx-auto">
                <Video size={16} />
                {currentTexts.liveLabel}
              </div>
              <CardTitle className="font-serif text-4xl md:text-5xl text-primary mb-4">
                {currentTexts.liveTitle}
              </CardTitle>
              <CardDescription className="text-lg text-foreground/80 font-sans">
                {currentTexts.liveSubtitle}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Event Details */}
              <div className="flex flex-wrap justify-center gap-6 py-6 border-y border-border">
                <div className="flex items-center gap-2 text-foreground">
                  <Calendar className="text-primary" size={20} />
                  <span className="font-sans font-medium">14 de febrero</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="text-primary" size={20} />
                  <span className="font-sans font-medium">10:30 a.m. (Colombia)</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Video className="text-primary" size={20} />
                  <span className="font-sans font-medium">Zoom</span>
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
                    <h3 className="font-serif text-xl font-semibold text-primary">Paula Suescun</h3>
                    <p className="font-sans text-sm text-foreground/70">
                      {currentTexts.instructorRole}<br />
                      {currentTexts.instructorDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* About this Masterclass */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-primary">{currentTexts.aboutTitle}</h3>
                <p className="font-sans text-foreground/80 leading-relaxed">
                  {currentTexts.aboutP1}
                </p>
                <p className="font-sans text-foreground/80 leading-relaxed">
                  {currentTexts.aboutP2}
                </p>
              </div>

              {/* QRN Framework Image */}
              <div className="flex justify-center py-6">
                <img 
                  src={qrnFramework} 
                  alt="Quantum Rhythm Nutrition Framework" 
                  className="max-w-full md:max-w-3xl rounded-lg shadow-quantum"
                />
              </div>

              {/* What we'll explore */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-primary">{currentTexts.exploreTitle}</h3>
                <ul className="space-y-3">
                  {currentTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span className="font-sans text-foreground/80">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Audience */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-primary">{currentTexts.audienceTitle}</h3>
                <ul className="space-y-3">
                  {currentAudience.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <User className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span className="font-sans text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Format */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">{currentTexts.formatTitle}</h3>
                <ul className="space-y-2 font-sans text-foreground/80">
                  {currentTexts.formatItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {index === 0 && <PlayCircle size={16} className="text-accent" />}
                      {index === 1 && <Users size={16} className="text-accent" />}
                      {index === 2 && <Headphones size={16} className="text-accent" />}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Message */}
              <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                <p className="font-lora text-lg text-foreground/90 italic">
                  "{currentTexts.keyMessage}"
                </p>
              </div>
            </CardContent>

            <CardFooter className="flex justify-center pb-8">
              <a 
                href="https://forms.gle/masterclass-registro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full max-w-md"
              >
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium py-6 text-lg shadow-quantum transition-all hover:scale-105"
                >
                  {currentTexts.registerBtn}
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>

        {/* Other Masterclass Cards */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-4">
            {currentTexts.comingSoonTitle}
          </h2>
          <p className="font-sans text-foreground/70 text-center max-w-2xl mx-auto mb-8">
            {language === 'en' ? 'Each masterclass includes detailed materials, Q&A sessions, and lifetime access to recordings.' : 
             language === 'es' ? 'Cada masterclass incluye materiales detallados, sesiones de Q&A y acceso de por vida a las grabaciones.' :
             'Cada masterclass inclui materiais detalhados, sessões de Q&A e acesso vitalício às gravações.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {currentMasterclasses.map((masterclass, index) => (
            <Card 
              key={index}
              className="border-border hover:border-accent/50 hover:shadow-quantum transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardDescription className="text-xs font-sans uppercase tracking-wide text-accent flex items-center gap-2">
                    <Clock size={14} />
                    {masterclass.duration}
                  </CardDescription>
                  <span className="text-xs font-sans font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">
                    {masterclass.status}
                  </span>
                </div>
                <CardTitle className="font-serif text-2xl text-primary">
                  {masterclass.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="font-sans text-foreground/70 leading-relaxed">
                  {masterclass.description}
                </p>
                
                {/* Topics Preview */}
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-sans text-xs uppercase tracking-wide text-muted-foreground mb-2 flex items-center gap-2">
                    <FileText size={12} />
                    {language === 'en' ? 'Topics covered' : language === 'es' ? 'Temas cubiertos' : 'Tópicos abordados'}
                  </p>
                  <ul className="space-y-1">
                    {masterclass.topics.slice(0, 3).map((topic, topicIndex) => (
                      <li key={topicIndex} className="font-sans text-sm text-foreground/70 flex items-start gap-2">
                        <span className="text-accent">•</span>
                        {topic}
                      </li>
                    ))}
                    {masterclass.topics.length > 3 && (
                      <li className="font-sans text-sm text-accent">
                        +{masterclass.topics.length - 3} {language === 'en' ? 'more' : 'más'}...
                      </li>
                    )}
                  </ul>
                </div>

                <div className="font-serif text-3xl font-bold text-primary">
                  {masterclass.price}
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full font-sans" 
                  variant="secondary"
                  disabled
                >
                  {currentTexts.notifyBtn}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bundle Offer */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 p-12 rounded-xl border border-primary/20 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="text-accent" size={32} />
            <h2 className="font-serif text-3xl font-bold text-primary">
              {currentTexts.bundleTitle}
            </h2>
          </div>
          <p className="font-sans text-foreground/80 mb-6">
            {currentTexts.bundleDesc}
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-muted-foreground line-through font-serif text-2xl">€388</span>
            <span className="font-serif text-4xl font-bold text-accent">€271</span>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-sans font-medium px-8 shadow-quantum transition-all hover:scale-105">
              {currentTexts.bundleBtn}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Masterclasses;
