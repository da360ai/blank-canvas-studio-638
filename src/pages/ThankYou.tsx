import { CheckCircle2, ArrowLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import da360Logo from "@/assets/da360-logo.png";

const ThankYou = () => {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border bg-background/95">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-12">
          <Link to="/" aria-label="Digital Academy 360 home">
            <img src={da360Logo} alt="Digital Academy 360" className="h-11 w-auto object-contain md:h-14" />
          </Link>
          <a
            href="tel:+919035354441"
            className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">+91 90353 54441</span>
            <span className="sm:hidden">Call us</span>
          </a>
        </div>
      </header>

      <section className="flex flex-1 items-center justify-center px-4 py-16 md:py-24">
        <div className="w-full max-w-2xl text-center">
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="h-11 w-11" aria-hidden="true" />
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">Application received</p>
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
            Thank you for your interest in DA360!
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Your details have been submitted successfully. Our counsellor will reach out within 24 hours to help you take the next step.
          </p>
          <Button asChild className="mt-9 rounded-full px-7 py-6 font-heading font-bold">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to website
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;
