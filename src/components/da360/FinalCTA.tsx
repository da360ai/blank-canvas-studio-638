import CTAButton from "@/components/da360/CTAButton";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section className="section-spacing bg-dark">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-2xl md:text-4xl lg:text-[48px] font-extrabold leading-tight md:leading-[1.3] text-dark-foreground mb-3 md:mb-4">
        Your Next Career Move <br />
        Starts Here
      </h2>
      <p className="text-dark-foreground/60 mb-[40px] max-w-lg mx-auto text-base md:text-lg">
        Don't just learn digital marketing. Lead it. Join 1,00,000+ alumni who transformed their careers.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
        <CTAButton noShadow className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5">
          Book Free Class <ArrowRight className="h-5 w-5 ml-1 inline" />
        </CTAButton>
        <CTAButton variant="outline" noShadow className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 border-white text-white bg-foreground hover:bg-foreground/90">
          Apply Now
        </CTAButton>
      </div>
    </div>
  </section>
);

export default FinalCTA;
