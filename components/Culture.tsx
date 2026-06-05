'use client';
import { m, motion } from 'motion/react';
import { PartyPopper, Calendar, Trophy } from 'lucide-react';

const halfYearEvents = [
  {
    title: 'ヴィラ貸切り',
    desc: '淡路島 一泊二日',
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&q=80',
  },
  {
    title: '海辺のBBQ',
    desc: '最高の景色で仲間と乾杯',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&q=80',
  },
  {
    title: 'クラブ貸切り',
    desc: '1フロア全部俺たちのもの',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop&q=80',
  },
  {
    title: '極上ディナー',
    desc: '優秀者限定 高級店コース',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&q=80',
  },
];

export default function Culture() {
  return (
    <section className="py-16 md:py-32 bg-white text-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs text-gray-500 font-bold tracking-[0.25em] mb-4">CULTURE</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            成果を出した者が、<br />最も享受する。
          </h2>
          <p className="text-gray-500 text-sm font-medium">報酬も、体験も、結果に正直に分配される。</p>
        </m.div>

        {/* Event rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16">
          {[
            {
              icon: Calendar,
              freq: 'MONTHLY',
              title: '月1回',
              items: ['優秀者ディナー', 'キャンペーン表彰'],
              color: 'text-blue-400',
              bg: 'bg-blue-900/15',
              border: 'border-blue-700/25',
            },
            {
              icon: PartyPopper,
              freq: 'HALF YEAR',
              title: '半年に1回',
              items: ['全員参加の特別体験', '半期最大のオフサイト'],
              color: 'text-violet-400',
              bg: 'bg-violet-900/15',
              border: 'border-violet-700/25',
            },
            {
              icon: Trophy,
              freq: 'DAILY',
              title: '日常',
              items: ['退勤後もチームで動く', 'オンオフ関係なく仲間と'],
              color: 'text-orange-400',
              bg: 'bg-orange-900/15',
              border: 'border-orange-700/25',
            },
          ].map((item, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`${item.bg} border ${item.border} p-7 md:p-9 rounded-2xl group hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className={`text-[10px] font-black tracking-widest ${item.color}`}>{item.freq}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-5">{item.title}</h3>
              <ul className="space-y-2">
                {item.items.map((t, j) => (
                  <li key={j} className="text-gray-700 text-sm font-medium">— {t}</li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>

        {/* Half-year big event breakdown */}
        <m.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-8 md:p-14 overflow-hidden"
        >
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <p className="text-xs text-gray-500 font-bold tracking-[0.25em] mb-2">HALF-YEAR BIG EVENT</p>
          <p className="text-xl md:text-2xl font-black text-white mb-8">
            半年に一度、全員で、<br />本気ではっちゃける。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {halfYearEvents.map((ev, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:bg-white transition-colors duration-300"
              >
                <div className="w-full h-28 rounded-xl overflow-hidden mb-3">
                  <img src={ev.img} alt={ev.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <p className="text-sm font-black text-white mb-1">{ev.title}</p>
                <p className="text-[10px] text-gray-500 font-medium leading-relaxed">{ev.desc}</p>
              </m.div>
            ))}
          </div>
          <p className="text-gray-500 text-xs font-medium mt-8 text-center">
            Kaikaでの実績だけが、参加資格になる。
          </p>
        </m.div>
      </div>
    </section>
  );
}
