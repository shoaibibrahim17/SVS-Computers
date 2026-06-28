import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-orange text-white h-10 md:h-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        <a
          href="tel:+919999999999"
          className="text-sm md:text-base font-inter font-medium hover:opacity-90 transition-opacity"
        >
          📞 +91-9999999999
        </a>

        <div className="hidden md:block text-sm font-inter font-medium">
          📍 Secunderabad, Hyderabad | Mon–Sat: 9AM – 7PM
        </div>

        <a
          href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20help%20with%20computer%20repair"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
