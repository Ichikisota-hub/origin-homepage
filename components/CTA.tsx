'use client';
import { m } from 'motion/react';
import { MessageCircle } from 'lucide-react';

/* ══════════════════════════════════════════
   最終CTA（スキル準拠）
   - 1個に絞る（LINE一択）
   - 動詞始め "LINEで相談する"
   - 56px高さ（44px+ルール）
   - ストーリー: 変容→行動
══════════════════════════════════════════ */
export default function CTA() {
  return (
    <section className="bg-[#111] relative overflow-hidden s-section">
      {/* 10%アクセント */}
      <div className="absolute top-0 inset-x-0 gold-line" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#c8a84b]/4 blur-[180px] animate-breathe" />
      </div>

      <div className="relative z-10 s-container text-center">
        <m.div initial={{opacity:0,y:48}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          transition={{duration:0.9,ease:[0.16,1,0.3,1]}}>

          <span className="t-label text-[#c8a84b] block mb-10">NOW OR NEVER</span>

          {/* Display heading */}
          <h2 className="t-hero gold-text font-display mb-8">KAIKA</h2>

          {/* 変容コピー: ユーザーの未来像 */}
          <p className="t-h2 text-white/88 mb-5">
            今、動くか。<br />一生同じままか。
          </p>
          <p className="t-body text-white/40 mb-14 max-w-[380px] mx-auto">
            3秒あれば、人生は動き出す。<br />
            話を聞くだけでOK。まず一歩。
          </p>

          {/* Primary CTA: 1個のみ（56px） */}
          <a href="https://lin.ee/YLQ7UHz" target="_blank" rel="noopener noreferrer"
            className="cta-primary mx-auto" style={{fontSize:'16px',height:'56px',padding:'0 48px'}}>
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            LINEで相談する
          </a>

          {/* Secondary: ghost link（目立たせない） */}
          <p className="mt-8">
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling-modal'))}
              className="text-[#444] hover:text-[#c8a84b] transition-colors text-sm underline underline-offset-4 font-medium">
              説明会を予約する
            </button>
          </p>
        </m.div>
      </div>
    </section>
  );
}
