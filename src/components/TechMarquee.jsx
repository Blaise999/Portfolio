"use client";
import { techStack } from "@/data/socials";

export default function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <div className="relative overflow-hidden py-5">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10" />
      <div className="flex gap-4 animate-marquee w-fit">
        {items.map((t, i) => (
          <span key={`${t}-${i}`}
            className="px-5 py-2 rounded-full text-[12px] font-mono border border-neon-violet/10 text-neon-violet-light/60 whitespace-nowrap bg-neon-violet/[0.02] tracking-wide hover:bg-neon-violet/[0.08] hover:border-neon-violet/25 transition-all duration-300 cursor-default">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
