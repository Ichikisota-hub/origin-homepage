import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="relative w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Corporate Office" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6">
            PRACTICAL BUSINESS ORGANIZATION
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 leading-[1.1]">
            君の可能性を、<br />
            開花させる場所。
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 font-medium mb-10 max-w-xl leading-relaxed">
            「何か変わりたい」「稼ぐ力をつけたい」学生へ。ORIGINは実践的なビジネス経験を通じて、就職・起業で通用する圧倒的な実力を身につける組織です。
          </p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling-modal'))}
            className="group flex items-center justify-center w-full sm:w-auto gap-4 bg-white text-black px-8 py-4 font-bold text-sm tracking-widest hover:bg-zinc-200 transition-colors duration-300 rounded-full"
          >
            <span>CONTACT US</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
