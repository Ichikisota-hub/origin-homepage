'use client';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'motion/react';
import Image from 'next/image';

/* ナビ項目: 5-7個の認知限界（Appleは5項目） */
const navLinks = [
  { href: '#services', label: 'SERVICES' },
  { href: '#salary',   label: 'SALARY'   },
  { href: '#career',   label: 'CAREER'   },
  { href: '#company',  label: 'COMPANY'  },
];

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-400 ${
      isScrolled
        ? 'bg-[#fafaf8]/94 backdrop-blur-xl border-b border-black/7 py-2 shadow-sm'
        : 'bg-transparent py-4'
    }`} data-scrolled={isScrolled ? 'true' : 'false'}>
      <div className="s-container">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="/" className="inline-flex items-center gap-2.5 group flex-shrink-0">
            <Image src="/kaika-emblem.png" alt="Kaika" width={40} height={40}
              className="block w-10 h-10 object-contain group-hover:opacity-80 transition-opacity flex-shrink-0" />
            <span className="block font-display font-bold text-[22px] tracking-[0.08em] leading-none gold-text group-hover:opacity-80 transition-opacity">
              KAIKA
            </span>
          </a>

          {/* Desktop: 5項目 + Sticky CTA */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a key={label} href={href}
                className={`t-label transition-colors relative group ${isScrolled ? 'text-[#777] hover:text-[#111]' : 'nav-link-dark'}`}
                style={{ fontSize: '11px' }}>
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#c8a84b] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a href="/login"
              className={`t-label transition-colors ${isScrolled ? 'text-[#aaa] hover:text-[#555]' : 'nav-login-dark'}`}
              style={{ fontSize: '11px' }}>
              ログイン
            </a>
            {/* Sticky CTA（常時表示） */}
            <a href="https://lin.ee/YLQ7UHz" target="_blank" rel="noopener noreferrer"
              className="cta-primary" style={{ height: '40px', padding: '0 20px', fontSize: '13px' }}>
              <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
              LINEで相談
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-[#333] hover:bg-black/5' : 'text-[#888] hover:bg-white/5'}`}>
            <AnimatePresence mode="wait" initial={false}>
              {isOpen
                ? <m.div key="x"    initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:90,opacity:0}} transition={{duration:0.15}}><X className="h-6 w-6" /></m.div>
                : <m.div key="menu" initial={{rotate:90,opacity:0}}  animate={{rotate:0,opacity:1}} exit={{rotate:-90,opacity:0}} transition={{duration:0.15}}><Menu className="h-6 w-6" /></m.div>
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <m.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}}
            transition={{duration:0.28,ease:[0.16,1,0.3,1]}}
            className="md:hidden bg-[#fafaf8] overflow-hidden border-t border-black/6">
            <div className="s-container py-8 flex flex-col gap-6">
              {navLinks.map(({ href, label }, i) => (
                <m.a key={label} href={href} onClick={() => setIsOpen(false)}
                  initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:i*0.06}}
                  className="t-h3 text-[#111]" style={{fontSize:'24px'}}>
                  {label}
                </m.a>
              ))}
              <a href="https://lin.ee/YLQ7UHz" target="_blank" rel="noopener noreferrer"
                className="cta-primary mt-2" style={{fontSize:'15px'}}>
                <MessageCircle className="w-4 h-4" />
                LINEで相談する
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
