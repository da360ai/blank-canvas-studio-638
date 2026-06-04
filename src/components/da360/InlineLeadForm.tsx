import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { submitLead } from "@/lib/leadSubmit";

interface InlineLeadFormProps {
  heading: string;
  subheading?: string;
  submitLabel?: string;
  variant?: "light" | "dark";
  className?: string;
  source?: string;
}

const InlineLeadForm = ({
  heading,
  subheading,
  submitLabel = "Submit",
  variant = "light",
  className,
  source,
}: InlineLeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91 IN");
  const [mobile, setMobile] = useState("");
  const [experience, setExperience] = useState("");
  const [course, setCourse] = useState("");
  const [learningMode, setLearningMode] = useState("online");
  const [authorized, setAuthorized] = useState(true);
  const isDark = variant === "dark";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    await submitLead({
      source: source ?? `inline:${heading}`,
      fullName,
      email,
      countryCode,
      mobile,
      experience,
      course,
      learningMode,
      authorized,
    });
    setSubmitting(false);
    setSubmitted(true);
    setFullName("");
    setEmail("");
    setMobile("");
    setExperience("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div
      className={cn(
        "relative max-w-md w-full mx-auto",
        className
      )}
    >
      <div className="absolute inset-0 bg-card rounded-2xl border-2 border-foreground transform rotate-2 translate-x-1.5 translate-y-1.5" />
      <div className="relative bg-card rounded-2xl p-6 md:p-8 border-2 border-foreground">
        <h3 className="font-heading text-xl md:text-2xl font-extrabold text-foreground mb-1">
          {heading}
        </h3>
        {subheading && (
          <p className="text-muted-foreground text-sm mb-5">{subheading}</p>
        )}

        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
            <h4 className="font-heading text-lg font-bold text-foreground mb-1">Thank You!</h4>
            <p className="text-muted-foreground text-sm">Our counsellor will reach out within 24 hours.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name*" className="bg-background h-12 rounded-lg border-border text-base px-4" />
            <Input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email*" className="bg-background h-12 rounded-lg border-border text-base px-4" />

            <div className="flex rounded-lg border border-border overflow-hidden bg-background">
              <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className="h-12 w-[90px] bg-background px-2 text-sm text-foreground border-r border-border outline-none">
                <option>+91 IN</option>
                <option>+1 US</option>
                <option>+44 UK</option>
                <option>+971 UAE</option>
              </select>
              <input required type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile Number*" className="flex-1 h-12 bg-background px-3 text-base outline-none placeholder:text-muted-foreground" />
            </div>

            <select required value={experience} onChange={(e) => setExperience(e.target.value)} className="flex h-12 w-full rounded-lg border border-border bg-background px-4 text-base text-muted-foreground">
              <option value="" disabled>Work Experience</option>
              <option className="text-foreground" value="Fresher">Fresher</option>
              <option className="text-foreground" value="0-1 Years">0-1 Years</option>
              <option className="text-foreground" value="1-3 Years">1-3 Years</option>
              <option className="text-foreground" value="3-5 Years">3-5 Years</option>
              <option className="text-foreground" value="5+ Years">5+ Years</option>
            </select>

            <div className="flex items-center gap-4 py-1">
              <span className="text-sm font-medium text-foreground">Mode:</span>
              <RadioGroup value={learningMode} onValueChange={setLearningMode} className="flex gap-4">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="online" id={`${heading}-online`} className="h-5 w-5" />
                  <Label htmlFor={`${heading}-online`} className="text-sm text-foreground cursor-pointer">Online</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="classroom" id={`${heading}-classroom`} className="h-5 w-5" />
                  <Label htmlFor={`${heading}-classroom`} className="text-sm text-foreground cursor-pointer">Classroom</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-start gap-2.5">
              <Checkbox id={`${heading}-auth`} checked={authorized} onCheckedChange={(v) => setAuthorized(!!v)} className="mt-0.5 h-5 w-5 rounded" />
              <Label htmlFor={`${heading}-auth`} className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                I authorize Digital Academy 360 to contact me via Call, Email, WhatsApp & SMS.
              </Label>
            </div>

            <Button type="submit" disabled={submitting} className="w-full bg-foreground hover:bg-primary hover:text-primary-foreground text-background font-heading font-bold text-base py-5 rounded-full transition-colors duration-200">
              {submitting ? "Submitting..." : submitLabel}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default InlineLeadForm;
