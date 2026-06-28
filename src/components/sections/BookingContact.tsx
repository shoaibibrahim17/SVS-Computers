import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import SectionLabel from '../ui/SectionLabel';
import AnimateIn from '../ui/AnimateIn';
import Button from '../ui/Button';

interface BookingFormData {
  fullName: string;
  phone: string;
  deviceBrand: string;
  issueDescription: string;
  preferredDate: string;
  preferredTime: string;
}

export default function BookingContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
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
          subject: 'New Repair Booking — SVS Computers',
          from_name: 'SVS Website',
          ...data,
        }),
      });

      const result = await res.json();
      if (result.success) {
        toast.success('✅ Booked! Our technician will call you within 30 minutes.');
        reset();
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
    <section id="contact" className="bg-navy py-12 md:py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <AnimateIn className="text-center mb-10 md:mb-14">
          <SectionLabel className="mb-3">CONTACT US</SectionLabel>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-3 md:mb-4">
            Book Your Repair Today
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white/70 font-inter">
            Free diagnosis. Fixed quote. No repair, no fee.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
          <AnimateIn className="lg:col-span-3">
            <div className="bg-white rounded-xl p-6 md:p-8">
              <h3 className="font-poppins font-semibold text-xl text-navy mb-6">
                Book Free Diagnosis
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register('fullName', { required: 'Name is required' })}
                    className="w-full h-12 px-4 border border-border rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full h-12 px-4 border border-border rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Device Brand & Model (e.g. HP Pavilion 15)"
                    {...register('deviceBrand', { required: 'Device info is required' })}
                    className="w-full h-12 px-4 border border-border rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                  />
                  {errors.deviceBrand && (
                    <p className="text-red-500 text-xs mt-1">{errors.deviceBrand.message}</p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="Describe what's wrong"
                    rows={4}
                    {...register('issueDescription', { required: 'Issue description is required' })}
                    className="w-full px-4 py-3 border border-border rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-orange resize-none"
                  />
                  {errors.issueDescription && (
                    <p className="text-red-500 text-xs mt-1">{errors.issueDescription.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="date"
                      {...register('preferredDate')}
                      className="w-full h-12 px-4 border border-border rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                    />
                  </div>

                  <div>
                    <select
                      {...register('preferredTime')}
                      className="w-full h-12 px-4 border border-border rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                    >
                      <option value="">Preferred Time</option>
                      <option value="morning">Morning 9–12</option>
                      <option value="afternoon">Afternoon 12–4</option>
                      <option value="evening">Evening 4–7</option>
                    </select>
                  </div>
                </div>

                <Button type="submit" fullWidth size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Book Free Diagnosis'}
                </Button>
              </form>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-white mb-1">Call Us</h4>
                  <a
                    href="tel:+919999999999"
                    className="text-white/80 hover:text-orange transition-colors font-inter text-sm md:text-base"
                  >
                    +91-9999999999
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-white mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20help%20with%20computer%20repair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-orange transition-colors font-inter text-sm md:text-base"
                  >
                    Chat with a technician now →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-white mb-1">Our Location</h4>
                  <p className="text-white/80 font-inter text-sm md:text-base">
                    [Address], Secunderabad<br />
                    Hyderabad, Telangana - 500003
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-white mb-1">Working Hours</h4>
                  <p className="text-white/80 font-inter text-sm md:text-base">
                    Monday to Saturday<br />
                    9:00 AM – 7:00 PM<br />
                    <span className="text-white/60">Sunday: Emergency calls only</span>
                  </p>
                </div>
              </div>

              <div className="mt-8 border border-white/20 rounded-lg h-48 md:h-52 flex items-center justify-center bg-white/5">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-white/40 mx-auto mb-2" />
                  <p className="text-white/60 font-inter text-sm">
                    📍 Google Maps<br />
                    <span className="text-xs">[Add embed after deployment]</span>
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
