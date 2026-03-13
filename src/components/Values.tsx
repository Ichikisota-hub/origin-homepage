import { motion } from 'motion/react';
import { Rocket, TrendingUp, Users, Briefcase } from 'lucide-react';

const values = [
  {
    title: '実践的なビジネス経験',
    description: '教科書では学べない、リアルなビジネスの現場を体験する。',
    icon: Rocket,
  },
  {
    title: '稼ぐ力',
    description: '実際に収入を得ながら、「価値を生み出す力」を身につける。',
    icon: TrendingUp,
  },
  {
    title: '同じ志を持つ仲間',
    description: '「成長したい」「何かを成し遂げたい」という仲間と出会える。',
    icon: Users,
  },
  {
    title: 'キャリアの選択肢',
    description: '就職・起業・ORIGIN幹部など、自分に合った道を選べる。',
    icon: Briefcase,
  },
];

export default function Values() {
  return (
    <section className="py-16 md:py-32 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            VALUES
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 font-medium tracking-widest">
            ORIGINで得られる4つの価値
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-900/50 border border-white/10 p-6 md:p-10 rounded-2xl flex flex-col sm:flex-row gap-5 md:gap-8 items-start hover:bg-zinc-900 transition-colors duration-300"
            >
              <div className="flex-shrink-0 text-white bg-white/5 border border-white/10 p-4 rounded-xl">
                <value.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-black text-white mb-2 md:mb-3 leading-tight">
                  {value.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed font-medium text-xs md:text-sm">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
