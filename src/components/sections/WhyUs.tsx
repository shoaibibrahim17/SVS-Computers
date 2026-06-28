import React from 'react';
import { Microscope, DollarSign, Zap, Shield } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import AnimateIn from '../ui/AnimateIn';

const features = [
  {
    icon: Microscope,
    title: 'Expert Diagnostics',
    description: "Free diagnosis before any repair. You always know what's wrong and what it costs.",
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No surprise bills. Fixed quote upfront — pay only if you approve the repair.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Most repairs done in 4–6 hours. Urgent same-day service also available.',
  },
  {
    icon: Shield,
    title: '90-Day Warranty',
    description: 'Every repair is backed by our service guarantee. We stand behind our work.',
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-navy py-12 md:py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <AnimateIn className="text-center mb-10 md:mb-14">
          <SectionLabel className="mb-3">WHY SVS COMPUTERS</SectionLabel>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-white">
            Secunderabad's Most Trusted Repair Studio
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimateIn key={feature.title} delay={index * 0.1}>
                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg md:text-xl text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 font-inter leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
