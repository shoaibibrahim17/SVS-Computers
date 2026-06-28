import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

interface StatCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function StatCounter({ end, suffix = '', duration = 2 }: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, {
        duration,
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return controls.stop;
    }
  }, [isInView, end, duration, count]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}
