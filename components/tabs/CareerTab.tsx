'use client';
import { m } from 'motion/react';
import { Briefcase, Rocket, Star } from 'lucide-react';

const paths = [
  { exit: 'EXIT A', label: '就職', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100',
    desc: '人材紹介で優良企業とマッチング。実績つきで勝ちにいける。',
    detail: 'Kaikaでの実践経験が即戦力として評価される。' },
  { exit: 'EXIT B', label: '独立・起業', icon: Rocket, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100',
    desc: '起業支援あり。自分の事業をゼロから立ち上げる。',
    detail: '事業経験・人脈・ノウハウを活かして自分の会社を作る。' },
  { exit: 'EXIT C', label: '幹部として残る', icon: Star, color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100',
    desc: '事業部を率いる側へ。新事業の立ち上げを自分で担う。',
    detail: '次世代の学生を育て、Kaikaを全国に広げる。' },
];

const wants = [
  '今の自分を、変えたい人',
  '大学生活、このままじゃダメだと気づいている人',
  '稼ぎたい。でもそれ以上に、成長したい人',
  '仲間と、本気で何かを成し遂げたい人',
];

export default function CareerTab() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
        <p className="text-xs font-bold tracking-[0.25em] text-gray-500 mb-3">NEXT STEP</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900">Kaikaは、ゴールじゃない。</h2>
        <p className="text-gray-700 mt-3 text-sm">選択肢を増やしてから、人生を選ぶ。</p>
      </m.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {paths.map((p, i) => (
          <m.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${p.bg} border ${p.border} p-7 md:p-9 rounded-2xl`}>
            <div className="flex items-start justify-between mb-6">
              <div className={`w-11 h-11 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center`}>
                <p.icon className={`w-5 h-5 ${p.color}`} />
              </div>
              <span className="text-[10px] font-black tracking-widest text-gray-500">{p.exit}</span>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">{p.label}</h3>
            <p className={`text-sm font-bold mb-2 ${p.color}`}>{p.desc}</p>
            <p className="text-gray-700 text-xs leading-relaxed">{p.detail}</p>
          </m.div>
        ))}
      </div>

      <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
        <p className="text-xs font-bold tracking-[0.25em] text-gray-500 mb-6">WHO WE WANT — こんな人を待ってる</p>
        <div className="space-y-3">
          {wants.map((w, i) => (
            <m.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-4 bg-white border border-gray-200 p-5 rounded-xl">
              <span className="text-lg font-black text-gray-200 font-mono flex-shrink-0">0{i + 1}</span>
              <p className="text-gray-900 font-bold text-sm md:text-base">{w}</p>
            </m.div>
          ))}
        </div>
        <p className="text-gray-500 text-xs mt-6 text-center">スキルも経験も不要。「変わりたい」だけ、連れてこい。</p>
      </m.div>
    </div>
  );
}
