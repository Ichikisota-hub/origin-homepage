import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

/* Space Grotesk: モダン・権威感 (英語見出し専用) */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
    <html lang="ja" className={spaceGrotesk.variable}>
      <body className="min-h-screen bg-[#fafaf8] text-[#111] antialiased selection:bg-amber-100 selection:text-amber-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
