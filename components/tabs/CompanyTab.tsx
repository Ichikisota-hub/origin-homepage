'use client';
import { m } from 'motion/react';

const rows = [
  { label: '会社名', value: '株式会社Kaika' },
  { label: '設立', value: '2026年3月1日' },
  { label: '代表', value: '仁川　遥斗' },
  { label: '所在地', value: '〒530-0017 大阪府大阪市北区角田町8-47 阪急グランドビル 20F' },
  { label: '事業内容', value: '通信・営業事業、不動産事業、AI業務改善事業、海外事業' },
];

const members = [
  { role: '副代表', title: '市來　颯太', photo: '/photo-vice.jpg' },
  { role: '代表', title: '仁川　遥斗', photo: '/photo-ceo.jpg' },
];

export default function CompanyTab() {
  return (
    <div className="s-section s-container">

      {/* 代表・副代表 */}
      <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
        <p className="text-xs font-bold tracking-[0.25em] text-gray-500 mb-3">TEAM</p>
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 mb-10">代表・副代表</h2>
        {/* 共同写真（フル幅） */}
        <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-8 rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photo-founders.jpg" alt="代表・副代表" className="w-full object-cover" style={{ maxHeight: '600px', objectPosition: '50% 45%' }} />
        </m.div>

        {/* 名前のみ */}
        <div className="grid grid-cols-2 gap-4">
          {members.map((member, i) => (
            <m.div key={i}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-5 text-center"
            >
              <span className="text-[10px] font-bold tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-3 inline-block">
                {member.role}
              </span>
              <p className="text-base font-black text-gray-900">{member.title}</p>
            </m.div>
          ))}
        </div>
      </m.div>

      {/* 会社概要テーブル */}
      <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <p className="text-xs font-bold tracking-[0.25em] text-gray-500 mb-3">COMPANY INFO</p>
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 mb-8">会社概要</h2>
        <div className="overflow-hidden rounded-2xl border border-gray-200 divide-y divide-gray-100">
          {rows.map((item, i) => (
            <m.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-center p-5 md:p-7 bg-white hover:bg-gray-50 transition-colors">
              <div className="w-full sm:w-1/4 text-xs font-bold text-gray-500 mb-2 sm:mb-0 tracking-widest">{item.label}</div>
              <div className="w-full sm:w-3/4 text-sm md:text-base font-medium text-gray-800">{item.value}</div>
            </m.div>
          ))}
        </div>
      </m.div>
    </div>
  );
}
