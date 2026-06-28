import React from 'react';
import { Laptop, Monitor, Smartphone, HardDrive, Battery, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import AnimateIn from '../ui/AnimateIn';

const services = [
  {
    icon: Laptop,
    title: 'Laptop Repair',
    description: 'Screen damage, keyboard issues, motherboard faults, overheating — all brands.',
  },
  {
    icon: Monitor,
    title: 'Desktop & PC Repair',
    description: 'Hardware faults, OS reinstall, upgrades, custom builds, slow performance.',
  },
  {
    icon: Smartphone,
    title: 'Screen Replacement',
    description: 'Cracked or dead displays replaced with quality panels. Same-day for most models.',
  },
  {
    icon: HardDrive,
    title: 'Data Recovery',
    description: 'Files lost from HDD, SSD, or accidental format? We recover what matters most.',
  },
  {
    icon: Battery,
    title: 'Battery Replacement',
    description: 'Draining fast or not charging? We replace with genuine-grade cells.',
  },
  {
    icon: Shield,
    title: 'Virus & Malware Removal',
    description: 'Deep system cleanup, security setup, speed optimization. Fresh start guaranteed.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-light py-12 md:py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <AnimateIn className="text-center mb-8 md:mb-12">
          <SectionLabel className="mb-3">OUR SERVICES</SectionLabel>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-navy mb-3 md:mb-4">
            What We Repair & Service
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-text-secondary font-inter max-w-2xl mx-auto">
            From screen damage to data loss — our technicians handle every issue.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimateIn key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-border rounded-lg p-4 md:p-6 group hover:border-l-4 hover:border-l-orange transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg md:text-xl text-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary font-inter mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-sm font-inter font-medium text-orange hover:text-orange-hover inline-flex items-center gap-1"
                  >
                    Know More →
                  </a>
                </motion.div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
