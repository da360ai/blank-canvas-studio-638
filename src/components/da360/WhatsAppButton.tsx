import { MessageCircle, Phone } from "lucide-react";

const WhatsAppButton = () => (
  <div className="fixed bottom-24 md:bottom-28 right-6 z-50 flex flex-col gap-3">
    <a
      href="tel:+919876543210"
      className="bg-foreground hover:bg-foreground/90 text-white rounded-full p-4 shadow-2xl transition-transform hover:scale-110"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </a>
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20the%20DA360%20program"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full p-4 shadow-2xl transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  </div>
);

export default WhatsAppButton;
