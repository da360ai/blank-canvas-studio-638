import { XCircle, TrendingDown, Cpu, ArrowRight } from "lucide-react";

const pains = [
  { icon: XCircle, title: "Applied to 100+ jobs with no response?", desc: "Your resume disappears into the void because you lack real-world proof of skills." },
  { icon: TrendingDown, title: "Stuck in execution roles without growth?", desc: "You run ads and write posts, but never get to lead strategy or manage budgets." },
  { icon: Cpu, title: "Worried AI will replace your skills?", desc: "Every tool you learned last year is already outdated. The market won't wait." },
];

const PainPointSection = () => (
  <section id="pain-point-section" className="section-spacing bg-[#F5F5F5]">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-2xl md:text-[48px] font-extrabold text-center text-black mb-3 md:mb-4 italic leading-tight">
        Sound Familiar?
      </h2>
      <p className="text-center text-black/70 mb-[40px] max-w-2xl mx-auto text-base md:text-lg">
        Thousands of aspiring marketers face the same frustrations every day.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mb-[40px]">
        {pains.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-white border-[2px] border-black rounded-2xl p-6 md:p-8 shadow-[0_4px_0_0_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all"
          >
            <div className="bg-black text-white rounded-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
              <Icon className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <h3 className="font-heading font-bold text-base md:text-lg text-black mb-2">{title}</h3>
            <p className="text-black/60 text-sm">{desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-transparent text-black font-heading font-bold text-base md:text-lg px-6 md:px-8 py-3 rounded-full border-[2px] border-black hover:bg-white transition-colors cursor-pointer">
          Learn to Live <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </div>
  </section>
);

export default PainPointSection;
