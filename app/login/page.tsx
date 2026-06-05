import Image from 'next/image';
import Link from 'next/link';
import LoginForm from './LoginForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ログイン | Kaika',
  description: 'Kaikaメンバーログイン',
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* 左: フォームパネル */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-20 xl:px-32 py-16 bg-white">
        <div className="max-w-sm mx-auto w-full">
          {/* Logo */}
          <Link href="/" className="inline-block mb-12">
            <Image
              src="/kaika-logo.png"
              alt="Kaika"
              width={120}
              height={120}
              className="h-16 w-auto object-contain"
            />
          </Link>

          <h1 className="text-3xl font-black tracking-tighter text-gray-900 mb-2">
            ログイン
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Kaikaメンバーポータルへようこそ
          </p>

          <LoginForm />

          <p className="mt-8 text-center text-xs text-gray-400">
            アカウントをお持ちでない方は
            <a href="https://lin.ee/YLQ7UHz" target="_blank" rel="noopener noreferrer"
              className="text-amber-600 font-bold hover:text-amber-700 ml-1">
              LINEでお問い合わせ
            </a>
          </p>
        </div>
      </div>

      {/* 右: 背景写真パネル（PC only） */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=85&w=1600&auto=format&fit=crop"
          alt="Team"
          fill
          priority
          className="object-cover"
          sizes="50vw"
          quality={75}
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-amber-900/30" />
        {/* テキスト */}
        <div className="absolute inset-0 flex flex-col justify-end p-16">
          <blockquote className="text-white">
            <p className="text-2xl md:text-3xl font-black tracking-tight leading-tight mb-4">
              「自分にとって一番、<br />居心地の悪い環境に行け」
            </p>
            <footer className="text-sm font-bold text-amber-300 tracking-widest">
              — 仁川 遥斗 / 代表
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
