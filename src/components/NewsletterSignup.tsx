import { useState } from "react";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Sunrise, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const copy = {
  en: {
    badge: "Free Guide",
    title: "The 7-Day Rhythm Reset",
    desc:
      "A short, practical guide to rebuilding your day around light, meal timing and rest — the first steps of the Solaris Nutri Method. Sent straight to your inbox, plus occasional rhythm insights.",
    bullets: [
      "Morning light and first-meal timing",
      "A simple eating window that fits your life",
      "Evening wind-down for deeper repair",
    ],
    name: "First name",
    email: "Your email",
    cta: "Send me the guide",
    sending: "Sending...",
    successTitle: "You're in.",
    successDesc:
      "Paula will send you the 7-Day Rhythm Reset personally from qrnutrition4@gmail.com. In the meantime, try the free Rhythm Circle assessment.",
    successLink: "Open the free assessment",
    already: "You're already on the list — Paula will be in touch by email.",
    invalidEmail: "Please enter a valid email address.",
    error: "Something went wrong. Please try again.",
    privacy: "No spam. Unsubscribe any time.",
  },
  es: {
    badge: "Guía gratuita",
    title: "Reinicio de Ritmo en 7 Días",
    desc:
      "Una guía breve y práctica para reconstruir tu día en torno a la luz, los horarios de comida y el descanso — los primeros pasos del Método Solaris Nutri. Directo a tu correo, con reflexiones ocasionales sobre ritmo.",
    bullets: [
      "Luz matinal y horario de la primera comida",
      "Una ventana de alimentación simple y realista",
      "Rutina nocturna para una reparación más profunda",
    ],
    name: "Nombre",
    email: "Tu correo",
    cta: "Enviarme la guía",
    sending: "Enviando...",
    successTitle: "¡Listo!",
    successDesc:
      "Paula te enviará el Reinicio de Ritmo en 7 Días personalmente desde qrnutrition4@gmail.com. Mientras tanto, prueba la evaluación gratuita Rhythm Circle.",
    successLink: "Abrir la evaluación gratuita",
    already: "Ya estás en la lista — Paula te escribirá por correo.",
    invalidEmail: "Introduce un correo electrónico válido.",
    error: "Algo salió mal. Inténtalo de nuevo.",
    privacy: "Sin spam. Puedes darte de baja cuando quieras.",
  },
  pt: {
    badge: "Guia gratuito",
    title: "Reinício de Ritmo em 7 Dias",
    desc:
      "Um guia curto e prático para reconstruir o seu dia em torno da luz, dos horários das refeições e do descanso — os primeiros passos do Método Solaris Nutri. Enviado para o seu email, com reflexões ocasionais sobre ritmo.",
    bullets: [
      "Luz da manhã e horário da primeira refeição",
      "Uma janela alimentar simples e realista",
      "Rotina noturna para uma reparação mais profunda",
    ],
    name: "Nome",
    email: "O seu email",
    cta: "Enviar-me o guia",
    sending: "A enviar...",
    successTitle: "Tudo certo!",
    successDesc:
      "A Paula enviar-lhe-á o Reinício de Ritmo em 7 Dias pessoalmente a partir de qrnutrition4@gmail.com. Entretanto, experimente a avaliação gratuita Rhythm Circle.",
    successLink: "Abrir a avaliação gratuita",
    already: "Já está na lista — a Paula entrará em contacto por email.",
    invalidEmail: "Introduza um email válido.",
    error: "Algo correu mal. Tente novamente.",
    privacy: "Sem spam. Pode cancelar quando quiser.",
  },
} as const;

const schema = z.object({
  name: z.string().trim().max(120).optional(),
  email: z.string().trim().email().max(255),
});

interface NewsletterSignupProps {
  /** Where the signup happened, e.g. "home", "blog", "landing-program" */
  source?: string;
  className?: string;
}

const NewsletterSignup = ({ source = "site", className = "" }: NewsletterSignupProps) => {
  const { language } = useLanguage();
  const t = copy[language] || copy.en;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email });
    if (!parsed.success) {
      toast.error(t.invalidEmail);
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({
      email: parsed.data.email.toLowerCase(),
      name: parsed.data.name || null,
      language,
      source: source.slice(0, 60),
    });
    if (error) {
      setLoading(false);
      if (error.code === "23505") {
        setDone(true);
        toast.success(t.already);
        return;
      }
      toast.error(t.error);
      return;
    }

    // Deliver the free guide. If the sending domain isn't verified yet the send
    // fails silently — the subscriber is already stored and Paula can follow up.
    try {
      const { error: sendError } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "newsletter-welcome",
          recipientEmail: parsed.data.email.toLowerCase(),
          idempotencyKey: `newsletter-welcome-${parsed.data.email.toLowerCase()}`,
          templateData: {
            name: parsed.data.name || undefined,
            guideUrl: `${window.location.origin}/resources`,
          },
        },
      });
      if (sendError) console.error("Guide email not sent:", sendError);
    } catch (err) {
      console.error("Guide email not sent:", err);
    }

    setLoading(false);
    setDone(true);
  };

  return (
    <section
      className={`bg-muted/30 border border-border rounded-2xl p-8 md:p-12 ${className}`}
      aria-labelledby="newsletter-title"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <div>
          <div className="inline-flex items-center gap-2 text-accent font-sans text-xs tracking-wider uppercase mb-3">
            <Sunrise size={16} />
            {t.badge}
          </div>
          <h2 id="newsletter-title" className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="font-sans text-foreground/75 leading-relaxed mb-5">{t.desc}</p>
          <ul className="space-y-2 font-sans text-sm text-foreground/80">
            {t.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-background rounded-xl border border-border p-6 shadow-subtle-glow">
          {done ? (
            <div className="text-center py-4">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Check className="text-accent" size={24} />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-2">{t.successTitle}</h3>
              <p className="font-sans text-sm text-foreground/70 mb-5">{t.successDesc}</p>
              <Link to="/food-rhythm-tool">
                <Button variant="outline" className="font-sans">
                  {t.successLink}
                </Button>
              </Link>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                aria-label={t.name}
                placeholder={t.name}
                value={name}
                maxLength={120}
                onChange={(e) => setName(e.target.value)}
                className="font-sans"
              />
              <Input
                aria-label={t.email}
                type="email"
                required
                placeholder={t.email}
                value={email}
                maxLength={255}
                onChange={(e) => setEmail(e.target.value)}
                className="font-sans"
              />
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 font-sans font-medium"
              >
                {loading && <Loader2 size={16} className="mr-2 animate-spin" />}
                {loading ? t.sending : t.cta}
              </Button>
              <p className="font-sans text-xs text-muted-foreground text-center">{t.privacy}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
