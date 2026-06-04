import { Check, X, Trophy, Sparkles } from "lucide-react";

const features = [
  { feature: "AI-Powered Marketing Training", da360: true, others: false },
  { feature: "3-Month Paid Internship", da360: true, others: false },
  { feature: "Real Campaign Experience (Lakhs Budget)", da360: true, others: false },
  { feature: "Dedicated Placement Support", da360: true, others: true },
  { feature: "22+ Industry Certifications", da360: true, others: false },
  { feature: "Leadership & Strategy Focus", da360: true, others: false },
  { feature: "Mentor Access (Ex-Google, Ex-Ogilvy)", da360: true, others: false },
  { feature: "Portfolio with Real Client Work", da360: true, others: false },
];

const Cell = ({ value, highlight }: { value: boolean; highlight?: boolean }) => (
  <div className="flex justify-center">
    {value ? (
      <div
        className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center shadow-sm ${
          highlight
            ? "bg-gradient-to-br from-emerald-400 to-emerald-600 ring-2 ring-emerald-200"
            : "bg-emerald-500/90"
        }`}
      >
        <Check className="h-4 w-4 md:h-5 md:w-5 text-white" strokeWidth={3} />
      </div>
    ) : (
      <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
        <X className="h-4 w-4 md:h-5 md:w-5 text-red-400" strokeWidth={3} />
      </div>
    )}
  </div>
);

const ComparisonSection = () => (
  <section className="section-spacing bg-[#F5F5F5]">
    <div className="container mx-auto px-4">
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold border border-primary/20">
          <Sparkles className="h-3.5 w-3.5" />
          Side-by-side comparison
        </span>
      </div>
      <h2 className="font-heading text-2xl md:text-[48px] font-extrabold leading-tight md:leading-[1.3] text-center text-black mb-[40px]">
        DA360 vs Other Programs
      </h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Winner badge floating above DA360 column */}
        <div className="hidden md:flex absolute -top-4 right-[180px] z-10 items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-bold shadow-md">
          <Trophy className="h-3.5 w-3.5" />
          Best Choice
        </div>

        <div className="bg-white rounded-2xl border-[2px] border-black shadow-[0_8px_0_0_rgba(0,0,0,0.45)] overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_88px_88px] md:grid-cols-[1fr_160px_160px] bg-black text-white font-heading font-bold text-xs md:text-base">
            <span className="p-4 md:p-5">Feature</span>
            <span className="text-center p-4 md:p-5 bg-gradient-to-b from-primary to-primary/80 text-white relative">
              DA360
            </span>
            <span className="text-center p-4 md:p-5 text-white/50">Others</span>
          </div>

          {/* Rows */}
          {features.map(({ feature, da360, others }, i) => (
            <div
              key={feature}
              className={`group grid grid-cols-[1fr_88px_88px] md:grid-cols-[1fr_160px_160px] items-center text-xs md:text-base transition-colors ${
                i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
              } ${i < features.length - 1 ? "border-b border-black/10" : ""} hover:bg-primary/5`}
            >
              <span className="font-medium text-black pr-2 md:pr-4 p-3 md:p-5">
                {feature}
              </span>
              <div className="p-3 md:p-5 bg-primary/5 group-hover:bg-primary/10 border-x border-primary/10 h-full flex items-center justify-center">
                <Cell value={da360} highlight />
              </div>
              <div className="p-3 md:p-5 flex items-center justify-center">
                <Cell value={others} />
              </div>
            </div>
          ))}
        </div>

        {/* Footer stat */}
        <p className="text-center text-xs md:text-sm text-black/60 mt-4">
          <span className="font-bold text-black">8 / 8</span> features included with DA360 ·{" "}
          <span className="font-bold text-black">1 / 8</span> with others
        </p>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
