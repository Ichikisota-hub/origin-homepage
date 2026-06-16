'use client';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function ServiceCTA() {
  return (
    <div className="border border-black/8 rounded-xl p-7" style={{ background: '#fff' }}>
      <p className="font-mincho text-[#111] mb-2" style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.03em' }}>
        興味があれば、まず話を聞いてみてください。
      </p>
      <p className="font-mincho text-[#888] mb-6" style={{ fontSize: '13px', letterSpacing: '0.04em', lineHeight: 1.8 }}>
        「興味がある」という気持ちだけで十分です。相談・エントリーどちらからでも受け付けています。
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://lin.ee/YLQ7UHz"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-primary"
          style={{ height: '48px', padding: '0 28px', fontSize: '14px' }}
        >
          <MessageCircle className="w-4 h-4 flex-shrink-0" />
          LINEで相談する
        </a>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling-modal'))}
          className="cta-ghost"
          style={{ height: '48px', padding: '0 24px', fontSize: '14px' }}
        >
          説明会を予約する
          <ArrowRight className="w-4 h-4 flex-shrink-0" />
        </button>
      </div>
    </div>
  );
}
