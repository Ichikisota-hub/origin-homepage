'use client';
import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

/* ══════════════════════════════════════════════
   フローティングLINE CTA（スキル準拠）
   - ヒーローを過ぎたら出現（スクロール後）
   - 常時表示でどこからでもLINEへ誘導
   - スマホ: 画面下部中央（最も押しやすい親指エリア）
   - PC: 右下（視線の最終到達点）
   - パルスアニメで視線を引く
   - 閉じるボタン付き（UX配慮）
══════════════════════════════════════════════ */
export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Heroセクション（約100vh）を過ぎたら表示
      if (window.scrollY > window.innerHeight * 0.8) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ opacity: 0, y: 32, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          /* スマホ: 下中央（親指で届くゾーン）/ PC: 右下 */
          className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 flex items-center gap-2"
        >
          {/* メインLINEボタン（パルスアニメ） */}
          <div className="relative">
            {/* パルスリング */}
            <span className="absolute inset-0 rounded-full bg-[#06C755] opacity-40 animate-ping" />
            <a
              href="https://lin.ee/YLQ7UHz"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2.5 bg-[#06C755] text-white font-bold rounded-full shadow-2xl transition-all duration-200 hover:bg-[#05a848] hover:scale-105 active:scale-95"
              style={{
                height: '56px',
                padding: '0 28px',
                fontSize: '15px',
                boxShadow: '0 8px 32px rgba(6,199,85,0.45), 0 2px 8px rgba(0,0,0,0.15)',
              }}
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              <span>LINEで相談する</span>
            </a>
          </div>

          {/* 閉じるボタン */}
          <button
            onClick={() => setDismissed(true)}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors flex-shrink-0"
            aria-label="閉じる"
          >
            <X className="w-3.5 h-3.5 text-[#666]" />
          </button>
        </m.div>
      )}
    </AnimatePresence>
  );
}
