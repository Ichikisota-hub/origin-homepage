import { motion } from 'motion/react';
import { Lightbulb, TrendingUp, Rocket, Briefcase, ArrowRight, ArrowDown } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: '発見',
    description: '適性診断で自分の強みを知る',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: '育成',
    description: '実際のビジネスでスキルを磨く',
    icon: TrendingUp,
  },
  {
    number: '03',
    title: '実践',
    description: '営業・SNS・不動産などで成果を出す',
    icon: Rocket,
  },
  {
    number: '04',
    title: '進路',
    description: '就職・起業・幹部登用など最適な道へ',
    icon: Briefcase,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tighter">
            ORIGINでの成長ステップ
          </h2>
          <p className="text-xs md:text-sm text-slate-500 font-bold tracking-[0.2em] uppercase">Growth Process</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex"
            >
              <div className={`flex-1 p-8 md:p-6 lg:p-10 rounded-3xl shadow-sm flex flex-col items-center text-center ${index === 0 ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
                <span className={`font-black text-4xl md:text-5xl mb-6 block ${index === 0 ? 'text-white' : 'text-slate-200'}`}>
                  {step.number}
                </span>
                <div className="flex justify-center mb-6">
                  <step.icon className={`w-12 h-12 ${index === 0 ? 'text-orange-500' : 'text-slate-900'}`} />
                </div>
                <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                <p className={`text-base leading-relaxed font-medium ${index === 0 ? 'text-slate-300' : 'text-slate-600'}`}>
                  {step.description}
                </p>
              </div>
              
              {/* Arrow for desktop */}
              {index < 3 && (
                <div className="hidden md:flex absolute -right-3 lg:-right-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center text-slate-300">
                  <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>
              )}
              
              {/* Arrow for mobile */}
              {index < 3 && (
                <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 text-slate-300">
                  <ArrowDown className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
