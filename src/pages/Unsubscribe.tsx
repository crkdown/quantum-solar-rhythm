import { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, MailX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import logo from "@/assets/solaris-nutri-logo.jpeg";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
const FN = "handle-email-unsubscribe";

type State = "validating" | "valid" | "confirming" | "success" | "invalid";

const Unsubscribe = () => {
  const [state, setState] = useState<State>("validating");
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("token");
    if (!t) {
      setState("invalid");
      return;
    }
    setToken(t);
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/${FN}?token=${encodeURIComponent(t)}`,
          { headers: { apikey: SUPABASE_ANON_KEY } }
        );
        if (res.ok) {
          setState("valid");
        } else {
          setState("invalid");
        }
      } catch {
        setState("invalid");
      }
    })();
  }, []);

  const confirm = async () => {
    if (!token) return;
    setState("confirming");
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/${FN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({ token }),
      });
      setState(res.ok ? "success" : "invalid");
    } catch {
      setState("invalid");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-24 px-6">
      <SEOHead
        title="Unsubscribe | Solaris Nutri"
        description="Manage your email preferences with Solaris Nutri."
        path="/unsubscribe"
        noindex
      />
      <Card className="border-border shadow-quantum max-w-lg w-full">
        <CardContent className="p-10 text-center">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Solaris Nutri" className="h-16 w-auto rounded-full" />
          </div>

          {state === "validating" && (
            <>
              <Loader2 className="mx-auto text-accent animate-spin mb-4" size={32} />
              <h1 className="font-serif text-2xl text-[#4D7D7D] mb-2">Checking your request…</h1>
              <p className="font-sans text-foreground/70">One moment while we verify your link.</p>
            </>
          )}

          {state === "valid" && (
            <>
              <MailX className="mx-auto text-accent mb-4" size={32} />
              <h1 className="font-serif text-2xl text-[#4D7D7D] mb-3">
                Confirm unsubscribe
              </h1>
              <p className="font-sans text-foreground/70 mb-6">
                We're sorry to see you go. Confirm below and you'll stop receiving
                emails from Solaris Nutri.
              </p>
              <Button
                onClick={confirm}
                className="font-sans bg-primary hover:bg-primary/90"
              >
                Yes, unsubscribe me
              </Button>
            </>
          )}

          {state === "confirming" && (
            <>
              <Loader2 className="mx-auto text-accent animate-spin mb-4" size={32} />
              <h1 className="font-serif text-2xl text-[#4D7D7D]">Processing…</h1>
            </>
          )}

          {state === "success" && (
            <>
              <CheckCircle2 className="mx-auto text-green-600 mb-4" size={32} />
              <h1 className="font-serif text-2xl text-[#4D7D7D] mb-3">
                You're unsubscribed
              </h1>
              <p className="font-sans text-foreground/70">
                You will no longer receive emails from Solaris Nutri. This change
                may take a short time to take effect.
              </p>
            </>
          )}

          {state === "invalid" && (
            <>
              <AlertCircle className="mx-auto text-amber-600 mb-4" size={32} />
              <h1 className="font-serif text-2xl text-[#4D7D7D] mb-3">
                This link is invalid or expired
              </h1>
              <p className="font-sans text-foreground/70">
                The unsubscribe link is no longer valid. If you're still receiving
                unwanted emails, please reply to any message and we'll help.
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Unsubscribe;
