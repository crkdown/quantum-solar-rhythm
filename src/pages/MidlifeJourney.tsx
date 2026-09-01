import { Link } from "react-router-dom";
import {
  ArrowRight,
  Circle,
  Sun,
  Sunrise,
  Moon,
  HeartPulse,
  Flame,
  Leaf,
  Scale,
  Brain,
  Utensils,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead from "@/components/SEOHead";
import NewsletterSignup from "@/components/NewsletterSignup";

type Lang = "en" | "es" | "pt";

interface Stage {
  phase: string;
  name: string;
  body: string;
  support: string;
  Icon: LucideIcon;
}

interface Signal {
  text: string;
  Icon: LucideIcon;
}

interface Copy {
  badge: string;
  title: string;
  intro: string;
  missionLabel: string;
  missionTitle: string;
  missionText: string[];
  healthSentence: string;
  signalsLabel: string;
  signalsTitle: string;
  signalsIntro: string;
  signals: Signal[];
  stagesLabel: string;
  stagesTitle: string;
  stagesIntro: string;
  stages: Stage[];
  supportLabel: string;
  notLabel: string;
  narrativeTitle: string;
  narrative: string[];
  closingTitle: string;
  closingText: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

const copy: Record<Lang, Copy> = {
  en: {
    badge: "The Midlife Journey",
    title: "Midlife is not a decline. It is a change of rhythm.",
    intro:
      "Solaris Nutri helps women stop fighting their bodies and start understanding them — using food, gut health and biological rhythms to create sustainable change through midlife.",
    missionLabel: "Mission",
    missionTitle: "What we are here to do",
    missionText: [
      "Solaris Nutri helps women navigate midlife with greater biological awareness, using nutrition, gut health, lifestyle and rhythm to rebuild a respectful relationship with their bodies.",
      "We help women understand and respond to their body's signals, develop sustainable habits and recognise early signs that their health may be moving out of balance.",
      "Our aim is not another restrictive diet, but a kinder and more integrated approach to nourishment — supporting digestive, metabolic and overall health while contributing to the prevention and reduction of risk for preventable chronic diseases such as type 2 diabetes.",
    ],
    healthSentence:
      "Health is not created by finding the perfect diet. It is built through the repeated relationship between what we eat, how we live, how we feel, and how well we listen to the signals of our biology.",
    signalsLabel: "Sound familiar?",
    signalsTitle: "The signals women bring to me",
    signalsIntro:
      "Nothing dramatic happened. The same habits simply stopped producing the same results — and every diet you try seems to work for someone else.",
    signals: [
      { text: "Weight settles differently, especially around the middle, despite eating the same way.", Icon: Scale },
      { text: "Energy dips hard in the afternoon and returns, unhelpfully, at night.", Icon: Flame },
      { text: "Sleep is lighter, shorter, or interrupted at 3am.", Icon: Moon },
      { text: "Digestion feels slower, more bloated, less predictable.", Icon: Utensils },
      { text: "Focus and mood fluctuate in ways that feel unfamiliar.", Icon: Brain },
      { text: "Blood markers begin to drift — glucose, lipids, blood pressure.", Icon: HeartPulse },
    ],
    stagesLabel: "The stages",
    stagesTitle: "Four seasons of the midlife transition",
    stagesIntro:
      "Midlife is not one event. It unfolds over years, and each stage asks something different of your nourishment and your rhythm.",
    stages: [
      {
        phase: "01",
        name: "The early shift",
        body:
          "Cycles are still regular but subtly changing. Sleep becomes lighter, recovery slower, and stress lands harder than it used to. Most women are told nothing is wrong — and technically, nothing is.",
        support:
          "We build the foundations early: morning light, a consistent first meal, protein and fibre at every meal, and a real end to the eating day.",
        Icon: Sunrise,
      },
      {
        phase: "02",
        name: "Perimenopause",
        body:
          "Hormones fluctuate rather than fall in a straight line. Insulin sensitivity, gut motility and temperature regulation all become more reactive. This is where old diet rules break down most visibly.",
        support:
          "We stabilise blood sugar rhythm, support the gut and liver in clearing hormones, and protect sleep as a metabolic intervention rather than a luxury.",
        Icon: Flame,
      },
      {
        phase: "03",
        name: "Menopause",
        body:
          "The transition completes. Bone, muscle and cardiovascular health move to the centre, and metabolic risk quietly rises for many women.",
        support:
          "We prioritise protein adequacy, resistance-friendly nourishment, mineral density, and early recognition of drifting metabolic markers.",
        Icon: Sun,
      },
      {
        phase: "04",
        name: "Post-menopause and beyond",
        body:
          "The goal shifts from managing symptoms to building decades of function: strength, cognition, glucose stability, and a digestive system that still works for you.",
        support:
          "We consolidate what already works into a rhythm you no longer have to think about — habits that hold without supervision.",
        Icon: Leaf,
      },
    ],
    supportLabel: "How Solaris Nutri supports this stage",
    notLabel: "What changes",
    narrativeTitle: "Why rhythm, and not another diet",
    narrative: [
      "Most nutrition advice treats the body as a machine with a fuel setting. But the same meal eaten at 8am and at 10pm does not do the same thing to your glucose, your digestion or your sleep. Timing is information, and midlife makes your body far more sensitive to that information.",
      "So instead of a stricter plan, we work with the signals you already have: when you wake, when light reaches your eyes, when you eat your first and last meal, how your digestion responds, how you sleep, how you recover. These are the levers that still work when calorie-counting has stopped working.",
      "The result is not a protocol you follow forever. It is an understanding of your own biology that you can adapt as your life and your body keep changing.",
    ],
    closingTitle: "You do not need more discipline. You need better information.",
    closingText:
      "If your metabolism and energy seem to have changed despite trying different diets, that is not a personal failure — it is a rhythm that needs rebuilding.",
    ctaPrimary: "Explore the programs",
    ctaSecondary: "Take the free assessment",
  },
  es: {
    badge: "El Camino de la Mediana Edad",
    title: "La mediana edad no es un declive. Es un cambio de ritmo.",
    intro:
      "Solaris Nutri ayuda a las mujeres a dejar de luchar contra su cuerpo y empezar a entenderlo — con alimentación, salud intestinal y ritmos biológicos para crear un cambio sostenible en la mediana edad.",
    missionLabel: "Misión",
    missionTitle: "Para qué existimos",
    missionText: [
      "Solaris Nutri ayuda a las mujeres a atravesar la mediana edad con mayor conciencia biológica, usando nutrición, salud intestinal, estilo de vida y ritmo para reconstruir una relación respetuosa con su cuerpo.",
      "Ayudamos a las mujeres a entender y responder a las señales de su cuerpo, a desarrollar hábitos sostenibles y a reconocer los primeros signos de que su salud puede estar saliéndose del equilibrio.",
      "Nuestro objetivo no es otra dieta restrictiva, sino un enfoque más amable e integrado de la nutrición — apoyando la salud digestiva, metabólica y general, y contribuyendo a la prevención y reducción del riesgo de enfermedades crónicas prevenibles como la diabetes tipo 2.",
    ],
    healthSentence:
      "La salud no se crea encontrando la dieta perfecta. Se construye a través de la relación repetida entre lo que comemos, cómo vivimos, cómo nos sentimos y con cuánta atención escuchamos las señales de nuestra biología.",
    signalsLabel: "¿Te suena?",
    signalsTitle: "Las señales que traen las mujeres",
    signalsIntro:
      "No pasó nada dramático. Simplemente los mismos hábitos dejaron de dar los mismos resultados — y cada dieta que pruebas parece funcionarle a otra persona.",
    signals: [
      { text: "El peso se acomoda distinto, sobre todo en el abdomen, comiendo igual que siempre.", Icon: Scale },
      { text: "La energía cae por la tarde y vuelve, inoportuna, por la noche.", Icon: Flame },
      { text: "El sueño es más ligero, más corto o se interrumpe a las 3 de la madrugada.", Icon: Moon },
      { text: "La digestión se siente más lenta, más hinchada, menos predecible.", Icon: Utensils },
      { text: "La concentración y el ánimo fluctúan de formas poco familiares.", Icon: Brain },
      { text: "Los marcadores empiezan a moverse: glucosa, lípidos, tensión arterial.", Icon: HeartPulse },
    ],
    stagesLabel: "Las etapas",
    stagesTitle: "Cuatro estaciones de la transición",
    stagesIntro:
      "La mediana edad no es un solo evento. Se despliega durante años, y cada etapa pide algo distinto a tu nutrición y a tu ritmo.",
    stages: [
      {
        phase: "01",
        name: "El primer cambio",
        body:
          "Los ciclos siguen siendo regulares pero cambian sutilmente. El sueño se aligera, la recuperación se vuelve más lenta y el estrés pesa más que antes. A la mayoría se le dice que no pasa nada — y técnicamente, no pasa nada.",
        support:
          "Construimos las bases pronto: luz matinal, una primera comida consistente, proteína y fibra en cada comida, y un cierre real del día alimentario.",
        Icon: Sunrise,
      },
      {
        phase: "02",
        name: "Perimenopausia",
        body:
          "Las hormonas fluctúan en lugar de bajar en línea recta. La sensibilidad a la insulina, la motilidad intestinal y la regulación térmica se vuelven más reactivas. Aquí es donde las viejas reglas dietéticas se rompen.",
        support:
          "Estabilizamos el ritmo de glucosa, apoyamos al intestino y al hígado en la depuración hormonal, y protegemos el sueño como intervención metabólica, no como lujo.",
        Icon: Flame,
      },
      {
        phase: "03",
        name: "Menopausia",
        body:
          "La transición se completa. La salud ósea, muscular y cardiovascular pasan al centro, y el riesgo metabólico sube silenciosamente para muchas mujeres.",
        support:
          "Priorizamos proteína suficiente, nutrición que acompañe la fuerza, densidad mineral y detección temprana de marcadores que se desvían.",
        Icon: Sun,
      },
      {
        phase: "04",
        name: "Posmenopausia y más allá",
        body:
          "El objetivo pasa de manejar síntomas a construir décadas de función: fuerza, cognición, estabilidad de glucosa y una digestión que siga trabajando a tu favor.",
        support:
          "Consolidamos lo que ya funciona en un ritmo que no tienes que pensar — hábitos que se sostienen sin supervisión.",
        Icon: Leaf,
      },
    ],
    supportLabel: "Cómo acompaña Solaris Nutri esta etapa",
    notLabel: "Qué cambia",
    narrativeTitle: "Por qué ritmo, y no otra dieta",
    narrative: [
      "La mayoría de los consejos nutricionales tratan al cuerpo como una máquina con un ajuste de combustible. Pero la misma comida a las 8 de la mañana y a las 10 de la noche no hace lo mismo con tu glucosa, tu digestión o tu sueño. El horario es información, y la mediana edad hace a tu cuerpo mucho más sensible a esa información.",
      "Así que en lugar de un plan más estricto, trabajamos con las señales que ya tienes: cuándo despiertas, cuándo la luz llega a tus ojos, cuándo haces la primera y la última comida, cómo responde tu digestión, cómo duermes, cómo te recuperas. Estas son las palancas que siguen funcionando cuando contar calorías ya no funciona.",
      "El resultado no es un protocolo para siempre. Es la comprensión de tu propia biología, que puedes adaptar mientras tu vida y tu cuerpo siguen cambiando.",
    ],
    closingTitle: "No necesitas más disciplina. Necesitas mejor información.",
    closingText:
      "Si tu metabolismo y tu energía parecen haber cambiado a pesar de probar distintas dietas, eso no es un fracaso personal — es un ritmo que necesita reconstruirse.",
    ctaPrimary: "Ver los programas",
    ctaSecondary: "Hacer la evaluación gratuita",
  },
  pt: {
    badge: "A Jornada da Meia-Idade",
    title: "A meia-idade não é um declínio. É uma mudança de ritmo.",
    intro:
      "A Solaris Nutri ajuda mulheres a deixarem de lutar contra o seu corpo e a começarem a compreendê-lo — com alimentação, saúde intestinal e ritmos biológicos para criar mudança sustentável na meia-idade.",
    missionLabel: "Missão",
    missionTitle: "Para que existimos",
    missionText: [
      "A Solaris Nutri ajuda mulheres a atravessar a meia-idade com maior consciência biológica, usando nutrição, saúde intestinal, estilo de vida e ritmo para reconstruir uma relação respeitosa com o seu corpo.",
      "Ajudamos as mulheres a compreender e responder aos sinais do corpo, a desenvolver hábitos sustentáveis e a reconhecer sinais precoces de que a sua saúde pode estar a sair do equilíbrio.",
      "O nosso objetivo não é mais uma dieta restritiva, mas uma abordagem mais gentil e integrada da nutrição — apoiando a saúde digestiva, metabólica e geral, contribuindo para a prevenção e redução do risco de doenças crónicas evitáveis como a diabetes tipo 2.",
    ],
    healthSentence:
      "A saúde não se cria encontrando a dieta perfeita. Constrói-se através da relação repetida entre o que comemos, como vivemos, como nos sentimos e o quanto escutamos os sinais da nossa biologia.",
    signalsLabel: "Soa familiar?",
    signalsTitle: "Os sinais que as mulheres trazem",
    signalsIntro:
      "Nada de dramático aconteceu. Simplesmente os mesmos hábitos deixaram de dar os mesmos resultados — e cada dieta que experimenta parece funcionar para outra pessoa.",
    signals: [
      { text: "O peso distribui-se de outra forma, sobretudo na zona abdominal, comendo o mesmo.", Icon: Scale },
      { text: "A energia cai à tarde e regressa, inoportuna, à noite.", Icon: Flame },
      { text: "O sono é mais leve, mais curto ou interrompido às 3 da manhã.", Icon: Moon },
      { text: "A digestão parece mais lenta, mais inchada, menos previsível.", Icon: Utensils },
      { text: "A concentração e o humor oscilam de formas pouco familiares.", Icon: Brain },
      { text: "Os marcadores começam a desviar-se: glicose, lípidos, tensão arterial.", Icon: HeartPulse },
    ],
    stagesLabel: "As etapas",
    stagesTitle: "Quatro estações da transição",
    stagesIntro:
      "A meia-idade não é um único acontecimento. Desenrola-se ao longo de anos, e cada etapa pede algo diferente à sua nutrição e ao seu ritmo.",
    stages: [
      {
        phase: "01",
        name: "A primeira mudança",
        body:
          "Os ciclos ainda são regulares mas mudam subtilmente. O sono fica mais leve, a recuperação mais lenta e o stress pesa mais do que antes. À maioria diz-se que não há nada de errado — e tecnicamente não há.",
        support:
          "Construímos as bases cedo: luz da manhã, uma primeira refeição consistente, proteína e fibra em cada refeição, e um verdadeiro fim do dia alimentar.",
        Icon: Sunrise,
      },
      {
        phase: "02",
        name: "Perimenopausa",
        body:
          "As hormonas oscilam em vez de descer em linha reta. A sensibilidade à insulina, a motilidade intestinal e a regulação térmica tornam-se mais reativas. É aqui que as velhas regras alimentares falham.",
        support:
          "Estabilizamos o ritmo da glicose, apoiamos o intestino e o fígado na depuração hormonal, e protegemos o sono como intervenção metabólica, não como luxo.",
        Icon: Flame,
      },
      {
        phase: "03",
        name: "Menopausa",
        body:
          "A transição completa-se. A saúde óssea, muscular e cardiovascular passam para o centro, e o risco metabólico sobe silenciosamente para muitas mulheres.",
        support:
          "Priorizamos proteína suficiente, nutrição que acompanha a força, densidade mineral e deteção precoce de marcadores em desvio.",
        Icon: Sun,
      },
      {
        phase: "04",
        name: "Pós-menopausa e além",
        body:
          "O objetivo passa de gerir sintomas para construir décadas de função: força, cognição, estabilidade da glicose e uma digestão que continua a trabalhar a seu favor.",
        support:
          "Consolidamos o que já funciona num ritmo em que já não precisa de pensar — hábitos que se mantêm sem supervisão.",
        Icon: Leaf,
      },
    ],
    supportLabel: "Como a Solaris Nutri acompanha esta etapa",
    notLabel: "O que muda",
    narrativeTitle: "Porquê ritmo, e não mais uma dieta",
    narrative: [
      "A maioria dos conselhos nutricionais trata o corpo como uma máquina com uma definição de combustível. Mas a mesma refeição às 8 da manhã e às 22 horas não faz o mesmo à sua glicose, à sua digestão ou ao seu sono. O horário é informação, e a meia-idade torna o corpo muito mais sensível a essa informação.",
      "Por isso, em vez de um plano mais rígido, trabalhamos com os sinais que já tem: quando acorda, quando a luz chega aos seus olhos, quando faz a primeira e a última refeição, como responde a digestão, como dorme, como recupera. São estas as alavancas que continuam a funcionar quando contar calorias deixou de funcionar.",
      "O resultado não é um protocolo para sempre. É a compreensão da sua própria biologia, que pode adaptar enquanto a sua vida e o seu corpo continuam a mudar.",
    ],
    closingTitle: "Não precisa de mais disciplina. Precisa de melhor informação.",
    closingText:
      "Se o seu metabolismo e a sua energia parecem ter mudado apesar de várias dietas, isso não é um fracasso pessoal — é um ritmo que precisa de ser reconstruído.",
    ctaPrimary: "Ver os programas",
    ctaSecondary: "Fazer a avaliação gratuita",
  },
};

const MidlifeJourney = () => {
  const { language } = useLanguage();
  const t = copy[language as Lang] || copy.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Midlife Journey | Solaris Nutri",
    description:
      "How midlife changes metabolism, energy, sleep and digestion — and how Solaris Nutri supports women through each stage with rhythm-based nutrition.",
    url: "https://solarisnutri-com.lovable.app/midlife-journey",
    isPartOf: {
      "@type": "WebSite",
      name: "Solaris Nutri",
      url: "https://solarisnutri-com.lovable.app",
    },
    about: {
      "@type": "MedicalCondition",
      name: "Perimenopause and menopause metabolic health",
    },
  };

  return (
    <div className="min-h-screen py-24">
      <SEOHead
        title="The Midlife Journey"
        description="Midlife changes metabolism, energy, sleep and digestion. See the four stages of the transition and how Solaris Nutri rebuilds nutrition around your biological rhythms."
        path="/midlife-journey"
        keywords="midlife nutrition, perimenopause metabolism, menopause energy, women midlife gut health, circadian nutrition midlife"
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

          {/* Mission */}
          <section aria-labelledby="midlife-mission" className="mb-20">
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-subtle-glow animate-fade-in-up">
              <div className="inline-flex items-center gap-2 text-accent font-sans text-xs tracking-wider uppercase mb-4">
                <Circle size={8} fill="currentColor" />
                {t.missionLabel}
              </div>
              <h2 id="midlife-mission" className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-5">
                {t.missionTitle}
              </h2>
              <div className="space-y-4 max-w-3xl">
                {t.missionText.map((paragraph, i) => (
                  <p key={i} className="font-sans text-foreground/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-8 pt-8 border-t border-border/60 font-serif text-lg md:text-xl italic text-primary/90 leading-relaxed max-w-3xl">
                {t.healthSentence}
              </p>
            </div>
          </section>

          {/* Signals */}
          <section aria-labelledby="midlife-signals" className="mb-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-accent font-sans text-xs tracking-wider uppercase mb-3">
                <Sparkles size={14} />
                {t.signalsLabel}
              </div>
              <h2 id="midlife-signals" className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                {t.signalsTitle}
              </h2>
              <p className="font-sans text-foreground/75 max-w-2xl mx-auto leading-relaxed">
                {t.signalsIntro}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.signals.map(({ text, Icon }) => (
                <div
                  key={text}
                  className="bg-card p-6 rounded-xl border border-border hover:shadow-subtle-glow transition-shadow"
                >
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <p className="font-sans text-sm text-foreground/80 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stages */}
          <section aria-labelledby="midlife-stages" className="mb-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-accent font-sans text-xs tracking-wider uppercase mb-3">
                <Circle size={8} fill="currentColor" />
                {t.stagesLabel}
              </div>
              <h2 id="midlife-stages" className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                {t.stagesTitle}
              </h2>
              <p className="font-sans text-foreground/75 max-w-2xl mx-auto leading-relaxed">
                {t.stagesIntro}
              </p>
            </div>
            <div className="space-y-6">
              {t.stages.map(({ phase, name, body, support, Icon }) => (
                <article
                  key={phase}
                  className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-subtle-glow"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-4 md:flex-col md:items-center md:w-24 flex-shrink-0">
                      <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon size={24} className="text-accent" />
                      </div>
                      <span className="font-serif text-2xl text-primary/40">{phase}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-semibold text-primary mb-3">{name}</h3>
                      <p className="font-sans text-foreground/80 leading-relaxed mb-5">{body}</p>
                      <div className="bg-muted/40 border-l-2 border-accent rounded-r-lg p-5">
                        <p className="font-sans text-xs tracking-wider uppercase text-accent mb-2">
                          {t.supportLabel}
                        </p>
                        <p className="font-sans text-sm text-foreground/80 leading-relaxed">{support}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Narrative */}
          <section aria-labelledby="midlife-narrative" className="mb-20">
            <div className="bg-muted/30 border border-border rounded-2xl p-8 md:p-12">
              <h2 id="midlife-narrative" className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                {t.narrativeTitle}
              </h2>
              <div className="space-y-5 max-w-3xl">
                {t.narrative.map((paragraph, i) => (
                  <p key={i} className="font-sans text-foreground/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <div className="mb-20">
            <NewsletterSignup source="midlife-journey" />
          </div>

          {/* Closing CTA */}
          <section aria-labelledby="midlife-closing" className="text-center">
            <h2 id="midlife-closing" className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              {t.closingTitle}
            </h2>
            <p className="font-sans text-foreground/75 max-w-2xl mx-auto leading-relaxed mb-8">
              {t.closingText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/programs">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-sans">
                  {t.ctaPrimary}
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/food-rhythm-tool">
                <Button size="lg" variant="outline" className="font-sans">
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

export default MidlifeJourney;
