"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Layers, Wallet, Activity, Ship, Code2, Smartphone } from "lucide-react";
import Reveal from "./ui/Reveal";

const SERVICES = [
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    desc: "Custom web applications built with Next.js, React, and Node.js. From landing pages to complex dashboards — responsive, fast, and production-ready.",
    color: "#8b5cf6",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    desc: "Online stores that convert. Stripe payments, inventory management, product catalogs, checkout flows, and order tracking — everything your store needs.",
    color: "#14b8a6",
  },
  {
    icon: Wallet,
    title: "Smart Contract Development",
    desc: "Solidity contracts on Ethereum, Base, and EVM chains. NFT marketplaces, DeFi protocols, token systems — auditable, gas-optimized, production-deployed.",
    color: "#06b6d4",
  },
  {
    icon: Activity,
    title: "Fintech & Trading Platforms",
    desc: "Banking dashboards, payment integrations, multi-rail transfer engines, real-time trading terminals with TradingView charts and WebSocket feeds.",
    color: "#2dd4bf",
  },
  {
    icon: Layers,
    title: "Healthcare & Enterprise Systems",
    desc: "Hospital management, patient portals, appointment booking, billing systems, medical records — complex workflows made simple and compliant.",
    color: "#3b82f6",
  },
  {
    icon: Ship,
    title: "Logistics & Tracking Platforms",
    desc: "Shipping management, real-time tracking with maps, booking flows, rate engines, multi-carrier integrations — 220+ lanes and counting.",
    color: "#dc2626",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 px-6 lg:px-12 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-violet/15 to-transparent" />

      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-neon-violet to-transparent" />
            <span className="text-[12px] tracking-[4px] uppercase text-neon-violet font-mono">What We Do</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-tight mb-4">
            Development Services
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[15px] text-white/30 mb-14 max-w-[520px] font-light leading-[1.8]">
            If you can imagine it, we can build it. From concept to deployment — every project gets the same level of precision engineering.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map(({ icon: Icon, title, desc, color }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-7 rounded-2xl bg-white/[0.012] border border-white/[0.04] hover:border-opacity-20 transition-all duration-300 h-full group"
                style={{ "--c": color }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: `${color}10`, border: `1px solid ${color}20` }}
                >
                  <Icon size={20} style={{ color }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-[16px] font-bold mb-2.5">{title}</h3>
                <p className="text-[13px] text-white/35 leading-[1.75]">{desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
