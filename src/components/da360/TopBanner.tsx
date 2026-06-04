import { useState } from "react";
import { X } from "lucide-react";

const BANNER_HEIGHT = "36px";

const TopBanner = ({ onClose }: { onClose?: () => void }) => {
  const [visible, setVisible] = useState(true);
  
  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#2e7d32] text-white flex items-center justify-center gap-2 px-10" style={{ height: BANNER_HEIGHT }}>
      <p className="text-xs md:text-sm text-center">
        <span className="font-extrabold italic text-[#FFEC5E]">EXCITING NEWS: </span>
        Admissions for Batch 2026 are Now Open!
      </p>
      <button onClick={handleClose} className="absolute right-4 hover:opacity-70 transition-opacity">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export { BANNER_HEIGHT };
export default TopBanner;
