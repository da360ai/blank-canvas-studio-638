import { GraduationCap, Briefcase, Lightbulb, RefreshCw } from "lucide-react";
import CTAButton from "@/components/da360/CTAButton";

const personas = [
  {
    icon: GraduationCap,
    title: "Fresh Graduates",
    pain: "No experience, no callbacks",
    outcome: "Launch into a ₹5-8L role with a portfolio that proves your skills",
    cta: "Launch My Career",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    pain: "Stuck in execution, no growth path",
    outcome: "Move into strategy & leadership roles with 50-100% salary jumps",
    cta: "Accelerate My Growth",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurs",
    pain: "Spending on agencies without ROI clarity",
    outcome: "Master your own marketing and save lakhs annually",
    cta: "Grow My Business",
  },
  {
    icon: RefreshCw,
    title: "Career Switchers",
    pain: "Current field has no future",
    outcome: "Transition into digital marketing with confidence and placement support",
    cta: "Switch With Confidence",
  },
];

const WhoIsThisFor = () => (
  <section className="section-spacing bg-[#F5F5F5]">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-2xl md:text-[48px] font-extrabold text-center text-black mb-3 md:mb-4 italic leading-tight">
        Who Is This For?
      </h2>
      <p className="text-center text-black/70 mb-[40px] max-w-xl mx-auto text-base md:text-lg">
        Whether you're starting out or leveling up, DA360 is built for you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {personas.map(({ icon: Icon, title, pain, outcome, cta }) => (
          <div
            key={title}
            className="bg-white border-[2px] border-black rounded-2xl p-5 md:p-6 flex flex-col shadow-[0_4px_0_0_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all"
          >
            <div className="bg-black text-white rounded-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
              <Icon className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <h3 className="font-heading font-bold text-base md:text-lg text-black mb-2">{title}</h3>
            <p className="text-sm text-black/50 mb-2 md:mb-3 italic">"{pain}"</p>
            <p className="text-sm font-medium text-black mb-4 flex-1">{outcome}</p>
            {/* Mobile + tablet only — unique CTA per persona */}
            <div className="lg:hidden">
              <CTAButton fullWidth className="py-2.5 text-sm" formLabel={`${cta} - ${title}`}>
                {cta}
              </CTAButton>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: single conversion CTA */}
      <div className="hidden lg:flex justify-center mt-10">
        <CTAButton className="px-10 py-4 text-base" formLabel="Unlock My Career Path">
          Unlock My Career Path
        </CTAButton>
      </div>
    </div>
  </section>
);

export default WhoIsThisFor;
