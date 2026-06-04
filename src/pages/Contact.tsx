import { Circle, Mail, Calendar, Instagram } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import logo from "@/assets/solaris-nutri-logo.jpeg";
import SEOHead from "@/components/SEOHead";

const CONTACT_EMAIL = "qr4nutrition@gmail.com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      interest ? `Inquiry: ${interest}` : "New inquiry from Solaris Nutri"
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterested in: ${interest}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen py-24">
      <SEOHead
        title="Contact Solaris Nutri"
        description="Get in touch with Paula Suescun at Solaris Nutri. Book a rhythm-based nutrition consultation or ask about programs and masterclasses."
        path="/contact"
        keywords="contact nutritionist, book nutrition consultation, Solaris Nutri contact"
      />
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Solaris Nutri" className="h-20 w-auto rounded-full" />
          </div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-sm tracking-wider uppercase mb-4">
            <Circle size={8} fill="currentColor" className="animate-pulse-slow" />
            Contact
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4D7D7D] mb-6">
            Let's Begin Your Rhythm Journey
          </h1>
          <p className="font-sans text-xl text-foreground/80 leading-relaxed mb-4">
            Reach out for program inquiries, discovery calls, or general questions.
          </p>
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-sans text-sm">
            <span>🇬🇧</span>
            <span>🇪🇸</span>
            <span>🇵🇹</span>
            <span className="ml-1">Consultations available in English, Spanish & Portuguese</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border shadow-quantum animate-fade-in-up">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-[#4D7D7D]">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-sans text-sm">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your full name" 
                    className="font-sans"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-sans text-sm">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="font-sans"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest" className="font-sans text-sm">I'm interested in...</Label>
                  <Input 
                    id="interest" 
                    placeholder="e.g., 3-Month Rhythm Reset" 
                    className="font-sans"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-sans text-sm">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your current challenges and goals..."
                    rows={6}
                    className="font-sans"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 font-sans font-medium"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Options */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            {/* Email */}
            <Card className="border-border hover:shadow-quantum transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#4D7D7D] mb-2">
                      Email Us
                    </h3>
                    <p className="font-sans text-foreground/70 mb-3">
                      For general inquiries or quick questions
                    </p>
                    <a 
                      href={`mailto:${CONTACT_EMAIL}`} 
                      className="font-sans text-accent hover:text-accent/80 transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking */}
            <Card className="border-border hover:shadow-quantum transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Calendar className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#4D7D7D] mb-2">
                      Book a Discovery Call
                    </h3>
                    <p className="font-sans text-foreground/70 mb-3">
                      30-minute complimentary session — book it by sending a DM on Instagram
                    </p>
                    <a
                      href="https://www.instagram.com/solarisnutri"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="font-sans gap-2">
                        <Instagram size={18} />
                        Book via Instagram DM
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="border-border hover:shadow-quantum transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Instagram className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#4D7D7D] mb-2">
                      Follow on Instagram
                    </h3>
                    <p className="font-sans text-foreground/70 mb-3">
                      Daily inspiration, tips & rhythm insights
                    </p>
                    <a 
                      href="https://www.instagram.com/solarisnutri" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-accent hover:text-accent/80 transition-colors"
                    >
                      @solarisnutri
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Info Box */}
            <div className="bg-muted/30 p-8 rounded-lg border border-border">
              <h3 className="font-serif text-xl font-semibold text-[#4D7D7D] mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 font-sans text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Response within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Complimentary discovery call available</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>No pressure, no sales tactics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle size={6} fill="currentColor" className="text-accent mt-2 flex-shrink-0" />
                  <span>Personalized program recommendations</span>
                </li>
              </ul>
            </div>

            {/* Quote */}
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <p className="font-serif text-lg italic text-primary mb-4">
                "Your journey to rhythm restoration begins with a single conversation. 
                I look forward to connecting with you."
              </p>
              <p className="font-sans text-sm text-foreground/70">
                — Paula
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
