'use client';
import { m, motion } from 'motion/react';

const items = [
  { num: '01', text: '今の自分を、変えたい人' },
  { num: '02', text: '大学生活、このままじゃダメだと気づいている人' },
  { num: '03', text: '稼ぎたい。でもそれ以上に、成長したい人' },
  { num: '04', text: '仲間と、本気で何かを成し遂げたい人' },
];

export default function Requirements() {
  return (
    <section className="py-16 md:py-32 bg-white text-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-orange-600/6 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs text-gray-500 font-bold tracking-[0.25em] mb-4">WHO WE WANT</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            こんな人を、待ってる。
          </h2>
          <p className="text-gray-500 text-sm font-medium">スキルも経験も、いらない。「変わりたい」だけ、連れてこい。</p>
        </m.div>

        <div className="space-y-4 mb-14">
          {items.map((item, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-6 bg-white border border-gray-200 p-6 md:p-8 rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-300"
            >
              <span className="text-2xl md:text-3xl font-black text-gray-200 group-hover:text-gray-800 transition-colors flex-shrink-0 font-mono">
                {item.num}
              </span>
              <p className="text-base md:text-lg font-black text-white">{item.text}</p>
            </m.div>
          ))}
        </div>

        {/* Journey: 種→土→芽→花 */}
        <m.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-8 md:p-12 overflow-hidden text-center"
        >
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <p className="text-xs text-gray-500 font-bold tracking-[0.25em] mb-8">THE KAIKA JOURNEY — 人が、咲くまで。</p>
          <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto mb-6">
            {[
              { kanji: '種', en: 'SEED', desc: '可能性', sub: '誰もが持っている' },
              { kanji: '土', en: 'SOIL', desc: '環境', sub: '俺たちが用意する' },
              { kanji: '芽', en: 'SPROUT', desc: '成長', sub: '本気で動き始める' },
              { kanji: '花', en: 'BLOOM', desc: '開花', sub: '人生が変わる瞬間' },
            ].map((stage, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex flex-col items-center"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-lg md:text-2xl font-black text-white mb-2 md:mb-3">
                  {stage.kanji}
                </div>
                <p className="text-[9px] md:text-[10px] font-bold text-gray-700 tracking-widest mb-1">{stage.en}</p>
                <p className="text-xs font-black text-white mb-1">{stage.desc}</p>
                <p className="text-[9px] text-gray-500 font-medium leading-tight hidden md:block">{stage.sub}</p>
              </m.div>
            ))}
          </div>
          <p className="text-gray-500 text-xs font-medium">君の花は、どこで、どう咲かせる？</p>
        </m.div>
      </div>
    </section>
  );
}
