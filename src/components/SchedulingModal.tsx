import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function SchedulingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-scheduling-modal', handleOpen);
    return () => window.removeEventListener('open-scheduling-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      ></div>
      
      <div className="relative bg-zinc-900 w-full max-w-4xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300 border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900">
          <div>
            <h3 className="text-lg font-black text-white tracking-widest">CONTACT</h3>
            <p className="text-xs text-zinc-400 font-medium mt-1 tracking-widest">お問い合わせ・ご予約</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Iframe Container */}
        <div className="flex-1 w-full h-full bg-zinc-950 relative">
          {/* Google Calendar Appointment Scheduling */}
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3l2d725otA3azyu52AVostMD7B4VHWBTZX6a_OlB4yRyW2J7RK4vne3ypZJISqGyOBsdrPt1ZN?gv=true" 
            style={{ border: 0 }} 
            width="100%" 
            height="100%" 
            frameBorder="0"
            className="relative z-10 bg-white"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
