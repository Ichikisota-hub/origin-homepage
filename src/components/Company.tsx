import { motion } from 'motion/react';

export default function Company() {
  return (
    <section id="company" className="py-16 md:py-32 bg-zinc-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">COMPANY</h2>
          <p className="text-xs md:text-sm text-zinc-400 font-medium tracking-widest">会社概要</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="divide-y divide-white/10">
            {[
              { label: '会社名', value: 'ORIGIN' },
              { label: '設立', value: '2026年3月1日' },
              { label: '代表', value: '仁川　遥斗' },
              { label: '所在地', value: '〒530-0017 大阪府大阪市北区角田町8-47 阪急グランドビル 20F' },
              { label: '事業内容', value: '人材育成事業、営業代理店事業、不動産事業、SNS事業、就活支援事業' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center p-5 md:p-8 hover:bg-white/5 transition-colors">
                <div className="w-full sm:w-1/3 text-xs md:text-sm font-bold text-zinc-500 mb-2 sm:mb-0 tracking-widest">{item.label}</div>
                <div className="w-full sm:w-2/3 text-sm md:text-base font-medium text-zinc-200">{item.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
