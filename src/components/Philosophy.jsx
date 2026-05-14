"use client";
import Reveal from "./ui/Reveal";
import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-36 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-[2px] bg-gradient-to-r from-neon-teal to-transparent" />
            <span className="text-[11px] sm:text-[12px] tracking-[4px] uppercase text-neon-teal font-mono">
              Philosophy &amp; Critique
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(24px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-tight mb-6">
                Code is craft.
                <br />
                <span className="text-neon-teal">Architecture is art.</span>
              </h2>
            </Reveal>

            {/* Critical positioning — honest, not promotional */}
            <Reveal delay={0.08}>
              <p className="text-white/45 text-[14px] sm:text-[15px] leading-[1.9] font-light mb-5 max-w-[480px]">
                Honestly assessed: Blaise ships at a velocity most teams of three
                can't match, and the work survives scrutiny. Eight production
                products in under two years, each in a different vertical, each
                with a real backend, real payments, and a real design system.
                That's not normal output.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-white/45 text-[14px] sm:text-[15px] leading-[1.9] font-light mb-8 max-w-[480px]">
                The differentiator isn't any single skill — it's the combination.
                Most developers who can write Solidity can't make a hotel site
                feel quiet. Most front-end engineers who can make a hotel site
                feel quiet can't ship a margin-trading engine. Blaise does both,
                in the same week, and the seams don't show.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="space-y-3">
                {[
                  {
                    n: "01",
                    t: "Security First",
                    d: "Every smart contract is a vault. Reentrancy guards, formal verification, EIP-2981 royalties enforced at contract level — not just frontend theatre.",
                  },
                  {
                    n: "02",
                    t: "Performance Obsessed",
                    d: "Sub-100ms APIs. 60% gas reduction via ERC-721A. WebSocket multiplexing for live price feeds. Every millisecond is a user retained.",
                  },
                  {
                    n: "03",
                    t: "Motion as Meaning",
                    d: "Animations are never decoration. Spring physics, scroll-driven parallax, magnetic interactions — every motion earns its place by making the product feel inevitable.",
                  },
                  {
                    n: "04",
                    t: "Ship &gt; Perfect",
                    d: "Eight production apps shipped. Ship, learn, iterate. No amount of theory replaces production. Theory loses to a live URL every time.",
                  },
                ].map(({ n, t, d }) => (
                  <motion.div
                    key={n}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="flex gap-4 p-4 rounded-xl bg-white/[0.012] border border-white/[0.04] hover:border-neon-teal/20 transition-colors duration-300"
                  >
                    <span className="text-neon-teal/40 font-mono text-[12px] mt-0.5">{n}</span>
                    <div>
                      <h4 className="font-display text-[13px] sm:text-[14px] font-bold mb-1">{t}</h4>
                      <p
                        className="text-[12px] text-white/35 leading-[1.65]"
                        dangerouslySetInnerHTML={{ __html: d }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Terminal */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-[#080c16] border border-white/[0.05] overflow-hidden lg:sticky lg:top-24">
              <div className="px-4 py-3 border-b border-white/[0.05] flex items-center gap-2">
                <div className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
                <div className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
                <div className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[10px] text-white/20 font-mono truncate">
                  blaise-tech ~/manifesto.js
                </span>
              </div>
              <div className="p-5 sm:p-6 font-mono text-[11px] sm:text-[12px] leading-[2.2] text-white/40 overflow-x-auto">
                <div>
                  <span className="text-neon-violet">const</span>{" "}
                  <span className="text-neon-teal">manifesto</span>{" "}
                  <span className="text-white/20">= {"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-neon-violet-light">brand</span>
                  <span className="text-white/15">: </span>
                  <span className="text-amber-400">&quot;Blaise-Tech&quot;</span>
                  <span className="text-white/10">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-neon-violet-light">origin</span>
                  <span className="text-white/15">: </span>
                  <span className="text-amber-400">&quot;Nigeria&quot;</span>
                  <span className="text-white/10">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-neon-violet-light">tagline</span>
                  <span className="text-white/15">: </span>
                  <span className="text-amber-400">
                    &quot;If you can imagine it, we can build it.&quot;
                  </span>
                  <span className="text-white/10">,</span>
                </div>
                <br />
                <div className="pl-4">
                  <span className="text-neon-violet-light">belief</span>
                  <span className="text-white/15">: </span>
                  <span className="text-amber-400">
                    &quot;Every contract is a vault. We write Solidity like savings depend on it — because they do.&quot;
                  </span>
                  <span className="text-white/10">,</span>
                </div>
                <br />
                <div className="pl-4">
                  <span className="text-neon-violet-light">motion</span>
                  <span className="text-white/15">: </span>
                  <span className="text-amber-400">
                    &quot;Framer Motion isn&apos;t decoration. It&apos;s the seam between intent and inevitability.&quot;
                  </span>
                  <span className="text-white/10">,</span>
                </div>
                <br />
                <div className="pl-4">
                  <span className="text-neon-violet-light">standard</span>
                  <span className="text-white/15">: </span>
                  <span className="text-amber-400">
                    &quot;If the interface needs a tutorial, the interface failed.&quot;
                  </span>
                  <span className="text-white/10">,</span>
                </div>
                <br />
                <div className="pl-4">
                  <span className="text-neon-violet-light">metric</span>
                  <span className="text-white/15">: </span>
                  <span className="text-amber-400">
                    &quot;8 shipped products. 12 rooms reserved per month. $50K+ managed. 2,400+ store products. 220+ shipping lanes.&quot;
                  </span>
                  <span className="text-white/10">,</span>
                </div>
                <br />
                <div className="pl-4">
                  <span className="text-neon-violet-light">next</span>
                  <span className="text-white/15">: </span>
                  <span className="text-amber-400">&quot;This is just the beginning.&quot;</span>
                </div>
                <div>
                  <span className="text-white/20">{"}"};</span>
                </div>
                <br />
                <div>
                  <span className="text-neon-violet">export default</span>{" "}
                  <span className="text-neon-teal">manifesto</span>
                  <span className="text-white/10">;</span>
                </div>
                <div className="mt-3 text-emerald-400 animate-pulse">▋</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
