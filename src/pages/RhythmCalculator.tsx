import { useState } from "react";
import { Circle, Clock, Sun, Moon, Sunrise, Sunset, ArrowRight, ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

type Answer = {
  questionId: number;
  value: number;
};

type Chronotype = {
  type: "Lion" | "Bear" | "Wolf" | "Dolphin";
  description: string;
  eatingWindow: string;
  peakEnergy: string;
  characteristics: string[];
  recommendations: string[];
};

const RhythmCalculator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<Chronotype | null>(null);

  const questions = [
    {
      id: 1,
      question: "What time do you naturally wake up without an alarm on free days?",
      options: [
        { label: "Before 6:00 AM", value: 4 },
        { label: "6:00 AM - 7:30 AM", value: 3 },
        { label: "7:30 AM - 9:00 AM", value: 2 },
        { label: "After 9:00 AM", value: 1 }
      ]
    },
    {
      id: 2,
      question: "When do you feel most alert and productive?",
      options: [
        { label: "Early morning (5 AM - 9 AM)", value: 4 },
        { label: "Mid-morning to afternoon (9 AM - 5 PM)", value: 3 },
        { label: "Evening (5 PM - 10 PM)", value: 2 },
        { label: "Late night (after 10 PM)", value: 1 }
      ]
    },
    {
      id: 3,
      question: "When do you naturally feel hungry for your first meal?",
      options: [
        { label: "Within 30 minutes of waking", value: 4 },
        { label: "1-2 hours after waking", value: 3 },
        { label: "3+ hours after waking", value: 2 },
        { label: "I rarely feel morning hunger", value: 1 }
      ]
    },
    {
      id: 4,
      question: "How would you describe your sleep quality?",
      options: [
        { label: "Deep and restful, wake refreshed", value: 4 },
        { label: "Generally good with occasional disruptions", value: 3 },
        { label: "Light sleep, wake frequently", value: 1 },
        { label: "Difficulty falling asleep, often restless", value: 1 }
      ]
    },
    {
      id: 5,
      question: "What's your ideal bedtime on a free day?",
      options: [
        { label: "Before 10:00 PM", value: 4 },
        { label: "10:00 PM - 11:30 PM", value: 3 },
        { label: "11:30 PM - 1:00 AM", value: 2 },
        { label: "After 1:00 AM", value: 1 }
      ]
    },
    {
      id: 6,
      question: "When do you experience an energy dip during the day?",
      options: [
        { label: "Early afternoon (1 PM - 3 PM)", value: 4 },
        { label: "Mid-afternoon (3 PM - 5 PM)", value: 3 },
        { label: "No significant dip", value: 2 },
        { label: "Multiple times throughout the day", value: 1 }
      ]
    },
    {
      id: 7,
      question: "How do you feel about eating late in the evening?",
      options: [
        { label: "Uncomfortable, prefer early dinner", value: 4 },
        { label: "Prefer dinner by 7 PM", value: 3 },
        { label: "Comfortable eating until 8-9 PM", value: 2 },
        { label: "Often hungry late, eat after 9 PM", value: 1 }
      ]
    },
    {
      id: 8,
      question: "How long does it take you to fully wake up in the morning?",
      options: [
        { label: "I'm alert immediately", value: 4 },
        { label: "15-30 minutes", value: 3 },
        { label: "1-2 hours", value: 2 },
        { label: "Several hours, need multiple coffees", value: 1 }
      ]
    }
  ];

  const calculateChronotype = (): Chronotype => {
    const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);
    const averageScore = totalScore / answers.length;

    if (averageScore >= 3.5) {
      return {
        type: "Lion",
        description: "Early riser with peak morning energy",
        eatingWindow: "7:00 AM - 6:00 PM (11-hour window)",
        peakEnergy: "5:00 AM - 12:00 PM",
        characteristics: [
          "Wake naturally before sunrise",
          "Most productive in early morning",
          "Early hunger signals",
          "Energy dips in late afternoon",
          "Natural early bedtime"
        ],
        recommendations: [
          "Break fast within 1 hour of waking (7-8 AM)",
          "Largest meal at breakfast or lunch",
          "Complete eating by 6 PM",
          "Light dinner before energy dips",
          "Align important tasks with morning peak"
        ]
      };
    } else if (averageScore >= 2.5) {
      return {
        type: "Bear",
        description: "Follows the sun with balanced energy",
        eatingWindow: "8:00 AM - 7:00 PM (11-hour window)",
        peakEnergy: "10:00 AM - 2:00 PM",
        characteristics: [
          "Wake with sunrise",
          "Steady energy throughout day",
          "Moderate morning hunger",
          "Natural afternoon dip",
          "Comfortable evening routine"
        ],
        recommendations: [
          "Break fast between 8-9 AM",
          "Balanced meals throughout the day",
          "Largest meal at lunch",
          "Dinner between 6-7 PM",
          "Light evening if needed before 7 PM"
        ]
      };
    } else if (averageScore >= 1.8) {
      return {
        type: "Wolf",
        description: "Night owl with evening peak energy",
        eatingWindow: "10:00 AM - 8:00 PM (10-hour window)",
        peakEnergy: "5:00 PM - 12:00 AM",
        characteristics: [
          "Naturally wake later",
          "Slow morning activation",
          "Delayed hunger signals",
          "Peak creativity in evening",
          "Night owl tendencies"
        ],
        recommendations: [
          "Break fast between 10 AM-12 PM",
          "Skip breakfast if not hungry",
          "Larger meals in afternoon/evening",
          "Main meal between 1-3 PM",
          "Dinner by 8 PM despite late energy"
        ]
      };
    } else {
      return {
        type: "Dolphin",
        description: "Light sleeper with variable rhythms",
        eatingWindow: "9:00 AM - 7:00 PM (10-hour window)",
        peakEnergy: "Variable - often 3:00 PM - 9:00 PM",
        characteristics: [
          "Light, restless sleep",
          "Difficulty waking and falling asleep",
          "Inconsistent hunger patterns",
          "Sensitive to disruptions",
          "Need for routine stability"
        ],
        recommendations: [
          "Consistent eating window crucial",
          "Break fast between 9-10 AM",
          "Regular meal timing for nervous system",
          "Avoid late eating (finish by 7 PM)",
          "Prioritize circadian consistency",
          "Consider gut-brain axis support"
        ]
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
      const chronotype = calculateChronotype();
      setResult(chronotype);
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

  const getChronotypeIcon = (type: string) => {
    switch(type) {
      case "Lion": return <Sunrise className="text-accent" size={48} />;
      case "Bear": return <Sun className="text-accent" size={48} />;
      case "Wolf": return <Moon className="text-accent" size={48} />;
      case "Dolphin": return <Sunset className="text-accent" size={48} />;
      default: return <Clock className="text-accent" size={48} />;
    }
  };

  if (result) {
    return (
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="flex justify-center mb-6">
                {getChronotypeIcon(result.type)}
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4D7D7D] mb-4">
                Your Chronotype: {result.type}
              </h1>
              <p className="font-sans text-xl text-foreground/80">
                {result.description}
              </p>
            </div>

            {/* Results Cards */}
            <div className="space-y-6 mb-12">
              {/* Eating Window */}
              <Card className="border-accent/20 bg-accent/5 animate-fade-in-up">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="text-accent" size={24} />
                    <CardTitle className="font-serif text-2xl text-[#4D7D7D]">
                      Your Optimal Eating Window
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-3xl font-bold text-accent mb-2">
                    {result.eatingWindow}
                  </p>
                  <p className="font-sans text-foreground/70">
                    This window aligns with your natural circadian rhythm for optimal digestion and energy.
                  </p>
                </CardContent>
              </Card>

              {/* Peak Energy */}
              <Card className="border-border animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-[#4D7D7D]">
                    Peak Energy Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-2xl font-semibold text-primary mb-4">
                    {result.peakEnergy}
                  </p>
                  <p className="font-sans text-sm text-foreground/70">
                    Schedule important tasks and activities during these hours.
                  </p>
                </CardContent>
              </Card>

              {/* Characteristics */}
              <Card className="border-border animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-[#4D7D7D]">
                    Your Rhythm Characteristics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {result.characteristics.map((char, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                        <span className="font-sans text-foreground/80">{char}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card className="border-border animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-[#4D7D7D]">
                    Personalized Recommendations
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
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
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
            <Card className="mt-12 bg-muted/30 border-border animate-fade-in" style={{ animationDelay: "500ms" }}>
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-[#4D7D7D] text-center">
                  Ready to Align with Your Rhythm?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-sans text-foreground/80 mb-6">
                  Discover how the Quantum Rhythm Nutrition programs can help you fully 
                  integrate these insights into lasting vitality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/programs'}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 font-sans"
                  >
                    Explore Programs
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    variant="outline"
                    size="lg"
                    className="font-sans"
                  >
                    Book Consultation
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
              <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
                <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
                Rhythm Assessment
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4D7D7D] mb-6">
                Discover Your Chronotype
              </h1>
              <p className="font-sans text-xl text-foreground/80 leading-relaxed mb-8">
                Answer 8 questions to identify your natural rhythm and receive 
                personalized eating window recommendations.
              </p>
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
                Select the answer that best describes you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={currentAnswer?.value.toString()} 
                onValueChange={(value) => handleAnswer(parseInt(value))}
                className="space-y-4"
              >
                {questions[currentStep].options.map((option, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-all cursor-pointer"
                  >
                    <RadioGroupItem value={option.value.toString()} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`}
                      className="font-sans text-foreground/80 cursor-pointer flex-1"
                    >
                      {option.label}
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
