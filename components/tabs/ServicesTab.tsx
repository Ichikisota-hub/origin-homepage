'use client';
import { m } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { services } from '@/lib/services';

const nums = ['01','02','03','04'];

/* AI感のないリアル写真（Unsplash） */
const serviceImages: Record<string, string> = {
  origin:       'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
  'real-estate':'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop',
  ai:           'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
  global:       'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop',
};

export default function ServicesTab() {
  return (
    <div className="s-section s-container">
      <m.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="mb-14">
        <span className="block t-label text-[#c8a84b] mb-4">WHAT WE DO</span>
        <h2 className="font-black tracking-tight text-[#111] leading-none" style={{fontSize:'clamp(2.4rem,5vw,4rem)'}}>4つの事業</h2>
        <p className="text-sm text-[#888] mt-3">各カードをクリックすると詳細へ。</p>
      </m.div>

      <div className="space-y-4">
        {services.map((service, i) => (
          <m.div key={service.slug} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:i*0.08}}>
            <Link href={`/services/${service.slug}`}
              className="group flex items-center gap-5 md:gap-8 bg-white border border-black/7 rounded-2xl px-5 py-4 md:px-7 md:py-5 hover:border-[#c8a84b]/40 hover:shadow-lg transition-all duration-300 overflow-hidden">

              {/* 番号 */}
              <span className="font-black text-[#e8e4da] text-3xl md:text-4xl leading-none flex-shrink-0 w-10 text-right font-mono">{nums[i]}</span>

              {/* 写真サムネイル */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={serviceImages[service.slug]}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="80px"
                />
              </div>

              {/* テキスト */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#bbb] mb-1">{service.tag}</p>
                <h3 className="text-lg md:text-xl font-black text-[#111] tracking-tight leading-tight">{service.name}</h3>
                <p className="text-sm text-[#777] mt-1 leading-relaxed hidden md:block">{service.catchcopy}</p>
              </div>

              <ArrowUpRight className="w-5 h-5 text-[#ccc] group-hover:text-[#c8a84b] transition-colors flex-shrink-0" />
            </Link>
          </m.div>
        ))}
      </div>
    </div>
  );
}
