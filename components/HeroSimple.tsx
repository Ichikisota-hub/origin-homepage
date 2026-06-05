'use client';
import { m, useScroll, useTransform } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

/* ══════════════════════════════════════════════
   HERO黄金構造（スキル準拠）
   ① 強烈なビジュアル（フルスクリーン写真）
   ② 5秒ヘッドライン（バイト × インターン）
   ③ 補足コピー 1-2文
   ④ 単一CTA（LINE / 44px+）
   ⑤ スクロールヒント
══════════════════════════════════════════════ */

export default function HeroSimple() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentO = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], ['0%', '8%']);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex flex-col overflow-hidden bg-[#fafaf8]">

      {/* ① VISUAL ─ フルスクリーン写真（Parallax） */}
      <m.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=85&w=2070&auto=format&fit=crop"
          alt="Kaika team collaboration"
          fill priority quality={75}
          className="object-cover object-center scale-[1.12]"
          sizes="100vw"
        />
        {/* 60%カラー: 左→右グラデーション（テキスト読みやすさ確保） */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf8] via-[#fafaf8]/90 to-[#fafaf8]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf8] via-transparent to-[#fafaf8]/10" />
      </m.div>

      {/* ゴールドライン上部（10%アクセント） */}
      <div className="absolute top-0 inset-x-0 gold-line z-20" />

      {/* ② ③ ④ メインコンテンツ */}
      <m.div
        className="relative z-10 flex-1 flex flex-col justify-center s-container pt-24 pb-8"
        style={{ opacity: contentO, y: contentY }}
      >
        {/* ラベル */}
        <m.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="block w-8 h-[2px] bg-[#c8a84b]" />
          <span className="t-label text-[#c8a84b]">Practical Business Org — Osaka, Japan</span>
        </m.div>

        {/* ② HEADLINE ─ t-hero スケール / 5秒で意味が伝わる */}
        <div className="overflow-hidden mb-6">
          <m.h1
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="t-hero text-[#111] font-display"
          >
            バイト<br />
            <span className="gold-text" style={{ fontSize: '0.68em' }}>×</span><br />
            インターン
          </m.h1>
        </div>

        {/* ③ SUB-COPY ─ 1-2文・簡潔 */}
        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="t-body-lg mb-10 max-w-[400px]"
        >
          世界にまだない概念。<br />
          稼ぎながら成長する、大阪発の学生組織。
        </m.p>

        {/* ④ CTA ─ Primary 1個（LINE固定）+ Secondary */}
        <m.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap gap-3 items-center"
        >
          {/* Primary CTA: LINE（転換率最優先・大きめサイズ） */}
          <a
            href="https://lin.ee/YLQ7UHz"
            target="_blank" rel="noopener noreferrer"
            className="cta-primary"
            style={{
              height: '56px',
              padding: '0 36px',
              fontSize: '16px',
              boxShadow: '0 8px 28px rgba(6,199,85,0.35)',
            }}
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            LINEで相談する
          </a>
          {/* Secondary CTA */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling-modal'))}
            className="cta-ghost"
          >
            説明会を予約する
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </button>
        </m.div>
      </m.div>

      {/* ⑤ SCROLL HINT */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="relative z-10 flex flex-col items-center pb-10 gap-2"
      >
        <span className="t-label text-[#bbb]" style={{ fontSize: '9px' }}>SCROLL</span>
        <span className="block w-px h-10 bg-gradient-to-b from-[#c8a84b] to-transparent animate-scroll-pulse" />
      </m.div>
    </section>
  );
}
