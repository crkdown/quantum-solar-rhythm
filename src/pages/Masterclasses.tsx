import { Circle, BookOpen, Calendar, Clock, Video, User, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import qrnFramework from "@/assets/qrn-framework.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Masterclasses = () => {
  const { t } = useLanguage();

  const masterclasses = [
    {
      title: "The Craving Code",
      description: "Decode the hidden language of your cravings and understand what your body is really asking for.",
      duration: "2.5 hours",
      price: "€97",
      status: "Coming Soon"
    },
    {
      title: "The Gluten Matrix",
      description: "Navigate the complex world of gluten, grain sensitivity, and their impact on your rhythmic coherence.",
      duration: "3 hours",
      price: "€97",
      status: "Coming Soon"
    },
    {
      title: "Ultra-Processed",
      description: "Understand the industrial food system and how ultra-processed foods disrupt your natural rhythms.",
      duration: "2 hours",
      price: "€97",
      status: "Coming Soon"
    },
    {
      title: "The Cereal Code",
      description: "Unlock Steiner's 'Cereal of the Week' wisdom and integrate planetary rhythms through sacred grains.",
      duration: "3 hours",
      price: "€97",
      status: "Coming Soon"
    }
  ];

  const liveMasterclassTopics = [
    "Qué es tu reloj interno y cómo influye en la digestión y la energía",
    "Una mirada clara y sencilla al sistema digestivo",
    "Por qué muchos síntomas digestivos reflejan desalineación rítmica",
    "Qué es la microbiota intestinal y cómo se ve influenciada por el tiempo y el estrés",
    "La diferencia entre comer de forma automática y comer con presencia corporal",
    "Cómo comenzar a sincronizar la alimentación con los ritmos circadianos y lunares",
    "Primeros pasos hacia una nutrición intuitiva, rítmica y sostenible"
  ];

  const targetAudience = [
    "Personas con hinchazón, digestiones pesadas o fatiga frecuente",
    "Quienes sienten que comen de forma correcta pero su cuerpo no responde",
    "Personas que buscan comprender su cuerpo más allá de dietas",
    "Interesados en una nutrición con base científica e integrativa",
    "Quienes desean reconectar con sus ritmos naturales"
  ];

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
            Deep Dive Learning
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">
            Comprehensive masterclasses to deepen your understanding of rhythm, 
            nourishment, and the hidden patterns that shape your vitality.
          </p>
        </div>

        {/* LIVE MASTERCLASS - Featured Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
            <CardHeader className="text-center pb-2">
              <div className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-sans font-medium mb-4 mx-auto">
                <Video size={16} />
                MASTERCLASS ONLINE EN VIVO
              </div>
              <CardTitle className="font-serif text-4xl md:text-5xl text-primary mb-4">
                Alineación con tu Reloj Interno
              </CardTitle>
              <CardDescription className="text-lg text-foreground/80 font-sans">
                y conceptos básicos del sistema digestivo y la microbiota intestinal
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
                  <span className="font-sans font-medium">Zoom en vivo</span>
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
                      Nutricionista-Dietista – Universidad Nacional de Colombia<br />
                      Health Coach · Fundadora de Solaris Nutri<br />
                      Creadora del framework Quantum Rhythm Nutrition (QRN)
                    </p>
                  </div>
                </div>
              </div>

              {/* About this Masterclass */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-primary">¿De qué trata esta Masterclass?</h3>
                <p className="font-sans text-foreground/80 leading-relaxed">
                  El cuerpo humano está diseñado para responder al tiempo, la luz y los ritmos biológicos. 
                  La nutrición es un proceso rítmico: cuando la alimentación se alinea con el reloj interno 
                  y los ciclos naturales, la digestión, la energía y el equilibrio intestinal recuperan coherencia.
                </p>
                <p className="font-sans text-foreground/80 leading-relaxed">
                  En esta masterclass exploraremos cómo el sistema digestivo y la microbiota intestinal 
                  responden a estos ritmos, y cómo pequeños ajustes en horarios y hábitos pueden generar 
                  cambios profundos y sostenibles.
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
                <h3 className="font-serif text-2xl font-semibold text-primary">Lo que exploraremos</h3>
                <ul className="space-y-3">
                  {liveMasterclassTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span className="font-sans text-foreground/80">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Audience */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-primary">¿Para quién es esta Masterclass?</h3>
                <ul className="space-y-3">
                  {targetAudience.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <User className="text-accent mt-1 flex-shrink-0" size={18} />
                      <span className="font-sans text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Format */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">Formato</h3>
                <ul className="space-y-2 font-sans text-foreground/80">
                  <li>• Masterclass en vivo por Zoom</li>
                  <li>• Espacio de preguntas y respuestas</li>
                  <li>• Grabación disponible para personas inscritas</li>
                </ul>
              </div>

              {/* Key Message */}
              <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                <p className="font-lora text-lg text-foreground/90 italic">
                  "Cuando la alimentación se alinea con el reloj interno y los ciclos biológicos, 
                  el cuerpo recupera coherencia digestiva y metabólica. Esta masterclass es una 
                  introducción a esa forma de comprender la nutrición."
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
                  Inscríbete Ahora
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>

        {/* Other Masterclass Cards */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-8">
            {t('common.comingSoon')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {masterclasses.map((masterclass, index) => (
            <Card 
              key={index}
              className={`border-border hover:shadow-quantum transition-all duration-300 animate-fade-in-up opacity-75`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardDescription className="text-xs font-sans uppercase tracking-wide text-accent">
                    {masterclass.duration}
                  </CardDescription>
                  <span className="text-xs font-sans font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">
                    {t('common.comingSoon')}
                  </span>
                </div>
                <CardTitle className="font-serif text-2xl text-primary">
                  {masterclass.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                  {masterclass.description}
                </p>
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
                  Notify When Available
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bundle Offer */}
        <div className="max-w-4xl mx-auto bg-primary/5 p-12 rounded-lg border border-primary/20 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="text-accent" size={32} />
            <h2 className="font-serif text-3xl font-bold text-primary">
              Complete Masterclass Bundle
            </h2>
          </div>
          <p className="font-sans text-foreground/80 mb-6">
            Access all masterclasses and save 30% with the complete bundle.
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-muted-foreground line-through font-serif text-2xl">€388</span>
            <span className="font-serif text-4xl font-bold text-accent">€271</span>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-sans font-medium px-8">
              Get Bundle Access
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Masterclasses;
