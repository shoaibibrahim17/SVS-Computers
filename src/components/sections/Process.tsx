import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import AnimateIn from '../ui/AnimateIn';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'Drop Off or Book Online',
    description: 'Walk in or submit the form — we confirm within 30 mins',
  },
  {
    number: 2,
    title: 'Free Diagnosis',
    description: 'Technician inspects your device and gives a fixed quote',
  },
  {
    number: 3,
    title: 'Expert Repair',
    description: 'We fix it using quality parts with care and precision',
  },
  {
    number: 4,
    title: 'Pick Up Ready',
    description: 'Collect in store or opt for local delivery in Secunderabad',
  },
];

export default function Process() {
  return (
    <section className="bg-light py-12 md:py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <AnimateIn className="text-center mb-10 md:mb-14">
          <SectionLabel className="mb-3">OUR PROCESS</SectionLabel>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-navy">
            Repair in 4 Simple Steps
          </h2>
        </AnimateIn>

        <div className="hidden md:block">
          <div className="flex items-start justify-between relative max-w-5xl mx-auto">
            <div className="absolute top-8 left-0 right-0 h-0.5 border-t-2 border-dashed border-navy/30"></div>

            {steps.map((step, index) => (
              <AnimateIn key={step.number} delay={index * 0.15} className="flex-1 relative z-10">
                <div className="flex flex-col items-center text-center px-4">
                  <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-4">
                    <span className="font-poppins font-bold text-2xl text-white">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-inter">
                    {step.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <AnimateIn key={step.number} delay={index * 0.1}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <span className="font-poppins font-bold text-xl text-white">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-navy/20 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <h3 className="font-poppins font-semibold text-base text-navy mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-inter">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
