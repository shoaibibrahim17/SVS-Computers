import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-60 bg-white border-t border-border shadow-lg h-16 md:hidden">
      <div className="grid grid-cols-2 h-full">
        <a
          href="tel:+919999999999"
          className="flex items-center justify-center gap-2 bg-navy text-white font-poppins font-semibold text-sm hover:bg-navy/90 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20help%20with%20computer%20repair"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-poppins font-semibold text-sm hover:bg-[#20BA5A] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
