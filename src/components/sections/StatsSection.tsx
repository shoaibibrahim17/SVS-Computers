import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import AnimateIn from '../ui/AnimateIn';
import StatCounter from '../ui/StatCounter';

const stats = [
  { value: 500, suffix: '+', label: 'Devices Repaired' },
  { value: 10, suffix: '+', label: 'Years in Secunderabad' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: 4.9, suffix: '★', label: 'Google Rating' },
];

export default function StatsSection() {
  return (
    <section className="bg-light py-12 md:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <AnimateIn key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <p className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-2">
                  <StatCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm md:text-base lg:text-lg text-text-secondary font-inter">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
