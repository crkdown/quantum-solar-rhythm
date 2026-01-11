import { useState } from "react";
import { Circle, Clock, Sun, Moon, Utensils, ChevronRight, ChevronLeft, RotateCcw, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

type Answer = {
  questionIndex: number;
  value: string;
};

type RhythmResult = {
  type: string;
  title: string;
  description: string;
  eatingWindow: string;
  meals: {
    name: string;
    time: string;
    recommendation: string;
  }[];
  tips: string[];
  program: string;
};

const FoodRhythmTool = () => {
  const { language, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<RhythmResult | null>(null);

  const questions = {
    en: [
      {
        question: "What time do you naturally wake up without an alarm?",
        options: [
          { value: "early", label: "Before 6:00 AM" },
          { value: "moderate", label: "6:00 – 7:30 AM" },
          { value: "late", label: "After 7:30 AM" }
        ]
      },
      {
        question: "When do you feel your digestive fire is strongest?",
        options: [
          { value: "morning", label: "Morning (before 10 AM)" },
          { value: "midday", label: "Midday (10 AM – 2 PM)" },
          { value: "evening", label: "Evening (after 5 PM)" }
        ]
      },
      {
        question: "How do you feel after eating a large breakfast?",
        options: [
          { value: "energized", label: "Energized and focused" },
          { value: "neutral", label: "Neutral – no strong effect" },
          { value: "sluggish", label: "Heavy or sluggish" }
        ]
      },
      {
        question: "When do you experience your afternoon energy dip?",
        options: [
          { value: "early", label: "Around 1–2 PM" },
          { value: "mid", label: "Around 3–4 PM" },
          { value: "late", label: "Around 5–6 PM or rarely" }
        ]
      },
      {
        question: "How does eating late (after 8 PM) affect your sleep?",
        options: [
          { value: "disrupts", label: "Significantly disrupts my sleep" },
          { value: "slightly", label: "Slightly affects my rest" },
          { value: "fine", label: "No noticeable effect" }
        ]
      },
      {
        question: "What is your current eating pattern?",
        options: [
          { value: "structured", label: "Regular meals at set times" },
          { value: "irregular", label: "Irregular – I eat when hungry" },
          { value: "grazing", label: "Frequent snacking throughout day" }
        ]
      },
      {
        question: "How long can you comfortably go between meals?",
        options: [
          { value: "short", label: "2–3 hours maximum" },
          { value: "moderate", label: "4–5 hours" },
          { value: "long", label: "6+ hours without issue" }
        ]
      },
      {
        question: "When do you feel most mentally sharp?",
        options: [
          { value: "morning", label: "Morning (before noon)" },
          { value: "afternoon", label: "Afternoon (noon – 5 PM)" },
          { value: "evening", label: "Evening (after 5 PM)" }
        ]
      }
    ],
    es: [
      {
        question: "¿A qué hora te despiertas naturalmente sin alarma?",
        options: [
          { value: "early", label: "Antes de las 6:00 AM" },
          { value: "moderate", label: "6:00 – 7:30 AM" },
          { value: "late", label: "Después de las 7:30 AM" }
        ]
      },
      {
        question: "¿Cuándo sientes que tu fuego digestivo es más fuerte?",
        options: [
          { value: "morning", label: "Mañana (antes de las 10 AM)" },
          { value: "midday", label: "Mediodía (10 AM – 2 PM)" },
          { value: "evening", label: "Noche (después de las 5 PM)" }
        ]
      },
      {
        question: "¿Cómo te sientes después de un desayuno abundante?",
        options: [
          { value: "energized", label: "Con energía y enfocada" },
          { value: "neutral", label: "Neutral – sin efecto fuerte" },
          { value: "sluggish", label: "Pesada o lenta" }
        ]
      },
      {
        question: "¿Cuándo experimentas tu bajón de energía de la tarde?",
        options: [
          { value: "early", label: "Alrededor de 1–2 PM" },
          { value: "mid", label: "Alrededor de 3–4 PM" },
          { value: "late", label: "Alrededor de 5–6 PM o raramente" }
        ]
      },
      {
        question: "¿Cómo afecta comer tarde (después de las 8 PM) tu sueño?",
        options: [
          { value: "disrupts", label: "Interrumpe significativamente mi sueño" },
          { value: "slightly", label: "Afecta ligeramente mi descanso" },
          { value: "fine", label: "Sin efecto notable" }
        ]
      },
      {
        question: "¿Cuál es tu patrón alimenticio actual?",
        options: [
          { value: "structured", label: "Comidas regulares a horas fijas" },
          { value: "irregular", label: "Irregular – como cuando tengo hambre" },
          { value: "grazing", label: "Picoteo frecuente durante el día" }
        ]
      },
      {
        question: "¿Cuánto tiempo puedes pasar cómodamente entre comidas?",
        options: [
          { value: "short", label: "2–3 horas máximo" },
          { value: "moderate", label: "4–5 horas" },
          { value: "long", label: "6+ horas sin problema" }
        ]
      },
      {
        question: "¿Cuándo te sientes mentalmente más aguda?",
        options: [
          { value: "morning", label: "Mañana (antes del mediodía)" },
          { value: "afternoon", label: "Tarde (mediodía – 5 PM)" },
          { value: "evening", label: "Noche (después de las 5 PM)" }
        ]
      }
    ],
    pt: [
      {
        question: "A que horas você acorda naturalmente sem alarme?",
        options: [
          { value: "early", label: "Antes das 6:00" },
          { value: "moderate", label: "6:00 – 7:30" },
          { value: "late", label: "Depois das 7:30" }
        ]
      },
      {
        question: "Quando você sente que seu fogo digestivo é mais forte?",
        options: [
          { value: "morning", label: "Manhã (antes das 10h)" },
          { value: "midday", label: "Meio-dia (10h – 14h)" },
          { value: "evening", label: "Noite (depois das 17h)" }
        ]
      },
      {
        question: "Como você se sente após um café da manhã abundante?",
        options: [
          { value: "energized", label: "Com energia e focada" },
          { value: "neutral", label: "Neutro – sem efeito forte" },
          { value: "sluggish", label: "Pesada ou lenta" }
        ]
      },
      {
        question: "Quando você experimenta seu baixo de energia da tarde?",
        options: [
          { value: "early", label: "Por volta das 13–14h" },
          { value: "mid", label: "Por volta das 15–16h" },
          { value: "late", label: "Por volta das 17–18h ou raramente" }
        ]
      },
      {
        question: "Como comer tarde (depois das 20h) afeta seu sono?",
        options: [
          { value: "disrupts", label: "Interrompe significativamente meu sono" },
          { value: "slightly", label: "Afeta ligeiramente meu descanso" },
          { value: "fine", label: "Sem efeito notável" }
        ]
      },
      {
        question: "Qual é seu padrão alimentar atual?",
        options: [
          { value: "structured", label: "Refeições regulares em horários fixos" },
          { value: "irregular", label: "Irregular – como quando tenho fome" },
          { value: "grazing", label: "Beliscar frequente durante o dia" }
        ]
      },
      {
        question: "Quanto tempo você pode ficar confortavelmente entre refeições?",
        options: [
          { value: "short", label: "2–3 horas no máximo" },
          { value: "moderate", label: "4–5 horas" },
          { value: "long", label: "6+ horas sem problema" }
        ]
      },
      {
        question: "Quando você se sente mentalmente mais aguçada?",
        options: [
          { value: "morning", label: "Manhã (antes do meio-dia)" },
          { value: "afternoon", label: "Tarde (meio-dia – 17h)" },
          { value: "evening", label: "Noite (depois das 17h)" }
        ]
      }
    ]
  };

  const currentQuestions = questions[language] || questions.en;

  const calculateResult = (): RhythmResult => {
    const answerValues = answers.map(a => a.value);
    
    const morningScore = answerValues.filter(v => 
      ["early", "morning", "energized", "disrupts", "structured", "long"].includes(v)
    ).length;
    
    const eveningScore = answerValues.filter(v => 
      ["late", "evening", "fine", "sluggish"].includes(v)
    ).length;

    const results = {
      en: {
        solar: {
          type: "solar",
          title: "Solar Rhythm",
          description: "Your biology follows a strong solar pattern. Your digestive fire peaks in the morning and midday, making early eating windows optimal for nutrient absorption and metabolic efficiency.",
          eatingWindow: "7:00 AM – 6:00 PM",
          meals: [
            { name: "First Meal", time: "7:00 – 8:00 AM", recommendation: "Substantial, warm, protein-rich meal to fuel your active morning metabolism" },
            { name: "Main Meal", time: "12:00 – 1:00 PM", recommendation: "Largest meal of the day when digestive capacity is highest" },
            { name: "Light Supper", time: "5:00 – 6:00 PM", recommendation: "Light, easily digestible meal to support evening rest" }
          ],
          tips: [
            "Front-load your calories earlier in the day",
            "Avoid eating within 3 hours of sleep",
            "Morning sunlight exposure enhances your rhythm",
            "Consider 12-hour overnight fasting windows"
          ],
          program: "3-Month Rhythm Reset"
        },
        lunar: {
          type: "lunar",
          title: "Lunar Rhythm",
          description: "Your system operates on a slower morning activation. Your digestive capacity builds throughout the day, reaching optimal function in late morning to early evening.",
          eatingWindow: "10:00 AM – 7:00 PM",
          meals: [
            { name: "Light Start", time: "10:00 – 11:00 AM", recommendation: "Light, warm foods to gently activate digestion without overwhelming morning detox" },
            { name: "Main Meal", time: "2:00 – 3:00 PM", recommendation: "Your primary nutrient-dense meal when digestion is strong" },
            { name: "Evening Meal", time: "6:00 – 7:00 PM", recommendation: "Moderate, balanced meal before your natural wind-down" }
          ],
          tips: [
            "Allow morning detox to complete before eating",
            "Hydrate well in the morning with warm water or herbal tea",
            "Your creativity peaks in evening – protect this time",
            "Gentle movement before first meal aids digestion"
          ],
          program: "6-Month Coherence Deepening"
        },
        transitional: {
          type: "transitional",
          title: "Transitional Rhythm",
          description: "Your rhythm shows adaptability but may lack consistent anchoring. This often indicates circadian disruption from irregular schedules, stress, or modern lifestyle factors.",
          eatingWindow: "8:00 AM – 7:00 PM",
          meals: [
            { name: "Morning Anchor", time: "8:00 – 9:00 AM", recommendation: "Consistent timing is key – warm, grounding foods to establish rhythm" },
            { name: "Midday Nourishment", time: "12:30 – 1:30 PM", recommendation: "Balanced meal to stabilize blood sugar and sustain afternoon focus" },
            { name: "Early Evening", time: "6:00 – 7:00 PM", recommendation: "Complete eating to allow full overnight digestive rest" }
          ],
          tips: [
            "Consistency matters more than perfect timing",
            "Eat at the same times daily to reset your rhythm",
            "Reduce snacking to strengthen meal-based digestion",
            "Morning light and evening darkness cues are essential"
          ],
          program: "3-Month Rhythm Reset"
        }
      },
      es: {
        solar: {
          type: "solar",
          title: "Ritmo Solar",
          description: "Tu biología sigue un fuerte patrón solar. Tu fuego digestivo alcanza su máximo en la mañana y mediodía, haciendo que las ventanas de alimentación tempranas sean óptimas para la absorción de nutrientes y eficiencia metabólica.",
          eatingWindow: "7:00 AM – 6:00 PM",
          meals: [
            { name: "Primera Comida", time: "7:00 – 8:00 AM", recommendation: "Comida sustancial, caliente y rica en proteínas para alimentar tu metabolismo matutino activo" },
            { name: "Comida Principal", time: "12:00 – 1:00 PM", recommendation: "La comida más grande del día cuando la capacidad digestiva es más alta" },
            { name: "Cena Ligera", time: "5:00 – 6:00 PM", recommendation: "Comida ligera y fácil de digerir para apoyar el descanso nocturno" }
          ],
          tips: [
            "Concentra tus calorías más temprano en el día",
            "Evita comer dentro de las 3 horas antes de dormir",
            "La exposición a la luz solar matutina mejora tu ritmo",
            "Considera ventanas de ayuno nocturno de 12 horas"
          ],
          program: "Reset de Ritmo de 3 Meses"
        },
        lunar: {
          type: "lunar",
          title: "Ritmo Lunar",
          description: "Tu sistema opera con una activación matutina más lenta. Tu capacidad digestiva se desarrolla durante el día, alcanzando función óptima desde la mañana tardía hasta la tarde temprana.",
          eatingWindow: "10:00 AM – 7:00 PM",
          meals: [
            { name: "Inicio Ligero", time: "10:00 – 11:00 AM", recommendation: "Alimentos ligeros y calientes para activar suavemente la digestión sin abrumar la desintoxicación matutina" },
            { name: "Comida Principal", time: "2:00 – 3:00 PM", recommendation: "Tu comida principal rica en nutrientes cuando la digestión es fuerte" },
            { name: "Cena", time: "6:00 – 7:00 PM", recommendation: "Comida moderada y equilibrada antes de tu relajación natural" }
          ],
          tips: [
            "Permite que la desintoxicación matutina se complete antes de comer",
            "Hidrátate bien por la mañana con agua tibia o té de hierbas",
            "Tu creatividad alcanza su máximo en la noche – protege este tiempo",
            "El movimiento suave antes de la primera comida ayuda a la digestión"
          ],
          program: "Profundización de Coherencia de 6 Meses"
        },
        transitional: {
          type: "transitional",
          title: "Ritmo Transicional",
          description: "Tu ritmo muestra adaptabilidad pero puede carecer de anclaje consistente. Esto a menudo indica interrupción circadiana por horarios irregulares, estrés o factores del estilo de vida moderno.",
          eatingWindow: "8:00 AM – 7:00 PM",
          meals: [
            { name: "Ancla Matutina", time: "8:00 – 9:00 AM", recommendation: "La consistencia del horario es clave – alimentos calientes y arraigantes para establecer ritmo" },
            { name: "Nutrición del Mediodía", time: "12:30 – 1:30 PM", recommendation: "Comida equilibrada para estabilizar el azúcar en sangre y mantener el enfoque de la tarde" },
            { name: "Tarde Temprana", time: "6:00 – 7:00 PM", recommendation: "Completa la alimentación para permitir el descanso digestivo nocturno completo" }
          ],
          tips: [
            "La consistencia importa más que el horario perfecto",
            "Come a las mismas horas diariamente para resetear tu ritmo",
            "Reduce el picoteo para fortalecer la digestión basada en comidas",
            "Las señales de luz matutina y oscuridad nocturna son esenciales"
          ],
          program: "Reset de Ritmo de 3 Meses"
        }
      },
      pt: {
        solar: {
          type: "solar",
          title: "Ritmo Solar",
          description: "Sua biologia segue um forte padrão solar. Seu fogo digestivo atinge o pico pela manhã e meio-dia, tornando as janelas de alimentação mais cedo ideais para absorção de nutrientes e eficiência metabólica.",
          eatingWindow: "7:00 – 18:00",
          meals: [
            { name: "Primeira Refeição", time: "7:00 – 8:00", recommendation: "Refeição substancial, quente e rica em proteínas para alimentar seu metabolismo matinal ativo" },
            { name: "Refeição Principal", time: "12:00 – 13:00", recommendation: "A maior refeição do dia quando a capacidade digestiva é mais alta" },
            { name: "Jantar Leve", time: "17:00 – 18:00", recommendation: "Refeição leve e fácil de digerir para apoiar o descanso noturno" }
          ],
          tips: [
            "Concentre suas calorias mais cedo no dia",
            "Evite comer dentro de 3 horas antes de dormir",
            "A exposição à luz solar matinal melhora seu ritmo",
            "Considere janelas de jejum noturno de 12 horas"
          ],
          program: "Reset de Ritmo de 3 Meses"
        },
        lunar: {
          type: "lunar",
          title: "Ritmo Lunar",
          description: "Seu sistema opera com uma ativação matinal mais lenta. Sua capacidade digestiva se desenvolve ao longo do dia, atingindo função ótima do final da manhã até o início da noite.",
          eatingWindow: "10:00 – 19:00",
          meals: [
            { name: "Início Leve", time: "10:00 – 11:00", recommendation: "Alimentos leves e quentes para ativar suavemente a digestão sem sobrecarregar a desintoxicação matinal" },
            { name: "Refeição Principal", time: "14:00 – 15:00", recommendation: "Sua refeição principal rica em nutrientes quando a digestão é forte" },
            { name: "Jantar", time: "18:00 – 19:00", recommendation: "Refeição moderada e equilibrada antes do seu relaxamento natural" }
          ],
          tips: [
            "Permita que a desintoxicação matinal se complete antes de comer",
            "Hidrate-se bem pela manhã com água morna ou chá de ervas",
            "Sua criatividade atinge o pico à noite – proteja este tempo",
            "Movimento suave antes da primeira refeição ajuda a digestão"
          ],
          program: "Aprofundamento de Coerência de 6 Meses"
        },
        transitional: {
          type: "transitional",
          title: "Ritmo Transicional",
          description: "Seu ritmo mostra adaptabilidade mas pode carecer de ancoragem consistente. Isso frequentemente indica interrupção circadiana por horários irregulares, estresse ou fatores do estilo de vida moderno.",
          eatingWindow: "8:00 – 19:00",
          meals: [
            { name: "Âncora Matinal", time: "8:00 – 9:00", recommendation: "A consistência do horário é chave – alimentos quentes e ancorados para estabelecer ritmo" },
            { name: "Nutrição do Meio-dia", time: "12:30 – 13:30", recommendation: "Refeição equilibrada para estabilizar o açúcar no sangue e manter o foco da tarde" },
            { name: "Início da Noite", time: "18:00 – 19:00", recommendation: "Complete a alimentação para permitir o descanso digestivo noturno completo" }
          ],
          tips: [
            "A consistência importa mais que o horário perfeito",
            "Coma nos mesmos horários diariamente para resetar seu ritmo",
            "Reduza os beliscos para fortalecer a digestão baseada em refeições",
            "Os sinais de luz matinal e escuridão noturna são essenciais"
          ],
          program: "Reset de Ritmo de 3 Meses"
        }
      }
    };

    const currentResults = results[language] || results.en;

    if (morningScore >= 5) {
      return currentResults.solar;
    } else if (eveningScore >= 4) {
      return currentResults.lunar;
    } else {
      return currentResults.transitional;
    }
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers.filter(a => a.questionIndex !== currentStep), { questionIndex: currentStep, value }];
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < currentQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setResult(calculateResult());
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  const currentAnswer = answers.find(a => a.questionIndex === currentStep)?.value;
  const progress = ((currentStep + 1) / currentQuestions.length) * 100;

  const texts = {
    en: {
      badge: "Food Rhythm Tool",
      title: "Discover Your Eating Rhythm",
      subtitle: "Answer 8 questions to uncover your optimal meal timing and eating windows based on your natural biological rhythm.",
      question: "Question",
      of: "of",
      complete: "complete",
      back: "Back",
      next: "Next",
      seeRhythm: "See My Rhythm",
      profile: "Your Food Rhythm Profile",
      eatingWindow: "Optimal Eating Window",
      mealRhythm: "Recommended Meal Rhythm",
      tips: "Rhythm Alignment Tips",
      recommended: "Recommended Program",
      basedOn: "Based on your rhythm profile, we recommend the",
      toOptimize: "to fully optimize your eating patterns and restore circadian coherence.",
      explorePrograms: "Explore Programs",
      retake: "Retake Assessment",
      download: "Download Your Rhythm Plan"
    },
    es: {
      badge: "Herramienta de Ritmo Alimenticio",
      title: "Descubre Tu Ritmo Alimenticio",
      subtitle: "Responde 8 preguntas para descubrir tus horarios óptimos de comidas y ventanas de alimentación basados en tu ritmo biológico natural.",
      question: "Pregunta",
      of: "de",
      complete: "completado",
      back: "Atrás",
      next: "Siguiente",
      seeRhythm: "Ver Mi Ritmo",
      profile: "Tu Perfil de Ritmo Alimenticio",
      eatingWindow: "Ventana de Alimentación Óptima",
      mealRhythm: "Ritmo de Comidas Recomendado",
      tips: "Consejos de Alineación Rítmica",
      recommended: "Programa Recomendado",
      basedOn: "Basado en tu perfil de ritmo, recomendamos el",
      toOptimize: "para optimizar completamente tus patrones alimenticios y restaurar la coherencia circadiana.",
      explorePrograms: "Explorar Programas",
      retake: "Volver a Hacer la Evaluación",
      download: "Descarga Tu Plan de Ritmo"
    },
    pt: {
      badge: "Ferramenta de Ritmo Alimentar",
      title: "Descubra Seu Ritmo Alimentar",
      subtitle: "Responda 8 perguntas para descobrir seus horários ideais de refeições e janelas de alimentação baseados em seu ritmo biológico natural.",
      question: "Pergunta",
      of: "de",
      complete: "concluído",
      back: "Voltar",
      next: "Próximo",
      seeRhythm: "Ver Meu Ritmo",
      profile: "Seu Perfil de Ritmo Alimentar",
      eatingWindow: "Janela de Alimentação Ideal",
      mealRhythm: "Ritmo de Refeições Recomendado",
      tips: "Dicas de Alinhamento Rítmico",
      recommended: "Programa Recomendado",
      basedOn: "Com base no seu perfil de ritmo, recomendamos o",
      toOptimize: "para otimizar completamente seus padrões alimentares e restaurar a coerência circadiana.",
      explorePrograms: "Explorar Programas",
      retake: "Refazer Avaliação",
      download: "Baixe Seu Plano de Ritmo"
    }
  };

  const currentTexts = texts[language] || texts.en;

  if (result) {
    return (
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Solaris Nutri" className="h-20 w-auto rounded-full" />
            </div>
            <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
              <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
              {currentTexts.profile}
            </div>
            <div className="flex justify-center mb-6">
              {result.type === "solar" ? (
                <Sun size={64} className="text-accent" />
              ) : result.type === "lunar" ? (
                <Moon size={64} className="text-accent" />
              ) : (
                <Clock size={64} className="text-accent" />
              )}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              {result.title}
            </h1>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              {result.description}
            </p>
          </div>

          {/* Eating Window */}
          <Card className="mb-8 border-accent/30 animate-fade-in-up">
            <CardHeader className="text-center pb-2">
              <CardTitle className="font-serif text-2xl text-primary flex items-center justify-center gap-3">
                <Clock size={24} className="text-accent" />
                {currentTexts.eatingWindow}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <span className="font-serif text-3xl font-bold text-primary">{result.eatingWindow}</span>
              </div>
            </CardContent>
          </Card>

          {/* Meal Timing */}
          <Card className="mb-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-primary flex items-center gap-3">
                <Utensils size={24} className="text-accent" />
                {currentTexts.mealRhythm}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {result.meals.map((meal, index) => (
                <div key={index} className="flex gap-4 p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="flex-shrink-0 w-20 text-center">
                    <span className="font-sans text-sm font-semibold text-accent">{meal.time}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-semibold text-primary mb-1">{meal.name}</h4>
                    <p className="font-sans text-sm text-foreground/70">{meal.recommendation}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-primary">
                {currentTexts.tips}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                    <span className="font-sans text-foreground/80">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Program Recommendation */}
          <Card className="mb-8 bg-accent/5 border-accent/30 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                {currentTexts.recommended}
              </h3>
              <p className="font-sans text-foreground/70 mb-4">
                {currentTexts.basedOn} <strong>{result.program}</strong> {currentTexts.toOptimize}
              </p>
              <Link to="/programs">
                <Button className="font-sans">
                  {currentTexts.explorePrograms}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <Button variant="outline" onClick={handleRestart} className="font-sans">
              <RotateCcw size={16} className="mr-2" />
              {currentTexts.retake}
            </Button>
            <Button variant="outline" className="font-sans">
              <Download size={16} className="mr-2" />
              {currentTexts.download}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Solaris Nutri" className="h-20 w-auto rounded-full" />
          </div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            {currentTexts.badge}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            {currentTexts.title}
          </h1>
          <p className="font-sans text-lg text-foreground/80 leading-relaxed">
            {currentTexts.subtitle}
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-sans text-muted-foreground mb-2">
            <span>{currentTexts.question} {currentStep + 1} {currentTexts.of} {currentQuestions.length}</span>
            <span>{Math.round(progress)}% {currentTexts.complete}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-primary leading-relaxed">
              {currentQuestions[currentStep].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={currentAnswer} onValueChange={handleAnswer} className="space-y-4">
              {currentQuestions[currentStep].options.map((option, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                    currentAnswer === option.value 
                      ? 'border-accent bg-accent/5' 
                      : 'border-border hover:border-accent/50'
                  }`}
                  onClick={() => handleAnswer(option.value)}
                >
                  <RadioGroupItem value={option.value} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="font-sans text-foreground cursor-pointer flex-1"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="font-sans"
          >
            <ChevronLeft size={16} className="mr-2" />
            {currentTexts.back}
          </Button>
          <Button
            onClick={handleNext}
            disabled={!currentAnswer}
            className="font-sans"
          >
            {currentStep === currentQuestions.length - 1 ? currentTexts.seeRhythm : currentTexts.next}
            <ChevronRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodRhythmTool;
