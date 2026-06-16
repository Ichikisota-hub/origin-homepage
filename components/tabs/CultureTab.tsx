'use client';
import { m } from 'motion/react';
import { Calendar, Award, Users } from 'lucide-react';

const rhythm = [
  {
    icon: Award,
    freq: 'MONTHLY',
    title: '毎月',
    items: ['優秀者ディナー', 'キャンペーン表彰'],
    color: '#c8a84b',
  },
  {
    icon: Calendar,
    freq: 'HALF YEAR',
    title: '半年ごと',
    items: ['全員参加の特別オフサイト', '半期最大のチーム体験'],
    color: '#888',
  },
  {
    icon: Users,
    freq: 'DAILY',
    title: '日常',
    items: ['退勤後もチームで行動', 'オンオフ関係なく、仲間と共に'],
    color: '#666',
  },
];

const events = [
  { num: '01', title: 'ヴィラ貸切り',  place: '淡路島 一泊二日' },
  { num: '02', title: '海辺のBBQ',     place: 'チームで過ごす夏' },
  { num: '03', title: 'クラブ貸切り',  place: '1フロア完全貸切' },
  { num: '04', title: '高級店ディナー', place: '優秀者限定コース' },
];

export default function CultureTab() {
  return (
    <div className="s-section s-container">

      {/* ヘッダー */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <span className="font-display text-[10px] font-bold tracking-[0.28em] text-[#c8a84b] block mb-4">CULTURE</span>
        <h2 className="font-mincho text-[#111]" style={{ fontSize: 'clamp(1.4rem,5vw,3.4rem)', fontWeight: 700, letterSpacing: '0.01em', lineHeight: 1.2 }}>
          成果を出した人が、<br className="hidden sm:block" />最も享受する。
        </h2>
        <p className="font-mincho text-[#666] mt-4" style={{ fontSize: '15px', letterSpacing: '0.04em', lineHeight: 1.8 }}>
          報酬も、体験も、結果に正直に分配されます。
        </p>
      </m.div>

      {/* リズムカード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {rhythm.map((r, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border border-black/8 rounded-xl p-7"
            style={{ background: '#fff' }}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <r.icon className="w-4 h-4" style={{ color: r.color }} />
              <span className="font-display text-[10px] font-bold tracking-[0.2em]" style={{ color: r.color }}>{r.freq}</span>
            </div>
            <h3 className="font-mincho text-[#111] mb-5" style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.02em' }}>{r.title}</h3>
            <ul className="space-y-2">
              {r.items.map((item, j) => (
                <li key={j} className="text-[#666]" style={{ fontSize: '13px', letterSpacing: '0.03em' }}>
                  <span className="mr-2 text-[#c8a84b]">—</span>{item}
                </li>
              ))}
            </ul>
          </m.div>
        ))}
      </div>

      {/* ビッグイベント */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-[#111] rounded-xl p-8 md:p-12"
      >
        <span className="font-display text-[10px] font-bold tracking-[0.28em] text-[#c8a84b] block mb-3">HALF-YEAR BIG EVENT</span>
        <p className="font-mincho text-white mb-10" style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '0.03em', lineHeight: 1.4 }}>
          半年に一度、全員で本気の体験をします。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {events.map((ev, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
              className="rounded-lg p-5"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <span className="font-display text-[#c8a84b] block mb-3" style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em' }}>{ev.num}</span>
              <p className="font-mincho text-white mb-1" style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.03em' }}>{ev.title}</p>
              <p className="font-display text-[#555]" style={{ fontSize: '11px', letterSpacing: '0.06em', fontWeight: 600 }}>{ev.place}</p>
            </m.div>
          ))}
        </div>
      </m.div>
    </div>
  );
}
