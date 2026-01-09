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
    'nav.about': 'About Paula',
    'nav.method': 'The Method',
    'nav.programs': 'Programs',
    'nav.retreat': 'Earth Rhythm Retreat',
    'nav.resources': 'Resources',
    'nav.shop': 'Shop',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.foodRhythm': 'Food Rhythm Tool',
    'nav.rhythmCalc': 'Rhythm Calculator',
    'nav.masterclass': 'Masterclass',
    
    // Home
    'home.hero.badge': 'Quantum Rhythm Framework',
    'home.hero.title1': "The world doesn't need another diet.",
    'home.hero.title2': 'It needs rhythm.',
    'home.hero.subtitle': 'Discover the revolutionary approach to nutrition that restores biological and emotional alignment through rhythm, not restriction.',
    'home.hero.cta': 'Start Your 3-Month Rhythm Reset',
    'home.hero.tagline': 'Alignment not restriction. Because alignment restores vitality.',
    'home.why.title': 'Why Rhythm?',
    'home.why.p1': "Your body doesn't speak the language of calories or macros. It speaks the language of",
    'home.why.highlight': 'circadian rhythms',
    'home.why.p1end': ', seasonal cycles, and biological alignment.',
    'home.why.p2': 'The Quantum Rhythm Framework (QR) is the first nutritional methodology that treats time as a nutrient — restoring your body\'s natural intelligence through aligned eating patterns.',
    'home.phases.title': 'The Three Phases',
    'home.phases.decode.title': 'Decode',
    'home.phases.decode.desc': 'Understand your unique biological rhythm signature and identify misalignments causing fatigue, cravings, and inflammation.',
    'home.phases.reprogram.title': 'Reprogram',
    'home.phases.reprogram.desc': 'Reset your circadian clock through strategic meal timing, light exposure, and quantum-aligned nutrition protocols.',
    'home.phases.rebuild.title': 'Rebuild',
    'home.phases.rebuild.desc': 'Establish sustainable rhythms that restore vitality, mental clarity, and emotional resilience for life.',
    'home.phases.cta': 'Learn More About The Method',
    'home.cta.title': 'Ready to Restore Your Rhythm?',
    'home.cta.subtitle': 'Begin your transformation with personalized rhythm resets, printable tools, and quantum-aligned nutrition guidance.',
    'home.cta.programs': 'Explore Programs',
    'home.cta.consult': 'Book a Consultation',

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
    'footer.explore': 'Explore',
    'footer.connect': 'Connect',
    'footer.book': 'Book a Session',
    'footer.email': 'Email Us',
    'footer.createdBy': 'Created by Paula Carolina Suescun — BioRhythm Nutrition Coach & Nutritionist',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.bookNow': 'Book Now',
    'common.comingSoon': 'Coming Soon',
    'common.enroll': 'Enroll Now',
    'common.register': 'Register Now',

    // Masterclass
    'masterclass.live': 'Live Masterclass',
    'masterclass.online': 'ONLINE MASTERCLASS',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre Paula',
    'nav.method': 'El Método',
    'nav.programs': 'Programas',
    'nav.retreat': 'Retiro Ritmo Tierra',
    'nav.resources': 'Recursos',
    'nav.shop': 'Tienda',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.foodRhythm': 'Herramienta de Ritmo',
    'nav.rhythmCalc': 'Calculadora de Ritmo',
    'nav.masterclass': 'Masterclass',
    
    // Home
    'home.hero.badge': 'Marco de Ritmo Cuántico',
    'home.hero.title1': 'El mundo no necesita otra dieta.',
    'home.hero.title2': 'Necesita ritmo.',
    'home.hero.subtitle': 'Descubre el enfoque revolucionario de la nutrición que restaura la alineación biológica y emocional a través del ritmo, no la restricción.',
    'home.hero.cta': 'Comienza Tu Reset de Ritmo de 3 Meses',
    'home.hero.tagline': 'Alineación, no restricción. Porque la alineación restaura la vitalidad.',
    'home.why.title': '¿Por Qué Ritmo?',
    'home.why.p1': 'Tu cuerpo no habla el lenguaje de las calorías o los macros. Habla el lenguaje de los',
    'home.why.highlight': 'ritmos circadianos',
    'home.why.p1end': ', ciclos estacionales y alineación biológica.',
    'home.why.p2': 'El Marco de Ritmo Cuántico (QR) es la primera metodología nutricional que trata el tiempo como un nutriente — restaurando la inteligencia natural de tu cuerpo a través de patrones alimenticios alineados.',
    'home.phases.title': 'Las Tres Fases',
    'home.phases.decode.title': 'Decodificar',
    'home.phases.decode.desc': 'Comprende tu firma de ritmo biológico única e identifica las desalineaciones que causan fatiga, antojos e inflamación.',
    'home.phases.reprogram.title': 'Reprogramar',
    'home.phases.reprogram.desc': 'Restablece tu reloj circadiano a través de horarios estratégicos de comidas, exposición a la luz y protocolos de nutrición alineados.',
    'home.phases.rebuild.title': 'Reconstruir',
    'home.phases.rebuild.desc': 'Establece ritmos sostenibles que restauran la vitalidad, claridad mental y resiliencia emocional para toda la vida.',
    'home.phases.cta': 'Aprende Más Sobre El Método',
    'home.cta.title': '¿Lista para Restaurar Tu Ritmo?',
    'home.cta.subtitle': 'Comienza tu transformación con resets de ritmo personalizados, herramientas imprimibles y guía de nutrición alineada.',
    'home.cta.programs': 'Explorar Programas',
    'home.cta.consult': 'Reservar Consulta',

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
    'footer.explore': 'Explorar',
    'footer.connect': 'Conectar',
    'footer.book': 'Reservar Sesión',
    'footer.email': 'Envíanos un Email',
    'footer.createdBy': 'Creado por Paula Carolina Suescun — Coach de Nutrición BioRítmica y Nutricionista',
    
    // Common
    'common.learnMore': 'Saber Más',
    'common.bookNow': 'Reservar Ahora',
    'common.comingSoon': 'Próximamente',
    'common.enroll': 'Inscríbete Ahora',
    'common.register': 'Regístrate Ahora',

    // Masterclass
    'masterclass.live': 'Masterclass en Vivo',
    'masterclass.online': 'MASTERCLASS ONLINE',
  },
  pt: {
    // Navigation
    'nav.about': 'Sobre Paula',
    'nav.method': 'O Método',
    'nav.programs': 'Programas',
    'nav.retreat': 'Retiro Ritmo da Terra',
    'nav.resources': 'Recursos',
    'nav.shop': 'Loja',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.foodRhythm': 'Ferramenta de Ritmo',
    'nav.rhythmCalc': 'Calculadora de Ritmo',
    'nav.masterclass': 'Masterclass',
    
    // Home
    'home.hero.badge': 'Framework de Ritmo Quântico',
    'home.hero.title1': 'O mundo não precisa de outra dieta.',
    'home.hero.title2': 'Precisa de ritmo.',
    'home.hero.subtitle': 'Descubra a abordagem revolucionária da nutrição que restaura o alinhamento biológico e emocional através do ritmo, não da restrição.',
    'home.hero.cta': 'Comece Seu Reset de Ritmo de 3 Meses',
    'home.hero.tagline': 'Alinhamento, não restrição. Porque alinhamento restaura vitalidade.',
    'home.why.title': 'Por Que Ritmo?',
    'home.why.p1': 'Seu corpo não fala a linguagem de calorias ou macros. Fala a linguagem dos',
    'home.why.highlight': 'ritmos circadianos',
    'home.why.p1end': ', ciclos sazonais e alinhamento biológico.',
    'home.why.p2': 'O Framework de Ritmo Quântico (QR) é a primeira metodologia nutricional que trata o tempo como um nutriente — restaurando a inteligência natural do seu corpo através de padrões alimentares alinhados.',
    'home.phases.title': 'As Três Fases',
    'home.phases.decode.title': 'Decodificar',
    'home.phases.decode.desc': 'Entenda sua assinatura de ritmo biológico única e identifique os desalinhamentos que causam fadiga, desejos e inflamação.',
    'home.phases.reprogram.title': 'Reprogramar',
    'home.phases.reprogram.desc': 'Redefina seu relógio circadiano através de horários estratégicos de refeições, exposição à luz e protocolos de nutrição alinhados.',
    'home.phases.rebuild.title': 'Reconstruir',
    'home.phases.rebuild.desc': 'Estabeleça ritmos sustentáveis que restauram vitalidade, clareza mental e resiliência emocional para a vida.',
    'home.phases.cta': 'Saiba Mais Sobre O Método',
    'home.cta.title': 'Pronta para Restaurar Seu Ritmo?',
    'home.cta.subtitle': 'Comece sua transformação com resets de ritmo personalizados, ferramentas imprimíveis e orientação de nutrição alinhada.',
    'home.cta.programs': 'Explorar Programas',
    'home.cta.consult': 'Agendar Consulta',

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
    'footer.explore': 'Explorar',
    'footer.connect': 'Conectar',
    'footer.book': 'Agendar Sessão',
    'footer.email': 'Envie um Email',
    'footer.createdBy': 'Criado por Paula Carolina Suescun — Coach de Nutrição BioRítmica e Nutricionista',
    
    // Common
    'common.learnMore': 'Saiba Mais',
    'common.bookNow': 'Reserve Agora',
    'common.comingSoon': 'Em Breve',
    'common.enroll': 'Inscreva-se Agora',
    'common.register': 'Registre-se Agora',

    // Masterclass
    'masterclass.live': 'Masterclass ao Vivo',
    'masterclass.online': 'MASTERCLASS ONLINE',
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
