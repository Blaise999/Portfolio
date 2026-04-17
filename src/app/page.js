import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechLogos from "@/components/TechLogos";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/ui/GrainOverlay";
import WhatsAppWidget from "@/components/WhatsAppWidget";

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