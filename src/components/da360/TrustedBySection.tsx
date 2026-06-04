import { Star } from "lucide-react";
import skillIndiaLogo from "@/assets/logos/skill-india.png";
import mescLogo from "@/assets/logos/mesc.png";

const reviewCards = [
  {
    type: "logos" as const,
    logos: [
      { src: skillIndiaLogo, alt: "Skill India" },
      { src: mescLogo, alt: "Media & Entertainment Skills Council" },
    ],
  },
  {
    type: "rating" as const,
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    alt: "Facebook",
    rating: "4.8",
    reviews: "143+ reviews",
  },
  {
    type: "rating" as const,
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    alt: "Google",
    rating: "4.7",
    reviews: "750+ reviews",
  },
  {
    type: "rating" as const,
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/78/Trustpilot_Logo_%282022%29.svg",
    alt: "Trustpilot",
    rating: "4.5",
    reviews: "30+ reviews",
    iconIsText: true,
  },
];

const TrustedBySection = () => (
  <section className="section-spacing bg-[#F5F5F5]">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-2xl md:text-[48px] font-extrabold leading-tight md:leading-[1.3] text-black mb-4 md:mb-6">
        Trusted by Learners From<br className="hidden md:block" /> 33+ Countries
      </h2>
      <p className="text-black/70 font-body text-sm md:text-lg max-w-2xl mx-auto mb-[40px] leading-relaxed">
        Not only learn but also earn a 6-month paid Internship after 6 months of Learning.
        <br className="hidden md:block" />
        Join the 50,000+ community of digital marketers who trusted us for Leadership in
        digital marketing and AI Program.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
        {reviewCards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 flex items-center justify-center gap-3 md:gap-4 min-h-[80px] md:min-h-[100px] overflow-hidden"
          >
            {card.type === "logos" ? (
              <div className="flex items-center gap-4 md:gap-6">
                {card.logos.map((logo) => (
                  <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-10 md:h-14 object-contain" />
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-2 md:gap-3 min-w-0">
                <img
                  src={card.icon}
                  alt={card.alt}
                  className={card.iconIsText ? "h-5 md:h-6 w-auto object-contain flex-shrink-0 max-w-[60px] md:max-w-[80px]" : "h-8 w-8 md:h-10 md:w-10 object-contain flex-shrink-0"}
                />
                <div className="text-left min-w-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl md:text-2xl font-extrabold text-black">{card.rating}</span>
                    <span className="text-black text-xs align-super">*</span>
                    <Star className="h-3.5 w-3.5 md:h-4 md:w-4 text-yellow-400 fill-yellow-400 ml-1 flex-shrink-0" />
                  </div>
                  <span className="text-[10px] md:text-xs text-black/60 truncate block">{card.reviews}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBySection;
