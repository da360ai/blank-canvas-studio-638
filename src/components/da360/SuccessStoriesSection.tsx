import { useState, useRef } from "react";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import CTAButton from "@/components/da360/CTAButton";

import khushiImg from "@/assets/students/khushi-surana.png";
import vishnuImg from "@/assets/students/vishnu.png";
import adarshImg from "@/assets/students/adarsh-gupta.png";
import poojaImg from "@/assets/students/pooja-m.png";
import amalaImg from "@/assets/students/amala-sharika.png";
import meghaImg from "@/assets/students/megha-lodha.png";
import krithikImg from "@/assets/students/krithik-kumar.png";
import sanjayImg from "@/assets/students/sanjay-hr.png";

import amazonLogo from "@/assets/logos/amazon.png";
import googleLogo from "@/assets/logos/google.png";
import tulaLogo from "@/assets/logos/tula.png";
import anteriadLogo from "@/assets/logos/anteriad.png";
import vertexLogo from "@/assets/logos/vertex-glosc.png";
import eatRepeatLogo from "@/assets/logos/eat-repeat.png";
import massCodersLogo from "@/assets/logos/mass-coders.png";
import rollingRockLogo from "@/assets/logos/rolling-rock.png";

const stories = [
  { name: "Khushi Surana", company: "Amazon", companyLogo: amazonLogo, previousRole: "Modelling", newRole: "Advertising Ops Specialist", package: "5 LPA", image: khushiImg, cardBg: "#B2EBF2" },
  { name: "Vishnu", company: "Google", companyLogo: googleLogo, previousRole: "Fresher", newRole: "AdWords Strategist", package: "6 LPA", image: vishnuImg, cardBg: "#C8E6C9" },
  { name: "Adarsh Gupta", company: "Tula Properties", companyLogo: tulaLogo, previousRole: "Fresher", newRole: "Digital Marketing Executive", package: "4.2 LPA", image: adarshImg, cardBg: "#FFE0B2" },
  { name: "Pooja . M", company: "Anteriad", companyLogo: anteriadLogo, previousRole: "Fresher", newRole: "Digital Marketing Analyst", package: "4.7 LPA", image: poojaImg, cardBg: "#C8E6C9" },
  { name: "Amala Sharika", company: "VG", companyLogo: vertexLogo, previousRole: "Fresher", newRole: "Senior Executive Marketing", package: "4 LPA", image: amalaImg, cardBg: "#F8BBD0" },
  { name: "Megha Lodha", company: "Eat Repeat", companyLogo: eatRepeatLogo, previousRole: "Fresher", newRole: "Campaign Specialist", package: "3.28 LPA", image: meghaImg, cardBg: "#E1BEE7" },
  { name: "Krithik Kumar", company: "Mass Coders", companyLogo: massCodersLogo, previousRole: "Fresher", newRole: "Digital Marketing Executive", package: "3 LPA", image: krithikImg, cardBg: "#B3E5FC" },
  { name: "Sanjay H R", company: "Rolling Rock", companyLogo: rollingRockLogo, previousRole: "Fresher", newRole: "SEO Analyst", package: "5.2 LPA", image: sanjayImg, cardBg: "#F8BBD0" },
];

const SuccessStoriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="section-spacing relative overflow-hidden w-full bg-background">
      <div
        className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 rounded-2xl md:rounded-3xl py-10 md:py-24"
        style={{
          backgroundColor: "#FFEC5E",
          backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        {/* Header */}
        <div className="text-center mb-8 md:mb-[40px]">
          <h2 className="font-heading text-2xl md:text-[48px] font-extrabold leading-tight md:leading-[1.3] text-foreground mb-3 md:mb-4">
            Real Stories. Real Impact. Real Careers.
          </h2>
          <p className="text-foreground/80 text-sm md:text-lg max-w-2xl mx-auto">
            Meet the Learners Who Transformed Their Futures with Our AI-Powered Digital Marketing Program
          </p>

          {/* Avatar stack */}
          <div className="flex items-center justify-center gap-1 mt-5 md:mt-6">
            {stories.slice(0, 4).map((s, i) => (
              <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white -ml-2 first:ml-0 overflow-hidden">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-foreground -ml-2 flex items-center justify-center text-[7px] md:text-[8px] font-bold text-white">
              60,000+
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex items-stretch gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {stories.map(({ name, company, companyLogo, previousRole, newRole, package: pkg, image, cardBg }, idx) => (
            <div key={name} className="flex-shrink-0 w-[260px] md:w-[360px] snap-start flex">
              <div className="w-full flex flex-col rounded-2xl border-2 border-foreground overflow-hidden bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div
                  className="h-[260px] md:h-[320px] flex items-end justify-center relative overflow-hidden shrink-0"
                  style={{ backgroundColor: cardBg }}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-center"
                    loading={idx < 2 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={idx < 2 ? "high" : "auto"}
                  />
                </div>

                <div className="p-4 md:p-5 bg-white flex-1 flex flex-col">
                  <h3 className="font-heading font-bold text-lg md:text-xl text-foreground text-center mb-2 min-h-[28px] md:min-h-[32px]">{name}</h3>
                  <div className="flex justify-center mb-2 md:mb-3 h-7 md:h-8">
                    <img src={companyLogo} alt={company} className="h-7 md:h-8 object-contain" loading="lazy" decoding="async" />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs md:text-sm mb-3 md:mb-4 min-h-[40px]">
                    <span className="text-foreground/70">{previousRole}</span>
                    <img src="https://www.digitalacademy360.com/images/student-arrow.svg" alt="arrow" className="h-4 w-4 md:h-5 md:w-5" loading="lazy" decoding="async" />
                    <span className="font-bold text-foreground">{newRole}</span>
                  </div>
                  <div className="border-t border-border pt-2.5 md:pt-3 text-center mt-auto">
                    <span className="text-xs md:text-sm text-foreground/60">Package: </span>
                    <span className="font-bold text-foreground text-base md:text-lg">{pkg}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex-shrink-0 w-[260px] md:w-[360px] snap-start flex">
            <div className="w-full rounded-2xl border-2 border-foreground overflow-hidden bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center p-6 md:p-8">
              <p className="font-heading font-bold text-base md:text-lg text-foreground text-center mb-5 md:mb-6">
                Want to see more inspiring stories?
              </p>
              <button className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full border-2 border-foreground font-heading font-bold text-sm md:text-base text-foreground hover:bg-foreground hover:text-white transition-colors">
                View All Success Stories <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 md:w-10 md:h-10 rounded-lg border-2 border-foreground flex items-center justify-center bg-white hover:bg-foreground hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>
          <div className="w-32 md:w-40 h-1.5 bg-foreground/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-foreground rounded-full transition-all duration-200"
              style={{ width: `${Math.max(15, scrollProgress * 100)}%` }}
            />
          </div>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 md:w-10 md:h-10 rounded-lg border-2 border-foreground flex items-center justify-center bg-white hover:bg-foreground hover:text-white transition-colors"
          >
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>

        {/* Download CTA */}
        <div className="flex justify-center mt-8 md:mt-10">
          <CTAButton className="px-8 md:px-10 py-3.5 md:py-4 text-sm md:text-lg">
            Download Placement Report <ArrowRight className="inline h-4 w-4 md:h-5 md:w-5 ml-2" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
