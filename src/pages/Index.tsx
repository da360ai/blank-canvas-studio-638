import { useState } from "react";
import TopBanner from "@/components/da360/TopBanner";
import Navbar from "@/components/da360/Navbar";
import WhatsAppButton from "@/components/da360/WhatsAppButton";
import VideoPopup from "@/components/da360/VideoPopup";
import ScholarshipBar from "@/components/da360/ScholarshipBar";
import HeroSection from "@/components/da360/HeroSection";
import SocialProofStrip from "@/components/da360/SocialProofStrip";
import AlumniCompaniesSection from "@/components/da360/AlumniCompaniesSection";
import SpotlightSection from "@/components/da360/SpotlightSection";
import PainPointSection from "@/components/da360/PainPointSection";
import WhoIsThisFor from "@/components/da360/WhoIsThisFor";
import SuccessStoriesSection from "@/components/da360/SuccessStoriesSection";
import TestimonialsSection from "@/components/da360/TestimonialsSection";
import ChoosePathSection from "@/components/da360/ChoosePathSection";


import ProjectsSection from "@/components/da360/ProjectsSection";
import ValuePillars from "@/components/da360/ValuePillars";
import MentorSection from "@/components/da360/MentorSection";
import ComparisonSection from "@/components/da360/ComparisonSection";
import CurriculumSection from "@/components/da360/CurriculumSection";

import TrustedBySection from "@/components/da360/TrustedBySection";
import RiskReversal from "@/components/da360/RiskReversal";

import JourneySection from "@/components/da360/JourneySection";
import FinalCTA from "@/components/da360/FinalCTA";
import BookDemoSection from "@/components/da360/BookDemoSection";
import Footer from "@/components/da360/Footer";

/*
 * CRO-Optimized Section Order (AIDA Framework)
 * ─────────────────────────────────────────────
 * ATTENTION:  Hero → Social Proof → Logos → Media Spotlight
 * INTEREST:   Pain Points → Who Is This For
 * DESIRE:     Success Stories → Testimonials → Programs → Highlights →
 *             Curriculum → Roadmap → Advantages → Mentors → Comparison → Outcomes
 * TRUST:      Trusted By → Risk Reversal
 * ACTION:     Urgency → Journey → Final CTA
 */

const Index = () => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const topOffset = bannerVisible ? "36px" : "0px";

  return (
    <div className="min-h-screen overflow-x-hidden">
      <TopBanner onClose={() => setBannerVisible(false)} />
      <div style={{ paddingTop: topOffset }}>
        <Navbar topOffset={topOffset} />
        <WhatsAppButton />
        <VideoPopup />
        <ScholarshipBar />

        {/* ── ATTENTION ── */}
        <HeroSection />
        <SocialProofStrip />
        <AlumniCompaniesSection />

        {/* ── INTEREST ── */}
        <PainPointSection />
        <WhoIsThisFor />
        <SpotlightSection />

        {/* ── DESIRE ── */}
        <SuccessStoriesSection />
        <TestimonialsSection />
        <ChoosePathSection />
        
        
        <ProjectsSection />
        <ValuePillars />
        <BookDemoSection />
        <MentorSection />
        
        <ComparisonSection />
        

        {/* ── TRUST ── */}
        <TrustedBySection />
        <RiskReversal />

        {/* ── ACTION ── */}
        <JourneySection />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
