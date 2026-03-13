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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-black text-xl md:text-2xl tracking-tighter text-white">ORIGIN</span>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#concept" className="text-xs font-bold tracking-widest text-zinc-300 hover:text-white transition-colors">VISION</a>
            <a href="#services" className="text-xs font-bold tracking-widest text-zinc-300 hover:text-white transition-colors">SERVICES</a>
            <a href="#company" className="text-xs font-bold tracking-widest text-zinc-300 hover:text-white transition-colors">COMPANY</a>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-scheduling-modal'))}
              className="bg-white text-black px-6 py-2.5 text-xs font-bold rounded-full hover:bg-zinc-200 transition-colors tracking-widest"
            >
              CONTACT
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 absolute w-full h-screen pt-4 border-t border-white/10">
          <div className="flex flex-col px-6 space-y-6 text-center">
            <a href="#concept" onClick={() => setIsOpen(false)} className="block text-xl font-black text-white py-2 tracking-widest">VISION</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block text-xl font-black text-white py-2 tracking-widest">SERVICES</a>
            <a href="#company" onClick={() => setIsOpen(false)} className="block text-xl font-black text-white py-2 tracking-widest">COMPANY</a>
            <button 
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent('open-scheduling-modal'));
              }}
              className="w-full mt-8 bg-white text-black px-6 py-4 font-bold text-sm tracking-widest rounded-full"
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
