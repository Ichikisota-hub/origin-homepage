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
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
            ORIGINで得られる4つの価値
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-50 p-8 md:p-12 rounded-3xl md:rounded-[2rem] flex flex-col sm:flex-row gap-6 md:gap-8 items-start"
            >
              <div className="flex-shrink-0 text-orange-600 bg-white p-4 rounded-2xl shadow-sm">
                <value.icon className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4 leading-tight">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
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
