'use client';
import { m } from 'motion/react';
import { Clock, TrendingUp, Zap } from 'lucide-react';

const modes = [
  { id:'01', label:'時給制', sublabel:'Hourly', icon:Clock, color:'text-[#666]', bg:'bg-[#f5f4f0]', border:'border-[#e8e4da]', desc:'まず始めてみる。バイト感覚でOK。', detail:'テレアポ・事務・イベント補助など。未経験でもすぐ稼げる。' },
  { id:'02', label:'時給 + 歩合', sublabel:'Hourly + Commission', icon:TrendingUp, color:'text-emerald-700', bg:'bg-emerald-50', border:'border-emerald-200', desc:'結果を出した分だけ上乗せ。', detail:'多くの学生はここから始めてどんどん伸びていく。', popular:true },
  { id:'03', label:'完全歩合', sublabel:'Full Commission', icon:Zap, color:'text-orange-700', bg:'bg-orange-50', border:'border-orange-200', desc:'上限なし。ガチで勝負する。', detail:'学生で月100万超えも出る。天井は自分のやる気だけ。' },
];

export default function SalaryTab() {
  return (
    <div className="s-section s-container">
      <m.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="mb-14">
        <span className="block t-label text-[#c8a84b] mb-4">SALARY</span>
        <h2 className="font-black tracking-tight text-[#111]" style={{fontSize:'clamp(2.4rem,5vw,4rem)'}}>報酬は、選べる。</h2>
      </m.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        {modes.map((m2,i) => (
          <m.div key={m2.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:i*0.1}}
            className={`relative ${m2.bg} border ${m2.border} rounded-2xl p-7`}>
            {m2.popular && <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full">POPULAR</span>}
            <span className="text-[10px] font-black tracking-widest text-[#bbb] block mb-5">MODE {m2.id}</span>
            <m2.icon className={`w-7 h-7 ${m2.color} mb-4`} />
            <h3 className="text-xl font-black text-[#111] mb-1">{m2.label}</h3>
            <p className="text-[10px] text-[#bbb] font-bold tracking-widest mb-4">{m2.sublabel}</p>
            <p className={`text-sm font-bold ${m2.color} mb-2`}>{m2.desc}</p>
            <p className="text-[#777] text-xs leading-relaxed">{m2.detail}</p>
          </m.div>
        ))}
      </div>
      <m.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.3}}
        className="bg-[#111] rounded-2xl p-8 md:p-14 text-white">
        <span className="block text-[10px] font-bold tracking-[0.3em] text-[#c8a84b] mb-8">REALITY</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-[10px] text-[#666] font-bold tracking-widest mb-3">当たり前ライン</p>
            <p className="font-black leading-none text-white" style={{fontSize:'clamp(3rem,7vw,5rem)'}}>20–30<span className="text-xl text-[#888] ml-2">万円/月</span></p>
            <p className="text-[#666] text-xs mt-3">ほとんどのメンバーが届く。</p>
          </div>
          <div>
            <p className="text-[10px] text-[#666] font-bold tracking-widest mb-3">本気で行くと</p>
            <p className="font-black leading-none gold-gradient" style={{fontSize:'clamp(3rem,7vw,5rem)'}}>50–100<span className="text-xl ml-2" style={{WebkitTextFillColor:'#888'}}>万円/月</span></p>
            <p className="text-[#666] text-xs mt-3">代表は19歳のとき、月120万。</p>
          </div>
        </div>
        <p className="text-[#555] text-xs mt-10 pt-6 border-t border-white/10 text-center">+ 交通費全支給。案件ごとの特別賞与あり。</p>
      </m.div>
    </div>
  );
}
