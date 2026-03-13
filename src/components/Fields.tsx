import { motion } from 'motion/react';
import { Megaphone, Home, Laptop } from 'lucide-react';

const fields = [
  {
    title: '通信営業事業',
    icon: Megaphone,
    gradient: 'from-orange-500 to-rose-500',
    shadow: 'hover:shadow-orange-500/20',
    points: [
      '訪問営業を通じた実践型育成',
      '営業力・行動力・メンタルを鍛える',
      '成果が数字で見える環境'
    ]
  },
  {
    title: '不動産事業',
    icon: Home,
    gradient: 'from-emerald-400 to-cyan-500',
    shadow: 'hover:shadow-emerald-500/20',
    points: [
      '賃貸仲介を通じたビジネス経験',
      '提案力・交渉力・信頼構築力を磨く',
      '賃貸市場のリアルなビジネス感覚'
    ]
  },
  {
    title: 'SNS事業',
    icon: Laptop,
    gradient: 'from-blue-500 to-indigo-500',
    shadow: 'hover:shadow-blue-500/20',
    points: [
      'コンテンツ企画・運用・分析',
      'マーケティング思考を実践で学ぶ',
      'ブランディングとデータ分析のスキル'
    ]
  }
];

export default function Fields() {
  return (
    <section id="services" className="py-16 md:py-32 bg-black text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-white/[0.02] blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">
            SERVICES
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 font-medium tracking-widest">
            3つの事業フィールド
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {fields.map((field, index) => (
            <motion.div
              key={field.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative bg-zinc-900/40 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-zinc-900/80 hover:shadow-2xl ${field.shadow}`}
            >
              {/* Gradient Top Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${field.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`}></div>

              <div className="mb-8">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${field.gradient} shadow-lg`}>
                  <field.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-6 text-white tracking-tight">{field.title}</h3>
              <ul className="space-y-4">
                {field.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-zinc-300 font-medium">
                    <div className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${field.gradient} flex-shrink-0 shadow-sm`}></div>
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
