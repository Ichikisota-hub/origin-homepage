import type { Metadata } from "next";
import { Onest } from "next/font/google";
import Providers from "./providers";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

/* Onest: 幾何学的・クリーン。数字・英語ラベル専用 */
const onest = Onest({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});
/* Shippori Mincho B1: CJKフォントはTurbopack非対応のためCDN経由（globals.cssに@import） */

export const metadata: Metadata = {
  title: "Kaika | 稼ぎながら成長する実践型学生ビジネス組織 | 大阪",
  description:
    "バイト×インターン──世界にまだない概念。Kaikaは営業・不動産・AI・海外の現場で、月収20〜100万円を稼ぎながら就活・起業に直結するスキルを身につけられる大阪発の学生組織。未経験・学部不問。",
  keywords: ["学生インターン","長期インターン 大阪","営業 学生","稼げるバイト 大阪","大学生 起業","Kaika","開花","バイト インターン"],
  openGraph: {
    title: "Kaika | 稼ぎながら成長する実践型学生ビジネス組織",
    description: "バイトのように始めやすく、インターンのように人生が動く。月収20〜100万円可能。大阪発・未経験歓迎。",
    type: "website",
    siteName: "Kaika",
    locale: "ja_JP",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://origin-homepage.vercel.app" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={onest.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#fafaf8] text-[#111] antialiased selection:bg-amber-100 selection:text-amber-900">
        <Providers>
          <ScrollProgress />
          <SmoothScroll>{children}</SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
