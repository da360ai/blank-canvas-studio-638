import { Clock, AlertCircle } from "lucide-react";
import CTAButton from "@/components/da360/CTAButton";
import { useBatchCountdown } from "@/hooks/use-batch-countdown";

const UrgencySection = () => {
  const { days, hours, mins, secs } = useBatchCountdown();
  // Combine days into hours so this compact 3-cell display still reflects total time left
  const totalHours = days * 24 + hours;

  return (
    <section className="section-spacing bg-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
          <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
          <h2 className="font-heading text-xl md:text-3xl font-extrabold text-primary-foreground">
            Application Closing Soon
          </h2>
        </div>

        <p className="text-primary-foreground/90 mb-5 md:mb-6 text-sm md:text-base">
          Next batch starts in limited time. Only <span className="font-bold underline">12 seats remaining.</span>
        </p>

        <div className="flex justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          {[
            { val: totalHours, label: "Hours" },
            { val: mins, label: "Mins" },
            { val: secs, label: "Secs" },
          ].map(({ val, label }) => (
            <div key={label} className="bg-primary-foreground/20 backdrop-blur rounded-xl px-4 md:px-5 py-2.5 md:py-3 min-w-[60px] md:min-w-[70px]">
              <div className="text-2xl md:text-3xl font-extrabold text-primary-foreground font-heading">{String(val).padStart(2, "0")}</div>
              <div className="text-[10px] md:text-xs text-primary-foreground/70">{label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
          <CTAButton className="bg-background text-foreground border-foreground hover:bg-background/90 text-sm md:text-base">
            Book Free Class Now
          </CTAButton>
          <CTAButton variant="outline" className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 text-sm md:text-base">
            Apply Now
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
