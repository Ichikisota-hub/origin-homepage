import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 md:py-4' : 'bg-white py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-black text-2xl md:text-3xl tracking-tighter text-slate-900">ORIGIN</span>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#problem" className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors">課題</a>
            <a href="#concept" className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors">ORIGINとは</a>
            <a href="#process" className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors">成長ステップ</a>
            <a href="#paths" className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors">進路</a>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling-modal'))}
              className="bg-slate-900 text-white px-8 py-3 text-sm font-bold rounded-full hover:bg-orange-600 transition-colors"
            >
              説明会に参加する
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full h-screen pt-4 border-t border-slate-100">
          <div className="flex flex-col px-6 space-y-6 text-center">
            <a href="#problem" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-slate-900 py-2">課題</a>
            <a href="#concept" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-slate-900 py-2">ORIGINとは</a>
            <a href="#process" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-slate-900 py-2">成長ステップ</a>
            <a href="#paths" onClick={() => setIsOpen(false)} className="block text-2xl font-black text-slate-900 py-2">進路</a>
            <button 
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent('open-scheduling-modal'));
              }}
              className="w-full mt-8 bg-orange-600 text-white px-6 py-4 font-bold text-lg rounded-full"
            >
              説明会に参加する
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
