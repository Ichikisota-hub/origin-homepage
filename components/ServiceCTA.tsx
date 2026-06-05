'use client';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function ServiceCTA() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-7">
      <p className="text-sm font-bold text-gray-900 mb-2">気になったら、まず話だけ聞きに来て。</p>
      <p className="text-xs text-gray-700 mb-6">「興味がある」だけで十分。相談・エントリーどちらでもOK。</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://lin.ee/YLQ7UHz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#06C755] text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-[#05b04c] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          LINEで相談する
        </a>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling-modal'))}
          className="flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
        >
          説明会を予約する
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
