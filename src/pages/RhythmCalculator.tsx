import { useState } from "react";
import { Circle, Heart, ArrowRight, ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

type Answer = {
  questionId: number;
  value: number;
};

type Result = {
  level: "Strong" | "Mild" | "Moderate" | "Significant";
  description: string;
  recommendations: string[];
  programSuggestion: string;
};

const RhythmCalculator = () => {
  const { t, language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<Result | null>(null);

  const questions = {
    en: [
      { id: 1, question: "Do you feel heavy, sluggish, or mentally foggy after meals?" },
      { id: 2, question: "Do you crave sweets or refined carbohydrates when stressed or fatigued?" },
      { id: 3, question: "Do you experience bloating, loose stools, or irregular digestion throughout the day?" },
      { id: 4, question: "Do you often overthink, ruminate, or feel mentally \"busy\" even when tired?" },
      { id: 5, question: "Do you feel worse when eating cold foods (salads, smoothies, iced drinks)?" },
      { id: 6, question: "Do you feel more fatigued in the late afternoon (TCM Earth time 1–5 pm)?" },
      { id: 7, question: "Do you frequently experience low appetite or sudden loss of appetite under stress?" },
      { id: 8, question: "Do your symptoms worsen in humid or damp conditions?" },
      { id: 9, question: "Do you feel emotionally unstable, easily overwhelmed, or unable to \"digest\" stress?" },
      { id: 10, question: "Do irregular eating times disrupt your energy, focus, or mood?" }
    ],
    es: [
      { id: 1, question: "¿Te sientes pesada, lenta o mentalmente nublada después de las comidas?" },
      { id: 2, question: "¿Anhelas dulces o carbohidratos refinados cuando estás estresada o fatigada?" },
      { id: 3, question: "¿Experimentas hinchazón, heces sueltas o digestión irregular durante el día?" },
      { id: 4, question: "¿A menudo piensas demasiado, rumias o te sientes mentalmente \"ocupada\" incluso cuando estás cansada?" },
      { id: 5, question: "¿Te sientes peor cuando comes alimentos fríos (ensaladas, batidos, bebidas heladas)?" },
      { id: 6, question: "¿Te sientes más fatigada en la tarde (hora de la Tierra MTC 1–5 pm)?" },
      { id: 7, question: "¿Experimentas frecuentemente poco apetito o pérdida repentina del apetito bajo estrés?" },
      { id: 8, question: "¿Tus síntomas empeoran en condiciones húmedas?" },
      { id: 9, question: "¿Te sientes emocionalmente inestable, fácilmente abrumada o incapaz de \"digerir\" el estrés?" },
      { id: 10, question: "¿Los horarios irregulares de comida interrumpen tu energía, enfoque o estado de ánimo?" }
    ],
    pt: [
      { id: 1, question: "Você se sente pesada, lenta ou mentalmente nublada após as refeições?" },
      { id: 2, question: "Você deseja doces ou carboidratos refinados quando está estressada ou fatigada?" },
      { id: 3, question: "Você experimenta inchaço, fezes soltas ou digestão irregular durante o dia?" },
      { id: 4, question: "Você frequentemente pensa demais, rumina ou se sente mentalmente \"ocupada\" mesmo quando cansada?" },
      { id: 5, question: "Você se sente pior quando come alimentos frios (saladas, smoothies, bebidas geladas)?" },
      { id: 6, question: "Você se sente mais fatigada no final da tarde (hora da Terra MTC 13–17h)?" },
      { id: 7, question: "Você frequentemente experimenta pouco apetite ou perda repentina de apetite sob estresse?" },
      { id: 8, question: "Seus sintomas pioram em condições úmidas?" },
      { id: 9, question: "Você se sente emocionalmente instável, facilmente sobrecarregada ou incapaz de \"digerir\" o estresse?" },
      { id: 10, question: "Os horários irregulares de refeição interrompem sua energia, foco ou humor?" }
    ]
  };

  const ratingOptions = {
    en: [
      { label: "Never", value: 0 },
      { label: "Occasionally", value: 1 },
      { label: "Frequently", value: 2 },
      { label: "Almost Always", value: 3 }
    ],
    es: [
      { label: "Nunca", value: 0 },
      { label: "Ocasionalmente", value: 1 },
      { label: "Frecuentemente", value: 2 },
      { label: "Casi Siempre", value: 3 }
    ],
    pt: [
      { label: "Nunca", value: 0 },
      { label: "Ocasionalmente", value: 1 },
      { label: "Frequentemente", value: 2 },
      { label: "Quase Sempre", value: 3 }
    ]
  };

  const currentQuestions = questions[language] || questions.en;
  const currentRatingOptions = ratingOptions[language] || ratingOptions.en;

  const calculateResult = (): Result => {
    const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);

    const results = {
      en: {
        strong: {
          level: "Strong" as const,
          description: "Strong spleen rhythm",
          recommendations: [
            "Your digestive and metabolic rhythms are well-aligned",
            "Continue maintaining consistent eating times",
            "Focus on seasonal nutrition to support your natural rhythm",
            "Consider preventive practices to maintain this balance"
          ],
          programSuggestion: "Maintain your rhythm with our seasonal resources and community support."
        },
        mild: {
          level: "Mild" as const,
          description: "Mild spleen dysregulation",
          recommendations: [
            "Begin aligning your eating times with circadian rhythms",
            "Incorporate warm, cooked foods over cold or raw options",
            "Practice mindful eating to support digestive flow",
            "Reduce stress around mealtimes",
            "Consider light movement after meals to support digestion"
          ],
          programSuggestion: "The 3-Month Rhythm Reset Program would help stabilize your patterns."
        },
        moderate: {
          level: "Moderate" as const,
          description: "Moderate dysregulation—circadian and digestive rhythms out of sync",
          recommendations: [
            "Establish consistent meal timing as your first priority",
            "Focus on warm, easy-to-digest foods",
            "Avoid cold and raw foods, especially in the morning",
            "Practice breathwork to support vagal tone",
            "Address stress patterns affecting digestion",
            "Consider the Earth Rhythm Reset Retreat for an immersive reset"
          ],
          programSuggestion: "The 3-Month Rhythm Reset Program combined with the Earth Rhythm Reset Retreat would provide comprehensive support."
        },
        significant: {
          level: "Significant" as const,
          description: "Significant depletion—digestive qi, vagal tone, and metabolic timing require urgent rhythm support",
          recommendations: [
            "Urgent rhythm realignment needed",
            "Begin with the Earth Rhythm Reset Retreat for immediate support",
            "Establish strict meal timing consistency",
            "Focus exclusively on warm, cooked, nourishing foods",
            "Implement daily breathwork and vagus nerve support",
            "Reduce all sources of chronic stress",
            "Consider gut-brain axis restoration protocols",
            "Work with personalized support through extended mentoring"
          ],
          programSuggestion: "We recommend starting with the Earth Rhythm Reset Retreat, followed by the 6-Month Coherence Deepening Program for comprehensive metabolic and nervous system restoration."
        }
      },
      es: {
        strong: {
          level: "Strong" as const,
          description: "Ritmo del bazo fuerte",
          recommendations: [
            "Tus ritmos digestivos y metabólicos están bien alineados",
            "Continúa manteniendo horarios de comida consistentes",
            "Enfócate en la nutrición estacional para apoyar tu ritmo natural",
            "Considera prácticas preventivas para mantener este equilibrio"
          ],
          programSuggestion: "Mantén tu ritmo con nuestros recursos estacionales y apoyo comunitario."
        },
        mild: {
          level: "Mild" as const,
          description: "Desregulación leve del bazo",
          recommendations: [
            "Comienza a alinear tus horarios de comida con los ritmos circadianos",
            "Incorpora alimentos calientes y cocidos en lugar de fríos o crudos",
            "Practica la alimentación consciente para apoyar el flujo digestivo",
            "Reduce el estrés alrededor de las comidas",
            "Considera movimiento ligero después de las comidas para apoyar la digestión"
          ],
          programSuggestion: "El Programa de Reset de Ritmo de 3 Meses ayudaría a estabilizar tus patrones."
        },
        moderate: {
          level: "Moderate" as const,
          description: "Desregulación moderada—ritmos circadianos y digestivos desincronizados",
          recommendations: [
            "Establece horarios de comida consistentes como tu primera prioridad",
            "Enfócate en alimentos calientes y fáciles de digerir",
            "Evita alimentos fríos y crudos, especialmente en la mañana",
            "Practica respiración para apoyar el tono vagal",
            "Aborda los patrones de estrés que afectan la digestión",
            "Considera el Retiro Earth Rhythm Reset para un reset inmersivo"
          ],
          programSuggestion: "El Programa de Reset de Ritmo de 3 Meses combinado con el Retiro Earth Rhythm Reset proporcionaría apoyo integral."
        },
        significant: {
          level: "Significant" as const,
          description: "Agotamiento significativo—el qi digestivo, tono vagal y temporización metabólica requieren apoyo rítmico urgente",
          recommendations: [
            "Se necesita realineación rítmica urgente",
            "Comienza con el Retiro Earth Rhythm Reset para apoyo inmediato",
            "Establece consistencia estricta en los horarios de comida",
            "Enfócate exclusivamente en alimentos calientes, cocidos y nutritivos",
            "Implementa respiración diaria y apoyo del nervio vago",
            "Reduce todas las fuentes de estrés crónico",
            "Considera protocolos de restauración del eje intestino-cerebro",
            "Trabaja con apoyo personalizado a través de mentoría extendida"
          ],
          programSuggestion: "Recomendamos comenzar con el Retiro Earth Rhythm Reset, seguido del Programa de Profundización de Coherencia de 6 Meses para una restauración integral del sistema metabólico y nervioso."
        }
      },
      pt: {
        strong: {
          level: "Strong" as const,
          description: "Ritmo do baço forte",
          recommendations: [
            "Seus ritmos digestivos e metabólicos estão bem alinhados",
            "Continue mantendo horários de refeição consistentes",
            "Foque na nutrição sazonal para apoiar seu ritmo natural",
            "Considere práticas preventivas para manter este equilíbrio"
          ],
          programSuggestion: "Mantenha seu ritmo com nossos recursos sazonais e apoio comunitário."
        },
        mild: {
          level: "Mild" as const,
          description: "Desregulação leve do baço",
          recommendations: [
            "Comece a alinhar seus horários de refeição com os ritmos circadianos",
            "Incorpore alimentos quentes e cozidos em vez de frios ou crus",
            "Pratique alimentação consciente para apoiar o fluxo digestivo",
            "Reduza o estresse em torno das refeições",
            "Considere movimento leve após as refeições para apoiar a digestão"
          ],
          programSuggestion: "O Programa de Reset de Ritmo de 3 Meses ajudaria a estabilizar seus padrões."
        },
        moderate: {
          level: "Moderate" as const,
          description: "Desregulação moderada—ritmos circadianos e digestivos dessincronizados",
          recommendations: [
            "Estabeleça horários de refeição consistentes como sua primeira prioridade",
            "Foque em alimentos quentes e fáceis de digerir",
            "Evite alimentos frios e crus, especialmente pela manhã",
            "Pratique respiração para apoiar o tono vagal",
            "Aborde os padrões de estresse que afetam a digestão",
            "Considere o Retiro Earth Rhythm Reset para um reset imersivo"
          ],
          programSuggestion: "O Programa de Reset de Ritmo de 3 Meses combinado com o Retiro Earth Rhythm Reset forneceria apoio abrangente."
        },
        significant: {
          level: "Significant" as const,
          description: "Esgotamento significativo—qi digestivo, tono vagal e temporização metabólica requerem apoio rítmico urgente",
          recommendations: [
            "Realinhamento rítmico urgente necessário",
            "Comece com o Retiro Earth Rhythm Reset para apoio imediato",
            "Estabeleça consistência rigorosa nos horários de refeição",
            "Foque exclusivamente em alimentos quentes, cozidos e nutritivos",
            "Implemente respiração diária e apoio do nervo vago",
            "Reduza todas as fontes de estresse crônico",
            "Considere protocolos de restauração do eixo intestino-cérebro",
            "Trabalhe com apoio personalizado através de mentoria estendida"
          ],
          programSuggestion: "Recomendamos começar com o Retiro Earth Rhythm Reset, seguido do Programa de Aprofundamento de Coerência de 6 Meses para uma restauração abrangente do sistema metabólico e nervoso."
        }
      }
    };

    const currentResults = results[language] || results.en;

    if (totalScore <= 10) {
      return currentResults.strong;
    } else if (totalScore <= 18) {
      return currentResults.mild;
    } else if (totalScore <= 24) {
      return currentResults.moderate;
    } else {
      return currentResults.significant;
    }
  };

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    const existingIndex = newAnswers.findIndex(a => a.questionId === currentQuestions[currentStep].id);
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex] = { questionId: currentQuestions[currentStep].id, value };
    } else {
      newAnswers.push({ questionId: currentQuestions[currentStep].id, value });
    }
    
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < currentQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const calculatedResult = calculateResult();
      setResult(calculatedResult);
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

  const currentAnswer = answers.find(a => a.questionId === currentQuestions[currentStep]?.id);
  const progress = ((currentStep + 1) / currentQuestions.length) * 100;
  const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);

  if (result) {
    return (
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="flex justify-center mb-6">
                <img src={logo} alt="Solaris Nutri" className="h-20 w-auto rounded-full" />
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
                {t('calc.results.title')}
              </h1>
              <p className="font-sans text-xl text-foreground/80 mb-2">
                {t('calc.results.score')}: {totalScore} / 30
              </p>
              <p className="font-sans text-2xl font-semibold text-accent">
                {result.description}
              </p>
            </div>

            {/* Results Cards */}
            <div className="space-y-6 mb-12">
              {/* Recommendations */}
              <Card className="border-accent/20 bg-accent/5 animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    {t('calc.results.recommendations')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                        <span className="font-sans text-foreground/80">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Program Suggestion */}
              <Card className="border-border animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-primary">
                    {t('calc.results.nextSteps')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-foreground/80 mb-6">
                    {result.programSuggestion}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {(result.level === "Moderate" || result.level === "Significant") && (
                      <Button 
                        onClick={() => window.location.href = '/earth-rhythm-retreat'}
                        size="lg"
                        className="bg-accent hover:bg-accent/90 font-sans"
                      >
                        {t('calc.results.exploreRetreat')}
                      </Button>
                    )}
                    <Button 
                      onClick={() => window.location.href = '/programs'}
                      variant={result.level === "Moderate" || result.level === "Significant" ? "outline" : "default"}
                      size="lg"
                      className="font-sans"
                    >
                      {t('calc.results.viewPrograms')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Button 
                onClick={handleRestart}
                variant="outline"
                size="lg"
                className="font-sans"
              >
                {t('calc.results.retake')}
              </Button>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 font-sans"
              >
                <Download size={18} className="mr-2" />
                {t('calc.results.download')}
              </Button>
            </div>

            {/* Next Steps */}
            <Card className="mt-12 bg-muted/30 border-border animate-fade-in" style={{ animationDelay: "300ms" }}>
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary text-center">
                  {t('calc.results.ready')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-sans text-foreground/80 mb-6">
                  {t('calc.results.readyDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 font-sans"
                  >
                    {t('calc.results.bookConsult')}
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/resources'}
                    variant="outline"
                    size="lg"
                    className="font-sans"
                  >
                    {t('calc.results.exploreResources')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          {currentStep === 0 && (
            <div className="text-center mb-12 animate-fade-in">
              <div className="flex justify-center mb-6">
                <img src={logo} alt="Solaris Nutri" className="h-20 w-auto rounded-full" />
              </div>
              <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
                <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
                {t('calc.badge')}
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
                {t('calc.title')}
              </h1>
              <p className="font-sans text-xl text-foreground/80 leading-relaxed mb-8">
                {t('calc.subtitle')}
              </p>
              <Card className="border-accent/20 bg-accent/5 mb-8">
                <CardContent className="pt-6">
                  <p className="font-sans font-semibold text-foreground mb-2">{t('calc.instruction')}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-foreground/70">
                    <div><span className="font-semibold">0</span> = {t('calc.never')}</div>
                    <div><span className="font-semibold">1</span> = {t('calc.occasionally')}</div>
                    <div><span className="font-semibold">2</span> = {t('calc.frequently')}</div>
                    <div><span className="font-semibold">3</span> = {t('calc.almostAlways')}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Progress Bar */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-sm text-muted-foreground">
                {t('calc.question')} {currentStep + 1} {t('calc.of')} {currentQuestions.length}
              </span>
              <span className="font-sans text-sm font-medium text-accent">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="border-border shadow-quantum animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-primary">
                {currentQuestions[currentStep].question}
              </CardTitle>
              <CardDescription className="font-sans text-sm text-muted-foreground mt-2">
                {t('calc.select')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={currentAnswer?.value.toString()} 
                onValueChange={(value) => handleAnswer(parseInt(value))}
                className="space-y-4"
              >
                {currentRatingOptions.map((option, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-all cursor-pointer"
                  >
                    <RadioGroupItem value={option.value.toString()} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`}
                      className="font-sans text-foreground/80 cursor-pointer flex-1 flex items-center justify-between"
                    >
                      <span>{option.label}</span>
                      <span className="text-accent font-semibold">{option.value}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Button
              onClick={handleBack}
              variant="outline"
              size="lg"
              disabled={currentStep === 0}
              className="font-sans"
            >
              <ArrowLeft size={18} className="mr-2" />
              {t('calc.back')}
            </Button>
            <Button
              onClick={handleNext}
              size="lg"
              disabled={!currentAnswer}
              className="bg-primary hover:bg-primary/90 font-sans"
            >
              {currentStep === currentQuestions.length - 1 ? t('calc.seeResults') : t('calc.next')}
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RhythmCalculator;
