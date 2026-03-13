import { motion } from 'motion/react';
import { Building2, Rocket, Star } from 'lucide-react';

const paths = [
  {
    title: '企業への就職',
    description: 'ORIGINで磨いた実力と実績を武器に、優良企業へ。「即戦力人材」として評価される。',
    icon: Building2,
  },
  {
    title: '起業する',
    description: 'ORIGINと協力して起業。事業経験・人脈・ノウハウを活かして、自分の事業を始める。',
    icon: Rocket,
  },
  {
    title: 'ORIGIN幹部',
    description: 'ORIGINの核となるリーダーとして、組織を拡大する。次世代の学生を育てる側になる。',
    icon: Star,
  },
];

export default function CareerPaths() {
  return (
    <section id="paths" className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-tighter text-slate-900">
            ORIGIN卒業後の進路
          </h2>
          <p className="text-base md:text-xl text-slate-600 font-medium">
            「全員を同じ道に乗せる」のではなく、その人に合った最適な道へ導く。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-slate-50 rounded-3xl md:rounded-[2rem] p-8 md:p-12 hover:bg-slate-900 hover:text-white transition-colors duration-500 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white group-hover:bg-slate-800 flex items-center justify-center mb-8 md:mb-10 transition-colors duration-500 shadow-sm">
                <path.icon className="h-8 w-8 md:h-10 md:w-10 text-slate-900 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6">{path.title}</h3>
              <p className="text-sm md:text-base text-slate-600 group-hover:text-slate-300 leading-relaxed font-medium transition-colors duration-500">
                {path.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
