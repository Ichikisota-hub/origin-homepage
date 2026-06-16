'use client';
import { m } from 'motion/react';
import { Camera } from 'lucide-react';

/* ══════════════════════════════════════════════
   代表の言葉セクション（スキル準拠）
   ストーリーテリング: 変容（ユーザーの未来像）
   ─ Proof直後 → 感情的共鳴 → 行動へ促す
   ─ ラグジュアリーパターン: 余白=価値、写真>テキスト
══════════════════════════════════════════════ */

const founder = {
  name:    '仁川　遥斗',
  role:    '代表 / Founder & CEO',
  age:     '19歳で月収120万達成',
  quote:   '「自分にとって一番、居心地の悪い環境に行け」',
  message: `大学生のうちは、なんとなくでいいと思ってた。\n\nでも、社会に出る日は、必ず来る。\nその日までに、「本気で、やりたいこと」を、見つけてから出ろ。\n\n人生は、1年で変わる。それを全員に味わってほしくて、Kaikaを作った。`,
  photo: '/photo-ceo.jpg',
};

export default function FounderMessage() {
  return (
    /* ライト背景: 白=高級(Apple流) + テキスト最大コントラスト
       WCAG AA: #111 on #fafaf8 = 19:1 (基準4.5:1の4倍以上) */
    <section className="bg-[#fafaf8] relative overflow-hidden s-section">
      {/* 上部ゴールドライン（アクセント10%） */}
      <div className="absolute top-0 inset-x-0 gold-line" />

      {/* 背景: 暖かいアンバーグロー（控えめ） */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-50/60 blur-[120px]" />
      </div>

      <div className="relative z-10 s-container">

        {/* ── 引用: 全幅・ページの主役 ── */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="t-label text-[#c8a84b] block mb-10">A MESSAGE FROM FOUNDER</span>
          <blockquote>
            <p
              className="font-mincho text-[#111]"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)', fontWeight: 700, lineHeight: 1.3, letterSpacing: '0.02em' }}
            >
              {founder.quote}
            </p>
          </blockquote>
          <span className="block w-20 gold-line mt-12" />
        </m.div>

        {/* ── 下段: メッセージ(左) + 写真(右) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT: 本文 + 署名 */}
          <m.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* 本文: 明朝体で格調高く */}
            <div className="space-y-5 mb-10">
              {founder.message.split('\n\n').map((para, i) => (
                <p key={i} className="font-mincho leading-[2.0]" style={{ color: '#555', fontSize: '17px', letterSpacing: '0.04em' }}>
                  {para.split('\n').map((line, j) => (
                    <span key={j}>{line}{j < para.split('\n').length - 1 && <br />}</span>
                  ))}
                </p>
              ))}
            </div>

            {/* 署名: 明朝体×太字 */}
            <div className="flex items-center gap-4">
              <span className="block w-8 h-[1.5px] bg-[#c8a84b]" />
              <div>
                <p className="font-mincho text-[#111]" style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.05em' }}>{founder.name}</p>
                <p className="font-display mt-1" style={{ fontSize: '10px', color: '#999', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{founder.role}</p>
              </div>
            </div>
          </m.div>

          {/* RIGHT: 写真エリア */}
          <m.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="relative"
          >
            {/* 写真フレーム */}
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 lg:ml-auto rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06)' }}>
              {founder.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={founder.photo} alt={founder.name}
                  className="w-full h-full object-cover" style={{ objectPosition: '50% 8%' }} />
              ) : (
                /* プレースホルダー: 視認できる濃さに */
                <div className="w-full h-full bg-[#f0ede6] flex flex-col items-center justify-center gap-4 border-2 border-dashed border-[#d4b86a]/40">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-dashed border-[#c8a84b]/40 flex items-center justify-center shadow-sm">
                    <Camera className="w-8 h-8 text-[#c8a84b]/60" />
                  </div>
                  <div className="text-center">
                    <p className="t-label mb-1" style={{ fontSize: '11px', color: '#888' }}>代表写真</p>
                    <p className="t-label" style={{ fontSize: '9px', color: '#bbb' }}>準備中</p>
                  </div>
                </div>
              )}
              {/* ゴールドコーナーアクセント */}
              <div className="absolute bottom-4 right-4 w-14 h-14 border-r-2 border-b-2 border-[#c8a84b]/50 pointer-events-none rounded-br-lg" />
            </div>

            {/* 実績バッジ（ダーク・アクセント） */}
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="absolute -bottom-6 left-0 lg:left-auto lg:-left-6 bg-[#111] rounded-2xl px-6 py-4"
              style={{ boxShadow: '0 16px 40px rgba(0,0,0,0.2)' }}
            >
              <p className="font-display font-bold text-white leading-none mb-1"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                19<span className="text-sm text-white/50 ml-0.5">歳</span>
              </p>
              <p className="t-label text-[#c8a84b]" style={{ fontSize: '10px' }}>月収120万達成</p>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
