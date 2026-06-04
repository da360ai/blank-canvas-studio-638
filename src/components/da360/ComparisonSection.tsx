import { Check, X } from "lucide-react";

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

const ComparisonSection = () => (
  <section className="section-spacing bg-[#F5F5F5]">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-2xl md:text-[48px] font-extrabold leading-tight md:leading-[1.3] text-center text-black mb-[40px]">
        DA360 vs Other Programs
      </h2>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl border-[2px] border-black shadow-[0_4px_0_0_rgba(0,0,0,0.45)] overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[1fr_80px_80px] md:grid-cols-[1fr_160px_160px] bg-black text-white p-4 md:p-5 font-heading font-bold text-xs md:text-base">
          <span>Feature</span>
          <span className="text-center">DA360</span>
          <span className="text-center text-white/60">Others</span>
        </div>

        {/* Rows */}
        {features.map(({ feature, da360, others }, i) => (
          <div
            key={feature}
            className={`grid grid-cols-[1fr_80px_80px] md:grid-cols-[1fr_160px_160px] p-3 md:p-5 items-center text-xs md:text-base ${
              i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"
            } ${i < features.length - 1 ? "border-b border-black/10" : ""}`}
          >
            <span className="font-medium text-black pr-2 md:pr-4">{feature}</span>
            <div className="flex justify-center">
              {da360 ? (
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" strokeWidth={3} />
                </div>
              ) : (
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="h-3.5 w-3.5 md:h-4 md:w-4 text-red-500" strokeWidth={3} />
                </div>
              )}
            </div>
            <div className="flex justify-center">
              {others ? (
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" strokeWidth={3} />
                </div>
              ) : (
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="h-3.5 w-3.5 md:h-4 md:w-4 text-red-500" strokeWidth={3} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonSection;
