import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import rajeshImg from "@/assets/mentors/rajesh-choudhury.png";
import shantanuImg from "@/assets/mentors/shantanu-sharma.png";
import harshvardhanImg from "@/assets/mentors/harshvardhan.png";
import debenImg from "@/assets/mentors/deben-rath.png";
import gopalrajImg from "@/assets/mentors/gopalraj.png";
import adityaImg from "@/assets/mentors/aditya-agarwal.png";
import riyaImg from "@/assets/mentors/riya-tiwari.png";
import deepakImg from "@/assets/mentors/deepak.png";
import madhurajImg from "@/assets/mentors/madhuraj.png";
import swanandImg from "@/assets/mentors/swanand.png";
import sujitImg from "@/assets/mentors/sujit.png";
import sathiyaseelanImg from "@/assets/mentors/sathiyaseelan.png";
import monishaImg from "@/assets/mentors/monisha.png";
import azarudheenImg from "@/assets/mentors/azarudheen.png";
import ashwinImg from "@/assets/mentors/ashwin.png";
import advisorSathiyaImg from "@/assets/mentors/advisor-sathiyaseelan.png";
import advisorMonishaImg from "@/assets/mentors/advisor-monisha.png";
import advisorAzarudheenImg from "@/assets/mentors/advisor-azarudheen.png";
import placementAshwinImg from "@/assets/mentors/placement-ashwin.png";
import placementAshwiniImg from "@/assets/mentors/placement-ashwini.png";

type Mentor = {
  name: string;
  role: string;
  experience: string;
  image: string;
  bgColor: string;
};

type TabKey = "guest" | "faculty" | "advisors" | "placement";

const guestMentors: Mentor[] = [
  { name: "RAJESH CHOUDHURY", role: "DGM Digital Marketing at Puravankara", experience: "18+ Years Experience", image: rajeshImg, bgColor: "bg-[#8B2942]" },
  { name: "SHANTANU SHARMA", role: "AVP Digital Marketing at Casagrand", experience: "8+ Years Experience", image: shantanuImg, bgColor: "bg-white" },
  { name: "HARSHVARDHAN S", role: "Digital Lead - Merch at H&M India", experience: "10+ Years Experience", image: harshvardhanImg, bgColor: "bg-white" },
  { name: "DEBEN RATH", role: "Associate Account Manager at Adobe", experience: "8+ Years Experience", image: debenImg, bgColor: "bg-[#A8C5E8]" },
  { name: "GOPAL RAJ", role: "Founder at Verycom", experience: "15+ Years Experience", image: gopalrajImg, bgColor: "bg-[#FFD966]" },
  { name: "ADITYA AGARWAL", role: "Founder at Qilin Lab", experience: "AI & MarTech Expert", image: adityaImg, bgColor: "bg-[#B8E0D2]" },
  { name: "RIYA TIWARI", role: "Founder at Authique", experience: "Brand Strategist", image: riyaImg, bgColor: "bg-[#F4A6C0]" },
];

const da360Faculty: Mentor[] = [
  { name: "DEEPAK", role: "Head of Academics", experience: "12 years Experience", image: deepakImg, bgColor: "bg-[#F4A6C0]" },
  { name: "MADHURAJ", role: "Sr. Trainer - Digital Marketing", experience: "10 years Experience", image: madhurajImg, bgColor: "bg-[#FFE066]" },
  { name: "SWANAND", role: "Sr. Trainer - Digital Marketing", experience: "9 years Experience", image: swanandImg, bgColor: "bg-[#C8B6E2]" },
  { name: "SUJIT", role: "Executive DM Trainer", experience: "5 Years Experience", image: sujitImg, bgColor: "bg-[#FFE066]" },
  { name: "SATHIYASEELAN", role: "Executive DM Trainer", experience: "4+ Years Experience", image: sathiyaseelanImg, bgColor: "bg-[#A8E6CF]" },
  { name: "MONISHA", role: "Executive DM Trainer", experience: "3+ Years Experience", image: monishaImg, bgColor: "bg-[#FFE066]" },
  { name: "AZARUDHEEN", role: "Sr. Trainer - Digital Marketing", experience: "6+ Years Experience", image: azarudheenImg, bgColor: "bg-[#F0DFB8]" },
  { name: "ASHWIN", role: "Manager - Student Success", experience: "6+ Years of Experience", image: ashwinImg, bgColor: "bg-[#F4A6C0]" },
];

