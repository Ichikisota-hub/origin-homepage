import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const requirements = [
  '「何か変わりたい」と思っている人',
  '「自分の強みを見つけたい」人',
  '「周りと差をつけたい」人',
  '「稼ぐ力を身につけたい」人',
  '「本気の仲間がほしい」人',
  '「将来、起業やリーダーを目指したい」人',
];

export default function Requirements() {
  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tighter">
            こんな人を待っている
          </h2>
          <p className="text-base md:text-xl text-orange-600 font-bold">
            経験もスキルも不要。必要なのは「本気」だけ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-50 p-6 md:p-8 rounded-2xl flex items-center gap-4"
            >
              <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-orange-500 flex-shrink-0" />
              <span className="text-base md:text-lg font-bold text-slate-800">{req}</span>
            </motion.div>
          ))}
        </div>
        
        <p className="text-sm md:text-base text-slate-500 font-medium text-center">
          ※ 学部・学年不問。経験ゼロでOKです。
        </p>
      </div>
    </section>
  );
}
