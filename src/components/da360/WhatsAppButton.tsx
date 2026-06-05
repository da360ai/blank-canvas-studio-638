import { MessageCircle, Phone } from "lucide-react";

const WhatsAppButton = () => (
  <div className="fixed bottom-20 md:bottom-28 right-3 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
    <a
      href="tel:+919035354441"
      className="bg-foreground hover:bg-foreground/90 text-white rounded-full p-3 md:p-4 shadow-2xl transition-transform hover:scale-110"
      aria-label="Call us"
    >
      <Phone className="h-5 w-5 md:h-6 md:w-6" />
    </a>
    <a
      href="https://wa.me/919035354441?text=Hi%2C%20I%27m%20interested%20in%20the%20DA360%20program"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full p-3 md:p-4 shadow-2xl transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
    </a>
  </div>
);

export default WhatsAppButton;
