import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import CTAButton from "@/components/da360/CTAButton";

import { submitLead } from "@/lib/leadSubmit";
import { OtpModal } from "@/components/da360/OtpModal";
import skillIndiaLogo from "@/assets/logos/skill-india.png";
import mescLogo from "@/assets/logos/mesc.png";
import nsdcLogo from "@/assets/logos/nsdc.png";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const HeroSection = () => {
  const navigate = useNavigate();
  const [persona, setPersona] = useState<"fresher" | "professional">("fresher");

  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91 IN");
  const [mobile, setMobile] = useState("");
  const [experience, setExperience] = useState("");
  const [course, setCourse] = useState("");
  const [learningCenter, setLearningCenter] = useState("");
  const [learningMode, setLearningMode] = useState("online");
  const [authorized, setAuthorized] = useState(true);

  // UI state
  const [showOtp, setShowOtp] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Called when user clicks Submit → open OTP modal (don't hit CRM yet)
  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!fullName.trim()) return setError("Please enter your full name.");
    if (!EMAIL_RE.test(email.trim())) return setError("Please enter a valid email address.");
    if (!/^\d{7,15}$/.test(mobile.replace(/\D/g, ""))) return setError("Please enter a valid mobile number.");
    if (!experience) return setError("Please select your work experience.");
    if (!course) return setError("Please select a course.");
    if (!learningCenter) return setError("Please select a learning center.");
    if (!learningMode) return setError("Please select a learning mode.");
    if (!authorized) return setError("Please accept the consent to continue.");
    setError(null);

    setShowOtp(true); // open OTP modal
  };

  // Called by OtpModal after OTP is successfully verified
  const handleOtpVerified = async () => {
    setShowOtp(false);
    setSubmitting(true);

    await submitLead({
      source: "hero",
      fullName: fullName.trim(),
      email: email.trim(),
      countryCode,
      mobile,
      experience,
      course,
      learningCenter,
      learningMode,
      authorized,
    });

    setSubmitting(false);
    setSubmitted(true);
    setFullName(""); setEmail(""); setMobile(""); setExperience(""); setCourse(""); setLearningCenter("");
    navigate("/thank-you");
  };

  return (
    <section className="relative min-h-screen bg-background pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left — Copy */}
          <div className="space-y-6 md:space-y-8 lg:pr-8">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Become a Digital Marketing Leader
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg">
              {persona === "fresher"
                ? "The leadership program that combines AI-powered marketing, live campaigns, and hands-on internship experience to launch your career."
                : "Upgrade from execution to leadership. Master AI-driven strategy, lead real campaigns, and accelerate your career growth."}
            </p>

            {/* Trust Strip */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {["6 Month Intensive Program", "6 Months Paid Internship Program"].map((text) => (
                <span
                  key={text}
                  className="bg-white text-foreground font-bold text-xs md:text-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full whitespace-nowrap border border-foreground/20"
                >
                  {text}
                </span>
              ))}
            </div>

             {/* Accreditation logos */}
             <div className="flex flex-wrap items-center justify-start gap-6 md:gap-8">
               <img src={skillIndiaLogo} alt="Skill India" className="h-20 md:h-24 w-auto object-contain" />
               <img src={mescLogo} alt="MESC" className="h-20 md:h-24 w-auto object-contain" />
               <img src={nsdcLogo} alt="NSDC Digital" className="h-20 md:h-24 w-auto object-contain" />
             </div>

             <CTAButton
               noShadow
               formLabel="Explore Course"
               className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-base px-8 py-5 md:py-6 rounded-full"
             >
               Explore Course
             </CTAButton>
          </div>

          {/* Right — Lead Form */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-card rounded-2xl border-2 border-foreground transform rotate-2 translate-x-1.5 translate-y-1.5" />
            <div className="relative bg-card rounded-2xl p-6 md:p-8 border-2 border-foreground">
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-5 md:mb-6">
                Claim Your Scholarship
              </h3>

              {submitted ? (
                <div className="py-10 text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-heading text-lg font-bold text-foreground mb-1">Thank You!</h4>
                  <p className="text-muted-foreground text-sm">
                    Your details have been submitted successfully. Our counsellor will reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form className="space-y-4 md:space-y-5" onSubmit={handleHeroSubmit}>
                  <Input
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name*"
                    className="bg-background h-12 md:h-13 rounded-lg border-border text-base px-4"
                  />
                  <Input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email*"
                    className="bg-background h-12 md:h-13 rounded-lg border-border text-base px-4"
                  />

                  {/* Phone with country code */}
                  <div className="flex rounded-lg border border-border overflow-hidden bg-background">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="h-12 md:h-13 w-[90px] md:w-[110px] bg-background px-2 md:px-3 py-2 text-sm text-foreground border-r border-border outline-none"
                    >
                      <option>+91 IN</option>
                      <option>+1 US</option>
                      <option>+44 UK</option>
                      <option>+971 UAE</option>
                    </select>
                    <input
                      required
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Mobile Number*"
                      className="flex-1 h-12 md:h-13 bg-background px-3 md:px-4 text-base outline-none placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Work Experience */}
                  <select
                    required
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="flex h-12 md:h-13 w-full rounded-lg border border-border bg-background px-4 py-2 text-base text-muted-foreground"
                  >
                    <option value="" disabled>Work Experience</option>
                    <option className="text-foreground" value="Fresher">Fresher</option>
                    <option className="text-foreground" value="0-1 Years">0-1 Years</option>
                    <option className="text-foreground" value="1-3 Years">1-3 Years</option>
                    <option className="text-foreground" value="3-5 Years">3-5 Years</option>
                    <option className="text-foreground" value="5+ Years">5+ Years</option>
                  </select>

                  {/* Course */}
                  <select
                    required
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="flex h-12 md:h-13 w-full rounded-lg border border-border bg-background px-4 py-2 text-base text-muted-foreground"
                  >
                    <option value="" disabled>Select Course</option>
                    <option className="text-foreground" value="DML">DML 12 months</option>
                    <option className="text-foreground" value="PGCP">PGCP 6 months</option>
                    <option className="text-foreground" value="SDP">SDP 3 months</option>
                  </select>

                  {/* Learning Center */}
                  <select
                    required
                    value={learningCenter}
                    onChange={(e) => setLearningCenter(e.target.value)}
                    className="flex h-12 md:h-13 w-full rounded-lg border border-border bg-background px-4 py-2 text-base text-muted-foreground"
                  >
                     <option value="" disabled>Learning Center</option>
                     <option className="text-foreground" value="JP Nagar">JP Nagar</option>
                     <option className="text-foreground" value="Malleswaram">Malleswaram</option>
                  </select>

                  {/* Learning Mode */}
                  <div className="flex items-center gap-4 md:gap-6 py-1">
                    <span className="text-sm font-medium text-foreground">Learning Mode:</span>
                    <RadioGroup value={learningMode} onValueChange={setLearningMode} className="flex gap-4 md:gap-6">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="online" id="online" className="h-5 w-5" />
                        <Label htmlFor="online" className="text-sm text-foreground cursor-pointer">Online</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="classroom" id="classroom" className="h-5 w-5" />
                        <Label htmlFor="classroom" className="text-sm text-foreground cursor-pointer">Classroom</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Authorization checkbox */}
                  <div className="flex items-start gap-2.5">
                    <Checkbox
                      id="authorize"
                      checked={authorized}
                      onCheckedChange={(v) => setAuthorized(!!v)}
                      className="mt-0.5 h-5 w-5 rounded"
                    />
                    <Label htmlFor="authorize" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                      I authorize Digital Academy 360 and its associates to contact me via Call, Email, WhatsApp & SMS. I accept to{" "}
                      <span className="font-bold text-foreground">Privacy Policy</span> &{" "}
                      <span className="font-bold text-foreground">Term of Use</span>.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting || showOtp}
                    className="w-full bg-foreground hover:bg-primary hover:text-primary-foreground text-background font-heading font-bold text-base py-5 md:py-6 rounded-full transition-colors duration-200"
                  >
                    {submitting ? "Submitting…" : showOtp ? "Sending OTP…" : "Submit"}
                  </Button>
                  {error && <p className="text-sm font-medium text-destructive">{error}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* OTP Modal — rendered as a portal over the whole page */}
      {showOtp && (
        <OtpModal
          mobile={mobile}
          fullName={fullName}
          onVerified={handleOtpVerified}
          onClose={() => setShowOtp(false)}
        />
      )}
    </section>
  );
};

export default HeroSection;