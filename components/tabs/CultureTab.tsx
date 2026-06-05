'use client';
import { m } from 'motion/react';
import { Calendar, PartyPopper, Trophy } from 'lucide-react';

const events = [
  { emoji: '🏝️', title: 'ヴィラ貸切り', desc: '淡路島 一泊二日' },
  { emoji: '🔥', title: '海辺のBBQ', desc: '最高の景色で仲間と乾杯' },
  { emoji: '🎵', title: 'クラブ貸切り', desc: '1フロア全部俺たちのもの' },
  { emoji: '🥂', title: '極上ディナー', desc: '優秀者限定 高級店コース' },
];

const rhythm = [
  { icon: Calendar, freq: 'MONTHLY', title: '月1回', items: ['優秀者ディナー', 'キャンペーン表彰'], color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  { icon: PartyPopper, freq: 'HALF YEAR', title: '半年に1回', items: ['全員参加の特別体験', '半期最大のオフサイト'], color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100' },
  { icon: Trophy, freq: 'DAILY', title: '日常', items: ['退勤後もチームで動く', 'オンオフ関係なく仲間と'], color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' },
];

export default function CultureTab() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
        <p className="text-xs font-bold tracking-[0.25em] text-gray-500 mb-3">CULTURE</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900">成果を出した者が、最も享受する。</h2>
        <p className="text-gray-700 mt-3 text-sm">報酬も、体験も、結果に正直に分配される。</p>
      </m.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {rhythm.map((r, i) => (
          <m.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`${r.bg} border ${r.border} p-7 rounded-2xl`}>
            <div className="flex items-center gap-2 mb-4">
              <r.icon className={`w-4 h-4 ${r.color}`} />
              <span className={`text-[10px] font-black tracking-widest ${r.color}`}>{r.freq}</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">{r.title}</h3>
            <ul className="space-y-1">
              {r.items.map((t, j) => <li key={j} className="text-gray-600 text-sm">— {t}</li>)}
            </ul>
          </m.div>
        ))}
      </div>

      <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
        <p className="text-xs font-bold tracking-[0.25em] text-gray-500 mb-2">HALF-YEAR BIG EVENT</p>
        <p className="text-xl font-black text-gray-900 mb-8">半年に一度、全員で本気の体験をする。</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {events.map((ev, i) => (
            <m.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <p className="text-2xl mb-2">{ev.emoji}</p>
              <p className="text-sm font-black text-gray-900 mb-1">{ev.title}</p>
              <p className="text-[11px] text-gray-500 leading-relaxed">{ev.desc}</p>
            </m.div>
          ))}
        </div>
      </m.div>
    </div>
  );
}
