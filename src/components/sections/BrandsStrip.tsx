import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import AnimateIn from '../ui/AnimateIn';

const brands = [
  'Dell',
  'HP',
  'Lenovo',
  'Apple MacBook',
  'Asus',
  'Acer',
  'Samsung',
  'Sony',
  'Toshiba',
  'MSI',
];

export default function BrandsStrip() {
  return (
    <section id="brands" className="bg-white py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <AnimateIn className="text-center mb-6 md:mb-8">
          <SectionLabel className="mb-2">BRANDS WE SERVICE</SectionLabel>
          <p className="text-sm md:text-base text-text-secondary font-inter">
            Authorized-quality service for all major brands.
          </p>
        </AnimateIn>

        <div className="flex overflow-x-auto md:overflow-x-visible md:flex-wrap md:justify-center gap-3 md:gap-4 pb-4 md:pb-0 hide-scrollbar">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex-shrink-0 px-5 py-2 md:px-6 md:py-3 border border-border rounded-full bg-navy-light/30 font-inter font-semibold text-sm md:text-base text-navy whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
