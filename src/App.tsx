import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Fields from './components/Fields';
import Values from './components/Values';
import Company from './components/Company';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SchedulingModal from './components/SchedulingModal';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Fields />
        <Values />
        <Company />
        <CTA />
      </main>
      <Footer />
      <SchedulingModal />
    </div>
  );
}
