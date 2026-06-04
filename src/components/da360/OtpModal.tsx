import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShieldCheck, X, RefreshCw } from "lucide-react";
import { sendOtp } from "@/lib/leadSubmit";

interface OtpModalProps {
  mobile: string;
  fullName: string;
  onVerified: () => void; // called when OTP matches; parent should call submitLead 
  onClose: () => void;
}

const OTP_LENGTH = 4;
const RESEND_COOLDOWN = 30; // seconds

export const OtpModal = ({ mobile, fullName, onVerified, onClose }: OtpModalProps) => {
  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [serverOtp, setServerOtp] = useState<number | null>(null);
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Send OTP on mount
  useEffect(() => {
    triggerSendOtp();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startCooldown = () => {
    setCooldown(RESEND_COOLDOWN);
    timerRef.current = setInterval(() => {
      setCooldown((c) => {
        if (c <= 1) { clearInterval(timerRef.current!); return 0; }
        return c - 1;
      });
    }, 1000);
  };

  const triggerSendOtp = async () => {
    setSending(true);
    setError("");
    const res = await sendOtp(mobile, fullName);
    setSending(false);
    if (res.ok && res.otp !== undefined) {
      setServerOtp(res.otp);
      startCooldown();
      // Focus first input
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } else {
      setError("Failed to send OTP. Please try again.");
    }
  };

  const handleDigitChange = (index: number, value: string) => {
    // Allow only digits
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = digit;
    setDigits(next);
    setError("");

    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (pasted.length) {
      const next = Array(OTP_LENGTH).fill("");
      pasted.split("").forEach((ch, i) => { next[i] = ch; });
      setDigits(next);
      inputRefs.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
    }
    e.preventDefault();
  };

  const handleVerify = async () => {
    const entered = digits.join("");
    if (entered.length < OTP_LENGTH) {
      setError("Please enter the complete OTP.");
      return;
    }
    if (serverOtp === null) {
      setError("OTP not received yet. Please resend.");
      return;
    }
    setVerifying(true);
    // Simulate a tiny delay for UX
    await new Promise((r) => setTimeout(r, 400));
    if (parseInt(entered, 10) === serverOtp) {
      setSuccess(true);
      setTimeout(() => onVerified(), 800);
    } else {
      setError("Incorrect OTP. Please try again.");
      setDigits(Array(OTP_LENGTH).fill(""));
      inputRefs.current[0]?.focus();
    }
    setVerifying(false);
  };

  const maskedMobile = mobile.replace(/(\d{2})\d+(\d{2})/, "$1****$2");

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Card */}
      <div className="relative bg-card rounded-2xl border-2 border-foreground w-full max-w-sm p-6 md:p-8 shadow-2xl">
        {/* Stack shadow */}
        <div className="absolute inset-0 bg-card rounded-2xl border-2 border-foreground transform rotate-2 translate-x-1.5 translate-y-1.5 -z-10" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {success ? (
          <div className="py-8 text-center">
            <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
            <h4 className="font-heading text-lg font-bold text-foreground mb-1">Verified!</h4>
            <p className="text-muted-foreground text-sm">Submitting your details…</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-primary/10 rounded-xl p-2.5">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground leading-tight">
                  Verify Your Number
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  OTP sent to {maskedMobile}
                </p>
              </div>
            </div>

            {/* OTP inputs */}
            <div className="flex gap-2 justify-between mb-1" onPaste={handlePaste}>
              {digits.map((d, i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="tel"
                  inputMode="numeric"
                  maxLength={1}
                  value={d}
                  onChange={(e) => handleDigitChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={`
                    w-14 h-14 text-center text-xl font-extrabold font-heading rounded-lg border-2 bg-background
                    outline-none transition-colors
                    ${error ? "border-red-500" : d ? "border-foreground" : "border-border"}
                    focus:border-foreground
                  `}
                />
              ))}
            </div>

            {/* Error */}
            {error && (
              <p className="text-xs text-red-500 font-medium mt-1 mb-3">{error}</p>
            )}

            {/* Resend */}
            <div className="flex items-center justify-end mb-4 mt-2">
              {cooldown > 0 ? (
                <span className="text-xs text-muted-foreground">
                  Resend in <span className="font-bold text-foreground">{cooldown}s</span>
                </span>
              ) : (
                <button
                  onClick={triggerSendOtp}
                  disabled={sending}
                  className="flex items-center gap-1 text-xs font-bold text-foreground hover:text-primary transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${sending ? "animate-spin" : ""}`} />
                  {sending ? "Sending…" : "Resend OTP"}
                </button>
              )}
            </div>

            {/* Verify button */}
            <Button
              onClick={handleVerify}
              disabled={verifying || sending || digits.join("").length < OTP_LENGTH}
              className="w-full bg-foreground hover:bg-primary hover:text-primary-foreground text-background font-heading font-bold text-base py-5 rounded-full transition-colors duration-200"
            >
              {verifying ? "Verifying…" : "Verify & Submit"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};