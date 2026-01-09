import { Circle } from "lucide-react";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

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

          {/* Story */}
          <div className="prose prose-lg max-w-none space-y-8 animate-fade-in-up">
            <div className="bg-card p-8 md:p-12 rounded-lg border border-border shadow-subtle-glow">
              <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-6">
                <span className="font-semibold text-primary">Solaris Nutri</span> {t('about.intro1')} <span className="text-accent font-medium">Quantum Rhythm Nutrition™</span> {t('about.intro2')}
              </p>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-6">
                {t('about.story1')}
              </p>
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
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>{t('about.approach1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>{t('about.approach2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>{t('about.approach3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>{t('about.approach4')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border border-border animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                {t('about.credentials')}
              </h3>
              <ul className="space-y-3 font-sans text-foreground/80">
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>{t('about.cred1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>{t('about.cred2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>{t('about.cred3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>{t('about.cred4')}</span>
                </li>
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
