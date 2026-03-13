import { motion } from 'motion/react';

const cultures = [
  {
    title: '成果主義',
    description: '実力と結果で評価する。\n年齢も学歴も関係ない。',
  },
  {
    title: '成長主義',
    description: '挑戦する人を評価する。\n失敗も成長の一部。',
  },
  {
    title: '可能性主義',
    description: '人の潜在能力を信じる。\n「まだ見えていない強み」を引き出す。',
  },
  {
    title: '仲間主義',
    description: '仲間と大きなことを成し遂げる。\n一人ではたどり着けない場所へ。',
  },
];

export default function Culture() {
  return (
    <section className="py-16 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900">
            ORIGINのカルチャー
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {cultures.map((culture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 md:p-12 rounded-3xl md:rounded-[2rem] shadow-sm"
            >
              <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 text-slate-900">{culture.title}</h3>
              <p className="text-sm md:text-lg text-slate-600 leading-relaxed whitespace-pre-line font-medium">
                {culture.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
