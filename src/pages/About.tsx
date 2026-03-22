import { Circle } from "lucide-react";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import paulaPhoto from "@/assets/paula-photo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead from "@/components/SEOHead";

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
