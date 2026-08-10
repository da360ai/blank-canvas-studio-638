import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 100000, suffix: "+", label: "Careers Transformed" },
  { value: 2000, suffix: "+", label: "Hiring Partners" },
  { value: 6.8, suffix: "L", label: "Avg Salary", prefix: "₹" },
];

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(progress * end);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

const StatItem = ({ value, suffix, label, prefix = "", started }: { value: number; suffix: string; label: string; prefix?: string; started: boolean }) => {
  const count = useCountUp(value, 2000, started);
  const display = value >= 100 ? Math.round(count).toLocaleString("en-IN") : count.toFixed(1);
  return (
    <div className="text-center whitespace-nowrap">
      <div className="font-heading text-2xl md:text-4xl lg:text-5xl font-extrabold italic" style={{ color: "#9944F7" }}>
        {prefix}{display}{suffix}
      </div>
      <div className="text-foreground font-bold text-xs md:text-sm lg:text-base mt-1 md:mt-2">{label}</div>
    </div>
  );
};

const SocialProofStrip = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-spacing bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-nowrap justify-center gap-3 md:gap-6 lg:gap-16 overflow-x-auto">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
