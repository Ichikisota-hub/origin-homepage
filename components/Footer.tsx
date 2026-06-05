'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a08] border-t border-white/5 py-16">
      <div className="s-container text-center">
        <div className="inline-flex items-center gap-3 mb-5">
          <Image src="/kaika-emblem.png" alt="Kaika" width={40} height={40}
            className="block w-10 h-10 object-contain" />
          <span className="block font-display font-bold text-[22px] tracking-[0.08em] leading-none gold-text">KAIKA</span>
        </div>
        <p className="t-label text-[#444] mb-3" style={{letterSpacing:'0.18em'}}>人の可能性を、咲かせる。</p>
        <p className="text-[10px] text-[#2a2a2a] tracking-widest">
          © {new Date().getFullYear()} 株式会社Kaika. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
