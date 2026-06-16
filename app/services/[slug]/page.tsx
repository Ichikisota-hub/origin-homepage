import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Camera, Megaphone, Home, Bot, Globe } from 'lucide-react';
import { getService, services } from '@/lib/services';
import ServiceCTA from '@/components/ServiceCTA';
import type { Metadata } from 'next';

const icons = { origin: Megaphone, 'real-estate': Home, ai: Bot, global: Globe } as const;

const photoMap: Record<string, string> = {
  origin: '/photo-vice.jpg',
  global: '/photo-global.jpg',
};

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} | Kaika`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = icons[slug as keyof typeof icons] ?? Megaphone;

  return (
    <div className="min-h-screen" style={{ background: '#fafaf8' }}>

      {/* ── ダークヒーロー（全事業共通） ── */}
      <div className="relative overflow-hidden" style={{ background: '#0a0a0a' }}>
        {/* グリッド背景 */}
        <div className="absolute inset-0 hero-grid pointer-events-none" />
        {/* アンビエントグロー */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '50%', left: '30%',
            width: '500px', height: '500px',
            transform: 'translate(-50%,-50%)',
            background: `radial-gradient(circle, ${service.glow} 0%, transparent 65%)`,
          }}
        />
        {/* ゴールドライン */}
        <div className="absolute top-0 inset-x-0 gold-line" />

        <div className="relative z-10 s-container pt-28 pb-16 md:pt-32 md:pb-20">
          {/* 戻るリンク */}
          <Link
            href="/#tabs"
            className="inline-flex items-center gap-2 font-display mb-10 transition-colors"
            style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: '#444' }}
          >
            <ArrowLeft className="w-4 h-4" />
            事業一覧に戻る
          </Link>

          {/* アイコン + タグ + タイトル */}
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-10 h-10 flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(200,168,75,0.1)', border: '1px solid rgba(200,168,75,0.25)', borderRadius: '8px' }}
            >
              <Icon className="w-5 h-5" style={{ color: '#c8a84b' }} />
            </div>
            <span className="font-display" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em', color: '#c8a84b' }}>
              {service.tag}
            </span>
          </div>

          <h1
            className="font-mincho text-white"
            style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 700, letterSpacing: '0.02em', lineHeight: 1.2 }}
          >
            {service.name}
          </h1>
          <p
            className="font-mincho mt-4"
            style={{ fontSize: '17px', color: '#555', letterSpacing: '0.04em', lineHeight: 1.8, maxWidth: '560px' }}
          >
            {service.catchcopy}
          </p>
        </div>
      </div>

      {/* ── ボディ ── */}
      <div className="s-container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* LEFT: 概要・ポイント（3/5） */}
          <div className="lg:col-span-3">

            {/* 事業説明 */}
            <p
              className="font-mincho text-[#444] mb-12"
              style={{ fontSize: '16px', lineHeight: 2.0, letterSpacing: '0.04em' }}
            >
              {service.description}
            </p>

            {/* WHAT YOU DO */}
            <div className="mb-12">
              <span className="font-display block mb-6" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', color: '#c8a84b' }}>
                WHAT YOU DO
              </span>
              <ul className="space-y-5">
                {service.points.map((point, i) => {
                  const [title, ...rest] = point.split(' — ');
                  const body = rest.join(' — ');
                  return (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="font-display flex-shrink-0 mt-0.5"
                        style={{ fontSize: '10px', fontWeight: 800, color: '#c8a84b', letterSpacing: '0.05em', minWidth: '1.5rem' }}
                      >
                        0{i + 1}
                      </span>
                      <div>
                        {body ? (
                          <>
                            <p className="font-mincho text-[#111]" style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.03em', marginBottom: '4px' }}>
                              {title}
                            </p>
                            <p className="font-mincho text-[#777]" style={{ fontSize: '13px', letterSpacing: '0.03em', lineHeight: 1.8 }}>
                              {body}
                            </p>
                          </>
                        ) : (
                          <p className="font-mincho text-[#444]" style={{ fontSize: '14px', letterSpacing: '0.03em', lineHeight: 1.8 }}>
                            {title}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ServiceCTA（モバイル時はここに表示） */}
            <div className="lg:hidden">
              <ServiceCTA />
            </div>
          </div>

          {/* RIGHT: 詳細テーブル + 担当者 + CTA（2/5） */}
          <div className="lg:col-span-2 space-y-8">

            {/* 詳細テーブル */}
            <div>
              <span className="font-display block mb-4" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', color: '#c8a84b' }}>
                DETAILS
              </span>
              <div className="border border-black/7 rounded-xl overflow-hidden" style={{ background: '#fff' }}>
                {service.details.map((d, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row gap-2 p-4"
                    style={{ borderBottom: i < service.details.length - 1 ? '1px solid rgba(0,0,0,0.06)' : undefined }}
                  >
                    <div className="font-display flex-shrink-0" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', color: '#bbb', width: '5rem', paddingTop: '2px' }}>
                      {d.label}
                    </div>
                    <div className="font-mincho text-[#444]" style={{ fontSize: '13px', lineHeight: 1.8, letterSpacing: '0.03em' }}>
                      {d.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 担当者 */}
            <div>
              <span className="font-display block mb-4" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.28em', color: '#c8a84b' }}>
                REPRESENTATIVE
              </span>
              <div className="border border-black/7 rounded-xl p-5" style={{ background: '#fff' }}>
                <div className="flex gap-4 items-start">
                  {/* 写真 */}
                  <div className="flex-shrink-0 w-20">
                    {photoMap[slug] ? (
                      <div className="rounded-lg overflow-hidden aspect-[3/4]" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={photoMap[slug]} alt="担当者" className="w-full h-full object-cover" style={{ objectPosition: '50% 10%' }} />
                      </div>
                    ) : (
                      <div
                        className="rounded-lg flex flex-col items-center justify-center gap-1 aspect-[3/4]"
                        style={{ background: '#f5f4f0', border: '1px dashed rgba(200,168,75,0.3)' }}
                      >
                        <Camera className="w-5 h-5" style={{ color: '#c8a84b', opacity: 0.5 }} />
                        <p className="font-display" style={{ fontSize: '8px', color: '#bbb', letterSpacing: '0.1em' }}>準備中</p>
                      </div>
                    )}
                  </div>
                  {/* 名前・役職・コメント */}
                  <div className="flex-1">
                    <p className="font-display" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', color: '#bbb', marginBottom: '4px' }}>
                      事業責任者 / 副社長
                    </p>
                    <p className="font-mincho text-[#111]" style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '10px' }}>
                      市來　颯太
                    </p>
                    <blockquote
                      className="text-[#666]"
                      style={{ fontSize: '12px', lineHeight: 1.9, letterSpacing: '0.03em', borderLeft: '2px solid #c8a84b', paddingLeft: '10px' }}
                    >
                      「営業で人は変わる。お客様との会話の中に、自分の可能性に気づく瞬間がある。その瞬間を、一人でも多くの学生に経験させたい。」
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA（デスクトップ） */}
            <div className="hidden lg:block">
              <ServiceCTA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
