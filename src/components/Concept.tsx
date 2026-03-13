import { motion } from 'motion/react';

export default function Concept() {
  return (
    <section id="concept" className="py-16 md:py-32 bg-zinc-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs md:text-sm text-zinc-400 font-medium tracking-widest mb-4">CONCEPT</p>
            <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 tracking-tighter text-white leading-tight">
              学生の可能性を見つけて、<br />
              育てる場所。
            </h2>
            <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-medium mb-8">
              「紹介するだけ」の一般的な人材会社とは違います。<br />
              可能性の発見から、育成、実践、そして進路の最適化までを一貫して行う。<br />
              それがORIGINの本質です。
            </p>
            
            <div className="space-y-4 md:space-y-6 mb-8">
              <div className="bg-zinc-900/50 border border-white/10 p-5 md:p-6 rounded-2xl">
                <p className="text-xs md:text-sm text-zinc-500 mb-2 font-bold tracking-widest">一般的な人材会社</p>
                <p className="text-base md:text-lg font-bold text-zinc-400">人材 <span className="mx-2 md:mx-4">→</span> 企業に紹介</p>
              </div>
              <div className="bg-white/5 border border-white/20 p-5 md:p-6 rounded-2xl">
                <p className="text-xs md:text-sm text-white mb-2 font-bold tracking-widest">ORIGIN</p>
                <p className="text-lg md:text-xl font-black text-white flex flex-wrap items-center gap-y-2">
                  発見 <span className="text-zinc-500 mx-2 md:mx-3">→</span> 育成 <span className="text-zinc-500 mx-2 md:mx-3">→</span> 実践 <span className="text-zinc-500 mx-2 md:mx-3">→</span> 進路
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[300px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Team discussing business strategy" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Purpose & Vision */}
        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl md:rounded-3xl p-8 md:p-16 lg:p-24 text-white mt-12 md:mt-20">
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
                <p className="text-xs md:text-sm text-zinc-400 font-bold tracking-widest mb-4 md:mb-6">ORIGINの存在理由</p>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tighter">
                  人の可能性を最大化し、<br />
                  実力が正しく評価される<br />
                  社会をつくる。
                </h3>
              </motion.div>
              
              <div className="w-full h-px bg-white/10"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xs md:text-sm text-zinc-400 font-bold tracking-widest mb-4 md:mb-6">VISION</p>
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tighter text-zinc-400">
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
