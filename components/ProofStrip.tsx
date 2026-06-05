'use client';
import { m } from 'motion/react';

/* ══════════════════════════════════════════
   SOCIAL PROOF SECTION（スキル準拠）
   ヒーロー直下に数字・実績を配置
   30%カラー（チャコール）で信頼感を演出
══════════════════════════════════════════ */

const proofs = [
  { num: '20–100',  unit: '万円/月', label: 'メンバーの収入レンジ' },
  { num: '4',       unit: '事業',    label: '営業・不動産・AI・海外' },
  { num: '19',      unit: '歳',      label: '代表が月120万稼いだ年齢' },
  { num: '未経験',  unit: 'OK',      label: '学部・学年・スキル不問' },
];

export default function ProofStrip() {
  return (
    <section className="bg-[#111] py-14">
      <div className="s-container">
        {/* ラベル */}
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="t-label text-[#c8a84b] mb-10 text-center"
        >
          PROOF — 実績で証明する
        </m.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {proofs.map((p, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="bg-[#111] px-8 py-10 text-center"
            >
              <p className="proof-num font-display mb-1">
                {p.num}
                <span className="text-[#c8a84b] font-display" style={{ fontSize: '0.55em', marginLeft: '4px' }}>
                  {p.unit}
                </span>
              </p>
              <p className="t-label text-[#555]" style={{ fontSize: '10px' }}>{p.label}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
