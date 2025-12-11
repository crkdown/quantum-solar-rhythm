import { Circle, Clock, Heart, Sun, Droplets, Wind, Leaf, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logo from "@/assets/solaris-nutri-logo.jpeg";

const EarthRhythmRetreat = () => {
  const schedule = [
    { time: "10:00", duration: "15 min", title: "Arrival & Welcome", description: "Herbal drink, orientation, and clear safety boundaries. A calm start to settle the nervous system." },
    { time: "10:15", duration: "15 min", title: "Ice-Breaker & Intentions", description: "Short introductions and a simple grounding question. Light, warm, and easy — immediate group comfort." },
    { time: "10:30", duration: "15 min", title: "Breathwork + Gentle Movement", description: "Vagus activation, microcirculation support, and grounding before sauna. Coherent movement, not yoga or ritualistic practices." },
    { time: "10:45", duration: "30 min", title: "Microbiome & Rhythm Talk", description: "Clear explanation of metabolic rhythms, spleen + digestive flow, microbiome balance, and why heat and nature restore coherence." },
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
  ];

  const faqs = [
    {
      question: "What is the purpose of this retreat?",
      answer: "To reset your biological rhythms in one structured day using heat therapy, biometrics, breathwork, circadian-aligned nutrition, nature exposure, and lymphatic activation. This combination restores clarity, energy, and digestive flow by optimising how the body distributes vitality, processes stress, and regulates metabolism."
    },
    {
      question: "What is microcirculation?",
      answer: "Microcirculation refers to the blood flow through the smallest vessels in your body — capillaries, arterioles, and venules. It's responsible for nutrient delivery, oxygen supply, toxin removal, lymphatic flow, and cellular rejuvenation. Sauna, breathwork, gentle movement, and presotherapy all activate microcirculation, helping you feel lighter, clearer, and more energised."
    },
    {
      question: "What are biometrics and why are they included?",
      answer: "Biometrics are measurable physiological markers that help assess your internal metabolic state. We measure body composition, hydration, visceral fat index, metabolic rate, muscle vs. fat balance, and water distribution. You receive a mini-report afterwards, which gives a clear picture of where your energy, metabolism, and rhythms currently stand."
    },
    {
      question: "Is the sauna safe for everyone?",
      answer: "The sauna is safe for most people. Exceptions include pregnancy, uncontrolled hypertension, recent heart events, fever or acute infection, severe neuropathy, and conditions where heat exposure is contraindicated. If unsure, consult your doctor before attending."
    },
    {
      question: "What if I cannot tolerate heat for long?",
      answer: "You can take breaks anytime. The retreat uses short, guided heat cycles, so you never stay inside longer than comfortable. Hydration and mineral support are provided."
    },
    {
      question: "What is in the scrub mixture?",
      answer: "Ingredients: vodka + baking soda. A natural exfoliating mixture used in heat therapy to promote circulation, support lymphatic flow, encourage detoxification through the skin, remove dead skin cells, and enhance sweating response. It's optional and gentle — no burning or irritation."
    },
    {
      question: "What should I bring?",
      answer: "Swimsuit, comfortable clothes, water bottle, light towel (we provide sauna towels), sunscreen (optional for nature walk), any personal medications, and notebook for integration if you want."
    },
    {
      question: "Is lunch included?",
      answer: "Yes. A plant-based, gluten-free, warm, digestion-friendly, mineral-rich meal designed to stabilise blood sugar and support post-sauna recovery is provided."
    },
    {
      question: "What is presotherapy?",
      answer: "Pressotherapy boots use controlled air pressure to stimulate lymphatic drainage, circulation, fluid balance, and tissue recovery. It's excellent for water retention, heaviness in legs, low circulation, and detox support."
    },
    {
      question: "What is the Twin Hearts meditation?",
      answer: "A universal, non-religious meditation that combines breath, intention, and gentle awareness to calm the nervous system, improve heart–brain coherence, release emotional tension, and stabilise mood. Short, simple, and accessible for all levels."
    },
    {
      question: "What is the microbiome talk about?",
      answer: "A practical, easy-to-understand explanation of how digestion and the microbiome work, why rhythm matters more than rules, what disrupts energy and metabolism, and how heat, nature, and structured eating restore balance. No jargon. No dogma. Just physiological clarity."
    },
    {
      question: "How big is the group?",
      answer: "Maximum 6 people. This ensures safety, intimacy, and enough time for biometrics and treatments."
    },
    {
      question: "Is there accommodation?",
      answer: "No overnight stay — this is a day retreat only. The setting is a mud house on private land surrounded by natural Algarve biodiversity."
    },
    {
      question: "Is the retreat suitable for beginners?",
      answer: "Absolutely. All elements — breathwork, heat cycles, meditation, movement — are beginner-friendly and guided step-by-step."
    },
    {
      question: "Do we do anything physically intense?",
      answer: "No. Movement is gentle, accessible, and rhythm-based. The most 'intense' element is the sauna, but breaks are always allowed."
    },
    {
      question: "What results can I expect after the retreat?",
      answer: "Most participants report lighter digestion, clearer thinking, improved sleep, reduced bloating, calmer mood, increased energy, deeper body awareness, and renewed motivation. Plus, you leave with a biometric snapshot that shows where your body currently stands."
    },
    {
      question: "Is this retreat connected to your longer programs?",
      answer: "Yes — the retreat is a natural entry into the 3/6/9-month Quantum Rhythm Nutrition programs. The biometrics help identify whether deeper metabolic or rhythm work would benefit you. No pressure — just options."
    },
    {
      question: "What if the weather is bad for the nature walk?",
      answer: "We adapt. Either a shorter outdoor moment or a grounding indoor session depending on conditions."
    },
    {
      question: "Can I book this as a private group?",
      answer: "Yes: €650 total for up to 5 people. This includes all biometrics + reports."
    },
    {
      question: "What if someone in my group doesn't want to join the sauna?",
      answer: "They can sit out and relax. There is plenty of space outdoors. They will still benefit from all other elements."
    },
    {
      question: "What language is the retreat in?",
      answer: "English, Portuguese, or Spanish on request for private groups."
    },
    {
      question: "What is your cancellation policy?",
      answer: "72+ hours before: full refund. 48 hours before: 50%. 24 hours before: non-refundable. You may transfer your booking to another date once."
    },
    {
      question: "Is transportation included?",
      answer: "No. Guests must arrange their own arrival. The location is accessible by car (parking available)."
    },
    {
      question: "Who facilitates the retreat?",
      answer: "The retreat is facilitated by Paula Carolina Suescun, the visionary entrepreneur behind Solaris Nutri. As a certified Nutritionist, Biorhythm Nutrition Coach, and the pioneering creator of the Quantum Rhythm Nutrition framework, she weaves ancient wisdom with modern nutrition. This synthesis fosters biofield alignment, circadian harmony, and vital energy integration, guiding participants toward organic sophistication and rhythmic vitality."
    }
  ];

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
              One-Day Realignment Retreat
            </div>
            <h1 className="font-serif text-6xl md:text-7xl font-bold text-[#4D7D7D] mb-6">
              Earth Rhythm Reset
            </h1>
            <p className="font-sans text-xl text-foreground/80 leading-relaxed mb-8">
              A structured, physiology-centered reset designed for small groups in a serene mud house surrounded by olive trees and the natural silence of the Algarve.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <MapPin size={20} />
              <span className="font-sans">Algarve, Portugal</span>
            </div>
            <Button 
              onClick={() => window.location.href = '/contact'}
              size="lg" 
              className="bg-accent hover:bg-accent/90 font-sans text-lg px-8"
            >
              Book Your Retreat Experience
            </Button>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4D7D7D] mb-8 text-center">
              Why This Retreat Works
            </h2>
            <div className="font-sans text-lg text-foreground/80 leading-relaxed space-y-4 mb-12">
              <p>
                Your biology is rhythmic, electric, and adaptive. When stress, poor sleep, and modern life disrupt those rhythms, everything becomes harder: energy drops, digestion slows, inflammation rises, cravings intensify, and mental clarity fades.
              </p>
              <p>
                The Earth Rhythm Reset restores coherence through a sequence of proven physiological levers:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Heart, text: "Metabolic biometrics" },
                { icon: Sun, text: "Heat + cold hormesis" },
                { icon: Wind, text: "Vagus-focused breathwork" },
                { icon: Leaf, text: "Earth-element grounding" },
                { icon: Clock, text: "Circadian-aligned nutrition" },
                { icon: Droplets, text: "Lymphatic stimulation" }
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
              The result: your system finds flow again.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4D7D7D] mb-4 text-center">
              The Experience
            </h2>
            <p className="font-sans text-xl text-center text-muted-foreground mb-12">
              10:00 to 16:45
            </p>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <Card key={index} className="border-border hover:border-accent/50 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-sans text-sm font-medium text-accent">{item.time}</span>
                          <span className="font-sans text-sm text-muted-foreground">({item.duration})</span>
                        </div>
                        <CardTitle className="font-serif text-xl text-[#4D7D7D]">
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4D7D7D] mb-12 text-center">
              What You Take Home
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Biometric report",
                "One personalized rhythm recommendation",
                "Heat detox protocol",
                "Breathwork sequence",
                "Digestive and hydration guidance",
                "Restored clarity and energy",
                "Priority access to 3/6/9-month QRN mentoring"
              ].map((item, index) => (
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4D7D7D] mb-12 text-center">
              Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-[#4D7D7D]">
                    Group Experience
                  </CardTitle>
                  <CardDescription className="font-sans text-sm">
                    Minimum 4 participants
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-serif text-4xl font-bold text-accent mb-4">€120</p>
                  <p className="font-sans text-sm text-muted-foreground">per person</p>
                </CardContent>
              </Card>

              <Card className="border-accent/50 bg-accent/5">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-[#4D7D7D]">
                    Private Group
                  </CardTitle>
                  <CardDescription className="font-sans text-sm">
                    Friends/Families (up to 5 people)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-serif text-4xl font-bold text-accent mb-4">€650</p>
                  <p className="font-sans text-sm text-muted-foreground">Includes biometrics + report for each guest</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-[#4D7D7D]">
                    1:1 VIP Reset Day
                  </CardTitle>
                  <CardDescription className="font-sans text-sm">
                    Deep personalized experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-serif text-4xl font-bold text-accent mb-4">€500</p>
                  <p className="font-sans text-sm text-muted-foreground">Complete rhythm realignment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-3xl font-bold text-[#4D7D7D] mb-6">
                  Who This Is For
                </h3>
                <ul className="space-y-3">
                  {[
                    "Overwhelmed professionals",
                    "Perimenopause/post-menopause women",
                    "Digestive imbalance",
                    "Low energy, cravings, or poor sleep",
                    "People wanting grounded physiological reset",
                    "Anyone tired of trends, rituals, or dogma"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Circle size={8} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                      <span className="font-sans text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-[#4D7D7D] mb-6">
                  Who This Is Not For
                </h3>
                <ul className="space-y-3">
                  {[
                    "Those looking for spiritual ceremonies",
                    "Extreme detox seekers",
                    "People unable to tolerate sauna (medical exceptions)"
                  ].map((item, index) => (
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4D7D7D] mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4D7D7D] mb-6">
              Book Your Experience
            </h2>
            <p className="font-sans text-lg text-foreground/80 mb-8">
              Retreats run twice per month. Maximum 6 people to maintain quality and safety.
              Spaces fill quickly due to the intimate setting and biometric component.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/contact'}
                size="lg"
                className="bg-accent hover:bg-accent/90 font-sans text-lg px-8"
              >
                Request Dates & Book
              </Button>
              <Button 
                onClick={() => window.location.href = '/programs'}
                variant="outline"
                size="lg"
                className="font-sans text-lg px-8"
              >
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarthRhythmRetreat;
