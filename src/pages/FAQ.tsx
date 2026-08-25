import { Circle, HelpCircle, XCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import SEOHead from "@/components/SEOHead";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useLanguage } from "@/contexts/LanguageContext";

const copy = {
  en: {
    badge: "Questions",
    title: "Frequently Asked Questions",
    subtitle:
      "Everything you may want to know before we work together — including an honest look at who this method is not for.",
    notForTitle: "Who this method is NOT for",
    notForIntro:
      "The Solaris Nutri Method isn't for you if you're looking for another diet, a rigid meal plan, rapid weight loss, a supplement protocol or a quick fix.",
    forIntro:
      "It's for you if you're still functioning — but your body is beginning to tell you that the way you've been living isn't sustainable anymore.",
    notFor: [
      {
        q: "Someone looking for a quick weight-loss program",
        a: "If your main request is \"I want to lose 5 kg in four weeks\", this isn't the right fit. The method isn't built around rapid weight loss, calorie restriction or aggressive dieting.",
      },
      {
        q: "Someone who wants a rigid meal plan",
        a: "If you want to be told exactly what to eat Monday to Sunday, this isn't it. The work teaches biological literacy and self-regulation instead of creating dependency on a prescribed menu.",
      },
      {
        q: "Someone who wants to count everything",
        a: "If your preferred approach is calories plus macros plus weighing every ingredient with rigid targets, this may frustrate you. Quantitative nutrition is still used when it's clinically useful — this is not anti-calorie or anti-data — but measurement shouldn't become the centre of your relationship with food.",
      },
      {
        q: "Someone looking for a supplement solution",
        a: "\"Just tell me which supplements will fix my cortisol, gut or hormones\" isn't how this works. Supplements can have a role, but they are supporting tools, not the method.",
      },
      {
        q: "Someone who wants a detox or cleanse",
        a: "If you want a 7-day cleanse to reset everything, this is a different philosophy: rhythm restoration rather than detox culture.",
      },
      {
        q: "Someone who isn't willing to look at their lifestyle rhythms",
        a: "This is perhaps the most important exclusion. If sleep, meal timing, movement, recovery and daily habits are off the table and you only want a food list, the method won't work well — because the context is part of the intervention.",
      },
      {
        q: "Someone who wants a diagnosis or treatment for disease",
        a: "This work does not position itself as an alternative to medical care. Significant or unexplained symptoms may need medical investigation first, or alongside nutritional work. My role is nutrition, education, behaviour, lifestyle and physiological context — not replacing your physician, gastroenterologist, endocrinologist or psychiatrist.",
      },
      {
        q: "Someone looking for \"energy healing\" or miracle claims",
        a: "If you're expecting that energy alone will heal your body, this isn't the place. The method does not claim that physics explains every health phenomenon, and it never substitutes for medical treatment. Everything here is grounded in chronobiology, nutrition science and lived clinical practice.",
      },
      {
        q: "Someone who wants perfection",
        a: "My ideal client isn't the woman who wants to optimise every biomarker, supplement, meal and wearable score. The philosophy is: enough regulation to create resilience — not endless optimisation.",
      },
    ],
    generalTitle: "Other common questions",
    general: [
      {
        q: "Who do you usually work with?",
        a: "Women in midlife whose metabolism and energy seem to have changed despite trying different diets. I help them understand their biological rhythms and rebuild their nutrition around them.",
      },
      {
        q: "How often do we meet?",
        a: "Twice-monthly 1:1 sessions (2 per month) throughout your program, with support and adjustments in between.",
      },
      {
        q: "Do I have to give up foods I love?",
        a: "No. We work with timing, quality and rhythm first. Restriction is not the mechanism — alignment is.",
      },
      {
        q: "In which languages do you work?",
        a: "Consultations are available in English, Spanish and Portuguese.",
      },
      {
        q: "How long before I notice something?",
        a: "Most people notice changes in digestion, energy stability and sleep within the first weeks. Deeper metabolic change takes a full program cycle.",
      },
      {
        q: "Is this a replacement for medical care?",
        a: "No. It complements medical care. Keep your doctor in the loop, especially if you have a diagnosed condition or take medication.",
      },
      {
        q: "How do I start?",
        a: "Book a free assessment call. There's no pressure and no sales tactics — we'll see whether this is a good fit for you.",
      },
    ],
    ctaTitle: "Still wondering if this is for you?",
    ctaDesc: "Book a free assessment call and let's find out together.",
    ctaBtn: "Book a Free Assessment Call",
  },
  es: {
    badge: "Preguntas",
    title: "Preguntas Frecuentes",
    subtitle:
      "Todo lo que quizás quieras saber antes de trabajar juntas — incluida una mirada honesta a para quién NO es este método.",
    notForTitle: "Para quién NO es este método",
    notForIntro:
      "El Método Solaris Nutri no es para ti si buscas otra dieta, un plan de comidas rígido, pérdida de peso rápida, un protocolo de suplementos o una solución rápida.",
    forIntro:
      "Es para ti si todavía funcionas — pero tu cuerpo empieza a decirte que la forma en que has estado viviendo ya no es sostenible.",
    notFor: [
      {
        q: "Alguien que busca un programa rápido de pérdida de peso",
        a: "Si tu petición principal es \"quiero perder 5 kg en cuatro semanas\", este no es el lugar. El método no se construye sobre la pérdida de peso rápida, la restricción calórica ni las dietas agresivas.",
      },
      {
        q: "Alguien que quiere un plan de comidas rígido",
        a: "Si quieres que te digan exactamente qué comer de lunes a domingo, esto no es para ti. Aquí se enseña alfabetización biológica y autorregulación, no dependencia de un menú prescrito.",
      },
      {
        q: "Alguien que quiere contarlo todo",
        a: "Si tu enfoque preferido son calorías, macros, pesar cada ingrediente y objetivos rígidos, esto puede frustrarte. La nutrición cuantitativa se usa cuando es clínicamente útil — no estoy en contra de los datos — pero medir no debería convertirse en el centro de tu relación con la comida.",
      },
      {
        q: "Alguien que busca una solución con suplementos",
        a: "\"Dime qué suplementos arreglan mi cortisol, mi intestino o mis hormonas\" no es la forma de trabajar. Los suplementos pueden tener un papel, pero son herramientas de apoyo, no el método.",
      },
      {
        q: "Alguien que quiere un detox o una limpieza",
        a: "Si buscas una limpieza de 7 días para reiniciarlo todo, la filosofía aquí es distinta: restauración del ritmo en lugar de cultura detox.",
      },
      {
        q: "Alguien que no está dispuesta a revisar sus ritmos de vida",
        a: "Quizá la exclusión más importante. Si el sueño, los horarios de comida, el movimiento, la recuperación y los hábitos diarios están fuera de la conversación y solo quieres una lista de alimentos, el método no funcionará bien — porque el contexto es parte de la intervención.",
      },
      {
        q: "Alguien que busca diagnóstico o tratamiento de enfermedades",
        a: "Este trabajo no se plantea como alternativa a la atención médica. Los síntomas importantes o inexplicados pueden necesitar investigación médica antes o en paralelo. Mi papel es nutrición, educación, comportamiento, estilo de vida y contexto fisiológico — no sustituir a tu médico, gastroenterólogo, endocrinólogo o psiquiatra.",
      },
      {
        q: "Alguien que busca \"sanación energética\" o promesas milagrosas",
        a: "Si esperas que la energía por sí sola cure tu cuerpo, este no es el lugar. El método no afirma que la física explique todo fenómeno de salud, ni sustituye el tratamiento médico. Todo aquí se apoya en cronobiología, ciencia nutricional y práctica clínica real.",
      },
      {
        q: "Alguien que busca la perfección",
        a: "Mi cliente ideal no es la mujer que quiere optimizar cada biomarcador, suplemento, comida y métrica de su reloj. La filosofía es: suficiente regulación para crear resiliencia — no optimización infinita.",
      },
    ],
    generalTitle: "Otras preguntas frecuentes",
    general: [
      {
        q: "¿Con quién trabajas habitualmente?",
        a: "Mujeres en la mediana edad cuyo metabolismo y energía parecen haber cambiado a pesar de probar distintas dietas. Las ayudo a entender sus ritmos biológicos y a reconstruir su nutrición en torno a ellos.",
      },
      {
        q: "¿Con qué frecuencia nos vemos?",
        a: "Sesiones 1:1 dos veces al mes (2 por mes) durante todo el programa, con acompañamiento y ajustes entre sesiones.",
      },
      {
        q: "¿Tengo que renunciar a los alimentos que amo?",
        a: "No. Trabajamos primero con el momento, la calidad y el ritmo. La restricción no es el mecanismo — la alineación sí.",
      },
      {
        q: "¿En qué idiomas trabajas?",
        a: "Las consultas están disponibles en inglés, español y portugués.",
      },
      {
        q: "¿Cuánto tardo en notar algo?",
        a: "La mayoría nota cambios en digestión, estabilidad de energía y sueño en las primeras semanas. El cambio metabólico profundo requiere un ciclo completo del programa.",
      },
      {
        q: "¿Sustituye esto a la atención médica?",
        a: "No. La complementa. Mantén informado a tu médico, sobre todo si tienes un diagnóstico o tomas medicación.",
      },
      {
        q: "¿Cómo empiezo?",
        a: "Reserva una llamada de evaluación gratuita. Sin presión ni tácticas de venta — veremos juntas si encaja contigo.",
      },
    ],
    ctaTitle: "¿Todavía dudas si es para ti?",
    ctaDesc: "Reserva una llamada de evaluación gratuita y lo descubrimos juntas.",
    ctaBtn: "Reservar llamada gratuita",
  },
  pt: {
    badge: "Perguntas",
    title: "Perguntas Frequentes",
    subtitle:
      "Tudo o que talvez queira saber antes de trabalharmos juntas — incluindo um olhar honesto sobre para quem este método NÃO é.",
    notForTitle: "Para quem este método NÃO é",
    notForIntro:
      "O Método Solaris Nutri não é para si se procura mais uma dieta, um plano alimentar rígido, perda de peso rápida, um protocolo de suplementos ou uma solução rápida.",
    forIntro:
      "É para si se ainda funciona — mas o seu corpo começa a dizer-lhe que a forma como tem vivido já não é sustentável.",
    notFor: [
      {
        q: "Alguém que procura um programa rápido de perda de peso",
        a: "Se o pedido principal é \"quero perder 5 kg em quatro semanas\", não é o lugar certo. O método não se baseia em perda de peso rápida, restrição calórica ou dietas agressivas.",
      },
      {
        q: "Alguém que quer um plano alimentar rígido",
        a: "Se quer que lhe digam exatamente o que comer de segunda a domingo, não é isto. Aqui ensina-se literacia biológica e autorregulação, não dependência de um menu prescrito.",
      },
      {
        q: "Alguém que quer contar tudo",
        a: "Se a sua abordagem preferida é calorias, macros, pesar cada ingrediente e metas rígidas, isto pode frustrá-la. A nutrição quantitativa é usada quando é clinicamente útil — não sou contra os dados — mas medir não deve tornar-se o centro da relação com a comida.",
      },
      {
        q: "Alguém que procura uma solução em suplementos",
        a: "\"Diga-me só que suplementos resolvem o meu cortisol, intestino ou hormonas\" não é como isto funciona. Os suplementos podem ter um papel, mas são ferramentas de apoio, não o método.",
      },
      {
        q: "Alguém que quer um detox ou uma limpeza",
        a: "Se procura uma limpeza de 7 dias para reiniciar tudo, a filosofia aqui é outra: restauração do ritmo em vez de cultura detox.",
      },
      {
        q: "Alguém que não está disposta a olhar para os seus ritmos de vida",
        a: "Talvez a exclusão mais importante. Se sono, horários das refeições, movimento, recuperação e hábitos diários estão fora da conversa e só quer uma lista de alimentos, o método não funcionará bem — porque o contexto faz parte da intervenção.",
      },
      {
        q: "Alguém que quer diagnóstico ou tratamento de doença",
        a: "Este trabalho não se apresenta como alternativa aos cuidados médicos. Sintomas significativos ou inexplicados podem exigir investigação médica antes ou em paralelo. O meu papel é nutrição, educação, comportamento, estilo de vida e contexto fisiológico — não substituir o seu médico, gastroenterologista, endocrinologista ou psiquiatra.",
      },
      {
        q: "Alguém que procura \"cura energética\" ou promessas milagrosas",
        a: "Se espera que a energia por si só cure o seu corpo, não é aqui. O método não afirma que a física explica todos os fenómenos de saúde, nem substitui tratamento médico. Tudo aqui assenta em cronobiologia, ciência da nutrição e prática clínica real.",
      },
      {
        q: "Alguém que procura a perfeição",
        a: "A minha cliente ideal não é a mulher que quer otimizar cada biomarcador, suplemento, refeição e métrica do relógio. A filosofia é: regulação suficiente para criar resiliência — não otimização sem fim.",
      },
    ],
    generalTitle: "Outras perguntas frequentes",
    general: [
      {
        q: "Com quem trabalha habitualmente?",
        a: "Mulheres na meia-idade cujo metabolismo e energia parecem ter mudado apesar de várias dietas. Ajudo-as a compreender os seus ritmos biológicos e a reconstruir a nutrição à volta deles.",
      },
      {
        q: "Com que frequência nos encontramos?",
        a: "Sessões 1:1 duas vezes por mês (2 por mês) durante todo o programa, com acompanhamento e ajustes entre sessões.",
      },
      {
        q: "Tenho de abdicar dos alimentos que adoro?",
        a: "Não. Trabalhamos primeiro o momento, a qualidade e o ritmo. A restrição não é o mecanismo — o alinhamento é.",
      },
      {
        q: "Em que idiomas trabalha?",
        a: "As consultas estão disponíveis em inglês, espanhol e português.",
      },
      {
        q: "Quanto tempo até notar alguma coisa?",
        a: "A maioria nota mudanças na digestão, estabilidade de energia e sono nas primeiras semanas. A mudança metabólica profunda exige um ciclo completo do programa.",
      },
      {
        q: "Isto substitui os cuidados médicos?",
        a: "Não. Complementa-os. Mantenha o seu médico informado, sobretudo se tem um diagnóstico ou toma medicação.",
      },
      {
        q: "Como começo?",
        a: "Marque uma chamada de avaliação gratuita. Sem pressão e sem táticas de venda — vemos juntas se faz sentido para si.",
      },
    ],
    ctaTitle: "Ainda em dúvida se é para si?",
    ctaDesc: "Marque uma chamada de avaliação gratuita e descobrimos juntas.",
    ctaBtn: "Marcar chamada gratuita",
  },
} as const;

