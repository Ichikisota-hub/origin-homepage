import { motion } from 'motion/react';

export default function Problem() {
  return (
    <section id="problem" className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-32">
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">
            「将来、何がしたい？」
          </h2>
          <p className="text-lg md:text-2xl text-slate-600 font-medium">
            この質問に、自信を持って答えられる学生はどれくらいいるだろう？
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 md:mb-40">
          {[
            { percent: '72%', text: 'の学生が「自分の強みが\nわからない」と感じている' },
            { percent: '65%', text: 'の学生が「将来の方向性が\n決まっていない」' },
            { percent: '58%', text: 'の新卒が「入社後に\nギャップを感じた」' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="text-6xl md:text-8xl font-black text-slate-900 mb-4 md:mb-8 tracking-tighter">{stat.percent}</div>
              <p className="text-base md:text-lg text-slate-600 font-bold whitespace-pre-line leading-relaxed">{stat.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl md:rounded-[3rem] p-8 md:p-20">
          <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-10 md:mb-16 text-center tracking-tighter">
            多くの学生が抱える「3つの壁」
          </h3>
          <div className="space-y-10 md:space-y-12">
            {[
              { title: '自分の強みがわからない', desc: '「何が得意なのか」「どんな適性があるのか」を言語化できないまま就活を迎える。' },
              { title: '将来の方向性が見えない', desc: '「とりあえず大手」という選択。本当にやりたいことを知らないまま社会に出る。' },
              { title: '実践経験が圧倒的に足りない', desc: '学校で学ぶ知識と、社会で求められる実力の間に大きなギャップがある。' }
            ].map((wall, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start"
              >
                <div className="text-3xl font-black text-orange-600 flex-shrink-0">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3">{wall.title}</h4>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">{wall.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 md:mt-24 text-center">
            <p className="text-xl md:text-3xl font-black text-slate-900 tracking-tighter">
              この「壁」を壊すために、<br className="md:hidden" /><span className="text-orange-600">ORIGIN</span>は生まれた。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
