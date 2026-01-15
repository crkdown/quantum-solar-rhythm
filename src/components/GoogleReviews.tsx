import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const GoogleReviews = () => {
  const { language } = useLanguage();

  const reviews = [
    {
      name: "María García",
      rating: 5,
      text: {
        en: "Paula's approach to rhythm-based nutrition completely changed my relationship with food. I finally understand my body's signals.",
        es: "El enfoque de Paula hacia la nutrición basada en ritmos cambió completamente mi relación con la comida. Por fin entiendo las señales de mi cuerpo.",
        pt: "A abordagem da Paula para a nutrição baseada em ritmos mudou completamente minha relação com a comida. Finalmente entendo os sinais do meu corpo."
      },
      date: "2 weeks ago"
    },
    {
      name: "Ana Martins",
      rating: 5,
      text: {
        en: "The Earth Rhythm Retreat was transformative. I left with clarity, energy, and a sustainable approach to my health.",
        es: "El retiro Earth Rhythm fue transformador. Me fui con claridad, energía y un enfoque sostenible para mi salud.",
        pt: "O retiro Earth Rhythm foi transformador. Saí com clareza, energia e uma abordagem sustentável para minha saúde."
      },
      date: "1 month ago"
    },
    {
      name: "Laura Sánchez",
      rating: 5,
      text: {
        en: "After years of trying different diets, the Quantum Rhythm Framework finally made sense. It's not about restriction, it's about timing.",
        es: "Después de años probando diferentes dietas, el Marco de Ritmo Cuántico finalmente tuvo sentido. No se trata de restricción, se trata de tiempo.",
        pt: "Depois de anos tentando diferentes dietas, o Quadro de Ritmo Quântico finalmente fez sentido. Não é sobre restrição, é sobre tempo."
      },
      date: "3 weeks ago"
    },
    {
      name: "Sofia Costa",
      rating: 5,
      text: {
        en: "Paula's masterclass opened my eyes to how my internal clock affects everything. Highly recommended!",
        es: "La masterclass de Paula me abrió los ojos sobre cómo mi reloj interno afecta todo. ¡Muy recomendado!",
        pt: "A masterclass da Paula abriu meus olhos para como meu relógio interno afeta tudo. Altamente recomendado!"
      },
      date: "1 week ago"
    }
  ];

  const titles = {
    en: { title: "What Our Community Says", subtitle: "Real experiences from real people" },
    es: { title: "Lo Que Dice Nuestra Comunidad", subtitle: "Experiencias reales de personas reales" },
    pt: { title: "O Que Nossa Comunidade Diz", subtitle: "Experiências reais de pessoas reais" }
  };

  const currentTitles = titles[language] || titles.en;

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-sans text-sm font-medium text-foreground/70">Google Reviews</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-sans text-sm font-medium text-foreground/70">5.0</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
            {currentTitles.title}
          </h2>
          <p className="font-sans text-foreground/70">
            {currentTitles.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-quantum transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-sans text-sm text-foreground/80 leading-relaxed mb-4">
                  "{review.text[language] || review.text.en}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm font-medium text-primary">{review.name}</span>
                  <span className="font-sans text-xs text-muted-foreground">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
