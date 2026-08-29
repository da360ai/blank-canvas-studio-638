import { Phone } from "lucide-react";
import CTAButton from "@/components/da360/CTAButton";
import da360Logo from "@/assets/da360-logo.png";

const Navbar = ({ topOffset = "0px" }: { topOffset?: string }) => {
  return (
    <nav className="fixed left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" style={{ top: topOffset }}>
      <div className="container mx-auto px-4 md:px-12 lg:px-16 py-2.5 md:py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <img src={da360Logo} alt="Digital Academy 360" className="h-10 md:h-14 object-contain" />
          <span className="hidden sm:inline-block text-xs md:text-sm font-heading font-bold text-foreground/80 border-l border-border pl-3 md:pl-4">
            Malleshwaram
          </span>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a href="tel:+919035354441" className="hidden md:flex items-center gap-1.5 text-sm text-foreground font-medium hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            +91 90353 54441
          </a>
          <a href="tel:+919035354441" className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-border">
            <Phone className="h-4 w-4 text-foreground" />
          </a>
          <CTAButton className="px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm">
            Download Brochure
          </CTAButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
