import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import TechLogos from "@/components/ui/TechLogos";
import About from "@/components/ui/About";
import Projects from "@/components/ui/Projects";
import Philosophy from "@/components/ui/Philosophy";
import FAQ from "@/components/ui/FAQ";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import GrainOverlay from "@/components/ui/GrainOverlay";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <WhatsAppWidget />
      <main>
        <Hero />

        <div className="section-sep" />

        <Services />

        <div className="section-sep" />

        <TechLogos />

        <div className="section-sep" />

        <Projects />

        <div className="section-sep" />

        <About />

        <div className="section-sep" />

        <Philosophy />

        <div className="section-sep" />

        <FAQ />

        <div className="section-sep" />

        <Contact />
      </main>
      <Footer />
    </>
  );
}