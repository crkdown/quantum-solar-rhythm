import { useState } from "react";
import { Circle, Clock, Sun, Moon, Utensils, ChevronRight, ChevronLeft, RotateCcw, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import logo from "@/assets/solaris-nutri-logo.jpeg";

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
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<RhythmResult | null>(null);

  const questions = [
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
  ];

  const calculateResult = (): RhythmResult => {
    const answerValues = answers.map(a => a.value);
    
    // Count patterns
    const morningScore = answerValues.filter(v => 
      ["early", "morning", "energized", "disrupts", "structured", "long"].includes(v)
    ).length;
    
    const eveningScore = answerValues.filter(v => 
      ["late", "evening", "fine", "sluggish"].includes(v)
    ).length;

    if (morningScore >= 5) {
      return {
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
      };
    } else if (eveningScore >= 4) {
      return {
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
      };
    } else {
      return {
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
      };
    }
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers.filter(a => a.questionIndex !== currentStep), { questionIndex: currentStep, value }];
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
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
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (result) {
    return (
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Solaris Nutri" className="h-20 w-auto" />
            </div>
            <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
              <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
              Your Food Rhythm Profile
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4D7D7D] mb-4">
              {result.title}
            </h1>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              {result.description}
            </p>
          </div>

          {/* Eating Window */}
          <Card className="mb-8 border-accent/30 animate-fade-in-up">
            <CardHeader className="text-center pb-2">
              <CardTitle className="font-serif text-2xl text-[#4D7D7D] flex items-center justify-center gap-3">
                <Clock size={24} className="text-accent" />
                Optimal Eating Window
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
              <CardTitle className="font-serif text-2xl text-[#4D7D7D] flex items-center gap-3">
                <Utensils size={24} className="text-accent" />
                Recommended Meal Rhythm
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {result.meals.map((meal, index) => (
                <div key={index} className="flex gap-4 p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="flex-shrink-0 w-20 text-center">
                    <span className="font-sans text-sm font-semibold text-accent">{meal.time}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-semibold text-[#4D7D7D] mb-1">{meal.name}</h4>
                    <p className="font-sans text-sm text-foreground/70">{meal.recommendation}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-[#4D7D7D]">
                Rhythm Alignment Tips
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
              <h3 className="font-serif text-xl font-semibold text-[#4D7D7D] mb-3">
                Recommended Program
              </h3>
              <p className="font-sans text-foreground/70 mb-4">
                Based on your rhythm profile, we recommend the <strong>{result.program}</strong> to fully optimize your eating patterns and restore circadian coherence.
              </p>
              <Link to="/programs">
                <Button className="font-sans">
                  Explore Programs
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <Button variant="outline" onClick={handleRestart} className="font-sans">
              <RotateCcw size={16} className="mr-2" />
              Retake Assessment
            </Button>
            <Button variant="outline" className="font-sans">
              <Download size={16} className="mr-2" />
              Download Your Rhythm Plan
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
            <img src={logo} alt="Solaris Nutri" className="h-20 w-auto" />
          </div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            Food Rhythm Tool
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4D7D7D] mb-4">
            Discover Your Eating Rhythm
          </h1>
          <p className="font-sans text-lg text-foreground/80 leading-relaxed">
            Answer 8 questions to uncover your optimal meal timing and eating windows based on your natural biological rhythm.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-sans text-muted-foreground mb-2">
            <span>Question {currentStep + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-[#4D7D7D] leading-relaxed">
              {questions[currentStep].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={currentAnswer} onValueChange={handleAnswer} className="space-y-4">
              {questions[currentStep].options.map((option, index) => (
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
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!currentAnswer}
            className="font-sans"
          >
            {currentStep === questions.length - 1 ? "See My Rhythm" : "Next"}
            <ChevronRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodRhythmTool;
