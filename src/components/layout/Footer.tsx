import React from 'react';
import { MessageCircle, ThumbsUp, Camera } from 'lucide-react';

const footerLinks = {
  services: [
    'Laptop Repair',
    'Desktop Repair',
    'Screen Replacement',
    'Data Recovery',
    'Battery Replacement',
    'Virus Removal',
  ],
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
    { label: 'Book a Repair', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8">
          <div>
            <div className="mb-4">
              <span className="font-poppins font-bold text-white text-2xl">
                SVS
                <span className="block h-0.5 bg-orange w-full mt-0.5"></span>
              </span>
              <span className="font-poppins text-white/70 text-xl">Computers</span>
            </div>
            <p className="text-sm text-white/60 font-inter mb-4 leading-relaxed">
              Secunderabad's trusted computer & laptop repair studio since 2015.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition-colors"
              >
                <ThumbsUp className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center transition-colors"
              >
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-white text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 hover:text-orange transition-colors font-inter"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-orange transition-colors font-inter"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-white text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60 font-inter">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+919999999999" className="hover:text-orange transition-colors">
                  +91-9999999999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>[Address], Secunderabad<br />Hyderabad, Telangana - 500003</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span>Mon–Sat: 9AM–7PM<br />Sunday: Emergency only</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <a href="mailto:info@svscomputers.com" className="hover:text-orange transition-colors">
                  info@svscomputers.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50 font-inter">
            <p>© 2025 SVS Computers. All rights reserved.</p>
            <p>Serving Secunderabad & Hyderabad</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
