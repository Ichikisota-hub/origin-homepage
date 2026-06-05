import Navbar from "@/components/Navbar";
import HeroSimple from "@/components/HeroSimple";
import ProofStrip from "@/components/ProofStrip";
import FounderMessage from "@/components/FounderMessage";
import PartnersSection from "@/components/PartnersSection";
import TabPage from "@/components/TabPage";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SchedulingModal from "@/components/SchedulingModal";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSimple />
        <ProofStrip />
        <FounderMessage />
        <PartnersSection />
        <TabPage />
        <CTA />
      </main>
      <Footer />
      <SchedulingModal />
      <FloatingCTA />
    </>
  );
}
