'use client';
import { m } from 'motion/react';

/* ══════════════════════════════════════════════
   提携先企業セクション
   - 会社名は正式名称・丁寧に表示
   - ロゴがない場合はイニシャルタイル（モノクロ）
   - AI感・安っぽさを排除したミニマル設計
══════════════════════════════════════════════ */

const partners = [
  {
    name: '株式会社テンプラス',
    nameEn: 'TENPLUS Inc.',
    initial: 'T+',
    url: null,
    logo: null,
  },
  {
    name: '株式会社アイテックス',
    nameEn: 'AITEX',
    initial: 'A',
    url: null,
    logo: null,
  },
  {
    name: 'NEURA GROUP',
    nameEn: 'NEURA GROUP',
    initial: 'N',
    url: null,
    logo: null,
  },
  {
    name: '思いを紡ぐ株式会社',
    nameEn: 'Omoi wo Tsumugu',
    initial: '想',
    url: null,
    logo: null,
  },
  {
    name: 'TOPエージェンシー',
    nameEn: 'TOP Agency',
    initial: 'TP',
    url: null,
    logo: null,
  },
  {
    name: 'HRD株式会社 86研究所',
    nameEn: 'HRD Co., Ltd. 86 Lab',
    initial: 'HRD',
    url: null,
    logo: null,
  },
];

export default function PartnersSection() {
  return (
    <section className="bg-[#fafaf8] border-t border-b border-gray-100 py-16 md:py-20">
      <div className="s-container">

        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="t-label text-[#c8a84b] block mb-3">PARTNERS</span>
          <h2 className="font-black text-[#111] tracking-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            提携先企業
          </h2>
          <p className="text-sm text-[#888] mt-3 leading-relaxed">
            各分野の専門企業と連携し、より幅広い成長機会を提供しています。
          </p>
        </m.div>

        {/* Partner grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {partners.map((p, i) => {
            const inner = (
              <div className="flex flex-col items-start gap-4 p-6 md:p-7 h-full">
                {/* ロゴ or モノクロイニシャル */}
                {p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-8 w-auto object-contain"
                  />
                ) : (
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: '#111' }}
                  >
                    <span className="text-white font-bold text-xs tracking-wide leading-none">
                      {p.initial}
                    </span>
                  </div>
                )}

                {/* 会社名（正式表記） */}
                <div>
                  <p className="font-bold text-[#111] text-sm md:text-base leading-snug">
                    {p.name}
                  </p>
                  <p className="text-[#bbb] text-[10px] mt-1 tracking-wide font-medium">
                    {p.nameEn}
                  </p>
                </div>
              </div>
            );

            return (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <div className="bg-white border border-gray-200 rounded-2xl h-full">
                  {inner}
                </div>
              </m.div>
            );
          })}
        </div>

        {/* フッター注記 */}
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[11px] text-[#ccc] mt-8 text-center tracking-wide"
        >
          ※ 掲載は提携関係を示すものです。各社の商標・ロゴは各社に帰属します。
        </m.p>

      </div>
    </section>
  );
}
