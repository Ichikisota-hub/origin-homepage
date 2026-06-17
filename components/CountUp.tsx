'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useMotionValueEvent, animate, useReducedMotion } from 'motion/react';

/*
  数字カウントアップ
  - ビューイン時に 0→to を一度だけ実行
  - prefix/suffix（¥・万+・歳 等）は静的、数値部のみ動的
  - reduced-motion 時は即 to を表示（アニメ無し）
*/
export default function CountUp({
  to,
  prefix = '',
  suffix = '',
  duration = 1.6,
  className,
  style,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);

  useMotionValueEvent(mv, 'change', latest => setVal(Math.round(latest)));

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setVal(to); return; }
    const controls = animate(mv, to, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, reduce, to, duration, mv]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{val}{suffix}
    </span>
  );
}
