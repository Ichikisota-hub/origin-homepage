import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-white text-black text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 md:mb-10">
            ORIGIN
          </h2>
          <p className="text-xl md:text-3xl font-black mb-8 md:mb-12 leading-tight">
            君の可能性は、<br className="md:hidden" />まだ開花していない。
          </p>
          <div className="text-sm md:text-base text-zinc-600 mb-10 md:mb-16 leading-relaxed font-medium">
            まずは話を聞きに来てください。<br />
            「興味がある」だけで十分です。
          </div>
          
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling-modal'))}
            className="group inline-flex items-center justify-center gap-4 bg-black text-white px-8 md:px-12 py-4 md:py-5 font-bold text-sm md:text-base tracking-widest rounded-full hover:bg-zinc-800 transition-colors duration-300 w-full sm:w-auto shadow-2xl"
          >
            <span>CONTACT US</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
