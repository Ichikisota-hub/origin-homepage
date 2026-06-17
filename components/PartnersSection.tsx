'use client';
import { m } from 'motion/react';

/* ══════════════════════════════════════════════
   提携先企業 — フッター直前の控えめな1行ロゴ列
   - メイン要素ではないため、モノクロ社名を静かに並べるだけ
══════════════════════════════════════════════ */

const partners = [
  { name: '株式会社テンプラス' },
  { name: '株式会社アイテックス' },
  { name: 'NEURA GROUP' },
  { name: '思いを紡ぐ株式会社' },
  { name: 'TOPエージェンシー' },
  { name: 'HRD株式会社 86研究所' },
];

export default function PartnersSection() {
  return (
    <section className="bg-[#fafaf8] border-t border-black/5 py-8 md:py-10">
      <div className="s-container">
        <m.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          {/* 小さなラベルのみ。大見出しは撤去して控えめに */}
          <span className="t-label text-[#bbb] tracking-[0.2em]" style={{ fontSize: '10px' }}>
            PARTNERS — 提携先企業
          </span>

          {/* モノクロの社名を横1行（折返し可）。静かに並べる */}
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5">
            {partners.map((p) => (
              <span
                key={p.name}
                className="text-[#aaa] text-xs md:text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-300 hover:text-[#777]"
              >
                {p.name}
              </span>
            ))}
          </div>

          <p className="text-[#ccc] tracking-wide" style={{ fontSize: '10px' }}>
            ※ 各社の商標・ロゴは各社に帰属します。
          </p>
        </m.div>
      </div>
    </section>
  );
}
