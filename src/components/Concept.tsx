import { motion } from 'motion/react';

export default function Concept() {
  return (
    <section id="concept" className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter text-slate-900">
              ORIGINとは？
            </h2>
            <p className="text-xl md:text-3xl text-orange-600 font-bold mb-8 md:mb-12 leading-tight">
              学生の可能性を見つけて、<br/>育てる場所。
            </p>
            
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              <div className="bg-slate-50 p-6 md:p-8 rounded-2xl">
                <p className="text-xs md:text-sm text-slate-500 mb-2 font-bold tracking-widest">一般的な人材会社</p>
                <p className="text-lg md:text-xl font-bold text-slate-400">人材 <span className="mx-2 md:mx-4">→</span> 企業に紹介</p>
              </div>
              <div className="bg-orange-50 p-6 md:p-8 rounded-2xl border border-orange-100">
                <p className="text-xs md:text-sm text-orange-600 mb-2 font-bold tracking-widest">ORIGIN</p>
                <p className="text-xl md:text-2xl font-black text-slate-900 flex flex-wrap items-center gap-y-2">
                  発見 <span className="text-orange-400 mx-2 md:mx-3">→</span> 育成 <span className="text-orange-400 mx-2 md:mx-3">→</span> 実践 <span className="text-orange-400 mx-2 md:mx-3">→</span> 進路
                </p>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-slate-600 leading-loose font-medium">
              「紹介するだけ」ではなく、<br />
              「可能性の発見→育成→実践→進路最適化」を一貫して行う。<br />
              <span className="text-slate-900 font-bold">それがORIGINの本質です。</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[400px] md:h-[600px] rounded-3xl md:rounded-[2rem] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Team discussing business strategy" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Purpose & Vision */}
        <div className="bg-slate-900 rounded-3xl md:rounded-[3rem] p-8 md:p-24 text-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                PURPOSE<br className="hidden md:block" />&<br className="hidden md:block" />VISION
              </h2>
            </div>
            <div className="md:col-span-8 space-y-12 md:space-y-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs md:text-sm text-orange-500 font-bold tracking-widest mb-4 md:mb-6">ORIGINの存在理由</p>
                <h3 className="text-2xl md:text-5xl font-black leading-tight tracking-tighter">
                  人の可能性を最大化し、<br />
                  実力が正しく評価される<br />
                  社会をつくる。
                </h3>
              </motion.div>
              
              <div className="w-full h-px bg-slate-700"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xs md:text-sm text-orange-500 font-bold tracking-widest mb-4 md:mb-6">VISION</p>
                <h3 className="text-xl md:text-4xl font-bold leading-tight tracking-tighter text-slate-300">
                  将来的には、人のキャリアを支える<br />
                  <span className="text-white">「キャリアインフラ」</span><br />
                  のような存在になることを目指しています。
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
