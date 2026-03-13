import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-orange-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 md:mb-12">
            ORIGIN
          </h2>
          <p className="text-2xl md:text-5xl font-black mb-8 md:mb-12 leading-tight">
            君の可能性は、<br className="md:hidden" />まだ開花していない。
          </p>
          <div className="text-base md:text-xl text-orange-100 mb-12 md:mb-16 leading-relaxed font-medium">
            まずは話を聞きに来てください。<br />
            「興味がある」だけで十分です。
          </div>
          
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling-modal'))}
            className="group inline-flex items-center justify-center gap-4 bg-white text-orange-600 px-8 md:px-12 py-5 md:py-6 font-black text-lg md:text-xl rounded-full hover:bg-slate-900 hover:text-white transition-colors duration-300 w-full sm:w-auto shadow-2xl"
          >
            <span>説明会に参加する</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
