import { Link } from "react-router-dom";
import { ArrowRight, Circle, Heart, ShieldCheck, Compass, UserCheck, Scale, Layers, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead from "@/components/SEOHead";

type Lang = "en" | "es" | "pt";

interface ValueEntry {
  name: string;
  desc: string;
  Icon: LucideIcon;
}

interface Copy {
  badge: string;
  title: string;
  intro: string;
  missionLabel: string;
  missionTitle: string;
  missionText: string;
  visionLabel: string;
  visionTitle: string;
  visionText: string;
  valuesLabel: string;
  valuesTitle: string;
  valuesIntro: string;
  values: ValueEntry[];
  closingTitle: string;
  closingText: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

const copy: Record<Lang, Copy> = {
  en: {
    badge: "Our Compass",
    title: "Values, Vision & Mission",
    intro: "The principles behind every choice we make at Solaris Nutri.",
    missionLabel: "Mission",
    missionTitle: "Why Solaris Nutri exists",
    missionText:
      "To help women — especially in midlife — understand their biological rhythms and rebuild their nutrition around them, so change becomes sustainable instead of a fight.",
    visionLabel: "Vision",
    visionTitle: "The world we’re building toward",
    visionText:
      "A world where women stop fighting their bodies and learn to nourish themselves in rhythm — with food, gut health and biology working together.",
    valuesLabel: "Core Values",
    valuesTitle: "The values that shape our work",
    valuesIntro:
      "These are not slogans. They are the filters we use when we design a program, write a guide, or sit with you.",
    values: [
      { name: "Respect", desc: "The body isn’t an enemy to control.", Icon: ShieldCheck },
      { name: "Kindness", desc: "Change doesn’t require punishment, shame or deprivation.", Icon: Heart },
      { name: "Curiosity", desc: "Question assumptions — including your own.", Icon: Compass },
      { name: "Autonomy", desc: "Teach people to understand themselves rather than become dependent on a protocol.", Icon: UserCheck },
      { name: "Alignment", desc: "Create choices that fit biology, life circumstances and individual needs.", Icon: Scale },
      { name: "Integration", desc: "Knowledge only matters when it becomes lived behaviour.", Icon: Layers },
    ],
    closingTitle: "Change that comes from understanding, not control",
    closingText:
      "If these principles speak to you, the next step is a free assessment call — no protocol, no pressure.",
    ctaPrimary: "Book a Free Assessment Call",
    ctaSecondary: "Explore the Programs",
  },
  es: {
    badge: "Nuestra Brújula",
    title: "Valores, Visión y Misión",
    intro: "Los principios detrás de cada decisión que tomamos en Solaris Nutri.",
    missionLabel: "Misión",
    missionTitle: "Por qué existe Solaris Nutri",
    missionText:
      "Ayudar a las mujeres — especialmente en la mediana edad — a comprender sus ritmos biológicos y reconstruir su nutrición en torno a ellos, para que el cambio sea sostenible en lugar de una lucha.",
    visionLabel: "Visión",
    visionTitle: "El mundo hacia el que caminamos",
    visionText:
      "Un mundo donde las mujeres dejen de luchar contra su cuerpo y aprendan a nutrirse en ritmo — con la alimentación, la salud intestinal y la biología trabajando juntas.",
    valuesLabel: "Valores Fundamentales",
    valuesTitle: "Los valores que dan forma a nuestro trabajo",
    valuesIntro:
      "No son eslóganes. Son los filtros que usamos al diseñar un programa, escribir una guía o acompañarte.",
    values: [
      { name: "Respeto", desc: "El cuerpo no es un enemigo al que controlar.", Icon: ShieldCheck },
      { name: "Bondad", desc: "El cambio no requiere castigo, vergüenza ni privación.", Icon: Heart },
      { name: "Curiosidad", desc: "Cuestiona las suposiciones, incluidas las tuyas.", Icon: Compass },
      { name: "Autonomía", desc: "Enseñar a las personas a comprenderse a sí mismas en lugar de depender de un protocolo.", Icon: UserCheck },
      { name: "Alineación", desc: "Crear elecciones que se ajusten a la biología, las circunstancias de la vida y las necesidades individuales.", Icon: Scale },
      { name: "Integración", desc: "El conocimiento solo importa cuando se convierte en comportamiento vivido.", Icon: Layers },
    ],
    closingTitle: "Un cambio que nace de la comprensión, no del control",
    closingText:
      "Si estos principios resuenan contigo, el siguiente paso es una llamada de evaluación gratuita — sin protocolo, sin presión.",
    ctaPrimary: "Reserva una llamada de evaluación gratuita",
    ctaSecondary: "Explorar los programas",
  },
  pt: {
    badge: "A Nossa Bússola",
    title: "Valores, Visão e Missão",
    intro: "Os princípios por trás de cada decisão que tomamos na Solaris Nutri.",
    missionLabel: "Missão",
    missionTitle: "Por que a Solaris Nutri existe",
    missionText:
      "Ajudar as mulheres — especialmente na meia-idade — a compreender os seus ritmos biológicos e a reconstruir a sua nutrição em torno deles, para que a mudança seja sustentável em vez de uma luta.",
    visionLabel: "Visão",
    visionTitle: "O mundo para o qual caminhamos",
    visionText:
      "Um mundo onde as mulheres deixem de lutar contra o seu corpo e aprendam a nutrir-se em ritmo — com a alimentação, a saúde intestinal e a biologia a trabalharem juntas.",
    valuesLabel: "Valores Fundamentais",
    valuesTitle: "Os valores que moldam o nosso trabalho",
    valuesIntro:
      "Não são slogans. São os filtros que usamos ao desenhar um programa, escrever um guia ou acompanhar-te.",
    values: [
      { name: "Respeito", desc: "O corpo não é um inimigo a controlar.", Icon: ShieldCheck },
      { name: "Bondade", desc: "A mudança não exige castigo, vergonha nem privação.", Icon: Heart },
      { name: "Curiosidade", desc: "Questiona as suposições — incluindo as tuas.", Icon: Compass },
      { name: "Autonomia", desc: "Ensinar as pessoas a compreenderem-se a si mesmas em vez de dependerem de um protocolo.", Icon: UserCheck },
      { name: "Alinhamento", desc: "Criar escolhas que se adequem à biologia, às circunstâncias de vida e às necessidades individuais.", Icon: Scale },
      { name: "Integração", desc: "O conhecimento só importa quando se torna comportamento vivido.", Icon: Layers },
    ],
    closingTitle: "Uma mudança que nasce da compreensão, não do controlo",
    closingText:
      "Se estes princípios ressoam em ti, o próximo passo é uma chamada de avaliação gratuita — sem protocolo, sem pressão.",
    ctaPrimary: "Marque uma chamada de avaliação gratuita",
    ctaSecondary: "Explorar os programas",
  },
};

const Values = () => {
  const { language } = useLanguage();
  const t = copy[language as Lang] || copy.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${t.title} | Solaris Nutri`,
    description:
      "The values, vision and mission behind Solaris Nutri: respect, kindness, curiosity, autonomy, alignment and integration in rhythm-based nutrition.",
    url: "https://solarisnutri-com.lovable.app/values",
    isPartOf: { "@type": "WebSite", name: "Solaris Nutri", url: "https://solarisnutri-com.lovable.app" },
  };

  return (
    <div className="min-h-screen py-24">
      <SEOHead
        title="Our Values, Vision & Mission"
        description="The principles behind Solaris Nutri: respect, kindness, curiosity, autonomy, alignment and integration — and our mission for rhythm-based nutrition in midlife."
        path="/values"
        keywords="Solaris Nutri values, nutrition mission, vision, rhythm-based nutrition principles"
        jsonLd={jsonLd}
      />
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Solaris Nutri" className="h-20 w-20 logo-circle object-cover" />
            </div>
            <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
              <Sun size={16} className="animate-pulse-slow" />
              {t.badge}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              {t.title}
            </h1>
            <p className="font-sans text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {t.intro}
            </p>
          </div>

          {/* Mission & Vision */}
          <section aria-labelledby="mission-vision-heading" className="mb-20">
            <h2 id="mission-vision-heading" className="sr-only">{t.missionLabel} & {t.visionLabel}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-subtle-glow animate-fade-in-up">
                <div className="inline-flex items-center gap-2 text-accent font-sans text-xs tracking-wider uppercase mb-4">
                  <Circle size={8} fill="currentColor" />
                  {t.missionLabel}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">{t.missionTitle}</h3>
                <p className="font-sans text-foreground/80 leading-relaxed">{t.missionText}</p>
              </div>
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-subtle-glow animate-fade-in-up" style={{ animationDelay: "120ms" }}>
                <div className="inline-flex items-center gap-2 text-accent font-sans text-xs tracking-wider uppercase mb-4">
                  <Sun size={14} />
                  {t.visionLabel}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">{t.visionTitle}</h3>
                <p className="font-sans text-foreground/80 leading-relaxed">{t.visionText}</p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section aria-labelledby="values-heading" className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-accent font-sans text-xs tracking-wider uppercase mb-4">
                <Heart size={14} />
                {t.valuesLabel}
              </div>
              <h2 id="values-heading" className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                {t.valuesTitle}
              </h2>
              <p className="font-sans text-foreground/70 leading-relaxed">{t.valuesIntro}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.values.map((value, index) => {
                const Icon = value.Icon;
                return (
                  <div
                    key={value.name}
                    className="group bg-card p-8 rounded-2xl border border-border shadow-subtle-glow hover:shadow-quantum transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-primary mb-3">{value.name}</h3>
                    <p className="font-sans text-foreground/75 leading-relaxed">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Closing CTA */}
          <section className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t.closingTitle}</h2>
            <p className="font-sans text-lg opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t.closingText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="font-sans font-medium px-8">
                  {t.ctaPrimary}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="font-sans font-medium px-8 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                  {t.ctaSecondary}
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Values;
