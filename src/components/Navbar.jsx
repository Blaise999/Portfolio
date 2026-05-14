"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LogoFull } from "./ui/Logo";

const LINKS = ["Work", "Services", "About", "FAQ", "Quote", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 h-[68px] sm:h-[72px] px-5 sm:px-6 lg:px-12 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-obsidian/85 backdrop-blur-2xl border-b border-white/[0.04]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <a href="#" onClick={() => setOpen(false)}>
          <LogoFull />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-white/40 text-[13px] font-medium tracking-wide hover:text-white transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-neon-violet hover:after:w-full after:transition-all after:duration-300"
            >
              {l}
            </a>
          ))}
          <a
            href="#quote"
            className="ml-2 px-6 py-2.5 rounded-full text-[12px] font-semibold tracking-wider uppercase bg-white/[0.04] border border-white/[0.08] text-white/70 hover:bg-neon-violet hover:text-white hover:border-neon-violet/50 transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-obsidian/95 backdrop-blur-2xl pt-[80px] px-6"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-1 mt-6"
            >
              {LINKS.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="block py-4 border-b border-white/[0.05] text-white/80 text-[18px] font-display font-bold tracking-tight"
                >
                  {l}
                </motion.a>
              ))}
              <motion.a
                href="#quote"
                onClick={() => setOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-6 inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-neon-violet text-white text-[13px] font-bold tracking-wider uppercase"
              >
                Get a Quote
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
