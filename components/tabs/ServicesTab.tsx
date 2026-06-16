'use client';
import { m } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/services';

const nums = ['01', '02', '03', '04'];

export default function ServicesTab() {
  return (
    <div className="s-section s-container">

      {/* ヘッダー */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <span className="font-display text-[10px] font-bold tracking-[0.28em] text-[#c8a84b] block mb-4">WHAT WE DO</span>
        <h2 className="font-mincho text-[#111]" style={{ fontSize: 'clamp(1.4rem,5vw,3.4rem)', fontWeight: 700, letterSpacing: '0.01em', lineHeight: 1.2 }}>
          4つの事業
        </h2>
      </m.div>

      {/* サービスリスト */}
      <div className="space-y-3">
        {services.map((service, i) => (
          <m.div
            key={service.slug}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group flex items-center gap-6 md:gap-10 bg-white border border-black/7 rounded-xl px-6 py-5 md:px-8 md:py-6 hover:border-[#c8a84b]/50 transition-all duration-300"
            >
              {/* 番号 */}
              <span
                className="font-display flex-shrink-0"
                style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ddd', letterSpacing: '-0.02em', width: '2rem', textAlign: 'right' }}
              >
                {nums[i]}
              </span>

              {/* テキスト */}
              <div className="flex-1 min-w-0">
                <p
                  className="font-display block mb-1"
                  style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', color: '#bbb' }}
                >
                  {service.tag}
                </p>
                <h3
                  className="font-mincho text-[#111]"
                  style={{ fontSize: 'clamp(1.1rem,2.5vw,1.4rem)', fontWeight: 700, letterSpacing: '0.02em', lineHeight: 1.3 }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-mincho text-[#888] mt-1.5 hidden md:block"
                  style={{ fontSize: '13px', letterSpacing: '0.03em', lineHeight: 1.7 }}
                >
                  {service.catchcopy}
                </p>
              </div>

              <ArrowUpRight
                className="w-5 h-5 flex-shrink-0 transition-colors duration-300"
                style={{ color: '#ddd' }}
              />
            </Link>
          </m.div>
        ))}
      </div>
    </div>
  );
}
