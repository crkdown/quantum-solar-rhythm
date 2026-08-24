import { Circle, Apple, Clock, Leaf, HeartHandshake, BrainCircuit, Fingerprint, RefreshCw, FlaskConical } from "lucide-react";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import paulaPhoto from "@/assets/paula-photo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead from "@/components/SEOHead";
import type { LucideIcon } from "lucide-react";

const About = () => {
  const { t, language } = useLanguage();

  const aboutTexts = {
    en: {
      paulaIntro: "I don't put you on another diet. I guide you into a new rhythm.",
      paulaDesc: "We start by calming your spleen and nervous system so your body feels safe. Then we introduce slow, sustainable changes that grow from consciousness, care and love for your body – not from fear and control.",
    },
    es: {
      paulaIntro: "No te pongo otra dieta. Te guío hacia un nuevo ritmo.",
      paulaDesc: "Comenzamos calmando tu bazo y sistema nervioso para que tu cuerpo se sienta seguro. Luego introducimos cambios lentos y sostenibles que crecen desde la conciencia, el cuidado y el amor por tu cuerpo – no desde el miedo y el control.",
    },
    pt: {
      paulaIntro: "Eu não te coloco em outra dieta. Eu te guio para um novo ritmo.",
      paulaDesc: "Começamos acalmando seu baço e sistema nervoso para que seu corpo se sinta seguro. Então introduzimos mudanças lentas e sustentáveis que crescem da consciência, cuidado e amor pelo seu corpo – não do medo e controle.",
    }
  };

  const currentAbout = aboutTexts[language] || aboutTexts.en;

  const values = [
    { key: 'rhythm', title: t('about.value.rhythm'), desc: t('about.value.rhythm.desc') },
    { key: 'nature', title: t('about.value.nature'), desc: t('about.value.nature.desc') },
    { key: 'integration', title: t('about.value.integration'), desc: t('about.value.integration.desc') },
    { key: 'education', title: t('about.value.education'), desc: t('about.value.education.desc') },
    { key: 'simplicity', title: t('about.value.simplicity'), desc: t('about.value.simplicity.desc') },
    { key: 'evolution', title: t('about.value.evolution'), desc: t('about.value.evolution.desc') },
    { key: 'integrity', title: t('about.value.integrity'), desc: t('about.value.integrity.desc') },
  ];

  type DifferencePoint = {
    number: string;
    title: string;
    subtitle: string;
    desc: string;
    icon: LucideIcon;
  };

  type DifferenceContent = {
    eyebrow: string;
    title: string;
    intro: string;
    context: string;
    points: DifferencePoint[];
    closingTitle: string;
    closingLine1: string;
    closingLine2: string;
    closingBrand: string;
  };

  const differenceContent: Record<string, DifferenceContent> = {
    en: {
      eyebrow: "The Solaris Nutri Difference",
      title: "WHY SOLARIS NUTRI IS DIFFERENT",
      intro: "Nutrition is not just about what you eat.",
      context: "It is about what, when, how, why — and within which biological context.",
      points: [
        {
          number: "01",
          title: "BEYOND CALORIES",
          subtitle: "Your body is not a spreadsheet.",
          desc: "We move beyond an exclusive focus on calories, macros and restriction to understand the wider physiological context of nourishment — including food quality, colour, diversity and natural variation. A plate is not simply a calculation of calories and macronutrients; the colour and diversity of whole foods can reflect a broader spectrum of phytonutrients and biologically active compounds.",
          icon: Apple,
        },
        {
          number: "02",
          title: "NUTRITION IN RHYTHM",
          subtitle: "Your biology follows rhythms.",
          desc: "The Solaris Nutri framework brings nutrition together with circadian biology, sleep, meal timing, movement, light and daily patterns.",
          icon: Clock,
        },
        {
          number: "03",
          title: "THE BODY AS AN ECOSYSTEM",
          subtitle: "Nothing happens in isolation.",
          desc: "Digestion, metabolism, microbiome, nervous-system signalling and immune function continuously communicate. We look at the connections between them.",
          icon: Leaf,
        },
        {
          number: "04",
          title: "REGULATION OVER RESTRICTION",
          subtitle: "We don't teach you to fight your body.",
          desc: "The goal is to build greater nutritional awareness, metabolic regulation and sustainable habits — without creating another cycle of control and compensation.",
          icon: HeartHandshake,
        },
        {
          number: "05",
          title: "FOOD AS INFORMATION",
          subtitle: "Food is more than calories and nutrients.",
          desc: "We consider food quality, diversity, fibre, processing, timing and the way your individual physiology responds to nourishment.",
          icon: BrainCircuit,
        },
        {
          number: "06",
          title: "PERSONAL BIOLOGY MATTERS",
          subtitle: "There is no universal perfect diet.",
          desc: "Your nutritional strategy should reflect your physiology, lifestyle, environment, life stage and individual patterns.",
          icon: Fingerprint,
        },
        {
          number: "07",
          title: "FROM STATIC DIETS TO LIVING RHYTHMS",
          subtitle: "Your needs change because your biology changes.",
          desc: "The Solaris Nutri framework explores nutrition as a dynamic process — responsive to daily rhythms, seasons, life stages and changing physiological demands.",
          icon: RefreshCw,
        },
        {
          number: "08",
          title: "SCIENCE FIRST. WHOLE-PERSON PERSPECTIVE.",
          subtitle: "Evidence and integration.",
          desc: "Solaris Nutri is grounded in nutrition science, physiology, metabolism, chronobiology, microbiome research and gut–brain physiology. The Solaris Nutri framework expands this foundation through an integrative exploration of rhythm, environment, behaviour and human biology. We distinguish established evidence from emerging research and philosophical perspectives.",
          icon: FlaskConical,
        },
      ],
      closingTitle: "THE SOLARIS NUTRI DIFFERENCE",
      closingLine1: "We don't give you another diet to follow.",
      closingLine2: "We teach you how to understand your own biology.",
      closingBrand: "Solaris Nutri — Nutrition in Rhythm.",
    },
    es: {
      eyebrow: "La Diferencia Solaris Nutri",
      title: "POR QUÉ SOLARIS NUTRI ES DIFERENTE",
      intro: "La nutrición no se trata solo de lo que comes.",
      context: "Se trata de qué, cuándo, cómo, por qué — y dentro de qué contexto biológico.",
      points: [
        {
          number: "01",
          title: "MÁS ALLÁ DE LAS CALORÍAS",
          subtitle: "Tu cuerpo no es una hoja de cálculo.",
          desc: "Vamos más allá de un enfoque exclusivo en calorías, macros y restricción para comprender el contexto fisiológico más amplio de la nutrición — incluyendo la calidad, el color, la diversidad y la variación natural de los alimentos. Un plato no es simplemente un cálculo de calorías y macronutrientes; el color y la diversidad de los alimentos integrales pueden reflejar un espectro más amplio de fitonutrientes y compuestos biológicamente activos.",
          icon: Apple,
        },
        {
          number: "02",
          title: "NUTRICIÓN EN RITMO",
          subtitle: "Tu biología sigue ritmos.",
          desc: "El marco Solaris Nutri une la nutrición con la biología circadiana, el sueño, el horario de las comidas, el movimiento, la luz y los patrones diarios.",
          icon: Clock,
        },
        {
          number: "03",
          title: "EL CUERPO COMO ECOSISTEMA",
          subtitle: "Nada ocurre de forma aislada.",
          desc: "La digestión, el metabolismo, el microbioma, la señalización del sistema nervioso y la función inmune se comunican continuamente. Observamos las conexiones entre ellos.",
          icon: Leaf,
        },
        {
          number: "04",
          title: "REGULACIÓN ANTE RESTRICCIÓN",
          subtitle: "No te enseñamos a luchar contra tu cuerpo.",
          desc: "El objetivo es construir una mayor conciencia nutricional, regulación metabólica y hábitos sostenibles — sin crear otro ciclo de control y compensación.",
          icon: HeartHandshake,
        },
        {
          number: "05",
          title: "LOS ALIMENTOS COMO INFORMACIÓN",
          subtitle: "Los alimentos son más que calorías y nutrientes.",
          desc: "Consideramos la calidad, diversidad, fibra, procesamiento y horario de los alimentos, así como la forma en que tu fisiología individual responde a la nutrición.",
          icon: BrainCircuit,
        },
        {
          number: "06",
          title: "TU BIOLOGÍA PERSONAL IMPORTA",
          subtitle: "No existe una dieta perfecta universal.",
          desc: "Tu estrategia nutricional debe reflejar tu fisiología, estilo de vida, entorno, etapa de la vida y patrones individuales.",
          icon: Fingerprint,
        },
        {
          number: "07",
          title: "DE DIETAS ESTÁTICAS A RITMOS VIVOS",
          subtitle: "Tus necesidades cambian porque tu biología cambia.",
          desc: "El marco Solaris Nutri explora la nutrición como un proceso dinámico — sensible a los ritmos diarios, las estaciones, las etapas de la vida y las demandas fisiológicas cambiantes.",
          icon: RefreshCw,
        },
        {
          number: "08",
          title: "CIENCIA PRIMERO. PERSPECTIVA DE PERSONA COMPLETA.",
          subtitle: "Evidencia e integración.",
          desc: "Solaris Nutri se fundamenta en la ciencia de la nutrición, la fisiología, el metabolismo, la cronobiología, la investigación del microbioma y la fisiología intestino-cerebro. El marco Solaris Nutri amplía esta base a través de una exploración integrativa del ritmo, el entorno, el comportamiento y la biología humana. Distinguimos la evidencia establecida de la investigación emergente y las perspectivas filosóficas.",
          icon: FlaskConical,
        },
      ],
      closingTitle: "LA DIFERENCIA SOLARIS NUTRI",
      closingLine1: "No te damos otra dieta a seguir.",
      closingLine2: "Te enseñamos a comprender tu propia biología.",
      closingBrand: "Solaris Nutri — Nutrición en Ritmo.",
    },
    pt: {
      eyebrow: "A Diferença Solaris Nutri",
      title: "POR QUE A SOLARIS NUTRI É DIFERENTE",
      intro: "A nutrição não é apenas sobre o que você come.",
      context: "Trata-se do quê, quando, como, por quê — e dentro de qual contexto biológico.",
      points: [
        {
          number: "01",
          title: "ALÉM DAS CALORIAS",
          subtitle: "Seu corpo não é uma planilha.",
          desc: "Vamos além de um foco exclusivo em calorias, macros e restrição para entender o contexto fisiológico mais amplo da nutrição — incluindo a qualidade, cor, diversidade e variação natural dos alimentos. Um prato não é simplesmente um cálculo de calorias e macronutrientes; a cor e a diversidade dos alimentos integrais podem refletir um espectro mais amplo de fitonutrientes e compostos biologicamente ativos.",
          icon: Apple,
        },
        {
          number: "02",
          title: "NUTRIÇÃO EM RITMO",
          subtitle: "Sua biologia segue ritmos.",
          desc: "A estrutura Solaris Nutri une a nutrição à biologia circadiana, sono, horário das refeições, movimento, luz e padrões diários.",
          icon: Clock,
        },
        {
          number: "03",
          title: "O CORPO COMO ECOSISTEMA",
          subtitle: "Nada acontece de forma isolada.",
          desc: "Digestão, metabolismo, microbioma, sinalização do sistema nervoso e função imune se comunicam continuamente. Observamos as conexões entre eles.",
          icon: Leaf,
        },
        {
          number: "04",
          title: "REGULAÇÃO EM VEZ DE RESTRIÇÃO",
          subtitle: "Não te ensinamos a lutar contra o seu corpo.",
          desc: "O objetivo é construir uma maior consciência nutricional, regulação metabólica e hábitos sustentáveis — sem criar outro ciclo de controle e compensação.",
          icon: HeartHandshake,
        },
        {
          number: "05",
          title: "COMIDA COMO INFORMAÇÃO",
          subtitle: "A comida é mais do que calorias e nutrientes.",
          desc: "Consideramos a qualidade, diversidade, fibra, processamento e horário dos alimentos, assim como a forma como a sua fisiologia individual responde à nutrição.",
          icon: BrainCircuit,
        },
        {
          number: "06",
          title: "A BIOLOGIA PESSOAL IMPORTA",
          subtitle: "Não existe uma dieta perfeita universal.",
          desc: "A sua estratégia nutricional deve refletir a sua fisiologia, estilo de vida, ambiente, etapa da vida e padrões individuais.",
          icon: Fingerprint,
        },
        {
          number: "07",
          title: "DE DIETAS ESTÁTICAS A RITMOS VIVOS",
          subtitle: "As tuas necessidades mudam porque a tua biologia muda.",
          desc: "A estrutura Solaris Nutri explora a nutrição como um processo dinâmico — responsivo aos ritmos diários, estações, etapas da vida e demandas fisiológicas em mudança.",
          icon: RefreshCw,
        },
        {
          number: "08",
          title: "CIÊNCIA PRIMEIRO. PERSPECTIVA DA PESSOA INTEIRA.",
          subtitle: "Evidência e integração.",
          desc: "A Solaris Nutri tem base na ciência da nutrição, fisiologia, metabolismo, cronobiologia, investigação do microbioma e fisiologia intestino-cérebro. A estrutura Solaris Nutri expande essa base através de uma exploração integrativa do ritmo, ambiente, comportamento e biologia humana. Distinguimos a evidência estabelecida da investigação emergente e das perspectivas filosóficas.",
          icon: FlaskConical,
        },
      ],
      closingTitle: "A DIFERENÇA SOLARIS NUTRI",
      closingLine1: "Não te damos outra dieta para seguir.",
      closingLine2: "Ensinamos-te a compreender a tua própria biologia.",
      closingBrand: "Solaris Nutri — Nutrição em Ritmo.",
    },
  };

  const currentDifference = differenceContent[language] || differenceContent.en;

  return (
    <div className="min-h-screen py-24">
      <SEOHead
        title="About Paula Suescun"
        description="Meet Paula Suescun, founder of Solaris Nutri. A nutritionist bridging science, Anthroposophy and TCM to help you regain metabolic balance through rhythm-based nutrition."
        path="/about"
        keywords="Paula Suescun, holistic nutritionist, rhythm nutrition practitioner, Solaris Nutri founder"
      />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Solaris Nutri" className="h-20 w-20 logo-circle object-cover" />
            </div>
            <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
              <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
              {t('about.badge')}
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
              {t('about.title')}
            </h1>
          </div>

          {/* About Paula Section */}
          <div className="mb-16 animate-fade-in-up">
            <div className="bg-card p-8 md:p-12 rounded-lg border border-border shadow-subtle-glow">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img 
                    src={paulaPhoto} 
                    alt="Paula Suescun" 
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-quantum border-4 border-accent/20"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-serif text-3xl font-bold text-primary mb-4">Paula Suescun</h2>
                  <p className="font-serif text-xl text-accent italic mb-4">
                    &ldquo;{currentAbout.paulaIntro}&rdquo;
                  </p>
                  <p className="font-sans text-foreground/80 leading-relaxed mb-4">
                    {currentAbout.paulaDesc}
                  </p>
                  <p className="font-sans text-foreground/70 leading-relaxed">
                    {t('about.story1')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Continuation */}
          <div className="prose prose-lg max-w-none space-y-8 animate-fade-in-up">
            <div className="bg-muted/20 p-8 md:p-10 rounded-lg border border-border">
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                {t('about.story2')}
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-muted/30 p-8 rounded-lg border border-border animate-fade-in-up">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                {t('about.approach')}
              </h3>
              <ul className="space-y-3 font-sans text-foreground/80">
                {['about.approach1', 'about.approach2', 'about.approach3', 'about.approach4'].map((key) => (
                  <li key={key} className="flex items-start gap-2">
                    <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border border-border animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                {t('about.credentials')}
              </h3>
              <ul className="space-y-3 font-sans text-foreground/80">
                {['about.cred1', 'about.cred2', 'about.cred3', 'about.cred4'].map((key) => (
                  <li key={key} className="flex items-start gap-2">
                    <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="font-serif text-3xl font-semibold text-primary text-center mb-10">
              {t('about.values')}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-accent/5 p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Circle size={8} fill="currentColor" className="text-accent" />
                    <h4 className="font-serif text-lg font-semibold text-primary">{value.title}</h4>
                  </div>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
