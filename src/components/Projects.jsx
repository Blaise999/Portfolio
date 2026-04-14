"use client";
import Reveal from "./ui/Reveal";
import ProjectShowcase from "./ProjectShowcase";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="py-28 md:py-36 px-6 lg:px-12 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-neon-cyan to-transparent" />
            <span className="text-[12px] tracking-[4px] uppercase text-neon-cyan font-mono">Work</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.08] tracking-tight mb-3">
            Selected Projects
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[15px] text-white/30 mb-16 max-w-[480px] font-light leading-[1.8]">
            Production applications — real users, real transactions, real stakes. Each one pushed the ceiling of what I thought was possible.
          </p>
        </Reveal>
        <div className="space-y-10">
          {projects.map((p, i) => (
            <ProjectShowcase key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
