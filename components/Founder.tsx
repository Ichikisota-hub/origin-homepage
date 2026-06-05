'use client';
import { m, motion } from 'motion/react';

export default function Founder() {
  return (
    <section className="py-16 md:py-32 bg-white text-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs text-gray-500 font-bold tracking-[0.25em] mb-4">FOUNDER STORY</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter">代表ストーリー</h2>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Stats card */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Profile */}
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-2xl font-black text-white flex-shrink-0">
                仁
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold tracking-widest mb-1">FOUNDER & CEO</p>
                <p className="text-xl md:text-2xl font-black text-white tracking-tight">仁川　遥斗</p>
              </div>
            </div>

            {/* Stat numbers */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              {[
                { num: '19', unit: '歳', label: '当時の年齢' },
                { num: '2', unit: 'ヶ月', label: 'トップに立つまで' },
                { num: '120', unit: '万円', label: '月収（学生時）' },
              ].map((s, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 text-center"
                >
                  <p className="text-2xl md:text-3xl font-black text-white leading-none">
                    {s.num}<span className="text-sm md:text-base ml-0.5">{s.unit}</span>
                  </p>
                  <p className="text-[10px] text-gray-500 font-medium mt-2 tracking-wide">{s.label}</p>
                </m.div>
              ))}
            </div>

            {/* Quote */}
            <m.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative border-l-2 border-gray-300 pl-6 py-2"
            >
              <p className="text-lg md:text-xl font-black text-white leading-relaxed mb-3">
                「自分にとって一番、<br />居心地の悪い環境に行け」
              </p>
              <p className="text-xs text-gray-500 font-medium tracking-wide">── 仁川が人生を変えた一行</p>
            </m.blockquote>
          </m.div>

          {/* Story text */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 md:p-10 overflow-hidden">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium mb-6">
                19歳。人見知りだった俺が、<span className="text-white font-black">たった2ヶ月で営業会社のトップに立った。</span>
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                本で読んだ一行が、すべてを変えた。<br />
                「居心地の悪い環境に飛び込む」という選択が、<br />
                俺の人生を180度動かした。
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                人生は、<span className="text-white font-black">1年で変わる。</span><br />
                それを全員に味わってほしくて、Kaikaを作った。
              </p>
            </div>

            {/* Founder message */}
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <p className="text-xs text-gray-500 font-bold tracking-widest mb-5">A MESSAGE FROM FOUNDER</p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                大学生のうちは、なんとなくでいいと思ってた。<br />
                でも、社会に出る日は、必ず来る。<br />
                その日までに、<span className="text-white font-black">「本気で、やりたいこと」を、見つけてから出ろ。</span>
              </p>
              <p className="text-gray-500 text-xs font-bold tracking-widest mt-6">── 仁川　遥斗</p>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
