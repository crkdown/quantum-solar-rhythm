import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Paula',
    'nav.method': 'The Method',
    'nav.programs': 'Programs',
    'nav.retreat': 'Earth Rhythm Retreat',
    'nav.resources': 'Resources',
    'nav.shop': 'Shop',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.foodRhythm': 'Food Rhythm Tool',
    
    // Home
    'home.hero.title': 'Quantum Rhythm Nutrition',
    'home.hero.subtitle': 'Alignment over restriction. Reconnect with your natural rhythms for lasting vitality.',
    'home.hero.cta': 'Begin Your Alignment Journey',
    'home.welcome.title': 'Welcome to Quantum Rhythm Nutrition',
    'home.welcome.text': 'A revolutionary approach that harmonizes your eating patterns with nature\'s cycles—circadian, lunar, seasonal, and cosmic rhythms—for optimal health and vitality.',
    
    // Programs
    'programs.title': 'Transform Your Rhythm',
    'programs.subtitle': 'Choose your path to alignment. All programs include personalized support in English, Spanish, and Portuguese.',
    'programs.available': 'Available in English, Spanish & Portuguese',
    'programs.3month': '3-Month Rhythm Reset',
    'programs.6month': '6-Month Coherence Deepening',
    'programs.9month': '9-Month Full Quantum Rhythm Embodiment',
    'programs.book': 'Book Your Rhythm Consultation',
    
    // Contact
    'contact.title': 'Connect With Paula',
    'contact.subtitle': 'Ready to begin your rhythm alignment journey? Consultations available in English, Spanish, and Portuguese.',
    'contact.languages': 'Consultations available in English, Spanish & Portuguese',
    
    // Footer
    'footer.tagline': 'Guiding alignment across the seen and unseen bodies',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.bookNow': 'Book Now',
    'common.comingSoon': 'Coming Soon',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Paula',
    'nav.method': 'El Método',
    'nav.programs': 'Programas',
    'nav.retreat': 'Retiro Ritmo Tierra',
    'nav.resources': 'Recursos',
    'nav.shop': 'Tienda',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.foodRhythm': 'Herramienta de Ritmo Alimentario',
    
    // Home
    'home.hero.title': 'Nutrición de Ritmo Cuántico',
    'home.hero.subtitle': 'Alineación sobre restricción. Reconéctate con tus ritmos naturales para una vitalidad duradera.',
    'home.hero.cta': 'Comienza Tu Viaje de Alineación',
    'home.welcome.title': 'Bienvenido a Nutrición de Ritmo Cuántico',
    'home.welcome.text': 'Un enfoque revolucionario que armoniza tus patrones alimenticios con los ciclos de la naturaleza—ritmos circadianos, lunares, estacionales y cósmicos—para una salud y vitalidad óptimas.',
    
    // Programs
    'programs.title': 'Transforma Tu Ritmo',
    'programs.subtitle': 'Elige tu camino hacia la alineación. Todos los programas incluyen apoyo personalizado en inglés, español y portugués.',
    'programs.available': 'Disponible en Inglés, Español y Portugués',
    'programs.3month': 'Reset de Ritmo de 3 Meses',
    'programs.6month': 'Profundización de Coherencia de 6 Meses',
    'programs.9month': 'Encarnación Completa de Ritmo Cuántico de 9 Meses',
    'programs.book': 'Reserva Tu Consulta de Ritmo',
    
    // Contact
    'contact.title': 'Conecta Con Paula',
    'contact.subtitle': '¿Lista para comenzar tu viaje de alineación rítmica? Consultas disponibles en inglés, español y portugués.',
    'contact.languages': 'Consultas disponibles en Inglés, Español y Portugués',
    
    // Footer
    'footer.tagline': 'Guiando la alineación a través de los cuerpos vistos e invisibles',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Common
    'common.learnMore': 'Saber Más',
    'common.bookNow': 'Reservar Ahora',
    'common.comingSoon': 'Próximamente',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre Paula',
    'nav.method': 'O Método',
    'nav.programs': 'Programas',
    'nav.retreat': 'Retiro Ritmo da Terra',
    'nav.resources': 'Recursos',
    'nav.shop': 'Loja',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.foodRhythm': 'Ferramenta de Ritmo Alimentar',
    
    // Home
    'home.hero.title': 'Nutrição de Ritmo Quântico',
    'home.hero.subtitle': 'Alinhamento sobre restrição. Reconecte-se com seus ritmos naturais para vitalidade duradoura.',
    'home.hero.cta': 'Comece Sua Jornada de Alinhamento',
    'home.welcome.title': 'Bem-vindo à Nutrição de Ritmo Quântico',
    'home.welcome.text': 'Uma abordagem revolucionária que harmoniza seus padrões alimentares com os ciclos da natureza—ritmos circadianos, lunares, sazonais e cósmicos—para saúde e vitalidade ideais.',
    
    // Programs
    'programs.title': 'Transforme Seu Ritmo',
    'programs.subtitle': 'Escolha seu caminho para o alinhamento. Todos os programas incluem suporte personalizado em inglês, espanhol e português.',
    'programs.available': 'Disponível em Inglês, Espanhol e Português',
    'programs.3month': 'Reset de Ritmo de 3 Meses',
    'programs.6month': 'Aprofundamento de Coerência de 6 Meses',
    'programs.9month': 'Incorporação Completa de Ritmo Quântico de 9 Meses',
    'programs.book': 'Reserve Sua Consulta de Ritmo',
    
    // Contact
    'contact.title': 'Conecte-se Com Paula',
    'contact.subtitle': 'Pronta para começar sua jornada de alinhamento rítmico? Consultas disponíveis em inglês, espanhol e português.',
    'contact.languages': 'Consultas disponíveis em Inglês, Espanhol e Português',
    
    // Footer
    'footer.tagline': 'Guiando o alinhamento através dos corpos vistos e invistos',
    'footer.rights': 'Todos os direitos reservados.',
    
    // Common
    'common.learnMore': 'Saiba Mais',
    'common.bookNow': 'Reserve Agora',
    'common.comingSoon': 'Em Breve',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
