const mediaLogos = [
  { name: "The Times of India", src: "/media/times-of-india.svg?v=5" },
  { name: "YourStory", src: "/media/yourstory.svg?v=5" },
  { name: "Hindustan Times", src: "/media/hindustan-times.svg?v=5" },
  { name: "The Economic Times", src: "/media/economic-times.svg?v=5" },
];

const SpotlightSection = () => (
  <section className="section-spacing bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-2xl md:text-[48px] font-extrabold leading-tight md:leading-[1.3] text-center text-foreground italic mb-3">
        DA360 In Spotlight
      </h2>
      <p className="text-center text-muted-foreground text-sm md:text-base mb-[40px]">
        Media, Awards & Achievements
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 md:gap-x-10 md:gap-y-8 max-w-6xl mx-auto">
        {mediaLogos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center px-4 py-2 md:px-5 md:py-3 h-[96px] md:h-[120px]"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-[76px] md:max-h-[86px] max-w-[220px] md:max-w-[210px] w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpotlightSection;
