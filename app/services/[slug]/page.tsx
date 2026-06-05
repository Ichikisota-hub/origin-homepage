import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Camera, Megaphone, Home, Bot, Globe } from 'lucide-react';
import { getService, services } from '@/lib/services';
import ServiceCTA from '@/components/ServiceCTA';
import type { Metadata } from 'next';

const icons = { origin: Megaphone, 'real-estate': Home, ai: Bot, global: Globe } as const;

/* 事業ページの担当者写真マッピング
   - origin:  通信事業部部長 → 副代表写真
   - global:  海外事業部代表写真
*/
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
    <div className="min-h-screen bg-white">

      {/* ORIGINのみ: 黒背景ヒーローヘッダー */}
      {slug === 'origin' && (
        <div className="bg-black pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/#tabs" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors mb-10">
              <ArrowLeft className="w-4 h-4" />
              事業一覧に戻る
            </Link>
            <Image
              src="/origin-logo.png"
              alt="ORIGIN"
              width={480}
              height={200}
              className="h-16 md:h-24 w-auto object-contain mb-6"
              style={{ filter: 'invert(1)' }}
              priority
            />
            <p className="text-sm font-bold tracking-[0.2em] text-gray-500 mb-2">{service.tag}</p>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white">{service.name}</h1>
          </div>
        </div>
      )}

      {/* 通常のBack nav（ORIGIN以外） */}
      {slug !== 'origin' && (
        <div className="border-b border-gray-100 pt-16 md:pt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/#tabs" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              事業一覧に戻る
            </Link>
          </div>
        </div>
      )}

<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header (ORIGIN以外) */}
        {slug !== 'origin' ? (
          <div className="flex items-start gap-5 mb-14">
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-md flex-shrink-0`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-gray-500 mb-2">{service.tag}</p>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900">{service.name}</h1>
            </div>
          </div>
        ) : null}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Representative photo + info */}
          <div>
            {/* Photo + Person Info */}
            <div className="mb-8">
              <p className="text-xs font-bold tracking-widest text-gray-400 mb-4">REPRESENTATIVE</p>
              <div className="flex gap-5 items-start">
                {/* Photo */}
                <div className="flex-shrink-0 w-32 md:w-40">
                  {photoMap[slug] ? (
                    <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-gray-100" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={photoMap[slug]} alt="担当者" className="w-full h-full object-cover" style={{ objectPosition: '50% 10%' }} />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center gap-2 aspect-[3/4]">
                      <Camera className="w-6 h-6 text-gray-400" />
                      <p className="text-xs text-gray-300">準備中</p>
                    </div>
                  )}
                </div>
                {/* Name + Message */}
                <div className="flex-1 pt-1">
                  <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] mb-1">事業責任者</p>
                  <p className="text-xl md:text-2xl font-black text-gray-900 tracking-tight mb-4">市來　颯太</p>
                  <blockquote className="border-l-2 border-orange-400 pl-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      「営業で人は変わる。お客様との会話の中に、自分の可能性に気づく瞬間がある。その瞬間を、一人でも多くの学生に経験させたい。」
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Details table */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 divide-y divide-gray-100">
              {service.details.map((d, i) => (
                <div key={i} className="flex flex-col sm:flex-row p-5 bg-white hover:bg-gray-50 transition-colors">
                  <div className="w-full sm:w-1/3 text-xs font-bold text-gray-400 mb-1 sm:mb-0 tracking-widest">{d.label}</div>
                  <div className="w-full sm:w-2/3 text-sm text-gray-800 font-medium leading-relaxed">{d.body}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Description + points */}
          <div>
            <p className="text-lg md:text-xl font-black text-gray-900 leading-relaxed mb-6">
              {service.catchcopy}
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
              {service.description}
            </p>

            <p className="text-xs font-bold tracking-widest text-gray-400 mb-4">WHAT YOU DO</p>
            <ul className="space-y-3 mb-12">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4 bg-gray-50 border border-gray-100 p-4 rounded-xl">
                  <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`} />
                  <span className="text-gray-700 text-sm font-medium leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <ServiceCTA />
          </div>
        </div>
      </div>
    </div>
  );
}
