'use client';
import { m, useScroll, useSpring } from 'motion/react';

/*
  上部ゴールド進捗バー
  - scrollYProgress(0→1) を scaleX にバインド
  - useSpring で追従に弾性を持たせ、Lenis の慣性と質感を揃える
  - z はナビ(z-50)より上、固定表示
*/
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <m.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left gold-line"
      style={{ scaleX }}
    />
  );
}
