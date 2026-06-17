'use client';
import { m } from 'motion/react';

/*
  統一リビールラッパー
  - ビューイン時に opacity 0→1 / y 32→0
  - once:true で一度だけ。easing はサイト共通 [0.16,1,0.3,1]
  - delay で順次出現を制御
*/
export default function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </m.div>
  );
}
