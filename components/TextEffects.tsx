'use client';
import { m, motion, useInView } from 'motion/react';
import { useRef, useEffect, useState, useCallback } from 'react';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*';

/* ── ScrambleText ───────────────────────────────────────────────────
   Triggers when element enters viewport. Each character reveals itself
   after cycling through random chars. Works with uppercase latin text.
──────────────────────────────────────────────────────────────────── */
export function ScrambleText({
  text,
  className,
  delay = 0,
  speed = 38,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(() =>
    text.split('').map(c => (c === ' ' ? ' ' : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)])).join('')
  );

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const revealAt = 4;
    const total = text.length * revealAt;

    const id = setTimeout(() => {
      const iv = setInterval(() => {
        setDisplay(
          text.split('').map((char, i) => {
            if (char === ' ') return ' ';
            if (frame >= i * revealAt) return char;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }).join('')
        );
        frame++;
        if (frame >= total) clearInterval(iv);
      }, speed);
      return () => clearInterval(iv);
    }, delay * 1000);

    return () => clearTimeout(id);
  }, [isInView, text, delay, speed]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/* ── useScramble (hook for hover-triggered scramble) ───────────────── */
export function useScramble(text: string, speed = 32) {
  const [display, setDisplay] = useState(text);

  const trigger = useCallback(() => {
    let frame = 0;
    const revealAt = 3;
    const total = text.length * revealAt;
    const iv = setInterval(() => {
      setDisplay(
        text.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (frame >= i * revealAt) return char;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }).join('')
      );
      frame++;
      if (frame >= total) clearInterval(iv);
    }, speed);
  }, [text, speed]);

  return { display, trigger };
}

/* ── SplitText ──────────────────────────────────────────────────────
   Each character animates in with a staggered fade + slide.
──────────────────────────────────────────────────────────────────── */
export function SplitText({
  text,
  className,
  stagger = 0.045,
  delay = 0,
  once = true,
}: {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
}) {
  return (
    <m.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {text.split('').map((char, i) => (
        <m.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 22, rotateX: -40 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="inline-block"
          style={{ transformOrigin: 'bottom center' }}
        >
          {char === ' ' ? ' ' : char}
        </m.span>
      ))}
    </m.span>
  );
}

/* ── MarqueeBand ────────────────────────────────────────────────────
   Infinite horizontal scroll strip.
──────────────────────────────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  '実践', 'BUSINESS', '成長', 'ORIGIN', '可能性', 'CAREER',
  '実力', 'GROWTH', '挑戦', 'PRACTICE', '稼ぐ力', 'FUTURE',
  '行動力', 'AMBITION', '突破', 'TRANSFORM',
];

export function MarqueeBand() {
  const tripled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-gray-200 py-[14px] bg-white select-none">
      <m.div
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap w-max"
      >
        {tripled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 px-4 text-[11px] font-bold tracking-[0.28em] text-gray-700"
          >
            {item}
            <span className="text-gray-200 text-[8px]">✦</span>
          </span>
        ))}
      </m.div>
    </div>
  );
}

/* ── TypewriterText ─────────────────────────────────────────────────
   Characters appear one by one with a blinking cursor.
──────────────────────────────────────────────────────────────────── */
export function TypewriterText({
  text,
  className,
  delay = 0,
  charDelay = 48,
}: {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timer = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(iv); setDone(true); }
      }, charDelay);
      return () => clearInterval(iv);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, text, delay, charDelay]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {!done && <span className="inline-block w-[2px] h-[1em] bg-current align-middle ml-[2px] animate-pulse" />}
    </span>
  );
}
