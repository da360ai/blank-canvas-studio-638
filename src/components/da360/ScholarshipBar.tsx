import { useEffect, useState } from "react";
import { Clock, GraduationCap } from "lucide-react";
import CTAButton from "@/components/da360/CTAButton";
import { useBatchCountdown } from "@/hooks/use-batch-countdown";

/**
 * Sticky bottom bar that appears when the user scrolls into the
 * "Sound Familiar" (PainPointSection) and hides once the footer is in view.
 * Observes #pain-point-section (start) and #site-footer (end).
 */
const ScholarshipBar = () => {
  const [visible, setVisible] = useState(false);
  const { days, hours, mins, secs } = useBatchCountdown();

  useEffect(() => {
    const start = document.getElementById("pain-point-section");
    const end = document.getElementById("site-footer");
    if (!start || !end) return;

    let passedStart = false;
    let reachedEnd = false;
    const update = () => setVisible(passedStart && !reachedEnd);

    const startObs = new IntersectionObserver(
      ([entry]) => {
        // Show once the user has scrolled to or past the top of pain-point section
        if (entry.boundingClientRect.top <= 0 || entry.isIntersecting) {
          passedStart = true;
        } else {
          passedStart = false;
        }
        update();
      },
      { threshold: 0, rootMargin: "0px 0px -90% 0px" }
    );

    const endObs = new IntersectionObserver(
      ([entry]) => {
        reachedEnd = entry.isIntersecting;
        update();
      },
      { threshold: 0 }
    );

    startObs.observe(start);
    endObs.observe(end);
    return () => {
      startObs.disconnect();
      endObs.disconnect();
    };
  }, []);

  if (!visible) return null;

  const cells = [
    { val: days, label: "D" },
    { val: hours, label: "H" },
    { val: mins, label: "M" },
    { val: secs, label: "S" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-foreground text-white border-t-2 border-primary shadow-[0_-6px_20px_rgba(0,0,0,0.25)] animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="container mx-auto px-3 md:px-6 py-2.5 md:py-3 flex items-center justify-between gap-3">
        {/* Left: Timer */}
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0" />
          <div className="hidden sm:block text-[11px] md:text-xs font-bold uppercase tracking-wide text-white/80 leading-tight">
            Next batch<br className="md:hidden" /> closes in
          </div>
          <div className="flex gap-1 md:gap-1.5">
            {cells.map(({ val, label }) => (
              <div
                key={label}
                className="bg-white/10 border border-white/20 rounded-md px-1.5 md:px-2 py-1 text-center min-w-[34px] md:min-w-[40px]"
              >
                <div className="font-heading font-extrabold text-xs md:text-sm leading-none">
                  {String(val).padStart(2, "0")}
                </div>
                <div className="text-[8px] md:text-[9px] text-white/60 leading-none mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-2 text-sm font-bold">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span>
              Gain <span className="text-primary">20% Scholarship</span>
            </span>
          </div>
          <CTAButton
            variant="primary"
            formLabel="Scholarship Bar"
            className="!px-3 md:!px-5 !py-2 !text-xs md:!text-sm whitespace-nowrap"
            noShadow
          >
            <span className="md:hidden">Claim 20% Off</span>
            <span className="hidden md:inline">Claim Scholarship</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipBar;
