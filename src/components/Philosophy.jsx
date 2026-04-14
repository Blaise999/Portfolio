"use client";
import Reveal from "./ui/Reveal";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 md:py-36 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-[2px] bg-gradient-to-r from-neon-teal to-transparent" />
            <span className="text-[12px] tracking-[4px] uppercase text-neon-teal font-mono">Philosophy</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-tight mb-6">
                Code is craft.
                <br />
                <span className="text-neon-teal">Architecture is art.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-white/40 text-[15px] leading-[1.9] font-light mb-8 max-w-[460px]">
                Every system we build follows three rules: perform under pressure, secure by default, and the interface must feel inevitable. If a user has to think about how something works — we&apos;ve already failed.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="space-y-3">
                {[
                  { n: "01", t: "Security First", d: "Every smart contract is a vault. Reentrancy guards, formal verification, EIP compliance." },
                  { n: "02", t: "Performance Obsessed", d: "Sub-100ms APIs. 60% gas optimization. Every millisecond is a user retained." },
                  { n: "03", t: "Ship > Perfect", d: "6 production apps shipped. Ship, learn, iterate. No amount of theory replaces production." },
                ].map(({ n, t, d }) => (
                  <div key={n} className="flex gap-4 p-4 rounded-xl bg-white/[0.012] border border-white/[0.04] hover:border-neon-teal/15 transition-colors duration-300">
                    <span className="text-neon-teal/40 font-mono text-[12px] mt-0.5">{n}</span>
                    <div>
                      <h4 className="font-display text-[14px] font-bold mb-1">{t}</h4>
                      <p className="text-[12px] text-white/30 leading-[1.65]">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Terminal */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-[#080c16] border border-white/[0.05] overflow-hidden sticky top-24">
              <div className="px-4 py-3 border-b border-white/[0.05] flex items-center gap-2">
                <div className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
                <div className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
                <div className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[10px] text-white/20 font-mono">blaise-tech ~/manifesto.js</span>
              </div>
              <div className="p-6 font-mono text-[12px] leading-[2.4] text-white/40 overflow-x-auto">
                <div><span className="text-neon-violet">const</span> <span className="text-neon-teal">manifesto</span> <span className="text-white/20">= {"{"}</span></div>
                <div className="pl-4"><span className="text-neon-violet-light">brand</span><span className="text-white/15">: </span><span className="text-amber-400">&quot;Blaise-Tech&quot;</span><span className="text-white/10">,</span></div>
                <div className="pl-4"><span className="text-neon-violet-light">origin</span><span className="text-white/15">: </span><span className="text-amber-400">&quot;Nigeria&quot;</span><span className="text-white/10">,</span></div>
                <div className="pl-4"><span className="text-neon-violet-light">tagline</span><span className="text-white/15">: </span><span className="text-amber-400">&quot;If you can imagine it, we can build it.&quot;</span><span className="text-white/10">,</span></div>
                <br />
                <div className="pl-4"><span className="text-neon-violet-light">belief</span><span className="text-white/15">: </span><span className="text-amber-400">&quot;Every smart contract is a vault. We write Solidity like savings depend on it — because they do.&quot;</span><span className="text-white/10">,</span></div>
                <br />
                <div className="pl-4"><span className="text-neon-violet-light">standard</span><span className="text-white/15">: </span><span className="text-amber-400">&quot;If the interface needs a tutorial, the interface failed.&quot;</span><span className="text-white/10">,</span></div>
                <br />
                <div className="pl-4"><span className="text-neon-violet-light">metric</span><span className="text-white/15">: </span><span className="text-amber-400">&quot;6 shipped products. $50K+ managed. 2,400+ store products. 220+ shipping lanes. Real money. Real users.&quot;</span><span className="text-white/10">,</span></div>
                <br />
                <div className="pl-4"><span className="text-neon-violet-light">next</span><span className="text-white/15">: </span><span className="text-amber-400">&quot;This is just the beginning.&quot;</span></div>
                <div><span className="text-white/20">{"}"};</span></div>
                <br />
                <div><span className="text-neon-violet">export default</span> <span className="text-neon-teal">manifesto</span><span className="text-white/10">;</span></div>
                <div className="mt-3 text-emerald-400 animate-pulse">▋</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
