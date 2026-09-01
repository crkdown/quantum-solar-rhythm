import { Link } from "react-router-dom";
import {
  ArrowRight,
  Circle,
  Heart,
  ShieldCheck,
  Compass,
  UserCheck,
  Scale,
  Layers,
  Sun,
  Shield,
  Sparkles,
  MessageCircleHeart,
} from "lucide-react";
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

interface CandidateEntry {
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
  missionText: string[];
  missionCapstone: string;
  visionLabel: string;
  visionTitle: string;
  visionText: string;
  valuesLabel: string;
  valuesTitle: string;
  valuesIntro: string;
  values: ValueEntry[];
  explorationLabel: string;
  explorationTitle: string;
  explorationIntro: string;
  candidates: CandidateEntry[];
  explorationNote: string;
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
    missionText: [
      "Solaris Nutri helps women navigate midlife with greater biological awareness, using nutrition, gut health, lifestyle and rhythm to rebuild a respectful relationship with their bodies.",
      "We help women understand and respond to their body's signals, develop sustainable habits and recognise early signs that their health may be moving out of balance.",
      "Our aim is not another restrictive diet, but a kinder and more integrated approach to nourishment — supporting digestive, metabolic and overall health while contributing to the prevention and reduction of risk for preventable chronic diseases such as type 2 diabetes.",
    ],
    missionCapstone:
      "Health is not created by finding the perfect diet. It is built through the repeated relationship between what we eat, how we live, how we feel, and how well we listen to the signals of our biology.",
    visionLabel: "Vision",
    visionTitle: "The world we’re building toward",
    visionText:
      "A world where people no longer fight their bodies in the pursuit of health, but learn to understand, nourish and respect them — living in greater harmony with their biology, their rhythms and their environment.",
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
    explorationLabel: "An Open Question",
    explorationTitle: "Compassion, Self-Respect or Non-Harm?",
    explorationIntro:
      "Six values feel settled. The seventh is the one we are still exploring — and we want to think it through carefully, because whichever we choose shapes how we show up.",
    candidates: [
      {
        name: "Compassion",
        desc: "Meeting yourself and your body with warmth, especially when change is hard. Strength: it humanises the journey. Tension: without a boundary, compassion can quietly slip into self-indulgence or staying small.",
        Icon: Heart,
      },
      {
        name: "Self-Respect",
        desc: "Honouring your own needs, limits and pace as real and worthy. Strength: protects against people-pleasing and over-giving. Tension: can edge toward rigidity or self-criticism if mistaken for perfectionism.",
        Icon: UserCheck,
      },
      {
        name: "Non-Harm",
        desc: "A clear ethical guardrail — do no harm to body, mind or your relationship with food. Strength: an objective floor that holds even on hard days. Tension: more a boundary than a feeling, so it may need compassion or self-respect to warm it.",
        Icon: Shield,
      },
    ],
    explorationNote:
      "Our current lean: Non-Harm as the floor, with Compassion and Self-Respect woven through it. We'd genuinely love your reflection — which one lands as most true for you?",
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
    missionText: [
      "Solaris Nutri ayuda a las mujeres a transitar la mediana edad con mayor conciencia biológica, utilizando la nutrición, la salud intestinal, el estilo de vida y el ritmo para reconstruir una relación respetuosa con su cuerpo.",
      "Ayudamos a las mujeres a comprender y responder a las señales de su cuerpo, desarrollar hábitos sostenibles y reconocer los primeros signos de que su salud podría estar perdiendo el equilibrio.",
      "Nuestro objetivo no es otra dieta restrictiva, sino un enfoque más amable e integrado de la nutrición — que apoye la salud digestiva, metabólica y general, contribuyendo a la prevención y reducción del riesgo de enfermedades crónicas prevenibles como la diabetes tipo 2.",
    ],
    missionCapstone:
      "La salud no se crea encontrando la dieta perfecta. Se construye a través de la relación repetida entre lo que comemos, cómo vivimos, cómo nos sentimos y qué tan bien escuchamos las señales de nuestra biología.",
    visionLabel: "Visión",
    visionTitle: "El mundo hacia el que caminamos",
    visionText:
      "Un mundo donde las personas ya no luchen contra su cuerpo en la búsqueda de la salud, sino que aprendan a comprenderlo, nutrirlo y respetarlo — viviendo en mayor armonía con su biología, sus ritmos y su entorno.",
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
    explorationLabel: "Una Pregunta Abierta",
    explorationTitle: "¿Compasión, Respeto por Uno Mismo o No-Daño?",
    explorationIntro:
      "Seis valores se sienten asentados. El séptimo es el que todavía estamos explorando — y queremos pensarlo con cuidado, porque el que elijamos da forma a cómo nos presentamos.",
    candidates: [
      {
        name: "Compasión",
        desc: "Encontrarte a ti y a tu cuerpo con calidez, especialmente cuando el cambio cuesta. Fuerza: humaniza el camino. Tensión: sin un límite, la compasión puede deslizarse en silencio hacia la autocomplacencia o el quedarse pequeña.",
        Icon: Heart,
      },
      {
        name: "Respeto por Uno Mismo",
        desc: "Honrar tus propias necesidades, límites y ritmo como reales y dignos. Fuerza: protege frente a complacer a otros y darte de más. Tensión: puede rozar la rigidez o la autocrítica si se confunde con perfeccionismo.",
        Icon: UserCheck,
      },
      {
        name: "No-Daño",
        desc: "Una guía ética clara — no hacer daño al cuerpo, a la mente ni a tu relación con la comida. Fuerza: un suelo objetivo que se sostiene incluso en los días difíciles. Tensión: es más un límite que un sentimiento, así que quizá necesite compasión o respeto para darle calidez.",
        Icon: Shield,
      },
    ],
    explorationNote:
      "Nuestra inclinación actual: el No-Daño como base, con la Compasión y el Respeto por Uno Mismo entrelazados. Nos encantaría de verdad tu reflexión — ¿cuál resuena como más verdadera para ti?",
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
    missionText: [
      "A Solaris Nutri ajuda as mulheres a atravessar a meia-idade com maior consciência biológica, utilizando a nutrição, a saúde intestinal, o estilo de vida e o ritmo para reconstruir uma relação respeitosa com o seu corpo.",
      "Ajudamos as mulheres a compreender e responder aos sinais do seu corpo, desenvolver hábitos sustentáveis e reconhecer os primeiros sinais de que a sua saúde pode estar a sair do equilíbrio.",
      "O nosso objetivo não é outra dieta restritiva, mas uma abordagem mais amável e integrada da nutrição — que apoie a saúde digestiva, metabólica e global, contribuindo para a prevenção e redução do risco de doenças crónicas evitáveis como a diabetes tipo 2.",
    ],
    missionCapstone:
      "A saúde não é criada ao encontrar a dieta perfeita. Constrói-se através da relação repetida entre o que comemos, como vivemos, como nos sentimos e quão bem escutamos os sinais da nossa biologia.",
    visionLabel: "Visão",
    visionTitle: "O mundo para o qual caminhamos",
    visionText:
      "Um mundo onde as pessoas já não lutem contra o seu corpo na procura da saúde, mas aprendam a compreendê-lo, nutri-lo e respeitá-lo — vivendo em maior harmonia com a sua biologia, os seus ritmos e o seu ambiente.",
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
    explorationLabel: "Uma Pergunta em Aberto",
    explorationTitle: "Compaixão, Respeito por Si Mesmo ou Não-Dano?",
    explorationIntro:
      "Seis valores sentam-se bem. O sétimo é aquele que ainda estamos a explorar — e queremos pensá-lo com cuidado, porque o que escolhermos molda a forma como nos apresentamos.",
    candidates: [
      {
        name: "Compaixão",
        desc: "Encontrar-se a si e ao seu corpo com calor, especialmente quando a mudança custa. Força: humaniza o caminho. Tensão: sem um limite, a compaixão pode escorregar silenciosamente para a autocomplacência ou o ficar pequena.",
        Icon: Heart,
      },
      {
        name: "Respeito por Si Mesmo",
        desc: "Honrar as suas próprias necessidades, limites e ritmo como reais e dignos. Força: protege contra o agradar e o dar demasiado de si. Tensão: pode roçar a rigidez ou a autocrítica se for confundida com perfeccionismo.",
        Icon: UserCheck,
      },
      {
        name: "Não-Dano",
        desc: "Uma salvaguarda ética clara — não causar dano ao corpo, à mente ou à sua relação com a comida. Força: um chão objetivo que se mantém mesmo nos dias difíceis. Tensão: é mais um limite do que um sentimento, por isso pode precisar de compaixão ou respeito para o aquecer.",
        Icon: Shield,
      },
    ],
    explorationNote:
      "A nossa inclinação atual: o Não-Dano como base, com a Compaixão e o Respeito por Si Mesmo entrelaçados. Gostaríamos muito da sua reflexão — qual ressoa como mais verdadeira para si?",
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
                <div className="space-y-4">
                  {t.missionText.map((paragraph, i) => (
                    <p key={i} className="font-sans text-foreground/80 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
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

          {/* The Seventh Value — an open question */}
          <section aria-labelledby="exploration-heading" className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-accent font-sans text-xs tracking-wider uppercase mb-4">
                <Sparkles size={14} />
                {t.explorationLabel}
              </div>
              <h2 id="exploration-heading" className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                {t.explorationTitle}
              </h2>
              <p className="font-sans text-foreground/70 leading-relaxed">{t.explorationIntro}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {t.candidates.map((candidate, index) => {
                const Icon = candidate.Icon;
                return (
                  <div
                    key={candidate.name}
                    className="group bg-muted/20 p-8 rounded-2xl border border-accent/20 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 animate-fade-in-up flex flex-col"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <Icon className="text-accent" size={24} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-primary mb-3">{candidate.name}</h3>
                    <p className="font-sans text-sm text-foreground/75 leading-relaxed">{candidate.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-start gap-3 bg-card p-6 md:p-8 rounded-2xl border border-border">
              <MessageCircleHeart className="text-accent flex-shrink-0 mt-1" size={22} strokeWidth={1.75} />
              <p className="font-serif text-lg md:text-xl text-foreground/85 leading-relaxed italic">
                {t.explorationNote}
              </p>
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
