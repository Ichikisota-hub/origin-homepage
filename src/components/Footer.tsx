export default function Footer() {
  return (
    <footer className="bg-black text-zinc-500 py-12 text-center border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-black text-xl tracking-widest text-white mb-4">ORIGIN</p>
        <p className="text-xs font-medium tracking-widest">© {new Date().getFullYear()} ORIGIN. All rights reserved.</p>
      </div>
    </footer>
  );
}
