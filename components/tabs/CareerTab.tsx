'use client';
import { m } from 'motion/react';
import { Briefcase, Rocket, Star } from 'lucide-react';

const paths = [
  {
    exit: 'EXIT A',
    label: '就職',
    icon: Briefcase,
    color: '#4a90d9',
    desc: '人材紹介で優良企業とマッチング。実績があるので有利です。',
    detail: 'Kaikaでの実践経験が即戦力として評価されます。',
  },
  {
    exit: 'EXIT B',
    label: '独立・起業',
    icon: Rocket,
    color: '#e07b3a',
    desc: '起業支援あり。自分の事業をゼロから立ち上げられます。',
    detail: '事業経験・人脈・ノウハウを活かして自分の会社を作ることができます。',
  },
  {
    exit: 'EXIT C',
    label: '幹部として残る',
    icon: Star,
    color: '#8b5cf6',
    desc: '事業部を率いる側へ。新事業の立ち上げを自分で担います。',
    detail: '次世代の学生を育て、Kaikaを全国に広げていきます。',
  },
];

const wants = [
  '今の自分を変えたい人',
  '大学生活、このままではいけないと気づいている人',
  '稼ぎたい。でもそれ以上に、成長したい人',
  '仲間と共に、本気で何かを成し遂げたい人',
];

export default function CareerTab() {
  return (
    <div className="s-section s-container">

      {/* ヘッダー */}
      <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
        <span className="font-display text-[10px] font-bold tracking-[0.28em] text-[#c8a84b] block mb-4">NEXT STEP</span>
        <h2 className="font-mincho text-[#111]" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)', fontWeight: 700, letterSpacing: '0.01em', lineHeight: 1.2 }}>
          Kaikaは、通過点です。
        </h2>
        <p className="font-mincho text-[#666] mt-4" style={{ fontSize: '15px', letterSpacing: '0.04em' }}>
          選択肢を増やしてから、人生を選んでください。
        </p>
      </m.div>

      {/* 3カード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {paths.map((p, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border border-black/8 rounded-xl p-7 bg-white"
          >
            <div className="flex items-start justify-between mb-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `${p.color}12`, border: `1px solid ${p.color}25` }}
              >
                <p.icon className="w-5 h-5" style={{ color: p.color }} />
              </div>
              <span className="font-display text-[10px] font-black tracking-widest text-[#ccc]">{p.exit}</span>
            </div>
            <h3 className="font-mincho text-[#111] mb-3" style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '0.02em' }}>{p.label}</h3>
            <p className="font-mincho mb-2" style={{ fontSize: '13px', fontWeight: 600, color: p.color, letterSpacing: '0.02em' }}>{p.desc}</p>
            <p className="font-mincho text-[#888]" style={{ fontSize: '12px', lineHeight: 1.8, letterSpacing: '0.03em' }}>{p.detail}</p>
          </m.div>
        ))}
      </div>

      {/* こんな人を待っています */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-[#111] rounded-xl p-8 md:p-12"
      >
        <span className="font-display text-[10px] font-bold tracking-[0.28em] text-[#c8a84b] block mb-8">WHO WE WANT</span>

        <div className="space-y-3">
          {wants.map((w, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-5 py-4 border-b border-white/5 last:border-0"
            >
              <span className="font-display text-[#333] flex-shrink-0" style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em' }}>
                0{i + 1}
              </span>
              <p className="font-mincho text-white" style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '0.04em' }}>{w}</p>
            </m.div>
          ))}
        </div>

        <p className="font-mincho text-[#444] text-xs mt-8 text-center" style={{ letterSpacing: '0.06em', lineHeight: 1.8 }}>
          スキルも経験も不要です。「変わりたい」という気持ちだけ持ってきてください。
        </p>
      </m.div>
    </div>
  );
}