const projectAdvisors: Mentor[] = [
  { name: "SATHIYASEELAN", role: "Executive DM Trainer", experience: "4+ Years Experience", image: advisorSathiyaImg, bgColor: "bg-[#A8E6CF]" },
  { name: "MONISHA", role: "Executive DM Trainer", experience: "3+ Years Experience", image: advisorMonishaImg, bgColor: "bg-[#A8C5E8]" },
  { name: "AZARUDHEEN", role: "Sr. Trainer - Digital Marketing", experience: "6+ Years Experience", image: advisorAzarudheenImg, bgColor: "bg-[#C8B6E2]" },
];

const placementTeam: Mentor[] = [
  { name: "ASHWIN", role: "Manager - Student Success", experience: "6+ Years of Experience", image: placementAshwinImg, bgColor: "bg-[#A8C5E8]" },
  { name: "ASHWINI", role: "Program Manager", experience: "5+ Years of Experience", image: placementAshwiniImg, bgColor: "bg-[#C8A4B8]" },
];

const tabs: { key: TabKey; label: string; data: Mentor[] }[] = [
  { key: "guest", label: "Guest Faculty", data: guestMentors },
  { key: "faculty", label: "DA360 Faculty", data: da360Faculty },
  { key: "advisors", label: "Project Advisors", data: projectAdvisors },
  { key: "placement", label: "Placement / Support", data: placementTeam },
];

const MentorSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("guest");
  const [api, setApi] = useState<CarouselApi>();
  const [progress, setProgress] = useState(0);
  const currentList = tabs.find((t) => t.key === activeTab)!.data;

  useEffect(() => {
    if (!api) return;
    const update = () => setProgress(api.scrollProgress());
    update();
    api.on("scroll", update);
    api.on("reInit", update);
    return () => {
      api.off("scroll", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading italic text-3xl md:text-[48px] font-extrabold leading-tight md:leading-[1.3] text-center text-foreground mb-[40px]">
          Experts Behind Your Career Growth
        </h2>

        {/* Pill Tabs */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-12">
          <div className="bg-foreground rounded-full p-2 md:p-3 flex flex-wrap items-center justify-center gap-1 md:gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`px-4 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-base font-extrabold italic transition-all ${
                  activeTab === t.key
                    ? "bg-primary text-white border-2 border-accent shadow-[0_0_0_2px_hsl(var(--primary))]"
                    : "text-white hover:text-accent"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          key={activeTab}
          setApi={setApi}
          opts={{ align: "start", loop: false }}
          className="max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {currentList.map((m) => (
              <CarouselItem
                key={m.name}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="rounded-2xl border-[2.5px] border-black bg-white shadow-[0_4px_0_0_rgba(0,0,0,0.45)] overflow-hidden flex flex-col h-full">
                  <div className={`${m.bgColor} aspect-[4/5] overflow-hidden flex items-end justify-center`}>
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 md:p-5 border-t-[2.5px] border-black flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-heading italic text-lg md:text-xl font-extrabold text-foreground leading-tight">
                        {m.name}
                      </h3>
                      <a
                        href="#"
                        aria-label={`${m.name} LinkedIn`}
                        className="shrink-0 text-foreground hover:text-primary"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                    <p className="text-sm text-foreground/80 mb-1">{m.role}</p>
                    <p className="text-xs text-muted-foreground font-semibold">{m.experience}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Custom Slider Controls */}
        <div className="mt-8 md:mt-10 flex items-center justify-center gap-3 md:gap-4">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous"
            className="w-10 h-10 rounded-md border border-foreground bg-background flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
          </button>

          <div className="relative h-2 w-48 md:w-72 bg-muted rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full w-1/3 bg-foreground rounded-full transition-transform duration-200 ease-out"
              style={{ transform: `translateX(${progress * 200}%)` }}
            />
          </div>

          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Next"
            className="w-10 h-10 rounded-md border border-primary bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default MentorSection;
