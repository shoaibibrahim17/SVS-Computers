import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p className={`text-xs md:text-sm font-inter font-semibold uppercase tracking-widest text-orange ${className}`}>
      {children}
    </p>
  );
}
