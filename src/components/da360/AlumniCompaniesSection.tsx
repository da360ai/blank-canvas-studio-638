const row1Logos = [
  { name: "Dentsu", src: "/brands/brand_1.jpg" },
  { name: "Valueleaf", src: "/brands/brand_2.jpg" },
  { name: "Jungle Square", src: "/brands/brand_3.jpg" },
  { name: "Google", src: "/brands/brand_4.jpg" },
  { name: "TCS", src: "/brands/brand_5.jpg" },
  { name: "KTM", src: "/brands/brand_6.jpg" },
  { name: "Zoomcar", src: "/brands/brand_7.jpg" },
  { name: "Philips", src: "/brands/brand_8.jpg" },
  { name: "IBM", src: "/brands/brand_9.jpg" },
  { name: "Replicon", src: "/brands/brand_10.jpg" },
  { name: "AXA", src: "/brands/brand_11.jpg" },
  { name: "Brand 12", src: "/brands/brand_12.jpg" },
  { name: "Continental", src: "/brands/brand_13.jpg" },
  { name: "Simplilearn", src: "/brands/brand_14.jpg" },
  { name: "Bosch", src: "/brands/brand_15.jpg" },
  { name: "Oracle", src: "/brands/brand_16.jpg" },
  { name: "Unacademy", src: "/brands/brand_17.jpg" },
  { name: "AT&T", src: "/brands/brand_18.jpg" },
];

const row2Logos = [
  { name: "Brand 19", src: "/brands/brand_19.jpg" },
  { name: "Brand 20", src: "/brands/brand_20.jpg" },
  { name: "Brand 21", src: "/brands/brand_21.jpg" },
  { name: "Brand 22", src: "/brands/brand_22.jpg" },
  { name: "Brand 23", src: "/brands/brand_23.jpg" },
  { name: "Brand 24", src: "/brands/brand_24.jpg" },
  { name: "Brand 25", src: "/brands/brand_25.jpg" },
  { name: "Brand 26", src: "/brands/brand_26.jpg" },
  { name: "Brand 27", src: "/brands/brand_27.jpg" },
  { name: "Brand 28", src: "/brands/brand_28.jpg" },
  { name: "Brand 29", src: "/brands/brand_29.jpg" },
  { name: "Brand 30", src: "/brands/brand_30.jpg" },
  { name: "Brand 31", src: "/brands/brand_31.jpg" },
  { name: "Brand 32", src: "/brands/brand_32.jpg" },
  { name: "Brand 33", src: "/brands/brand_33.jpg" },
  { name: "Brand 34", src: "/brands/brand_34.jpg" },
  { name: "Brand 35", src: "/brands/brand_35.jpg" },
  { name: "Brand 36", src: "/brands/brand_36.jpg" },
];

const MarqueeRow = ({
  logos,
  direction = "left",
  size = "normal",
  speed = "normal",
}: {
  logos: typeof row1Logos;
  direction?: "left" | "right";
  size?: "small" | "normal";
  speed?: "fast" | "normal";
}) => {
  const duplicated = [...logos, ...logos, ...logos];
  const h = size === "small" ? "h-12 w-[100px] md:h-16 md:w-[140px]" : "h-24 w-[180px] md:h-36 md:w-[280px]";
  const imgClass = size === "small" ? "max-h-[40px] max-w-[90px] md:max-h-[56px] md:max-w-[130px]" : "max-h-[80px] max-w-[160px] md:max-h-[130px] md:max-w-[260px]";
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const duration = speed === "fast" ? "30s" : "70s";

  return (
    <div className="overflow-hidden relative py-1">
      <div
        className={`flex items-center gap-2 md:gap-3 ${animClass}`}
        style={{ width: "max-content", animationDuration: duration }}
      >
        {duplicated.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className={`flex-shrink-0 flex items-center justify-center ${h}`}>
            <img
              src={logo.src}
              alt={logo.name}
              className={`${imgClass} object-contain`}
              loading="eager"
              decoding="async"
              fetchPriority="low"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const AlumniCompaniesSection = () => (
  <section className="section-spacing bg-[#F5F5F5]">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-2xl md:text-[48px] font-extrabold text-black text-center mb-4 italic leading-snug">
        Alumni At 2,000+ Companies Worldwide
      </h2>
    </div>
    <div className="mt-6 md:mt-8 space-y-0">
      <MarqueeRow logos={row1Logos} direction="left" size="small" speed="fast" />
      <MarqueeRow logos={row2Logos} direction="right" size="normal" speed="normal" />
    </div>
  </section>
);

export default AlumniCompaniesSection;
