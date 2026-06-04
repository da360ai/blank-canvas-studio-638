const mediaLogos = [
  { name: "The Times of India", src: "/media/times-of-india.svg?v=4" },
  { name: "YourStory", src: "/media/yourstory.svg?v=4" },
  { name: "Hindustan Times", src: "/media/hindustan-times.svg?v=4" },
  { name: "The Economic Times", src: "/media/economic-times.svg?v=4" },
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-5xl mx-auto">
        {mediaLogos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center p-2 md:p-3 h-[120px] md:h-[130px]"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-[100px] md:max-h-[110px] max-w-full md:max-w-[260px] w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpotlightSection;
