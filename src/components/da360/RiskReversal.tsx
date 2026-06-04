import { Shield, Zap, HeartHandshake } from "lucide-react";
import CTAButton from "@/components/da360/CTAButton";

const guarantees = [
  { icon: Zap, title: "Free Masterclass First", desc: "Attend a full masterclass before you commit. No pressure, no payment." },
  { icon: Shield, title: "100% Placement Assistance", desc: "If we can't help you get placed, we'll extend your support — free of charge." },
  { icon: HeartHandshake, title: "Flexible Payment Plans", desc: "EMI options starting from ₹4,999/month. Education shouldn't be a financial burden." },
];

const RiskReversal = () => (
  <section className="section-spacing bg-background">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-2xl md:text-[48px] font-extrabold leading-tight md:leading-[1.3] mb-3 md:mb-4">
        Zero Risk. All Reward.
      </h2>
      <p className="text-muted-foreground mb-[40px] max-w-xl mx-auto text-sm md:text-base">
        We're so confident in the program, we remove every barrier.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mb-[40px]">
        {guarantees.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="bg-accent/20 text-accent-foreground rounded-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Icon className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <h3 className="font-heading font-bold text-base md:text-lg mb-2">{title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      <CTAButton>
        Book Free Masterclass — No Risk
      </CTAButton>
    </div>
  </section>
);

export default RiskReversal;
