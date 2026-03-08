import { Circle, Clock, Heart, Sun, Droplets, Wind, Leaf, Users, MapPin, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import wholesomeFood from "@/assets/wholesome-food.jpg";
import natureRetreat from "@/assets/nature-retreat.jpg";
import nourishingBowl from "@/assets/nourishing-bowl.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const EarthRhythmRetreat = () => {
  const { t, language } = useLanguage();

  // Monthly retreat dates from April to October 2026
  const retreatDates = {
    en: [
      { month: "April", date: "April 11, 2026", available: false },
      { month: "May", date: "May 16, 2026", available: true },
      { month: "June", date: "June 13, 2026", available: true },
      { month: "July", date: "July 18, 2026", available: true },
      { month: "August", date: "August 15, 2026", available: true },
      { month: "September", date: "September 12, 2026", available: true },
      { month: "October", date: "October 10, 2026", available: true }
    ],
    es: [
      { month: "Abril", date: "11 de Abril, 2026", available: true },
      { month: "Mayo", date: "16 de Mayo, 2026", available: true },
      { month: "Junio", date: "13 de Junio, 2026", available: true },
      { month: "Julio", date: "18 de Julio, 2026", available: true },
      { month: "Agosto", date: "15 de Agosto, 2026", available: true },
      { month: "Septiembre", date: "12 de Septiembre, 2026", available: true },
      { month: "Octubre", date: "10 de Octubre, 2026", available: true }
    ],
    pt: [
      { month: "Abril", date: "11 de Abril, 2026", available: true },
      { month: "Maio", date: "16 de Maio, 2026", available: true },
      { month: "Junho", date: "13 de Junho, 2026", available: true },
      { month: "Julho", date: "18 de Julho, 2026", available: true },
      { month: "Agosto", date: "15 de Agosto, 2026", available: true },
      { month: "Setembro", date: "12 de Setembro, 2026", available: true },
      { month: "Outubro", date: "10 de Outubro, 2026", available: true }
    ]
  };

  const schedule = {
    en: [
      { time: "10:00", duration: "15 min", title: "Arrival & Welcome", description: "Herbal drink, orientation, and clear safety boundaries. A calm start to settle the nervous system." },
      { time: "10:15", duration: "15 min", title: "Ice-Breaker & Intentions", description: "Short introductions and a simple grounding question. Light, warm, and easy — immediate group comfort." },
      { time: "10:30", duration: "15 min", title: "Breathwork + Gentle Movement", description: "Vagus activation, microcirculation support, and grounding before sauna. Coherent movement, not yoga or ritualistic practices." },
      { time: "10:45", duration: "30 min", title: "Microbiome & Rhythm Talk", description: "Clear explanation of metabolic rhythms, spleen + digestive flow, microbiome balance, and why heat and nature contribute to coherence." },
      { time: "11:15", duration: "40 min", title: "Biometrics Session", description: "Private Human Pod body scan including body composition, hydration, visceral fat, metabolic indicators, and rhythm interpretation." },
      { time: "12:00", duration: "90 min", title: "Sauna Detox Protocol", description: "Guided sauna cycles, optional cold exposure, scrub mixture, and mineral hydration. A full metabolic and circulatory activation." },
      { time: "13:30", duration: "10 min", title: "Cool Down + Hydration", description: "Light hydration, fruit or cooling herbal tea." },
      { time: "13:40", duration: "45 min", title: "Lunch", description: "Warm, digestion-friendly, mineral-rich meal. Short explanation on how food supports recovery from heat therapy." },
      { time: "14:25", duration: "15 min", title: "Rest & Digest", description: "Quiet outdoor moment to settle the system." },
      { time: "14:40", duration: "20 min", title: "Nature Walk", description: "Slow, grounding walk through the land. Supports nervous system reset and sensory recalibration." },
      { time: "15:00", duration: "25 min", title: "Twin Hearts Meditation", description: "Universal, non-dogmatic meditation for heart–brain coherence. Deep grounding and emotional clarity." },
      { time: "15:25", duration: "30 min", title: "Presotherapy Boots", description: "Lymphatic activation to support detoxification. Participants rotate while others rest." },
      { time: "16:00", duration: "25 min", title: "Integration Circle", description: "Light reflection, hydration, and next-step recommendations. Biometric report reminder." },
      { time: "16:45", duration: "10–15 min", title: "Departure Window", description: "Slow, relaxed goodbye." }
    ],
    es: [
      { time: "10:00", duration: "15 min", title: "Llegada y Bienvenida", description: "Bebida herbal, orientación y límites de seguridad claros. Un comienzo tranquilo para calmar el sistema nervioso." },
      { time: "10:15", duration: "15 min", title: "Rompehielos e Intenciones", description: "Presentaciones breves y una pregunta simple de arraigo. Ligero, cálido y fácil — comodidad grupal inmediata." },
      { time: "10:30", duration: "15 min", title: "Respiración + Movimiento Suave", description: "Activación vagal, soporte de microcirculación y arraigo antes del sauna. Movimiento coherente, no yoga ni prácticas rituales." },
      { time: "10:45", duration: "30 min", title: "Charla sobre Microbioma y Ritmo", description: "Explicación clara de ritmos metabólicos, flujo digestivo + bazo, equilibrio del microbioma y por qué el calor y la naturaleza contribuyen a la coherencia." },
      { time: "11:15", duration: "40 min", title: "Sesión de Biometría", description: "Escaneo corporal privado Human Pod incluyendo composición corporal, hidratación, grasa visceral, indicadores metabólicos e interpretación del ritmo." },
      { time: "12:00", duration: "90 min", title: "Protocolo de Desintoxicación en Sauna", description: "Ciclos guiados de sauna, exposición al frío opcional, mezcla de exfoliación e hidratación mineral. Activación metabólica y circulatoria completa." },
      { time: "13:30", duration: "10 min", title: "Enfriamiento + Hidratación", description: "Hidratación ligera, fruta o té herbal refrescante." },
      { time: "13:40", duration: "45 min", title: "Almuerzo", description: "Comida cálida, amigable con la digestión y rica en minerales. Breve explicación sobre cómo la comida apoya la recuperación de la terapia de calor." },
      { time: "14:25", duration: "15 min", title: "Descanso y Digestión", description: "Momento tranquilo al aire libre para asentar el sistema." },
      { time: "14:40", duration: "20 min", title: "Caminata en la Naturaleza", description: "Caminata lenta y arraigada por el terreno. Apoya el reset del sistema nervioso y la recalibración sensorial." },
      { time: "15:00", duration: "25 min", title: "Meditación Twin Hearts", description: "Meditación universal y no dogmática para la coherencia corazón-cerebro. Arraigo profundo y claridad emocional." },
      { time: "15:25", duration: "30 min", title: "Botas de Presoterapia", description: "Activación linfática para apoyar la desintoxicación. Los participantes rotan mientras otros descansan." },
      { time: "16:00", duration: "25 min", title: "Círculo de Integración", description: "Reflexión ligera, hidratación y recomendaciones de próximos pasos. Recordatorio del informe biométrico." },
      { time: "16:45", duration: "10–15 min", title: "Ventana de Despedida", description: "Despedida lenta y relajada." }
    ],
    pt: [
      { time: "10:00", duration: "15 min", title: "Chegada e Boas-vindas", description: "Bebida herbal, orientação e limites de segurança claros. Um início calmo para acalmar o sistema nervoso." },
      { time: "10:15", duration: "15 min", title: "Quebra-gelo e Intenções", description: "Apresentações breves e uma pergunta simples de ancoragem. Leve, caloroso e fácil — conforto grupal imediato." },
      { time: "10:30", duration: "15 min", title: "Respiração + Movimento Suave", description: "Ativação vagal, suporte de microcirculação e ancoragem antes da sauna. Movimento coerente, não yoga ou práticas ritualísticas." },
      { time: "10:45", duration: "30 min", title: "Palestra sobre Microbioma e Ritmo", description: "Explicação clara de ritmos metabólicos, fluxo digestivo + baço, equilíbrio do microbioma e por que o calor e a natureza contribuem para a coerência." },
      { time: "11:15", duration: "40 min", title: "Sessão de Biometria", description: "Escaneamento corporal privado Human Pod incluindo composição corporal, hidratação, gordura visceral, indicadores metabólicos e interpretação do ritmo." },
      { time: "12:00", duration: "90 min", title: "Protocolo de Desintoxicação em Sauna", description: "Ciclos guiados de sauna, exposição ao frio opcional, mistura de esfoliação e hidratação mineral. Ativação metabólica e circulatória completa." },
      { time: "13:30", duration: "10 min", title: "Resfriamento + Hidratação", description: "Hidratação leve, fruta ou chá herbal refrescante." },
      { time: "13:40", duration: "45 min", title: "Almoço", description: "Refeição quente, amigável à digestão e rica em minerais. Breve explicação sobre como a comida apoia a recuperação da terapia de calor." },
      { time: "14:25", duration: "15 min", title: "Descanso e Digestão", description: "Momento tranquilo ao ar livre para assentar o sistema." },
      { time: "14:40", duration: "20 min", title: "Caminhada na Natureza", description: "Caminhada lenta e ancorada pelo terreno. Apoia o reset do sistema nervoso e a recalibração sensorial." },
      { time: "15:00", duration: "25 min", title: "Meditação Twin Hearts", description: "Meditação universal e não dogmática para a coerência coração-cérebro. Ancoragem profunda e clareza emocional." },
      { time: "15:25", duration: "30 min", title: "Botas de Pressoterapia", description: "Ativação linfática para apoiar a desintoxicação. Os participantes rotacionam enquanto outros descansam." },
      { time: "16:00", duration: "25 min", title: "Círculo de Integração", description: "Reflexão leve, hidratação e recomendações de próximos passos. Lembrete do relatório biométrico." },
      { time: "16:45", duration: "10–15 min", title: "Janela de Despedida", description: "Despedida lenta e relaxada." }
    ]
  };

  const faqs = {
    en: [
      { question: "What is the purpose of this retreat?", answer: "To reset your biological rhythms in one structured day using heat therapy, biometrics, breathwork, circadian-aligned nutrition, nature exposure, and lymphatic activation." },
      { question: "What is microcirculation?", answer: "Microcirculation refers to the blood flow through the smallest vessels in your body — capillaries, arterioles, and venules. It's responsible for nutrient delivery, oxygen supply, toxin removal, lymphatic flow, and cellular rejuvenation." },
      { question: "Is the sauna safe for everyone?", answer: "The sauna is safe for most people. Exceptions include pregnancy, uncontrolled hypertension, recent heart events, fever or acute infection, severe neuropathy, and conditions where heat exposure is contraindicated." },
      { question: "What should I bring?", answer: "Swimsuit, comfortable clothes, water bottle, light towel (we provide sauna towels), sunscreen (optional for nature walk), any personal medications, and notebook for integration if you want." },
      { question: "Is lunch included?", answer: "Yes. A plant-based, gluten-free, warm, digestion-friendly, mineral-rich meal designed to stabilise blood sugar and support post-sauna recovery is provided." },
      { question: "How big is the group?", answer: "Maximum 6 people. This ensures safety, intimacy, and enough time for biometrics and treatments." },
      { question: "What language is the retreat in?", answer: "English, Portuguese, or Spanish on request for private groups." }
    ],
    es: [
      { question: "¿Cuál es el propósito de este retiro?", answer: "Restablecer tus ritmos biológicos en un día estructurado usando terapia de calor, biometría, respiración, nutrición alineada circadianamente, exposición a la naturaleza y activación linfática." },
      { question: "¿Qué es la microcirculación?", answer: "La microcirculación se refiere al flujo sanguíneo a través de los vasos más pequeños de tu cuerpo — capilares, arteriolas y vénulas. Es responsable de la entrega de nutrientes, suministro de oxígeno, eliminación de toxinas, flujo linfático y rejuvenecimiento celular." },
      { question: "¿Es el sauna seguro para todos?", answer: "El sauna es seguro para la mayoría de las personas. Las excepciones incluyen embarazo, hipertensión no controlada, eventos cardíacos recientes, fiebre o infección aguda, neuropatía severa y condiciones donde la exposición al calor está contraindicada." },
      { question: "¿Qué debo llevar?", answer: "Traje de baño, ropa cómoda, botella de agua, toalla ligera (proporcionamos toallas de sauna), protector solar (opcional para la caminata en la naturaleza), cualquier medicamento personal y cuaderno para integración si lo deseas." },
      { question: "¿El almuerzo está incluido?", answer: "Sí. Se proporciona una comida vegetal, sin gluten, cálida, amigable con la digestión y rica en minerales, diseñada para estabilizar el azúcar en sangre y apoyar la recuperación post-sauna." },
      { question: "¿Qué tan grande es el grupo?", answer: "Máximo 6 personas. Esto asegura seguridad, intimidad y tiempo suficiente para biometría y tratamientos." },
      { question: "¿En qué idioma es el retiro?", answer: "Inglés, portugués o español a pedido para grupos privados." }
    ],
    pt: [
      { question: "Qual é o propósito deste retiro?", answer: "Redefinir seus ritmos biológicos em um dia estruturado usando terapia de calor, biometria, respiração, nutrição alinhada circadianamente, exposição à natureza e ativação linfática." },
      { question: "O que é microcirculação?", answer: "Microcirculação refere-se ao fluxo sanguíneo através dos menores vasos do seu corpo — capilares, arteríolas e vênulas. É responsável pela entrega de nutrientes, fornecimento de oxigênio, remoção de toxinas, fluxo linfático e rejuvenescimento celular." },
      { question: "A sauna é segura para todos?", answer: "A sauna é segura para a maioria das pessoas. As exceções incluem gravidez, hipertensão não controlada, eventos cardíacos recentes, febre ou infecção aguda, neuropatia severa e condições onde a exposição ao calor é contraindicada." },
      { question: "O que devo levar?", answer: "Roupa de banho, roupas confortáveis, garrafa de água, toalha leve (fornecemos toalhas de sauna), protetor solar (opcional para a caminhada na natureza), qualquer medicamento pessoal e caderno para integração se desejar." },
      { question: "O almoço está incluído?", answer: "Sim. Uma refeição vegetal, sem glúten, quente, amigável à digestão e rica em minerais, projetada para estabilizar o açúcar no sangue e apoiar a recuperação pós-sauna é fornecida." },
      { question: "Qual o tamanho do grupo?", answer: "Máximo 6 pessoas. Isso garante segurança, intimidade e tempo suficiente para biometria e tratamentos." },
      { question: "Em que idioma é o retiro?", answer: "Inglês, português ou espanhol a pedido para grupos privados." }
    ]
  };

  const whoFor = {
    en: ["Overwhelmed professionals", "Perimenopause/post-menopause women", "Digestive imbalance", "Low energy, cravings, or poor sleep", "People wanting grounded physiological reset", "Anyone tired of trends, rituals, or dogma"],
    es: ["Profesionales abrumados", "Mujeres en perimenopausia/post-menopausia", "Desequilibrio digestivo", "Baja energía, antojos o mal sueño", "Personas que buscan un reset fisiológico arraigado", "Cualquiera cansado de tendencias, rituales o dogmas"],
    pt: ["Profissionais sobrecarregados", "Mulheres na perimenopausa/pós-menopausa", "Desequilíbrio digestivo", "Baixa energia, desejos ou sono ruim", "Pessoas que buscam um reset fisiológico ancorado", "Qualquer um cansado de tendências, rituais ou dogmas"]
  };

  const whoNotFor = {
    en: ["Those looking for spiritual ceremonies", "Extreme detox seekers", "People unable to tolerate sauna (medical exceptions)"],
    es: ["Aquellos que buscan ceremonias espirituales", "Buscadores de desintoxicación extrema", "Personas que no pueden tolerar el sauna (excepciones médicas)"],
    pt: ["Aqueles que procuram cerimônias espirituais", "Buscadores de desintoxicação extrema", "Pessoas que não podem tolerar a sauna (exceções médicas)"]
  };

  const takeHome = {
    en: ["Biometric report", "One personalized rhythm recommendation", "Heat detox protocol", "Breathwork sequence", "Digestive and hydration guidance", "Enhanced clarity and energy", "Priority access to 3/6/9-month QRN mentoring"],
    es: ["Informe biométrico", "Una recomendación de ritmo personalizada", "Protocolo de desintoxicación por calor", "Secuencia de respiración", "Guía digestiva y de hidratación", "Claridad y energía mejoradas", "Acceso prioritario a mentoría QRN de 3/6/9 meses"],
    pt: ["Relatório biométrico", "Uma recomendação de ritmo personalizada", "Protocolo de desintoxicação por calor", "Sequência de respiração", "Orientação digestiva e de hidratação", "Clareza e energia aprimoradas", "Acesso prioritário à mentoria QRN de 3/6/9 meses"]
  };

  const currentDates = retreatDates[language] || retreatDates.en;
  const currentSchedule = schedule[language] || schedule.en;
  const currentFaqs = faqs[language] || faqs.en;
  const currentWhoFor = whoFor[language] || whoFor.en;
  const currentWhoNotFor = whoNotFor[language] || whoNotFor.en;
  const currentTakeHome = takeHome[language] || takeHome.en;

  const texts = {
    en: {
      monthlyDates: "2026 Retreat Dates",
      monthlyDatesDesc: "One retreat per month from April to October. Book your preferred date.",
      spotsAvailable: "Spots Available",
      bookDate: "Book This Date",
      scheduleTitle: "The Experience",
      scheduleTime: "10:00 to 16:45",
      whoForTitle: "Who This Is For",
      whoNotForTitle: "Who This Is Not For",
      bookTitle: "Book Your Experience",
      bookDesc: "Retreats run once per month from March to September. Maximum 6 people to maintain quality and safety. Spaces fill quickly due to the intimate setting and biometric component.",
      requestDates: "Request Dates & Book"
    },
    es: {
      monthlyDates: "Fechas de Retiro 2026",
      monthlyDatesDesc: "Un retiro por mes de abril a octubre. Reserva tu fecha preferida.",
      spotsAvailable: "Lugares Disponibles",
      bookDate: "Reservar Esta Fecha",
      scheduleTitle: "La Experiencia",
      scheduleTime: "10:00 a 16:45",
      whoForTitle: "Para Quién Es Esto",
      whoNotForTitle: "Para Quién No Es Esto",
      bookTitle: "Reserva Tu Experiencia",
      bookDesc: "Los retiros se realizan una vez al mes de marzo a septiembre. Máximo 6 personas para mantener la calidad y seguridad. Los espacios se llenan rápidamente debido al entorno íntimo y el componente biométrico.",
      requestDates: "Solicitar Fechas y Reservar"
    },
    pt: {
      monthlyDates: "Datas de Retiro 2026",
      monthlyDatesDesc: "Um retiro por mês de abril a outubro. Reserve sua data preferida.",
      spotsAvailable: "Vagas Disponíveis",
      bookDate: "Reservar Esta Data",
      scheduleTitle: "A Experiência",
      scheduleTime: "10:00 às 16:45",
      whoForTitle: "Para Quem É Isso",
      whoNotForTitle: "Para Quem Não É Isso",
      bookTitle: "Reserve Sua Experiência",
      bookDesc: "Os retiros acontecem uma vez por mês de março a setembro. Máximo 6 pessoas para manter a qualidade e segurança. Os espaços se preenchem rapidamente devido ao ambiente íntimo e ao componente biométrico.",
      requestDates: "Solicitar Datas e Reservar"
    }
  };

  const currentTexts = texts[language] || texts.en;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Solaris Nutri" className="h-24 w-auto rounded-full" />
            </div>
            <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-6">
              <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
              {t('retreat.badge')}
            </div>
            <h1 className="font-serif text-6xl md:text-7xl font-bold text-primary mb-6">
              {t('retreat.title')}
            </h1>
            <p className="font-sans text-xl text-foreground/80 leading-relaxed mb-8">
              {t('retreat.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <MapPin size={20} />
              <span className="font-sans">{t('retreat.location')}</span>
            </div>
            <Button 
              onClick={() => window.location.href = '/contact'}
              size="lg" 
              className="bg-accent hover:bg-accent/90 font-sans text-lg px-8"
            >
              {t('retreat.book')}
            </Button>
          </div>
        </div>
      </section>

      {/* Nature & Food Images */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-xl shadow-subtle-glow">
                <img 
                  src={natureRetreat} 
                  alt="Nature wellness path" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-sans text-sm tracking-wide">
                  {language === 'es' ? 'Conexión con la Naturaleza' : language === 'pt' ? 'Conexão com a Natureza' : 'Nature Connection'}
                </span>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-subtle-glow">
                <img 
                  src={wholesomeFood} 
                  alt="Wholesome organic food" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-sans text-sm tracking-wide">
                  {language === 'es' ? 'Nutrición Integral' : language === 'pt' ? 'Nutrição Integral' : 'Wholesome Nutrition'}
                </span>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-subtle-glow">
                <img 
                  src={nourishingBowl} 
                  alt="Nourishing meal" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-sans text-sm tracking-wide">
                  {language === 'es' ? 'Alimentación Armoniosa' : language === 'pt' ? 'Alimentação Harmoniosa' : 'Harmonious Eating'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Retreat Dates */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-accent mb-4">
                <CalendarDays size={24} />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                {currentTexts.monthlyDates}
              </h2>
              <p className="font-sans text-lg text-foreground/80">
                {currentTexts.monthlyDatesDesc}
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentDates.map((date, index) => (
                <Card key={index} className="border-border hover:border-accent/50 transition-all text-center">
                  <CardHeader className="pb-2">
                    <CardTitle className="font-serif text-xl text-primary">
                      {date.month}
                    </CardTitle>
                    <CardDescription className="font-sans text-sm">
                      {date.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-accent font-sans mb-3">{currentTexts.spotsAvailable}</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full font-sans text-xs"
                      onClick={() => window.location.href = '/contact'}
                    >
                      {currentTexts.bookDate}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              {t('retreat.whyTitle')}
            </h2>
            <div className="font-sans text-lg text-foreground/80 leading-relaxed space-y-4 mb-12">
              <p>{t('retreat.whyIntro')}</p>
              <p>{t('retreat.whyResult')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Heart, text: language === 'es' ? "Biometría metabólica" : language === 'pt' ? "Biometria metabólica" : "Metabolic biometrics" },
                { icon: Sun, text: language === 'es' ? "Hormesis calor + frío" : language === 'pt' ? "Hormese calor + frio" : "Heat + cold hormesis" },
                { icon: Wind, text: language === 'es' ? "Respiración enfocada en el vago" : language === 'pt' ? "Respiração focada no vago" : "Vagus-focused breathwork" },
                { icon: Leaf, text: language === 'es' ? "Arraigo elemento tierra" : language === 'pt' ? "Ancoragem elemento terra" : "Earth-element grounding" },
                { icon: Clock, text: language === 'es' ? "Nutrición alineada circadianamente" : language === 'pt' ? "Nutrição alinhada circadianamente" : "Circadian-aligned nutrition" },
                { icon: Droplets, text: language === 'es' ? "Estimulación linfática" : language === 'pt' ? "Estimulação linfática" : "Lymphatic stimulation" }
              ].map((item, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="flex items-center gap-4 pt-6">
                    <item.icon className="text-accent flex-shrink-0" size={32} />
                    <p className="font-sans text-foreground/80">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="font-sans text-lg text-center text-foreground/80 mt-8">
              {t('retreat.result')}
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
              {currentTexts.scheduleTitle}
            </h2>
            <p className="font-sans text-xl text-center text-muted-foreground mb-12">
              {currentTexts.scheduleTime}
            </p>
            <div className="space-y-4">
              {currentSchedule.map((item, index) => (
                <Card key={index} className="border-border hover:border-accent/50 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-sans text-sm font-medium text-accent">{item.time}</span>
                          <span className="font-sans text-sm text-muted-foreground">({item.duration})</span>
                        </div>
                        <CardTitle className="font-serif text-xl text-primary">
                          {item.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-foreground/80">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Take Home */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              {t('retreat.takeHome')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {currentTakeHome.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span className="font-sans text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              {t('retreat.pricing')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    {language === 'es' ? 'Experiencia Grupal' : language === 'pt' ? 'Experiência em Grupo' : 'Group Experience'}
                  </CardTitle>
                  <CardDescription className="font-sans text-sm">
                    {language === 'es' ? 'Mínimo 4 participantes' : language === 'pt' ? 'Mínimo 4 participantes' : 'Minimum 4 participants'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-serif text-4xl font-bold text-accent mb-4">€120</p>
                  <p className="font-sans text-sm text-muted-foreground">{language === 'es' ? 'por persona' : language === 'pt' ? 'por pessoa' : 'per person'}</p>
                </CardContent>
              </Card>

              <Card className="border-accent/50 bg-accent/5">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    {language === 'es' ? 'Grupo Privado' : language === 'pt' ? 'Grupo Privado' : 'Private Group'}
                  </CardTitle>
                  <CardDescription className="font-sans text-sm">
                    {language === 'es' ? 'Amigos/Familias (hasta 5)' : language === 'pt' ? 'Amigos/Famílias (até 5)' : 'Friends/Families (up to 5 people)'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-serif text-4xl font-bold text-accent mb-4">€650</p>
                  <p className="font-sans text-sm text-muted-foreground">
                    {language === 'es' ? 'Incluye biometría + informe para cada invitado' : language === 'pt' ? 'Inclui biometria + relatório para cada convidado' : 'Includes biometrics + report for each guest'}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    {language === 'es' ? 'Día VIP 1:1' : language === 'pt' ? 'Dia VIP 1:1' : '1:1 VIP Reset Day'}
                  </CardTitle>
                  <CardDescription className="font-sans text-sm">
                    {language === 'es' ? 'Experiencia profundamente personalizada' : language === 'pt' ? 'Experiência profundamente personalizada' : 'Deep personalized experience'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-serif text-4xl font-bold text-accent mb-4">€500</p>
                  <p className="font-sans text-sm text-muted-foreground">
                    {language === 'es' ? 'Realineación rítmica completa' : language === 'pt' ? 'Realinhamento rítmico completo' : 'Complete rhythm realignment'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-3xl font-bold text-primary mb-6">
                  {currentTexts.whoForTitle}
                </h3>
                <ul className="space-y-3">
                  {currentWhoFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                      <span className="font-sans text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-primary mb-6">
                  {currentTexts.whoNotForTitle}
                </h3>
                <ul className="space-y-3">
                  {currentWhoNotFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Circle size={8} fill="currentColor" className="text-muted-foreground mt-2 flex-shrink-0" />
                      <span className="font-sans text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              {t('retreat.faq')}
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {currentFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="font-sans text-left text-foreground/90 hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-foreground/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              {currentTexts.bookTitle}
            </h2>
            <p className="font-sans text-lg text-foreground/80 mb-8">
              {currentTexts.bookDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/contact'}
                size="lg"
                className="bg-accent hover:bg-accent/90 font-sans text-lg px-8"
              >
                {currentTexts.requestDates}
              </Button>
              <Button 
                onClick={() => window.location.href = '/programs'}
                variant="outline"
                size="lg"
                className="font-sans text-lg px-8"
              >
                {t('method.cta.button')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarthRhythmRetreat;
