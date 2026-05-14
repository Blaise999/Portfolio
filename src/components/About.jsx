"use client";

import Image from "next/image";
import {
  Code2,
  Database,
  Shield,
  Globe,
  Zap,
  Coffee,
  Headphones,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";

const SKILLS = [
  {
    icon: Code2,
    label: "Frontend",
    desc: "Next.js · React · Tailwind · Framer Motion · Motion design",
    color: "#8b5cf6",
  },
  {
    icon: Database,
    label: "Backend",
    desc: "Node.js · Express · PostgreSQL · MongoDB · REST APIs",
    color: "#06b6d4",
  },
  {
    icon: Shield,
    label: "Smart Contracts",
    desc: "Solidity · Hardhat · Ethers.js · ERC-721A · EIP-2981",
    color: "#2dd4bf",
  },
  {
    icon: Globe,
    label: "Infrastructure",
    desc: "Vercel · Alchemy · IPFS · Fireblocks · Stripe · Paystack",
    color: "#a78bfa",
  },
];

const RANDOM_FACTS = [
  { icon: Coffee, text: "Fuelled by black coffee and late-night debugging sessions" },
  { icon: Rocket, text: "First line of code at 14 — never looked back" },
  { icon: Headphones, text: "Codes best with lo-fi beats and zero distractions" },
  { icon: Zap, text: "Believes shipping fast beats shipping perfect, every time" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-[2px] bg-gradient-to-r from-neon-violet to-transparent" />
            <span className="text-[11px] sm:text-[12px] tracking-[4px] uppercase text-neon-violet font-mono">
              About
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Left — 3 cols */}
          <div className="lg:col-span-3">
            {/* Subtle portrait — small, top-aligned, doesn't dominate */}
            <Reveal>
              <div className="flex items-start gap-4 mb-7">
                <motion.div
                  whileHover={{ scale: 1.04, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="relative shrink-0 group"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    <Image
                      src="/images/blaise-portrait.webp"
                      alt="Blaise — founder, Blaise-Tech"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover object-top grayscale-[0.15] group-hover:grayscale-0 transition-all duration-500"
                      unoptimized
                    />
                  </div>
                  {/* Tiny status dot */}
                  <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border-2 border-obsidian" />
                  </span>
                </motion.div>
                <div className="pt-1">
                  <span className="block text-[11px] sm:text-[12px] tracking-[3px] uppercase text-white/35 font-mono">
                    The founder
                  </span>
                  <span className="block font-display text-[15px] sm:text-[16px] font-bold text-white/90">
                    Blaise Idoko
                  </span>
                  <span className="block text-[11px] sm:text-[12px] text-white/30 font-mono">
                    Full-stack &amp; smart contract engineer
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-[clamp(26px,3.5vw,44px)] font-extrabold leading-[1.12] tracking-tight mb-7">
                Based in Nigeria.
                <br />
                <span className="text-neon-violet">Building for the world.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-white/45 text-[14px] sm:text-[15px] leading-[1.9] font-light mb-5 max-w-[560px]">
                Blaise-Tech is a one-developer studio with the output of a small
                agency. Eight production applications across hospitality, real
                estate, e-commerce, DeFi, fintech, healthcare, logistics, and
                trading — each handling real money, real users, and real
                pressure.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-white/45 text-[14px] sm:text-[15px] leading-[1.9] font-light mb-8 max-w-[560px]">
                The work is end-to-end: design system, motion language, frontend
                architecture, backend, smart contracts, payment integrations,
                deployment. No hand-offs. No agency layers. The same person who
                drew the hero animation wrote the Solidity contract underneath
                it. That's why the stack is coherent — and that's why it ships.
              </p>
            </Reveal>

            {/* Random facts */}
            <Reveal delay={0.16}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RANDOM_FACTS.map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] border border-white/[0.03]"
                  >
                    <Icon size={16} className="text-neon-violet/50 mt-0.5 shrink-0" />
                    <span className="text-[12px] text-white/35 leading-[1.6]">{text}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — 2 cols skills */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 content-start">
            {SKILLS.map(({ icon: Icon, label, desc, color }, i) => (
              <Reveal key={label} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:border-white/[0.15] transition-colors duration-300 h-full"
                >
                  <Icon size={20} style={{ color }} className="mb-3 opacity-80" />
                  <h4 className="font-display text-[13px] sm:text-[14px] font-bold mb-1.5">
                    {label}
                  </h4>
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
