'use client';
import { m } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

/*
  HERO — ダーク・プレミアム設計
  参照: Linear / Vercel / Stripe / Superhuman の共通原則
  ① 素材なし・CSS背景のみ（ストック写真は安価に見える最大要因）
  ② 数値で信頼を先に示す（proof first）
  ③ 1メッセージ = 1CTA
  ④ scroll-linked parallax 廃止（スクロール干渉の原因）
*/

const PROOF = [
  { num: '25+',    label: 'アクティブメンバー' },
  { num: '¥100万+', label: '月間売上'          },
  { num: '3ヶ月',  label: 'で急成長中'         },
] as const;

export default function HeroSimple() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* ── 背景: ライングリッド ── */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {/* ── 環境光: ゴールドのアンビエントグロー ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '45%', left: '22%',
          width: '700px', height: '700px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(200,168,75,0.06) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%', right: '-5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(200,168,75,0.03) 0%, transparent 70%)',
        }}
      />

      {/* ── ゴールドライン（上部アクセント） ── */}
      <div className="absolute top-0 inset-x-0 gold-line z-20" />

      {/* ── メインコンテンツ ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center s-container pt-28 pb-16">

        {/* タグライン */}
        <m.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="block w-6 h-px" style={{ background: '#c8a84b' }} />
          <span className="t-label" style={{ color: 'rgba(200,168,75,0.75)', fontSize: '10px' }}>
            Practical Business Org — Osaka, Japan
          </span>
        </m.div>

        {/* ヘッドライン — paddingTopでクリップ防止 */}
        <div className="overflow-hidden mb-6" style={{ paddingTop: '0.12em' }}>
          <m.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="t-hero font-mincho"
            style={{ color: '#fff', lineHeight: 1.05, fontWeight: 700 }}
          >
            稼ぎながら、<br />
            <span className="gold-text">成長する</span>。
          </m.h1>
        </div>

        {/* サブコピー */}
        <m.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="font-mincho"
          style={{ color: '#666', fontSize: '18px', lineHeight: 1.9, maxWidth: '420px', marginBottom: '3rem', letterSpacing: '0.02em' }}
        >
          バイトでもインターンでもない、第三の選択肢。<br />
          大阪発の学生組織が、あなたの可能性を広げる。
        </m.p>

        {/* 実績数値 */}
        <m.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 mb-12"
        >
          {PROOF.map((item, i) => (
            <div key={i} className="flex items-center gap-4 sm:gap-6">
              {i > 0 && (
                <div className="hidden sm:block" style={{ width: '1px', height: '36px', background: '#222' }} />
              )}
              <div>
                <div
                  className="font-display"
                  style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em', lineHeight: 1 }}
                >
                  {item.num}
                </div>
                <div style={{ fontSize: '11px', color: '#444', marginTop: '5px', letterSpacing: '0.06em', fontFamily: 'var(--font-display, sans-serif)' }}>
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </m.div>

        {/* CTA */}
        <m.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
        >
          <a
            href="https://lin.ee/YLQ7UHz"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
            style={{
              height: '52px',
              padding: '0 32px',
              fontSize: '15px',
              boxShadow: '0 8px 28px rgba(6,199,85,0.2)',
            }}
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            LINEで相談する
          </a>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling-modal'))}
            className="cta-ghost-dark"
            style={{ height: '52px' }}
          >
            説明会を予約する
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </button>
        </m.div>
      </div>

      {/* ── スクロールヒント ── */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="relative z-10 flex flex-col items-center pb-10 gap-2"
      >
        <span className="t-label" style={{ color: '#2a2a2a', fontSize: '9px' }}>SCROLL</span>
        <span
          className="block w-px h-10 animate-scroll-pulse"
          style={{ background: 'linear-gradient(to bottom, #c8a84b, transparent)' }}
        />
      </m.div>
    </section>
  );
}
