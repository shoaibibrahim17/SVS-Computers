import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import AnimateIn from '../ui/AnimateIn';

const reviews = [
  {
    text: 'Brought in my HP laptop with a broken screen. They replaced it in under 3 hours at a fair price. Professional service, no drama.',
    name: 'Rahul M.',
    device: 'HP Laptop',
  },
  {
    text: 'Thought my hard drive data was completely gone after a crash. SVS recovered everything — photos, documents, all of it. Genuinely impressed.',
    name: 'Priya S.',
    device: 'Dell Desktop',
  },
  {
    text: "Office has 8 PCs — SVS handles all our maintenance and upgrades. Fast, transparent billing, and they actually explain what they're doing.",
    name: 'Arjun K.',
    device: 'Business Client',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <AnimateIn className="text-center mb-8 md:mb-12">
          <SectionLabel className="mb-3">CUSTOMER REVIEWS</SectionLabel>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-navy mb-4">
            What Our Customers in Secunderabad Say
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-light rounded-full">
            <Star className="w-4 h-4 fill-orange text-orange" />
            <span className="font-inter font-semibold text-sm text-navy">
              4.9 / 5 on Google · 120+ Reviews
            </span>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {reviews.map((review, index) => (
            <AnimateIn key={index} delay={index * 0.1}>
              <div className="bg-white border border-border border-l-4 border-l-orange rounded-lg p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-text-primary font-inter italic mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-poppins font-semibold text-sm text-navy">
                  {review.name}
                  <span className="font-inter font-normal text-text-secondary">
                    {' '}· {review.device}
                  </span>
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="text-center">
          <a
            href="https://www.google.com/search?q=SVS+Computers+Secunderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange hover:text-orange-hover font-inter font-medium text-sm md:text-base transition-colors"
          >
            Read All Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
