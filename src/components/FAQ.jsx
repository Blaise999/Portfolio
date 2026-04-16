"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Reveal from "./ui/Reveal";

const FAQS = [
  {
    q: "How long does it take to build a project?",
    a: "It depends on complexity. A standard website or landing page takes 1–3 weeks. More complex platforms — e-commerce stores, fintech dashboards, trading terminals — typically take 4–10 weeks. Smart contract development with audit-ready code adds 2–4 weeks. We'll give you a realistic timeline before we start.",
  },
  {
    q: "What's your pricing like?",
    a: "Every project is different, so pricing is custom. We factor in complexity, number of screens, integrations (Stripe, Plaid, blockchain), and timeline. We work with startups and established businesses alike — reach out on WhatsApp or email for a free quote with no obligations.",
  },
  {
    q: "What types of projects do you build?",
    a: "Everything from e-commerce stores (Lumina) and NFT marketplaces (AuroraNFT) to digital banking platforms (Horizon Finance), multi-asset trading terminals (NovaTrade), hospital management systems (Evermore), and international logistics platforms (GlobalEdge). If it's a web application, we build it.",
  },
  {
    q: "Do you build smart contracts?",
    a: "Yes — Solidity smart contracts on Ethereum, Base, and other EVM-compatible chains. We've deployed production contracts handling real mints, real royalties, and real ETH. Our contracts use ERC-721A for gas optimization, EIP-2981 for royalty enforcement, and EIP-4337 for account abstraction.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just a clear idea of what you want to build. Share your vision, any design references you like, and the core features you need. If you have wireframes, Figma files, or a brand guide — great. If not, we'll help you figure it all out. We handle the rest from architecture to deployment.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Every project comes with 30 days of free technical support after launch — bug fixes, small adjustments, and deployment help. After that, we offer ongoing maintenance plans if you need continued support, feature updates, or monitoring.",
  },
  {
    q: "What technologies do you use?",
    a: "Our core stack is Next.js, React, Node.js, TypeScript, and Tailwind CSS for web. MongoDB and PostgreSQL for databases. Solidity, Hardhat, and Ethers.js for blockchain. Stripe, Plaid, and Fireblocks for payments. Vercel for deployment. We pick the right tool for each job — no dogma.",
  },
  {
    q: "Can you work with my existing team or codebase?",
    a: "Absolutely. We can integrate into existing projects, contribute to existing codebases, or build new features on top of what you already have. We're comfortable with Git workflows, code reviews, and collaborative development.",
  },
];

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div
      className={`border rounded-2xl transition-all duration-300 ${
        isOpen ? "border-neon-violet/20 bg-neon-violet/[0.03]" : "border-white/[0.05] bg-white/[0.008]"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className={`font-display text-[15px] font-semibold pr-4 transition-colors duration-300 ${isOpen ? "text-white" : "text-white/70"}`}>
          {q}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
          isOpen ? "bg-neon-violet border-neon-violet text-white" : "bg-white/[0.03] border-white/[0.08] text-white/40"
        }`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-[14px] text-white/40 leading-[1.8] font-light">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-28 md:py-36 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left heading */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-neon-teal to-transparent" />
                <span className="text-[12px] tracking-[4px] uppercase text-neon-teal font-mono">FAQ</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.12] tracking-tight mb-5">
                What Our Clients
                <br />
                <span className="text-neon-teal">Want to Know</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[14px] text-white/30 leading-[1.8] font-light mb-8 max-w-[360px]">
                Got questions? We&apos;ve got answers. If you don&apos;t see yours here, reach out on WhatsApp — we respond fast.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href="https://wa.me/2349027475360"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-[13px] font-semibold hover:bg-[#25D366]/20 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </Reveal>
          </div>

          {/* Right accordions */}
          <div className="lg:col-span-3 space-y-3">
            {FAQS.map((faq, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <FAQItem
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
