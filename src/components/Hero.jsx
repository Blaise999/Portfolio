"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Typewriter from "./ui/Typewriter";

const ROLES = ["E-Commerce Stores", "DeFi Protocols", "Trading Engines", "Fintech Platforms", "Smart Contracts", "Healthcare Systems", "Logistics Platforms"];
const stagger = (i, base = 0.5) => ({ duration: 0.9, delay: base + i * 0.12, ease: [0.22, 1, 0.36, 1] });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 lg:px-12 pt-[140px] pb-12 overflow-hidden">
      {/* BG layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(rgba(139,92,246,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.4) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="absolute -top-20 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-radial from-neon-violet/[0.12] to-transparent blur-[120px] animate-float" />
        <div className="absolute -bottom-32 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-radial from-neon-cyan/[0.08] to-transparent blur-[100px] animate-float-delayed" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-obsidian to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full flex-1 flex flex-col justify-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={stagger(0, 0.4)}
          className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" />
          <span className="text-[13px] text-white/40 font-mono tracking-wide">Available for work — Nigeria</span>
        </motion.div>

        {/* Brand name */}
        <motion.h1 initial={{ opacity: 0, y: 40, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0)" }} transition={stagger(1, 0.4)}
          className="font-display font-extrabold text-[clamp(52px,9vw,120px)] leading-[0.95] tracking-[-4px] mb-6"
          style={{ background: "linear-gradient(135deg, #fff 30%, #a78bfa 70%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Blaise-Tech
        </motion.h1>

        {/* Tagline */}
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={stagger(2, 0.5)}
          className="text-[clamp(18px,2.5vw,30px)] font-display font-bold text-white/80 mb-4 tracking-tight">
          If you can imagine it, we can build it.
        </motion.p>

        {/* Sub-description + typewriter */}
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={stagger(3, 0.6)}
          className="flex flex-col gap-2 mb-10">
          <p className="text-[clamp(14px,1.6vw,18px)] text-white/40 font-light leading-relaxed max-w-[560px]">
            Full-Stack &amp; Smart Contract Development studio based in Nigeria.
            We architect production systems that handle real money, real users,
            and real complexity — from DeFi protocols to enterprise platforms.
          </p>
          <div className="text-[clamp(14px,1.6vw,18px)] font-display font-semibold mt-1">
            <span className="text-white/25">Currently building </span>
            <Typewriter words={ROLES} />
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={stagger(4, 0.7)}
          className="flex items-center gap-4 flex-wrap">
          <a href="#work"
            className="group relative px-8 py-4 rounded-full bg-neon-violet text-white text-[14px] font-bold tracking-wide shadow-[0_0_48px_rgba(124,58,237,.3)] hover:shadow-[0_0_72px_rgba(124,58,237,.5)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">View Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a href="#services"
            className="px-8 py-4 rounded-full border border-white/[0.08] text-white/60 text-[14px] font-medium tracking-wide hover:border-white/20 hover:text-white transition-all duration-300">
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={stagger(5, 0.9)}
        className="relative z-10 max-w-[1200px] mx-auto w-full">
        <div className="flex items-center justify-between border-t border-white/[0.05] pt-6">
          <div className="flex items-center gap-12">
            {[
              { v: "6", l: "Shipped Products" },
              { v: "2,400+", l: "Store Products" },
              { v: "$50K+", l: "Assets Managed" },
              { v: "220+", l: "Shipping Lanes" },
            ].map(({ v, l }) => (
              <div key={l} className="hidden sm:block">
                <span className="block font-display text-[22px] font-extrabold text-white/90">{v}</span>
                <span className="text-[11px] text-white/25 font-mono tracking-wider uppercase">{l}</span>
              </div>
            ))}
          </div>
          <motion.a href="#work" animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 text-[11px] text-white/20 font-mono tracking-widest uppercase hover:text-white/40 transition-colors">
            Scroll <ArrowDown size={14} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
