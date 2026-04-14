"use client";

import { Code2, Database, Shield, Globe, Zap, Coffee, Headphones, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";

const SKILLS = [
  { icon: Code2, label: "Frontend", desc: "Next.js · React · Tailwind · Framer Motion", color: "#8b5cf6" },
  { icon: Database, label: "Backend", desc: "Node.js · Express · PostgreSQL · MongoDB", color: "#06b6d4" },
  { icon: Shield, label: "Smart Contracts", desc: "Solidity · Hardhat · Ethers.js · ERC-721A", color: "#2dd4bf" },
  { icon: Globe, label: "Infrastructure", desc: "Vercel · Alchemy · IPFS · Fireblocks · Stripe", color: "#a78bfa" },
];

const RANDOM_FACTS = [
  { icon: Coffee, text: "Fueled by black coffee and late-night debugging sessions" },
  { icon: Rocket, text: "First line of code at 14 — never looked back" },
  { icon: Headphones, text: "Codes best with lo-fi beats and zero distractions" },
  { icon: Zap, text: "Believes shipping fast beats shipping perfect, every time" },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-[2px] bg-gradient-to-r from-neon-violet to-transparent" />
            <span className="text-[12px] tracking-[4px] uppercase text-neon-violet font-mono">About</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-16 mb-16">
          {/* Left — 3 cols */}
          <div className="lg:col-span-3">
            <Reveal>
              <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.12] tracking-tight mb-7">
                Based in Nigeria.
                <br />
                <span className="text-neon-violet">Building for the world.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-white/40 text-[15px] leading-[1.9] font-light mb-5 max-w-[560px]">
                Blaise-Tech is a development studio that believes in one thing: shipping. Six production applications across e-commerce, DeFi, fintech, healthcare, logistics, and trading — each handling real money, real users, and real pressure.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-white/40 text-[15px] leading-[1.9] font-light mb-8 max-w-[560px]">
                Our stack bridges Web2 reliability with Web3 innovation. From Solidity smart contracts and on-chain protocols to full-stack MERN platforms with Stripe payments — we architect systems built to last, designed to scale, and engineered to convert.
              </p>
            </Reveal>

            {/* Random facts */}
            <Reveal delay={0.16}>
              <div className="grid grid-cols-2 gap-3">
                {RANDOM_FACTS.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01]">
                    <Icon size={16} className="text-neon-violet/50 mt-0.5 shrink-0" />
                    <span className="text-[12px] text-white/30 leading-[1.6]">{text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — 2 cols skills */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 content-start">
            {SKILLS.map(({ icon: Icon, label, desc, color }, i) => (
              <Reveal key={label} delay={i * 0.06}>
                <motion.div whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:border-opacity-20 transition-all duration-300 h-full">
                  <Icon size={20} style={{ color }} className="mb-3 opacity-80" />
                  <h4 className="font-display text-[14px] font-bold mb-1.5">{label}</h4>
                  <p className="text-[11px] text-white/30 leading-[1.7] font-mono">{desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
