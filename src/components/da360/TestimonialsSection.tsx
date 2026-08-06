import { useState, useRef } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const THUMB_BASE = "/testimonials";
const testimonials = [
  { name: "Ankita", role: "Digital Marketing Executive", company: "Leading Agency", video: "/videos/ankita.mp4", thumb: `${THUMB_BASE}/ankita.jpg` },
  { name: "Madhu", role: "SEO Specialist", company: "Top MNC", video: "/videos/madhu.mp4", thumb: `${THUMB_BASE}/madhu.jpg` },
  { name: "Nivedh", role: "Performance Marketer", company: "E-Commerce Brand", video: "/videos/nivedh.mp4", thumb: `${THUMB_BASE}/nivedh.jpg` },
  { name: "Snehal", role: "Content Strategist", company: "Digital Agency", video: "/videos/snehal.mp4", thumb: `${THUMB_BASE}/snehal.jpg` },
  { name: "Vinayak", role: "Growth Marketing Lead", company: "SaaS Startup", video: "/videos/vinayak.mp4", thumb: `${THUMB_BASE}/vinayak.jpg` },
  { name: "Kesar", role: "Social Media Manager", company: "Media Company", video: "/videos/kesar.mp4", thumb: `${THUMB_BASE}/kesar.jpg` },
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <section className="section-spacing relative overflow-hidden bg-background">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-[40px]">
          <h2 className="font-heading text-2xl md:text-[48px] font-extrabold leading-tight md:leading-[1.3] text-foreground mb-3 md:mb-4">
            Hear It From Our Learners
          </h2>
          <p className="text-foreground/70 text-sm md:text-lg max-w-2xl mx-auto">
            Real stories from real people who transformed their careers with DA360
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-lg border-2 border-foreground items-center justify-center bg-white hover:bg-foreground hover:text-white transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-2"
            style={{ scrollbarWidth: "none" }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="flex-shrink-0 w-[240px] md:w-[320px] snap-start">
                <div className="flex aspect-[9/16] flex-col rounded-2xl overflow-hidden border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group">
                  {/* Portrait thumbnail keeps the full testimonial card at a stable 9:16 ratio */}
                  <div className="relative min-h-0 flex-1 w-full overflow-hidden">
                    <img
                      src={t.thumb}
                      alt={`${t.name} - ${t.role}`}
                      className="block h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Name card stays in the document flow so the portrait card cannot crop its content */}
                  <div className="flex min-h-[76px] shrink-0 items-center justify-between gap-3 bg-card px-3 py-2.5 md:px-4 md:py-3">
                    <div className="min-w-0">
                      <h3 className="font-heading font-extrabold italic text-foreground text-base md:text-lg uppercase leading-tight truncate">
                        {t.name}
                      </h3>
                      <p className="text-foreground/70 text-xs md:text-sm truncate">{t.role}</p>
                    </div>
                    {/* Play button */}
                    <button
                      onClick={() => setActiveVideo(t.video)}
                      className="shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-foreground bg-card flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-primary-foreground transition-all group-hover:scale-105"
                      aria-label={`Play ${t.name} testimonial`}
                    >
                      <Play className="h-4 w-4" fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-lg border-2 border-foreground items-center justify-center bg-white hover:bg-foreground hover:text-white transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile scroll hint */}
        <div className="flex md:hidden justify-center gap-3 mt-4">
          <button onClick={() => scroll("left")} className="w-9 h-9 rounded-lg border-2 border-foreground flex items-center justify-center bg-white">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => scroll("right")} className="w-9 h-9 rounded-lg border-2 border-foreground flex items-center justify-center bg-white">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo}
              className="w-full h-full object-contain bg-black"
              controls
              autoPlay
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
