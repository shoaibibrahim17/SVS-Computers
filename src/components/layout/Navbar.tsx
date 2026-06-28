import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Laptop Repair',
    'Desktop Repair',
    'Screen Replacement',
    'Data Recovery',
    'Battery Replacement',
    'Virus Removal',
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services', hasDropdown: true },
    { label: 'Brands', href: '#brands' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-navy transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <span className="font-poppins font-bold text-white text-xl md:text-2xl">
                SVS
                <span className="block h-0.5 bg-orange w-full mt-0.5"></span>
              </span>
              <span className="font-poppins text-white/70 text-lg md:text-xl ml-1">
                Computers
              </span>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-white/80 hover:text-white transition-colors font-inter text-sm"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[200px]"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          {services.map((service) => (
                            <a
                              key={service}
                              href="#services"
                              className="block px-4 py-2 text-sm text-text-primary hover:bg-light transition-colors"
                            >
                              {service}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors font-inter text-sm"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button size="md" onClick={() => window.location.href = '#contact'}>
              Book a Repair
            </Button>
          </div>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-dark overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="block py-4 text-white/90 border-b border-white/10 font-inter"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.hasDropdown && (
                    <div className="pl-4 space-y-2 mt-2 mb-2">
                      {services.map((service) => (
                        <a
                          key={service}
                          href="#services"
                          className="block py-2 text-sm text-white/70"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button
                  fullWidth
                  size="lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = '#contact';
                  }}
                >
                  Book a Repair
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
