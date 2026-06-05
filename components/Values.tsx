'use client';
import { m, motion } from 'motion/react';
import { Clock, TrendingUp, Zap } from 'lucide-react';
import { SplitText } from './TextEffects';

const modes = [
  {
    id: '01',
    label: '時給制',
    sublabel: 'Hourly',
    icon: Clock,
    color: 'text-gray-700',
    bg: 'bg-gray-100',
    border: 'border-zinc-700/50',
    desc: 'まず、始めてみる。バイト感覚でOK。',
    detail: 'テレアポ・事務・イベント補助など。未経験でもすぐ稼げる。',
  },
  {
    id: '02',
    label: '時給 + 歩合',
    sublabel: 'Hourly + Commission',
    icon: TrendingUp,
    color: 'text-emerald-400',
    bg: 'bg-emerald-900/20',
    border: 'border-emerald-700/30',
    desc: '結果を出した分だけ上乗せ。安定しつつ伸ばせる。',
    detail: '実力を証明しながら、着実に上を目指す。',
    recommended: true,
  },
  {
    id: '03',
    label: '完全歩合',
    sublabel: 'Full Commission',
    icon: Zap,
    color: 'text-orange-400',
    bg: 'bg-orange-900/20',
    border: 'border-orange-700/30',
    desc: '上限なし。ガチで勝負する。',
    detail: '学生で月100万超えも出る。天井は、自分のやる気だけ。',
  },
];

export default function Values() {
  return (
    <section className="py-16 md:py-32 bg-white text-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-green-400/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 text-center"
        >
          <p className="text-xs text-gray-500 font-bold tracking-[0.25em] mb-4">SALARY</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            <SplitText text="報酬は、選べる。" stagger={0.06} />
          </h2>
          <p className="text-gray-500 text-xs md:text-sm font-medium tracking-widest">
            「まず試したい」も「ガチで稼ぎたい」も、両方叶う。
          </p>
        </m.div>

        {/* 3 modes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
          {modes.map((mode, index) => (
            <m.div
              key={mode.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative ${mode.bg} border ${mode.border} p-7 md:p-9 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
            >
              {mode.recommended && (
                <div className="absolute top-4 right-4 bg-emerald-500 text-black text-[10px] font-black tracking-widest px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-black tracking-widest text-gray-500">MODE {mode.id}</span>
              </div>
              <div className={`w-10 h-10 rounded-xl ${mode.bg} border ${mode.border} flex items-center justify-center mb-5`}>
                <mode.icon className={`w-5 h-5 ${mode.color}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-1">{mode.label}</h3>
              <p className="text-[10px] text-gray-500 font-bold tracking-widest mb-5">{mode.sublabel}</p>
              <p className={`text-sm font-bold mb-3 ${mode.color}`}>{mode.desc}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{mode.detail}</p>
            </m.div>
          ))}
        </div>

        {/* Real numbers */}
        <m.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-8 md:p-14 lg:p-16 overflow-hidden"
        >
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <p className="text-xs text-gray-500 font-bold tracking-[0.25em] mb-10 text-center md:text-left">REALITY — 学生で、いくら稼げるのか。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <p className="text-xs text-gray-500 font-bold tracking-widest mb-3">当たり前ライン</p>
              <div className="flex items-end gap-2">
                <span className="text-5xl md:text-6xl font-black text-white">20–30</span>
                <span className="text-xl font-black text-gray-700 mb-2">万円<span className="text-sm ml-1">/月</span></span>
              </div>
              <p className="text-gray-500 text-xs mt-3">ほとんどのメンバーが、ここに届く。</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold tracking-widest mb-3">本気で行くと</p>
              <div className="flex items-end gap-2">
                <span className="text-5xl md:text-6xl font-black shimmer-text">50–100</span>
                <span className="text-xl font-black text-gray-700 mb-2">万円<span className="text-sm ml-1">/月</span></span>
              </div>
              <p className="text-gray-500 text-xs mt-3">代表は19歳のとき、月120万。君にもできる。</p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-xs font-medium text-center tracking-wide">
              + 交通費全支給。案件ごとの特別賞与あり。稼げる額に、天井はない。あるのは、自分のやる気だけ。
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
