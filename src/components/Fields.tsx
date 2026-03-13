import { motion } from 'motion/react';
import { Megaphone, Home, Laptop } from 'lucide-react';

const fields = [
  {
    title: '通信営業事業',
    icon: Megaphone,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    points: [
      '訪問営業を通じた実践型育成',
      '営業力・行動力・メンタルを鍛える',
      '成果が数字で見える環境'
    ]
  },
  {
    title: '不動産事業',
    icon: Home,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    points: [
      '賃貸仲介を通じたビジネス経験',
      '提案力・交渉力・信頼構築力を磨く',
      '賃貸市場のリアルなビジネス感覚'
    ]
  },
  {
    title: 'SNS事業',
    icon: Laptop,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    points: [
      'コンテンツ企画・運用・分析',
      'マーケティング思考を実践で学ぶ',
      'ブランディングとデータ分析のスキル'
    ]
  }
];

export default function Fields() {
  return (
    <section className="py-16 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-tighter text-slate-900">
            実践の場：3つの事業フィールド
          </h2>
          <p className="text-base md:text-xl text-slate-600 font-medium">
            あなたの適性に合ったフィールドで、実践経験を積むことができます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {fields.map((field, index) => (
            <motion.div
              key={field.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 md:p-12 rounded-3xl md:rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="mb-8 md:mb-10">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center ${field.bg}`}>
                  <field.icon className={`w-8 h-8 md:w-10 md:h-10 ${field.color}`} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 text-slate-900">{field.title}</h3>
              <ul className="space-y-4 md:space-y-5">
                {field.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4 text-slate-700 font-medium">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-900 flex-shrink-0"></div>
                    <span className="leading-relaxed text-sm md:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
