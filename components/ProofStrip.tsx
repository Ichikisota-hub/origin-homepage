'use client';
import { m } from 'motion/react';

/*
  PROOF STRIP — リデザイン
  × grid + gap-px（テーブル感が出て安っぽい）
  ○ 縦線ボーダー区切り + 大きな数字のみ
  参照: Stripe / Linear / Superhuman の metric section
*/

const proofs = [
  { num: '20〜100', unit: '万円/月', label: 'メンバーの収入レンジ',      sub: null },
  { num: '4',       unit: '事業',    label: '営業・不動産・AI・海外',     sub: null },
  { num: '19',      unit: '歳',      label: '代表が月120万を達成した年齢', sub: null },
  { num: null,      unit: null,      label: '学部・学年・経験\n一切問いません', sub: '未経験 OK' },
] as const;

export default function ProofStrip() {
  return (
    <section
      style={{
        background: '#fafaf8',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div className="s-container py-16">

        {/* ラベル */}
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-center mb-14"
          style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.3em', color: '#c8a84b' }}
        >
          PROOF — 実績で証明する
        </m.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {proofs.map((p, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-6 py-8"
              style={{
                borderRight: i < 3 ? '1px solid rgba(0,0,0,0.07)' : undefined,
                borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.07)' : undefined,
              }}
            >
              {p.num !== null ? (
                /* 数値型 */
                <div className="mb-3">
                  <span
                    className="font-display text-[#111]"
                    style={{ fontSize: 'clamp(2.2rem,4.5vw,3.4rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1 }}
                  >
                    {p.num}
                  </span>
                  <span
                    className="font-display text-[#c8a84b] ml-1.5"
                    style={{ fontSize: 'clamp(0.85rem,1.8vw,1.1rem)', fontWeight: 700, letterSpacing: '-0.01em' }}
                  >
                    {p.unit}
                  </span>
                </div>
              ) : (
                /* テキスト型: 未経験OK */
                <div className="mb-3">
                  <span
                    className="font-mincho text-[#111]"
                    style={{ fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '0.04em', lineHeight: 1.1 }}
                  >
                    未経験
                  </span>
                  <span
                    className="font-display text-[#c8a84b] ml-2"
                    style={{ fontSize: 'clamp(1rem,2vw,1.4rem)', fontWeight: 800 }}
                  >
                    OK
                  </span>
                </div>
              )}

              <p
                className="font-display text-[#3a3a3a]"
                style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', lineHeight: 1.7, whiteSpace: 'pre-line' }}
              >
                {p.label}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
