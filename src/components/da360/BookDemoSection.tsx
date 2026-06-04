import { Calendar, Users, Award } from "lucide-react";
import InlineLeadForm from "@/components/da360/InlineLeadForm";

const BookDemoSection = () => (
  <section className="section-spacing bg-[#F5F5F5] py-[60px]">
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — copy */}
        <div className="space-y-6">
          <span className="inline-block bg-primary/10 text-primary font-bold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full border border-primary/30">
            Live Demo Session
          </span>
          <h2 className="font-heading text-2xl md:text-[48px] font-extrabold leading-tight md:leading-[1.3] text-foreground">
            Book Free Demo
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-lg">
            Sit in on a live class, meet our mentors, and see exactly how DA360 transforms careers — before you commit.
          </p>

          <ul className="space-y-3">
            {[
              { icon: Calendar, text: "60-minute interactive live session" },
              { icon: Users, text: "Meet industry mentors & current learners" },
              { icon: Award, text: "Walk away with a personalized career roadmap" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground border-2 border-foreground flex items-center justify-center">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-foreground font-medium pt-1.5">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <div>
          <InlineLeadForm
            heading="Book Free Demo"
            subheading="Reserve your seat for the next live session."
            submitLabel="Book My Demo"
          />
        </div>
      </div>
    </div>
  </section>
);

export default BookDemoSection;
