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
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Top: 4 aligned columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start pb-10 border-b border-white/10">
        {/* Column 1: Brand */}
        <div>
          <div className="flex items-center gap-3 md:gap-4 mb-5">
            <img
              src={da360Logo}
              alt="Digital Academy 360"
              className="h-11 md:h-13 object-contain -ml-1"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <div className="border-l border-white/20 pl-3 md:pl-4">
              <p className="text-sm md:text-base font-heading font-bold text-white leading-tight">Malleshwaram</p>
              <p className="text-xs text-white/50 leading-tight">a unit of DA360</p>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed max-w-xs">
            Bangalore's trusted digital marketing training institute, accredited by Skill India, MESC & NSDC.
          </p>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h4 className="font-heading font-bold text-white mb-4 text-base">Contact Us</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a href="tel:+917353515515" className="hover:text-white transition-colors">+91 7353 515 515</a>
            </li>
            <li>
              <a href="mailto:info@da360.ai" className="hover:text-white transition-colors">info@da360.ai</a>
            </li>
            <li>JP Nagar, Bangalore</li>
            <li>Malleswaram, Bangalore</li>
          </ul>
        </div>

        {/* Column 3: Programs */}
        <div>
          <h4 className="font-heading font-bold text-white mb-4 text-base">Programs</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#choose-path" className="hover:text-white transition-colors">Post Graduate Certificate Program</a></li>
            <li><a href="#choose-path" className="hover:text-white transition-colors">Diploma in Digital Marketing</a></li>
            <li><a href="#choose-path" className="hover:text-white transition-colors">Skill Diploma Program</a></li>
            <li><a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a></li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div>
          <h4 className="font-heading font-bold text-white mb-4 text-base">Legal</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Term of Use</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom: Accreditation + Copyright */}
      <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <h4 className="font-heading font-bold text-white text-sm shrink-0">Accredited by</h4>
          <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 w-fit">
            <img src="/accreditation/skill-india.svg" alt="Skill India" className="h-8 md:h-10 object-contain" />
            <img src="/accreditation/media.svg" alt="Media Skill Council" className="h-8 md:h-10 object-contain" />
            <img src="/logos/nsdc.png" alt="NSDC Digital" className="h-8 md:h-10 object-contain" />
          </div>
        </div>
        <p className="text-xs text-white/40">
          Copyright © {new Date().getFullYear()} Digital Academy 360. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
