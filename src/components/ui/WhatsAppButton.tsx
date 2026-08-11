import { MessageCircle } from "lucide-react";
import { company } from "../../data/mockData";

interface WhatsAppButtonProps {
  message?: string;
}

export function WhatsAppButton({ message = "Bonjour, je souhaite avoir des informations sur vos pagnes et tissus." }: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
