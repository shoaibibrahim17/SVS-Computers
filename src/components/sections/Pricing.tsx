import React from 'react';
import { Check } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import AnimateIn from '../ui/AnimateIn';
import Button from '../ui/Button';

const packages = [
  {
    name: 'BASIC',
    price: '₹499',
    topBarColor: 'bg-gray-400',
    features: [
      'Free Diagnosis',
      'Simple Software Fix',
      'OS Issues & Errors',
      'Basic Cleanup',
      'Same-Day Service',
    ],
    cta: 'Get Quote',
    popular: false,
  },
  {
    name: 'STANDARD',
    price: '₹999',
    topBarColor: 'bg-orange',
    features: [
      'All Basic Services',
      'Part Replacement',
      'Screen Repair',
      'Battery Replacement',
      '90-Day Warranty',
      'Priority Service',
    ],
    cta: 'Book Now',
    popular: true,
  },
  {
    name: 'PREMIUM',
    price: '₹1,999',
    topBarColor: 'bg-navy',
    features: [
      'All Standard Services',
      'Motherboard Repair',
      'Data Recovery',
      'Advanced Diagnostics',
      'Priority Turnaround',
      '90-Day Warranty',
    ],
    cta: 'Get Quote',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <AnimateIn className="text-center mb-10 md:mb-14">
          <SectionLabel className="mb-3">SERVICE PACKAGES</SectionLabel>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-navy mb-3 md:mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-text-secondary font-inter max-w-2xl mx-auto">
            Choose a plan or call us — we'll quote exactly what your repair needs.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <AnimateIn key={pkg.name} delay={index * 0.1}>
              <div
                className={`bg-white border border-border rounded-lg overflow-hidden ${
                  pkg.popular ? 'shadow-xl md:scale-105' : 'shadow-sm'
                }`}
              >
                <div className={`h-2 ${pkg.topBarColor}`}></div>

                <div className="p-6 md:p-8">
                  {pkg.popular && (
                    <div className="inline-block px-3 py-1 bg-orange text-white text-xs font-inter font-semibold rounded-full mb-4">
                      MOST POPULAR
                    </div>
                  )}

                  <h3 className="font-poppins font-bold text-xl md:text-2xl text-navy mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-3xl md:text-4xl font-poppins font-bold text-navy mb-1">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-text-secondary font-inter mb-6">from</p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-text-primary font-inter">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    fullWidth
                    size="lg"
                    variant={pkg.popular ? 'primary' : 'secondary'}
                    onClick={() => window.location.href = '#contact'}
                  >
                    {pkg.cta}
                  </Button>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
