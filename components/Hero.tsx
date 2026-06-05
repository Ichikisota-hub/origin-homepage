'use client';
import { m, motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';
import { ScrambleText } from './TextEffects';

const benefits = ['始めやすい', 'ガチで稼げる', '可能性が開花する'];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[660px] flex items-center bg-white overflow-hidden ">
      {/* Parallax bg */}
      <m.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop"
          alt="Office"
          fill
          priority
          className="object-cover opacity-10 scale-105"
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </m.div>

      {/* Grid + orbs */}
      <div className="absolute inset-0 z-0 grid-overlay pointer-events-none" />
      <div className="absolute top-[25%] right-[20%] w-[500px] h-[500px] rounded-full bg-amber-400/8 blur-[130px] animate-orb-pulse pointer-events-none" />
      <div className="absolute bottom-[20%] left-[12%] w-[380px] h-[380px] rounded-full bg-amber-300/6 blur-[110px] animate-float-a pointer-events-none" style={{ animationDelay: '-5s' }} />

      <m.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Eyebrow */}
        <m.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-8 h-px bg-white/35" />
          <p className="text-gray-700 font-bold tracking-[0.25em] uppercase text-xs font-mono">
            <ScrambleText text="KAIKA — NEW DEFINITION" delay={0.5} speed={28} />
          </p>
        </m.div>

        {/* Main concept */}
        <div className="overflow-hidden mb-2">
          <m.div
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex items-center gap-4 md:gap-8 flex-wrap"
          >
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 leading-[1]">バイト</span>
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-300 leading-[1]">×</span>
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 leading-[1]">インターン</span>
          </m.div>
        </div>

        <div className="overflow-hidden mb-10">
          <m.p
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
            className="text-lg sm:text-xl md:text-2xl font-black text-gray-700 tracking-tight"
          >
            可能性を、kaikaさせる。
          </m.p>
        </div>

        {/* 3 benefits */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {benefits.map((b, i) => (
            <span key={i} className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-bold text-gray-800 shadow-sm">
              <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              {b}
            </span>
          ))}
        </m.div>

        {/* CTA */}
        <m.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling-modal'))}
            className="group flex items-center justify-center gap-4 bg-gray-900 text-white px-8 py-4 font-bold text-sm tracking-widest rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-md w-full sm:w-auto"
          >
            <span>まず話を聞く</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
          </button>
          <a href="#concept" className="flex items-center justify-center gap-2 px-8 py-4 font-bold text-sm tracking-widest text-gray-700 hover:text-gray-900 transition-colors w-full sm:w-auto">
            詳しく見る
          </a>
        </m.div>
      </m.div>

      {/* Scroll indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <p className="text-gray-500 text-[10px] tracking-[0.3em] font-semibold">SCROLL</p>
        <ChevronDown className="w-4 h-4 text-gray-500 animate-scroll-bounce" />
      </m.div>
    </section>
  );
}
