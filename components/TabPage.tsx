'use client';
import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { useLenis } from 'lenis/react';
import ServicesTab from './tabs/ServicesTab';
import SalaryTab from './tabs/SalaryTab';
import CultureTab from './tabs/CultureTab';
import CareerTab from './tabs/CareerTab';
import CompanyTab from './tabs/CompanyTab';

const tabs = [
  { id: 'services', label: '事業内容', en: 'SERVICES' },
  { id: 'salary',   label: '報酬',     en: 'SALARY'   },
  { id: 'culture',  label: 'カルチャー', en: 'CULTURE' },
  { id: 'career',   label: '進路',     en: 'CAREER'   },
  { id: 'company',  label: '会社概要',  en: 'COMPANY'  },
];

const hashMap: Record<string, string> = {
  services:'services',concept:'services',vision:'services',
  salary:'salary',culture:'culture',career:'career',company:'company',
};

const tabContent: Record<string, React.ReactNode> = {
  services: <ServicesTab />,
  salary:   <SalaryTab />,
  culture:  <CultureTab />,
  career:   <CareerTab />,
  company:  <CompanyTab />,
};

export default function TabPage() {
  const [active, setActive] = useState('services');
  const lenis = useLenis();
  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.slice(1);
      if (hash && hashMap[hash]) {
        setActive(hashMap[hash]);
        // Lenis 経由で滑らかに着地（ネイティブ scrollIntoView は慣性下で即ジャンプになるため）
        setTimeout(() => {
          if (lenis) lenis.scrollTo('#tabs', { offset: -56 });
          else document.getElementById('tabs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, [lenis]);

  return (
    <section id="tabs" className="bg-[#fafaf8]">
      <div className="sticky top-[56px] z-40 bg-[#fafaf8]/96 backdrop-blur-md border-b border-black/6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex overflow-x-auto" style={{ scrollbarWidth:'none' }}>
            {tabs.map(tab => (
              <button key={tab.id}
                onClick={() => { setActive(tab.id); window.history.pushState(null,'',`#${tab.id}`); }}
                className={`relative flex-shrink-0 px-5 md:px-7 py-4 transition-colors duration-200 ${active===tab.id?'text-[#111]':'text-[#aaa] hover:text-[#555]'}`}>
                <span className="block text-[11px] font-bold tracking-[0.15em]">{tab.en}</span>
                <span className="block text-[10px] opacity-70 mt-0.5">{tab.label}</span>
                {active===tab.id && (
                  <m.div layoutId="tab-bar" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c8a84b]"
                    transition={{ type:'spring', stiffness:500, damping:40 }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <m.div key={active} initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
          exit={{ opacity:0, y:-8 }} transition={{ duration:0.22 }}>
          {tabContent[active]}
        </m.div>
      </AnimatePresence>
    </section>
  );
}
