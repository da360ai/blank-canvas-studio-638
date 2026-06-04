import { BookOpen, Wrench, Building, Trophy } from "lucide-react";

const steps = [
  { icon: BookOpen, title: "Learn", desc: "Master AI-powered digital marketing fundamentals", month: "Month 1-3" },
  { icon: Wrench, title: "Practice", desc: "Work on 20+ live campaigns with real budgets", month: "Month 4-6" },
  { icon: Building, title: "Internship", desc: "3-month internship at a top marketing agency", month: "Month 7-9" },
  { icon: Trophy, title: "Placement", desc: "Dedicated support until you land your dream role", month: "Ongoing" },
];

const JourneySection = () => (
  <section className="section-spacing bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-2xl md:text-[48px] font-extrabold leading-tight md:leading-[1.3] text-center mb-[40px]">
        Your Journey
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
          {steps.map(({ icon: Icon, title, desc, month }, i) => (
            <div key={title} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-border z-0" />
              )}
              <div className="bg-card border border-border rounded-2xl p-4 md:p-6 text-center relative z-10">
                <div className="bg-primary/10 text-primary rounded-full w-11 h-11 md:w-14 md:h-14 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-accent-foreground bg-accent/20 rounded-full px-2.5 md:px-3 py-1">{month}</span>
                <h3 className="font-heading font-bold text-base md:text-lg mt-2 md:mt-3 mb-1 md:mb-2">{title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default JourneySection;