const FAQ = () => {
  const { language } = useLanguage();
  const t = copy[language] || copy.en;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...t.general, ...t.notFor].map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen py-24">
      <SEOHead
        title="FAQ — Who the Solaris Nutri Method Is (and Isn't) For"
        description="Honest answers about the Solaris Nutri Method: how sessions work, who it helps, and who this rhythm-based approach is not for."
        path="/faq"
        keywords="solaris nutri faq, who is this method for, rhythm nutrition questions"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Solaris Nutri" className="h-20 w-auto rounded-full" />
          </div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            {t.badge}
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">{t.title}</h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">{t.subtitle}</p>
        </div>

        {/* Fit statements */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8">
            <XCircle className="text-destructive mb-3" size={28} />
            <p className="font-sans text-foreground/85 leading-relaxed">{t.notForIntro}</p>
          </div>
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-8">
            <CheckCircle2 className="text-accent mb-3" size={28} />
            <p className="font-sans text-foreground/85 leading-relaxed">{t.forIntro}</p>
          </div>
        </div>

        {/* Not for */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <XCircle className="text-destructive" size={26} />
            {t.notForTitle}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {t.notFor.map((item, i) => (
              <AccordionItem key={item.q} value={`not-${i}`}>
                <AccordionTrigger className="font-sans text-left text-base text-foreground hover:text-accent">
                  <span className="flex items-start gap-3">
                    <span className="font-serif text-accent/70 font-bold">{i + 1}.</span>
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="font-sans text-foreground/75 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* General FAQ */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <HelpCircle className="text-accent" size={26} />
            {t.generalTitle}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {t.general.map((item, i) => (
              <AccordionItem key={item.q} value={`gen-${i}`}>
                <AccordionTrigger className="font-sans text-left text-base text-foreground hover:text-accent">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-foreground/75 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Newsletter */}
        <div className="max-w-6xl mx-auto mb-20">
          <NewsletterSignup source="faq" />
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center bg-primary/5 p-12 rounded-lg border border-primary/20">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">{t.ctaTitle}</h2>
          <p className="font-sans text-foreground/80 mb-8">{t.ctaDesc}</p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-sans font-medium px-8">
              {t.ctaBtn}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
