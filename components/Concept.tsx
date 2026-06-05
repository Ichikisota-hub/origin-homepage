'use client';
import { m, motion } from 'motion/react';
import { X, Check } from 'lucide-react';

const partTimeProblems = ['成長しない', '裁量権がない', 'やってて将来が見えない'];
const internProblems = ['お金が稼げない', '何してるかわからん', '始めるハードルが高い'];
const kaikaSolutions = ['始めやすい', 'ガチで稼げる', '人生が動く'];

export default function Concept() {
  return (
    <section id="concept" className="py-16 md:py-32 bg-white text-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section label */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs text-gray-500 font-bold tracking-[0.25em] mb-4">WHY KAIKA</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
            なぜ、バイトも<br className="sm:hidden" />インターンも、<br />
            「中途半端」なのか。
          </h2>
        </m.div>

        {/* Problem comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* バイト */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-gray-200 p-7 md:p-10 rounded-2xl"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-gray-500 mb-5">バイト — Part-time Job</p>
            <ul className="space-y-4">
              {partTimeProblems.map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-semibold text-sm md:text-base">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </m.div>

          {/* Center arrow */}
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative bg-gray-900 text-white p-6 md:p-8 rounded-2xl md:rounded-3xl text-center shadow-md w-full md:w-auto">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-black tracking-widest px-4 py-1 rounded-full">
                KAIKA
              </div>
              <p className="text-sm font-black tracking-tight mb-4 pt-2">その「間」を埋めに来た。</p>
              <ul className="space-y-2">
                {kaikaSolutions.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 font-black text-sm justify-center">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </m.div>

          {/* インターン */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-gray-200 p-7 md:p-10 rounded-2xl"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-gray-500 mb-5">インターン — Internship</p>
            <ul className="space-y-4">
              {internProblems.map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-semibold text-sm md:text-base">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </m.div>
        </div>

        {/* Mission */}
        <m.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-10 md:p-20 lg:p-28 text-center overflow-hidden mt-12 md:mt-20"
        >
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="text-xs md:text-sm text-gray-500 font-bold tracking-[0.3em] mb-8">MISSION</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
            人の、可能性を。
            <br />
            <span className="text-gray-700">咲かせる。</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            なんとなくの就活をやめろ。夢中になれるものを見つけろ。<br />
            実力が正しく評価される場所を、俺たちが作る。<br />
            若者が本気になれば、日本は強くなる。
          </p>

          {/* Vision numbers */}
          <div className="mt-14 md:mt-20 grid grid-cols-2 gap-6 max-w-lg mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs text-gray-500 font-bold tracking-widest mb-2">REVENUE TARGET</p>
              <p className="text-3xl md:text-4xl font-black text-white">300<span className="text-lg ml-1">億円</span></p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs text-gray-500 font-bold tracking-widest mb-2">MARKET CAP</p>
              <p className="text-3xl md:text-4xl font-black text-white">1,000<span className="text-lg ml-1">億円</span></p>
            </div>
          </div>
          <p className="text-gray-500 text-xs font-medium mt-6 tracking-wide">関西から、日本全国へ。そして世界へ。</p>
        </m.div>
      </div>
    </section>
  );
}
