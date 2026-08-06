import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Code, Search, Brain } from "lucide-react";

type MonthData = {
  month: number;
  phase: string;
  title: string;
  icon: React.ElementType;
  topics: string[];
};

const months: MonthData[] = [
  { month: 1, phase: "Foundation", title: "Marketing & Web Fundamentals", icon: BookOpen, topics: ["Digital Marketing Principles", "Branding & Business Fundamentals", "AI Content & Prompt Engineering", "Social Media Creative Design", "Color Theory & Typography"] },
  { month: 2, phase: "Build", title: "Website Development & SEO Basics", icon: Code, topics: ["HTML5 & CSS3 Fundamentals", "WordPress & WooCommerce", "Landing Page Design & CRO", "How Search Engines Work", "Keyword Research & Analysis"] },
  { month: 3, phase: "Growth", title: "SEO Mastery & Social Media", icon: Search, topics: ["On-Page & Technical SEO", "Off-Page SEO & Link Building", "Local SEO & Google Business", "Social Media Strategy", "Content Calendar Planning"] },
  { month: 6, phase: "Specialize", title: "Advanced Specialisations", icon: Brain, topics: ["Programmatic SEO & AI Tools", "E-commerce Marketing", "Marketing Automation & MarTech", "Influencer & Meme Marketing", "Media Planning & Programmatic Ads"] },
];

const ProjectsSection = () => {
  const [activeMonth, setActiveMonth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const scroll = (dir: number) => {
    const next = Math.max(0, Math.min(months.length - 1, activeMonth + dir));
    setActiveMonth(next);
  };

  useEffect(() => {
    const btn = btnRefs.current[activeMonth];
    const track = trackRef.current;
    if (btn && track) {
      const btnLeft = btn.offsetLeft;
      const target = btnLeft - track.clientWidth / 2 + btn.clientWidth / 2;
      track.scrollTo({ left: target, behavior: "smooth" });
    }
  }, [activeMonth]);

  const active = months[activeMonth];

  return (
    <section className="section-spacing bg-[#F5F5F5]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Header */}
        <h2 className="font-heading text-2xl md:text-[48px] font-extrabold leading-tight md:leading-[1.3] text-center mb-2 text-gray-900">
          Your 6-Month Transformation Roadmap
        </h2>
        <p className="text-center text-gray-600 mb-[40px] max-w-2xl mx-auto text-sm md:text-base">
          A structured month-by-month journey from beginner to industry-ready digital marketer
        </p>

        {/* Month Selector Bar */}
        <div className="flex items-center gap-2 md:gap-3 mb-[40px]">
          <button
            onClick={() => scroll(-1)}
            disabled={activeMonth === 0}
            className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-[2.5px] border-black flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          <div ref={trackRef} className="flex-1 flex gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide scroll-smooth">
            {months.map((m, i) => (
              <button
                key={m.month}
                ref={(el) => (btnRefs.current[i] = el)}
                onClick={() => setActiveMonth(i)}
                className={`shrink-0 flex-1 min-w-[72px] md:min-w-[100px] py-2 md:py-2.5 px-1.5 md:px-2 rounded-[14px] text-center transition-all duration-300 border ${
                  i === activeMonth
                    ? "bg-white text-gray-900 border-black font-bold shadow-[0_4px_0_0_rgba(0,0,0,0.45)]"
                    : "bg-[#F5F5F5] text-gray-900 border-gray-300 hover:bg-white hover:border-black"
                }`}
              >
                <span className="text-[8px] md:text-[10px] uppercase tracking-wider block opacity-60 font-semibold">
                  Month
                </span>
                <span className="text-sm md:text-lg font-extrabold block leading-tight">{m.month}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            disabled={activeMonth === months.length - 1}
            className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-[2.5px] border-black flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>

        {/* Active Month Card */}
        <div className="relative rounded-[20px] border border-black/20 overflow-hidden bg-white shadow-[0_4px_0_0_rgba(0,0,0,0.45)]">
          <div className="p-5 md:p-12">
            <div className="flex flex-row gap-4 md:gap-12 items-start">
              {/* Left: Phase + Title */}
              <div className="flex-1 min-w-0 order-1">
                <p className="font-heading italic text-sm md:text-base font-extrabold tracking-[0.15em] uppercase mb-2 text-primary">
                  {active.phase}
                </p>
                <h3 className="font-heading text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6">
                  {active.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
                  {active.topics.map((topic, idx) => (
                    <div
                      key={topic}
                      className="flex items-center gap-3 bg-[#F5F5F5] rounded-xl px-4 md:px-5 py-3 md:py-4 border-[1.5px] border-black hover:bg-[#EDE9FE] transition-colors"
                    >
                      <span className="shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-lg bg-gray-900 flex items-center justify-center text-white text-xs font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-xs md:text-sm text-gray-900 font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Month Info */}
              <div className="shrink-0 order-2 text-right">
                <p className="font-heading italic font-extrabold leading-none text-primary text-4xl md:text-7xl tracking-tight">
                  {`0${active.month}`}
                </p>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-600 mt-2 font-bold italic">
                  Month
                </p>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="px-5 md:px-12 pb-5 md:pb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 font-bold shrink-0">Progress</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden border border-black/10">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${((activeMonth + 1) / months.length) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-900 font-bold shrink-0">
                {activeMonth + 1}/{months.length}
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm md:text-base border-[2.5px] border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform"
          >
            Book Free Class Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
