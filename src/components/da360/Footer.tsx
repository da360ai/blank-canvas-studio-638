import { Phone, Calendar, Users, Award } from "lucide-react";
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {/* Left: Accredited By + Contact */}
        <div>
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

        {/* Center: Digital Marketing Courses in India */}
        <div>
          <h4 className="font-heading font-bold text-white mb-4 text-base md:text-lg">Digital Marketing Courses in India</h4>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Digital Marketing Courses In Bangalore</a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-white transition-colors">Digital Marketing Courses In Jayanagar</a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-white transition-colors">Digital Marketing Courses In JP Nagar</a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-white transition-colors">Digital Marketing Courses In Malleshwaram</a>
          </div>
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
          <div className="flex items-center md:justify-end gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
              <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="YouTube">
              <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
