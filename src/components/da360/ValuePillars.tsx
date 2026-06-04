import { GraduationCap, Rocket, Target, ArrowRight } from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: GraduationCap,
    title: "Learn Like a Leader",
    desc: "Master AI-driven marketing strategy, not just tools. Think CMO-level from day one.",
    points: ["CMO-level frameworks", "AI strategy playbooks", "Live case studies"],
  },
  {
    num: "02",
    icon: Rocket,
    title: "Work Like a Pro",
    desc: "Run real campaigns with real budgets. Build a portfolio that proves your expertise.",
    points: ["Real ad budgets", "Agency-grade projects", "Portfolio that hires"],
  },
  {
    num: "03",
    icon: Target,
    title: "Land Your Dream Role",
    desc: "Get placed at top companies with dedicated career support and interview coaching.",
    points: ["1:1 interview prep", "Hiring partner network", "Salary negotiation"],
  },
];

const ValuePillars = () => (
  <section className="section-spacing bg-[#F5F5F5]">
    <div className="container mx-auto px-4">
      <div className="text-center mb-[40px]">
        <span className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold tracking-wider mb-4">
          THE DA360 ADVANTAGE
        </span>
        <h2 className="font-heading text-2xl md:text-[48px] font-extrabold text-black mb-3 italic leading-tight md:leading-[1.3]">
          From applicant to working professional,<br />in three moves.
        </h2>
        <p className="text-black/70 max-w-xl mx-auto text-base md:text-lg">
          A proven path designed around how you learn, work, and grow.
        </p>
      </div>

      {/* Vertical timeline / stepper layout */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical connector line */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-black/15 md:-translate-x-1/2" aria-hidden />

        <div className="space-y-8 md:space-y-12">
          {pillars.map(({ num, icon: Icon, title, desc, points }, i) => {
            const isRight = i % 2 === 1;
            return (
              <div
                key={title}
                className={`relative flex items-start gap-5 md:gap-0 ${
                  isRight ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Number node */}
                <div className="relative z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white border-[3px] border-black shadow-[0_4px_0_0_rgba(0,0,0,0.45)] flex items-center justify-center font-heading italic font-extrabold text-lg md:text-2xl">
                    {num}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 md:max-w-[44%] bg-white border-[2.5px] border-black rounded-2xl p-5 md:p-7 shadow-[0_4px_0_0_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all duration-300 ${
                    isRight ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      isRight ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-extrabold italic leading-snug text-black">
                      {title}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-black/70 mb-4">
                    {desc}
                  </p>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      isRight ? "md:justify-end" : ""
                    }`}
                  >
                    {points.map((p) => (
                      <span
                        key={p}
                        className="px-3 py-1 rounded-full bg-[#F5F5F5] border border-black/15 text-xs font-semibold text-black"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Single CTA below */}
      <div className="text-center mt-10 md:mt-14">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-bold text-sm md:text-base border-2 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.45)] hover:scale-105 transition-transform duration-300"
        >
          See the full advantage <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

export default ValuePillars;
