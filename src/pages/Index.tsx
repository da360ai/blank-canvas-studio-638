import { useState, lazy, Suspense } from "react";
import TopBanner from "@/components/da360/TopBanner";
import Navbar from "@/components/da360/Navbar";
import HeroSection from "@/components/da360/HeroSection";

// Below-the-fold sections are lazy-loaded to keep initial bundle small
const WhatsAppButton = lazy(() => import("@/components/da360/WhatsAppButton"));
const VideoPopup = lazy(() => import("@/components/da360/VideoPopup"));
const SocialProofStrip = lazy(() => import("@/components/da360/SocialProofStrip"));
const AlumniCompaniesSection = lazy(() => import("@/components/da360/AlumniCompaniesSection"));


const SuccessStoriesSection = lazy(() => import("@/components/da360/SuccessStoriesSection"));
const TestimonialsSection = lazy(() => import("@/components/da360/TestimonialsSection"));
const LifeAtDA360 = lazy(() => import("@/components/da360/LifeAtDA360"));
const ChoosePathSection = lazy(() => import("@/components/da360/ChoosePathSection"));
const ProjectsSection = lazy(() => import("@/components/da360/ProjectsSection"));
const ValuePillars = lazy(() => import("@/components/da360/ValuePillars"));
const MentorSection = lazy(() => import("@/components/da360/MentorSection"));
const ComparisonSection = lazy(() => import("@/components/da360/ComparisonSection"));
const CurriculumSection = lazy(() => import("@/components/da360/CurriculumSection"));
const TrustedBySection = lazy(() => import("@/components/da360/TrustedBySection"));
const RiskReversal = lazy(() => import("@/components/da360/RiskReversal"));
const JourneySection = lazy(() => import("@/components/da360/JourneySection"));
const FinalCTA = lazy(() => import("@/components/da360/FinalCTA"));
const BookDemoSection = lazy(() => import("@/components/da360/BookDemoSection"));
const Footer = lazy(() => import("@/components/da360/Footer"));

/*
 * CRO-Optimized Section Order (AIDA Framework)
 * ─────────────────────────────────────────────
 * ATTENTION:  Hero → Social Proof → Logos → Media Spotlight
 * INTEREST:   Who Is This For
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

        {/* ── ATTENTION ── */}
        <HeroSection />

        <Suspense fallback={null}>
          <WhatsAppButton />
          <VideoPopup />
          <SocialProofStrip />
          <AlumniCompaniesSection />

            {/* ── DESIRE ── */}
            <SuccessStoriesSection />
            <ChoosePathSection />
            <CurriculumSection />
            <ProjectsSection />
            <TestimonialsSection />
            <LifeAtDA360 />
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
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
