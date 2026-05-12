import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  // Extract pure numeric target and formatting rules
  let targetNumber = 0;
  let finalDisplayString = value;
  let isKFormatted = false;

  const lowerVal = value.toLowerCase();
  if (lowerVal.includes('k')) {
    isKFormatted = true;
    const numPart = parseFloat(value.replace(/[^0-9.]/g, ''));
    targetNumber = isNaN(numPart) ? 5000 : numPart * 1000;
    finalDisplayString = value;
  } else if (value.includes('+')) {
    const numPart = parseInt(value.replace(/[^0-9]/g, ''), 10);
    targetNumber = isNaN(numPart) ? 150 : numPart;
    finalDisplayString = value;
  } else {
    const numPart = parseInt(value.replace(/[^0-9]/g, ''), 10);
    targetNumber = isNaN(numPart) ? 2019 : numPart;
    finalDisplayString = value;
  }

  const [displayString, setDisplayString] = useState("1");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const isAnimatingRef = useRef(false);

  const startCount = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const startTime = performance.now();
    const duration = 1000; // Count completes cleanly within 1 second

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easeOut easing function for realistic rapid deceleration
      const easeOut = progress * (2 - progress);
      const currentNum = Math.floor(1 + (targetNumber - 1) * easeOut);

      if (progress < 1) {
        if (isKFormatted) {
          // Display integer count up rapidly before settling on formatted string
          setDisplayString(`${currentNum}+`);
        } else if (finalDisplayString.includes('+')) {
          setDisplayString(`${currentNum}+`);
        } else {
          setDisplayString(`${currentNum}`);
        }
        requestAnimationFrame(animate);
      } else {
        setDisplayString(finalDisplayString);
        isAnimatingRef.current = false;
      }
    };

    requestAnimationFrame(animate);
  };

  // Trigger automatically when scrolled into view
  useEffect(() => {
    if (isInView) {
      startCount();
    }
  }, [isInView]);

  // Robust auto-listener: trigger animation whenever the parent section/card is hovered
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Attach to the closest parent interactive card or container
    const parentContainer = node.closest('.group') || node.parentElement;
    if (!parentContainer) return;

    const handleMouseEnter = () => {
      startCount();
    };

    parentContainer.addEventListener('mouseenter', handleMouseEnter);
    return () => {
      parentContainer.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [targetNumber, finalDisplayString]);

  return (
    <motion.span ref={ref} className={className}>
      {displayString}
    </motion.span>
  );
}
