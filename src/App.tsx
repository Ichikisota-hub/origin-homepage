import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Concept from './components/Concept';
import Process from './components/Process';
import Fields from './components/Fields';
import Values from './components/Values';
import CareerPaths from './components/CareerPaths';
import Stories from './components/Stories';
import Culture from './components/Culture';
import Requirements from './components/Requirements';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SchedulingModal from './components/SchedulingModal';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Concept />
        <Process />
        <Fields />
        <Values />
        <CareerPaths />
        <Stories />
        <Culture />
        <Requirements />
        <CTA />
      </main>
      <Footer />
      <SchedulingModal />
    </div>
  );
}
