'use client';
import { m, motion } from 'motion/react';

const rows = [
  { label: '会社名', value: '株式会社Kaika' },
  { label: '設立', value: '2026年3月1日' },
  { label: '代表', value: '仁川　遥斗' },
  { label: '所在地', value: '〒530-0017 大阪府大阪市北区角田町8-47 阪急グランドビル 20F' },
  { label: '事業内容', value: '通信・営業事業（ORIGIN）、不動産事業、AI業務改善事業、海外事業（Global Bridge）、SNS・ライブ配信事業（Media & Live）' },
];

export default function Company() {
  return (
    <section id="company" className="py-16 md:py-32 bg-white text-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-xs text-gray-500 font-bold tracking-[0.25em] mb-4">COMPANY</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-2">会社概要</h2>
          <p className="text-xs text-gray-500 font-medium tracking-widest">株式会社Kaika</p>
        </m.div>

        <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-200 divide-y divide-gray-100">
          {rows.map((item, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row sm:items-center p-5 md:p-8 bg-white hover:bg-white transition-colors duration-300 group"
            >
              <div className="w-full sm:w-1/3 text-[10px] md:text-xs font-bold text-gray-500 mb-2 sm:mb-0 tracking-[0.2em] group-hover:text-gray-900 transition-colors">
                {item.label}
              </div>
              <div className="w-full sm:w-2/3 text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                {item.value}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
