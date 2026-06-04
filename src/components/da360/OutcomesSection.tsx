import { ArrowRight } from "lucide-react";

const transformations = [
  { before: "Fresher with no experience", beforeSalary: "—", after: "Performance Marketing Manager", company: "Flipkart", salary: "8.5L/yr" },
  { before: "4L/yr content writer", beforeSalary: "4L/yr", after: "Growth Marketing Lead", company: "Razorpay", salary: "12L/yr" },
  { before: "Freelancer with inconsistent income", beforeSalary: "—", after: "Digital Strategy Consultant", company: "Independent", salary: "15L/yr" },
  { before: "MBA grad with no tech skills", beforeSalary: "—", after: "AI Marketing Specialist", company: "Swiggy", salary: "9.2L/yr" },
];

const OutcomesSection = () => (
  <section className="section-spacing bg-background">
    <div className="max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="mb-10 md:mb-16 text-center space-y-3">
        <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-muted-foreground font-semibold">
          Career Transformations
        </span>
        <h2 className="font-heading text-2xl md:text-[48px] font-extrabold leading-tight md:leading-[1.1] text-foreground tracking-tight">
          Where They Started.
          <br />
          <span className="text-muted-foreground">Where They Are Now.</span>
        </h2>
        <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground pt-2">
          Real career pivots from DA360 alumni — no shortcuts, just transformation.
        </p>
      </div>

      {/* Transformation Cards */}
      <div className="space-y-6 md:space-y-10">
        {transformations.map((t, i) => (
          <div key={i} className="grid grid-cols-1 lg:grid-cols-11 gap-3 md:gap-6 items-center">
            {/* Before */}
            <div className="lg:col-span-4">
              <div className="bg-card border-[2.5px] border-foreground p-5 md:p-8 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.45)]">
                <span className="inline-block px-3 py-1 bg-destructive/10 text-destructive text-[10px] font-extrabold uppercase rounded-full mb-2 md:mb-3">
                  Before DA360
                </span>
                <p className="text-foreground font-semibold text-sm mt-1 md:mt-2">{t.before}</p>
                <div className="mt-4 md:mt-5 pt-3 md:pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-1">
                    Salary
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-muted-foreground">{t.beforeSalary}</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="lg:col-span-3 flex flex-row lg:flex-col items-center gap-2 py-1 md:py-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-accent border-[2.5px] border-foreground flex items-center justify-center rotate-45 rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,0.45)]">
                <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent-foreground -rotate-45" />
              </div>
              <div className="flex-1 lg:w-full h-px lg:h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-extrabold text-muted-foreground whitespace-nowrap">
                DA360 Program
              </span>
            </div>

            {/* After */}
            <div className="lg:col-span-4">
              <div className="bg-card border-[2.5px] border-foreground p-5 md:p-8 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.45)]">
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground text-[10px] font-extrabold uppercase rounded-full mb-2 md:mb-3">
                  Placed ✓
                </span>
                <h4 className="font-heading font-extrabold text-lg md:text-2xl text-foreground">
                  {t.after}
                </h4>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  {t.company}
                </p>
                <div className="mt-4 md:mt-5 pt-3 md:pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-1">
                    New Salary
                  </span>
                  <span className="font-heading text-2xl md:text-4xl font-extrabold text-primary">
                    {t.salary}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OutcomesSection;
