import { BookOpen, Download, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import ebook from "@/assets/solaris-circadian-booklet.pdf.asset.json";

const INSTAGRAM_URL = "https://www.instagram.com/solarisnutri";

const copy = {
  en: {
    tag: "Free e-book for new Instagram followers",
    title: "Circadian Rhythm & Metabolic Harmony",
    description:
      "A 20-page guide integrating chronobiology, the TCM organ clock, the lunar cycle and the Solaris Nutri nutritional protocol. Follow me on Instagram and download it free — my welcome gift to you.",
    follow: "Follow on Instagram",
    download: "Download the free e-book",
    note: "PDF · No sign-up required",
  },
  es: {
    tag: "E-book gratuito para nuevos seguidores en Instagram",
    title: "Ritmo Circadiano y Armonía Metabólica",
    description:
      "Una guía de 20 páginas que integra cronobiología, el reloj de órganos de la MTC, el ciclo lunar y el protocolo nutricional Solaris Nutri. Sígueme en Instagram y descárgala gratis — mi regalo de bienvenida.",
    follow: "Seguir en Instagram",
    download: "Descargar el e-book gratis",
    note: "PDF · Sin registro",
  },
  pt: {
    tag: "E-book gratuito para novos seguidores no Instagram",
    title: "Ritmo Circadiano e Harmonia Metabólica",
    description:
      "Um guia de 20 páginas que integra cronobiologia, o relógio dos órgãos da MTC, o ciclo lunar e o protocolo nutricional Solaris Nutri. Segue-me no Instagram e descarrega gratuitamente — o meu presente de boas-vindas.",
    follow: "Seguir no Instagram",
    download: "Descarregar o e-book grátis",
    note: "PDF · Sem registo",
  },
} as const;

const FreeEbook = () => {
  const { language } = useLanguage();
  const t = copy[language as keyof typeof copy] || copy.en;

  return (
    <Card className="border-accent/40 bg-gradient-to-br from-primary/5 via-background to-accent/10 overflow-hidden">
      <CardContent className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="text-primary" size={36} />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs font-sans uppercase tracking-wider text-accent mb-2">{t.tag}</p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">{t.title}</h3>
            <p className="font-sans text-foreground/70 mb-5 leading-relaxed">{t.description}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button asChild size="lg" className="font-sans">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2" size={18} />
                  {t.follow}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-sans">
                <a href={ebook.url} target="_blank" rel="noopener noreferrer" download>
                  <Download className="mr-2" size={18} />
                  {t.download}
                </a>
              </Button>
            </div>
            <p className="font-sans text-xs text-muted-foreground mt-3">{t.note}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FreeEbook;
