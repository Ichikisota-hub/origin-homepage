'use client';
import { ReactLenis } from 'lenis/react';
import { useReducedMotion } from 'motion/react';

/*
  慣性スムーススクロール（Lenis）
  - root: html/body 自体をスクローラ化 → 全ページ共通
  - syncTouch:false → モバイルはネイティブ感を維持（過去の「止まりたいのに戻る」不満を回避）
  - anchors:true → #services 等のアンカー遷移を Lenis が滑らかに処理
  - reduced-motion 時は smoothWheel を切り、慣性なしの素通しに
*/
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: !reduce,
        syncTouch: false,
        anchors: { offset: -56 },
      }}
    >
      {children}
    </ReactLenis>
  );
}
