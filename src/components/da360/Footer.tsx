import { Phone, Calendar, Users, Award, BookOpen, Briefcase } from "lucide-react";
import da360Logo from "@/assets/da360-logo.png";
import InlineLeadForm from "@/components/da360/InlineLeadForm";

const Footer = () => (
  <footer id="site-footer" className="bg-[#1a1a1a] text-white">
    {/* Book Free Demo */}
    <div className="bg-[#F5F5F5] py-[60px] px-4">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="space-y-5">
          <span className="inline-block bg-primary/10 text-primary font-bold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full border border-primary/30">
            Live Demo Session
          </span>
          <h2 className="font-heading italic text-2xl md:text-[48px] font-extrabold leading-tight md:leading-[1.3] text-foreground">
            Book Free Demo
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-lg">
            Sit in on a live class, meet our mentors, and see exactly how DA360 transforms careers — before you commit.
          </p>
          <ul className="space-y-3 pt-1">
            {[
              { icon: Calendar, text: "60-minute interactive live session" },
              { icon: Users, text: "Meet industry mentors & current learners" },
              { icon: Award, text: "Walk away with a personalized career roadmap" },
              { icon: BookOpen, text: "Explore the curriculum & hands-on projects" },
              { icon: Briefcase, text: "Get insights on placements & hiring partners" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-foreground font-semibold text-sm md:text-base">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <InlineLeadForm
            heading="Book Free Demo"
            subheading="Reserve your seat for the next live session."
            submitLabel="Book My Seat"
          />
        </div>
      </div>
    </div>

    {/* Main Footer */}
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
        {/* Left: Logo + Accredited By + Contact */}
        <div>
          <img
            src={da360Logo}
            alt="Digital Academy 360"
            className="h-12 md:h-14 object-contain mb-6 md:mb-8 -ml-1"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <h4 className="font-heading font-bold text-white mb-4 md:mb-5 text-base md:text-lg">Accredited by</h4>
          <div className="inline-flex items-center gap-4 mb-6 md:mb-8 bg-white rounded-lg px-4 py-3">
            <img src="/accreditation/skill-india.svg" alt="Skill India" className="h-10 md:h-12 object-contain" />
            <img src="/accreditation/media.svg" alt="Media Skill Council" className="h-10 md:h-12 object-contain" />
            <img src="/logos/nsdc.png" alt="NSDC Digital" className="h-10 md:h-12 object-contain" />
          </div>
          <h4 className="font-heading font-bold text-white mb-3 text-base md:text-lg">Contact Us for any query</h4>
          <p className="text-white/60 text-sm mb-1">+91 7353 515 515</p>
          <p className="text-white/60 text-sm">info@da360.ai</p>
        </div>

        {/* Right: Copyright + Legal + Socials */}
        <div className="md:text-right">
          <p className="text-xs text-white/40 mb-4">
            Copyright © {new Date().getFullYear()} Digital Academy 360. All rights reserved.
          </p>
          <div className="flex flex-wrap md:justify-end gap-3 md:gap-4 text-xs text-white/40 mb-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Term of Use</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
