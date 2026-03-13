import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-end md:items-center bg-white overflow-hidden pt-20 pb-6 md:pb-0">
      <div className="absolute inset-0 z-0 w-full h-full p-3 md:p-8">
        <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Team" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/95 backdrop-blur-md md:bg-white p-8 md:p-16 max-w-3xl rounded-3xl shadow-2xl mb-4 md:mb-0"
        >
          <p className="text-orange-600 font-bold tracking-widest uppercase text-xs md:text-base mb-4 md:mb-6">
            ORIGIN 採用説明会 2026
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-8 md:mb-10 leading-[1.15]">
            君の可能性を、<br />
            開花させる場所。
          </h1>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling-modal'))}
            className="group flex items-center justify-center w-full md:w-auto gap-4 bg-slate-900 text-white px-8 py-4 font-bold text-base md:text-lg hover:bg-orange-600 transition-colors duration-300 rounded-full"
          >
            <span>説明会に参加する</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
