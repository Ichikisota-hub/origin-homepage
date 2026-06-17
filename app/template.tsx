'use client';
import { m, useReducedMotion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/*
  ページ遷移モーション
  - App Router は遷移ごとに template を再マウント → enter アニメが毎回走る
  - 事業詳細(/services/*) を開くときだけ「吸い込まれる」ズームスルー演出
    ① ゴールドのフラッシュ ② 前進ズーム(0.94→1.0 で拡大着地・横溢れなし)
  - それ以外は従来のフェード＋スライド
  - reduced-motion 時はアニメ無し
*/

/* 進入時に一瞬走るゴールドのフラッシュ（終わったら unmount） */
function GoldFlash() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 600);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <m.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.75, 0] }}
      transition={{ duration: 0.55, times: [0, 0.3, 1], ease: 'easeOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        background:
          'radial-gradient(circle at 50% 35%, rgba(240,212,122,0.9) 0%, rgba(200,168,75,0.5) 30%, transparent 70%)',
      }}
    />
  );
}

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const isService = pathname?.startsWith('/services/') ?? false;

  if (reduce) {
    return <div>{children}</div>;
  }

  if (isService) {
    return (
      <>
        <GoldFlash />
        <m.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: '50% 30%' }}
        >
          {children}
        </m.div>
      </>
    );
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  );
}
