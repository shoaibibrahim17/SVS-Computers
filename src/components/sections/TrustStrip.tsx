import React from 'react';
import { Wrench, Zap, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimateIn from '../ui/AnimateIn';

const trustItems = [
  { icon: Wrench, stat: '500+', label: 'Repairs Completed' },
  { icon: Zap, stat: 'Same Day', label: 'Service Available' },
  { icon: Shield, stat: '90 Days', label: 'Repair Warranty' },
  { icon: Star, stat: '4.9 / 5', label: 'Customer Rating' },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-t border-b border-border">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimateIn key={item.label} delay={index * 0.1}>
                <div className="flex flex-col items-center text-center lg:border-r lg:border-border lg:last:border-r-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy-light flex items-center justify-center mb-3 md:mb-4">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-navy" />
                  </div>
                  <p className="font-poppins font-bold text-xl md:text-2xl lg:text-3xl text-navy mb-1">
                    {item.stat}
                  </p>
                  <p className="text-xs md:text-sm text-text-secondary font-inter">
                    {item.label}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
