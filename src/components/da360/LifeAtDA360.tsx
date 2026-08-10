import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

interface LifeVideo {
  title: string;
  img: string;
  videoUrl: string;
}

const fallbackSlides: LifeVideo[] = [
  {
    title: "AI IN DIGITAL MARKETING BOOTCAMP",
    img: "/life-at-da360/craetor-min.jpg",
    videoUrl: "https://asset.digitalacademy360.com/creatorstable.mp4",
  },
  {
    title: "STATE OF THE ART FACILITIES",
    img: "/life-at-da360/TOOB-min.jpg",
    videoUrl: "https://asset.digitalacademy360.com/reel-mastery-da360.mp4",
  },
  {
    title: "EVENTS & WORKSHOPS",
    img: "/life-at-da360/Onam-min.jpg",
    videoUrl: "https://asset.digitalacademy360.com/onam-da360.mp4",
  },
  {
    title: "PLACEMENT DRIVE 2025",
    img: "/life-at-da360/placement-drive.png",
    videoUrl: "https://asset.digitalacademy360.com/teachersday.mp4",
  },
];

interface LifeAtDA360Props {
  headerTitle?: string;
  description?: string;
  lifeVideos?: LifeVideo[];
}

const LifeAtDA360 = ({
  headerTitle = "Life @DA360",
  description = "Break Boundaries with Skill-Driven Battles and Innovation Challenges",
  lifeVideos = [],
}: LifeAtDA360Props) => {
  const slides = lifeVideos.length > 0 ? lifeVideos : fallbackSlides;
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 768);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const closeVideo = () => setPlayingIndex(null);

  return (
    <section className="section-spacing overflow-hidden bg-background" aria-labelledby="life-at-da360-title">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="mb-8 text-center md:mb-10">
          <h2
            id="life-at-da360-title"
            className="font-heading text-2xl font-extrabold leading-tight text-foreground md:text-[48px] md:leading-[1.2]"
          >
            {headerTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm capitalize text-foreground/70 md:text-lg">
            {description}
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => document.getElementById("life-at-da360-track")?.scrollBy({ left: -320, behavior: "smooth" })}
            className="absolute -left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border-2 border-foreground bg-background text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground md:flex"
            aria-label="Previous Life at DA360 video"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            id="life-at-da360-track"
            className={`scrollbar-hide grid gap-4 md:gap-6 ${isMobile ? "flex snap-x snap-mandatory overflow-x-auto pb-3" : "grid-cols-2 lg:grid-cols-4"}`}
          >
            {slides.map((slide, index) => {
              const isPlaying = playingIndex === index;

              return (
                <article
                  key={`${slide.title}-${index}`}
                  className={`group relative overflow-hidden rounded-2xl bg-card ${isMobile ? "w-[70vw] max-w-[300px] shrink-0 snap-start" : "w-full"}`}
                >
                  <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-foreground">
                    {isPlaying ? (
                      <video
                        src={slide.videoUrl}
                        className="absolute inset-0 h-full w-full object-cover"
                        controls
                        autoPlay
                        playsInline
                        preload="metadata"
                        onEnded={closeVideo}
                      />
                    ) : (
                      <>
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-foreground/10 transition-colors group-hover:bg-foreground/25" />
                        <button
                          type="button"
                          onClick={() => setPlayingIndex(index)}
                          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/60 text-primary-foreground backdrop-blur-sm transition-transform hover:scale-110"
                          aria-label={`Play ${slide.title}`}
                        >
                          <Play className="ml-1 h-6 w-6" fill="currentColor" />
                        </button>
                      </>
                    )}

                    {isPlaying && (
                      <button
                        type="button"
                        onClick={closeVideo}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary-foreground bg-foreground/80 text-primary-foreground transition-colors hover:bg-foreground"
                        aria-label="Close video"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <span className="sr-only">{slide.title}</span>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => document.getElementById("life-at-da360-track")?.scrollBy({ left: 320, behavior: "smooth" })}
            className="absolute -right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border-2 border-foreground bg-background text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground md:flex"
            aria-label="Next Life at DA360 video"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LifeAtDA360;
