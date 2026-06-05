'use client';
import { m, motion } from 'motion/react';
import { Briefcase, Rocket, Star, ArrowRight } from 'lucide-react';

const paths = [
  {
    exit: 'EXIT A',
    label: '就職',
    sublabel: 'Career',
    icon: Briefcase,
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.25)',
    desc: '人材紹介で優良企業とマッチング。実績つきで、勝ちにいける。',
    detail: 'Kaikaでの実践経験が、即戦力人材としての評価につながる。',
  },
  {
    exit: 'EXIT B',
    label: '独立・起業',
    sublabel: 'Entrepreneur',
    icon: Rocket,
    gradient: 'from-orange-500 to-rose-500',
    glow: 'rgba(249,115,22,0.28)',
    desc: '起業支援あり。自分の事業をゼロから立ち上げる。',
    detail: '事業経験・人脈・ノウハウを活かして、自分の会社を作る。',
  },
  {
    exit: 'EXIT C',
    label: '幹部として残る',
    sublabel: 'Lead Internal',
    icon: Star,
    gradient: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.28)',
    desc: '事業部を率いる側へ。新事業の立ち上げを自分で担う。',
    detail: '次世代の学生を育て、Kaikaを関西から日本全国に広げる。',
  },
];

export default function CareerPaths() {
  return (
    <section id="paths" className="py-16 md:py-32 bg-white text-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-60 bg-white blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs text-gray-500 font-bold tracking-[0.25em] mb-4">NEXT STEP</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            Kaikaは、ゴールじゃない。
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            ここから、どこへでも飛べる。<br />選択肢を増やしてから、人生を選ぶ。
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {paths.map((path, index) => (
            <m.div
              key={path.exit}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white border border-gray-200 p-8 md:p-10 rounded-2xl overflow-hidden hover:bg-white transition-all duration-400 hover:border-gray-300"
              style={{ '--glow': path.glow } as React.CSSProperties}
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${path.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Inner glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ boxShadow: `inset 0 0 50px ${path.glow}` }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${path.gradient}`}
                    style={{ boxShadow: `0 6px 20px ${path.glow}` }}>
                    <path.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-gray-500">{path.exit}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white mb-1">{path.label}</h3>
                <p className="text-[10px] text-gray-500 font-bold tracking-widest mb-5">{path.sublabel}</p>
                <p className="text-gray-700 text-sm font-bold leading-relaxed mb-4">{path.desc}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{path.detail}</p>
              </div>
            </m.div>
          ))}
        </div>

        {/* Bottom note */}
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-gray-500 text-xs font-medium mt-10 flex items-center justify-center gap-2"
        >
          <ArrowRight className="w-3 h-3" />
          それが、当たり前になるべきだ。
        </m.p>
      </div>
    </section>
  );
}
