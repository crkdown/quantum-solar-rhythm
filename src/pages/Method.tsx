import { Circle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import methodDiagram from "@/assets/method-diagram.jpg";
import herbalRhythm from "@/assets/herbal-rhythm.jpg";
import grainsSeeds from "@/assets/grains-seeds.jpg";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const Method = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Solaris Nutri" className="h-20 w-auto rounded-full" />
          </div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            {t('method.badge')}
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            {t('method.title')}
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed">
            {t('method.subtitle')}
          </p>
        </div>

        {/* New Simpler Method Diagram */}
        <div className="max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <div className="bg-card p-6 rounded-xl border border-border shadow-subtle-glow">
            <img 
              src={methodDiagram} 
              alt="Body Awareness · Living Rhythm with Nature · Embracing Simplicity" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Nature Images */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-subtle-glow">
              <img 
                src={herbalRhythm} 
                alt="Herbal tea and natural rhythm" 
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-sans text-sm tracking-wide">Body Awareness</span>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-subtle-glow">
              <img 
                src={grainsSeeds} 
                alt="Whole grains and seeds" 
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-sans text-sm tracking-wide">Living Rhythm with Nature</span>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-subtle-glow">
              <img 
                src={methodDiagram} 
                alt="Embracing Simplicity" 
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-sans text-sm tracking-wide">Embracing Simplicity</span>
            </div>
          </div>
        </div>

        {/* Three Phases - Detailed */}
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Phase 1: Decode */}
          <div className="grid md:grid-cols-12 gap-8 items-start animate-fade-in-up">
            <div className="md:col-span-3">
              <div className="text-accent font-serif text-8xl font-bold opacity-30">01</div>
            </div>
            <div className="md:col-span-9 space-y-4">
              <h2 className="font-serif text-4xl font-bold text-primary">{t('method.decode')}</h2>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                <span className="font-semibold text-primary">{t('method.decode.desc')}</span> {t('method.decode.intro')}
              </p>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-sans font-semibold text-foreground mb-3">{t('method.decode.title')}</h3>
                <ul className="space-y-2 font-sans text-foreground/80">
                  {['method.decode.1', 'method.decode.2', 'method.decode.3', 'method.decode.4'].map((key) => (
                    <li key={key} className="flex items-start gap-2">
                      <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2: Reprogram */}
          <div className="grid md:grid-cols-12 gap-8 items-start animate-fade-in-up">
            <div className="md:col-span-3">
              <div className="text-accent font-serif text-8xl font-bold opacity-30">02</div>
            </div>
            <div className="md:col-span-9 space-y-4">
              <h2 className="font-serif text-4xl font-bold text-primary">{t('method.reprogram')}</h2>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                <span className="font-semibold text-primary">{t('method.reprogram.desc')}</span> {t('method.reprogram.intro')}
              </p>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-sans font-semibold text-foreground mb-3">{t('method.reprogram.title')}</h3>
                <ul className="space-y-2 font-sans text-foreground/80">
                  {['method.reprogram.1', 'method.reprogram.2', 'method.reprogram.3', 'method.reprogram.4'].map((key) => (
                    <li key={key} className="flex items-start gap-2">
                      <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3: Rebuild */}
          <div className="grid md:grid-cols-12 gap-8 items-start animate-fade-in-up">
            <div className="md:col-span-3">
              <div className="text-accent font-serif text-8xl font-bold opacity-30">03</div>
            </div>
            <div className="md:col-span-9 space-y-4">
              <h2 className="font-serif text-4xl font-bold text-primary">{t('method.rebuild')}</h2>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                <span className="font-semibold text-primary">{t('method.rebuild.desc')}</span> {t('method.rebuild.intro')}
              </p>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="font-sans font-semibold text-foreground mb-3">{t('method.rebuild.title')}</h3>
                <ul className="space-y-2 font-sans text-foreground/80">
                  {['method.rebuild.1', 'method.rebuild.2', 'method.rebuild.3', 'method.rebuild.4'].map((key) => (
                    <li key={key} className="flex items-start gap-2">
                      <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Scientific References — expanded with spleen health */}
        <div className="max-w-5xl mx-auto mt-20 animate-fade-in-up">
          <h2 className="font-serif text-3xl font-bold text-primary text-center mb-8">
            {t('method.science')}
          </h2>
          <div className="bg-muted/20 p-8 rounded-lg border border-border space-y-6">
            <p className="font-sans text-foreground/80 text-center mb-6">
              {t('method.science.desc')}
            </p>
            <div className="space-y-4 text-sm font-sans text-foreground/70">
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">Circadian Rhythm and Meal Timing</p>
                <p>Panda S. "Circadian physiology of metabolism." <em>Science</em>. 2016;354(6315):1008-1015.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/27885007/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PMID: 27885007</a>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">Time-Restricted Eating and Metabolic Health</p>
                <p>Wilkinson MJ, et al. "Ten-Hour Time-Restricted Eating Reduces Weight, Blood Pressure, and Atherogenic Lipids." <em>Cell Metabolism</em>. 2020;31(1):92-104.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/31813824/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PMID: 31813824</a>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">Chrononutrition and Circadian Clocks</p>
                <p>Asher G, Sassone-Corsi P. "Time for food: the intimate interplay between nutrition, metabolism, and the circadian clock." <em>Cell</em>. 2015;161(1):84-92.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/25815987/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PMID: 25815987</a>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">Meal Timing and Weight Regulation</p>
                <p>Garaulet M, et al. "Timing of food intake predicts weight loss effectiveness." <em>International Journal of Obesity</em>. 2013;37(4):604-611.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/23357955/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PMID: 23357955</a>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">Circadian Disruption and Disease</p>
                <p>Roenneberg T, Merrow M. "The Circadian Clock and Human Health." <em>Current Biology</em>. 2016;26(10):R432-R443.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/27218855/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PMID: 27218855</a>
              </div>

              {/* Spleen Health Research */}
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-serif text-lg font-semibold text-primary mb-4">Spleen Health & Digestive Rhythm</h3>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">The Spleen's Role in Immunity and Metabolic Regulation</p>
                <p>Mebius RE, Kraal G. "Structure and function of the spleen." <em>Nature Reviews Immunology</em>. 2005;5(8):606-616.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/16056254/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PMID: 16056254</a>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">Splenic Regulation of Iron Metabolism and Blood Cell Recycling</p>
                <p>Pivkin IV, et al. "Biomechanics of red blood cells in human spleen and consequences for physiology and disease." <em>PNAS</em>. 2016;113(28):7804-7809.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/27354532/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PMID: 27354532</a>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">Vagus Nerve–Spleen Axis and Anti-inflammatory Pathways</p>
                <p>Rosas-Ballina M, et al. "Acetylcholine-synthesizing T cells relay neural signals in a vagus nerve circuit." <em>Science</em>. 2011;334(6052):98-101.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/21921156/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PMID: 21921156</a>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">The Cholinergic Anti-inflammatory Pathway and Spleen</p>
                <p>Tracey KJ. "The inflammatory reflex." <em>Nature</em>. 2002;420(6917):853-859.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/12490958/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PMID: 12490958</a>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">Spleen and Gut-Brain-Immune Communication</p>
                <p>Breit S, et al. "Vagus Nerve as Modulator of the Brain-Gut Axis in Psychiatric and Inflammatory Disorders." <em>Frontiers in Psychiatry</em>. 2018;9:44.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/29593576/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PMID: 29593576</a>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">Spleen Function in Traditional Chinese Medicine and Modern Gastroenterology</p>
                <p>Li XB, et al. "Modern research on the spleen theory in traditional Chinese medicine." <em>Chinese Journal of Integrative Medicine</em>. 2015;21(1):3-6.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/25533605/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PMID: 25533605</a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-20 text-center bg-primary/5 p-12 rounded-lg border border-primary/20 animate-fade-in">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">
            {t('method.cta.title')}
          </h2>
          <p className="font-sans text-foreground/80 mb-8">
            {t('method.cta.desc')}
          </p>
          <Link to="/programs">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-sans font-medium px-8">
              {t('method.cta.button')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Method;
