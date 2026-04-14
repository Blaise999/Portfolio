"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LogoFull } from "./ui/Logo";

const LINKS = ["Work", "Services", "About", "FAQ", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 h-[72px] px-6 lg:px-12 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/85 backdrop-blur-2xl border-b border-white/[0.04]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <a href="#">
        <LogoFull />
      </a>

      <div className="hidden md:flex items-center gap-9">
        {LINKS.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`}
            className="text-white/35 text-[13px] font-medium tracking-wide hover:text-white transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-neon-violet hover:after:w-full after:transition-all after:duration-300">
            {l}
          </a>
        ))}
        <a href="#contact"
          className="ml-2 px-6 py-2.5 rounded-full text-[12px] font-semibold tracking-wider uppercase bg-white/[0.04] border border-white/[0.08] text-white/70 hover:bg-neon-violet hover:text-white hover:border-neon-violet/50 transition-all duration-400">
          Get a Quote
        </a>
      </div>
    </motion.nav>
  );
}
