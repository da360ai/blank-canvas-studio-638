import { Check, Star, ArrowRight } from "lucide-react";

const ChoosePathSection = () => (
  <section className="section-spacing bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-2xl md:text-[48px] font-extrabold text-center text-foreground mb-3 leading-tight md:leading-[1.3]">
        Choose your path.<br />
        Digital Marketing in both.<br />
        Business Strategy in one.
      </h2>
      <p className="text-center text-muted-foreground text-base md:text-lg mb-[40px]">
        Pick the program that matches your career goal.
      </p>

      {/* Learning Options Banner */}
      <div className="max-w-5xl mx-auto rounded-2xl bg-[#FFEC5E] text-foreground p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 shadow-[0_4px_0_0_rgba(0,0,0,0.45)] border-[2.5px] border-black mb-6 md:mb-8">
        <div className="text-center md:text-left shrink-0">
          <h3 className="font-heading text-base md:text-xl font-extrabold italic">
            Learning Options
          </h3>
          <p className="text-foreground/70 text-xs md:text-sm">
            Choose how and where you want to learn.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-2.5">
          {["Online", "Bangalore", "Jayanagar", "J P Nagar", "Malleshwaram"].map((opt) => (
            <span
              key={opt}
              className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white border-2 border-black text-xs md:text-sm font-bold text-foreground shadow-[0_2px_0_0_rgba(0,0,0,0.45)]"
            >
              {opt}
            </span>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto mb-6 md:mb-8 items-stretch">
        {/* Leadership - Promoted */}
        <div className="relative rounded-2xl border-[2.5px] border-primary bg-primary text-white shadow-[0_4px_0_0_rgba(0,0,0,0.45)] overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 md:px-4 py-1.5 rounded-bl-xl text-xs font-extrabold flex items-center gap-1">
            <Star className="h-3 w-3" fill="currentColor" /> JOB GUARANTEED
          </div>
          <div className="p-6 pt-10 md:p-8 md:pt-12 flex flex-col flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-4 self-start">
              For the Leader
            </span>
            <h3 className="font-heading text-lg md:text-2xl font-extrabold mb-1">
              Leadership in Digital Marketing, AI & Entrepreneurship
            </h3>
            <div className="flex flex-wrap gap-2 mt-3 mb-5 md:mb-6">
              <span className="px-3 py-1 rounded-md border border-white/30 text-xs font-semibold">6 + 6 Months</span>
              <span className="px-3 py-1 rounded-md border border-white/30 text-xs font-semibold">Classroom</span>
            </div>
            <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
              {[
                "6 Months Paid Internship",
                "10 Specializations",
                "240+ Hours of Learning",
                "50+ Case Studies",
                "30+ AI-Powered Tools",
                "22+ Certifications",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-accent" strokeWidth={3} />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-white/50 text-xs italic mb-4 md:mb-5">
              Built for those who want to run the room, not just the campaign.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex items-center gap-2 w-full justify-center px-6 py-3 md:py-3.5 rounded-full bg-accent text-accent-foreground font-bold text-sm md:text-base border-2 border-accent shadow-[0_4px_0_0_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-300"
            >
              Apply for Leadership <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* PGCP - Standard */}
        <div className="relative rounded-2xl border-[2.5px] border-black bg-card text-foreground shadow-[0_4px_0_0_rgba(0,0,0,0.45)] overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 bg-foreground text-white px-3 md:px-4 py-1.5 rounded-bl-xl text-xs font-extrabold flex items-center gap-1">
            <Star className="h-3 w-3" fill="currentColor" /> JOB GUARANTEED
          </div>
          <div className="p-6 pt-10 md:p-8 md:pt-12 flex flex-col flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full border-2 border-black text-sm font-bold mb-4 self-start">
              For the Specialist
            </span>
            <h3 className="font-heading text-lg md:text-2xl font-extrabold mb-1">
              PGCP in Digital Marketing, E-Comm & AI
            </h3>
            <div className="flex flex-wrap gap-2 mt-3 mb-5 md:mb-6">
              <span className="px-3 py-1 rounded-md border border-black/20 text-xs font-semibold">6 Months</span>
              <span className="px-3 py-1 rounded-md border border-black/20 text-xs font-semibold">Online / Classroom</span>
            </div>
            <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
              {[
                "1 Month Free Internship",
                "4 Specializations",
                "PG Level Certification",
                "240+ Hours of Learning",
                "20+ Case Studies",
                "25+ AI Learning Tools",
                "15+ Global Certifications",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-foreground" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-xs italic mb-4 md:mb-5">
              Built for those who want to master every digital marketing channel.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex items-center gap-2 w-full justify-center px-6 py-3 md:py-3.5 rounded-full border-2 border-black text-foreground font-bold text-sm md:text-base hover:bg-black hover:text-white transition-colors"
            >
              Explore PGCP <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Certificate - Foundation */}
        <div className="rounded-2xl border-[2.5px] border-black bg-card text-foreground shadow-[0_4px_0_0_rgba(0,0,0,0.45)] overflow-hidden flex flex-col">
          <div className="p-6 pt-10 md:p-8 md:pt-12 flex flex-col flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full border-2 border-black text-sm font-bold mb-4 self-start">
              For the Beginner
            </span>
            <h3 className="font-heading text-lg md:text-2xl font-extrabold mb-1">
              Skill Diploma Certificate in Digital Marketing & AI
            </h3>
            <div className="flex flex-wrap gap-2 mt-3 mb-5 md:mb-6">
              <span className="px-3 py-1 rounded-md border border-black/20 text-xs font-semibold">3 Months</span>
              <span className="px-3 py-1 rounded-md border border-black/20 text-xs font-semibold">Online / Classroom</span>
            </div>
            <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
              {[
                "No Internship",
                "Industry Recognized Certificate",
                "120+ Hours of Learning",
                "10+ Live Projects",
                "15+ AI Tools Mastery",
                "8+ Globally Valued Certifications",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-foreground" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-xs italic mb-4 md:mb-5">
              Built for those who want to start fast and earn job-ready skills in 3 months.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex items-center gap-2 w-full justify-center px-6 py-3 md:py-3.5 rounded-full border-2 border-black text-foreground font-bold text-sm md:text-base hover:bg-black hover:text-white transition-colors"
            >
              Explore Certificate <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Brochure Banner */}
      <div className="max-w-5xl mx-auto rounded-2xl bg-[#FFEC5E] text-foreground p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 shadow-[0_4px_0_0_rgba(0,0,0,0.45)] border-[2.5px] border-black">
        <div className="text-center md:text-left">
          <h3 className="font-heading text-lg md:text-2xl font-extrabold mb-1">
            Your career in digital marketing and business starts here.
          </h3>
          <p className="text-foreground/70 text-sm md:text-base">
            Everything you need to make your decision in one brochure.
          </p>
        </div>
        <a
          href="#"
          className="shrink-0 px-6 md:px-8 py-3 rounded-full bg-foreground text-white font-bold text-sm md:text-base border-2 border-black hover:opacity-90 transition-colors"
        >
          Download Brochure
        </a>
      </div>
    </div>
  </section>
);

export default ChoosePathSection;
