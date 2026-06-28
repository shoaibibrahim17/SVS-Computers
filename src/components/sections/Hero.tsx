import React, { useState } from 'react';
import { ArrowRight, Phone, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { toast } from 'sonner';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deviceType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          subject: 'Quick Service Request — SVS Computers',
          from_name: 'SVS Website',
          ...formData,
        }),
      });

      const result = await res.json();
      if (result.success) {
        toast.success('Request submitted! We\'ll call you within 30 minutes.');
        setFormData({ name: '', phone: '', deviceType: '' });
      } else {
        toast.error('Something went wrong. Please call us directly.');
      }
    } catch (error) {
      toast.error('Failed to submit. Please try calling us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative bg-navy min-h-[480px] md:min-h-[560px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy/80"></div>

      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-xs md:text-sm font-inter font-semibold uppercase tracking-widest text-orange mb-4">
              TRUSTED COMPUTER REPAIR IN SECUNDERABAD
            </p>

            <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-4 md:mb-6">
              Fast, Expert Repair<br />For Every Device.
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-white/80 font-inter max-w-lg mb-6 md:mb-8">
              Laptop, PC, screen, data recovery — fixed by certified technicians with a 90-day warranty. Most repairs done same day.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <Button
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                onClick={() => window.location.href = '#contact'}
                className="sm:w-auto w-full"
              >
                Book a Repair
              </Button>
              <Button
                variant="secondary"
                size="lg"
                rightIcon={<Phone className="w-5 h-5" />}
                onClick={() => window.location.href = 'tel:+919999999999'}
                className="sm:w-auto w-full border-white text-white hover:bg-white hover:text-navy"
              >
                Call Us Now
              </Button>
            </div>

            <div className="flex items-center gap-2 text-white/70 text-sm md:text-base font-inter">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-orange text-orange" />
                ))}
              </div>
              <span>4.9/5 · Rated by 120+ customers in Secunderabad</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-2xl">
              <h3 className="font-poppins font-semibold text-base md:text-lg text-navy mb-4 flex items-center gap-2">
                📋 Quick Service Request
              </h3>

              <form onSubmit={handleQuickSubmit} className="space-y-3 md:space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full h-12 px-4 border border-border rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full h-12 px-4 border border-border rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                />

                <select
                  value={formData.deviceType}
                  onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
                  required
                  className="w-full h-12 px-4 border border-border rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                >
                  <option value="">Select Device Type</option>
                  <option value="laptop">Laptop</option>
                  <option value="desktop">Desktop PC</option>
                  <option value="screen">Screen Issue</option>
                  <option value="data-recovery">Data Recovery</option>
                  <option value="battery">Battery</option>
                  <option value="other">Other</option>
                </select>

                <Button type="submit" fullWidth size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Get Free Diagnosis'}
                </Button>

                <p className="text-xs text-text-secondary font-inter text-center">
                  🔒 No spam. We'll call within 30 minutes.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
