'use client';
import { m, useReducedMotion } from 'motion/react';

/*
  ページ遷移モーション
  - App Router は遷移ごとに template を再マウント → enter アニメが毎回走る
  - ホーム⇄事業詳細の移動がフェード＋スライドで切り替わる
  - reduced-motion 時はアニメ無し
*/
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <m.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  );
}
