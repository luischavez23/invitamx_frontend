import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { WHATSAPP_LINK } from "../../constants/contact";

export default function WhatsAppButton({
  label = "Cotiza con nosotros",
  large = false,
  testId,
}) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={testId}
      className={`group inline-flex items-center justify-center gap-3 rounded-full bg-[#FF2A5F] text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-[#E01C4A] shadow-[0_8px_24px_rgba(255,42,95,0.35)] hover:shadow-[0_16px_36px_rgba(255,42,95,0.45)] focus:outline-none focus:ring-2 focus:ring-[#FF2A5F] focus:ring-offset-2 ${
        large
          ? "px-10 py-5 text-base sm:text-lg"
          : "px-7 py-3.5 text-sm sm:text-base"
      }`}
    >
      <FaWhatsapp className={large ? "text-2xl" : "text-xl"} />

      <span>{label}</span>

      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}