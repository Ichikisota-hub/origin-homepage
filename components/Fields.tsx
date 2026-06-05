'use client';
import { m, motion } from 'motion/react';
import { Megaphone, Home, Bot, Globe, Smartphone } from 'lucide-react';
import { useState, useRef, type MouseEvent } from 'react';
import { SplitText } from './TextEffects';

const fields = [
  {
    tag: 'ORIGIN',
    title: '通信・営業事業',
    icon: Megaphone,
    gradient: 'from-orange-500 to-rose-500',
    glow: 'rgba(249,115,22,0.25)',
    desc: 'ここで学べるのは、人を動かす力。ゼロから月100万を作る現場。',
    points: ['訪問販売 — 1対1で勝負する王道の営業スタイル', '催事販売 — 商業施設で1日100件叩く', 'テレアポ — アポ→商談の分業モデル'],
  },
  {
    tag: 'Real Estate',
    title: '不動産事業',
    icon: Home,
    gradient: 'from-emerald-400 to-cyan-500',
    glow: 'rgba(52,211,153,0.25)',
    desc: '通信 × 不動産。人の暮らしまるごと、Kaikaが支える。',
    points: ['賃貸仲介 — 関西の若者のファースト契約', '売買 — 投資用・自宅用まで拡大', 'リース — 法人向けで安定収益化'],
  },
  {
    tag: 'DX Acceleration',
    title: 'AI × 業務改善',
    icon: Bot,
    gradient: 'from-blue-500 to-violet-500',
    glow: 'rgba(99,102,241,0.28)',
    desc: '使うだけじゃない、売り込む側に立つ。それがKaika流。',
    points: ['社内業務をAIで圧倒的効率化', 'テレアポ代行・AI営業ツールを商品化', '学生でも圧倒的な生産性を出す環境'],
  },
  {
    tag: 'Global Bridge',
    title: '海外事業',
    icon: Globe,
    gradient: 'from-amber-400 to-orange-500',
    glow: 'rgba(251,191,36,0.22)',
    desc: '関西の学生 × 世界の若者。ここが交差点になる。',
    points: ['外国人留学生×体育会系イベント開催', '集まった人脈をプラットフォーム化', '海外企業と提携し人材・ビジネスの橋を架ける'],
  },
  {
    tag: 'Media & Live',
    title: 'SNS × ライブ配信',
    icon: Smartphone,
    gradient: 'from-pink-500 to-rose-400',
    glow: 'rgba(236,72,153,0.22)',
    desc: '「稼ぐ」も「魅せる」も、全部が武器になる。',
    points: ['TikTokライバー — 顔出し配信でマネタイズ', 'SNS運用代行 — 自社ノウハウをそのまま商品化', 'インフルエンサー育成 — 個人ブランドを在学中に'],
  },
];

function TiltCard({ children, glowColor }: { children: React.ReactNode; glowColor: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -py * 10, y: px * 10 });
  };

  return (
    <div
      ref={ref}
      style={{ perspective: '900px' }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovering(false); }}
    >
      <m.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: hovering ? 1.03 : 1 }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        style={{ transformStyle: 'preserve-3d', boxShadow: hovering ? `0 30px 70px -10px ${glowColor}` : 'none' }}
        className="h-full"
      >
        {children}
      </m.div>
    </div>
  );
}

export default function Fields() {
  return (
    <section id="services" className="py-16 md:py-32 bg-white text-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-60 bg-white blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 text-center"
        >
          <p className="text-xs text-gray-500 font-bold tracking-[0.25em] mb-4">WHAT WE DO</p>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter shimmer-text">
            <SplitText text="5つの事業" stagger={0.06} />
          </h2>
          <p className="text-xs md:text-sm text-gray-500 font-medium tracking-widest">
            Kaikaという幹から、事業部という枝が伸びていく。
          </p>
        </m.div>

        {/* Top 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 mb-5 md:mb-6">
          {fields.slice(0, 3).map((field, index) => (
            <m.div
              key={field.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard glowColor={field.glow}>
                <div className="relative bg-white backdrop-blur-md border border-gray-200 p-7 md:p-9 rounded-3xl h-full overflow-hidden group animate-border-breathe">
                  <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${field.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`} />
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${field.gradient}`}
                      style={{ boxShadow: `0 8px 24px ${field.glow}` }}>
                      <field.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-gray-500">{field.tag}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black mb-3 text-white">{field.title}</h3>
                  <p className="text-gray-500 text-xs mb-5 leading-relaxed">{field.desc}</p>
                  <ul className="space-y-2.5">
                    {field.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 text-xs leading-relaxed">
                        <div className={`mt-1.5 w-1 h-1 rounded-full bg-gradient-to-r ${field.gradient} flex-shrink-0`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </m.div>
          ))}
        </div>

        {/* Bottom 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {fields.slice(3).map((field, index) => (
            <m.div
              key={field.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index + 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard glowColor={field.glow}>
                <div className="relative bg-white backdrop-blur-md border border-gray-200 p-7 md:p-9 rounded-3xl h-full overflow-hidden group animate-border-breathe">
                  <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${field.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`} />
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${field.gradient}`}
                      style={{ boxShadow: `0 8px 24px ${field.glow}` }}>
                      <field.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-gray-500">{field.tag}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black mb-3 text-white">{field.title}</h3>
                  <p className="text-gray-500 text-xs mb-5 leading-relaxed">{field.desc}</p>
                  <ul className="space-y-2.5">
                    {field.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 text-xs leading-relaxed">
                        <div className={`mt-1.5 w-1 h-1 rounded-full bg-gradient-to-r ${field.gradient} flex-shrink-0`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
