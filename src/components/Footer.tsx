export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="font-black text-2xl tracking-widest text-white mb-6">ORIGIN</p>
        <p className="text-sm font-medium">© {new Date().getFullYear()} ORIGIN. All rights reserved.</p>
      </div>
    </footer>
  );
}
