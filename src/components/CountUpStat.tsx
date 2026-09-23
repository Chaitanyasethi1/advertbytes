import React, { useEffect, useState, useRef } from 'react';

interface CountUpStatProps {
  value: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  durationMs?: number;
  className?: string;
}

export const CountUpStat: React.FC<CountUpStatProps> = ({
  value,
  numericTarget,
  prefix = '',
  suffix = '',
  decimals = 0,
  durationMs = 1200,
  className = '',
}) => {
  const [currentVal, setCurrentVal] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // If no numeric target is provided, we just display the raw value
    if (numericTarget === undefined || numericTarget === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const startVal = 0;
          const endVal = numericTarget;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / durationMs, 1);

            // Ease-out cubic formula: 1 - pow(1 - progress, 3)
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const nextVal = startVal + (endVal - startVal) * easeOutProgress;

            setCurrentVal(nextVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCurrentVal(endVal);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [numericTarget, durationMs, hasAnimated]);

  // If no numericTarget was given, display raw static string
  if (numericTarget === undefined || numericTarget === null) {
    return <span className={className}>{value}</span>;
  }

  const formattedNumber = currentVal.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={elementRef} className={`tabular-nums font-bold tracking-tight ${className}`}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};
