import { useState } from "react";
import { Circle, Heart, ArrowRight, ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import logo from "@/assets/solaris-nutri-logo.jpeg";

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
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<Result | null>(null);

  const questions = [
    {
      id: 1,
      question: "Do you feel heavy, sluggish, or mentally foggy after meals?"
    },
    {
      id: 2,
      question: "Do you crave sweets or refined carbohydrates when stressed or fatigued?"
    },
    {
      id: 3,
      question: "Do you experience bloating, loose stools, or irregular digestion throughout the day?"
    },
    {
      id: 4,
      question: "Do you often overthink, ruminate, or feel mentally \"busy\" even when tired?"
    },
    {
      id: 5,
      question: "Do you feel worse when eating cold foods (salads, smoothies, iced drinks)?"
    },
    {
      id: 6,
      question: "Do you feel more fatigued in the late afternoon (TCM Earth time 1–5 pm)?"
    },
    {
      id: 7,
      question: "Do you frequently experience low appetite or sudden loss of appetite under stress?"
    },
    {
      id: 8,
      question: "Do your symptoms worsen in humid or damp conditions?"
    },
    {
      id: 9,
      question: "Do you feel emotionally unstable, easily overwhelmed, or unable to \"digest\" stress?"
    },
    {
      id: 10,
      question: "Do irregular eating times disrupt your energy, focus, or mood?"
    }
  ];

  const ratingOptions = [
    { label: "Never", value: 0 },
    { label: "Occasionally", value: 1 },
    { label: "Frequently", value: 2 },
    { label: "Almost Always", value: 3 }
  ];

  const calculateResult = (): Result => {
    const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);

    if (totalScore <= 10) {
      return {
        level: "Strong",
        description: "Strong spleen rhythm",
        recommendations: [
          "Your digestive and metabolic rhythms are well-aligned",
          "Continue maintaining consistent eating times",
          "Focus on seasonal nutrition to support your natural rhythm",
          "Consider preventive practices to maintain this balance"
        ],
        programSuggestion: "Maintain your rhythm with our seasonal resources and community support."
      };
    } else if (totalScore <= 18) {
      return {
        level: "Mild",
        description: "Mild spleen dysregulation",
        recommendations: [
          "Begin aligning your eating times with circadian rhythms",
          "Incorporate warm, cooked foods over cold or raw options",
          "Practice mindful eating to support digestive flow",
          "Reduce stress around mealtimes",
          "Consider light movement after meals to support digestion"
        ],
        programSuggestion: "The 3-Month Rhythm Reset Program would help stabilize your patterns."
      };
    } else if (totalScore <= 24) {
      return {
        level: "Moderate",
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
      };
    } else {
      return {
        level: "Significant",
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
      };
    }
  };

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    const existingIndex = newAnswers.findIndex(a => a.questionId === questions[currentStep].id);
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex] = { questionId: questions[currentStep].id, value };
    } else {
      newAnswers.push({ questionId: questions[currentStep].id, value });
    }
    
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
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

  const currentAnswer = answers.find(a => a.questionId === questions[currentStep]?.id);
  const progress = ((currentStep + 1) / questions.length) * 100;
  const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);

  if (result) {
    return (
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="flex justify-center mb-6">
                <img src={logo} alt="Solaris Nutri" className="h-20 w-auto" />
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4D7D7D] mb-4">
                Your Spleen Rhythm Assessment
              </h1>
              <p className="font-sans text-xl text-foreground/80 mb-2">
                Total Score: {totalScore} / 30
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
                  <CardTitle className="font-serif text-2xl text-[#4D7D7D]">
                    Your Personalized Recommendations
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
                  <CardTitle className="font-serif text-xl text-[#4D7D7D]">
                    Recommended Next Steps
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
                        Explore Earth Rhythm Reset Retreat
                      </Button>
                    )}
                    <Button 
                      onClick={() => window.location.href = '/programs'}
                      variant={result.level === "Moderate" || result.level === "Significant" ? "outline" : "default"}
                      size="lg"
                      className="font-sans"
                    >
                      View Programs
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
                Retake Assessment
              </Button>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 font-sans"
              >
                <Download size={18} className="mr-2" />
                Download Your Results
              </Button>
            </div>

            {/* Next Steps */}
            <Card className="mt-12 bg-muted/30 border-border animate-fade-in" style={{ animationDelay: "300ms" }}>
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-[#4D7D7D] text-center">
                  Ready to Restore Your Rhythm?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-sans text-foreground/80 mb-6">
                  Discover how Quantum Rhythm Nutrition can help you realign with your body's natural intelligence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 font-sans"
                  >
                    Book Consultation
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/resources'}
                    variant="outline"
                    size="lg"
                    className="font-sans"
                  >
                    Explore Resources
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
                <img src={logo} alt="Solaris Nutri" className="h-20 w-auto" />
              </div>
              <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
                <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
                Spleen Rhythm Assessment
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4D7D7D] mb-6">
                Assess Your Digestive Rhythm
              </h1>
              <p className="font-sans text-xl text-foreground/80 leading-relaxed mb-8">
                Answer 10 questions to understand your spleen rhythm and receive personalized recommendations for the 3-Month Rhythm Reset Program.
              </p>
              <Card className="border-accent/20 bg-accent/5 mb-8">
                <CardContent className="pt-6">
                  <p className="font-sans font-semibold text-foreground mb-2">Rate each statement 0–3:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-foreground/70">
                    <div><span className="font-semibold">0</span> = Never</div>
                    <div><span className="font-semibold">1</span> = Occasionally</div>
                    <div><span className="font-semibold">2</span> = Frequently</div>
                    <div><span className="font-semibold">3</span> = Almost Always</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Progress Bar */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-sm text-muted-foreground">
                Question {currentStep + 1} of {questions.length}
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
              <CardTitle className="font-serif text-2xl text-[#4D7D7D]">
                {questions[currentStep].question}
              </CardTitle>
              <CardDescription className="font-sans text-sm text-muted-foreground mt-2">
                Select the rating that best describes your experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={currentAnswer?.value.toString()} 
                onValueChange={(value) => handleAnswer(parseInt(value))}
                className="space-y-4"
              >
                {ratingOptions.map((option, index) => (
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
              Back
            </Button>
            <Button
              onClick={handleNext}
              size="lg"
              disabled={!currentAnswer}
              className="bg-primary hover:bg-primary/90 font-sans"
            >
              {currentStep === questions.length - 1 ? "See Results" : "Next"}
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RhythmCalculator;
