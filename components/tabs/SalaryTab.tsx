'use client';
import { m } from 'motion/react';
import { Clock, TrendingUp, Zap } from 'lucide-react';

const modes = [
  {
    id: '01',
    label: '時給制',
    sublabel: 'Hourly',
    icon: Clock,
    color: 'text-[#666]',
    bg: 'bg-[#f5f4f0]',
    border: 'border-[#e8e4da]',
    desc: 'まず始めてみましょう。固定報酬で安心して参加できます。',
    detail: 'モバイル催事営業（日当制・交通費支給）。接客型の現場で、コミュニケーション力と行動力を実践で磨く。',
  },
  {
    id: '02',
    label: '時給 + 歩合',
    sublabel: 'Hourly + Commission',
    icon: TrendingUp,
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    desc: '結果を出した分だけ上乗せ。',
    detail: null,
    popular: true,
  },
  {
    id: '03',
    label: '完全歩合',
    sublabel: 'Full Commission',
    icon: Zap,
    color: 'text-orange-700',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    desc: 'フルコミッションで上限なし。',
    detail: '素直に、謙虚に、愚直に頑張り、厳しい環境の中で鍛えられ、一番成長できる。',
  },
] as const;

export default function SalaryTab() {
  return (
    <div className="s-section s-container">

      {/* ヘッダー */}
      <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-14">
        <span className="block t-label text-[#c8a84b] mb-4">SALARY</span>
        <h2 className="font-mincho text-[#111]" style={{ fontSize: 'clamp(2.2rem,5vw,3.6rem)', fontWeight: 700, letterSpacing: '0.02em', lineHeight: 1.2 }}>
          選べる報酬制度。
        </h2>
      </m.div>

      {/* 3カード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        {modes.map((mode, i) => (
          <m.div
            key={mode.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative ${mode.bg} border ${mode.border} rounded-2xl p-7`}
          >
            {'popular' in mode && mode.popular && (
              <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full">
                POPULAR
              </span>
            )}
            <span className="font-display text-[10px] font-black tracking-widest text-[#bbb] block mb-5">MODE {mode.id}</span>
            <mode.icon className={`w-7 h-7 ${mode.color} mb-4`} />
            <h3 className="font-mincho text-[#111] mb-1" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{mode.label}</h3>
            <p className="font-display text-[10px] text-[#bbb] font-bold tracking-widest mb-4">{mode.sublabel}</p>
            <p className={`text-sm font-bold ${mode.color} mb-2`} style={{ letterSpacing: '0.02em' }}>{mode.desc}</p>
            {mode.detail && (
              <p className="text-[#777] text-xs leading-relaxed" style={{ letterSpacing: '0.03em' }}>{mode.detail}</p>
            )}
          </m.div>
        ))}
      </div>

      {/* REALITY */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-[#111] rounded-2xl p-8 md:p-14 text-white"
      >
        <span className="font-display block text-[10px] font-bold tracking-[0.3em] text-[#c8a84b] mb-10">REALITY</span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 当たり前ライン */}
          <div>
            <p className="font-display text-[10px] text-[#555] font-bold tracking-widest mb-4">当たり前ライン</p>
            <div className="flex items-end gap-3 leading-none mb-3">
              <span
                className="font-display text-white"
                style={{ fontSize: 'clamp(3.2rem,7.5vw,5.2rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1 }}
              >
                20–30
              </span>
              <span className="font-display text-[#555]" style={{ fontSize: '1.1rem', fontWeight: 700, paddingBottom: '0.3rem' }}>
                万円/月
              </span>
            </div>
            <p className="font-mincho text-[#555]" style={{ fontSize: '13px', letterSpacing: '0.04em' }}>ほとんどのメンバーが届く。</p>
          </div>

          {/* 本気で行くと */}
          <div>
            <p className="font-display text-[10px] text-[#555] font-bold tracking-widest mb-4">本気で行くと</p>
            <div className="flex items-end gap-3 leading-none mb-3">
              <span
                className="font-display gold-text"
                style={{ fontSize: 'clamp(3.2rem,7.5vw,5.2rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1 }}
              >
                50–100
              </span>
              <span className="font-display text-[#555]" style={{ fontSize: '1.1rem', fontWeight: 700, paddingBottom: '0.3rem' }}>
                万円/月
              </span>
            </div>
            <p className="font-mincho text-[#555]" style={{ fontSize: '13px', letterSpacing: '0.04em' }}>代表は19歳のとき、月120万。</p>
          </div>
        </div>

        <p className="font-display text-[#444] text-xs mt-10 pt-6 border-t border-white/8 text-center" style={{ letterSpacing: '0.12em', fontWeight: 600 }}>
          + 交通費全支給。案件ごとの特別賞与あり。
        </p>
      </m.div>
    </div>
  );
}
