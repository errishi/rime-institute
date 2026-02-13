import { MessageCircle } from 'lucide-react';
import React from 'react'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/911234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}

export default WhatsAppButton