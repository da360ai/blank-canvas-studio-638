import { useEffect, useRef, useState } from "react";
import { X, Volume2, VolumeX } from "lucide-react";
import CTAButton from "@/components/da360/CTAButton";
import { cn } from "@/lib/utils";

const YT_ID = "pnWnY0TrPPw";

const VideoPopup = () => {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(t);
  }, []);

  const postYT = (func: string) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*"
    );
  };

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed bottom-20 md:bottom-28 left-3 md:left-6 z-50 w-[220px] sm:w-[260px] md:w-[340px]",
        "rounded-2xl overflow-hidden border-2 border-foreground bg-white",
        "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-in slide-in-from-left-8 fade-in duration-500"
      )}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between bg-foreground text-white px-3 py-1.5">
        <span className="font-heading font-bold italic text-[11px] uppercase tracking-wide">
          Real Learner Story
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              setMuted((m) => {
                const next = !m;
                postYT(next ? "mute" : "unMute");
                return next;
              });
            }}
            className="p-1 rounded hover:bg-white/20"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          </button>
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Video */}
      <div className="relative aspect-video bg-black overflow-hidden">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_ID}&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&showinfo=0&iv_load_policy=3&disablekb=1&fs=0`}
          title="Real Learner Story"
          className="absolute inset-0 w-full h-full pointer-events-none"
          frameBorder={0}
          allow="autoplay; encrypted-media; picture-in-picture"
        />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
          <p className="text-white font-heading font-extrabold italic text-sm uppercase leading-tight">
            See How DA360 Transforms Careers
          </p>
          <p className="text-white/80 text-[10px]">Watch a 60-second learner story</p>
        </div>
      </div>

      {/* CTA */}
      <div className="p-2.5 bg-primary/10">
        <CTAButton
          variant="primary"
          fullWidth
          formLabel="Video Popup CTA"
          className="!px-3 !py-2.5 !text-xs"
          noShadow
        >
          Book Your Free Class
        </CTAButton>
      </div>
    </div>
  );
};

export default VideoPopup;
